"use client";

import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  isAdmin: boolean;
  exp: number;
}

const SideBarUserButton = () => {
  const router = useRouter();
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  let isAdmin = false;

  if (token) {
    try {
      const decoded = jwtDecode<DecodedToken>(token);
      isAdmin = decoded.isAdmin;
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        console.log("Token has expired");
        return null;
      }
    } catch (error) {
      console.error("Invalid token");
    }
  }

  const handleClick = () => {
    router.push("/users");
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <button
      onClick={handleClick}
      className="flex items-center text-gray-300 hover:text-white"
    >
      <FaUser className="mr-2" />
      <span>Users</span>
    </button>
  );
};

export default SideBarUserButton;
