"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import EditMenuForm from "@/components/menu/EditMenuForm";
import AdminLayout from "@/layouts/AdminLayout";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

const MenuEditPage = () => {
  const { id } = useParams(); // Use useParams to get route parameters

  const [menu, setMenu] = useState<any>(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get(
          `${NEXT_PUBLIC_API_URL}api/menus/${id}`
        );
        setMenu(response.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    if (id) fetchMenu();
  }, [id]);

  if (!menu) return <div>Loading...</div>;

  return (
    <AdminLayout>
      <EditMenuForm menu={menu} />
    </AdminLayout>
  );
};

export default MenuEditPage;
