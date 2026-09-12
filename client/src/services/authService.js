import axios from "axios";

const authService = {
  signUp: async (userData) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/auth/signup",
        userData
      );
      // console.log(res);
      return res.data;
    } catch (error) {
      // console.log(error.response?.data);
      return error.response.data;
    }
  },

  login: async (credentials) => {
    console.log(credentials);

    try {
      const res = await axios.post(
        "http://localhost:5000/auth/login",
        credentials
      );
      return res.data;
    } catch (error) {
      return error.response.data;
    }
  },
};

export default authService;
