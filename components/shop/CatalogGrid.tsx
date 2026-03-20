"use client";

import ProductCard from "@/components/ProductCard";
import type { CatalogCategory } from "@/lib/catalog";
import { formatZAR } from "@/lib/catalog";
import { useCatalog } from "@/components/providers/CatalogProvider";

export default function CatalogGrid({
  category,
  columnsClass = "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
}: {
  category: CatalogCategory;
  columnsClass?: string;
}) {
  const { productsByCategory, hydrated } = useCatalog();
  const list = productsByCategory(category);

  if (!hydrated) {
    return (
      <div className={`grid ${columnsClass}`}>
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-80 animate-pulse rounded-2xl bg-stone-200"
          />
        ))}
      </div>
    );
  }

  if (list.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 px-6 py-16 text-center">
        <p className="font-display text-lg font-semibold text-stone-800">
          Nothing in this category yet
        </p>
        <p className="mt-2 text-stone-600">
          Add products in the admin catalog — they appear here automatically.
        </p>
      </div>
    );
  }

  return (
    <div className={`grid ${columnsClass}`}>
      {list.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={formatZAR(product.price)}
          bestSeller={product.bestSeller}
          newArrival={product.newArrival}
          productType={product.productTypeKey}
          imageUrl={product.image_url}
        />
      ))}
    </div>
  );
}
