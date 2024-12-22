import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectWaterRate } from '../../redux/water/selectors';
import SpriteIcons from '../MonthStatsTable/sprite.svg';
import styles from './DaysGeneralStats.module.css';

export const DaysGeneralStats = ({
  isStatsOpen,
  closeStats,
  selectedDay,
  statsPosition,
}) => {
  const dailyNormaValue = useSelector(selectWaterRate);
  console.log({ selectedDay, statsPosition, isStatsOpen });
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isStatsOpen &&
        !event.target.closest(`.${styles.dayStatsWrap}`)
      ) {
        closeStats();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isStatsOpen, closeStats]);

  if (!selectedDay) {
    return null;
  }

  const { top, left } = statsPosition;

  const statsStyle = {
    top: `${top}px`,
    left: window.innerWidth >= 768 ? `${left}px` : '50%',
    transform:
      window.innerWidth >= 768
        ? 'translate(-50%, -100%)'
        : 'translate(-50%, -50%)',
  };

  return (
    <div
      className={`${styles.dayStatsWrap} ${isStatsOpen ? styles.open : ''}`}
      style={statsStyle}
    >
      <div className={styles.header}>
        <p className={styles.date}>
          {selectedDay.date}, {selectedDay.month}
        </p>
        <button className={styles.closeButton} onClick={closeStats}>
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
        <p className={styles.statValue}>{dailyNormaValue / 1000} L</p>
      </div>
      <div className={styles.statRow}>
        <p className={styles.statLabel}>Fulfillment of the daily norm:</p>
        <p className={styles.statValue}>{selectedDay.totalProcent}%</p>
      </div>
      <div className={styles.statRow}>
        <p className={styles.statLabel}>How many servings of water:</p>
        <p className={styles.statValue}>{selectedDay.numOfWaterRecords}</p>
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
