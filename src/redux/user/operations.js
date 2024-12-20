import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const fetchUser = createAsyncThunk(
  'auth/fetchUser',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.accessToken;

      if (!token) {
        return thunkAPI.rejectWithValue('No token found');
      }

      // Запрос данных пользователя с использованием токена
      const { data } = await axios.get('/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data; // Возвращаем данные пользователя
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);