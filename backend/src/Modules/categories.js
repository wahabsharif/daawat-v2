// src/constants.js

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

module.exports = { CATEGORY, SUB_CATEGORY };
