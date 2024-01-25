import axios from "axios";

export const getById = async () => {
  const response = await axios.get(`https://localhost:7045/user`);
  console.log(response.data);
  return response;
};
