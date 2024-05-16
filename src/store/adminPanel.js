import { buildCreateSlice, createSlice } from "@reduxjs/toolkit";
import { getUserAllData } from "./services/getUserAllData";

const initialState = {
  isLoading: false,
  error: "",
  problemsData: undefined,
};

export const adminPanelSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserAllData.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getUserAllData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.problemsData = action.payload;
      })
      .addCase(getUserAllData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { actions: adminPanelActions } = adminPanelSlice;
export const { reducer: adminPanelReducer } = adminPanelSlice;