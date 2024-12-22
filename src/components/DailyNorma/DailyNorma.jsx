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


/*import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDailyNorma, updateDailyNorma } from '../../redux/water/operations';
import styles from './DailyNorma.module.css';
import DailyNormaModal from '../DailyNormaModal/DailyNormaModal';

const DailyNorma = () => {
  const dispatch = useDispatch();
  const dailyNorma = useSelector((state) => state.dailyNorma.dailyNorma);
  const loading = useSelector((state) => state.dailyNorma.loading);
  const error = useSelector((state) => state.dailyNorma.error);

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    dispatch(fetchDailyNorma());
  }, [dispatch]);

  const handleSave = async (newNorma) => {
    await dispatch(updateDailyNorma({ dailyNorma: newNorma }));
    setModalVisible(false);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  return (
    <div className={styles.dailyNormaContainer}>
      <p className={styles.title}>My daily norma</p>
      <div className={styles.normaContainer}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <span className={styles.normaValue}>{dailyNorma} L</span>
        )}
        <button onClick={openModal} className={styles.editButton}>
          Edit
        </button>
      </div>
      {error && <p className={styles.error}>Failed to load data</p>}

      {modalVisible && (
        <DailyNormaModal setModalVisible={setModalVisible} handleSave={handleSave} />
      )}
    </div>
  );
};

export default DailyNorma;*/



/*import React, { useState } from 'react';
import styles from "./DailyNorma.module.css";
import DailyNormaModal from '../DailyNormaModal/DailyNormaModal'; // Путь к модальному окну

const DailyNorma = () => {
  const [modalVisible, setModalVisible] = useState(false); // Состояние для видимости модального окна
  const [normaValue] = useState(2.0);

  const openModal = () => {
    setModalVisible(true); // Функция для открытия модального окна
  };

  return (
    <div className={styles.dailyNormaContainer}>
      <p className={styles.title}>My daily norma</p>
      <div className={styles.normaContainer}>
        <span className={styles.normaValue}>{normaValue} L</span>
        <button onClick={openModal} className={styles.editButton}>Edit</button> /* Кнопка для открытия модального окна */
      /*</div>
      {modalVisible && <DailyNormaModal setModalVisible={setModalVisible} />} /* Отображение модального окна */
    /*</div>
  );
};

export default DailyNorma;*/





