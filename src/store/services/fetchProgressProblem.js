import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProgress = createAsyncThunk(
  "user/Data",
  async (fecthData, thunkAPI) => {
    try {
        console.log(fecthData);
      const response = await axios.patch(
        `https://localhost:7045/user/updateProblemProgress`,
        {
          id: fecthData.id,
          progress: fecthData.progress,
        }
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