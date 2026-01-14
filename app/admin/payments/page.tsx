"use client";

import { useState } from "react";
import DataTable from "@/components/admin/DataTable";
import StatusBadge from "@/components/admin/StatusBadge";
import Modal from "@/components/admin/Modal";
import { mockPayments, type Payment } from "@/lib/mockData";

export default function Payments() {
  const [payments, setPayments] = useState<Payment[]>(mockPayments);
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredPayments =
    statusFilter === "all"
      ? payments
      : payments.filter((payment) => payment.status === statusFilter);

  const columns = [
    { key: "id", header: "ID" },
    { key: "order_id", header: "Order ID" },
    { key: "customer_name", header: "Customer" },
    {
      key: "amount",
      header: "Amount",
      render: (payment: Payment) => `R${payment.amount}`,
    },
    { key: "method", header: "Method" },
    {
      key: "status",
      header: "Status",
      render: (payment: Payment) => <StatusBadge status={payment.status} />,
    },
    { key: "created_at", header: "Date" },
  ];

  const handleView = (payment: Payment) => {
    setSelectedPayment(payment);
    setIsModalOpen(true);
  };

  const handleStatusUpdate = (
    paymentId: number,
    newStatus: Payment["status"]
  ) => {
    setPayments(
      payments.map((payment) =>
        payment.id === paymentId ? { ...payment, status: newStatus } : payment
      )
    );
    if (selectedPayment?.id === paymentId) {
      setSelectedPayment({ ...selectedPayment, status: newStatus });
    }
  };

  const handleRefund = (paymentId: number) => {
    if (confirm("Are you sure you want to process a refund?")) {
      handleStatusUpdate(paymentId, "refunded");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Payments</h1>
          <p className="text-gray-600 mt-2">Manage payment transactions</p>
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-budz-blue"
        >
          <option value="all">All Status</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
          <option value="failed">Failed</option>
          <option value="refunded">Refunded</option>
        </select>
      </div>

      <DataTable data={filteredPayments} columns={columns} onEdit={handleView} />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Payment #${selectedPayment?.id}`}
        size="lg"
      >
        {selectedPayment && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 font-semibold">Order ID</p>
                <p className="text-gray-800">#{selectedPayment.order_id}</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Customer</p>
                <p className="text-gray-800">{selectedPayment.customer_name}</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Amount</p>
                <p className="text-gray-800 text-xl font-bold">R{selectedPayment.amount}</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Method</p>
                <p className="text-gray-800">{selectedPayment.method}</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Status</p>
                <StatusBadge status={selectedPayment.status} />
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Transaction ID</p>
                <p className="text-gray-800 font-mono text-sm">{selectedPayment.transaction_id}</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Date</p>
                <p className="text-gray-800">{selectedPayment.created_at}</p>
              </div>
            </div>

            <div className="pt-4 border-t">
              <p className="text-gray-600 font-semibold mb-2">Update Status</p>
              <div className="flex flex-wrap gap-2">
                {(
                  ["completed", "pending", "failed", "refunded"] as const
                ).map((status) => (
                  <button
                    key={status}
                    onClick={() => handleStatusUpdate(selectedPayment.id, status)}
                    className={`px-4 py-2 rounded-lg font-semibold transition ${
                      selectedPayment.status === status
                        ? "bg-budz-green text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {selectedPayment.status === "completed" && (
              <div className="pt-4 border-t">
                <button
                  onClick={() => handleRefund(selectedPayment.id)}
                  className="px-6 py-2 bg-budz-red text-white rounded-lg hover:bg-red-600 transition font-semibold"
                >
                  Process Refund
                </button>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}

