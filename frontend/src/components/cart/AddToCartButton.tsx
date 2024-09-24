// src/components/cart/AddToCartButton.tsx
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice"; // Adjust the path as necessary

interface AddToCartButtonProps {
  id: string;
  title: string;
  persons: number;
  price: number;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  id,
  title,
  persons,
  price,
}) => {
  const dispatch = useDispatch();

  const handleAddToCartButton = () => {
    const newItem = { id, title, persons, price };
    dispatch(addItem(newItem)); // Use Redux action to add item
    alert(`${title} has been added to your cart!`);
  };

  return (
    <button
      onClick={handleAddToCartButton}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
