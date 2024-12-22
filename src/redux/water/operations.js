import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { showLoader, hideLoader } from '../loader/slice';

axios.defaults.baseURL = 'https://the-dominators-back-project.onrender.com';

const setAuthHeader = accessToken => {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};


const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const fetchTodayWaterRecords = createAsyncThunk(
  'water/fetchTodayWaterRecords',
  async (_, thunkAPI) => {
    const authData = JSON.parse(localStorage.getItem('persist:auth'));
    const accessToken = authData.accessToken.replace(/"/g, '');

    try {
      setAuthHeader(accessToken);
      const response = await axios.get('/water/today');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    } finally {
      clearAuthHeader();
    }
  }
);

export const updateWaterRecord = createAsyncThunk(
  'water/updateWaterRecord',
  async ({ userId, date, amount }, thunkAPI) => {
    const authData = JSON.parse(localStorage.getItem('persist:auth'));
    const accessToken = authData.accessToken.replace(/"/g, '');

    try {
      setAuthHeader(accessToken);
      const response = await axios.patch(`/water/${userId}`, { date, amount });
      toast.success('Successfully updated the water record!');
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message || 'Failed to update water record');
      return thunkAPI.rejectWithValue(error.response.data);
    } finally {
      clearAuthHeader();
    }
  }
);





export const updateDailyNorma = createAsyncThunk(
  'user/water-rate',
  async ({ accessToken, dailyNorma }, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(showLoader()); // Показати лоадер перед початком запиту
    try {
      setAuthHeader(accessToken);

      const response = await axios.patch('/users/water-rate', {
        daylyNorm: dailyNorma,
      });

      toast.success(response.data.message, {
        duration: 4000,
        position: 'top-right',
      });

      return response.data;
    } catch (error) {
      if (error.response) {
        const { status, message, data } = error.response.data;
        toast.error(`Error: ${message}`, {
          duration: 4000,
          position: 'top-right',
        });

        return thunkAPI.rejectWithValue({ status, message, data });
      }

      toast.error(`Error: ${error.message}`, {
        duration: 4000,
        position: 'top-right',
      });

      return thunkAPI.rejectWithValue({
        status: null,
        message: error.message,
        data: null,
      });
    } finally {
      dispatch(hideLoader()); // Приховати лоадер після завершення запиту
    }
  }
);






export const createWaterRecord = createAsyncThunk(
  'water/createRecord',
  async ({ accessToken, amount, time }, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(showLoader()); // Показати лоадер перед початком запиту
    try {
      setAuthHeader(accessToken);

      const response = await axios.post('/water', {
        amount,
        date: new Date().toISOString().split('T')[0] + 'T' + time + ':00Z', // Формат даты
      });

      toast.success(response.data.message, {
        duration: 4000,
        position: 'top-right',
      });

      return response.data;
    } catch (error) {
      if (error.response) {
        const { status, message, data } = error.response.data;
        toast.error(`Error: ${message}`, {
          duration: 4000,
          position: 'top-right',
        });

        return thunkAPI.rejectWithValue({ status, message, data });
      }

      toast.error(`Error: ${error.message}`, {
        duration: 4000,
        position: 'top-right',
      });

      return thunkAPI.rejectWithValue({
        status: null,
        message: error.message,
        data: null,
      });
    } finally {
      dispatch(hideLoader()); // Приховати лоадер після завершення запиту
    }
  }
);


// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';

// axios.defaults.baseURL = 'https://the-dominators-back-project.onrender.com';

// const setAuthHeader = (accessToken) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
// };

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

// export const updateDailyNorma = createAsyncThunk(
//   'user/water-rate',
//   async ({ accessToken, dailyNorma }, thunkAPI) => {
//     try {
//       setAuthHeader(accessToken);

//       const response = await axios.put('/water-rate', { dailyNorma });

//       toast.success(response.data.message, {
//         duration: 4000,
//         position: 'top-right',
//       });

//       return response.data;
//     } catch (error) {
//       if (error.response) {
//         const { status, message, data } = error.response.data;
//         toast.error(`Error: ${message}`, {
//           duration: 4000,
//           position: 'top-right',
//         });

//         return thunkAPI.rejectWithValue({ status, message, data });
//       }

//       toast.error(`Error: ${error.message}`, {
//         duration: 4000,
//         position: 'top-right',
//       });

//       return thunkAPI.rejectWithValue({
//         status: null,
//         message: error.message,
//         data: null,
//       });
//     }
//   }
// );

// export const createWaterRecord = createAsyncThunk(
//   'water/createRecord',

//   async ({ accessToken, amount, time }, thunkAPI) => {
//     try {
//       setAuthHeader(accessToken);

//       const response = await axios.post('/water', {
//         amount,
//         date: new Date().toISOString().split('T')[0] + 'T' + time + ':00Z',
//       });

//       toast.success(response.data.message, {
//         duration: 4000,
//         position: 'top-right',
//       });

//       return response.data;
//     } catch (error) {
//       if (error.response) {
//         const { status, message, data } = error.response.data;
//         toast.error(`Error: ${message}`, {
//           duration: 4000,
//           position: 'top-right',
//         });

//         return thunkAPI.rejectWithValue({ status, message, data });
//       }

//       toast.error(`Error: ${error.message}`, {
//         duration: 4000,
//         position: 'top-right',
//       });

//       return thunkAPI.rejectWithValue({
//         status: null,
//         message: error.message,
//         data: null,
//       });
//     }
//   }
// );



// export const createWaterRecord = createAsyncThunk(
//   'water/createRecord',

//   async ({ accessToken, amount, time }, thunkAPI) => {
//     try {
//       setAuthHeader(accessToken);

//       const response = await axios.post('/water', {
//         amount,
//         date: new Date().toISOString().split('T')[0] + 'T' + time + ':00Z',
//       });

//       toast.success(response.data.message, {
//         duration: 4000,
//         position: 'top-right',
//       });

//       return response.data;
//     } catch (error) {
//       if (error.response) {
//         const { status, message, data } = error.response.data;
//         toast.error(`Error: ${message}`, {
//           duration: 4000,
//           position: 'top-right',
//         });

//         return thunkAPI.rejectWithValue({ status, message, data });
//       }

//       toast.error(`Error: ${error.message}`, {
//         duration: 4000,
//         position: 'top-right',
//       });

//       return thunkAPI.rejectWithValue({
//         status: null,
//         message: error.message,
//         data: null,
//       });
//     }
//   }
// );



