const userServices = require("../services/userService");

const userController = {
  signUpController: async (req, res) => {
    try {
      //   console.log(req.body);
      const data = await userServices.signUp(req.body);
      return res.status(data.status).json(data);
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  },

  loginController: async (req, res) => {
    try {
      const data = await userServices.login(req.body);
      return res.status(data.status).json(data);
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  },
};

module.exports = userController;
