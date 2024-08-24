import Link from "next/link";
import React from "react";
import { FaPhone, FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

const TopBar: React.FC = () => {
  return (
    <div className="bg-teal-800 text-white flex justify-between items-center py-2 px-10">
      {/* Left: Phone Call Icon */}
      <div className="flex items-center">
        <Link href="tel:+1234567890" className="flex items-center text-white">
          <FaPhone className="text-xl mr-2" />
          <span>+1-234-567-890</span>
        </Link>
      </div>

      {/* Center: Centered Sentence */}
      <div className="flex-1 text-center text-xs">
        <span>
          Donate Sadqa from anywhere in the world to the twin cities through
          credit/debt card online payment.
        </span>
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
