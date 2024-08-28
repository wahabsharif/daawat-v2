"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaPhone, FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

const NEXT_PUBLIC_API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const TopBar: React.FC = () => {
  const [announcement, setAnnouncement] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const response = await fetch(
          `${NEXT_PUBLIC_API_URL}/api/announcements/type/topBar`
        );
        const data = await response.json();
        // Assuming there's at least one announcement, get the message from the first one
        if (data.length > 0) {
          setAnnouncement(data[0].message);
        }
      } catch (error) {
        console.error("Failed to fetch announcement:", error);
      }
    };

    fetchAnnouncement();
  }, []);

  return (
    <div className="bg-red-700 text-light justify-between items-center py-2 px-10 hidden md:flex">
      {/* Left: Phone Call Icon */}
      <div className="flex items-center">
        <Link href="tel:+1234567890" className="flex items-center text-light">
          <FaPhone className="text-xl mr-2" />
          <span>+1-234-567-890</span>
        </Link>
      </div>

      {/* Announcement */}
      <div className="flex-1 text-center text-xs">
        <p>{announcement || "Loading announcement..."}</p>
      </div>

      {/* Right: Social Icons */}
      <div className="flex items-center space-x-4">
        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border-r border-white pr-4 last:border-r-0"
        >
          <FaFacebookF className="text-xl" />
        </Link>
        <Link
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="border-r border-white pr-4 last:border-r-0"
        >
          <FaWhatsapp className="text-xl" />
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
