"use client";

import { useAuth } from "@/contexts/AuthContext";
import axios from "axios";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const NEXT_PUBLIC_API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${NEXT_PUBLIC_API_URL}/api/users/login`,
        {
          username,
          password,
        }
      );
      login(response.data.token);
    } catch (error: unknown) {
      console.error("Login error:", error);
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        setError("Wrong Password");
      } else {
        setError("Invalid Username or Password");
      }
    }
  };

  return (
    <section className="bg-violet-950 w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-sm p-6 bg-black/30 backdrop-blur-md rounded-xl border border-black/20">
        <div className="flex justify-center items-center">
          <h1 className="text-4xl font-bold text-gray-400 mb-4">Login Form</h1>
        </div>
        <form onSubmit={handleLogin} className="w-full">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 my-4 rounded-xl text-cyan-300 font-semibold bg-cyan-950 focus:outline-none focus:ring focus:ring-cyan-700"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 my-4 rounded-xl text-cyan-300 font-semibold bg-cyan-950 focus:outline-none focus:ring focus:ring-cyan-700 pr-12" // Increase padding right to fit the icon
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer z-10"
            >
              {showPassword ? (
                <FaEyeSlash className="text-gray-500" />
              ) : (
                <FaEye className="text-gray-500" />
              )}
            </button>
          </div>
          {error && <div className="text-red-500 text-md mt-2">{error}</div>}
          <div className="flex justify-center">
            <button
              className="p-2 text-xl rounded-xl bg-teal-700 font-bold"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
