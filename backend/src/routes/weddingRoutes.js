const express = require("express");
const router = express.Router();
const weddingController = require("../controllers/weddingController");

// Create a new wedding menu
router.post("/wedding", weddingController.createWeddingMenu);

// Get all wedding menus
router.get("/wedding", weddingController.getWeddingMenus);

// Get a specific wedding menu by id
router.get("/wedding/:id", weddingController.getWeddingMenuById);

// Update a wedding menu by id
router.put("/wedding/:id", weddingController.updateWeddingMenuById);

// Delete a wedding menu by id
router.delete("/wedding/:id", weddingController.deleteWeddingMenuById);

module.exports = router;
