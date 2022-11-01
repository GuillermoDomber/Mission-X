import axios from "axios";
import config from "./config";

export const login = ({ type, username, password }) =>
  axios.post(`${config.baseUrl}/authentication/login`, {
      type,
      username,
      password,
    })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
      if (error.response.status === 401)
        alert("The credentials are wong! Please try again.");
    });

export const signup = ({ type, username, email, password }) =>
  axios
    .post(`${config.baseUrl}/authentication/signup`, {
      type,
      username,
      email,
      password,
    })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
      if (error.response.status === 401)
        alert("The credentials are wong! Please try again.");
    });
