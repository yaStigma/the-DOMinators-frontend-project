

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './DailyNorma.module.css';
import { fetchUser } from '../../redux/user/operations'; // Загружаем данные пользователя
import { updateDailyNorma } from '../../redux/user/operations'; // Обновляем норму воды
import DailyNormaModal from '../DailyNormaModal/DailyNormaModal';
import { selectUserInfo } from '../../redux/user/selectors'; // Выбор данных пользователя из Redux

const DailyNorma = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  // Загружаем данные пользователя при монтировании компонента
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const userInfo = useSelector(selectUserInfo);
  const data = userInfo?.data || {}; // Если данных нет, используем пустой объект

  // Извлекаем норму воды из данных пользователя
  const normaValue = data.daylyNorm ? data.daylyNorm / 1000 : 2.0; // В литрах

  // Сохранение новой нормы воды
  const handleSave = async (newNorma) => {
    try {
      const response = await dispatch(updateDailyNorma({ dailyNorma: newNorma * 1000 })).unwrap(); // Преобразуем литры в мл
      if (response) {
        setModalVisible(false); // Закрываем модальное окно после успешного сохранения
      }
    } catch (error) {
      console.error('Failed to update daily norma:', error);
    }
  };

  // Открытие модального окна
  const openModal = () => {
    setModalVisible(true);
  };

  return (
        <div className={css.dailyNormaContainer}>
          <p className={css.title}>My daily norma</p>
          <div className={css.normaContainer}>
            <span className={css.normaValue}>{normaValue} L</span>
            <button onClick={openModal} className={css.editButton}>Edit</button>
          </div>
    
          {modalVisible && <DailyNormaModal setModalVisible={setModalVisible} handleSave={handleSave} />} 
        </div>
      );
    };

export default DailyNorma;
