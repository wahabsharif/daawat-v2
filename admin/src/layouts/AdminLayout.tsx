import React, { ReactNode } from "react";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import "@/styles/globals.css";
import SideBar from "@/components/common/SideBar";

export const metadata = {
  title: "Daawat Dashboard",
};

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ProtectedRoute>
      <div className="flex h-screen w-full">
        <SideBar />
        <main className="ml-64 p-4 w-full bg-teal-100 overflow-y-auto">
          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default AdminLayout;
