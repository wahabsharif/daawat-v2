"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { MagicCard } from "@/components/magicui/magic-card";
import Link from "next/link";

interface Pricing {
  persons: number;
  price: number;
}

interface WeddingMenu {
  _id: string;
  title: string;
  items: {
    itemsTitle: string;
    items: string[];
  }[];
  pricing: Pricing[];
}

const WeddingMenuGrid: React.FC = () => {
  const [menus, setMenus] = useState<WeddingMenu[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}api/wedding`
        );
        setMenus(response.data);
      } catch (error) {
        setError("Error fetching wedding menus");
      }
    };
    fetchMenus();
  }, []);

  //   const handleDelete = async (id: string) => {
  //     try {
  //       await axios.delete(`${NEXT_PUBLIC_API_URL}api/wedding/${id}`);
  //       setMenus(menus.filter((menu) => menu._id !== id));
  //     } catch (error) {
  //       setError("Error deleting wedding menu");
  //     }
  //   };

  return (
    <div className="p-6">
      <div className="p-4">
        <h2 className="text-center uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gradient">
          Our Top Rated Wedding Menus
        </h2>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menus.map((menu) => (
          <MagicCard
            key={menu._id}
            className="border rounded-lg shadow p-4 bg-gray-800"
          >
            <Link href={`/wedding/${menu._id}`}>
              <h3 className="text-xl font-bold mb-2">{menu.title}</h3>
              <div className="mb-4">
                <h4 className="font-semibold">Items:</h4>
                {menu.items.map((itemGroup, index) => (
                  <div key={index} className="mb-2">
                    <h5 className="font-bold mb-1">{itemGroup.itemsTitle}</h5>
                    <ul className="list-disc pl-5">
                      {itemGroup.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <h4 className="font-semibold">Pricing:</h4>
                {menu.pricing.map((price, index) => (
                  <div
                    key={index}
                    className="border p-2 rounded bg-gray-800 mb-2"
                  >
                    <p>
                      <strong>Persons:</strong> {price.persons}
                    </p>
                    <p>
                      <strong>Price:</strong> {price.price}
                    </p>
                  </div>
                ))}
              </div>
            </Link>
          </MagicCard>
        ))}
      </div>
    </div>
  );
};

export default WeddingMenuGrid;
