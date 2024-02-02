import { buildCreateSlice, createSlice } from "@reduxjs/toolkit";
import { registUser } from "./services/registerUser";

const initialState = {
  isLoading: false,
  error: "",
  username: "",
  lastname: "",
  surname: "",
  email: "",
  phonenumber: "",
  address: "",
  password: "",
};
export const registSlice = createSlice({
  name: "Registration",
  initialState,
  reducers: {
    setField: (state, action) => {
      state[action.payload.fieldName] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registUser.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(registUser.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(registUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: registActions } = registSlice;
export const { reducer: registReducer } = registSlice;
