"use client";

import { useRouter } from "next/navigation";

const AddHiTeaButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/hi-tea/add");
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
    >
      Add Hi-Tea
    </button>
  );
};

export default AddHiTeaButton;
