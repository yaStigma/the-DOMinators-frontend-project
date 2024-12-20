import React, { useState, useEffect, useCallback } from 'react'; //додала useCallback
import { useDispatch } from 'react-redux';
import { updateDailyNorma } from '../../redux/water/dailyNormaModal';
import css from './DailyNormaModal.module.css';

const App = ({ setModalVisible }) => { // Принимаем setModalVisible как пропс
  const [gender, setGender] = useState('woman');
  const [weight, setWeight] = useState(0);
  const [activityTime, setActivityTime] = useState(0);
  const [requiredWater, setRequiredWater] = useState('0 L');
  const [waterIntake, setWaterIntake] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    adjustTextareaHeight();
    window.addEventListener('resize', adjustTextareaHeight);
    return () => window.removeEventListener('resize', adjustTextareaHeight);
  }, []);

  // useEffect(() => {
  //   calculateWaterIntake();
  // }, [gender, weight, activityTime]);   перенесла у calculateWaterIntake

  const adjustTextareaHeight = () => {
    const textarea = document.getElementById('infoText');
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  const calculateWaterIntake = useCallback(() => {   // додала використання колбеку, для  для мемоізації функції 
    let V;
    if (gender === 'woman') {
      V = weight * 0.03 + activityTime * 0.4;
    } else if (gender === 'man') {
      V = weight * 0.04 + activityTime * 0.6;
    }

    if (isNaN(V)) {
      V = 0;
    }

    setRequiredWater(V === 0 ? '0 L' : V.toFixed(2) + ' L');
  }, [gender, weight, activityTime]);

  useEffect(() => {
    calculateWaterIntake();
  }, [calculateWaterIntake]);  // використання useEffect у функції

  const clearDefault = (event) => {
    if (event.target.value === '0') {
      event.target.value = '';
    }
  };

  const restoreDefault = (event) => {
    if (event.target.value === '') {
      event.target.value = '0';
    }
  };

  const handleSave = async (event) => {
    event.preventDefault();
    const dailyNorma = waterIntake * 1000;

    if (dailyNorma > 5000) {
      alert('Максимальная суточная норма потребления воды - 5000 мл');
      return;
    }

    const result = await dispatch(updateDailyNorma(dailyNorma));

    if (result.success) {
      setModalVisible(false); // Закрываем модальное окно при успешном обновлении
      alert('Successfully updated daily norm!');
    } else {
      alert(`Ошибка: ${result.message}`);
    }
  };

  return (
    <div className={css.App}>
      <div className={css.modal}>
        <div className={css.modalContent}>
          <div className={css.navnButton}>
<h2>My daily norma</h2>
          <button className={css.closeButton} onClick={() => setModalVisible(false)}>&times;</button>

          </div>
          <div className={css.formulas}>
            <p>
              <span className={css.label}>For girl:</span>
              <span className={css.formula}>V=(M*0.03) + (T*0.4)</span>
            </p>
            <p>
              <span className={css.label}>For man:</span>
              <span className={css.formula}>V=(M*0.04) + (T*0.6)</span>
            </p>
          </div>
          <textarea id="infoText" readOnly className={css.textarea}>
            * V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)
          </textarea>
          <form  onSubmit={handleSave}>
            <h4>Calculate your rate:</h4>
            <div className={css.radioGroup}>
              <label className={css.radioLabel}>
                <input type="radio" name="gender" value="woman" checked={gender === 'woman'} onChange={() => setGender('woman')} /> For woman
              </label>
              <label className={css.radioLabel}>
                <input type="radio" name="gender" value="man" checked={gender === 'man'} onChange={() => setGender('man')} /> For man
              </label>
            </div>
            <div  className={css.inputWrapper}>
              <label className={css.labelInput} htmlFor="weight">Your weight in kilograms:</label>
              <input
                className={css.bluInput}
                type="number"
                id="weight"
                name="weight"
                value={weight}
                onChange={(e) => setWeight(parseFloat(e.target.value))}
                onFocus={clearDefault}
                onBlur={restoreDefault}
              />
</div>
            <div className={css.inputWrapper}>
              <label className={css.labelInput} htmlFor="activity-time">The time of active participation in sports or other activities with a high physical load in hours:</label>
              <input
                className={css.bluInput}
                type="number"
                id="activity-time"
                name="activity-time"
                value={activityTime}
                onChange={(e) => setActivityTime(parseFloat(e.target.value))}
                onFocus={clearDefault}
                onBlur={restoreDefault}
              />
            </div>
            <div>
              <p>
                <span>The required amount of water in liters per day:</span>
                <span className={`${css.blu} ${css.requiredWater}`}>{requiredWater}</span>
              </p>
            </div>
            <h4>Write down how much water you will drink:</h4>
            <div className={css.inputWrapper}>
              <input
                className={css.bluInput}
                type="number"
                id="water-intake"
                name="water-intake"
                value={waterIntake}
                onChange={(e) => setWaterIntake(parseFloat(e.target.value))}
                onFocus={clearDefault}
                onBlur={restoreDefault}
              />
            </div>
            <button type="submit" className={css.saveButton}>Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;




// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { updateDailyNorma } from './redux/water/dailyNormaModal';
// import css from './DailyNormaModal.module.css';

// const App = () => {
//   const [gender, setGender] = useState('woman');
//   const [weight, setWeight] = useState(0);
//   const [activityTime, setActivityTime] = useState(0);
//   const [requiredWater, setRequiredWater] = useState('0 L');
//   const [waterIntake, setWaterIntake] = useState(0);
//   const [modalVisible, setModalVisible] = useState(true);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     adjustTextareaHeight();
//     window.addEventListener('resize', adjustTextareaHeight);
//     return () => window.removeEventListener('resize', adjustTextareaHeight);
//   }, []);

//   useEffect(() => {
//     calculateWaterIntake();
//   }, [gender, weight, activityTime]);

//   const adjustTextareaHeight = () => {
//     const textarea = document.getElementById('infoText');
//     textarea.style.height = 'auto';
//     textarea.style.height = textarea.scrollHeight + 'px';
//   };

//   const calculateWaterIntake = () => {
//     let V;
//     if (gender === 'woman') {
//       V = weight * 0.03 + activityTime * 0.4;
//     } else if (gender === 'man') {
//       V = weight * 0.04 + activityTime * 0.6;
//     }

//     if (isNaN(V)) {
//       V = 0;
//     }

//     setRequiredWater(V === 0 ? '0 L' : V.toFixed(2) + ' L');
//   };

//   const clearDefault = (event) => {
//     if (event.target.value === '0') {
//       event.target.value = '';
//     }
//   };

//   const restoreDefault = (event) => {
//     if (event.target.value === '') {
//       event.target.value = '0';
//     }
//   };

//   const handleSave = async (event) => {
//     event.preventDefault();
//     const dailyNorma = waterIntake * 1000;

//     if (dailyNorma > 5000) {
//       alert('Максимальная суточная норма потребления воды - 5000 мл');
//       return;
//     }

//     const result = await dispatch(updateDailyNorma(dailyNorma));

//     if (result.success) {
//       setModalVisible(false);
//       alert('Successfully updated daily norm!');
//     } else {
//       alert(`Ошибка: ${result.message}`);
//     }
//   };

//   return (
//     <div className={css.App}>
//       {modalVisible && (
//         <div className={css.modal}>
//           <div className={css.modalContent}>
//             <button className={css.closeButton} onClick={() => setModalVisible(false)}>&times;</button>
//             <h2>My daily norma</h2>
//             <div className={css.formulas}>
//               <p>
//                 <span className={css.label}>For girl:</span>
//                 <span className={css.formula}>V=(M*0.03) + (T*0.4)</span>
//               </p>
//               <p>
//                 <span className={css.label}>For man:</span>
//                 <span className={css.formula}>V=(M*0.04) + (T*0.6)</span>
//               </p>
//             </div>
//             <textarea id="infoText" readOnly className={css.textarea}>
//               * V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)
//             </textarea>
//             <form onSubmit={handleSave}>
//               <h4>Calculate your rate:</h4>
//               <div className={css.radioGroup}>
//                 <label className={css.radioLabel}>
//                   <input type="radio" name="gender" value="woman" checked={gender === 'woman'} onChange={() => setGender('woman')} /> For woman
//                 </label>
//                 <label className={css.radioLabel}>
//                   <input type="radio" name="gender" value="man" checked={gender === 'man'} onChange={() => setGender('man')} /> For man
//                 </label>
//               </div>
//               <div>
//                 <label className={css.labelInput} htmlFor="weight">Your weight in kilograms:</label>
//                 <input
//                   className={css.blu}
//                   type="number"
//                   id="weight"
//                   name="weight"
//                   value={weight}
//                   onChange={(e) => setWeight(parseFloat(e.target.value))}
//                   onFocus={clearDefault}
//                   onBlur={restoreDefault}
//                 />
//               </div>
//               <div>
//                 <label className={css.labelInput} htmlFor="activity-time">The time of active participation in sports or other activities with a high physical load in hours:</label>
//                 <input
//                   className={css.blu}
//                   type="number"
//                   id="activity-time"
//                   name="activity-time"
//                   value={activityTime}
//                   onChange={(e) => setActivityTime(parseFloat(e.target.value))}
//                   onFocus={clearDefault}
//                   onBlur={restoreDefault}
//                 />
//               </div>
//               <div>
//                 <p>
//                   <span>The required amount of water in liters per day:</span>
//                   <span className={`${css.blu} ${css.requiredWater}`}>{requiredWater}</span>
//                 </p>
//               </div>
//               <h4>Write down how much water you will drink:</h4>
//               <div>
//                 <input
//                   className={css.blu}
//                   type="number"
//                   id="water-intake"
//                   name="water-intake"
//                   value={waterIntake}
//                   onChange={(e) => setWaterIntake(parseFloat(e.target.value))}
//                   onFocus={clearDefault}
//                   onBlur={restoreDefault}
//                 />
//               </div>
//               <button type="submit" className={css.saveButton}>Save</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;



// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { updateDailyNorma } from './redux/water/dailyNormaModal';
// import css from './DailyNormaModal.module.css';

// const App = () => {
//   const [gender, setGender] = useState('woman');
//   const [weight, setWeight] = useState(0);
//   const [activityTime, setActivityTime] = useState(0);
//   const [requiredWater, setRequiredWater] = useState('0 L');
//   const [waterIntake, setWaterIntake] = useState(0);
//   const [modalVisible, setModalVisible] = useState(true);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     adjustTextareaHeight();
//     window.addEventListener('resize', adjustTextareaHeight);
//     return () => window.removeEventListener('resize', adjustTextareaHeight);
//   }, []);

//   useEffect(() => {
//     calculateWaterIntake();
//   }, [gender, weight, activityTime]);

//   const adjustTextareaHeight = () => {
//     const textarea = document.getElementById('infoText');
//     textarea.style.height = 'auto';
//     textarea.style.height = textarea.scrollHeight + 'px';
//   };

//   const calculateWaterIntake = () => {
//     let V;
//     if (gender === 'woman') {
//       V = weight * 0.03 + activityTime * 0.4;
//     } else if (gender === 'man') {
//       V = weight * 0.04 + activityTime * 0.6;
//     }

//     if (isNaN(V)) {
//       V = 0;
//     }

//     setRequiredWater(V === 0 ? '0 L' : V.toFixed(2) + ' L');
//   };

//   const clearDefault = (event) => {
//     if (event.target.value === '0') {
//       event.target.value = '';
//     }
//   };

//   const restoreDefault = (event) => {
//     if (event.target.value === '') {
//       event.target.value = '0';
//     }
//   };

//   const handleSave = async (event) => {
//     event.preventDefault();
//     const dailyNorma = waterIntake * 1000;

//     if (dailyNorma > 5000) {
//       alert('Максимальная суточная норма потребления воды - 5000 мл');
//       return;
//     }

//     const result = await dispatch(updateDailyNorma(dailyNorma));

//     if (result.success) {
//       setModalVisible(false);
//       alert('Successfully updated daily norm!');
//     } else {
//       alert(`Ошибка: ${result.message}`);
//     }
//   };

//   return (
//     <div className="App">
//       {modalVisible && (
//         <div className="modal">
//           <div className="modal-content">
//             <button className="close-button" onClick={() => setModalVisible(false)}>&times;</button>
//             <h2>My daily norma</h2>
//             <div className="formulas">
//               <p>
//                 <span className="label">For girl:</span>
//                 <span className="formula">V=(M*0.03) + (T*0.4)</span>
//               </p>
//               <p>
//                 <span className="label">For man:</span>
//                 <span className="formula">V=(M*0.04) + (T*0.6)</span>
//               </p>
//             </div>
//             <textarea id="infoText" readOnly>
//               * V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)
//             </textarea>
//             <form onSubmit={handleSave}>
//               <h4>Calculate your rate:</h4>
//               <div className="radio-group">
//                 <label className="radio-label">
//                   <input type="radio" name="gender" value="woman" checked={gender === 'woman'} onChange={() => setGender('woman')} /> For woman
//                 </label>
//                 <label className="radio-label">
//                   <input type="radio" name="gender" value="man" checked={gender === 'man'} onChange={() => setGender('man')} /> For man
//                 </label>
//               </div>
//               <div>
//                 <label className="label-input" htmlFor="weight">Your weight in kilograms:</label>
//                 <input
//                   className="blu"
//                   type="number"
//                   id="weight"
//                   name="weight"
//                   value={weight}
//                   onChange={(e) => setWeight(parseFloat(e.target.value))}
//                   onFocus={clearDefault}
//                   onBlur={restoreDefault}
//                 />
//               </div>
//               <div>
//                 <label className="label-input" htmlFor="activity-time">The time of active participation in sports or other activities with a high physical load in hours:</label>
//                 <input
//                   className="blu"
//                   type="number"
//                   id="activity-time"
//                   name="activity-time"
//                   value={activityTime}
//                   onChange={(e) => setActivityTime(parseFloat(e.target.value))}
//                   onFocus={clearDefault}
//                   onBlur={restoreDefault}
//                 />
//               </div>
//               <div>
//                 <p>
//                   <span>The required amount of water in liters per day:</span>
//                   <span className="blu required-water">{requiredWater}</span>
//                 </p>
//               </div>
//               <h4>Write down how much water you will drink:</h4>
//               <div>
//                 <input
//                   className="blu"
//                   type="number"
//                   id="water-intake"
//                   name="water-intake"
//                   value={waterIntake}
//                   onChange={(e) => setWaterIntake(parseFloat(e.target.value))}
//                   onFocus={clearDefault}
//                   onBlur={restoreDefault}
//                 />
//               </div>
//               <button type="submit" className="save-button">Save</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

