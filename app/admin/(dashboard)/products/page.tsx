"use client";

import { useState } from "react";
import DataTable from "@/components/admin/DataTable";
import Modal from "@/components/admin/Modal";
import { useCatalog } from "@/components/providers/CatalogProvider";
import type {
  CatalogCategory,
  CatalogProduct,
  ProductImageBucket,
} from "@/lib/catalog";
import { formatZAR, inferProductTypeKey } from "@/lib/catalog";
import { Plus, RotateCcw } from "lucide-react";

const CATEGORIES: CatalogCategory[] = [
  "Edibles",
  "Canna Bar",
  "Fashion",
  "Munchies Kitchen",
];

const IMAGE_BUCKETS: ProductImageBucket[] = [
  "edibles",
  "canna-bar",
  "fashion",
  "munchies-kitchen",
];

const emptyForm = () => ({
  name: "",
  description: "",
  price: "",
  category: "" as CatalogCategory | "",
  stock: "",
  productTypeKey: "edibles" as ProductImageBucket,
  image_url: "",
  bestSeller: false,
  newArrival: false,
});

export default function ProductsPage() {
  const {
    products,
    hydrated,
    addProduct,
    updateProduct,
    deleteProduct,
    resetToSeed,
  } = useCatalog();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState(emptyForm());

  const columns = [
    { key: "id", header: "ID" },
    { key: "name", header: "Name" },
    { key: "category", header: "Category" },
    {
      key: "price",
      header: "Price",
      render: (p: CatalogProduct) => formatZAR(p.price),
    },
    { key: "stock", header: "Stock" },
    {
      key: "flags",
      header: "Flags",
      render: (p: CatalogProduct) => (
        <span className="text-xs text-gray-600">
          {[p.bestSeller ? "Bestseller" : null, p.newArrival ? "New" : null]
            .filter(Boolean)
            .join(" · ") || "—"}
        </span>
      ),
    },
  ];

  const openCreate = () => {
    setEditingId(null);
    setForm(emptyForm());
    setIsModalOpen(true);
  };

  const openEdit = (product: CatalogProduct) => {
    setEditingId(product.id);
    setForm({
      name: product.name,
      description: product.description,
      price: String(product.price),
      category: product.category,
      stock: String(product.stock),
      productTypeKey: product.productTypeKey,
      image_url: product.image_url ?? "",
      bestSeller: !!product.bestSeller,
      newArrival: !!product.newArrival,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (product: CatalogProduct) => {
    if (
      confirm(
        `Delete “${product.name}”? This removes it from the storefront catalog.`
      )
    ) {
      deleteProduct(product.id);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.category) return;

    const payload = {
      name: form.name.trim(),
      description: form.description.trim(),
      price: parseFloat(form.price),
      stock: parseInt(form.stock, 10),
      category: form.category,
      productTypeKey: form.productTypeKey,
      image_url: form.image_url.trim() || undefined,
      bestSeller: form.bestSeller,
      newArrival: form.newArrival,
    };

    if (editingId != null) {
      updateProduct(editingId, payload);
    } else {
      addProduct(payload);
    }
    setIsModalOpen(false);
  };

  const onCategoryChange = (cat: CatalogCategory | "") => {
    setForm((f) => ({
      ...f,
      category: cat,
      productTypeKey: cat ? inferProductTypeKey(cat) : f.productTypeKey,
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Products</h1>
          <p className="mt-2 text-gray-600">
            CRUD catalog (saved in this browser via localStorage). Shop
            category pages read from here until Supabase is wired.
          </p>
          {!hydrated ? (
            <p className="mt-1 text-sm text-budz-blue">Loading catalog…</p>
          ) : (
            <p className="mt-1 font-mono text-sm text-gray-500">
              {products.length} product{products.length !== 1 ? "s" : ""} in
              catalog
            </p>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => {
              if (
                confirm(
                  "Reset catalog to default demo data? Your current edits in this browser will be lost."
                )
              ) {
                resetToSeed();
              }
            }}
            className="flex items-center gap-2 rounded-lg border-2 border-gray-300 px-4 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            <RotateCcw className="h-5 w-5" />
            Reset demo data
          </button>
          <button
            type="button"
            onClick={openCreate}
            className="flex items-center gap-2 rounded-lg bg-budz-green px-6 py-3 font-semibold text-white transition hover:bg-budz-orange"
          >
            <Plus className="h-5 w-5" />
            Add product
          </button>
        </div>
      </div>

      <DataTable
        data={products}
        columns={columns}
        onEdit={openEdit}
        onDelete={handleDelete}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingId != null ? "Edit product" : "Add product"}
        size="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 focus:border-budz-blue focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Description
            </label>
            <textarea
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 focus:border-budz-blue focus:outline-none"
              rows={3}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block font-semibold text-gray-700">
                Price (ZAR)
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 focus:border-budz-blue focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="mb-2 block font-semibold text-gray-700">
                Stock
              </label>
              <input
                type="number"
                min="0"
                value={form.stock}
                onChange={(e) => setForm({ ...form, stock: e.target.value })}
                className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 focus:border-budz-blue focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block font-semibold text-gray-700">
                Shop category
              </label>
              <select
                value={form.category}
                onChange={(e) =>
                  onCategoryChange(e.target.value as CatalogCategory | "")
                }
                className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 focus:border-budz-blue focus:outline-none"
                required
              >
                <option value="">Select category</option>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 block font-semibold text-gray-700">
                Image style (Unsplash)
              </label>
              <select
                value={form.productTypeKey}
                onChange={(e) =>
                  setForm({
                    ...form,
                    productTypeKey: e.target.value as ProductImageBucket,
                  })
                }
                className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 focus:border-budz-blue focus:outline-none"
              >
                {IMAGE_BUCKETS.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Image URL (optional)
            </label>
            <input
              type="url"
              placeholder="https://…"
              value={form.image_url}
              onChange={(e) => setForm({ ...form, image_url: e.target.value })}
              className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 focus:border-budz-blue focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-6">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={form.bestSeller}
                onChange={(e) =>
                  setForm({ ...form, bestSeller: e.target.checked })
                }
              />
              <span className="text-sm font-medium text-gray-700">
                Best seller
              </span>
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={form.newArrival}
                onChange={(e) =>
                  setForm({ ...form, newArrival: e.target.checked })
                }
              />
              <span className="text-sm font-medium text-gray-700">New</span>
            </label>
          </div>

          <div className="flex justify-end gap-4 border-t pt-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="rounded-lg border-2 border-gray-300 px-6 py-2 font-semibold transition hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-budz-green px-6 py-2 font-semibold text-white transition hover:bg-budz-orange"
            >
              {editingId != null ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
