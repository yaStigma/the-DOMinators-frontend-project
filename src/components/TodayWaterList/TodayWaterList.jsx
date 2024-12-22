import { useEffect, useRef } from "react";
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
