"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import DeleteMenuButton from "./DeleteMenuButton";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

interface Menu {
  _id: string;
  title: string;
  slug: string;
  description: string;
  sku: string; // Added SKU field
  itemPrice: { shortDescription: string; price: number }[];
  addOns: { name: string; options: string[] }[];
  packaging: string[];
  category: string;
  subCategory: string;
}

const MenuList = () => {
  const router = useRouter();
  const [menus, setMenus] = useState<Menu[]>([]);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get(`${NEXT_PUBLIC_API_URL}api/menus`);
        setMenus(response.data);
      } catch (error) {
        console.error("Error fetching menus:", error);
      }
    };

    fetchMenus();
  }, []);

  return (
    <div className="p-4 max-w-6xl mx-auto bg-teal-700 rounded shadow-md">
      <h2 className="text-3xl font-semibold mb-4">Menu List</h2>
      <div className="overflow-x-auto">
        <table className="w-[1500px] border-collapse bg-teal-600 shadow-md rounded-xl">
          <thead>
            <tr className="bg-teal-900 text-left rounded-xl">
              <th className="p-2 border-b">Title</th>
              <th className="p-2 border-b">Slug</th>
              <th className="p-2 border-b">Description</th>
              <th className="p-2 border-b">SKU</th> {/* Added SKU header */}
              <th className="p-2 border-b">Item Price</th>
              <th className="p-2 border-b">Add-Ons</th>
              <th className="p-2 border-b">Packaging</th>
              <th className="p-2 border-b">Category</th>
              <th className="p-2 border-b">Sub-Category</th>
              <th className="p-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {menus.map((menu) => (
              <tr
                key={menu._id}
                className="hover:bg-teal-500 border-b cursor-pointer"
              >
                <td className="p-2">{menu.title}</td>
                <td className="p-2">{menu.slug}</td>
                <td className="p-2">{menu.description}</td>
                <td className="p-2">{menu.sku}</td> {/* Added SKU data */}
                <td className="p-2">
                  {menu.itemPrice.map((item, index) => (
                    <div key={index}>
                      {item.shortDescription}: ${item.price.toFixed(2)}
                    </div>
                  ))}
                </td>
                <td className="p-2">
                  {menu.addOns.map((addOn, index) => (
                    <div key={index}>
                      {addOn.name}: {addOn.options.join(", ")}
                    </div>
                  ))}
                </td>
                <td className="p-2">{menu.packaging.join(", ")}</td>
                <td className="p-2">{menu.category}</td>
                <td className="p-2">{menu.subCategory}</td>
                <td className="p-2 flex space-x-4">
                  <Link
                    href={`/menus/edit/${menu._id}`}
                    className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors duration-300"
                  >
                    Edit
                  </Link>
                  <DeleteMenuButton id={menu._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MenuList;
