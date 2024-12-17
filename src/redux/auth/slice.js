import { createSlice } from '@reduxjs/toolkit';
import {
  signUp,
  signIn,
  logOut,
  refreshUser,
  sendResetPasswordEmail,
} from './operations';

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    accessToken: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
    resetPassword: {
      loading: false,
      success: false,
      error: null,
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload.data.userId || { email: action.payload.data.email };
        state.accessToken = action.payload.data.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload.data.userId;
        state.accessToken = action.payload.data.accessToken || null;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.accessToken = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.accessToken = action.payload.data.accessToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(sendResetPasswordEmail.pending, state => {
        state.resetPassword.loading = true;
        state.resetPassword.success = false;
        state.resetPassword.error = null;
      })
      .addCase(sendResetPasswordEmail.fulfilled, state => {
        state.resetPassword.loading = false;
        state.resetPassword.success = true;
        state.resetPassword.error = null;
      })
      .addCase(sendResetPasswordEmail.rejected, (state, action) => {
        state.resetPassword.loading = false;
        state.resetPassword.success = false;
        state.resetPassword.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
