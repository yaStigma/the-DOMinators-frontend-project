import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { createWaterRecord} from '../../redux/water/operations';
import css from './AddWaterModal.module.css';

const AddWaterModal = ({ setModalVisible, onClose }) => {
  const [amount, setAmount] = useState(0);
  const [time, setTime] = useState('');
  const dispatch = useDispatch();
 
  useEffect(() => {
    populateTimeDropdown();
  }, []);

  const handleClose = () => {
    setModalVisible(false);
  };

  const handleChangeAmount = (delta) => {
    setAmount((prevAmount) => Math.max(0, prevAmount + delta));
  };

  const handleSave = async () => {
    try {
      await dispatch(createWaterRecord({ amount, time }));

      setModalVisible(false);
      onClose(amount, time);  // Вызываем обновление списка после сохранения
 window.location.reload();
    } catch (error) {
      alert('Error saving record: ' + error.message);
    }
  };

  const populateTimeDropdown = () => {
    const timeDropdown = document.getElementById('time');
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = Math.floor(now.getMinutes() / 5) * 5;

    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 5) {
        const option = document.createElement('option');
        option.value = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        option.textContent = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        if (hour === currentHour && minute === currentMinute) {
          option.selected = true;
          setTime(option.value);
        }
        timeDropdown.appendChild(option);
      }
    }
  };

  return (
    <div className={css.modal}>
      <div className={css.modalContent}>
        <div className={css.modalHeader}>
          <h2>Add water</h2>
          <span className={css.close} onClick={handleClose}>&times;</span>
        </div>
        <div className={css.modalBody}>
          <h4 className={css.labelDistance} htmlFor="amount">Choose a value:</h4>
          <label className={css.labelDistanceText} htmlFor="amount">Amount of water:</label>
          <div className={css.amountSelector}>
            <button className={css.buttonSelector} onClick={() => handleChangeAmount(-50)}>-</button>
            <span id="amount">{amount}ml</span>
            <button className={css.buttonSelector} onClick={() => handleChangeAmount(50)}>+</button>
          </div>
          <label className={css.labelDistance} htmlFor="time">Recording time:</label>
          <select className={css.inputText} id="time" onChange={(e) => setTime(e.target.value)}></select>
          <h4 className={css.labelDistance} htmlFor="value">Enter the value of the water used:</h4>
          <input className={css.inputText} type="number" id="value" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
          <div className={css.inputSaveContainer}>
            <input className={css.inputField} type="text" id="autoFillInput" readOnly value={`${amount}ml`} />
            <button className={css.saveButton} onClick={handleSave}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWaterModal;

