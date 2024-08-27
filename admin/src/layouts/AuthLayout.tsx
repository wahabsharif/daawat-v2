// components/AuthLayout.tsx
import React, { ReactNode } from "react";
import "@/styles/globals.css";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <main className="flex items-center h-screen">{children}</main>;
};

export default AuthLayout;
