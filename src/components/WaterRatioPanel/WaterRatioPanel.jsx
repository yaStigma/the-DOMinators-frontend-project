import React, { useState, useEffect } from "react";
import styles from "./WaterRatioPanel.module.css";
import PropTypes from "prop-types";
import DailyNorma from "../DailyNorma/DailyNorma";

const ProgressBar = ({ sliderValue }) => {
const [sliderWidth, setSliderWidth] = useState(280);

   useEffect(() => {
   const updateSliderWidth = () => {
       if (window.innerWidth >= 1440) {
        setSliderWidth(350);
       } else if (window.innerWidth >= 768) {
         setSliderWidth(325);
       } else {
         setSliderWidth(280);
       }
     };

     updateSliderWidth();
     window.addEventListener("resize", updateSliderWidth);

     return () => {
       window.removeEventListener("resize", updateSliderWidth);
     };
  }, []);

   return (
    <svg
       className={styles.progressBar}
       width={sliderWidth}
       height="20"
       viewBox={`0 0 ${sliderWidth} 20`}
     >
       <rect x="0" y="6" width={sliderWidth} height="8" fill="#d7e3ff" rx="7" />
       <rect
         x="0"
        y="6"
         width={(sliderValue / 100) * sliderWidth}
        height="8"
         fill="#9ebbff"
         rx="7"
       />
       <circle
         cx={Math.min(Math.max((sliderValue / 100) * sliderWidth, 7), sliderWidth - 7)}
        cy="10"
         r="7"
         fill="#ffffff"
         stroke="#407bff"
         strokeWidth="1"
       />
     </svg>
   );
 };

 ProgressBar.propTypes = {
   sliderValue: PropTypes.number.isRequired,
 };

 const WaterTracker = ({ sliderValue, onAddWaterClick }) => {
   return (
    <div className={styles.dailyNormaSection}>
      <DailyNorma />
      <div className={styles.imageContainer}></div>
      <div className={styles.bottomSection}>
         <div className={styles.progressContainer}>
         <span className={styles.progressTitle}>Today</span>
           <ProgressBar sliderValue={sliderValue} />

           <div className={styles.progressMarkers}>
{[0, 50, 100].map((value, index) => {
    const isActive = sliderValue === value;
    const fontSize = isActive ? 16 : 12;

     return (
       <div key={index} className={styles.marker}>
         <div className={styles.tick}></div>
        <span style={{ fontSize: `${fontSize}px` }}>
           {value}%
         </span>
       </div>
    );
   })}
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