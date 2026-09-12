const mongoose = require("mongoose");

const dBConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.wsvu5n6.mongodb.net/playgrid?appName=Cluster0`
    );
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection error", error);
  }
};

module.exports = dBConnection;
