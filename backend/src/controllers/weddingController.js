const WeddingMenu = require("../models/Wedding");

// Create a new wedding menu
exports.createWeddingMenu = async (req, res) => {
  try {
    const { title, slug, items, pricing } = req.body;
    const newMenu = new WeddingMenu({ title, slug, items, pricing });
    await newMenu.save();
    res.status(201).json(newMenu);
  } catch (error) {
    res.status(500).json({ message: "Error creating wedding menu", error });
  }
};

// Get all wedding menus
exports.getWeddingMenus = async (req, res) => {
  try {
    const menus = await WeddingMenu.find();
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ message: "Error fetching wedding menus", error });
  }
};

// Get wedding menu by id
exports.getWeddingMenuById = async (req, res) => {
  try {
    const menu = await WeddingMenu.findById(req.params.id);
    if (!menu) return res.status(404).json({ message: "Menu not found" });
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ message: "Error fetching wedding menu", error });
  }
};

// Update wedding menu by id
exports.updateWeddingMenuById = async (req, res) => {
  try {
    const { title, slug, items, pricing } = req.body;
    const updatedMenu = await WeddingMenu.findByIdAndUpdate(
      req.params.id,
      { title, slug, items, pricing },
      { new: true }
    );
    if (!updatedMenu)
      return res.status(404).json({ message: "Menu not found" });
    res.status(200).json(updatedMenu);
  } catch (error) {
    res.status(500).json({ message: "Error updating wedding menu", error });
  }
};

// Delete wedding menu by id
exports.deleteWeddingMenuById = async (req, res) => {
  try {
    const menu = await WeddingMenu.findByIdAndDelete(req.params.id);
    if (!menu) return res.status(404).json({ message: "Menu not found" });
    res.status(200).json({ message: "Menu deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting wedding menu", error });
  }
};
