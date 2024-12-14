import React from "react";
import { useNavigate } from 'react-router-dom';
import css from "./WaterConsumptionTracker.module.css";

const WaterConsumptionTracker = () => {
   const navigate = useNavigate();

  return (
    <div className={css.waterConsumptionTracker}>
      <h1 className={css.waterConsumptionTrackerTitle}>Water consumption tracker</h1>
      <p className={css.waterConsumptionTrackerDescription}>Record daily water intake and track</p>
         <h2 className={css.subtitle}>Tracker Benefits</h2>
        <div className={css.waterTrackerConsumptionBenefits}>
        <div className={css.waterTrackerConsumptionBenefit}>
          <svg className={css.waterTrackerConsumptionIcon}>
            <use href="/the-DOMinators-frontend-project/welcomeIcons.svg#icon-habit" />
          </svg>
          <span className={css.waterTrackerConsumptionBenefitText}>Habit drive</span>
        </div>
        <div className={css.waterTrackerConsumptionBenefit}>
          <svg className={css.waterTrackerConsumptionIcon}>
            <use href="/the-DOMinators-frontend-project/welcomeIcons.svg#icon-statistics" />
          </svg>
          <span className={css.waterTrackerConsumptionBenefitText}>View statistics</span>
        </div>
        <div className={css.waterTrackerConsumptionBenefit}>
          <svg className={css.waterTrackerConsumptionIcon}>
            <use href="/the-DOMinators-frontend-project/welcomeIcons.svg#icon-settings" />
          </svg>
          <span className={css.waterTrackerConsumptionBenefitText}>Personal rate setting</span>
        </div>
      </div>
      <button className={css.waterTrackerConsumptionButton} onClick={() => navigate('/signup')}>
        Try tracker
      </button>
    </div>
  );
};

export default WaterConsumptionTracker;
