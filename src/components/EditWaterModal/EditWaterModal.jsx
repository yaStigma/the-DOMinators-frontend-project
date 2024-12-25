import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodayWaterRecords, updateWaterRecord } from '../../redux/water/operations';
import { selectTodayRecords } from '../../redux/water/selectors';
import SvgIcons from '../SvgIcons/SvgIcons';
import css from './EditWaterModal.module.css';

const EditWaterModal = ({ setModalVisible, waterRecord }) => {
  const [amount, setAmount] = useState(waterRecord ? waterRecord.amount : 0);
  const [time, setTime] = useState('');
  const [previousAmount, setPreviousAmount] = useState(null);
  const [previousTime, setPreviousTime] = useState(null);
  const dispatch = useDispatch();
  const waterRecords = useSelector(selectTodayRecords);
console.log(time); // для рендера - проверить неоходимоть переменной и убрать
// разбила на 2 еффекта что бы избежать бесконечно загрузки 
  useEffect(() => {
    const fetchRecords = async () => {
      await dispatch(fetchTodayWaterRecords());
    };

    fetchRecords();
    populateTimeDropdown();
  }, [dispatch]); // Убираем waterRecords из зависимостей

  useEffect(() => {
    // Обрабатываем данные только при наличии waterRecord
    if (waterRecord) {
      const localDate = new Date(waterRecord.date);
      const hours = localDate.getHours().toString().padStart(2, '0');
      const minutes = localDate.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}`);

      console.log('Current Water Record:', waterRecord); // Для диагностики
      console.log('All Records:', waterRecords); // Для диагностики

      if (waterRecords && waterRecords.length > 1) {
        const currentIndex = waterRecords.findIndex(record => record._id === waterRecord._id);
        console.log('Current Record Index:', currentIndex); // Для диагностики

        if (currentIndex > 0) {
          const previousRecord = waterRecords[currentIndex - 1];
          console.log('Previous Record:', previousRecord); // Для диагностики
          setPreviousAmount(previousRecord.amount);

          const previousDate = new Date(previousRecord.date);
          const previousHours = previousDate.getHours().toString().padStart(2, '0');
          const previousMinutes = previousDate.getMinutes().toString().padStart(2, '0');
          setPreviousTime(`${previousHours}:${previousMinutes}`);
        }
      }
    }
  }, [waterRecords, waterRecord]);

  useEffect(() => {
    if (waterRecords && waterRecords.length > 1 && waterRecord) {
      const currentIndex = waterRecords.findIndex(record => record._id === waterRecord._id);
      if (currentIndex > 0) {
        const previousRecord = waterRecords[currentIndex - 1];
        setPreviousAmount(previousRecord.amount);

        const previousDate = new Date(previousRecord.date);
        const previousHours = previousDate.getHours().toString().padStart(2, '0');
        const previousMinutes = previousDate.getMinutes().toString().padStart(2, '0');
        setPreviousTime(`${previousHours}:${previousMinutes}`);
      }
    }
  }, [waterRecords, waterRecord]);

  const handleClose = () => {
    setModalVisible(false);
  };

  const handleChangeAmount = (delta) => {
    setAmount((prevAmount) => Math.max(0, prevAmount + delta));
  };

  const handleSave = async () => {
    if (waterRecord && waterRecord._id) {
      try {
        const timeElement = document.getElementById('time');
        const newTime = timeElement.value;
        const date = new Date().toISOString().split('T')[0] + 'T' + newTime + ':00';
        const recordId = waterRecord._id.$oid || waterRecord._id;
        await dispatch(updateWaterRecord({ recordId, date, amount }));
        setModalVisible(false);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const populateTimeDropdown = () => {
    const timeDropdown = document.getElementById('time');
    if (!timeDropdown) return;

    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 5) {
        const option = document.createElement('option');
        option.value = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        option.textContent = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        timeDropdown.appendChild(option);
      }
    }

    const now = new Date();
    const currentHour = now.getHours().toString().padStart(2, '0');
    const currentMinute = Math.floor(now.getMinutes() / 5) * 5;
    timeDropdown.value = `${currentHour}:${currentMinute.toString().padStart(2, '0')}`;
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
            <SvgIcons name="glass" />
            <span className={css.waterAmount}>{previousAmount !== null ? `${previousAmount} ml` : "No notes yet"}</span>
            {previousTime !== null ? <span className={css.waterTime}>{previousTime}</span> : null}
          </div>
          <h4 className={css.labelDistance}>Correct entered data:</h4>
          <label className={css.labelDistanceText} htmlFor="amount">Amount of water:</label>
          <div className={css.amountSelector}>
            <button className={css.buttonChange} onClick={() => handleChangeAmount(-50)}>-</button>
            <span id="amount">{amount}ml</span>
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








// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { updateWaterRecord } from '../../redux/water/operations';
// import SvgIcons from '../SvgIcons/SvgIcons';
// import css from './EditWaterModal.module.css';

// const EditWaterModal = ({ setModalVisible, waterRecord }) => {
//   const [amount, setAmount] = useState(waterRecord ? waterRecord.amount : 0);
//   const [time, setTime] = useState('');
//   const dispatch = useDispatch();

//   useEffect(() => {
//     populateTimeDropdown();
//     if (waterRecord) {
//       const localDate = new Date(waterRecord.date);
//       const hours = localDate.getHours().toString().padStart(2, '0');
//       const minutes = localDate.getMinutes().toString().padStart(2, '0');
//       setTime(`${hours}:${minutes}`);
//     }
//   }, [waterRecord]);

//   const handleClose = () => {
//     setModalVisible(false);
//   };

//   const handleChangeAmount = (delta) => {
//     setAmount((prevAmount) => Math.max(0, prevAmount + delta));
//   };

//   const handleSave = async () => {
//     if (waterRecord && waterRecord._id) {
//       try {
//         // Получаем новое время из select
//         const timeElement = document.getElementById('time');
//         const newTime = timeElement.value;

//         // Формируем новую дату с учетом времени
//         const date = new Date().toISOString().split('T')[0] + 'T' + newTime + ':00';

//         const recordId = waterRecord._id.$oid || waterRecord._id; // Обработка recordId
//         await dispatch(updateWaterRecord({ recordId, date, amount }));
//         setModalVisible(false);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   const populateTimeDropdown = () => {
//     const timeDropdown = document.getElementById('time');
//     if (!timeDropdown) return;

//     for (let hour = 0; hour < 24; hour++) {
//       for (let minute = 0; minute < 60; minute += 5) {
//         const option = document.createElement('option');
//         option.value = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
//         option.textContent = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
//         timeDropdown.appendChild(option);
//       }
//     }

//     const now = new Date();
//     const currentHour = now.getHours().toString().padStart(2, '0');
//     const currentMinute = Math.floor(now.getMinutes() / 5) * 5;
//     timeDropdown.value = `${currentHour}:${currentMinute.toString().padStart(2, '0')}`;
//   };

//   const displayAmount = () => {
//     if (!waterRecord || !waterRecord.amount) {
//       return "No notes yet";
//     }
//     return `${amount} ml`;
//   };

//   return (
//     <div className={css.modal}>
//       <div className={css.modalContent}>
//         <div className={css.modalHeader}>
//           <h2>Edit the entered amount of water</h2>
//           <span className={css.close} onClick={handleClose}>&times;</span>
//         </div>
//         <div className={css.modalBody}>
//           <div className={css.waterEntry}>
//             <SvgIcons name="glass" />
//             <span className={css.waterAmount}>{displayAmount()}</span>
//             {waterRecord && waterRecord.amount ? <span className={css.waterTime}>{time}</span> : null}
//           </div>
//           <h4 className={css.labelDistance}>Correct entered data:</h4>
//           <label className={css.labelDistanceText} htmlFor="amount">Amount of water:</label>
//           <div className={css.amountSelector}>
//             <button className={css.buttonChange} onClick={() => handleChangeAmount(-50)}>-</button>
//             <span id="amount">{amount}ml</span>
//             <button className={css.buttonChange} onClick={() => handleChangeAmount(50)}>+</button>
//           </div>
//           <label className={css.labelDistance} htmlFor="time">Recording time:</label>
//           <select className={css.inputText} id="time" onChange={(e) => setTime(e.target.value)}></select>
//           <h4 className={css.labelDistance}>Enter the value of the water used:</h4>
//           <input
//             className={css.inputText}
//             type="number"
//             id="value"
//             value={amount}
//             onChange={(e) => setAmount(Number(e.target.value))}
//           />
//           <div className={css.inputSaveContainer}>
//             <input
//               className={css.inputField}
//               type="text"
//               id="autoFillInput"
//               readOnly
//               value={`${amount}ml`}
//             />
//             <button className={css.saveButton} onClick={handleSave}>Save</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditWaterModal;




// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { updateWaterRecord } from '../../redux/water/operations';
// import SvgIcons from '../SvgIcons/SvgIcons';
// import css from './EditWaterModal.module.css';

// const EditWaterModal = ({ setModalVisible, waterRecord}) => {
//   const [amount, setAmount] = useState(waterRecord ? waterRecord.amount : 0);
//   const [time, setTime] = useState('');
//   const dispatch = useDispatch();


//   useEffect(() => {
//     populateTimeDropdown();
//     if (waterRecord) {
//       setTime(new Date(waterRecord.date).toISOString().substring(11, 16));
//     }
//   }, [waterRecord]);

//   const handleClose = () => {
//     setModalVisible(false);
//   };

//   const handleChangeAmount = (delta) => {
//     setAmount((prevAmount) => Math.max(0, prevAmount + delta));
//   };

//   const handleSave = async () => {
//     if (waterRecord && waterRecord._id) {
//       try {
//         const date = new Date().toISOString().split('T')[0] + 'T' + time + ':00Z';
//         await dispatch(updateWaterRecord({ userId: waterRecord.userId, date, amount }));
//         setModalVisible(false);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };



//   const populateTimeDropdown = () => {
//     const timeDropdown = document.getElementById('time');
//     const now = new Date();
//     const currentHour = now.getHours();
//     const currentMinute = Math.floor(now.getMinutes() / 5) * 5;

//     for (let hour = 0; hour < 24; hour++) {
//       for (let minute = 0; minute < 60; minute += 5) {
//         const option = document.createElement('option');
//         option.value = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
//         option.textContent = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
//         if (hour === currentHour && minute === currentMinute) {
//           option.selected = true;
//           setTime(option.value);
//         }
//         timeDropdown.appendChild(option);
//       }
//     }
//   };

//   const displayAmount = () => {
//     if (!waterRecord || !waterRecord.amount) {
//       return "No notes yet";
//     }
//     return `${amount} ml`;
//   };

//   return (
//     <div className={css.modal}>
//       <div className={css.modalContent}>
//         <div className={css.modalHeader}>
//           <h2>Edit the entered amount of water</h2>
//           <span className={css.close} onClick={handleClose}>&times;</span>
//         </div>
//         <div className={css.modalBody}>
//           <div className={css.waterEntry}>
//             <SvgIcons name="glass" /> {/* Используем SvgIcons для отображения иконки */}
//             <span className={css.waterAmount}>{displayAmount()}</span>
//             {waterRecord && waterRecord.amount ? <span className={css.waterTime}>{time}</span> : null}
//           </div>
//           <h4 className={css.labelDistance}>Correct entered data:</h4>
//           <label className={css.labelDistanceText} htmlFor="amount">Amount of water:</label>
//           <div className={css.amountSelector}>
//             <button className={css.buttonChange} onClick={() => handleChangeAmount(-50)}>-</button>
//             <span  id="amount">{amount}ml</span>
//             <button className={css.buttonChange} onClick={() => handleChangeAmount(50)}>+</button>
//           </div>
//           <label className={css.labelDistance} htmlFor="time">Recording time:</label>
//           <select className={css.inputText} id="time" onChange={(e) => setTime(e.target.value)}></select>
//           <h4 className={css.labelDistance}>Enter the value of the water used:</h4>
//           <input
//             className={css.inputText}
//             type="number"
//             id="value"
//             value={amount}
//             onChange={(e) => setAmount(Number(e.target.value))}
//           />
//           <div className={css.inputSaveContainer}>
//             <input
//               className={css.inputField}
//               type="text"
//               id="autoFillInput"
//               readOnly
//               value={`${amount}ml`}
//             />
//             <button className={css.saveButton} onClick={handleSave}>Save</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditWaterModal;
