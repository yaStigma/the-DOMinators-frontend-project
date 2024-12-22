// import {
//   DayItem,
//   DayNumber,
//   DayPercentage,
//   DaysList,
//   MonthAndYear,
//   MonthSelector,
//   MonthsHead,
//   MonthBackButton,
//   MonthNextButton,
//   PaginationWrap,
// } from './MonthsStatsTable.styled';
// import { useEffect, useState } from 'react';
// import { DaysGeneralStats } from '../DaysGeneralStats/DaysGeneralStats';
// import SpriteIcons from './sprite.svg';
// import axios from 'axios';
// import { useSelector } from 'react-redux';
// import { selectToken } from '../../redux/auth/selectors';
// import toast from 'react-hot-toast';

// const getMonthName = monthIndex => {
//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ];
//   return months[monthIndex];
// };

// export const { MonthStatsTable }  = () => {
//   const [isStatsOpen, setIsStatsOpen] = useState(false);
//   const [selectedDay, setSelectedDay] = useState(null);
//   const [daysArray, setDaysArray] = useState([]);
//   const userToken = useSelector(selectToken);
//   const [isLoading, setIsLoading] = useState(false);
//   const [statsPosition, setStatsPosition] = useState({ top: 0, right: 0 });
//   const [currentDateInfo] = useState({
//     currentMonthIndex: new Date().getMonth(),
//     currentYear: new Date().getFullYear(),
//     currentDate: new Date().getDate(),
//   });
//   const { currentMonthIndex, currentYear, currentDate } = currentDateInfo;
//   const [selectedMonthIndex, setSelectedMonthIndex] =
//     useState(currentMonthIndex);
//   const [selectedYear, setSelectedYear] = useState(currentYear);

//   const initialDaysArray = (month, year) => {
//     const fullDaysArray = Array.from(
//       { length: new Date(year, month + 1, 0).getDate() },
//       (_, index) => {
//         return {
//           month: getMonthName(month),
//           date: index + 1,
//           totalProcent: 0,
//           numOfWaterRecords: 0,
//         };
//       }
//     );
//     return fullDaysArray;
//   };

//   const handleMonthChange = direction => {
//     const totalMonths = 12;
//     const newMonthIndex =
//       (selectedMonthIndex + direction + totalMonths) % totalMonths;
//     if (direction === -1 && newMonthIndex === 11) {
//       setSelectedYear(selectedYear - 1);
//     } else if (direction === 1 && newMonthIndex === 0) {
//       setSelectedYear(selectedYear + 1);
//     }
//     setSelectedMonthIndex(newMonthIndex);
//     if (
//       direction === 1 &&
//       newMonthIndex > currentMonthIndex &&
//       currentYear === selectedYear
//     ) {
//       setSelectedYear(currentYear);
//       setSelectedMonthIndex(currentMonthIndex);
//       return;
//     }
//   };

//   useEffect(() => {
//     const controller = new AbortController();
//     const selectedMonthName = getMonthName(selectedMonthIndex);
//     const initialArray = initialDaysArray(selectedMonthIndex, selectedYear);
//     const fetchDaysArray = async (monthName, initialArray, controller) => {
//       const config = {
//         headers: {
//           Authorization: `Bearer ${userToken}`,
//         },
//         signal: controller.signal,
//       };
//       try {
//         setIsLoading(true);
//         const response = await axios.get(
//           `https://water-tracker-3v20.onrender.com/consumed-water/month/${monthName}`,
//           config
//         );
//         const data = response.data;
//         const fetchedArray = initialArray.map((day, i) => {
//           const fetchedDay = data.find(item => item.date === day.date);
//           return fetchedDay || day;
//         });
//         setDaysArray(fetchedArray);
//         setIsLoading(false);
//       } catch (error) {
//         if (error.code === 'ERR_CANCELED') {
//           return;
//         } else {
//           setIsLoading(false);
//           toast.error('Oops! Something went wrong! Please try again!', {
//             duration: 1000,
//           });
//           setDaysArray(initialArray);
//         }
//       }
//     };
//     fetchDaysArray(selectedMonthName, initialArray, controller);
//     return () => {
//       controller.abort();
//     };
//   }, [selectedMonthIndex, selectedYear, userToken]);

