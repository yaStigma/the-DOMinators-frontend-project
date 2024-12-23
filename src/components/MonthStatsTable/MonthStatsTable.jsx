import { useEffect, useState, useMemo, useCallback } from 'react';
import { DaysGeneralStats } from '../DaysGeneralStats/DaysGeneralStats';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDaysArray } from '../../redux/water/operations';
import { selectToken } from '../../redux/auth/selectors';
// import toast from 'react-hot-toast';
import SpriteIcons from './sprite.svg';
import styles from './MonthStatsTable.module.css';
import Loader from 'components/Loader/Loader';

export default function MonthStatsTable() {
  const getMonthName = useCallback((monthIndex) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    return months[monthIndex];
  }, []);
  
  const parseDate = (dateStr) => {
    if (!dateStr || typeof dateStr !== 'string') return null; // Проверяем входные данные
    const [day, month] = dateStr.split(', ');
    if (!day || !month) return null;
  
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    const monthIndex = months.indexOf(month.trim());
    if (monthIndex === -1) return null;
  
    const parsedDay = parseInt(day.trim());
    if (isNaN(parsedDay)) return null;
  
    return new Date(new Date().getFullYear(), monthIndex, parsedDay);
  };

  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [daysArray, setDaysArray] = useState([]);
  const userToken = useSelector(selectToken);
  const [isLoading, setIsLoading] = useState(false);
  const [statsPosition, setStatsPosition] = useState({ top: 0, right: 0 });
  const [currentDateInfo] = useState({
    currentMonthIndex: new Date().getMonth(),
    currentYear: new Date().getFullYear(),
    currentDate: new Date().getDate(),
  });

  const { currentMonthIndex, currentYear, currentDate } = currentDateInfo;
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(currentMonthIndex);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const monthName = useMemo(() => getMonthName(selectedMonthIndex), [selectedMonthIndex, getMonthName]);
  const initialDaysArray = useMemo(() => {
    return Array.from(
      { length: new Date(selectedYear, selectedMonthIndex + 1, 0).getDate() },
      (_, index) => ({
        month: monthName,
        date: index + 1,
        percentageOfGoal: 0, 
        recordsCount: 0,
      })
    );
  }, [selectedMonthIndex, selectedYear, monthName]);  

  const handleMonthChange = (direction) => {
    const totalMonths = 12;
    const newMonthIndex =
      (selectedMonthIndex + direction + totalMonths) % totalMonths;
    setSelectedYear(
      newMonthIndex === 11 && direction === -1
        ? selectedYear - 1
        : newMonthIndex === 0 && direction === 1
        ? selectedYear + 1
        : selectedYear
    );
    setSelectedMonthIndex(newMonthIndex);
  };

  const dispatch = useDispatch();
  
  
  useEffect(() => {
    if (!userToken) return;
  
    setIsLoading(true);
    const selectedMonthName = monthName;
  
    dispatch(fetchDaysArray({
      monthName: selectedMonthName,
      year: selectedYear,
      accessToken: userToken,
    }))
      .unwrap()
      .then((response) => {
        if (response && Array.isArray(response.data)) {
          const newDataMap = response.data.reduce((acc, item) => {
            const itemDate = parseDate(item.date);
            if (itemDate) {
              const key = itemDate.toISOString().split('T')[0];
              acc[key] = {
                percentageOfGoal: parseInt(item.percentageOfGoal) || 0,
                recordsCount: item.recordsCount || 0,
              };
            }
            return acc;
          }, {});
  
          const newUpdatedDaysArray = initialDaysArray.map((day) => {
            const dayDate = new Date(selectedYear, selectedMonthIndex, day.date);
            const key = dayDate.toISOString().split('T')[0];
            const matchingItem = newDataMap[key];
  
            if (matchingItem) {
              return {
                ...day,
                percentageOfGoal: matchingItem.percentageOfGoal,
                recordsCount: matchingItem.recordsCount,
              };
            }
            return day;
          });
          setDaysArray(newUpdatedDaysArray); // Обновляем состояние с данными для рендера
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [userToken, selectedMonthIndex, selectedYear, dispatch, initialDaysArray, monthName]);

  const handleOpenStats = (day, event) => {
    const rect = event.currentTarget.getBoundingClientRect(); // Используем currentTarget, чтобы избежать проблем с дочерними элементами
    setStatsPosition({
      top: rect.top + window.scrollY,
      left: rect.left + rect.width / 2, // По центру
    });
    setSelectedDay(day);
    setIsStatsOpen(true);
  };

  const handleCloseStats = () => {
    setIsStatsOpen(false);
    setSelectedDay(null); // Скидываем выбранный день
  };

  const borderClass = (percentage) => {
    if (!percentage || percentage === 0) return 'neutral';
    if (percentage > 50) return 'high';
    return 'low';
  };
  
  return (
    <>
      <div className={styles.paginationWrap}>
        <h2 className={styles.monthsHead}>Month</h2>
        <div className={styles.monthSelector}>
          <button
            className={`${styles.monthButton} ${styles.monthBackButton}`}
            onClick={() => handleMonthChange(-1)}
          >
            <svg width="14px" height="14px">
              <use href={`${SpriteIcons}#icon-chevron-double-up`} />
            </svg>
          </button>
          <p className={styles.monthAndYear}>
            {monthName}, {selectedYear}
          </p>
          <button
  className={`${styles.monthButton} ${styles.monthNextButton}`}
  onClick={() => handleMonthChange(1)}
  disabled={selectedMonthIndex === currentMonthIndex && selectedYear === currentYear}
>
  <svg width="14px" height="14px">
    <use href={`${SpriteIcons}#icon-chevron-double-up`} />
  </svg>
</button>
        </div>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <ul className={styles.daysList}>
  {daysArray?.map((day) => {
    const isSelected =
      day.date === currentDate && currentMonthIndex === selectedMonthIndex;

    return (
      <li key={day.date} className={styles.dayItem}>
        <p
          id="day-number"
          onClick={(event) => handleOpenStats(day, event)}
          className={`${styles.dayNumber} ${styles[`dayNumber--${borderClass(day.percentageOfGoal)}`]} ${
            isSelected && day.percentageOfGoal > 0 ? styles.dayNumberSelected : ''
          }`}
        >
          {day.date}
        </p>
        <p className={styles.dayPercentage}>
        {day.percentageOfGoal ? `${day.percentageOfGoal + "%"}` : '-'}
</p>
      </li>
    );
  })}
</ul>
      )}

{isStatsOpen && (
  <DaysGeneralStats
    closeStats={handleCloseStats}
    isOpen={isStatsOpen} // Переконайтесь, що передаєте цей параметр
    selectedDay={selectedDay}
    statsPosition={statsPosition}
  />
)}
    </>
  );
}

// import { useEffect, useState } from 'react';
// import { DaysGeneralStats } from '../DaysGeneralStats/DaysGeneralStats';
// import axios from 'axios';
// import { useSelector } from 'react-redux';
// import { selectToken } from '../../redux/auth/selectors';
// import toast from 'react-hot-toast';
// import SpriteIcons from './sprite.svg';
// import styles from './MonthStatsTable.module.css';
// import Loader from 'components/Loader/Loader';


// export default function MonthStatsTable() {
//     const getMonthName = (monthIndex) => {
//       const months = [
//         'January', 'February', 'March', 'April', 'May', 'June',
//         'July', 'August', 'September', 'October', 'November', 'December',
//       ];
//       return months[monthIndex];
//     };
  
//     const [isStatsOpen, setIsStatsOpen] = useState(false);
//     const [selectedDay, setSelectedDay] = useState(null);
//     const [daysArray, setDaysArray] = useState([]);
//     const userToken = useSelector(selectToken);
//     const [isLoading, setIsLoading] = useState(false);
//     const [statsPosition, setStatsPosition] = useState({ top: 0, right: 0 });
//     const [currentDateInfo] = useState({
//       currentMonthIndex: new Date().getMonth(),
//       currentYear: new Date().getFullYear(),
//       currentDate: new Date().getDate(),
//     });
  
//     const { currentMonthIndex, currentYear, currentDate } = currentDateInfo;
//     const [selectedMonthIndex, setSelectedMonthIndex] = useState(currentMonthIndex);
//     const [selectedYear, setSelectedYear] = useState(currentYear);
  
//     const initialDaysArray = (month, year) =>
//       Array.from(
//         { length: new Date(year, month + 1, 0).getDate() },
//         (_, index) => ({
//           month: getMonthName(month),
//           date: index + 1,
//           totalProcent: 0,
//           numOfWaterRecords: 0,
//         })
//       );
  
//     const handleMonthChange = (direction) => {
//       const totalMonths = 12;
//       const newMonthIndex =
//         (selectedMonthIndex + direction + totalMonths) % totalMonths;
//       setSelectedYear(
//         newMonthIndex === 11 && direction === -1
//           ? selectedYear - 1
//           : newMonthIndex === 0 && direction === 1
//           ? selectedYear + 1
//           : selectedYear
//       );
//       setSelectedMonthIndex(newMonthIndex);
//     };
  
//     useEffect(() => {
//       if (!userToken) return;
//       const controller = new AbortController();
//       const selectedMonthName = getMonthName(selectedMonthIndex);
//       const initialArray = initialDaysArray(selectedMonthIndex, selectedYear);
  
//       const fetchDaysArray = async () => {
//         try {
//           setIsLoading(true);
//           const response = await axios.get(
//             `https://water-tracker-3v20.onrender.com/consumed-water/month/${selectedMonthName}`,
//             {
//               headers: { Authorization: `Bearer ${userToken}` },
//               signal: controller.signal,
//             }
//           );
//           setDaysArray(
//             initialArray.map((day) =>
//               response.data.find((item) => item.date === day.date) || day
//             )
//           );
//         } catch (error) {
//           if (error.code !== 'ERR_CANCELED') {
//             toast.error('Oops! Something went wrong! Please try again!', {
//               duration: 1000,
//             });
//           }
//           setDaysArray(initialArray);
//         } finally {
//           setIsLoading(false);
//         }
//       };
  
//       fetchDaysArray();
//       return () => controller.abort();
//     }, [selectedMonthIndex, selectedYear, userToken]);
  
//     const handleOpenStats = (day, event) => {
//       const rect = event.target.getBoundingClientRect();
//       setStatsPosition({
//         top: rect.top + window.scrollY,
//         left: rect.left + rect.width / 2, // Визначаємо середину елемента
//       });
//       setSelectedDay(day);
//       setIsStatsOpen(true);
//     };
    
//     const handleCloseStats = () => {
//       setIsStatsOpen(false);
//       setSelectedDay(null); // Скидаємо вибраний день
//     };
  
//     const borderColor = (percentage) => {
//       if (percentage === 0) return '1px solid transparent';
//       if (percentage > 50) return '1px solid green';
//       return '1px solid red';
//     };
  
//     return (
//       <>
//         <h2>Calendar</h2>
//         <div className={styles.paginationWrap}>
//           <h2 className={styles.monthsHead}>Month</h2>
//           <div className={styles.monthSelector}>
//             <button
//               className={`${styles.monthButton} ${styles.monthBackButton}`}
//               onClick={() => handleMonthChange(-1)}
//             >
//               <svg width="14px" height="14px">
//                 <use href={`${SpriteIcons}#icon-chevron-double-up`} />
//               </svg>
//             </button>
//             <p className={styles.monthAndYear}>
//               {getMonthName(selectedMonthIndex)}, {selectedYear}
//             </p>
//             <button
//               className={`${styles.monthButton} ${styles.monthNextButton}`}
//               onClick={() => handleMonthChange(1)}
//             >
//               <svg width="14px" height="14px">
//                 <use href={`${SpriteIcons}#icon-chevron-double-up`} />
//               </svg>
//             </button>
//           </div>
//         </div>
  
//         {isLoading ? (
//           <Loader/>
//         ) : (
//           <ul className={styles.daysList}>
//             {daysArray?.map((day) => {
//               const isSelected =
//                 day.date === currentDate &&
//                 currentMonthIndex === selectedMonthIndex;
  
//               return (
//                 <li key={day.date} className={styles.dayItem}>
//                   <p
//                     id="day-number"
//                     onClick={(event) => handleOpenStats(day, event)}
//                     className={`${styles.dayNumber} ${
//                       isSelected && day.totalProcent > 0
//                         ? styles.dayNumberSelected
//                         : ''
//                     }`}
//                     style={{
//                       border: isSelected
//                         ? '1px solid #407BFF'
//                         : borderColor(day.totalProcent),
//                     }}
//                   >
//                     {day.date}
//                   </p>
//                   <p className={styles.dayPercentage}>
//                     {day.totalProcent === 0 ? '-' : `${day.totalProcent}%`}
//                   </p>
//                 </li>
//               );
//             })}
//           </ul>
//         )}
  
//         {isStatsOpen && (
//           <DaysGeneralStats
//             closeStats={handleCloseStats}
//             isOpen={isStatsOpen}
//             selectedDay={selectedDay}
//             statsPosition={statsPosition}
//           />
//         )}
//       </>
//     );
//   }