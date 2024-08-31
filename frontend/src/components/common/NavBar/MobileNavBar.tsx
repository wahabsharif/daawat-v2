"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { navBarData } from "@/data/navBarData";
import ThemeToggle from "../Ui/ThemeToggle";
import SearchButton from "./SearchButton";
import CartButton from "@/components/cart/CartButton";
import Logo from "./Logo";

const socialLinks = [
  { href: "https://facebook.com", icon: <FaFacebook /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://instagram.com", icon: <FaInstagram /> },
  { href: "https://linkedin.com", icon: <FaLinkedin /> },
];

const MobileNavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <nav className="playfair-font fixed top-0 left-0 w-full bg-white bg-opacity-30 dark:bg-black dark:bg-opacity-30 backdrop-blur-lg shadow-md z-50 md:hidden">
      <div className="flex justify-between items-center p-4 container mx-auto">
        {/* Left side: Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        <div className="flex space-x-3 items-center flex-shrink-0">
          <ThemeToggle />
          <SearchButton />
          <CartButton />
          <button
            className="text-dark dark:text-light text-2xl flex-shrink-0"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 w-full bg-white bg-opacity-90 dark:bg-black dark:bg-opacity-90 backdrop-blur-lg text-dark dark:text-light transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col h-screen`}
      >
        <div className="flex justify-between items-center p-4 container mx-auto">
          <Logo />
          <button
            className="text-dark dark:text-light text-2xl"
            onClick={toggleMenu}
          >
            <FaTimes />
          </button>
        </div>
        <div className="container mx-auto p-4 z-50 flex-grow overflow-y-auto">
          <ul className="space-y-4">
            {navBarData.map((item, index) => (
              <li key={index} className="relative">
                {item.submenu ? (
                  <button
                    className="flex justify-between items-center w-full py-2 px-4 text-left hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
                    onClick={() => toggleDropdown(index)}
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 fill-current text-dark dark:text-light transition-transform duration-300 ${
                        openDropdown === index ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.link}
                    className="flex justify-between items-center w-full py-2 px-4 text-left hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
                  >
                    {item.label}
                  </Link>
                )}
                {item.submenu && openDropdown === index && (
                  <ul className="ml-4 space-y-2 mt-2 bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-80 backdrop-blur-lg rounded-md shadow-md">
                    {item.submenu.map((subitem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subitem.link}
                          className="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
                        >
                          {subitem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center p-4 space-x-4 border-t border-gray-200 dark:border-gray-700">
          {socialLinks.map(({ href, icon }, index) => (
            <Link
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark dark:text-light text-2xl hover:text-gray-700 dark:hover:text-gray-400"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MobileNavBar;
