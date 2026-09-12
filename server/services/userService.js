const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const responseObj = require("../utls/responebj");

const userServices = {
  signUp: async (userData) => {
    try {
      if (userData.password !== userData.confirmPassword) {
        return responseObj(
          400,
          false,
          "Password and Confirm Password should be same",
          []
        );
      }

      const user = await userModel.findOne({ email: userData.email });
      if (user) {
        return responseObj(400, false, "User already exist", []);
      }

      const { confirmPassword, ...userDetails } = userData;

      const newUser = await userModel.create(userDetails);
      return responseObj(200, true, "SignUp successful", {
        username: newUser.username,
        email: newUser.email,
        contactNo: newUser.contactNo,
      });
    } catch (error) {
      console.log("hello", error);

      return responseObj(500, false, "Internal server error", []);
    }
  },

  login: async (userCredentials) => {
    try {
      const { username, password } = userCredentials;
      if (!username || !password) {
        return responseObj(400, false, "Username and Password required!", []);
      }

      const user = await userModel.findOne({ username });
      if (!user) {
        return responseObj(400, false, "Don't have account, create one", []);
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return responseObj(401, false, "Incorrect Password", []);
      }

      const token = jwt.sign(
        {
          userId: user._id,
          username: user.username,
        },
        process.env.SECRET_KEY,
        { expiresIn: "1d" }
      );

      return responseObj(200, true, "Login successful", {
        name: user.username,
        email: user.email,
        token,
      });
    } catch (error) {
      console.log(error);
      return responseObj(500, false, "Internal server error", []);
    }
  },
};

module.exports = userServices;
