const mongoose = require("mongoose");
const { CATEGORY, SUB_CATEGORY } = require("../Modules/categories");

// Function to generate a unique SKU
const generateUniqueSKU = async (model) => {
  const prefix = "DPK";
  let sku;
  let isUnique = false;

  while (!isUnique) {
    const randomString = Math.random()
      .toString(36)
      .substring(2, 9)
      .toUpperCase();
    sku = `${prefix}${randomString}`;

    // Check if SKU already exists
    const existingMenu = await model.findOne({ sku });
    if (!existingMenu) {
      isUnique = true;
    }
  }

  return sku;
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
    sku: {
      type: String,
      //   required: true,
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

// Pre-save hook to generate a unique SKU if not provided
menuSchema.pre("save", async function (next) {
  if (!this.sku) {
    this.sku = await generateUniqueSKU(this.constructor);
  }
  next();
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
