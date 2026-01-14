"use client";

import { useState, useEffect } from "react";
import { mockOrders, mockProducts, mockCustomers } from "@/lib/mockData";
import { Package, ShoppingCart, Users, DollarSign } from "lucide-react";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalCustomers: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    // Calculate stats from mock data
    setStats({
      totalProducts: mockProducts.length,
      totalOrders: mockOrders.length,
      totalCustomers: mockCustomers.length,
      totalRevenue: mockOrders.reduce((sum, order) => sum + order.total, 0),
    });
  }, []);

  const statCards = [
    {
      title: "Total Products",
      value: stats.totalProducts,
      icon: Package,
      color: "bg-budz-green",
    },
    {
      title: "Total Orders",
      value: stats.totalOrders,
      icon: ShoppingCart,
      color: "bg-budz-blue",
    },
    {
      title: "Total Customers",
      value: stats.totalCustomers,
      icon: Users,
      color: "bg-budz-orange",
    },
    {
      title: "Total Revenue",
      value: `R${stats.totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      color: "bg-budz-yellow",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to the admin dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-budz-green"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-800 mt-2">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-budz-dark-blue text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Order ID</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Customer</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Status</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Total</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockOrders.slice(0, 5).map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm">#{order.id}</td>
                  <td className="px-4 py-3 text-sm">{order.customer_name}</td>
                  <td className="px-4 py-3 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
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
                  <td className="px-4 py-3 text-sm font-semibold">R{order.total}</td>
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

