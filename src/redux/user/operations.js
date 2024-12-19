// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { useSelector } from 'react-redux';
// import { selectToken } from '../../redux/auth/selectors';

// axios.defaults.baseURL = 'https://the-dominators-back-project.onrender.com';

// export const fetchUser = createAsyncThunk(
//   'user/fetchUser',
//   async (userId, thunkAPI) => {
//     const token = useSelector(selectToken)
//     console.log(token)
//     try {
//       const { data } = await axios.get(`/users/${userId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message || error.message
//       );
//     }
//   }
// );
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://the-dominators-back-project.onrender.com';

// Добавляем функцию для установки токена в заголовок
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (userId, thunkAPI) => {
    try {
      // Извлекаем токен из состояния Redux (или другого хранилища)
      const state = thunkAPI.getState();
      const token = state.auth.accessToken;

      // Если токена нет, сразу отклоняем запрос
      if (!token) {
        return thunkAPI.rejectWithValue('Токен не найден. Пользователь не авторизован.');
      }

      // Устанавливаем токен в заголовки
      setAuthHeader(token);

      // Отправляем запрос на сервер
      const { data } = await axios.get(`/users`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

