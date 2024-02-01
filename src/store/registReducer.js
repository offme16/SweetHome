import { REGISTER_USER } from "../services/const/actionTypes";
const initialState = {
  userID: null,
  isRegistered: false,
  got: "4324023402",
};

export const registReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        userID: action.payload,
        isRegistered: true,
        got: "555",
      };
    default:
      return state;
  }
};

export const registUserAction = (payload) => ({
  type: REGISTER_USER,
  payload,
});
