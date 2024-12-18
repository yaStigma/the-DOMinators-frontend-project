import styles from "./WaterRatioPanel.module.css";
import PropTypes from "prop-types";
import DailyNorma from "../DailyNorma/DailyNorma";

const WaterTracker = ({ sliderValue, onAddWaterClick }) => {
  return (
    <div className={styles.dailyNormaSection}>
      <DailyNorma />
      <div className={styles.imageContainer}>
</div>
      <div className={styles.bottomSection}>
        <div className={styles.progressContainer}>
          <span className={styles.progressTitle}>Today</span>
          <svg
            className={styles.progressBar}
            width="100%"
            height="14"
            viewBox="0 0 256 14"
          >
            <rect x="0" y="0" width="256" height="14" fill="#d7e3ff" rx="7" />
            <rect
              x="0"
              y="0"
              width={(sliderValue / 100) * 256}
              height="14"
              fill="#9ebbff"
              rx="7"
            />
            <circle
              cx={(sliderValue / 100) * 256}
              cy="7"
              r="7"
              fill="#ffffff"
              stroke="#407bff"
              strokeWidth="2"
            />
          </svg>

          <div className={styles.progressMarkers}>
            {[0, 50, 100].map((value, index) => (
              <div key={index} className={styles.marker}>
                <div className={styles.tick}></div>
                <span>{value}%</span>
              </div>
            ))}
          </div>
        </div>

        <button className={styles.addWaterBtn} onClick={onAddWaterClick}>
          <svg className={styles.icon} width="20" height="20">
            <use href="images_auth/vectorbtn.svg#icon-vector-btn"></use>
          </svg>
          Add Water
        </button>
      </div>
    </div>
  );
};

WaterTracker.propTypes = {
  sliderValue: PropTypes.number.isRequired,
  onAddWaterClick: PropTypes.func.isRequired,
};

export default WaterTracker;