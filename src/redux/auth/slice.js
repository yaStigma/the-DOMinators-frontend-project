import { createSlice } from "@reduxjs/toolkit";
import { signUp, signIn, logOut, refreshUser, sendResetPasswordEmail } from "./operations";

const authSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      name: null,
      email: null,
    },
        token: null,
    isLoggedIn: false,
    isRefreshing: false,
    resetPassword: {
      loading: false,
      success: false,
      error: null,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = { email: action.payload.data.email };
        state.isLoggedIn = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.payload; 
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(sendResetPasswordEmail.pending, (state) => {
        state.resetPassword.loading = true;
        state.resetPassword.success = false;
        state.resetPassword.error = null;
      })
      .addCase(sendResetPasswordEmail.fulfilled, (state) => {
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

