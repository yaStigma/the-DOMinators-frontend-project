import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// Устанавливаем базовый URL для axios
axios.defaults.baseURL = 'https://the-dominators-back-project.onrender.com';

// Функция для установки заголовка авторизации
const setAuthHeader = (accessToken) => {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

// Получение дневной нормы
export const fetchDailyNorma = createAsyncThunk(
  'dailyNorma/fetch',
  async (_, thunkAPI) => {
    try {
      const authData = JSON.parse(localStorage.getItem('persist:auth'));
      const accessToken = JSON.parse(authData.accessToken);

      if (!accessToken) throw new Error('Unauthorized');

      setAuthHeader(accessToken);  // Установка токена

      const response = await axios.get('/users');
      return response.data.data.daylyNorm / 1000;  // Приводим к литрам
    } catch (error) {
      return handleAxiosError(error, thunkAPI);
    }
  }
);

// Обновление дневной нормы
export const updateDailyNorma = createAsyncThunk(
  'dailyNorma/update',
  async ({ dailyNorma }, thunkAPI) => {
    try {
      const authData = JSON.parse(localStorage.getItem('persist:auth'));
      const accessToken = JSON.parse(authData.accessToken);

      if (!accessToken) throw new Error('Unauthorized');

      setAuthHeader(accessToken);

      const response = await axios.patch('/users/norma', {
        daylyNorm: dailyNorma * 1000,  // Переводим в миллилитры
      });

      toast.success('Daily norma updated successfully!', {
        duration: 4000,
        position: 'top-right',
      });

      return response.data.data.daylyNorm / 1000;
    } catch (error) {
      return handleAxiosError(error, thunkAPI);
    }
  }
);

// Создание записи о воде
export const createWaterRecord = createAsyncThunk(
  'water/createRecord',
  async ({ amount, time }, thunkAPI) => {
    try {
      const authData = JSON.parse(localStorage.getItem('persist:auth'));
      const accessToken = JSON.parse(authData.accessToken);

      if (!accessToken) throw new Error('Unauthorized');

      setAuthHeader(accessToken);

      const response = await axios.post('/water', {
        amount,
        date: formatDateTime(time),  // Форматируем дату и время
      });

      toast.success('Water record created successfully!', {
        duration: 4000,
        position: 'top-right',
      });

      return response.data;
    } catch (error) {
      return handleAxiosError(error, thunkAPI);
    }
  }
);

// Получение всех записей о воде
export const fetchWaterRecords = createAsyncThunk(
  'water/fetchRecords',
  async (_, thunkAPI) => {
    try {
      const authData = JSON.parse(localStorage.getItem('persist:auth'));
      const accessToken = JSON.parse(authData.accessToken);

      if (!accessToken) throw new Error('Unauthorized');

      setAuthHeader(accessToken);

      const response = await axios.get('/water');
      return response.data;
    } catch (error) {
      return handleAxiosError(error, thunkAPI);
    }
  }
);

// Вспомогательная функция для форматирования даты и времени
const formatDateTime = (time) => {
  const date = new Date();
  const formattedDate = date.toISOString().split('T')[0];  // YYYY-MM-DD
  return `${formattedDate}T${time}:00Z`;
};

// Централизованная обработка ошибок axios
const handleAxiosError = (error, thunkAPI) => {
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
};



/*import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { showLoader, hideLoader } from '../loader/slice';

axios.defaults.baseURL = 'https://the-dominators-back-project.onrender.com';

const setAuthHeader = accessToken => {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

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
        date: new Date().toISOString().split('T')[0] + 'T' + time + ':00Z',
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
);*/

/*import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://the-dominators-back-project.onrender.com';

const setAuthHeader = (accessToken) => {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

export const updateDailyNorma = createAsyncThunk(
  'user/water-rate',
  async ({ accessToken, dailyNorma }, thunkAPI) => {
    try {
      setAuthHeader(accessToken);

      const response = await axios.patch('/users/water-rate', { daylyNorm: dailyNorma });

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
    }
  }
);




export const createWaterRecord = createAsyncThunk(
  'water/createRecord',

  async ({ accessToken, amount, time }, thunkAPI) => {
    try {
      setAuthHeader(accessToken);

      const response = await axios.post('/water', {
        amount,
        date: new Date().toISOString().split('T')[0] + 'T' + time + ':00Z',
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
    }
  }
);*/



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


