import { buildCreateSlice, createSlice } from "@reduxjs/toolkit";
import { getUserData } from "./services/getUserData";
const initialState = {
  isLoading: false,
  error: "",
  problemsData: undefined,
};
export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserData.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.problemsData = action.payload;
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { actions: userDataActions } = userDataSlice;
export const { reducer: userDataReducer } = userDataSlice;
