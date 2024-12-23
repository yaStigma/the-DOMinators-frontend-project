import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateWaterRecord } from '../../redux/water/operations';
import SvgIcons from '../SvgIcons/SvgIcons';
import css from './EditWaterModal.module.css';

const EditWaterModal = ({ setModalVisible, waterRecord}) => {
  const [amount, setAmount] = useState(waterRecord ? waterRecord.amount : 0);
  const [time, setTime] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    populateTimeDropdown();
    if (waterRecord) {
      setTime(new Date(waterRecord.date).toISOString().substring(11, 16));
    }
  }, [waterRecord]);

  const handleClose = () => {
    setModalVisible(false);
  };

  const handleChangeAmount = (delta) => {
    setAmount((prevAmount) => Math.max(0, prevAmount + delta));
  };

  const handleSave = async () => {
    if (waterRecord && waterRecord._id) {
      try {
        const date = new Date().toISOString().split('T')[0] + 'T' + time + ':00Z';
        await dispatch(updateWaterRecord({ userId: waterRecord.userId, date, amount }));
        setModalVisible(false);
      } catch (error) {
        console.error(error);
      }
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

  const displayAmount = () => {
    if (!waterRecord || !waterRecord.amount) {
      return "No notes yet";
    }
    return `${amount} ml`;
  };

  return (
    <div className={css.modal}>
      <div className={css.modalContent}>
        <div className={css.modalHeader}>
          <h2>Edit the entered amount of water</h2>
          <span className={css.close} onClick={handleClose}>&times;</span>
        </div>
        <div className={css.modalBody}>
          <div className={css.waterEntry}>
            <SvgIcons name="glass" /> {/* Используем SvgIcons для отображения иконки */}
            <span className={css.waterAmount}>{displayAmount()}</span>
            {waterRecord && waterRecord.amount ? <span className={css.waterTime}>{time}</span> : null}
          </div>
          <h4 className={css.labelDistance}>Correct entered data:</h4>
          <label className={css.labelDistanceText} htmlFor="amount">Amount of water:</label>
          <div className={css.amountSelector}>
            <button className={css.buttonChange} onClick={() => handleChangeAmount(-50)}>-</button>
            <span  id="amount">{amount}ml</span>
            <button className={css.buttonChange} onClick={() => handleChangeAmount(50)}>+</button>
          </div>
          <label className={css.labelDistance} htmlFor="time">Recording time:</label>
          <select className={css.inputText} id="time" onChange={(e) => setTime(e.target.value)}></select>
          <h4 className={css.labelDistance}>Enter the value of the water used:</h4>
          <input
            className={css.inputText}
            type="number"
            id="value"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <div className={css.inputSaveContainer}>
            <input
              className={css.inputField}
              type="text"
              id="autoFillInput"
              readOnly
              value={`${amount}ml`}
            />
            <button className={css.saveButton} onClick={handleSave}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditWaterModal;
