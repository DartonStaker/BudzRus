"use client";

import { useState } from "react";
import DataTable from "@/components/admin/DataTable";
import StatusBadge from "@/components/admin/StatusBadge";
import Modal from "@/components/admin/Modal";
import { mockOrders, type Order } from "@/lib/mockData";

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredOrders =
    statusFilter === "all"
      ? orders
      : orders.filter((order) => order.status === statusFilter);

  const columns = [
    { key: "id", header: "Order ID" },
    { key: "customer_name", header: "Customer" },
    {
      key: "status",
      header: "Status",
      render: (order: Order) => <StatusBadge status={order.status} />,
    },
    {
      key: "total",
      header: "Total",
      render: (order: Order) => `R${order.total}`,
    },
    { key: "items", header: "Items" },
    { key: "created_at", header: "Date" },
  ];

  const handleView = (order: Order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleStatusUpdate = (orderId: number, newStatus: Order["status"]) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
    if (selectedOrder?.id === orderId) {
      setSelectedOrder({ ...selectedOrder, status: newStatus });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Orders</h1>
          <p className="text-gray-600 mt-2">Manage customer orders</p>
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-budz-blue"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      <DataTable
        data={filteredOrders}
        columns={columns}
        onEdit={handleView}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Order #${selectedOrder?.id}`}
        size="lg"
      >
        {selectedOrder && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 font-semibold">Customer</p>
                <p className="text-gray-800">{selectedOrder.customer_name}</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Status</p>
                <StatusBadge status={selectedOrder.status} />
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Total</p>
                <p className="text-gray-800">R{selectedOrder.total}</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Items</p>
                <p className="text-gray-800">{selectedOrder.items}</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Date</p>
                <p className="text-gray-800">{selectedOrder.created_at}</p>
              </div>
            </div>

            <div className="pt-4 border-t">
              <p className="text-gray-600 font-semibold mb-2">Update Status</p>
              <div className="flex space-x-2">
                {(
                  ["pending", "processing", "shipped", "delivered", "cancelled"] as const
                ).map((status) => (
                  <button
                    key={status}
                    onClick={() => handleStatusUpdate(selectedOrder.id, status)}
                    className={`px-4 py-2 rounded-lg font-semibold transition ${
                      selectedOrder.status === status
                        ? "bg-budz-green text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

