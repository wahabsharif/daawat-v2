"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import SingleLoader from "@/components/common/Loaders/SingleLoader";

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

const WeddingMenuDetail: React.FC = () => {
  const [menu, setMenu] = useState<WeddingMenu | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();
  //   const { id } = router.query; // Retrieve ID from the URL

  useEffect(() => {
    if (!id) return;

    const fetchMenu = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}api/wedding/${id}`
        );
        setMenu(response.data);
      } catch (error) {
        setError("Error fetching wedding menu details");
      }
    };
    fetchMenu();
  }, [id]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!menu) {
    return <SingleLoader />;
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">{menu.title}</h2>

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Items:</h3>
        {menu.items.map((itemGroup, index) => (
          <div key={index} className="mb-2">
            <h4 className="font-bold">{itemGroup.itemsTitle}</h4>
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

      <div>
        <h3 className="text-xl font-semibold mb-2">Pricing:</h3>
        {menu.pricing.map((price, index) => (
          <div key={index} className="border p-2 rounded bg-gray-50 mb-2">
            <p>
              <strong>Persons:</strong> {price.persons}
            </p>
            <p>
              <strong>Price:</strong> {price.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingMenuDetail;
