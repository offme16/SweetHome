import axios from "axios";
import { registUserAction } from "../../store/registReducer";
export const sendUser = async (data) => {
  try {
    const response = await axios.post(`https://localhost:7045/user/signup`, {
      username: data.name,
      lastname: data.lastname,
      surname: data.surname,
      email: data.email,
      phonenumber: data.number,
      address: data.address,
      password: data.pass,
    });
    localStorage.setItem("User", response.data.userId);
    return registUserAction(response.data.userId);
  } catch (error) {
    console.error("Error:", error.response.data);
    throw error;
  }
};
