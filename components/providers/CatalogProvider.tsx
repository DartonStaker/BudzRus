"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { CatalogCategory, CatalogProduct } from "@/lib/catalog";
import {
  getDefaultCatalog,
  loadCatalogFromStorage,
  saveCatalogToStorage,
} from "@/lib/catalog";

type CatalogContextValue = {
  products: CatalogProduct[];
  hydrated: boolean;
  addProduct: (p: Omit<CatalogProduct, "id" | "created_at">) => void;
  updateProduct: (id: number, patch: Partial<CatalogProduct>) => void;
  deleteProduct: (id: number) => void;
  resetToSeed: () => void;
  productsByCategory: (category: CatalogCategory) => CatalogProduct[];
};

const CatalogContext = createContext<CatalogContextValue | null>(null);

export function CatalogProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<CatalogProduct[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setProducts(loadCatalogFromStorage());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveCatalogToStorage(products);
  }, [products, hydrated]);

  const addProduct = useCallback(
    (p: Omit<CatalogProduct, "id" | "created_at">) => {
      setProducts((prev) => {
        const nextId =
          prev.length === 0 ? 1 : Math.max(...prev.map((x) => x.id)) + 1;
        const created: CatalogProduct = {
          ...p,
          id: nextId,
          created_at: new Date().toISOString().split("T")[0],
        };
        return [...prev, created];
      });
    },
    []
  );

  const updateProduct = useCallback(
    (id: number, patch: Partial<CatalogProduct>) => {
      setProducts((prev) =>
        prev.map((x) => (x.id === id ? { ...x, ...patch, id: x.id } : x))
      );
    },
    []
  );

  const deleteProduct = useCallback((id: number) => {
    setProducts((prev) => prev.filter((x) => x.id !== id));
  }, []);

  const resetToSeed = useCallback(() => {
    const seed = getDefaultCatalog();
    setProducts(seed);
    saveCatalogToStorage(seed);
  }, []);

  const productsByCategory = useCallback(
    (category: CatalogCategory) =>
      products.filter((p) => p.category === category),
    [products]
  );

  const value = useMemo(
    () => ({
      products,
      hydrated,
      addProduct,
      updateProduct,
      deleteProduct,
      resetToSeed,
      productsByCategory,
    }),
    [
      products,
      hydrated,
      addProduct,
      updateProduct,
      deleteProduct,
      resetToSeed,
      productsByCategory,
    ]
  );

  return (
    <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>
  );
}

export function useCatalog() {
  const ctx = useContext(CatalogContext);
  if (!ctx) {
    throw new Error("useCatalog must be used within CatalogProvider");
  }
  return ctx;
}
