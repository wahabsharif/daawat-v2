"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import SingleLoader from "@/components/common/Loaders/SingleLoader";
import Image from "next/image";
import weddingMenuImage from "@/assets/menu/wedding-menu-image.jpeg";
import { LiaTimesSolid } from "react-icons/lia";
import AddToCartButton from "@/components/cart/AddToCartButton";

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
  const [selectedPrice, setSelectedPrice] = useState<Pricing | null>(null); // State for selected price
  const { id } = useParams();

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

  // Load selected price from local storage on mount
  useEffect(() => {
    const storedData = localStorage.getItem("selectedWeddingMenu");
    if (storedData) {
      setSelectedPrice(JSON.parse(storedData));
    }
  }, []);

  // Save selected price to local storage whenever it changes
  useEffect(() => {
    if (selectedPrice) {
      const storedData = {
        id: menu?._id,
        title: menu?.title,
        persons: selectedPrice.persons,
        price: selectedPrice.price,
      };
      localStorage.setItem("selectedWeddingMenu", JSON.stringify(storedData));
    } else {
      localStorage.removeItem("selectedWeddingMenu");
    }
  }, [selectedPrice, menu]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!menu) {
    return <SingleLoader />;
  }

  return (
    <section className="p-10">
      {/* Grid container with two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left side with image and overlay */}
        <div className="relative w-full h-screen">
          <Image
            src={weddingMenuImage}
            alt="Wedding Menu"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
          {/* Glass effect background for the heading */}
          <div className="absolute inset-x-0 top-0 flex flex-col items-center text-white p-4">
            <h2 className="text-center uppercase text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-gradient bg-white bg-opacity-30 backdrop-blur-md p-4 rounded-lg">
              {menu.title}
            </h2>
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
            <div className="text-center">
              {menu.items.map((itemGroup, index) => (
                <div
                  key={index}
                  className="mb-4 pb-4 border-b border-gray-300 last:border-0"
                >
                  <h4 className="font-bold my-2 text-2xl">
                    {itemGroup.itemsTitle}
                  </h4>
                  {itemGroup.items.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-md text-center">
                      {item}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side with pricing details */}
        <div>
          <h3 className="text-xl font-semibold mb-10">{menu.title}</h3>
          {/* Grid layout with 3 columns on small screens and 4 on larger screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {menu.pricing.map((price, index) => (
              <div
                key={index}
                className="border p-4 rounded bg-gray-50 shadow-md dark:bg-gray-800 cursor-pointer"
                onClick={() => setSelectedPrice(price)} // Set selected price on click
              >
                <p>{price.persons} Persons</p>
                <p>
                  <strong>Rs.</strong>{" "}
                  {new Intl.NumberFormat().format(price.price)}
                </p>
              </div>
            ))}
          </div>
          {/* Display the selected deal message */}
          {selectedPrice && (
            <div className="mt-4 text-lg font-semibold flex items-center">
              <p className="mr-2">
                You Selected deal for {selectedPrice.persons} Persons.
              </p>
              <button
                onClick={() => setSelectedPrice(null)}
                className="text-red-500 hover:text-red-700 font-semibold text-2xl"
                aria-label="Remove selection"
              >
                <LiaTimesSolid />
              </button>
            </div>
          )}

          {/* Pass required props to AddToCartButton */}
          {selectedPrice && (
            <AddToCartButton
              id={menu._id}
              title={menu.title}
              persons={selectedPrice.persons}
              price={selectedPrice.price}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default WeddingMenuDetail;
