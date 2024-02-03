import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserData = createAsyncThunk(
  "user/Data",
  async (userID, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://localhost:7045/user/getAllProblemsByUserId?userId=${userID}`
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
