import UsersList from "@/components/users/UsersList";
import AdminLayout from "@/layouts/AdminLayout";
import { FaUserShield } from "react-icons/fa";

export const metadata = {
  title: "Daawat - Dashboard",
};

export default function page() {
  return (
    <>
      <AdminLayout>
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="text-3xl text-cyan-400 font-extrabold mb-4 mt-4 flex items-center justify-center space-x-2">
            <FaUserShield />
            <span>Users</span>
          </h2>
        </div>
        <UsersList />
      </AdminLayout>
    </>
  );
}
