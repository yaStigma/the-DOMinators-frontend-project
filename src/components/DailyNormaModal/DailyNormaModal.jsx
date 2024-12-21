import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { updateDailyNorma } from '../../redux/water/operations';
import css from './DailyNormaModal.module.css';

const DailyNormaModal = ({ setModalVisible }) => {
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

  const adjustTextareaHeight = () => {
    const textarea = document.getElementById('infoText');
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  const calculateWaterIntake = useCallback(() => {
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
  }, [calculateWaterIntake]);

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

    const authData = JSON.parse(localStorage.getItem('persist:auth'));
    const accessToken = authData.accessToken.replace(/"/g, '');

    const result = await dispatch(updateDailyNorma({ accessToken, dailyNorma }));

    if (!result.error) {
      setModalVisible(false);
    } else {
      alert(`Ошибка: ${result.error.message}`);
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
          <textarea
            id="infoText"
            readOnly
            className={css.textarea}
            value="* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"
          />
          <form onSubmit={handleSave}>
            <h4>Calculate your rate:</h4>
            <div className={css.radioGroup}>
              <label className={css.radioLabel}>
                <input type="radio" name="gender" value="woman" checked={gender === 'woman'} onChange={() => setGender('woman')} /> For woman
              </label>
              <label className={css.radioLabel}>
                <input type="radio" name="gender" value="man" checked={gender === 'man'} onChange={() => setGender('man')} /> For man
              </label>
            </div>
            <div className={css.inputWrapper}>
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

export default DailyNormaModal;





// import React, { useState, useEffect, useCallback } from 'react';
// import { useDispatch } from 'react-redux';
// import { updateDailyNorma } from '../../redux/water/operations';
// import css from './DailyNormaModal.module.css';

// const DailyNormaModal = ({ setModalVisible }) => {
//   const [gender, setGender] = useState('woman');
//   const [weight, setWeight] = useState(0);
//   const [activityTime, setActivityTime] = useState(0);
//   const [requiredWater, setRequiredWater] = useState('0 L');
//   const [waterIntake, setWaterIntake] = useState(0);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     adjustTextareaHeight();
//     window.addEventListener('resize', adjustTextareaHeight);
//     return () => window.removeEventListener('resize', adjustTextareaHeight);
//   }, []);

//   const adjustTextareaHeight = () => {
//     const textarea = document.getElementById('infoText');
//     textarea.style.height = 'auto';
//     textarea.style.height = textarea.scrollHeight + 'px';
//   };

//   const calculateWaterIntake = useCallback(() => {
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
//   }, [gender, weight, activityTime]);

//   useEffect(() => {
//     calculateWaterIntake();
//   }, [calculateWaterIntake]);

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

//     const authData = JSON.parse(localStorage.getItem('persist:auth'));
//     const accessToken = authData.accessToken.replace(/"/g, '');

//     const result = await dispatch(updateDailyNorma({ accessToken, dailyNorma }));

//     if (!result.error) {
//       setModalVisible(false); // Закрываем модальное окно при успешном обновлении
//     } else {
//       alert(`Ошибка: ${result.error.message}`);
//     }
//   };

//   return (
//     <div className={css.App}>
//       <div className={css.modal}>
//         <div className={css.modalContent}>
//           <div className={css.navnButton}>
//             <h2>My daily norma</h2>
//             <button className={css.closeButton} onClick={() => setModalVisible(false)}>&times;</button>
//           </div>
//           <div className={css.formulas}>
//             <p>
//               <span className={css.label}>For girl:</span>
//               <span className={css.formula}>V=(M*0.03) + (T*0.4)</span>
//             </p>
//             <p>
//               <span className={css.label}>For man:</span>
//               <span className={css.formula}>V=(M*0.04) + (T*0.6)</span>
//             </p>
//           </div>
//           <textarea id="infoText" readOnly className={css.textarea}>
//             * V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)
//           </textarea>
//           <form onSubmit={handleSave}>
//             <h4>Calculate your rate:</h4>
//             <div className={css.radioGroup}>
//               <label className={css.radioLabel}>
//                 <input type="radio" name="gender" value="woman" checked={gender === 'woman'} onChange={() => setGender('woman')} /> For woman
//               </label>
//               <label className={css.radioLabel}>
//                 <input type="radio" name="gender" value="man" checked={gender === 'man'} onChange={() => setGender('man')} /> For man
//               </label>
//             </div>
//             <div className={css.inputWrapper}>
//               <label className={css.labelInput} htmlFor="weight">Your weight in kilograms:</label>
//               <input
//                 className={css.bluInput}
//                 type="number"
//                 id="weight"
//                 name="weight"
//                 value={weight}
//                 onChange={(e) => setWeight(parseFloat(e.target.value))}
//                 onFocus={clearDefault}
//                 onBlur={restoreDefault}
//               />
//             </div>
//             <div className={css.inputWrapper}>
//               <label className={css.labelInput} htmlFor="activity-time">The time of active participation in sports or other activities with a high physical load in hours:</label>
//               <input
//                 className={css.bluInput}
//                 type="number"
//                 id="activity-time"
//                 name="activity-time"
//                 value={activityTime}
//                 onChange={(e) => setActivityTime(parseFloat(e.target.value))}
//                 onFocus={clearDefault}
//                 onBlur={restoreDefault}
//               />
//             </div>
//             <div>
//               <p>
//                 <span>The required amount of water in liters per day:</span>
//                 <span className={`${css.blu} ${css.requiredWater}`}>{requiredWater}</span>
//               </p>
//             </div>
//             <h4>Write down how much water you will drink:</h4>
//             <div className={css.inputWrapper}>
//               <input
//                 className={css.bluInput}
//                 type="number"
//                 id="water-intake"
//                 name="water-intake"
//                 value={waterIntake}
//                 onChange={(e) => setWaterIntake(parseFloat(e.target.value))}
//                 onFocus={clearDefault}
//                 onBlur={restoreDefault}
//               />
//             </div>
//             <button type="submit" className={css.saveButton}>Save</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DailyNormaModal;


