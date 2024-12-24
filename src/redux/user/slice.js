import { createSlice } from '@reduxjs/toolkit';
import {
  fetchUser,
  updateAvatar,
  updateUser,
  updateDailyNorma,
} from './operations';

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    user: {
      name: '',
      email: '',
      password: '',
      gender: 'female',
      avatarUrl: '',
    },
    loading: false,
    error: null,
    unauthorized: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, state => {
        state.isFetchingUser = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isFetchingUser = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isFetchingUser = false;
      })
      .addCase(updateUser.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateAvatar.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateDailyNorma.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(updateDailyNorma.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updateDailyNorma.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const userInfoReducer = userInfoSlice.reducer;
