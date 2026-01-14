// Unsplash API helper for product images
export function getUnsplashImageUrl(
  width: number = 400,
  height: number = 400,
  keywords: string = "cannabis"
): string {
  // Using Unsplash Source API (no key required for basic usage)
  const searchTerm = encodeURIComponent(keywords);
  return `https://source.unsplash.com/${width}x${height}/?${searchTerm}`;
}

// Alternative: Direct Unsplash random images with keywords
export function getProductImageUrl(
  productType: string,
  width: number = 400,
  height: number = 400
): string {
  const keywords: Record<string, string> = {
    edibles: "cannabis edibles brownies chocolate",
    "canna-bar": "cannabis flower pre-roll",
    fashion: "cannabis fashion streetwear",
    "munchies-kitchen": "cannabis infused food meal",
    default: "cannabis product",
  };

  const searchTerm = keywords[productType] || keywords.default;
  return getUnsplashImageUrl(width, height, searchTerm);
}

