const mongoose = require("mongoose");

// Define enums for categories and subcategories
const CATEGORY = [
  "Deals",
  "Food",
  "Catering",
  "Tandoor",
  "Beverages",
  "Equipment",
  "Gifts",
];

const SUB_CATEGORY = {
  Deals: ["Muharram Specials", "Ramadan Deal", "Rabi ul Awal Deal"],
  Food: [
    "Rice",
    "Qorma / Curry",
    "BBQ",
    "Sadqa Daig",
    "Wedding Menu",
    "Daawat Menu",
    "Dessert",
    "Fried / Roast",
    "Chinese Cuisine",
    "Nehari / Haleem",
    "Vegetables",
    "Halwa Puri Combo",
    "Add Ons",
  ],
  Catering: [
    "Catering Item Wise",
    "Catering Per Head",
    "Crockery Item Wise",
    "Crockery Per Head",
  ],
  Tandoor: ["Tandoor"],
  Beverages: ["Beverages"],
  Equipment: ["Heat and Cooling"],
  Gifts: ["Gift a Daawat"],
};

const menuSchema = new mongoose.Schema(
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
    id: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      maxlength: 50,
    },
    itemPrice: [
      {
        shortDescription: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    addOns: {
      type: [
        {
          name: {
            type: String,
            // Optional: you can add enum for addOns if needed
            // enum: ADD_ONS,
          },
          options: [String],
        },
      ],
      default: [],
    },
    packaging: {
      type: [String],
      default: [],
    },
    category: {
      type: String,
      required: true,
      enum: CATEGORY,
    },
    subCategory: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return SUB_CATEGORY[this.category]
            ? SUB_CATEGORY[this.category].includes(value)
            : false;
        },
        message: (props) =>
          `Invalid subCategory for category ${this.category}.`,
      },
    },
  },
  { timestamps: true } // Enabling timestamps
);

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
