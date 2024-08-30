import MenuManager from "@/components/menu/MenuManager";
import AdminLayout from "@/layouts/AdminLayout";

export const metadata = {
  title: "Daawat - Dashboard",
};

export default function MenuPage() {
  return (
    <AdminLayout>
      <MenuManager />
    </AdminLayout>
  );
}
