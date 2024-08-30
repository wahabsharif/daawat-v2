const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController");

// Get all menus or filter by subcategory
router.get("/menus", menuController.getAllMenus);

// Get a single menu by ID
router.get("/menus/:id", menuController.getMenuById);

// Create a new menu
router.post("/menus", menuController.createMenu);

// Update an existing menu
router.put("/menus/:id", menuController.updateMenu);

// Delete a menu
router.delete("/menus/:id", menuController.deleteMenu);

module.exports = router;
