"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import AddWeddingMenuButton from "./AddWeddingMenuButton";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

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

const WeddingMenuList: React.FC = () => {
  const [menus, setMenus] = useState<WeddingMenu[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get(`${NEXT_PUBLIC_API_URL}api/wedding`);
        setMenus(response.data);
      } catch (error) {
        setError("Error fetching wedding menus");
      }
    };
    fetchMenus();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${NEXT_PUBLIC_API_URL}api/wedding/${id}`);
      setMenus(menus.filter((menu) => menu._id !== id));
    } catch (error) {
      setError("Error deleting wedding menu");
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold mb-4">Wedding Menus</h2>
        <AddWeddingMenuButton />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Items
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Pricing
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {menus.map((menu) => (
            <tr key={menu._id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {menu.title}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="grid gap-4">
                  {menu.items.map((itemGroup, index) => (
                    <div key={index} className="border p-2 rounded bg-gray-50">
                      <h5 className="font-bold mb-2">{itemGroup.itemsTitle}</h5>
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
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {menu.pricing.map((price, index) => (
                  <div
                    key={index}
                    className="border p-2 rounded bg-gray-50 mb-2"
                  >
                    <p>
                      <strong>Persons:</strong> {price.persons}
                    </p>
                    <p>
                      <strong>Price:</strong> {price.price}
                    </p>
                  </div>
                ))}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  onClick={() => handleDelete(menu._id)}
                  className="text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
                <Link
                  href={`/edit/${menu._id}`}
                  className="text-blue-600 hover:text-blue-900 ml-4"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeddingMenuList;
