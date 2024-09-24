"use client";

import React from "react";
import { useSelector } from "react-redux"; // Assuming you are using Redux
import { RootState } from "@/redux/store"; // Adjust the path to your store

const CheckoutDetail: React.FC = () => {
  // Access cart items from Redux store
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // Calculate total amount without multiplying price by persons
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <section className="flex flex-col md:flex-row p-10">
      {/* Left Side - Cart Items */}
      <div className="w-full md:w-1/2 p-4 border-b md:border-r md:border-b-0 border-gray-300">
        <h2 className="text-xl font-bold text-gray-700">Cart Items</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">No items in the cart.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between py-2">
                <span className="text-gray-400 font-semibold text-xl">
                  {item.title}
                </span>
                <span className="text-gray-400 text-lg">
                  {item.persons} persons - Rs.{" "}
                  {new Intl.NumberFormat().format(item.price)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Right Side - Total Amount */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-xl font-bold text-gray-700">Total Amount</h2>
        <p className="text-2xl font-semibold text-green-600">
          Rs. {new Intl.NumberFormat().format(totalPrice)}
        </p>
        {/* Enhanced Form for User Details */}
        <form className="mt-4 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="border p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="border p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            required
            className="border p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Your Location"
            required
            className="border p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Note (optional)"
            className="border p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 w-full">
            Proceed to Payment
          </button>
        </form>
      </div>
    </section>
  );
};

export default CheckoutDetail;
