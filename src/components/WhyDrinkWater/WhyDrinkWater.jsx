import React from "react";
import css from  "./WhyDrinkWater.module.css";

const WhyDrinkWater = () => {
  return (
    <div className={css.whyDrinkWater}>
      <h2 className={css.whyDrinkWaterTitle}>Why drink water</h2>
      <ul className={css.whyDrinkWaterList}>
        <li className={css.whyDrinkWaterItem}>Supply of nutrients to all organs</li>
        <li className={css.whyDrinkWaterItem}>Providing oxygen to the lungs</li>
        <li className={css.whyDrinkWaterItem}>Maintaining the work of the heart</li>
        <li className={css.whyDrinkWaterItem}>Release of processed substances</li>
        <li className={css.whyDrinkWaterItem}>Ensuring the stability of the internal environment</li>
        <li className={css.whyDrinkWaterItem}>Maintaining within the normal temperature</li>
        <li className={css.whyDrinkWaterItem}>Maintaining an immune system capable of resisting disease</li>
      </ul>
    </div>
  );
};

export default WhyDrinkWater;
