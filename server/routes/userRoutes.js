const express = require("express");
const userController = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/signup", userController.signUpController);

userRouter.post("/login", userController.loginController);

module.exports = userRouter;
