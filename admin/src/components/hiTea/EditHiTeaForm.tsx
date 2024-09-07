"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

const EditHiTeaForm = () => {
  const [title, setTitle] = useState("");
  const [items, setItems] = useState<string[]>([]);
  const [price, setPrice] = useState<number | "">("");
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    const fetchHiTea = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}api/hi-tea/${id}`
      );
      const data = await response.json();
      setTitle(data.title);
      setItems(data.items);
      setPrice(data.price);
    };
    fetchHiTea();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}api/hi-tea/${id}`,
        {
          method: "PUT",
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
        console.error("Failed to update Hi-Tea");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Hi-Tea</h1>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Items (comma-separated):
        <input
          type="text"
          value={items.join(", ")}
          onChange={(e) =>
            setItems(e.target.value.split(",").map((item) => item.trim()))
          }
          required
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          required
        />
      </label>
      <button type="submit">Update Hi-Tea</button>
    </form>
  );
};

export default EditHiTeaForm;
