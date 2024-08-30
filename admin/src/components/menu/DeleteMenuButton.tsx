import axios from "axios";
import { FC } from "react";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

interface DeleteMenuButtonProps {
  id: string;
  onDelete: () => void;
}

const DeleteMenuButton: FC<DeleteMenuButtonProps> = ({ id, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`${NEXT_PUBLIC_API_URL}api/menus/${id}`);
      onDelete(); // Trigger the refresh
    } catch (error) {
      console.error("Error deleting menu:", error);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Delete
    </button>
  );
};

export default DeleteMenuButton;
