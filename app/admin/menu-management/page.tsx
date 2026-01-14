"use client";

import { useState } from "react";
import DataTable from "@/components/admin/DataTable";
import Modal from "@/components/admin/Modal";
import { mockMenuItems, type MenuItem } from "@/lib/mockData";
import { Plus } from "lucide-react";

export default function MenuManagement() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(mockMenuItems);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    order: "",
    visible: true,
  });

  const columns = [
    { key: "id", header: "ID" },
    { key: "name", header: "Name" },
    { key: "category", header: "Category" },
    {
      key: "price",
      header: "Price",
      render: (item: MenuItem) => `R${item.price}`,
    },
    { key: "order", header: "Order" },
    {
      key: "visible",
      header: "Visible",
      render: (item: MenuItem) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            item.visible
              ? "bg-budz-green text-white"
              : "bg-gray-400 text-white"
          }`}
        >
          {item.visible ? "Yes" : "No"}
        </span>
      ),
    },
  ];

  const handleAdd = () => {
    setEditingItem(null);
    setFormData({
      name: "",
      description: "",
      price: "",
      category: "",
      order: String(menuItems.length + 1),
      visible: true,
    });
    setIsModalOpen(true);
  };

  const handleEdit = (item: MenuItem) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      description: item.description,
      price: item.price.toString(),
      category: item.category,
      order: item.order.toString(),
      visible: item.visible,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (item: MenuItem) => {
    if (confirm(`Are you sure you want to delete ${item.name}?`)) {
      setMenuItems(menuItems.filter((i) => i.id !== item.id));
    }
  };

  const handleToggleVisibility = (itemId: number) => {
    setMenuItems(
      menuItems.map((item) =>
        item.id === itemId ? { ...item, visible: !item.visible } : item
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingItem) {
      setMenuItems(
        menuItems.map((item) =>
          item.id === editingItem.id
            ? {
                ...item,
                ...formData,
                price: parseFloat(formData.price),
                order: parseInt(formData.order),
              }
            : item
        )
      );
    } else {
      const newItem: MenuItem = {
        id: Math.max(...menuItems.map((i) => i.id)) + 1,
        ...formData,
        price: parseFloat(formData.price),
        order: parseInt(formData.order),
        created_at: new Date().toISOString().split("T")[0],
      };
      setMenuItems([...menuItems, newItem]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Menu Management</h1>
          <p className="text-gray-600 mt-2">Manage menu items and categories</p>
        </div>
        <button
          onClick={handleAdd}
          className="bg-budz-green text-white px-6 py-3 rounded-lg hover:bg-budz-orange transition font-semibold flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>Add Menu Item</span>
        </button>
      </div>

      <DataTable
        data={menuItems}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingItem ? "Edit Menu Item" : "Add Menu Item"}
        size="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-budz-blue"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-budz-blue"
              rows={3}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2 font-semibold">Price</label>
              <input
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-budz-blue"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-semibold">Order</label>
              <input
                type="number"
                value={formData.order}
                onChange={(e) => setFormData({ ...formData, order: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-budz-blue"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-budz-blue"
              required
            >
              <option value="">Select category</option>
              <option value="Main Course">Main Course</option>
              <option value="Appetizer">Appetizer</option>
              <option value="Dessert">Dessert</option>
              <option value="Drink">Drink</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="visible"
              checked={formData.visible}
              onChange={(e) => setFormData({ ...formData, visible: e.target.checked })}
              className="w-4 h-4 text-budz-green border-gray-300 rounded focus:ring-budz-green"
            />
            <label htmlFor="visible" className="text-gray-700 font-semibold">
              Visible on menu
            </label>
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-6 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-budz-green text-white rounded-lg hover:bg-budz-orange transition font-semibold"
            >
              {editingItem ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

