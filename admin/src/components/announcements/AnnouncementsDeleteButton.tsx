import React from "react";

interface AnnouncementsDeleteButtonProps {
  id: string;
  onDelete: (id: string) => void;
}

const AnnouncementsDeleteButton: React.FC<AnnouncementsDeleteButtonProps> = ({
  id,
  onDelete,
}) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this announcement?")) {
      onDelete(id);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="text-red-800 hover:text-red-900 ml-4"
    >
      Delete
    </button>
  );
};

export default AnnouncementsDeleteButton;
