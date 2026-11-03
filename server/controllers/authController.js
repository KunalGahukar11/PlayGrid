const authServices = require("../services/authService");

const authController = {
  signUpController: async (req, res) => {
    try {
      //   console.log(req.body);
      const data = await authServices.signUp(req.body);
      return res.status(data.status).json(data);
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  },

  loginController: async (req, res) => {
    try {
      const data = await authServices.login(req.body);
      return res.status(data.status).json(data);
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  },
};

module.exports = authController;
