import { createSlice } from '@reduxjs/toolkit';
import {
  signUp,
  signIn,
  logOut,
  refreshUser,
  sendResetPasswordEmail,
} from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
      password:null
    },
    accessToken: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
    loading: false,
    resetPassword: {
      success: false,
      error: null,
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload.data._id || {
          email: action.payload.data.email,
        };
        state.accessToken = action.payload.data.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        console.log(action)
        state.user = action.payload.data.userId || action.payload.data.user;
        state.accessToken = action.payload.data.accessToken;
        console.log(state.user)
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logOut.pending, state => {
        state.loading = true;
        state.error = false;
        state.user = { name: null, email: null };
      })
      .addCase(logOut.fulfilled, state => {
        state.loading = false;
        state.user = { name: null, email: null };
        state.accessToken = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = { name: null, email: null };
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(sendResetPasswordEmail.pending, state => {
        state.loading = true;
        state.resetPassword.success = false;
        state.resetPassword.error = null;
      })
      .addCase(sendResetPasswordEmail.fulfilled, state => {
        state.loading = false;
        state.resetPassword.success = true;
        state.resetPassword.error = null;
      })
      .addCase(sendResetPasswordEmail.rejected, (state, action) => {
        state.loading = false;
        state.resetPassword.success = false;
        state.resetPassword.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
