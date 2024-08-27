"use client";

import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "@/contexts/AuthContext"; // Adjust the import path according to your project structure

const LogoutButton: React.FC = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center p-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
      aria-label="Logout"
    >
      <FaSignOutAlt className="mr-2" />
      Logout
    </button>
  );
};

export default LogoutButton;
