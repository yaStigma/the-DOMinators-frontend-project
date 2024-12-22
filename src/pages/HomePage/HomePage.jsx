import { useState } from "react";
import WaterTracker from "../../components/WaterRatioPanel/WaterRatioPanel";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  const handleAddWater = () => {
    setSliderValue((prev) => Math.min(prev + 10, 100));
  };

  return (
    <div className={styles.homeContainer}>
      <section className={styles.waterTrackerSection}>
        <WaterTracker
          sliderValue={sliderValue}
          onSliderChange={handleSliderChange}
          onAddWaterClick={handleAddWater}
        />
      </section>
      <section className={styles.todayWaterListSection}>
      </section>
    </div>
  );
};

export default HomePage;