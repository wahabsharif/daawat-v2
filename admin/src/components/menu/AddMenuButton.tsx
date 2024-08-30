"use client";

import React from "react";
import { useRouter } from "next/navigation";

function AddMenuButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/menus/add");
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-500 font-semibold text-white rounded-xl hover:bg-blue-600"
    >
      Add Menu
    </button>
  );
}

export default AddMenuButton;
