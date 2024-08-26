import React from "react";
import { navBarData } from "@/data/navBarData";
import Link from "next/link";
import SearchButton from "./SearchButton";
import CartButton from "@/components/cart/CartButton";
import TopBar from "./TopBar";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

const NavBar: React.FC = () => {
  return (
    <nav className="fixed bg-white/30 backdrop-blur-md text-dark dark:bg-black/30 dark:text-light uppercase w-full shadow-lg transition-colors duration-300 hidden md:block">
      <TopBar />
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Left-aligned logo */}
          <Logo />
          {/* Centered navigation links */}
          <ul className="flex space-x-4 justify-center flex-1">
            {navBarData.map((item, index) => (
              <li className="relative group" key={index}>
                <Link
                  href={item.link}
                  className="flex items-center hover:text-gray-500 dark:hover:text-gray-300"
                >
                  {item.label}
                  {item.submenu && (
                    <svg
                      className="ml-1 w-4 h-4 fill-current text-dark dark:text-light group-hover:text-gray-500 dark:group-hover:text-gray-300 transition duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  )}
                </Link>
                {item.submenu && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.submenu.map((subitem, subIndex) => (
                      <li
                        key={subIndex}
                        className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        <Link
                          href={subitem.link}
                          className="dark:text-gray-200"
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
          {/* Right-aligned buttons */}
          <div className="flex space-x-4 items-center">
            <ThemeToggle />
            <SearchButton />
            <CartButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
