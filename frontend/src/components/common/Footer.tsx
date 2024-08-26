import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white pt-8 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-4 gap-20 mb-8">
          {/* Logo and Description */}
          <div>
            <h1 className="text-3xl font-bold mb-2">DAAWAT</h1>
            <p className="text-gray-400 dark:text-gray-500">
              DAAWAT.PK is Pakistan&apos;s premier online catering service,
              launched by Deen Foods and Catering, a renowned and esteemed name
              in the catering industry.
            </p>
          </div>

          {/* Site Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Site Links</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300"
                >
                  Catering
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <ul>
              <li>
                <a
                  href="mailto:info@example.com"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300"
                >
                  info@example.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300"
                >
                  +123 456 7890
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 dark:border-gray-600" />

        <div className="flex justify-between py-4 text-gray-400 dark:text-gray-500 text-sm">
          <div className="text-left">
            <p>
              &copy; {new Date().getFullYear()}
              <Link
                href="http://daawat.pk/"
                className="mx-2 text-teal-600 dark:text-teal-400"
              >
                DAAWAT
              </Link>
              All rights reserved.
            </p>
          </div>
          <div className="text-right">
            <p>
              Designed and Developed By{" "}
              <Link
                href="http://beacontechh.com/"
                className="text-teal-600 dark:text-teal-400"
              >
                Beacon Techh
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
