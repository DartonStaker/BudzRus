"use client";

import { useMemo } from "react";
import { mockOrders, mockCustomers } from "@/lib/mockData";
import { useCatalog } from "@/components/providers/CatalogProvider";
import Link from "next/link";
import { Package, ShoppingCart, Users, DollarSign, ExternalLink } from "lucide-react";

export default function DashboardPage() {
  const { products, hydrated } = useCatalog();

  const stats = useMemo(
    () => ({
      totalProducts: hydrated ? products.length : null,
      totalOrders: mockOrders.length,
      totalCustomers: mockCustomers.length,
      totalRevenue: mockOrders.reduce((sum, order) => sum + order.total, 0),
    }),
    [products.length, hydrated]
  );

  const statCards = [
    {
      title: "Catalog products",
      value:
        stats.totalProducts === null ? "…" : stats.totalProducts.toString(),
      hint: "Synced to shop (localStorage)",
      icon: Package,
      color: "bg-budz-green",
    },
    {
      title: "Total orders",
      value: stats.totalOrders.toString(),
      hint: "Mock data — wire Supabase later",
      icon: ShoppingCart,
      color: "bg-budz-blue",
    },
    {
      title: "Total customers",
      value: stats.totalCustomers.toString(),
      hint: "Mock data",
      icon: Users,
      color: "bg-budz-orange",
    },
    {
      title: "Total revenue",
      value: `R${stats.totalRevenue.toLocaleString()}`,
      hint: "From mock orders",
      icon: DollarSign,
      color: "bg-budz-yellow",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Admin home — catalog CRUD drives the public shop until the database
            is connected.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/admin/products"
            className="inline-flex items-center gap-2 rounded-lg bg-budz-green px-4 py-2 text-sm font-semibold text-white transition hover:bg-budz-orange"
          >
            Manage catalog
          </Link>
          <Link
            href="/shop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-budz-blue px-4 py-2 text-sm font-semibold text-budz-blue transition hover:bg-budz-blue hover:text-white"
          >
            View shop
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="rounded-lg border border-gray-100 bg-white p-6 shadow-md"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </p>
                  <p className="mt-2 text-2xl font-bold text-gray-800">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">{stat.hint}</p>
                </div>
                <div className={`${stat.color} rounded-lg p-3`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Recent orders</h2>
        <p className="mb-4 text-sm text-gray-500">
          Sample orders from <code className="rounded bg-gray-100 px-1">mockData</code>{" "}
          — replace with Supabase queries.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-budz-dark-blue text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Order ID
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Customer
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Total
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockOrders.slice(0, 5).map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm">#{order.id}</td>
                  <td className="px-4 py-3 text-sm">{order.customer_name}</td>
                  <td className="px-4 py-3 text-sm">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        order.status === "delivered"
                          ? "bg-budz-green text-white"
                          : order.status === "pending"
                            ? "bg-budz-yellow text-budz-dark-blue"
                            : "bg-budz-blue text-white"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm font-semibold">
                    R{order.total}
                  </td>
                  <td className="px-4 py-3 text-sm">{order.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
