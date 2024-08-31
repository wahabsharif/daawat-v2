const mongoose = require("mongoose");

const hiTeaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    items: [
      {
        type: String,
        maxlength: 50,
      },
    ],
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const HiTea = mongoose.model("HiTea", hiTeaSchema);

module.exports = HiTea;
