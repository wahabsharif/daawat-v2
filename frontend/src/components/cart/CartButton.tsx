// src/components/cart/CartButton.tsx
"use client";

import React, { useState, useEffect } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CartDetail from "./CartDetail";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

function CartButton() {
  const [isOpen, setIsOpen] = useState(false);
  const items = useSelector((state: RootState) => state.cart.items);
  const hasItems = items.length > 0;

  const toggleCartDetail = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleCartDetail} className="cursor-pointer">
        <ShoppingCartOutlinedIcon />
        {hasItems && (
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
        )}
      </button>
      <CartDetail isOpen={isOpen} onClose={toggleCartDetail} />
    </div>
  );
}

export default CartButton;
