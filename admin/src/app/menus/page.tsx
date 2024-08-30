import AddMenuButton from "@/components/menu/AddMenuButton";
import MenuList from "@/components/menu/MenuList";
import AdminLayout from "@/layouts/AdminLayout";

export const metadata = {
  title: "Daawat - Dashboard",
};

export default function MenuPage() {
  return (
    <AdminLayout>
      <div className="relative">
        <div className="absolute top-4 right-4">
          <AddMenuButton />
        </div>
        <MenuList />
      </div>
    </AdminLayout>
  );
}
