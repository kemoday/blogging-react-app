import Axios from "axios";

//const apiUrl = "https://polls-nodejs-backend.herokuapp.com";
const apiUrl = "http://localhost:8080";

export const userInfo = async () => {
  try {
    const { data } = await Axios.get(`${apiUrl}/user/account/info/`, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    console.log("error");
    throw error;
  }
};

export const signup = async (user) => {
  if (user) {
    try {
      const { data } = await Axios.post(`${apiUrl}/user/account/signup`, user, {
        withCredentials: true,
      });
      return data;
    } catch (error) {
      throw error;
    }
  }
};

export const signin = async (user) => {
  if (user) {
    try {
      const res = await Axios.post(`${apiUrl}/user/account/signin`, user, {
        withCredentials: true,
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  }
};
