"use client";

import React, { useState, useEffect } from "react";
import AnnouncementsForm from "./AnnouncementsForm";
import AnnouncementsList from "./AnnouncementsList";
import AnnouncementsEdit from "./AnnouncementsEdit";

const NEXT_PUBLIC_API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const AnnouncementsManager: React.FC = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  useEffect(() => {
    // Fetch announcements from your API
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    // API call to get announcements
    const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/announcements`);
    const data = await response.json();
    setAnnouncements(data);
  };

  const handleCreate = async (announcement: any) => {
    // API call to create announcement
    const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/announcements`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(announcement),
    });
    if (response.ok) fetchAnnouncements();
  };

  const handleEdit = (announcement: React.SetStateAction<null>) => {
    setSelectedAnnouncement(announcement);
  };

  const handleUpdate = async (updatedAnnouncement: { _id: any }) => {
    // API call to update announcement
    const response = await fetch(
      `${NEXT_PUBLIC_API_URL}/api/announcements/${updatedAnnouncement._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedAnnouncement),
      }
    );
    if (response.ok) {
      setSelectedAnnouncement(null);
      fetchAnnouncements();
    }
  };

  const handleDelete = async (id: any) => {
    // API call to delete announcement
    const response = await fetch(
      `${NEXT_PUBLIC_API_URL}/api/announcements/${id}`,
      { method: "DELETE" }
    );
    if (response.ok) fetchAnnouncements();
  };

  return (
    <div>
      <h1 className="text-center my-5 text-3xl font-semibold text-cyan-400">
        Announcements Manager
      </h1>
      {selectedAnnouncement ? (
        <AnnouncementsEdit
          announcement={selectedAnnouncement}
          onUpdate={handleUpdate}
        />
      ) : (
        <AnnouncementsForm onSubmit={handleCreate} />
      )}
      <AnnouncementsList
        announcements={announcements}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default AnnouncementsManager;
