import Link from "next/link";
import React from "react";
import { footerData } from "@/data/footerData";
import Image from "next/image";
import daawatLogo from "@/assets/logos/daawat-logo-light.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white pt-8 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-8">
          {/* Left Side - Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src={daawatLogo}
              className="p-2 mb-4"
              alt="daawat-logo"
              height={150}
              width={150}
            />
            <p className="text-gray-400 text-center md:text-left dark:text-gray-500">
              DAAWAT.PK is Pakistan&apos;s premier online catering service,
              launched by Deen Foods and Catering, a renowned and esteemed name
              in the catering industry.
            </p>
          </div>

          {/* Center - Site Links and Contact Links */}
          <div className="flex flex-col md:flex-row md:justify-center md:space-x-8">
            {/* Site Links */}
            <div className="mb-8 md:mb-0">
              <h2 className="text-xl font-semibold mb-4">Site Links</h2>
              <ul className="space-y-2">
                {footerData.siteLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Links */}
            <div className="ml-auto">
              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
              <ul className="space-y-2">
                {footerData.contactInfo.map((contact) => (
                  <li
                    key={contact.href}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-gray-400 dark:text-gray-500">
                      {contact.icon}
                    </span>
                    <a
                      href={contact.href}
                      className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300"
                    >
                      {contact.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side - Social Media Links */}
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              {footerData.socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-gray-700 dark:border-gray-600" />

        <div className="flex justify-between py-2 text-gray-400 text-sm">
          <div className="text-left">
            <p>
              &copy; {new Date().getFullYear()}
              <Link href="http://daawat.pk/" className="mx-2 text-teal-600">
                DAAWAT
              </Link>
              All rights reserved.
            </p>
          </div>
          <div className="text-right">
            <p>
              Designed and Developed By{" "}
              <Link href="http://beacontechh.com/" className="text-teal-600">
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
