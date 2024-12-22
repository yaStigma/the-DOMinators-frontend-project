import React, { useState } from "react";
import WaterTracker from "../../components/WaterRatioPanel/WaterRatioPanel";
import TodayWaterList from "../../components/TodayWaterList/TodayWaterList";
import MonthStatsTable from "components/MonthStatsTable/MonthStatsTable";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [sliderValue, setSliderValue] = useState(0); 
  const [waterRecords, setWaterRecords] = useState([
    
  ]); 

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  const handleAddWater = () => {
    const newRecord = {
      id: Date.now().toString(),
      amount: 200, 
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setWaterRecords((prev) => [...prev, newRecord]);
    setSliderValue((prev) => Math.min(prev + 10, 100)); 
  };

  const handleEdit = (id) => {
    console.log("Edit record with ID:", id);
  };

  const handleDelete = (id) => {
    setWaterRecords((prev) => prev.filter((record) => record.id !== id));
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeSectionsWrapper}>
      <section className={styles.waterTrackerSection}>
        <WaterTracker
          sliderValue={sliderValue}
          onSliderChange={handleSliderChange}
          onAddWaterClick={handleAddWater}
        />
      </section>

      <section className={styles.todayWaterListSection}>
        <TodayWaterList
          waterRecords={waterRecords}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        </section>
        
        <section className={styles.MonthStatsTableSection}>
        <MonthStatsTable /> 
        </section>
        
      </div>
    </div>
  );
};

export default HomePage;