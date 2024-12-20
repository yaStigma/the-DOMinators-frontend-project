import React, { useState } from 'react';
import styles from "./DailyNorma.module.css";
import DailyNormaModal from '../DailyNormaModal/DailyNormaModal'; // Путь к модальному окну

const DailyNorma = () => {
  const [modalVisible, setModalVisible] = useState(false); // Состояние для видимости модального окна

  const openModal = () => {
    setModalVisible(true); // Функция для открытия модального окна
  };

  return (
    <div className={styles.dailyNormaContainer}>
      <p className={styles.title}>My daily norma</p>
      <div className={styles.normaContainer}>
        <span className={styles.normaValue}>1.5 L</span>
        <button onClick={openModal} className={styles.editButton}>Edit</button> {/* Кнопка для открытия модального окна */}
      </div>
      {modalVisible && <DailyNormaModal setModalVisible={setModalVisible} />} {/* Отображение модального окна */}
    </div>
  );
};

export default DailyNorma;





// import styles from "./DailyNorma.module.css";

// const DailyNorma = () => {
//   return (
//     <div className={styles.dailyNormaContainer}>
//       <p className={styles.title}>My daily norma</p>
//       <div className={styles.normaContainer}>
//         <span className={styles.normaValue}>1.5 L</span>
//         <button  className={styles.editButton}>Edit</button>
//       </div>
//     </div>
//   );
// };

// export default DailyNorma;
