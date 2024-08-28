const mongoose = require("mongoose");

const announcementMessageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    announcementType: {
      type: String,
      enum: ["topBar", "popupNotification", "saleDeal"],
      required: true,
    },
  },
  { timestamps: true }
);

const AnnouncementMessage = mongoose.model(
  "AnnouncementMessage",
  announcementMessageSchema
);

module.exports = AnnouncementMessage;
