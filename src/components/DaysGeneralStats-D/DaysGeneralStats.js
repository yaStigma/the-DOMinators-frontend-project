import {
  Date,
  DaysCloseButton,
  DayStats,
  DayStatsHead,
  DayStatsWrap,
} from './DaysGeneralStats.styled';
import SpriteIcons from '../MonthStatsTable/sprite.svg';
import { useSelector } from 'react-redux';
import { selectWaterRate } from '../../redux/water/selectors';

export const DaysGeneralStats = ({
  isStatsOpen,
  closeStats,
  selectedDay,
  statsPosition,
}) => {
  const dailyNormaValue = useSelector(selectWaterRate);
  if (!selectedDay) {
    return null;
  }
  const { top, left } = statsPosition;
  const statsStyle = {
    top: `${top}px`,
    left: window.innerWidth >= 768 ? `${left}px` : '50%',
    transform:
      window.innerWidth >= 768
        ? 'translate(-100%, -100%)'
        : 'translate(-50%, -100%)',
    position: 'absolute',
  };

  return (
    <DayStatsWrap
      id="day-stats"
      isOpen={isStatsOpen}
      onClose={closeStats}
      style={statsStyle}
    >
      <div
        id="day-stats"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '18px',
        }}
      >
        <Date id="day-stats">
          {selectedDay.date}, {selectedDay.month}
        </Date>
        <DaysCloseButton onClick={closeStats}>
          <svg
            width="16px"
            height="16px"
            stroke="currentColor"
            fill="currentColor"
          >
            <use xlinkHref={`${SpriteIcons}#icon-close`} />
          </svg>
        </DaysCloseButton>
      </div>
      <div
        id="day-stats"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          marginBottom: '20px',
        }}
      >
        <DayStatsHead id="day-stats">Daily Norma:</DayStatsHead>
        <DayStats id="day-stats">{dailyNormaValue / 1000} L</DayStats>
      </div>
      <div
        id="day-stats"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          marginBottom: '20px',
        }}
      >
        <DayStatsHead id="day-stats">
          Fulfillment of the daily norm:
        </DayStatsHead>
        <DayStats id="day-stats">{selectedDay.totalProcent}%</DayStats>
      </div>
      <div
        id="day-stats"
        style={{
          display: 'flex',
          gap: '6px',
          alignItems: 'center',
        }}
      >
        <DayStatsHead id="day-stats">How many servings of water:</DayStatsHead>
        <DayStats id="day-stats">{selectedDay.numOfWaterRecords}</DayStats>
      </div>
    </DayStatsWrap>
  );
};
