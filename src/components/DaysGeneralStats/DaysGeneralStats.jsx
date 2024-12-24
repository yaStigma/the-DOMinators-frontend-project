import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { selectWaterRate } from '../../redux/water/selectors';
import SpriteIcons from '../MonthStatsTable/sprite.svg';
import styles from './DaysGeneralStats.module.css';
import { fetchUser } from '../../redux/user/operations'; // Загружаем данные пользователя
import { selectUserInfo } from '../../redux/user/selectors'; // Выбор данных пользователя из Redux

export const DaysGeneralStats = ({
  isStatsOpen,
  closeStats,
  selectedDay,
  statsPosition,
}) => {
  const [modalPosition, setModalPosition] = useState(statsPosition);
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const dispatch = useDispatch();
 useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
 const userInfo = useSelector(selectUserInfo);
  const data = userInfo?.data || {}; // Если данных нет, используем пустой объект

  // Извлекаем норму воды из данных пользователя
  const normaValue = data.daylyNorm ? data.daylyNorm / 1000 : 2.0; // В литрах

  useEffect(() => {
    // Update the modal position when statsPosition changes
    setModalPosition(statsPosition);
  }, [statsPosition]);

  const handleDragStart = (event) => {
    setDragging(true);
    setDragStart({ x: event.clientX, y: event.clientY });
  };

  const handleDrag = (event) => {
    if (!dragging) return;

    const deltaX = event.clientX - dragStart.x;
    const deltaY = event.clientY - dragStart.y;

    setModalPosition((prevPosition) => ({
      top: prevPosition.top + deltaY,
      left: prevPosition.left + deltaX,
    }));

    setDragStart({ x: event.clientX, y: event.clientY });
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  const { top, left } = modalPosition;

  const statsStyle = {
    top: `${top - 45}px`,
    left: `${left + 10}px`,
    transform: 'translate(-50%, -100%)',
    zIndex: 10,
  };

  if (!selectedDay) {
    return null;
  }

  return (
    <div
      className={`${styles.dayStatsWrap} ${isStatsOpen ? styles.open : ''}`}
      style={statsStyle}
      onMouseDown={handleDragStart}
      onMouseMove={handleDrag}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd} // Ensure dragging stops if mouse leaves the modal
    >
      <div className={styles.header}>
        <p className={styles.date}>
          {selectedDay.date}, {selectedDay.month}
        </p>
        <button className={styles.daysCloseButton} onClick={closeStats}>
          <svg
            width="16px"
            height="16px"
            stroke="currentColor"
            fill="currentColor"
          >
            <use xlinkHref={`${SpriteIcons}#icon-close`} />
          </svg>
        </button>
      </div>
      <div className={styles.statRow}>
        <p className={styles.statLabel}>Daily Norma:</p>
        <p className={styles.statValue}>{normaValue} L</p>
      </div>
      <div className={styles.statRow}>
        <p className={styles.statLabel}>Fulfillment of the daily norm:</p>
        <p className={styles.statValue}>{selectedDay.percentageOfGoal}%</p>
      </div>
      <div className={styles.statRow}>
        <p className={styles.statLabel}>How many servings of water:</p>
        <p className={styles.statValue}>{selectedDay.recordsCount}</p>
      </div>
    </div>
  );
};


// import {
//   Date,
//   DaysCloseButton,
//   DayStats,
//   DayStatsHead,
//   DayStatsWrap,
// } from './DaysGeneralStats.styled';
// import SpriteIcons from '../MonthStatsTable/sprite.svg';
// import { useSelector } from 'react-redux';
// import { selectWaterRate } from '../../redux/water/selectors';

// export const DaysGeneralStats = ({
//   isStatsOpen,
//   closeStats,
//   selectedDay,
//   statsPosition,
// }) => {
//   const dailyNormaValue = useSelector(selectWaterRate);
//   if (!selectedDay) {
//     return null;
//   }
//   const { top, left } = statsPosition;
//   const statsStyle = {
//     top: `${top}px`,
//     left: window.innerWidth >= 768 ? `${left}px` : '50%',
//     transform:
//       window.innerWidth >= 768
//         ? 'translate(-100%, -100%)'
//         : 'translate(-50%, -100%)',
//     position: 'absolute',
//   };

//   return (
//     <DayStatsWrap
//       id="day-stats"
//       isOpen={isStatsOpen}
//       onClose={closeStats}
//       style={statsStyle}
//     >
//       <div
//         id="day-stats"
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           marginBottom: '18px',
//         }}
//       >
//         <Date id="day-stats">
//           {selectedDay.date}, {selectedDay.month}
//         </Date>
//         <DaysCloseButton onClick={closeStats}>
//           <svg
//             width="16px"
//             height="16px"
//             stroke="currentColor"
//             fill="currentColor"
//           >
//             <use xlinkHref={`${SpriteIcons}#icon-close`} />
//           </svg>
//         </DaysCloseButton>
//       </div>
//       <div
//         id="day-stats"
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '6px',
//           marginBottom: '20px',
//         }}
//       >
//         <DayStatsHead id="day-stats">Daily Norma:</DayStatsHead>
//         <DayStats id="day-stats">{dailyNormaValue / 1000} L</DayStats>
//       </div>
//       <div
//         id="day-stats"
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '6px',
//           marginBottom: '20px',
//         }}
//       >
//         <DayStatsHead id="day-stats">
//           Fulfillment of the daily norm:
//         </DayStatsHead>
//         <DayStats id="day-stats">{selectedDay.totalProcent}%</DayStats>
//       </div>
//       <div
//         id="day-stats"
//         style={{
//           display: 'flex',
//           gap: '6px',
//           alignItems: 'center',
//         }}
//       >
//         <DayStatsHead id="day-stats">How many servings of water:</DayStatsHead>
//         <DayStats id="day-stats">{selectedDay.numOfWaterRecords}</DayStats>
//       </div>
//     </DayStatsWrap>
//   );
// };
