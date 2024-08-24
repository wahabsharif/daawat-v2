// NavBar.tsx
import React from "react";
import { navBarData } from "@/data/navBarData";
import Link from "next/link";
import SearchButton from "./SearchButton"; // Import SearchButton
import CartButton from "./CartButton"; // Import CartButton

const NavBar: React.FC = () => {
  return (
    <nav className="fixed bg-white/30 backdrop-blur-md text-black uppercase w-full shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Left-aligned logo */}
          <div className="text-lg font-bold">DAAWAT</div>
          {/* Centered navigation links */}
          <ul className="flex space-x-4 justify-center flex-1">
            {navBarData.map((item, index) => (
              <li className="relative group" key={index}>
                <Link
                  href={item.link}
                  className="flex items-center hover:text-gray-500"
                >
                  {item.label}
                  {/* Display down arrow if there's a submenu */}
                  {item.submenu && (
                    <svg
                      className="ml-1 w-4 h-4 fill-current text-black group-hover:text-gray-500 transition duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  )}
                </Link>
                {item.submenu && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.submenu.map((subitem, subIndex) => (
                      <li
                        key={subIndex}
                        className="px-4 py-2 hover:bg-gray-200"
                      >
                        <Link href={subitem.link}>{subitem.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          {/* Right-aligned buttons */}
          <div className="flex space-x-4 items-center">
            <SearchButton />
            <CartButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
