import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

axios.defaults.baseURL = "https://the-dominators-back-project.onrender.com";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const signUp = createAsyncThunk(
  "user/signup",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/signup", credentials);
      toast.success("The new user was created successfully!", {
        duration: 4000,
        position: "top-right",
      });
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      toast.error("Something is wrong ", {
        duration: 4000,
        position: "top-right",
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signin",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/signin", credentials);
      toast.success("You have successfully logged in.", {
        duration: 4000,
        position: "top-right",
      });
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      toast.error("Invalid login or password!", {
        duration: 4000,
        position: "top-right",
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logOut = createAsyncThunk("user/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/logout");

    clearAuthHeader();
    toast.success("Logged out successfully!", {
      duration: 4000,
      position: "top-right",
    });
  } catch (error) {
    toast.error("Logout failed!", {
      duration: 4000,
      position: "top-right",
    });
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "user/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get("/current");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sendResetPasswordEmail = createAsyncThunk(
  "auth/sendResetPasswordEmail",
  async (email, thunkAPI) => {
    try {
      const response = await fetch('/password-reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Failed to send reset email");
      }

      toast.success("Reset password email was successfully sent!", {
        duration: 4000,
        position: "top-right",
      });

      return true; 
    } catch (error) {
      toast.error(`Error sending reset password email: ${error.message}`, {
        duration: 4000,
        position: "top-right",
      });
      return thunkAPI.rejectWithValue(error.message); 
    }
  }
);


