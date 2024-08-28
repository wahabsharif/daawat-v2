import AnnouncementsManager from "@/components/announcements/AnnouncementsManager";
import AdminLayout from "@/layouts/AdminLayout";

export const metadata = {
  title: "Daawat - Dashboard",
};

export default function Page() {
  return (
    <AdminLayout>
      <AnnouncementsManager />
    </AdminLayout>
  );
}
