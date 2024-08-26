import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

type SocialLink = {
  href: string;
  icon: React.ReactNode; // Use React.ReactNode for icons
};

export const footerData = {
  siteLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Menu" },
    { href: "/contact", label: "Catering" },
    { href: "/events", label: "Events" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-conditions", label: "Terms & Conditions" },
    { href: "/contact", label: "Contact Us" },
  ],
  contactInfo: [
    {
      href: "mailto:info@example.com",
      label: "info@example.com",
      icon: <FaEnvelope />,
    },
    { href: "tel:+1234567890", label: "+123 456 7890", icon: <FaPhone /> },
  ],
  socialLinks: [
    {
      href: "https://facebook.com",
      icon: <FaFacebookF />,
    },
    {
      href: "https://twitter.com",
      icon: <FaTwitter />,
    },
    {
      href: "https://instagram.com",
      icon: <FaInstagram />,
    },
    {
      href: "https://linkedin.com",
      icon: <FaLinkedinIn />,
    },
  ] as SocialLink[],
};
