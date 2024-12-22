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

export default TodayWaterList;*/



import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import styles from "./TodayWaterList.module.css";
import AddWaterModal from "../AddWaterModal/AddWaterModal";
import { createWaterRecord} from "../../redux/water/operations";  //deleteWaterRecord 
import { selectToken } from "../../redux/auth/selectors";

const TodayWaterList = ({ onEdit, onDelete }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const accessToken = useSelector(selectToken);

  const [waterRecords, setWaterRecords] = useState([]);
  const listRef = useRef(null);

  useEffect(() => {
    if (accessToken) {
      axios
        .get("https://the-dominators-back-project.onrender.com/water/today", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          if (response.data.status === 200 && Array.isArray(response.data.records)) {
            setWaterRecords(response.data.records);
          } else {
            console.error("Received 'records' is not an array", response.data.records);
          }
        })
        .catch((error) => {
          console.error("Error fetching water records:", error);
        });
    } else {
      console.error("No access token available.");
    }
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
        await dispatch(createWaterRecord({ amount, time, accessToken }));
      } catch (err) {
        console.error("Error adding water record", err);
      }
    } else {
      console.error("No access token available.");
    }
  };

  // const handleDeleteWater = async (id) => {
  //   if (accessToken) {
  //     try {
  //       await dispatch(deleteWaterRecord(id, accessToken));
  //       setWaterRecords((prevRecords) =>
  //         prevRecords.filter((record) => record._id !== id)
  //       );
  //     } catch (err) {
  //       console.error("Error deleting water record", err);
  //     }
  //   } else {
  //     console.error("No access token available.");
  //   }
  // };

  return (
    <section className={styles.todayWaterListSection}>
      <h2 className={styles.title}>Today</h2>
      <ul className={styles.list} ref={listRef}>
        {Array.isArray(waterRecords) &&
          waterRecords.map(({ _id, amount, date }) => (
            <li key={_id} className={styles.listItem}>
              <div className={styles.info}>
                <span className={styles.amount}>
                  <svg width="26" height="26">
                    <use href="./images_auth/today_water.svg#icon-today_water"></use>
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
                    <use href="./images_auth/pendelete.svg#icon-pencil"></use>
                  </svg>
                </button>
                <button
                  className={styles.deleteButton}
                  // onClick={() => handleDeleteWater(_id)}
                  aria-label="Delete"
                >
                  <svg width="16" height="16">
                    <use href="./images_auth/pendelete.svg#icon-delete"></use>
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


/* import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import styles from "./TodayWaterList.module.css";
import AddWaterModal from "../AddWaterModal/AddWaterModal";
import { createWaterRecord, fetchWaterRecords } from "../../redux/water/operations";
import { selectToken } from "../../redux/auth/selectors";
import { selectWaterRecords } from "../../redux/water/selectors";

const TodayWaterList = ({ onEdit, onDelete }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const accessToken = useSelector(selectToken);
  const waterRecords = useSelector(selectWaterRecords);
  const listRef = useRef(null);

  // Получение записей о воде за сегодня
  useEffect(() => {
    if (accessToken) {
      dispatch(fetchWaterRecords());
    } else {
      console.error("No access token available.");
    }
  }, [accessToken, dispatch]);

  // Автопрокрутка к последней записи
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
        await dispatch(createWaterRecord({ amount, time }));
        dispatch(fetchWaterRecords());  // Обновление списка после добавления записи
      } catch (err) {
        console.error("Error adding water record", err);
      }
    } else {
      console.error("No access token available.");
    }
  };
  
   // const handleDeleteWater = async (id) => {
  //   if (accessToken) {
  //     try {
  //       await dispatch(deleteWaterRecord(id, accessToken));
  //       setWaterRecords((prevRecords) =>
  //         prevRecords.filter((record) => record._id !== id)
  //       );
  //     } catch (err) {
  //       console.error("Error deleting water record", err);
  //     }
  //   } else {
  //     console.error("No access token available.");
  //   }
  // };

  return (
    <section className={styles.todayWaterListSection}>
      <h2 className={styles.title}>Today</h2>
      <ul className={styles.list} ref={listRef}>
        {Array.isArray(waterRecords) &&
          waterRecords.map(({ _id, amount, date }) => (
            <li key={_id} className={styles.listItem}>
              <div className={styles.info}>
                <span className={styles.amount}>
                  <svg width="26" height="26">
                    <use href="./images_auth/today_water.svg#icon-today_water"></use>
                  </svg>
                  {amount} ml
                </span>
                <span className={styles.time}>
                  {new Date(date).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
              <div className={styles.actions}>
                <button
                  className={styles.editButton}
                  onClick={() => onEdit(_id)}
                  aria-label="Edit"
                >
                  <svg width="16" height="16">
                    <use href="./images_auth/pendelete.svg#icon-pencil"></use>
                  </svg>
                </button>
                <button
                  className={styles.deleteButton}
                  onClick={() => onDelete(_id)}
                  aria-label="Delete"
                >
                  <svg width="16" height="16">
                    <use href="./images_auth/pendelete.svg#icon-delete"></use>
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

export default TodayWaterList;*/