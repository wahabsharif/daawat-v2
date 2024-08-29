"use client";

import React, { useState, useEffect } from "react";
import AnnouncementsForm from "./AnnouncementsForm";
import AnnouncementsList from "./AnnouncementsList";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

const AnnouncementsManager: React.FC = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    // Fetch announcements from your API
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    // API call to get announcements
    const response = await fetch(`${NEXT_PUBLIC_API_URL}api/announcements`);
    const data = await response.json();
    setAnnouncements(data);
  };

  const handleCreate = async (announcement: any) => {
    // API call to create announcement
    const response = await fetch(`${NEXT_PUBLIC_API_URL}api/announcements`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(announcement),
    });
    if (response.ok) fetchAnnouncements();
  };

  const handleDelete = async (id: any) => {
    // API call to delete announcement
    const response = await fetch(
      `${NEXT_PUBLIC_API_URL}api/announcements/${id}`,
      { method: "DELETE" }
    );
    if (response.ok) fetchAnnouncements();
  };

  return (
    <div>
      <h1 className="text-center my-5 text-3xl font-semibold text-cyan-400">
        Announcements Manager
      </h1>
      <AnnouncementsForm onSubmit={handleCreate} />
      <AnnouncementsList
        announcements={announcements}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default AnnouncementsManager;
