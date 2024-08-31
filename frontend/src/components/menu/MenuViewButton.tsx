"use client";

import Modal from "@/components/common/Modal";
import { MagicCard } from "@/components/magicui/magic-card";
import { Menu } from "@/types/types";
import axios from "axios";
import { useState } from "react";
import SingleLoader from "../common/Loaders/SingleLoader";
import { FaPlus } from "react-icons/fa";

interface MenuViewButtonProps {
  menuId: string;
}

const MenuViewButton: React.FC<MenuViewButtonProps> = ({ menuId }) => {
  const [menu, setMenu] = useState<Menu | null>(null);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const fetchMenuDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}api/menus/${menuId}`
      );
      setMenu(response.data);
    } catch (error) {
      console.error("Failed to fetch menu details", error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = async () => {
    await fetchMenuDetails();
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  });

  // Debugging logs
  console.log("Menu:", menu);
  console.log("Add-Ons Length:", menu?.addOns.length);
  console.log("Packaging Length:", menu?.packaging.length);

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="p-2 bg-teal-800 text-gray-300 rounded-lg"
      >
        <FaPlus />
      </button>

      {isOpen && (
        <Modal onClose={handleCloseModal}>
          {loading ? (
            <SingleLoader />
          ) : (
            <div className="p-4">
              {menu ? (
                <MagicCard className="shadow-2xl p-4">
                  <h3 className="text-xl font-semibold">{menu.title}</h3>
                  {menu.description && (
                    <p className="text-gray-600 mt-2">{menu.description}</p>
                  )}
                  {menu.sku && (
                    <div className="mt-4 flex items-center space-x-2">
                      <h4 className="text-lg font-bold">SKU:</h4>
                      <p className="text-sm">{menu.sku}</p>
                    </div>
                  )}
                  <div className="my-4">
                    {menu.itemPrice.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {menu.itemPrice.map((item, index) => (
                          <div
                            key={index}
                            className="p-4 border rounded-lg cursor-pointer shadow-sm"
                          >
                            <p className="text-sm font-medium">
                              {item.shortDescription}
                            </p>
                            <p className="text-lg font-semibold">
                              {formatter.format(item.price)}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p>No prices available.</p>
                    )}
                  </div>

                  {menu.addOns.length > 0 ? (
                    <div className="mt-4">
                      <h4 className="text-lg font-bold">Add-Ons:</h4>
                      <ul className="list-disc ml-4">
                        {menu.addOns.map((addOn, index) => (
                          <li key={index}>{addOn}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p>No add-ons available.</p>
                  )}

                  {menu.packaging.length > 0 ? (
                    <div className="mt-4">
                      <h4 className="text-lg font-bold">Packaging:</h4>
                      <ul className="list-disc ml-4">
                        {menu.packaging.map((pack, index) => (
                          <li key={index}>{pack}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p>No packaging options available.</p>
                  )}
                </MagicCard>
              ) : (
                <p>No details available.</p>
              )}
            </div>
          )}
        </Modal>
      )}
    </>
  );
};

export default MenuViewButton;
