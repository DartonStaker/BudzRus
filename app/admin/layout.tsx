import Sidebar from "@/components/admin/Sidebar";
import AdminHeader from "@/components/admin/Header";

// TEMPORARILY DISABLED - Auth will be re-enabled after all features are implemented
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Render admin layout without auth check for now
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
