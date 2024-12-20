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
          .addCase(fetchUser.pending, (state) => {
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
  },
});

export const userInfoReducer = userInfoSlice.reducer;
