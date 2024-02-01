import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { registReducer } from "./registReducer";
import { loginReducer } from "./loginReducer";
const rootReducer = combineReducers({
  registration: registReducer,
  login: loginReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
