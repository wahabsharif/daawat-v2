"use client";

import React, { useState } from "react";

type AnnouncementType = "topBar" | "popupNotification" | "saleDeal";

interface AnnouncementFormProps {
  onSubmit: (announcement: {
    title: string;
    message: string;
    announcementType: AnnouncementType;
  }) => void;
}

const AnnouncementsForm: React.FC<AnnouncementFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [announcementType, setAnnouncementType] =
    useState<AnnouncementType>("topBar");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, message, announcementType });
    setTitle("");
    setMessage("");
    setAnnouncementType("topBar");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-teal-700 rounded-xl shadow-md"
    >
      <div className="mb-4">
        <label className="block text-gray-800 font-bold mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full bg-teal-600 p-2  rounded-xl focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-800 font-bold mb-2">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full bg-teal-600 p-2 rounded-xl focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-800 font-bold mb-2">
          Announcement Type
        </label>
        <select
          value={announcementType}
          onChange={(e) =>
            setAnnouncementType(e.target.value as AnnouncementType)
          }
          className="w-full bg-teal-600 p-2 rounded-xl focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="topBar">Top Bar</option>
          <option value="popupNotification">Popup Notification</option>
          <option value="saleDeal">Sale Deal</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-600"
      >
        Create Announcement
      </button>
    </form>
  );
};

export default AnnouncementsForm;
