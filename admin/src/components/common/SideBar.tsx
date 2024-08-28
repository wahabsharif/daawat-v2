"use client";

import LogoutButton from "@/components/auth/LogoutButton";
import Link from "next/link";
import { FaChartBar, FaHome, FaUsers } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import CurrentUser from "./CurrentUser";

const SideBar = () => {
  return (
    <aside className="w-64 h-full bg-teal-900 text-white flex flex-col">
      <div className="flex items-center justify-center p-4 border-b border-slate-400">
        <CurrentUser />
      </div>
      <nav className="flex-1 p-4">
        <ul>
          <li className="mb-4">
            <Link
              href="/"
              className="flex items-center text-gray-300 hover:text-white"
            >
              <FaHome className="mr-3" />
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/announcements"
              className="flex items-center text-gray-300 hover:text-white"
            >
              <GrAnnounce className="mr-3" />
              Announcements
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/admin/users"
              className="flex items-center text-gray-300 hover:text-white"
            >
              <FaUsers className="mr-3" />
              Users
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/admin/reports"
              className="flex items-center text-gray-300 hover:text-white"
            >
              <FaChartBar className="mr-3" />
              Reports
            </Link>
          </li>
        </ul>
      </nav>
      {/* New section for settings and logout */}
      <div className="border-t border-slate-400 mt-auto p-4">
        <ul className="ml-2">
          <li className="mb-4">
            <Link
              href="/admin/settings"
              className="flex items-center text-xl text-gray-300 hover:text-white"
            >
              <MdSettings className="mr-2" />
              Settings
            </Link>
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
