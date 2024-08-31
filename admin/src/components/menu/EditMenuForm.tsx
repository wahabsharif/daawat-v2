"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

type SubCategoriesType = {
  [key: string]: string[];
};

const categories = [
  "Deals",
  "Daig",
  "Food",
  "Catering",
  "Tandoor",
  "Beverages",
  "Equipment",
  "Gifts",
];

const subCategories: SubCategoriesType = {
  Deals: ["Muharram Specials", "Ramadan Deal", "Rabi ul Awal Deal"],
  Daig: ["Muharram Daig", "Ramadan Daig", "Rabi ul Awal Daig", "Sadqa Daig"],
  Food: [
    "Rice",
    "Qorma / Curry",
    "BBQ",
    "Sadqa Daig",
    "Wedding Menu",
    "Daawat Menu",
    "Dessert",
    "Fried / Roast",
    "Chinese Cuisine",
    "Nehari / Haleem",
    "Vegetables",
    "Halwa Puri Combo",
    "Add Ons",
  ],
  Catering: [
    "Catering Item Wise",
    "Catering Per Head",
    "Crockery Item Wise",
    "Crockery Per Head",
  ],
  Tandoor: ["Tandoor"],
  Beverages: ["Beverages"],
  Equipment: ["Heat and Cooling"],
  Gifts: ["Gift a Daawat"],
};

const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

const EditMenuForm = ({ menu }: { menu: any }) => {
  // Accept menu prop
  const router = useRouter();
  const [formData, setFormData] = useState({
    id: menu._id || "",
    title: menu.title || "",
    slug: menu.slug || "",
    description: menu.description || "",
    itemPrice: menu.itemPrice || [{ shortDescription: "", price: 0 }],
    addOns: menu.addOns || [""],
    packaging: menu.packaging || [""],
    category: menu.category || "",
    subCategory: menu.subCategory || "",
  });

  const [currentSubCategories, setCurrentSubCategories] = useState<string[]>(
    []
  );

  useEffect(() => {
    if (formData.title.trim() === "") {
      setFormData((prevData) => ({
        ...prevData,
        slug: "",
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        slug: generateSlug(prevData.title),
      }));
    }
  }, [formData.title]);

  useEffect(() => {
    if (formData.category) {
      setCurrentSubCategories(subCategories[formData.category] || []);
      if (!subCategories[formData.category]?.includes(formData.subCategory)) {
        setFormData((prevData) => ({
          ...prevData,
          subCategory: "",
        }));
      }
    } else {
      setCurrentSubCategories([]);
      setFormData((prevData) => ({
        ...prevData,
        subCategory: "",
      }));
    }
  }, [formData.category, formData.subCategory]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    field: string,
    index?: number
  ) => {
    if (index !== undefined) {
      // Handle nested array updates (e.g., addOns)
      const updatedAddOns = [...formData.addOns];
      updatedAddOns[index] = e.target.value;
      setFormData({ ...formData, addOns: updatedAddOns });
    } else {
      setFormData({ ...formData, [field]: e.target.value });
    }
  };

  const handleAddItemPrice = () => {
    setFormData({
      ...formData,
      itemPrice: [...formData.itemPrice, { shortDescription: "", price: 0 }],
    });
  };

  const handleAddAddOn = () => {
    setFormData({
      ...formData,
      addOns: [...formData.addOns, ""],
    });
  };

  const handleAddPackaging = () => {
    setFormData({
      ...formData,
      packaging: [...formData.packaging, ""],
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(
        `${NEXT_PUBLIC_API_URL}api/menus/${formData.id}`, // Use id for update
        formData
      );
      router.push("/menus");
    } catch (error: unknown) {
      const errorResponse = error as AxiosError;
      console.error(
        "Error updating menu:",
        errorResponse.response?.data || errorResponse.message
      );
    }
  };

  return (
    <section className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="p-4 space-y-4 max-w-lg mx-auto bg-teal-700 rounded shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Edit Menu Item
        </h2>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => handleChange(e, "title")}
          placeholder="Title"
          className="block w-full p-2 border text-gray-800 border-gray-300 rounded"
        />
        <input
          type="text"
          value={formData.slug}
          readOnly
          placeholder="Slug"
          className="block w-full p-2 border text-gray-800 border-gray-300 rounded bg-gray-100"
        />
        <textarea
          value={formData.description}
          onChange={(e) => handleChange(e, "description")}
          placeholder="Description"
          className="block w-full p-2 border text-gray-800 border-gray-300 rounded"
        />
        {formData.itemPrice.map(
          (
            item: { shortDescription: string; price: number },
            index: number
          ) => (
            <div key={index} className="flex space-x-2">
              <input
                type="text"
                value={item.shortDescription}
                onChange={(e) => handleChange(e, "shortDescription", index)}
                placeholder="Item Description"
                className="flex-1 p-2 border text-gray-800 border-gray-300 rounded"
              />
              <input
                type="number"
                value={item.price}
                onChange={(e) => handleChange(e, "price", index)}
                placeholder="Price"
                className="flex-1 p-2 border text-gray-800 border-gray-300 rounded"
              />
            </div>
          )
        )}
        <button
          type="button"
          onClick={handleAddItemPrice}
          className="px-4 py-2 bg-teal-300 text-black rounded-xl"
        >
          Add Price
        </button>
        {formData.addOns.map((addOn: string, index: number) => (
          <div key={index} className="space-y-2">
            <input
              type="text"
              value={addOn}
              onChange={(e) => handleChange(e, "addOns", index)}
              placeholder="Add-On"
              className="block w-full p-2 border text-gray-800 border-gray-300 rounded"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddAddOn}
          className="px-4 py-2 bg-teal-300 text-black rounded-xl"
        >
          Add Add-On
        </button>
        {formData.packaging.map((packageItem: string, index: number) => (
          <input
            key={index}
            type="text"
            value={packageItem}
            onChange={(e) => handleChange(e, "packaging", index)}
            placeholder="Packaging"
            className="block w-full p-2 border text-gray-800 border-gray-300 rounded"
          />
        ))}
        <button
          type="button"
          onClick={handleAddPackaging}
          className="px-4 py-2 bg-teal-300 text-black rounded-xl"
        >
          Add Packaging
        </button>
        <select
          value={formData.category}
          onChange={(e) => handleChange(e, "category")}
          className="block w-full p-2 border text-gray-800 border-gray-300 rounded"
        >
          <option value="">Select Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          value={formData.subCategory}
          onChange={(e) => handleChange(e, "subCategory")}
          className="block w-full p-2 border text-gray-800 border-gray-300 rounded"
        >
          <option value="">Select Subcategory</option>
          {currentSubCategories.map((subCategory, index) => (
            <option key={index} value={subCategory}>
              {subCategory}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-xl"
        >
          Save Changes
        </button>
      </form>
    </section>
  );
};

export default EditMenuForm;
