import styles from "./DailyNorma.module.css";

const DailyNorma = () => {
  return (
    <div className={styles.dailyNormaContainer}>
      <p className={styles.title}>My daily norma</p>
      <div className={styles.normaContainer}>
        <span className={styles.normaValue}>1.5 L</span>
        <button className={styles.editButton}>Edit</button>
      </div>
    </div>
  );
};

export default DailyNorma;