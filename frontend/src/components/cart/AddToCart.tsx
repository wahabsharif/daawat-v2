// components/AddToCart.tsx

import React from "react";

interface AddToCartProps {
  productId: string;
  onAddToCart: (productId: string) => void;
}

const AddToCart: React.FC<AddToCartProps> = ({ productId, onAddToCart }) => {
  return (
    <button
      onClick={() => onAddToCart(productId)}
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
