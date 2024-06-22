import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProgress = createAsyncThunk(
  "user/Data",
  async (fecthData, thunkAPI) => {
    try {
      const response = await axios.patch(
        `https://localhost:7045/api/Admin/ChangeStatus`,
        {
          userId: fecthData.userId,
          newStatus: fecthData.progress,
          problemId: fecthData.id
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