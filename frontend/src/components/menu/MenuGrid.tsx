"use client";

import { MagicCard } from "@/components/magicui/magic-card";
import { Menu } from "@/types/types";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import TripleLoader from "../common/Loaders/TripleLoader";

const MenuGrid = () => {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all menus from the API
    const fetchMenus = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}api/menus`
        );
        setMenus(response.data);
      } catch (error) {
        console.error("Failed to fetch menus", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenus();
  }, []);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  });

  if (loading) {
    return (
      <section className="p-10 flex justify-center items-center min-h-screen">
        <TripleLoader />
      </section>
    );
  }

  return (
    <section className="p-10">
      <div className="p-4">
        <h2 className="text-center uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gradient">
          Our Top Rated Menus
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {menus.map((menu) => {
          const minPrice = Math.min(
            ...menu.itemPrice.map((item) => item.price)
          );

          return (
            <MagicCard
              key={menu._id}
              className="cursor-pointer h-64 w-64 flex flex-col items-center justify-center shadow-2xl p-4"
            >
              <Link href={`/menu/${menu._id}`}>
                <h3 className="text-xl font-semibold text-center">
                  {menu.title}
                </h3>
                <p className="text-gray-600 text-center mt-2">
                  {menu.description}
                </p>
                <div className="mt-4 text-xl font-bold text-center">
                  Starting From {formatter.format(minPrice)}
                </div>
              </Link>
            </MagicCard>
          );
        })}
      </div>
    </section>
  );
};

export default MenuGrid;