//   useEffect(() => {
//     const handleClickOutside = event => {
//       if (
//         isStatsOpen &&
//         event.target.id !== 'day-stats' &&
//         event.target.id !== 'day-number'
//       ) {
//         handleCloseStats();
//       }
//     };
//     if (isStatsOpen) {
//       document.addEventListener('click', handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, [isStatsOpen]);

//   const handleOpenStats = (clickedDay, event) => {
//     if (selectedDay && clickedDay.date === selectedDay.date) {
//       setIsStatsOpen(false);
//       setSelectedDay(null);
//     } else {
//       handleCloseStats();
//       setSelectedDay(clickedDay);
//       calculateStatsPosition(event);
//       setIsStatsOpen(true);
//     }
//   };

//   const handleCloseStats = () => {
//     setIsStatsOpen(false);
//     setSelectedDay(null);
//   };

//   const calculateStatsPosition = event => {
//     const dayElement = event.currentTarget;
//     const dayRect = dayElement.getBoundingClientRect();
//     const top = dayRect.top + window.scrollY - 1;
//     const left =
//       dayRect.left > 292
//         ? dayRect.left + dayRect.width / 2
//         : dayRect.left + 292 + dayRect.width / 2;
//     setStatsPosition({ top, left });
//   };

//   const borderColor = percent => {
//     if (percent === 100) {
//       return '1px solid #32CD32';
//     }
//     if (percent > 0 && percent < 100) {
//       return '1px solid #FF9D43';
//     }
//     return;
//   };

//   return (
//     <>
//       <PaginationWrap>
//         <MonthsHead>Month</MonthsHead>
//         <MonthSelector>
//           <MonthBackButton
//             onClick={() => {
//               handleMonthChange(-1);
//             }}
//           >
//             <svg width="14px" height="14px">
//               <use xlinkHref={`${SpriteIcons}#icon-chevron-double-up`} />
//             </svg>
//           </MonthBackButton>
//           <MonthAndYear>
//             {getMonthName(selectedMonthIndex)}, {selectedYear}
//           </MonthAndYear>
//           <MonthNextButton
//             onClick={() => {
//               handleMonthChange(1);
//             }}
//           >
//             <svg width="14px" height="14px">
//               <use xlinkHref={`${SpriteIcons}#icon-chevron-double-up`} />
//             </svg>
//           </MonthNextButton>
//         </MonthSelector>
//       </PaginationWrap>
//       {isLoading ? (
//         < isMonthTable />
//       ) : (
//         <DaysList>
//           {daysArray &&
//             daysArray.map(day => {
//               return (
//                 <DayItem key={day.date}>
//                   <DayNumber
//                     id="day-number"
//                     onClick={event => handleOpenStats(day, event)}
//                     style={{
//                       border:
//                         day.date === currentDate &&
//                         currentMonthIndex === selectedMonthIndex &&
//                         day.totalProcent > 0
//                           ? '1px solid #407BFF'
//                           : borderColor(day.totalProcent),
//                       backgroundColor:
//                         day.date === currentDate &&
//                         currentMonthIndex === selectedMonthIndex
//                           ? '#9EBBFF'
//                           : '#FFFFFF',
//                       color:
//                         day.date === currentDate &&
//                         currentMonthIndex === selectedMonthIndex &&
//                         '#ffffff',
//                     }}
//                   >
//                     {day.date}
//                   </DayNumber>
//                   <DayPercentage>
//                     {day.totalProcent === 0 ? '-' : `${day.totalProcent}%`}
//                   </DayPercentage>
//                 </DayItem>
//               );
//             })}
//         </DaysList>
//       )}
//       {isStatsOpen && (
//         <DaysGeneralStats
//           closeStats={handleCloseStats}
//           isOpen={isStatsOpen}
//           selectedDay={selectedDay}
//           statsPosition={statsPosition}
//         />
//       )}
//     </>
//   );
// };
