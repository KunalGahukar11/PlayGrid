const express = require("express");
const cors = require("cors");
require("dotenv").config();

const dBConnection = require("./config/dbConfig");
const userRouter = require("./routes/userRoutes");

const app = express();

app.use(express.json());
app.use(cors());

dBConnection();

// routes
app.use("/auth", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
