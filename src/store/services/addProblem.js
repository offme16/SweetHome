import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addProblem = createAsyncThunk(
  "add/Problem",
  async ({ problemData, userID }) => {
    try {
      const response = await axios.post(
        "https://localhost:7045/Problem/createproblem",
        {
          problem: problemData.problem,
          description: problemData.description,
          dateOfSolution: problemData.date,
          userId: userID,
        }
      );

      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (error) {}
  }
);
