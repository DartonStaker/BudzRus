"use client";

import { useState } from "react";
import DataTable from "@/components/admin/DataTable";
import Modal from "@/components/admin/Modal";
import { mockCustomers, type Customer } from "@/lib/mockData";

export default function Customers() {
  const [customers, setCustomers] = useState<Customer[]>(mockCustomers);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const columns = [
    { key: "id", header: "ID" },
    { key: "name", header: "Name" },
    { key: "email", header: "Email" },
    { key: "phone", header: "Phone" },
    { key: "total_orders", header: "Orders" },
    {
      key: "total_spent",
      header: "Total Spent",
      render: (customer: Customer) => `R${customer.total_spent}`,
    },
  ];

  const handleView = (customer: Customer) => {
    setSelectedCustomer(customer);
    setFormData({
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      address: customer.address,
    });
    setIsEditMode(false);
    setIsModalOpen(true);
  };

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    if (selectedCustomer) {
      setCustomers(
        customers.map((c) =>
          c.id === selectedCustomer.id
            ? { ...c, ...formData }
            : c
        )
      );
      setSelectedCustomer({ ...selectedCustomer, ...formData });
      setIsEditMode(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Customers</h1>
        <p className="text-gray-600 mt-2">Manage customer information</p>
      </div>

      <DataTable data={customers} columns={columns} onEdit={handleView} />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Customer #${selectedCustomer?.id}`}
        size="lg"
      >
        {selectedCustomer && (
          <div className="space-y-4">
            {isEditMode ? (
              <>
                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-budz-blue"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-budz-blue"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-budz-blue"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">Address</label>
                  <textarea
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-budz-blue"
                    rows={3}
                  />
                </div>
                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    onClick={() => setIsEditMode(false)}
                    className="px-6 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-6 py-2 bg-budz-green text-white rounded-lg hover:bg-budz-orange transition font-semibold"
                  >
                    Save
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600 font-semibold">Name</p>
                    <p className="text-gray-800">{selectedCustomer.name}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold">Email</p>
                    <p className="text-gray-800">{selectedCustomer.email}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold">Phone</p>
                    <p className="text-gray-800">{selectedCustomer.phone}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold">Total Orders</p>
                    <p className="text-gray-800">{selectedCustomer.total_orders}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold">Total Spent</p>
                    <p className="text-gray-800">R{selectedCustomer.total_spent}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold">Member Since</p>
                    <p className="text-gray-800">{selectedCustomer.created_at}</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 font-semibold">Address</p>
                  <p className="text-gray-800">{selectedCustomer.address}</p>
                </div>
                <div className="pt-4 border-t">
                  <button
                    onClick={handleEdit}
                    className="px-6 py-2 bg-budz-blue text-white rounded-lg hover:bg-budz-orange transition font-semibold"
                  >
                    Edit Customer
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}

