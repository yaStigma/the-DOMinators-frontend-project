// import React, { useState } from 'react';
// import styles from "./DailyNorma.module.css";
// import DailyNormaModal from '../DailyNormaModal/DailyNormaModal';
// import EditWaterModal from '../EditWaterModal/EditWaterModal'; // Импортируем EditWaterModal

// const DailyNorma = () => {
//   const [normaModalVisible, setNormaModalVisible] = useState(false);
//   const [editWaterModalVisible, setEditWaterModalVisible] = useState(false); // Состояние для видимости EditWaterModal
//   const [normaValue] = useState(2.0);

//   const openNormaModal = () => {
//     setNormaModalVisible(true);
//   };

//   const openEditWaterModal = () => {
//     setEditWaterModalVisible(true);
//   };

//   return (
//     <div className={styles.dailyNormaContainer}>
//       <p className={styles.title}>My daily norma</p>
//       <div className={styles.normaContainer}>
//         <span className={styles.normaValue}>{normaValue} L</span>
//         <button onClick={openNormaModal} className={styles.editButton}>Edit</button>
//         <button onClick={openEditWaterModal} className={styles.editButton}>Edit Water</button>
//       </div>
//       {normaModalVisible && <DailyNormaModal setModalVisible={setNormaModalVisible} />}
//       {editWaterModalVisible && <EditWaterModal setModalVisible={setEditWaterModalVisible} waterRecord={null} />}
//     </div>
//   );
// };

// export default DailyNorma;



import React, { useState } from 'react';
import styles from "./DailyNorma.module.css";
import DailyNormaModal from '../DailyNormaModal/DailyNormaModal';

const DailyNorma = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [normaValue] = useState(2.0);

  const openModal = () => {
    setModalVisible(true);
  };

  return (
    <div className={styles.dailyNormaContainer}>
      <p className={styles.title}>My daily norma</p>
      <div className={styles.normaContainer}>
        <span className={styles.normaValue}>{normaValue} L</span>
        <button onClick={openModal} className={styles.editButton}>Edit</button>

      </div>
      {modalVisible && <DailyNormaModal setModalVisible={setModalVisible} />}
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
