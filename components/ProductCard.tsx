"use client";

import Image from "next/image";
import { getProductImageUrl } from "@/lib/unsplash";

interface ProductCardProps {
  id?: number;
  name: string;
  price: string;
  bestSeller?: boolean;
  newArrival?: boolean;
  productType?: string;
  imageUrl?: string;
  productId?: string;
}

export default function ProductCard({
  name,
  price,
  bestSeller,
  newArrival,
  productType = "default",
  imageUrl,
  productId,
}: ProductCardProps) {
  const imgUrl = imageUrl || getProductImageUrl(productType, 400, 400);

  const handleAddToCart = () => {
    // Handle add to cart - will be connected to cart system later
    console.log(`Added ${name} to cart`);
  };

  const handleQuickView = () => {
    // Handle quick view - will navigate to product page later
    console.log(`Quick view ${name}`);
  };

  return (
    <div className="card-hover overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-md">
      <div className="relative h-48 bg-stone-200">
        <Image
          src={imgUrl}
          alt={name}
          fill
          className="object-cover"
          unoptimized
        />
        {bestSeller && (
          <span className="absolute left-2 top-2 rounded-md bg-budz-yellow px-2 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-wide text-budz-dark-blue">
            Best Seller
          </span>
        )}
        {newArrival && (
          <span className="absolute right-2 top-2 rounded-md bg-budz-yellow px-2 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-wide text-budz-dark-blue">
            New
          </span>
        )}
      </div>
      <div className="p-4">
        {bestSeller && !newArrival && (
          <p className="text-sm text-gray-500 mb-1">Best Seller</p>
        )}
        <h3 className="mb-2 font-display text-base font-bold leading-snug">{name}</h3>
        <p className="mb-3 font-mono text-sm font-semibold text-budz-orange">{price}</p>
        <button
          type="button"
          onClick={handleAddToCart}
          className="btn-primary w-full py-2.5 text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
