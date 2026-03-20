"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminHeader() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header className="bg-white shadow-md border-b-4 border-budz-blue">
      <div className="max-w-full mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Admin Dashboard</h2>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/admin/products"
            className="font-semibold text-budz-green transition hover:text-budz-orange"
          >
            Catalog
          </Link>
          <Link
            href="/"
            className="font-semibold text-budz-blue transition hover:text-budz-orange"
          >
            View site
          </Link>
          <button
            onClick={handleLogout}
            className="bg-budz-red text-white px-4 py-2 rounded-lg hover:bg-red-600 transition font-semibold"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

