/*import React, { useState, useEffect } from "react";
import styles from "./WaterRatioPanel.module.css";
import PropTypes from "prop-types";
import DailyNorma from "../DailyNorma/DailyNorma";

const ProgressBar = ({ sliderValue }) => {
const [sliderWidth, setSliderWidth] = useState(280);
const [sliderWidth, setSliderWidth] = useState(280);

   useEffect(() => {
   const updateSliderWidth = () => {
       if (window.innerWidth >= 1440) {
        setSliderWidth(350);
       } else if (window.innerWidth >= 768) {
         setSliderWidth(325);
       } else {
         setSliderWidth(280);
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

export default WaterTracker;*/



import React, { useState, useEffect } from "react";
import styles from "./WaterRatioPanel.module.css";
import PropTypes from "prop-types";
import DailyNorma from "../DailyNorma/DailyNorma";
import AddWaterModal from "../AddWaterModal/AddWaterModal";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createWaterRecord } from "../../redux/water/operations";
import { selectToken } from "../../redux/auth/selectors";
import TodayWaterList from "../TodayWaterList/TodayWaterList"; 

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
  const [totalWater, setTotalWater] = useState(0);
  const [dailyNorma] = useState(2000); // Default daily goal
  const [waterRecords, setWaterRecords] = useState([]);
  const dispatch = useDispatch();
  const accessToken = useSelector(selectToken);

  // Fetch water records on component mount
  useEffect(() => {
    const fetchWaterRecords = async () => {
      try {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().slice(0, 16);

        const response = await axios.get("https://the-dominators-back-project.onrender.com/water/today", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: { date: formattedDate },
        });

        const records = response.data.records || [];
        const totalWaterIntake = records.reduce((acc, record) => acc + record.amount, 0);
        setWaterRecords(records);
        setTotalWater(totalWaterIntake);
      } catch (err) {
        console.error("Error fetching water records", err);
      }
    };

    fetchWaterRecords();
  }, [accessToken]);

  // Calculate percentage of goal
  const sliderPercentage = Math.min((totalWater / dailyNorma) * 100, 100);

  const handleAddWaterClick = () => {
    setModalVisible(true);
  };

  const handleModalClose = async (amount, time) => {
    setModalVisible(false);

    try {
      await dispatch(createWaterRecord({ accessToken, amount, time }));
      const newRecord = { amount, date: time };
      setWaterRecords((prevRecords) => [...prevRecords, newRecord]);
      setTotalWater((prevTotal) => prevTotal + amount);
    } catch (err) {
      console.error("Error adding water record", err);
    }
  };

  // Delete water record and update state
  const handleDeleteRecord = (id) => {
    setWaterRecords((prevRecords) => {
      const filteredRecords = prevRecords.filter((record) => record._id !== id);
      const updatedTotal = filteredRecords.reduce((acc, record) => acc + record.amount, 0);
      setTotalWater(updatedTotal);
      return filteredRecords;
    });
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
        {modalVisible && <AddWaterModal setModalVisible={setModalVisible} onClose={handleModalClose} />}
      </div>
    </div>
  );
};

export default WaterTracker;