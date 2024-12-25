
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

  useEffect(() => {
    const fetchRecords = async () => {
      await dispatch(fetchTodayWaterRecords());
    };

    fetchRecords();
    populateTimeDropdown();

    if (waterRecord) {
      const localDate = new Date(waterRecord.date);
      const hours = localDate.getHours();
      const minutes = localDate.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
      setTime(`${formattedHours}:${minutes} ${ampm}`);



      if (waterRecords && waterRecords.length > 1) {
        const currentIndex = waterRecords.findIndex(record => record._id === waterRecord._id);

        if (currentIndex > 0) {
          const previousRecord = waterRecords[currentIndex - 1];

          setPreviousAmount(previousRecord.amount);

          const previousDate = new Date(previousRecord.date);
          const previousHours = previousDate.getHours();
          const previousMinutes = previousDate.getMinutes().toString().padStart(2, '0');
          const previousAmpm = previousHours >= 12 ? 'PM' : 'AM';
          const formattedPreviousHours = (previousHours % 12 || 12).toString().padStart(2, '0');
          setPreviousTime(`${formattedPreviousHours}:${previousMinutes} ${previousAmpm}`);
        }
      }
    }
  }, [dispatch, waterRecord]);

  useEffect(() => {
    if (waterRecords && waterRecords.length > 1 && waterRecord) {
      const currentIndex = waterRecords.findIndex(record => record._id === waterRecord._id);
      if (currentIndex > 0) {
        const previousRecord = waterRecords[currentIndex - 1];
        setPreviousAmount(previousRecord.amount);

        const previousDate = new Date(previousRecord.date);
        const previousHours = previousDate.getHours();
        const previousMinutes = previousDate.getMinutes().toString().padStart(2, '0');
        const previousAmpm = previousHours >= 12 ? 'PM' : 'AM';
        const formattedPreviousHours = (previousHours % 12 || 12).toString().padStart(2, '0');
        setPreviousTime(`${formattedPreviousHours}:${previousMinutes} ${previousAmpm}`);
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
      const [hours, minutes] = newTime.split(':');
      const ampm = newTime.includes('PM') ? 'PM' : 'AM';
      let formattedHours = parseInt(hours, 10);
      if (ampm === 'PM' && formattedHours !== 12) {
        formattedHours += 12;
      } else if (ampm === 'AM' && formattedHours === 12) {
        formattedHours = 0;
      }
      const date = new Date();
      date.setHours(formattedHours, parseInt(minutes, 10), 0, 0);

      // Добавляем 2 часа
      date.setHours(date.getHours() + 2);

      const formattedDate = date.toISOString();
      const recordId = waterRecord._id.$oid || waterRecord._id;
      await dispatch(updateWaterRecord({ recordId, date: formattedDate, amount }));
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
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const formattedHour = (hour % 12 || 12).toString().padStart(2, '0');
        option.value = `${formattedHour}:${minute.toString().padStart(2, '0')} ${ampm}`;
        option.textContent = `${formattedHour}:${minute.toString().padStart(2, '0')} ${ampm}`;
        timeDropdown.appendChild(option);
      }
    }

    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = Math.floor(now.getMinutes() / 5) * 5;
    const currentAmpm = currentHour >= 12 ? 'PM' : 'AM';
    const formattedCurrentHour = (currentHour % 12 || 12).toString().padStart(2, '0');
    timeDropdown.value = `${formattedCurrentHour}:${currentMinute.toString().padStart(2, '0')} ${currentAmpm}`;
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
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchTodayWaterRecords, updateWaterRecord } from '../../redux/water/operations';
// import { selectTodayRecords } from '../../redux/water/selectors';
// import SvgIcons from '../SvgIcons/SvgIcons';
// import css from './EditWaterModal.module.css';

// const EditWaterModal = ({ setModalVisible, waterRecord }) => {
//   const [amount, setAmount] = useState(waterRecord ? waterRecord.amount : 0);
//   const [time, setTime] = useState('');
//   const [previousAmount, setPreviousAmount] = useState(null);
//   const [previousTime, setPreviousTime] = useState(null);
//   const dispatch = useDispatch();
//   const waterRecords = useSelector(selectTodayRecords);

//   useEffect(() => {
//     const fetchRecords = async () => {
//       await dispatch(fetchTodayWaterRecords());
//     };

//     fetchRecords();
//     populateTimeDropdown();

//     if (waterRecord) {
//       const localDate = new Date(waterRecord.date);
//       const hours = localDate.getHours();
//       const minutes = localDate.getMinutes().toString().padStart(2, '0');
//       const ampm = hours >= 12 ? 'PM' : 'AM';
//       const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
//       setTime(`${formattedHours}:${minutes} ${ampm}`);

//       console.log('Current Water Record:', waterRecord); // Для диагностики
//       console.log('All Records:', waterRecords); // Для диагностики

//       if (waterRecords && waterRecords.length > 1) {
//         const currentIndex = waterRecords.findIndex(record => record._id === waterRecord._id);
//         console.log('Current Record Index:', currentIndex); // Для диагностики

//         if (currentIndex > 0) {
//           const previousRecord = waterRecords[currentIndex - 1];
//           console.log('Previous Record:', previousRecord); // Для диагностики
//           setPreviousAmount(previousRecord.amount);

//           const previousDate = new Date(previousRecord.date);
//           const previousHours = previousDate.getHours();
//           const previousMinutes = previousDate.getMinutes().toString().padStart(2, '0');
//           const previousAmpm = previousHours >= 12 ? 'PM' : 'AM';
//           const formattedPreviousHours = (previousHours % 12 || 12).toString().padStart(2, '0');
//           setPreviousTime(`${formattedPreviousHours}:${previousMinutes} ${previousAmpm}`);
//         }
//       }
//     }
//   }, [dispatch, waterRecord]);

//   useEffect(() => {
//     if (waterRecords && waterRecords.length > 1 && waterRecord) {
//       const currentIndex = waterRecords.findIndex(record => record._id === waterRecord._id);
//       if (currentIndex > 0) {
//         const previousRecord = waterRecords[currentIndex - 1];
//         setPreviousAmount(previousRecord.amount);

//         const previousDate = new Date(previousRecord.date);
//         const previousHours = previousDate.getHours();
//         const previousMinutes = previousDate.getMinutes().toString().padStart(2, '0');
//         const previousAmpm = previousHours >= 12 ? 'PM' : 'AM';
//         const formattedPreviousHours = (previousHours % 12 || 12).toString().padStart(2, '0');
//         setPreviousTime(`${formattedPreviousHours}:${previousMinutes} ${previousAmpm}`);
//       }
//     }
//   }, [waterRecords, waterRecord]);

//   const handleClose = () => {
//     setModalVisible(false);
//   };

//   const handleChangeAmount = (delta) => {
//     setAmount((prevAmount) => Math.max(0, prevAmount + delta));
//   };


//   const handleSave = async () => {
//   if (waterRecord && waterRecord._id) {
//     try {
//       const timeElement = document.getElementById('time');
//       const newTime = timeElement.value;
//       const [hours, minutes] = newTime.split(':');
//       const ampm = newTime.includes('PM') ? 'PM' : 'AM';
//       let formattedHours = parseInt(hours, 10);
//       if (ampm === 'PM' && formattedHours !== 12) {
//         formattedHours += 12;
//       } else if (ampm === 'AM' && formattedHours === 12) {
//         formattedHours = 0;
//       }
//       const date = new Date();
//       date.setHours(formattedHours, parseInt(minutes, 10), 0, 0);

//       // Добавляем 2 часа
//       date.setHours(date.getHours() + 2);

//       const formattedDate = date.toISOString();
//       const recordId = waterRecord._id.$oid || waterRecord._id;
//       await dispatch(updateWaterRecord({ recordId, date: formattedDate, amount }));
//       setModalVisible(false);
//     } catch (error) {
//       console.error(error);
//     }
//   }
// };


//   const populateTimeDropdown = () => {
//     const timeDropdown = document.getElementById('time');
//     if (!timeDropdown) return;

//     for (let hour = 0; hour < 24; hour++) {
//       for (let minute = 0; minute < 60; minute += 5) {
//         const option = document.createElement('option');
//         const ampm = hour >= 12 ? 'PM' : 'AM';
//         const formattedHour = (hour % 12 || 12).toString().padStart(2, '0');
//         option.value = `${formattedHour}:${minute.toString().padStart(2, '0')} ${ampm}`;
//         option.textContent = `${formattedHour}:${minute.toString().padStart(2, '0')} ${ampm}`;
//         timeDropdown.appendChild(option);
//       }
//     }

//     const now = new Date();
//     const currentHour = now.getHours();
//     const currentMinute = Math.floor(now.getMinutes() / 5) * 5;
//     const currentAmpm = currentHour >= 12 ? 'PM' : 'AM';
//     const formattedCurrentHour = (currentHour % 12 || 12).toString().padStart(2, '0');
//     timeDropdown.value = `${formattedCurrentHour}:${currentMinute.toString().padStart(2, '0')} ${currentAmpm}`;
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
//             <span className={css.waterAmount}>{previousAmount !== null ? `${previousAmount} ml` : "No notes yet"}</span>
//             {previousTime !== null ? <span className={css.waterTime}>{previousTime}</span> : null}
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



