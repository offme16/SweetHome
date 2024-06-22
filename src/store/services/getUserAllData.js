import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserAllData = createAsyncThunk(
  "user/Data",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://localhost:7045/api/Admin/GetAllProblems`
      );

      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);