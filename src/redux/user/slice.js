import { createSlice } from '@reduxjs/toolkit';
import { fetchUser } from './operations';

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    user: null,
    loading: false,
    error: null,
    unauthorized: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, state => {
        state.loading = true;
        state.error = null;
        state.unauthorized = false;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        if (action.payload === 'Access token expired') {
          state.unauthorized = true;
          state.error = action.payload;
        } else {
          state.error = action.payload;
        }
      });
  },
});

export const userInfoReducer = userInfoSlice.reducer;
