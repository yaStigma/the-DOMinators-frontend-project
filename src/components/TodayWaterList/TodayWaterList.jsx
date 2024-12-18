import styles from './TodayWaterList.module.css';

const TodayWaterList = ({ waterData }) => {
  if (!waterData) {
    return <p className={styles.loading}>Loading water data...</p>;
  }

  return (
    <div className={styles.container}>
      {waterData.length === 0 ? (
        <p className={styles.noData}>No water data available.</p>
      ) : (
        <ul className={styles.list}>
          {waterData.map((item, index) => (
            <li key={index} className={styles.listItem}>
              {`Day ${item.date}: ${item.percentage}%`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodayWaterList;