const mongoose = require("mongoose");

const turfSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    amenities: {
      type: [String],
      default: ["Sports Equipments"],
    },
    sports: {
      type: [String],
      validate: {
        validator: (arr) => arr.length > 0,
        message: "At least one sport is required",
      },
      required: true,
    },
  },
  { timestamps: true }
);

const turfModel = mongoose.model("Turf", turfSchema);

module.exports = turfModel;
