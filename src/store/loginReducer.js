import { LOGIN_USER, LOGOUT_USER } from "../services/const/actionTypes";
const initialState = {
  userID: null,
  isRegistered: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        userID: action.payload,
        isRegistered: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        userID: null,
        isRegistered: false,
      };
    default:
      return state;
  }
};

export const loginUserAction = (payload) => ({
  type: LOGIN_USER,
  payload,
});
export const logoutUserAction = () => ({
  type: LOGOUT_USER,
});
