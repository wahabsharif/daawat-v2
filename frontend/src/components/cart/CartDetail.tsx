// src/components/cart/CartDetail.tsx
import React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { removeItem } from "../../redux/slices/cartSlice"; // Adjust the path as necessary
import { RootState } from "@/redux/store";

const CartDetail: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const items = useSelector((state: RootState) => state.cart.items);

  const handleRemoveItem = (id: string) => {
    dispatch(removeItem(id));
  };

  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div
      className={`fixed top-0 right-0 min-h-screen w-80 bg-gray-900 shadow-lg p-4 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } flex flex-col justify-between`}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-2xl text-red-500 font-bold"
      >
        <LiaTimesSolid />
      </button>
      <h2 className="text-xl font-bold text-gray-400">Cart Details</h2>
      {items.length === 0 ? (
        <div className="flex items-center justify-center flex-grow">
          <p className="text-white tracking-widest">Nothing to Checkout</p>
        </div>
      ) : (
        <>
          <ul>
            {items.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center py-2"
              >
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-white">
            <button
              onClick={handleCheckout}
              className="mt-2 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
            >
              Proceed to Checkout Rs.{" "}
              {new Intl.NumberFormat().format(totalPrice)}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDetail;
