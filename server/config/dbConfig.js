const mongoose = require("mongoose");

const db_url = process.env.DB_URL;

const dBConnection = async () => {
  try {
    await mongoose.connect(db_url);
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection error", error);
  }
};

module.exports = dBConnection;
