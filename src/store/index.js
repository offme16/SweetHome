import { configureStore } from "@reduxjs/toolkit";
import { registReducer } from "./registSlice";
import { userReducer } from "./userSlice";
import { authReducer } from "./authenticationSlice";

export function createRootStore(initialState) {
  const rootReducer = {
    registration: registReducer,
    user: userReducer,
    authentication: authReducer,
  };
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
}
