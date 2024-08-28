const AnnouncementMessage = require("../models/AnnouncementMessage");

// Create a new announcement message
exports.createAnnouncementMessage = async (req, res) => {
  try {
    const { title, message, announcementType } = req.body;
    if (
      !["topBar", "popupNotification", "saleDeal"].includes(announcementType)
    ) {
      return res.status(400).json({ error: "Invalid announcement type" });
    }
    const announcementMessage = new AnnouncementMessage({
      title,
      message,
      announcementType,
    });
    await announcementMessage.save();
    res.status(201).json(announcementMessage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all announcement messages
exports.getAnnouncementMessages = async (req, res) => {
  try {
    const announcementMessages = await AnnouncementMessage.find();
    res.status(200).json(announcementMessages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single announcement message by ID
exports.getAnnouncementMessageById = async (req, res) => {
  try {
    const announcementMessage = await AnnouncementMessage.findById(
      req.params.id
    );
    if (!announcementMessage)
      return res.status(404).json({ error: "Announcement message not found" });
    res.status(200).json(announcementMessage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update an announcement message by ID
exports.updateAnnouncementMessage = async (req, res) => {
  try {
    const { title, message, announcementType } = req.body;
    if (
      announcementType &&
      !["topBar", "popupNotification", "saleDeal"].includes(announcementType)
    ) {
      return res.status(400).json({ error: "Invalid announcement type" });
    }
    const announcementMessage = await AnnouncementMessage.findByIdAndUpdate(
      req.params.id,
      { title, message, announcementType },
      { new: true, runValidators: true }
    );
    if (!announcementMessage)
      return res.status(404).json({ error: "Announcement message not found" });
    res.status(200).json(announcementMessage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an announcement message by ID
exports.deleteAnnouncementMessage = async (req, res) => {
  try {
    const announcementMessage = await AnnouncementMessage.findByIdAndDelete(
      req.params.id
    );
    if (!announcementMessage)
      return res.status(404).json({ error: "Announcement message not found" });
    res
      .status(200)
      .json({ message: "Announcement message deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get announcement messages by type
exports.getAnnouncementMessagesByType = async (req, res) => {
  try {
    const { type } = req.params;
    if (!["topBar", "popupNotification", "saleDeal"].includes(type)) {
      return res.status(400).json({ error: "Invalid announcement type" });
    }
    const announcementMessages = await AnnouncementMessage.find({
      announcementType: type,
    });
    res.status(200).json(announcementMessages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
