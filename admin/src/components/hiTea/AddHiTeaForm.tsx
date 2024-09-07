"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddHiTeaForm = () => {
  const [title, setTitle] = useState("");
  const [items, setItems] = useState<string[]>([]);
  const [price, setPrice] = useState<number | "">("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}api/hi-tea`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, items, price }),
        }
      );
      if (response.ok) {
        router.push("/hi-tea"); // Redirect to the Hi-Tea list page
        router.refresh(); // Refresh the page to update the list
      } else {
        console.error("Failed to create Hi-Tea");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-teal-800 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">
        Add Hi-Tea
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Title"
          className="mt-1 text-gray-800 text-xl font-semibold block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <input
          id="items"
          type="text"
          placeholder="Items"
          value={items.join(", ")}
          onChange={(e) =>
            setItems(e.target.value.split(",").map((item) => item.trim()))
          }
          required
          className="mt-1 text-gray-800 text-xl font-semibold block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <input
          id="price"
          placeholder="Price"
          type="text"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          required
          className="mt-1 text-gray-800 text-xl font-semibold block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Hi-Tea
        </button>
      </form>
    </div>
  );
};

export default AddHiTeaForm;
