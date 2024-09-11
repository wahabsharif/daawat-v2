import WeddingMenuList from "@/components/wedding/WeddingMenuList";
import AdminLayout from "@/layouts/AdminLayout";

export const metadata = {
  title: "Daawat - Dashboard",
};

export default function WeddingMenuPage() {
  return (
    <AdminLayout>
      <WeddingMenuList />
    </AdminLayout>
  );
}
