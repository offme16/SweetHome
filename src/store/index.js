import { configureStore } from "@reduxjs/toolkit";
import { registReducer } from "./registSlice";
import { userReducer } from "./userSlice";
import { authReducer } from "./authenticationSlice";
import { userDataReducer } from "./userDataSlice";
import { adminPanelReducer } from "./adminPanel";

export function createRootStore(initialState) {
  const rootReducer = {
    registration: registReducer,
    authentication: authReducer,
    user: userReducer,
    userData: userDataReducer,
    admin: adminPanelReducer

  };
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
}
