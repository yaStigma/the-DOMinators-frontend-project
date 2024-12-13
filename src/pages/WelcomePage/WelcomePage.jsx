import React from "react";
import WaterConsumptionTracker from "../../components/WaterConsumptionTracker/WaterConsumptionTracker.jsx";
import WhyDrinkWater from "../../components/WhyDrinkWater/WhyDrinkWater.jsx";
import css from "./WelcomePage.module.css";

const WelcomePage = () => {
  return (
    <div className={css.welcomePage}>
      <div className={css.welcomePageWrapper}>
      <WaterConsumptionTracker />
      <WhyDrinkWater />
      </div>
    </div>
  );
};

export default WelcomePage;
