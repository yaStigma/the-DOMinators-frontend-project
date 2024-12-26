import React, { useState, useEffect } from "react";
import styles from "./WaterRatioPanel.module.css";
import PropTypes from "prop-types";
import DailyNorma from "../DailyNorma/DailyNorma";
import AddWaterModal from "../AddWaterModal/AddWaterModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodayWaterRecords } from "../../redux/water/operations";
// import { selectToken } from "../../redux/auth/selectors";
import { selectTodayRecords } from "../../redux/water/selectors";
import { fetchUser } from "../../redux/user/operations";
import { selectUserInfo } from "../../redux/user/selectors";

const ProgressBar = ({ sliderValue }) => {
  const [sliderWidth, setSliderWidth] = useState(256);

  useEffect(() => {
    const updateSliderWidth = () => {
      if (window.innerWidth >= 1440) {
        setSliderWidth(350);
      } else if (window.innerWidth >= 768) {
        setSliderWidth(325);
      } else {
        setSliderWidth(256);
      }
    };

    updateSliderWidth();
    window.addEventListener("resize", updateSliderWidth);

    return () => {
      window.removeEventListener("resize", updateSliderWidth);
    };
  }, []);

  return (
    <svg className={styles.progressBar} width="100%" height="20" viewBox={`0 0 ${sliderWidth} 20`}>
      <rect x="0" y="6" width={sliderWidth} height="8" fill="#d7e3ff" rx="7" />
      <rect x="0" y="6" width={(sliderValue / 100) * sliderWidth} height="8" fill="#9ebbff" rx="7" />
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

const WaterTracker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  
  const dispatch = useDispatch();
  // const accessToken = useSelector(selectToken);
  const accessToken = localStorage.getItem("persist:auth");
  const waterRecords = useSelector(selectTodayRecords);

//витягуємо дані про денну норму 
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
const userInfo = useSelector(selectUserInfo);
const data = userInfo?.data || {}; // Если данных нет, используем пустой объект
  const dailyNorma = data.daylyNorm;


//оновлюємо дані при монтуванні
  useEffect(() => {
    if (accessToken) {
      dispatch(fetchTodayWaterRecords());
    }
  }, [dispatch, accessToken]);

  // Calculate total water and percentage of daily goal
  const totalWater = waterRecords.reduce((sum, record) => sum + record.amount, 0);
  const sliderPercentage = Math.min((totalWater / dailyNorma) * 100, 100);

  const handleAddWaterClick = () => {
    setModalVisible(true);
  };

  const handleModalClose = async () => {
    setModalVisible(false);
    if (accessToken) {
      try {
        await dispatch(fetchTodayWaterRecords());
      } catch (err) {
        console.error("Error fetching water records", err);
      }
    }
  };
  return (
    <div className={styles.dailyNormaSection}>
      <DailyNorma />
      <div className={styles.imageContainer}></div>
      <div className={styles.bottomSection}>
        <div className={styles.progressContainer}>
          <span className={styles.progressTitle}>Today</span>
          <ProgressBar sliderValue={sliderPercentage} />

          <div className={styles.progressMarkers}>
            {[0, 50, 100].map((value, index) => (
              <div key={index} className={styles.marker}>
                <div className={styles.tick}></div>
                <span>{value}%</span>
              </div>
            ))}
          </div>
        </div>

        <button className={styles.addWaterBtn} onClick={handleAddWaterClick}>
          <svg className={styles.icon} width="20" height="20">
            <use href="./images_auth/vectorbtn.svg#icon-vector-btn"></use>
          </svg>
          Add Water
        </button>
        {modalVisible && (
      <AddWaterModal
        setModalVisible={setModalVisible}
        onClose={handleModalClose}  // Передаем функцию
      />
    )}
      </div>
    </div>
  );
};

export default WaterTracker;