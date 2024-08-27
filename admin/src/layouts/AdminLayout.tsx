// components/AdminLayout.tsx
import React, { ReactNode } from "react";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import "@/styles/globals.css";

export const metadata = {
  title: "Daawat Dashboard",
};

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ProtectedRoute>
      <div className="flex h-screen w-full">
        <main className="flex-1 p-4 w-full sm:ml-60 bg-gray-100 overflow-y-auto">
          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default AdminLayout;
