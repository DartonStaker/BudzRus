"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  FileText,
  CreditCard,
  UtensilsCrossed,
  BookOpen,
  Settings,
} from "lucide-react";

const menuItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/orders", label: "Orders", icon: ShoppingCart },
  { href: "/admin/customers", label: "Customers", icon: Users },
  { href: "/admin/invoicing", label: "Invoicing", icon: FileText },
  { href: "/admin/payments", label: "Payments", icon: CreditCard },
  { href: "/admin/menu-management", label: "Menu Management", icon: UtensilsCrossed },
  { href: "/admin/blog", label: "Blog", icon: BookOpen },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-budz-dark-blue text-white min-h-screen p-4">
      <div className="mb-8">
        <Link href="/admin/dashboard" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">
            <span className="text-budz-green">Budz</span>{" "}
            <span className="text-budz-blue">R</span>{" "}
            <span className="text-budz-orange">Us</span>
          </span>
        </Link>
        <p className="text-sm text-gray-300 mt-1">Admin Panel</p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                isActive
                  ? "bg-budz-green text-white"
                  : "text-gray-300 hover:bg-budz-blue hover:text-white"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

