import axios from 'axios';

export const createWaterRecord = (token, amount, time) => async (dispatch) => {
  try {
    const response = await axios.post(
      'https://the-dominators-back-project.onrender.com/water-records',
      {
        amount,
        date: new Date().toISOString().split('T')[0] + 'T' + time + ':00Z',
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    dispatch({
      type: 'CREATE_WATER_RECORD_SUCCESS',
      payload: response.data,
    });
    alert(response.data.message);
  } catch (error) {
    if (error.response && error.response.data) {
      alert(error.response.data.message);
      throw new Error(error.response.data.message);
    } else {
      alert('An error occurred while processing the request.');
      throw new Error('An error occurred while processing the request.');
    }
    dispatch({
      type: 'CREATE_WATER_RECORD_FAIL',
      payload: error.response ? error.response.data : { message: 'An error occurred' },
    });
  }
};


// import axios from 'axios';

// export const createWaterRecord = (token, amount, time) => async (dispatch) => {
//   try {
//     const response = await axios.post(
//       'https://the-dominators-back-project.onrender.com/water-records',
//       {
//         amount,
//         date: new Date().toISOString().split('T')[0] + 'T' + time + ':00Z',
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       }
//     );
//     dispatch({
//       type: 'CREATE_WATER_RECORD_SUCCESS',
//       payload: response.data,
//     });
//     alert(response.data.message);
//   } catch (error) {
//     if (error.response && error.response.data) {
//       alert(error.response.data.message);
//     } else {
//       alert('An error occurred while processing the request.');
//     }
//     dispatch({
//       type: 'CREATE_WATER_RECORD_FAIL',
//       payload: error.response ? error.response.data : { message: 'An error occurred' },
//     });
//   }
// };
