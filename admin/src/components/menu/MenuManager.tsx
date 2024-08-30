"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import MenuList from "./MenuList";
import AddMenuButton from "./AddMenuButton";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

interface Menu {
  _id: string;
  title: string;
  slug: string;
  description: string;
  sku: string;
  itemPrice: { shortDescription: string; price: number }[];
  addOns: { name: string; options: string[] }[];
  packaging: string[];
  category: string;
  subCategory: string;
}

function MenuManager() {
  const [menus, setMenus] = useState<Menu[]>([]);

  const fetchMenus = async () => {
    try {
      const response = await axios.get(`${NEXT_PUBLIC_API_URL}api/menus`);
      setMenus(response.data);
    } catch (error) {
      console.error("Error fetching menus:", error);
    }
  };

  useEffect(() => {
    fetchMenus();
  }, []);
  return (
    <div>
      <div className="relative">
        <AddMenuButton />
      </div>
      <MenuList menus={menus} onMenuDeleted={fetchMenus} />
    </div>
  );
}

export default MenuManager;
