import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { fetchUser } from '../user/operations';

axios.defaults.baseURL = 'https://the-dominators-back-project.onrender.com';

const setAuthHeader = (accessToken) => {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const signUp = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/signup', credentials);
      toast.success('The new user was created successfully!', {
        duration: 4000,
        position: 'top-right',
      });
      setAuthHeader(res.data.accessToken);
      
      return res.data;
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

export const signIn = createAsyncThunk(
  'auth/signin',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/signin', credentials);

      toast.success('You have successfully logged in.', {
        duration: 4000,
        position: 'top-right',
      });
      
      setAuthHeader(res.data.accessToken);

      return res.data;
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

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/logout');

    clearAuthHeader();
    toast.success('Logged out successfully!', {
      duration: 4000,
      position: 'top-right',
    });
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
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      // Получаем токен из состояния
      const state = thunkAPI.getState();
      const token = state.auth.accessToken;

      if (!token) {
        return thunkAPI.rejectWithValue('No token found');
      }

      // Если токен существует, вызываем fetchUser для получения данных пользователя
      const userData = await thunkAPI.dispatch(fetchUser()).unwrap();
      return { user: userData, accessToken: token };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sendResetPasswordEmail = createAsyncThunk(
  'auth/sendResetPasswordEmail',
  async (email, thunkAPI) => {
    try {
      const response = await axios.post('/request-reset-pwd', { email });
      toast.success('Reset password email was successfully sent!', {
        duration: 4000,
        position: 'top-right',
      });

      return {
        status: response.status,
        message: 'Reset password email was successfully sent!',
        data: response.data,
      };
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
