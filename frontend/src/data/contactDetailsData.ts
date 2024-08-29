// src/data/contactData.js
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export const contactData = [
  {
    type: "Phone Number",
    value: "00-11-22-44-55-66",
    href: "tel:001122445566",
    icon: FaPhone,
  },
  {
    type: "Email Address",
    value: "info@example.com",
    href: "mailto:info@example.com",
    icon: MdOutlineMailOutline,
  },
  {
    type: "Our Location",
    value: "Rawalpindi / Islamabad",
    href: "https://www.google.com/maps?q=Rawalpindi,+Islamabad",
    icon: IoLocationSharp,
    isExternal: true,
  },
];
