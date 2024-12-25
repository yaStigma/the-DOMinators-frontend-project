import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./TodayWaterList.module.css";
import AddWaterModal from "../AddWaterModal/AddWaterModal";
import {deleteWaterRecord, fetchDaysArray} from "../../redux/water/operations"; 
// import { selectToken } from "../../redux/auth/selectors";
import EditWaterModal from "../EditWaterModal/EditWaterModal";
import MonthStatsTable from "../MonthStatsTable/MonthStatsTable";
import { selectTodayRecords } from "../../redux/water/selectors";
import { fetchTodayWaterRecords, updateWaterRecord } from "../../redux/water/operations";
const TodayWaterList = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const dispatch = useDispatch();
  // const accessToken = useSelector(selectToken);
  const accessToken = localStorage.getItem("persist:auth");
  const [currentRecord, setCurrentRecord] = useState(null);
  const listRef = useRef(null);
  const waterRecords = useSelector(selectTodayRecords);


useEffect(() => {
  if (accessToken) {
 
    dispatch(fetchTodayWaterRecords());
 dispatch(fetchDaysArray())
  }
}, [dispatch, accessToken]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [waterRecords]);

  const handleAddWaterClick = () => {
    setModalVisible(true);
  };

  const handleModalClose = async () => {
    
    setModalVisible(false);
  
    if (accessToken) {
      try {
          await dispatch(fetchTodayWaterRecords());
          await dispatch(fetchDaysArray())
      } catch (err) {
        console.error("Error adding water record", err);
      }
    }
  };


  const onEdit = (recordId) => {  
    const record = waterRecords.find((record) => record._id === recordId);  
    setCurrentRecord(record); // Сохраняем текущую запись
    setEditModalVisible(true); // Открываем модальное окно редактирования
  };
  const handleEditSave = async (updatedRecord) => {
    try {
      await dispatch(updateWaterRecord(updatedRecord));
      // Обновление данных
      await dispatch(fetchTodayWaterRecords());
      await dispatch(fetchDaysArray()) 
    } catch (err) {
      console.error("Error updating water record", err);
    }
  };


  const handleDeleteWater = async (id) => {
    if (!accessToken) return;
  
    try {
      const response = await dispatch(deleteWaterRecord(id));
      if (response.meta.requestStatus === "fulfilled") {
        // Обновление данных
        await dispatch(fetchTodayWaterRecords()); 
        await dispatch(fetchDaysArray())
      }
    } catch (err) {
      console.error("Error deleting water record", err);
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
                {new Date(date).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
              }
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
      
      {isModalVisible && (
      <AddWaterModal
        setModalVisible={setModalVisible}
        onClose={handleModalClose}  // Передаем функцию
      />
    )}
      {/* Модальное окно для редактирования */}
      {isEditModalVisible && currentRecord && (
        <EditWaterModal
          setModalVisible={setEditModalVisible}
          waterRecord={currentRecord}
          onSave={handleEditSave} // Обновляем записи после редактирования
        />
      )}
      <section className={styles.MonthStatsTableSection}>
        <MonthStatsTable />
      </section>
    </section>
    
  );
};
export default TodayWaterList;
