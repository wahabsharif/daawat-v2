// models/WeddingMenu.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weddingMenuSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    items: [
      {
        itemsTitle: {
          type: String,
          required: true,
        },
        items: [
          {
            type: String,
            required: true,
          },
        ],
      },
    ],
    pricing: [
      {
        persons: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("WeddingMenu", weddingMenuSchema);
