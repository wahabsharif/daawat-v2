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

  const getLowestPricing = (pricing: Pricing[]) => {
    if (pricing.length === 0) return { persons: 0, price: 0 };

    return pricing.reduce((lowest, current) => {
      if (current.price < lowest.price) {
        return current;
      }
      return lowest;
    }, pricing[0]);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString("en-IN"); // Formats the number based on Indian numbering system
  };

  return (
    <div className="p-6">
      <div className="p-4">
        <h2 className="text-center uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gradient">
          Our Top Rated Wedding Menus
        </h2>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menus.map((menu) => {
          const lowestPricing = getLowestPricing(menu.pricing);
          return (
            <Link key={menu._id} href={`/wedding/${menu._id}`}>
              <MagicCard className="border rounded-lg shadow p-4 bg-gray-800 cursor-pointer">
                <h3 className="text-xl font-bold mb-2">{menu.title}</h3>
                <p>
                  <strong>Starting from:</strong> {lowestPricing.persons}{" "}
                  persons at Rs.{formatPrice(lowestPricing.price)}
                </p>
              </MagicCard>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default WeddingMenuGrid;
