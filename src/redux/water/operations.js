import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
// import { showLoader, hideLoader } from '../loader/slice';

// Устанавливаем базовый URL для axios
axios.defaults.baseURL = 'https://the-dominators-back-project.onrender.com';

// Функция для установки заголовка авторизации
const setAuthHeader = accessToken => {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// Получение дневной нормы
export const fetchDailyNorma = createAsyncThunk(
  'dailyNorma/fetch',
  async (_, thunkAPI) => {
    try {
      const authData = JSON.parse(localStorage.getItem('persist:auth'));
      const accessToken = JSON.parse(authData.accessToken);

      if (!accessToken) throw new Error('Unauthorized');

      setAuthHeader(accessToken); // Установка токена

      const response = await axios.get('/users');
      return response.data.data.daylyNorm / 1000; // Приводим к литрам
    } catch (error) {
      return handleAxiosError(error, thunkAPI);
    }
  }
);

export const fetchTodayWaterRecords = createAsyncThunk(
  'water/fetchTodayWaterRecords',
  async (_, thunkAPI) => {
    const authData = JSON.parse(localStorage.getItem('persist:auth'));
    const accessToken = authData.accessToken.replace(/"/g, '');

    try {
      setAuthHeader(accessToken);
      const response = await axios.get('/water/today');
      const { percentageOfGoal, records } = response.data;

      return {
        percentageOfGoal,
        records: records,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    } finally {
      clearAuthHeader();
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
        daylyNorm: dailyNorma * 1000, // Переводим в миллилитры
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
        date: formatDateTime(time),
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
const formatDateTime = time => {
  const date = new Date();
  const formattedDate = date.toISOString().split('T')[0]; // YYYY-MM-DD
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
      toast.error(
        error.response.message || 'Failed to update water record'
      );
      return thunkAPI.rejectWithValue({
        status: null,
        message: error.message,
        data: null,
      });
    } finally {
      clearAuthHeader();
    }
  }
);

export const deleteWaterRecord = createAsyncThunk(
  "water/deleteWaterRecord",
  async (userId, thunkAPI) => {
    try {
      const response = await axios.delete(`/water/${userId}`);
      toast.success('Successfully deleted the water record!');
      return response.data.data; // Возвращаем только "data"
    } catch (error) {
      toast.error(
        error.response?.data?.message || 'Failed to delete water record'
      );
      return thunkAPI.rejectWithValue({
        status: error.response?.status || null,
        message: error.response?.data?.message || error.message,
        data: null,
      });
    }
  }
);

export const fetchDaysArray = createAsyncThunk(
  'water/fetchDaysArray',
  async ({ monthName, year, accessToken }, thunkAPI) => {
    // const { dispatch } = thunkAPI;
    // dispatch(showLoader()); // Показуємо лоадер перед запитом

    if (!accessToken) {
      return thunkAPI.rejectWithValue('No token found');
    }
    const months = {
      January: 1,
      February: 2,
      March: 3,
      April: 4,
      May: 5,
      June: 6,
      July: 7,
      August: 8,
      September: 9,
      October: 10,
      November: 11,
      December: 12,
    };
    console.log(monthName);
    console.log(year);
    setAuthHeader(accessToken);

    try {
      const { data } = await axios.get('/water/month', {
        params: { month: months[monthName], year },
      });
      console.log(monthName);
      console.log(year);
      console.log(data);
      return data; // Повертаємо отримані дані
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message); // Повертаємо повідомлення про помилку
    } finally {
      // dispatch(hideLoader()); // Приховуємо лоадер після завершення запиту
    }
  }
);
