import Axios from "axios";

//const apiUrl = "https://polls-nodejs-backend.herokuapp.com";
const apiUrl = "http://localhost:8080";

export const addPost = async (post) => {
  try {
    const { data } = await Axios.post(`${apiUrl}/user/posts/`, post, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const loadPosts = async (id) => {
  try {
    const { data } = await Axios.get(`${apiUrl}/user/posts/user/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const loadPost = async (id) => {
  try {
    const { data } = await Axios.get(`${apiUrl}/user/posts/${id}`);
    return data[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const loadAllPosts = async () => {
  try {
    const { data } = await Axios.get(`${apiUrl}/user/posts/`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};