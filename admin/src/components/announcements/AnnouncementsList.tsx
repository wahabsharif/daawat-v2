import React from "react";
import AnnouncementsDeleteButton from "./AnnouncementsDeleteButton";

// Define the Announcement interface to include createdAt and updatedAt fields
interface Announcement {
  _id: string;
  title: string;
  message: string;
  announcementType: string;
  createdAt: string; // Include createdAt
  updatedAt: string; // Include updatedAt
}

interface AnnouncementsListProps {
  announcements: Announcement[];
  onEdit: (announcement: Announcement) => void;
  onDelete: (id: string) => void;
}

// Helper function to format announcement type
const formatAnnouncementType = (type: string): string => {
  switch (type) {
    case "topBar":
      return "Top Bar";
    case "popupNotification":
      return "Popup Notification";
    case "saleDeal":
      return "Sale / Deal";
    default:
      return type;
  }
};

// Helper function to format dates
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const AnnouncementsList: React.FC<AnnouncementsListProps> = ({
  announcements,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="mt-5">
      <div className="overflow-x-auto rounded-xl">
        {/* Container with its own overflow for horizontal scrolling */}
        <table className="min-w-full bg-teal-700 shadow-md">
          <thead>
            <tr className="bg-teal-700 border-b">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 uppercase">
                Title
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 uppercase">
                Message
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 uppercase">
                Type
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 uppercase">
                Created At
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 uppercase">
                Updated At
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {announcements.map((announcement) => (
              <tr key={announcement._id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {announcement.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {announcement.message}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {formatAnnouncementType(announcement.announcementType)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {formatDate(announcement.createdAt)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {formatDate(announcement.updatedAt)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-4">
                  <button
                    onClick={() => onEdit(announcement)}
                    className="text-green-400 hover:text-green-900"
                  >
                    Edit
                  </button>
                  <AnnouncementsDeleteButton
                    id={announcement._id}
                    onDelete={onDelete}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnnouncementsList;
