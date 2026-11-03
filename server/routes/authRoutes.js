const express = require("express");
const authController = require("../controllers/authController");

const authRouter = express.Router();

authRouter.post("/signup", authController.signUpController);

authRouter.post("/login", authController.loginController);

module.exports = authRouter;
