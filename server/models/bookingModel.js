const mongoose = require("mongoose");

const bookingModel = new mongoose.Schema({
  bookBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  bookedTurf: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Turf",
  },
  price: {
    type: Number,
  },
  status: {
    enum: ["pending", "confirm", "canelled"],
    default: "pending",
  },
});
