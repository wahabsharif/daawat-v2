"use client";

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-4 p-2 text-xl rounded-full shadow-lg hover:opacity-100 transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      } bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600`}
      aria-label="Scroll to top"
      style={{ transition: "opacity 0.3s ease-in-out" }}
    >
      <FaArrowUp className="text-white" />
    </button>
  );
};

export default ScrollToTop;
