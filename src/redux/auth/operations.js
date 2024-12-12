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


