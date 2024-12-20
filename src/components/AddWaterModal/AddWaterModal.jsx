import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createWaterRecord } from '../../redux/water/operations';
import css from './AddWaterModal.module.css';

const AddWaterModal = ({ setModalVisible }) => {
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
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Unauthorized');
      return;
    }

    try {
      await dispatch(createWaterRecord(token, amount, time));
      setModalVisible(false);
    } catch (error) {
      alert(error.message);
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



// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { createWaterRecord } from '../../redux/water/operations';
// import css from './AddWaterModal.module.css';

// const AddWaterModal = ({ setModalVisible }) => {
//   const [amount, setAmount] = useState(0);
//   const [time, setTime] = useState('');
//   const dispatch = useDispatch();

//   useEffect(() => {
//     populateTimeDropdown();
//   }, []);

//   const handleClose = () => {
//     setModalVisible(false);
//   };

//   const handleChangeAmount = (delta) => {
//     setAmount((prevAmount) => Math.max(0, prevAmount + delta));
//   };

//   const handleSave = () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       alert('Unauthorized');
//       return;
//     }

//     dispatch(createWaterRecord(token, amount, time));
//     setModalVisible(false);
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

//   return (
//     <div className={css.modal}>
//       <div className={css.modalContent}>
//         <div className={css.modalHeader}>
//           <h2>Add water</h2>
//           <span className={css.close} onClick={handleClose}>&times;</span>
//         </div>
//         <div className={css.modalBody}>
//           <h4 className={css.labelDistance} htmlFor="amount">Choose a value:</h4>
//           <label className={css.labelDistanceText} htmlFor="amount">Amount of water:</label>
//           <div className={css.amountSelector}>
//             <button className={css.buttonSelector} onClick={() => handleChangeAmount(-50)}>-</button>
//             <span id="amount">{amount}ml</span>
//             <button className={css.buttonSelector} onClick={() => handleChangeAmount(50)}>+</button>
//           </div>
//           <label className={css.labelDistance} htmlFor="time">Recording time:</label>
//           <select className={css.inputText} id="time" onChange={(e) => setTime(e.target.value)}></select>
//           <h4 className={css.labelDistance} htmlFor="value">Enter the value of the water used:</h4>
//           <input className={css.inputText} type="number" id="value" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
//           <div className={css.inputSaveContainer}>
//             <input className={css.inputField} type="text" id="autoFillInput" readOnly value={`${amount}ml`} />
//             <button className={css.saveButton} onClick={handleSave}>Save</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddWaterModal;


// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { createWaterRecord } from '../../redux/water/operations';
// import css from './AddWaterModal.module.css';

// const AddWaterModal = ({ setModalVisible }) => {
//   const [amount, setAmount] = useState(0);
//   const [time, setTime] = useState('');
//   const dispatch = useDispatch();

//   useEffect(() => {
//     populateTimeDropdown();
//   }, []);

//   const handleClose = () => {
//     setModalVisible(false);
//   };

//   const handleChangeAmount = (delta) => {
//     setAmount((prevAmount) => Math.max(0, prevAmount + delta));
//   };

//   const handleSave = () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       alert('Unauthorized');
//       return;
//     }

//     dispatch(createWaterRecord(token, amount, time));
//     setModalVisible(false);
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

//   return (
//     <div className={css.modal}>
//       <div className={css.modalContent}>
//         <div className={css.modalHeader}>
//           <h2>Add water</h2>
//           <span className={css.close} onClick={handleClose}>&times;</span>
//         </div>
//         <div className={css.modalBody}>
//           <h4 className={css.labelDistance} htmlFor="amount">Choose a value:</h4>
//           <label className={css.labelDistanceText} htmlFor="amount">Amount of water:</label>
//           <div className={css.amountSelector}>
//             <button onClick={() => handleChangeAmount(-50)}>-</button>
//             <span id="amount">{amount}ml</span>
//             <button onClick={() => handleChangeAmount(50)}>+</button>
//           </div>
//           <label className={css.labelDistance} htmlFor="time">Recording time:</label>
//           <select className={css.inputText} id="time" onChange={(e) => setTime(e.target.value)}></select>
//           <h4 className={css.labelDistance} htmlFor="value">Enter the value of the water used:</h4>
//           <input className={css.inputText} type="number" id="value" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
//           <div className={css.inputSaveContainer}>
//             <input type="text" id="autoFillInput" readOnly value={`${amount}ml`} />
//             <button className={css.saveButton} onClick={handleSave}>Save</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddWaterModal;



// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { createWaterRecord } from '../../redux/water/operations';
// import css from './AddWaterModal.module.css';

// const AddWaterModal = ({ setModalVisible }) => {
//   const [amount, setAmount] = useState(0);
//   const [time, setTime] = useState('');
//   const dispatch = useDispatch();

//   useEffect(() => {
//     populateTimeDropdown();
//   }, []);

//   const handleClose = () => {
//     setModalVisible(false);
//   };

//   const handleChangeAmount = (delta) => {
//     setAmount((prevAmount) => Math.max(0, prevAmount + delta));
//   };

//   const handleSave = () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       alert('Unauthorized');
//       return;
//     }

//     dispatch(createWaterRecord(token, amount, time));
//     setModalVisible(false);
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

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h2>Add water</h2>
//           <span className="close" onClick={handleClose}>&times;</span>
//         </div>
//         <div className="modal-body">
//           <h4 className="label-distance" htmlFor="amount">Choose a value:</h4>
//           <label className="label-distance-text" htmlFor="amount">Amount of water:</label>
//           <div className="amount-selector">
//             <button onClick={() => handleChangeAmount(-50)}>-</button>
//             <span id="amount">{amount}ml</span>
//             <button onClick={() => handleChangeAmount(50)}>+</button>
//           </div>
//           <label className="label-distance" htmlFor="time">Recording time:</label>
//           <select className="input-text" id="time" onChange={(e) => setTime(e.target.value)}></select>
//           <h4 className="label-distance" htmlFor="value">Enter the value of the water used:</h4>
//           <input className="input-text" type="number" id="value" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
//           <div className="input-save-container">
//             <input type="text" id="autoFillInput" readOnly value={`${amount}ml`} />
//             <button className="save-button" onClick={handleSave}>Save</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddWaterModal;
