import axios from 'axios';

export const updateDailyNorma = (dailyNorma) => async (dispatch) => {
  const token = localStorage.getItem('token');

  try {
    const response = await axios.put(
      'https://the-dominators-back-project.onrender.com',
      { dailyNorma },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    dispatch({
      type: 'UPDATE_DAILY_NORMA_SUCCESS',
      payload: response.data
    });


    return { success: true, message: response.data.message };
  } catch (error) {
    dispatch({
      type: 'UPDATE_DAILY_NORMA_FAILURE',
      payload: error.response.data
    });


    return { success: false, message: error.response.data.message };
  }
};


// import axios from 'axios';

// export const updateDailyNorma = (dailyNorma) => async (dispatch) => {
//   const token = localStorage.getItem('token');

//   try {
//     const response = await axios.put(
//       'https://the-dominators-back-project.onrender.com',
//       { dailyNorma },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       }
//     );

//     dispatch({
//       type: 'UPDATE_DAILY_NORMA_SUCCESS',
//       payload: response.data
//     });
//   } catch (error) {
//     dispatch({
//       type: 'UPDATE_DAILY_NORMA_FAILURE',
//       payload: error.response.data
//     });
//   }
// };




