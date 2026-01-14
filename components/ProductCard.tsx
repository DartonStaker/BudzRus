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
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48 bg-gray-200">
        <Image
          src={imgUrl}
          alt={name}
          fill
          className="object-cover"
          unoptimized
        />
        {bestSeller && (
          <span className="absolute top-2 left-2 bg-budz-yellow text-budz-dark-blue text-xs px-2 py-1 rounded font-bold">
            Best Seller
          </span>
        )}
        {newArrival && (
          <span className="absolute top-2 right-2 bg-budz-yellow text-budz-dark-blue text-xs px-2 py-1 rounded font-bold">
            New Arrival
          </span>
        )}
      </div>
      <div className="p-4">
        {bestSeller && !newArrival && (
          <p className="text-sm text-gray-500 mb-1">Best Seller</p>
        )}
        <h3 className="font-bold mb-2">{name}</h3>
        <p className="text-budz-orange font-semibold mb-3">Price {price}</p>
        <button
          onClick={handleAddToCart}
          className="w-full bg-budz-green text-white px-4 py-2 rounded-lg hover:bg-budz-orange transition text-sm font-semibold"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
