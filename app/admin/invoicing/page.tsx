"use client";

import { useState } from "react";
import DataTable from "@/components/admin/DataTable";
import StatusBadge from "@/components/admin/StatusBadge";
import Modal from "@/components/admin/Modal";
import { mockInvoices, mockOrders, type Invoice } from "@/lib/mockData";
import { Plus } from "lucide-react";

export default function Invoicing() {
  const [invoices, setInvoices] = useState<Invoice[]>(mockInvoices);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGenerateModalOpen, setIsGenerateModalOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null);

  const columns = [
    { key: "invoice_number", header: "Invoice #" },
    { key: "order_id", header: "Order ID" },
    { key: "customer_name", header: "Customer" },
    {
      key: "amount",
      header: "Amount",
      render: (invoice: Invoice) => `R${invoice.amount}`,
    },
    {
      key: "status",
      header: "Status",
      render: (invoice: Invoice) => <StatusBadge status={invoice.status} />,
    },
    { key: "created_at", header: "Date" },
  ];

  const handleGenerate = () => {
    setIsGenerateModalOpen(true);
  };

  const handleGenerateFromOrder = () => {
    if (selectedOrderId) {
      const order = mockOrders.find((o) => o.id === selectedOrderId);
      if (order) {
        const newInvoice: Invoice = {
          id: invoices.length + 1,
          invoice_number: `INV-2025-${String(invoices.length + 1).padStart(3, "0")}`,
          order_id: order.id,
          customer_name: order.customer_name,
          amount: order.total,
          status: "unpaid",
          created_at: new Date().toISOString().split("T")[0],
        };
        setInvoices([...invoices, newInvoice]);
        setIsGenerateModalOpen(false);
        setSelectedOrderId(null);
      }
    }
  };

  const handleView = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
    setIsModalOpen(true);
  };

  const handleStatusUpdate = (invoiceId: number, newStatus: "paid" | "unpaid") => {
    setInvoices(
      invoices.map((invoice) =>
        invoice.id === invoiceId ? { ...invoice, status: newStatus } : invoice
      )
    );
    if (selectedInvoice?.id === invoiceId) {
      setSelectedInvoice({ ...selectedInvoice, status: newStatus });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Invoicing</h1>
          <p className="text-gray-600 mt-2">Manage invoices and billing</p>
        </div>
        <button
          onClick={handleGenerate}
          className="bg-budz-green text-white px-6 py-3 rounded-lg hover:bg-budz-orange transition font-semibold flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>Generate Invoice</span>
        </button>
      </div>

      <DataTable data={invoices} columns={columns} onEdit={handleView} />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Invoice ${selectedInvoice?.invoice_number}`}
        size="lg"
      >
        {selectedInvoice && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 font-semibold">Invoice Number</p>
                <p className="text-gray-800">{selectedInvoice.invoice_number}</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Order ID</p>
                <p className="text-gray-800">#{selectedInvoice.order_id}</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Customer</p>
                <p className="text-gray-800">{selectedInvoice.customer_name}</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Amount</p>
                <p className="text-gray-800 text-xl font-bold">R{selectedInvoice.amount}</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Status</p>
                <StatusBadge status={selectedInvoice.status} />
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Date</p>
                <p className="text-gray-800">{selectedInvoice.created_at}</p>
              </div>
            </div>

            <div className="pt-4 border-t">
              <p className="text-gray-600 font-semibold mb-2">Update Status</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleStatusUpdate(selectedInvoice.id, "paid")}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    selectedInvoice.status === "paid"
                      ? "bg-budz-green text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  Paid
                </button>
                <button
                  onClick={() => handleStatusUpdate(selectedInvoice.id, "unpaid")}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    selectedInvoice.status === "unpaid"
                      ? "bg-budz-red text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  Unpaid
                </button>
              </div>
            </div>

            <div className="pt-4 border-t">
              <button className="px-6 py-2 bg-budz-blue text-white rounded-lg hover:bg-budz-orange transition font-semibold">
                Download PDF
              </button>
            </div>
          </div>
        )}
      </Modal>

      <Modal
        isOpen={isGenerateModalOpen}
        onClose={() => setIsGenerateModalOpen(false)}
        title="Generate Invoice from Order"
        size="md"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Select Order</label>
            <select
              value={selectedOrderId || ""}
              onChange={(e) => setSelectedOrderId(Number(e.target.value))}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-budz-blue"
            >
              <option value="">Select an order</option>
              {mockOrders.map((order) => (
                <option key={order.id} value={order.id}>
                  Order #{order.id} - {order.customer_name} - R{order.total}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end space-x-4 pt-4">
            <button
              onClick={() => setIsGenerateModalOpen(false)}
              className="px-6 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={handleGenerateFromOrder}
              disabled={!selectedOrderId}
              className="px-6 py-2 bg-budz-green text-white rounded-lg hover:bg-budz-orange transition font-semibold disabled:opacity-50"
            >
              Generate Invoice
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

