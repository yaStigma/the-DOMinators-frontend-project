import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import { userInfoReducer } from './user/slice';

const store = configureStore({
  reducer: {
    user: authReducer,
    userInfo: userInfoReducer,
  },
});

export default store;
