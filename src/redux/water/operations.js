import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://the-dominators-back-project.onrender.com';

const setAuthHeader = (accessToken) => {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

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
);

