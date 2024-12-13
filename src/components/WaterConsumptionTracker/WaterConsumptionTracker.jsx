import React from "react";
import css from "./WaterConsumptionTracker.module.css";

const WaterConsumptionTracker = () => {
  return (
    <div className={css.waterTracker}>
      <h1>Water consumption tracker</h1>
      <p>Record daily water intake and track</p>
         <h2>Tracker Benefits</h2>
        <div className={css.trackerBenefits}>
        <div>
          <svg className={css.icon}>
            <use href="/src/assets/icons.svg#icon-habit" />
          </svg>
          <span>Habit drive</span>
        </div>
        <div>
          <svg className={css.icon}>
            <use href="/src/assets/icons.svg#icon-statistics" />
          </svg>
          <span>View statistics</span>
        </div>
        <div>
          <svg className={css.icon}>
            <use href="/src/assets/icons.svg#icon-settings" />
          </svg>
          <span>Personal rate setting</span>
        </div>
      </div>
      <button onClick={() => window.location.href = "/signup"}>
        Try tracker
      </button>
    </div>
  );
};

export default WaterConsumptionTracker;
