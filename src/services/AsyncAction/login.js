import { loginUserAction, logoutUserAction } from "../../store/loginReducer";
import axios from "axios";

export const loginUser = async (data) => {
  try {
    const response = await axios.post(
      `https://localhost:7045/user/login`,
      {
        userName: data.userName,
        password: data.password,
      },
      {
        accept: "*/*",
        "Content-Type": "application/json",
      }
    );
    localStorage.setItem("Userkey", response.data.userid);
    return loginUserAction(response.data.userid);
  } catch (error) {
    console.error("Error:", error.response.data);
    throw error;
  }
};
