"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdAdminPanelSettings } from "react-icons/md";

const NEXT_PUBLIC_API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const CurrentUser: React.FC = () => {
  const [fullName, setFullName] = useState<string>("");

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const token = localStorage.getItem("token"); // Ensure token is stored in localStorage
        if (!token) {
          throw new Error("No token found");
        }
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(
          `${NEXT_PUBLIC_API_URL}/api/user/me`,
          config
        );
        setFullName(response.data.fullName); // Update to fetch fullName
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };

    fetchCurrentUser();
  }, []);

  return (
    <div className="flex items-center space-x-2 text-cyan-400 font-bold">
      <MdAdminPanelSettings className="text-3xl" />
      <p className="uppercase text-2xl">{fullName}</p>
    </div>
  );
};

export default CurrentUser;
