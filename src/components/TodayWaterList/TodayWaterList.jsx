/*import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./TodayWaterList.module.css";

const TodayWaterList = ({ waterRecords, onEdit, onDelete }) => {
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [waterRecords]);

  return (
    <section className={styles.todayWaterListSection}>
      <h2 className={styles.title}>Today</h2>
      <ul className={styles.list} ref={listRef}>
        {waterRecords.map(({ id, amount, time }) => (
          <li key={id} className={styles.listItem}>
            <div className={styles.info}>
              <span className={styles.amount}> <svg
    width="26"
    height="26"
  >
    <use href="./images_auth/today_water.svg#icon-today_water"></use>
  </svg>
  {amount} ml</span>
              <span className={styles.time}>{time}</span>
            </div>
            <div className={styles.actions}>
            <button
              className={styles.editButton}
              onClick={() => onEdit(id)}
              aria-label="Edit"
              >
              <svg

                  width="16"
                  height="16"

                  >
                    <use href="./images_auth/pendelete.svg#icon-pencil"></use>
                  </svg>
                  </button>

                  <button
                  className={styles.deleteButton}
                  onClick={() => onDelete(id)}
                  aria-label="Delete"
                >
                  <svg

                    width="16"
                    height="16"

                  >

                    <use href="./images_auth/pendelete.svg#icon-delete"></use>
                  </svg>
                </button>
            </div>
          </li>
        ))}
      </ul>
      <button className={styles.addButton} onClick={() => onEdit(null)}>
        + Add water
      </button>
    </section>
  );
};

TodayWaterList.propTypes = {
  waterRecords: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      time: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodayWaterList;
export default TodayWaterList;*/
/**/


import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import styles from "./TodayWaterList.module.css";
import AddWaterModal from "../AddWaterModal/AddWaterModal";
import { createWaterRecord } from "../../redux/water/operations"; 
import {deleteWaterRecord} from "../../redux/water/operations"; 
import { selectToken } from "../../redux/auth/selectors";

const TodayWaterList = ({ onEdit, onDelete }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const accessToken = useSelector(selectToken);

  const [waterRecords, setWaterRecords] = useState([]);
  const [totalWaterAmount, setTotalWaterAmount] = useState(0);  
  const [goalPercentage, setGoalPercentage] = useState(0);      
  const listRef = useRef(null);

  const fetchWaterRecords = () => {
    if (accessToken) {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().slice(0, 16); 
  
      axios
        .get("https://the-dominators-back-project.onrender.com/water/today", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            date: formattedDate,
          },
        })
        .then((response) => {
          console.log("API Response:", response.data); 
          const { status, percentageOfGoal, records } = response.data;
  
          if (status === 200 && Array.isArray(records)) {
            setWaterRecords(records);
            const totalAmount = records.reduce((total, record) => total + record.amount, 0);
            setTotalWaterAmount(totalAmount);
            setGoalPercentage(percentageOfGoal || 0);
          } else {
            console.error("Unexpected response or invalid data:", response.data);
          }
        })
        .catch((error) => {
          console.error("Error fetching water records:", error);
        });
    }
  };
  
  useEffect(() => {
    fetchWaterRecords();  
  }, [accessToken]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [waterRecords]);

  const handleAddWaterClick = () => {
    setModalVisible(true);
  };

  const handleModalClose = async (amount, time) => {
    setModalVisible(false);

    if (accessToken) {
      try {
        await dispatch(createWaterRecord({ amount, time}));
        fetchWaterRecords();
      } catch (err) {
        console.error("Error adding water record", err);
      }
    }
  };

  // const handleDeleteWater = async (id) => {
  //   if (accessToken) {
  //     try {
  //       await dispatch(onDelete(id, accessToken));
  //       setWaterRecords((prevRecords) =>
  //         prevRecords.filter((record) => record._id !== id)
  //       );
  //     } catch (err) {
  //       console.error("Error deleting water record", err);
  //     }
  //   }
  // };

  const handleDeleteWater = async (id) => {
    if (!accessToken) return;
    try {
      const response = await dispatch(deleteWaterRecord(id));
      if (response.meta.requestStatus === "fulfilled") {
        setWaterRecords((prevRecords) =>
          prevRecords.filter((record) => record._id !== id)
        );
      }
    } catch (err) {
      
    }
    };

  return (
    <section className={styles.todayWaterListSection}>
      <h2 className={styles.title}>Today</h2>
      <ul className={styles.list} ref={listRef}>
        {waterRecords.map(({ _id, amount, date }) => (
          <li key={_id} className={styles.listItem}>
            <div className={styles.info}>
              <span className={styles.amount}>
                <svg width="36" height="36" className={styles.amountIcon}>
                  <use href="./images_auth/today_water.svg#icon-today_water" ></use>
                </svg>
                {amount} ml
              </span>
              <span className={styles.time}>
                {new Date(date).toLocaleTimeString()}
              </span>
            </div>
            <div className={styles.actions}>
              <button
                className={styles.editButton}
                onClick={() => onEdit(_id)}
                aria-label="Edit"
              >
                <svg width="16" height="16">
                  <use href="./images_auth/td_editdelet.svg#icon-edit"></use>
                </svg>
              </button>
              <button
                className={styles.deleteButton}
                onClick={() => handleDeleteWater(_id)}
                aria-label="Delete"
              >
                <svg width="16" height="16">
                  <use href="./images_auth/td_editdelet.svg#icon-delete"></use>
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button className={styles.addButton} onClick={handleAddWaterClick}>
        + Add water
      </button>
      {isModalVisible && <AddWaterModal setModalVisible={setModalVisible} onClose={handleModalClose} />}
    </section>
  );
};

TodayWaterList.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodayWaterList;
