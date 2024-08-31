const express = require("express");
const router = express.Router();
const hiTeaController = require("../controllers/hiTeaController");

// Route to create a new Hi-Tea entry
router.post("/hi-tea", hiTeaController.createHiTea);

// Route to get all Hi-Tea entries
router.get("/hi-tea", hiTeaController.getAllHiTea);

// Route to get a single Hi-Tea entry by ID
router.get("/hi-tea/:id", hiTeaController.getHiTeaById);

// Route to update a Hi-Tea entry by ID
router.put("/hi-tea/:id", hiTeaController.updateHiTea);

// Route to delete a Hi-Tea entry by ID
router.delete("/hi-tea/:id", hiTeaController.deleteHiTea);

module.exports = router;
