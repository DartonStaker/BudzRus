"use client";

import { useState } from "react";
import DataTable from "@/components/admin/DataTable";
import Modal from "@/components/admin/Modal";
import { mockProducts, type Product } from "@/lib/mockData";
import { Plus } from "lucide-react";

export default function Products() {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
  });

  const columns = [
    { key: "id", header: "ID" },
    { key: "name", header: "Name" },
    { key: "category", header: "Category" },
    {
      key: "price",
      header: "Price",
      render: (product: Product) => `R${product.price}`,
    },
    { key: "stock", header: "Stock" },
  ];

  const handleAdd = () => {
    setEditingProduct(null);
    setFormData({
      name: "",
      description: "",
      price: "",
      category: "",
      stock: "",
    });
    setIsModalOpen(true);
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      category: product.category,
      stock: product.stock.toString(),
    });
    setIsModalOpen(true);
  };

  const handleDelete = (product: Product) => {
    if (confirm(`Are you sure you want to delete ${product.name}?`)) {
      setProducts(products.filter((p) => p.id !== product.id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProduct) {
      // Update existing
      setProducts(
        products.map((p) =>
          p.id === editingProduct.id
            ? {
                ...p,
                ...formData,
                price: parseFloat(formData.price),
                stock: parseInt(formData.stock),
              }
            : p
        )
      );
    } else {
      // Add new
      const newProduct: Product = {
        id: Math.max(...products.map((p) => p.id)) + 1,
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
        created_at: new Date().toISOString().split("T")[0],
      };
      setProducts([...products, newProduct]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Products</h1>
          <p className="text-gray-600 mt-2">Manage your product catalog</p>
        </div>
        <button
          onClick={handleAdd}
          className="bg-budz-green text-white px-6 py-3 rounded-lg hover:bg-budz-orange transition font-semibold flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>Add Product</span>
        </button>
      </div>

      <DataTable
        data={products}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingProduct ? "Edit Product" : "Add Product"}
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
              <label className="block text-gray-700 mb-2 font-semibold">Stock</label>
              <input
                type="number"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
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
              <option value="Edibles">Edibles</option>
              <option value="Canna Bar">Canna Bar</option>
              <option value="Fashion">Fashion</option>
              <option value="Munchies Kitchen">Munchies Kitchen</option>
            </select>
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
              {editingProduct ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

