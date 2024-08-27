// src/models/userModel.js

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    designation: {
      type: String,
      enum: [
        "ceo",
        "inventory manager",
        "catering manager",
        "accounts manager",
        "administrators",
        "head chef",
        "staff manager",
      ],
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    onlineStatus: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Correct placement of timestamps option
  }
);

module.exports = mongoose.model("User", UserSchema);
