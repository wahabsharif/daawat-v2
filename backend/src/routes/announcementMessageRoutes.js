const express = require("express");
const router = express.Router();
const announcementMessageController = require("../controllers/announcementMessageController");

// Create a new announcement message
router.post(
  "/announcements",
  announcementMessageController.createAnnouncementMessage
);

// Get all announcement messages
router.get(
  "/announcements",
  announcementMessageController.getAnnouncementMessages
);

// Get a single announcement message by ID
router.get(
  "/announcements/:id",
  announcementMessageController.getAnnouncementMessageById
);

// Update an announcement message by ID
router.put(
  "/announcements/:id",
  announcementMessageController.updateAnnouncementMessage
);

// Delete an announcement message by ID
router.delete(
  "/announcements/:id",
  announcementMessageController.deleteAnnouncementMessage
);

// Get announcement messages by type
router.get(
  "/announcements/type/:type",
  announcementMessageController.getAnnouncementMessagesByType
);

module.exports = router;
