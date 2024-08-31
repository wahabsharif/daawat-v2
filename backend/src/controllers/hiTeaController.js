const HiTea = require("../models/HiTea");

// Create a new Hi-Tea entry
exports.createHiTea = async (req, res) => {
  try {
    const { title, items, price } = req.body;
    const hiTea = new HiTea({ title, items, price });
    await hiTea.save();
    res.status(201).json(hiTea);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Hi-Tea entries
exports.getAllHiTea = async (req, res) => {
  try {
    const hiTea = await HiTea.find();
    res.status(200).json(hiTea);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single Hi-Tea entry by ID
exports.getHiTeaById = async (req, res) => {
  try {
    const hiTea = await HiTea.findById(req.params.id);
    if (!hiTea) {
      return res.status(404).json({ error: "Hi-Tea not found" });
    }
    res.status(200).json(hiTea);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a Hi-Tea entry by ID
exports.updateHiTea = async (req, res) => {
  try {
    const { title, items, price } = req.body;
    const hiTea = await HiTea.findByIdAndUpdate(
      req.params.id,
      { title, items, price },
      { new: true }
    );
    if (!hiTea) {
      return res.status(404).json({ error: "Hi-Tea not found" });
    }
    res.status(200).json(hiTea);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a Hi-Tea entry by ID
exports.deleteHiTea = async (req, res) => {
  try {
    const hiTea = await HiTea.findByIdAndDelete(req.params.id);
    if (!hiTea) {
      return res.status(404).json({ error: "Hi-Tea not found" });
    }
    res.status(200).json({ message: "Hi-Tea deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
