import { createSlice} from '@reduxjs/toolkit';
import {
  fetchTodayWaterRecords,
  updateWaterRecord,
  updateDailyNorma,
  createWaterRecord,
} from './operations';

const initialState = {
  waterRecords: [],
  loading: false,
  error: null,
};

const waterSlice = createSlice({
  name: 'water',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(createWaterRecord.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createWaterRecord.fulfilled, (state, action) => {
        state.loading = false;
        state.waterRecords.push(action.payload);
      })
      .addCase(createWaterRecord.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateDailyNorma.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateDailyNorma.fulfilled, (state) => {
        state.loading = false;

      })
      .addCase(updateDailyNorma.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchTodayWaterRecords.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodayWaterRecords.fulfilled, (state, action) => {
        state.loading = false;
        state.waterRecords = action.payload;
      })
      .addCase(fetchTodayWaterRecords.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateWaterRecord.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateWaterRecord.fulfilled, (state, action) => {
        state.loading = false;

      })
      .addCase(updateWaterRecord.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default waterSlice.reducer;



// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// axios.defaults.baseURL = 'https://the-dominators-back-project.onrender.com';

// const setAuthHeader = (accessToken) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
// };

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };


// export const createWaterRecord = createAsyncThunk(
//   'water/createRecord',
//   async ({ accessToken, amount, time }, thunkAPI) => {
//     try {
//       setAuthHeader(accessToken);

//       const response = await axios.post('/water', {
//         amount,
//         date: new Date().toISOString().split('T')[0] + 'T' + time + ':00Z', // Формат даты
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

// export const updateDailyNorma = createAsyncThunk(
//   'user/water-rate',
//   async ({ accessToken, dailyNorma }, thunkAPI) => {
//     try {
//       setAuthHeader(accessToken);

//       const response = await axios.patch('/users/water-rate', { daylyNorm: dailyNorma });

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


// const initialState = {
//   waterRecords: [],
//   loading: false,
//   error: null,
// };


// const waterSlice = createSlice({
//   name: 'water',
//   initialState,
//   reducers: {

//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(createWaterRecord.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(createWaterRecord.fulfilled, (state, action) => {
//         state.loading = false;
//         state.waterRecords.push(action.payload);
//       })
//       .addCase(createWaterRecord.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(updateDailyNorma.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(updateDailyNorma.fulfilled, (state, action) => {
//         state.loading = false;

//       })
//       .addCase(updateDailyNorma.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default waterSlice.reducer;




// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// axios.defaults.baseURL = 'https://the-dominators-back-project.onrender.com';

// const setAuthHeader = (accessToken) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
// };

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

// // Асинхронные действия
// export const createWaterRecord = createAsyncThunk(
//   'water/createRecord',
//   async ({ accessToken, amount, time }, thunkAPI) => {
//     try {
//       setAuthHeader(accessToken);

//       const response = await axios.post('/water', {
//         amount,
//         date: new Date().toISOString().split('T')[0] + 'T' + time + ':00Z', // Формат даты
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

// export const updateDailyNorma = createAsyncThunk(
//   'user/water-rate',
//   async ({ accessToken, dailyNorma }, thunkAPI) => {
//     try {
//       setAuthHeader(accessToken);

//       const response = await axios.patch('/users/water-rate', { daylyNorm: dailyNorma });

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

// // Начальное состояние
// const initialState = {
//   waterRecords: [],
//   loading: false,
//   error: null,
// };

// // Создание слайса
// const waterSlice = createSlice({
//   name: 'water',
//   initialState,
//   reducers: {
//     // Здесь могут быть ваши синхронные редюсеры, если нужно
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(createWaterRecord.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(createWaterRecord.fulfilled, (state, action) => {
//         state.loading = false;
//         state.waterRecords.push(action.payload);
//       })
//       .addCase(createWaterRecord.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(updateDailyNorma.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(updateDailyNorma.fulfilled, (state, action) => {
//         state.loading = false;
//         // Обновить состояние с результатами действия updateDailyNorma
//       })
//       .addCase(updateDailyNorma.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default waterSlice.reducer;

