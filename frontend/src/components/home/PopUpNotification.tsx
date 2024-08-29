"use client";

import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

interface Announcement {
  _id: string;
  title: string;
  message: string;
  announcementType: string;
}

const PopUpNotification: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await fetch(
          `${NEXT_PUBLIC_API_URL}api/announcements/type/popupNotification`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch announcements");
        }
        const data = await response.json();
        setAnnouncements(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchAnnouncements();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  // Do not render the component if there are no announcements
  if (!announcements.length || !visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-xl backdrop-saturate-200">
      <button
        className="absolute top-10 right-10 text-gray-600 hover:text-gray-900"
        onClick={() => setVisible(false)}
      >
        <FaTimes size={24} />
      </button>
      <div className="flex flex-col items-center relative">
        {announcements.map((announcement) => (
          <div
            key={announcement._id}
            className="bg-cyan-900 p-4 rounded shadow-lg mb-4 max-w-md"
          >
            <h3 className="my-5 text-slate-300 text-xl text-center font-bold">
              {announcement.title}
            </h3>
            <p className="text-slate-300 text-md">{announcement.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopUpNotification;
