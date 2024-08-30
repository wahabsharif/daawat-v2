const Menu = require("../models/Menu");
const { CATEGORY, SUB_CATEGORY } = require("../Modules/categories");

// Get all menus with optional filtering by category and subcategory
const getAllMenus = async (req, res) => {
  try {
    const { category, subCategory } = req.query;
    const filter = {};

    if (category) {
      filter.category = category;
    }
    if (subCategory) {
      filter.subCategory = subCategory;
    }

    const menus = await Menu.find(filter);
    res.json(menus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single menu by ID
const getMenuById = async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);
    if (!menu) {
      return res.status(404).json({ message: "Menu not found" });
    }
    res.json(menu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new menu
const createMenu = async (req, res) => {
  const {
    title,
    slug,
    description,
    itemPrice,
    addOns,
    packaging,
    category,
    subCategory,
  } = req.body;

  // Ensure that the provided category and subCategory are valid
  if (!CATEGORY.includes(category)) {
    return res.status(400).json({ message: "Invalid category" });
  }
  if (!SUB_CATEGORY[category]?.includes(subCategory)) {
    return res
      .status(400)
      .json({ message: "Invalid subCategory for the selected category" });
  }

  const menu = new Menu({
    title,
    slug,
    description,
    itemPrice,
    addOns,
    packaging,
    category,
    subCategory,
  });

  try {
    // Save the menu and trigger SKU generation
    const newMenu = await menu.save();
    res.status(201).json(newMenu);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an existing menu by ID
const updateMenu = async (req, res) => {
  const updateData = req.body;

  // Ensure that the provided category and subCategory are valid
  if (updateData.category && !CATEGORY.includes(updateData.category)) {
    return res.status(400).json({ message: "Invalid category" });
  }
  if (
    updateData.subCategory &&
    (!updateData.category ||
      !SUB_CATEGORY[updateData.category]?.includes(updateData.subCategory))
  ) {
    return res
      .status(400)
      .json({ message: "Invalid subCategory for the selected category" });
  }

  try {
    const menu = await Menu.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });
    if (!menu) {
      return res.status(404).json({ message: "Menu not found" });
    }
    res.json(menu);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a menu by ID
const deleteMenu = async (req, res) => {
  try {
    const menu = await Menu.findByIdAndDelete(req.params.id);
    if (!menu) {
      return res.status(404).json({ message: "Menu not found" });
    }
    res.json({ message: "Menu deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllMenus,
  getMenuById,
  createMenu,
  updateMenu,
  deleteMenu,
};
