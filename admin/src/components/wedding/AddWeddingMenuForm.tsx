"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import slugify from "slugify";
import { useRouter } from "next/navigation";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

interface ItemGroup {
  itemsTitle: string;
  items: string[];
}

interface Pricing {
  persons: number;
  price: number;
}

const AddWeddingMenuForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [itemGroups, setItemGroups] = useState<ItemGroup[]>([]);
  const [pricing, setPricing] = useState<Pricing[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    setSlug(slugify(title, { lower: true, strict: true }));
  }, [title]);

  const handleAddItemGroup = () => {
    setItemGroups([...itemGroups, { itemsTitle: "", items: [] }]);
  };

  const handleItemGroupChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const newItemGroups = [...itemGroups];
    newItemGroups[index] = { ...newItemGroups[index], [field]: value };
    setItemGroups(newItemGroups);
  };

  const handleAddItem = (groupIndex: number) => {
    const newItemGroups = [...itemGroups];
    newItemGroups[groupIndex].items.push("");
    setItemGroups(newItemGroups);
  };

  const handleItemChange = (
    groupIndex: number,
    itemIndex: number,
    value: string
  ) => {
    const newItemGroups = [...itemGroups];
    newItemGroups[groupIndex].items[itemIndex] = value;
    setItemGroups(newItemGroups);
  };

  const handleAddPricing = () => {
    setPricing([...pricing, { persons: 0, price: 0 }]);
  };

  const handlePricingChange = (index: number, field: string, value: number) => {
    const newPricing = [...pricing];
    newPricing[index] = { ...newPricing[index], [field]: value };
    setPricing(newPricing);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post(`${NEXT_PUBLIC_API_URL}api/wedding`, {
        title,
        slug,
        items: itemGroups,
        pricing,
      });
      setSuccessMessage("Wedding menu created successfully!");
      setTimeout(() => {
        router.push("/wedding");
      }, 2000); // Redirect after 2 seconds
    } catch (error) {
      setError("Error creating wedding menu");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Add Wedding Menu
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-md font-medium text-gray-700">
              Title:
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border text-gray-600 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <input
              type="text"
              value={slug}
              readOnly
              className="cursor-not-allowed mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-600 mb-2">Items</h3>
            {itemGroups.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="bg-gray-50 p-4 rounded-md shadow-sm mb-4"
              >
                <input
                  type="text"
                  placeholder="Group Title"
                  value={group.itemsTitle}
                  onChange={(e) =>
                    handleItemGroupChange(
                      groupIndex,
                      "itemsTitle",
                      e.target.value
                    )
                  }
                  required
                  className="block w-full px-3 py-2 border text-center font-bold text-gray-700 border-gray-300 rounded-md shadow-sm mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {group.items.map((item, itemIndex) => (
                  <input
                    key={itemIndex}
                    type="text"
                    placeholder={`Item ${itemIndex + 1}`}
                    value={item}
                    onChange={(e) =>
                      handleItemChange(groupIndex, itemIndex, e.target.value)
                    }
                    required
                    className="block w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                ))}
                <button
                  type="button"
                  onClick={() => handleAddItem(groupIndex)}
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add Item
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddItemGroup}
              className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Item Group
            </button>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-600">
              Pricing
            </h3>
            {pricing.map((price, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-md shadow-sm mb-4"
              >
                <label className="block text-md font-medium text-gray-700">
                  Persons:
                </label>
                <input
                  type="text"
                  placeholder="Number of Persons"
                  value={price.persons}
                  onChange={(e) =>
                    handlePricingChange(index, "persons", +e.target.value)
                  }
                  required
                  className="block w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <label className="block text-md font-medium text-gray-700">
                  Price:
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  value={price.price}
                  onChange={(e) =>
                    handlePricingChange(index, "price", +e.target.value)
                  }
                  required
                  className="block w-full px-3 text-gray-700 py-2 border border-gray-300 rounded-md shadow-sm mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddPricing}
              className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Pricing
            </button>
          </div>

          {error && <p className="text-red-500">{error}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          <button
            type="submit"
            className="w-full text-center items-center px-4 py-2 bg-green-800 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddWeddingMenuForm;
