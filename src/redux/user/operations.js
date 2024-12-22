import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const setAuthHeader = accessToken => {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

export const fetchUser = createAsyncThunk(
  'auth/fetchUser',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.accessToken;

      if (!token) {
        return thunkAPI.rejectWithValue('No token found');
      }
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
export const updateUser = createAsyncThunk(
  'user/update',
  async (body, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.accessToken;
      setAuthHeader(token);
      const { data } = await axios.patch('/users', body);
      toast.success('The user was updated successfully!', {
        duration: 4000,
        position: 'top-right',
      });
      return data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      toast.error(`Error: ${message}`, {
        duration: 4000,
        position: 'top-right',
      });

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const updateAvatar = createAsyncThunk(
  'user/update/avatar',
  async (body, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.accessToken;
      setAuthHeader(token);
      const { data } = await axios.patch('/users/avatarUrl', body);
      toast.success('The user  avatar was updated successfully!', {
        duration: 4000,
        position: 'top-right',
      });
      return data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      toast.error(`Error: ${message}`, {
        duration: 4000,
        position: 'top-right',
      });

      return thunkAPI.rejectWithValue(message);
    }
  }
);
