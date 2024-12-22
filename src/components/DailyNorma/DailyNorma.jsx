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




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateDailyNorma } from '../../redux/water/operations';
import styles from './DailyNorma.module.css';
import DailyNormaModal from '../DailyNormaModal/DailyNormaModal';

const DailyNorma = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [normaValue, setNormaValue] = useState(2.0); 

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const authData = JSON.parse(localStorage.getItem('persist:auth'));
        const accessToken = JSON.parse(authData.accessToken);

        if (!accessToken) {
          console.error('Unauthorized: No access token found');
          return;
        }

        const response = await axios.get('https://the-dominators-back-project.onrender.com/users', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const userData = response.data.data;
        setNormaValue(userData.daylyNorm / 1000); 
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleSave = async (newNorma) => {
    const authData = JSON.parse(localStorage.getItem('persist:auth'));
    const accessToken = authData ? JSON.parse(authData.accessToken) : null;

    if (!accessToken) {
      console.error('Unauthorized: No access token found');
      return;
    }

    try {
      const response = await dispatch(updateDailyNorma({ accessToken, dailyNorma: newNorma })).unwrap();
      if (response) {
        setNormaValue(newNorma); 
        setModalVisible(false); 
      }
    } catch (error) {
      console.error('Failed to update daily norma:', error);
    }
  };

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

      {modalVisible && <DailyNormaModal setModalVisible={setModalVisible} handleSave={handleSave} />} 
    </div>
  );
};

export default DailyNorma;


/*import React, { useState } from 'react';
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
<<<<<<< HEAD
        <button onClick={openModal} className={styles.editButton}>Edit</button>

      </div>
      {modalVisible && <DailyNormaModal setModalVisible={setModalVisible} />}
    </div>
=======
        <button onClick={openModal} className={styles.editButton}>Edit</button> /* Кнопка для открытия модального окна */
      /*</div>
      {modalVisible && <DailyNormaModal setModalVisible={setModalVisible} />} /* Отображение модального окна */
    /*</div>
>>>>>>> 8ac580fd29badfb81c050f073f13b29b9ac1e2fc
  );
};

export default DailyNorma;*/





