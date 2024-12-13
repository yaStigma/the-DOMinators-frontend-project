import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const signUp = createAsyncThunk(
  "auth/signup",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/users/signup", credentials);
      toast.success("The new user was created successfully!", {
        duration: 4000,
        position: "top-center",
      });
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      toast.error("Something is wrong ", {
        duration: 4000,
        position: "top-center",
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signin",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/users/signin", credentials);
      toast.success("You have successfully logged in.", {
        duration: 4000,
        position: "top-center",
      });
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      toast.error("Invalid login or password!", {
        duration: 4000,
        position: "top-center",
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");

    clearAuthHeader();
    toast.success("Logged out successfully!", {
      duration: 4000,
      position: "top-center",
    });
  } catch (error) {
    toast.error("Logout failed!", {
      duration: 4000,
      position: "top-center",
    });
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get("/users/current");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sendResetPasswordEmail = (email) => {
  return async (dispatch) => {
    try {
      // Замените на ваш API запрос для отправки email
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to send reset email");
      }

      dispatch({ type: 'RESET_PASSWORD_EMAIL_SENT' });
      
    } catch (error) {
      console.error('Error sending reset password email:', error);
      throw error;
    }
  };
};


