/**
 * Client-side catalog (localStorage). Replace persistence with Supabase later;
 * keep `CatalogProduct` aligned with your future DB row shape.
 */

export const CATALOG_STORAGE_KEY = "budzrus-catalog-v1";

export type CatalogCategory =
  | "Edibles"
  | "Canna Bar"
  | "Fashion"
  | "Munchies Kitchen";

export type ProductImageBucket =
  | "edibles"
  | "canna-bar"
  | "fashion"
  | "munchies-kitchen";

export interface CatalogProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  category: CatalogCategory;
  stock: number;
  image_url?: string;
  productTypeKey: ProductImageBucket;
  bestSeller?: boolean;
  newArrival?: boolean;
  created_at: string;
}

export function formatZAR(amount: number): string {
  const n = Number.isFinite(amount) ? amount : 0;
  const [whole, frac = "00"] = n.toFixed(2).split(".");
  const withSpaces = whole.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `R${withSpaces},${frac}`;
}

export function inferProductTypeKey(
  category: CatalogCategory
): ProductImageBucket {
  switch (category) {
    case "Edibles":
      return "edibles";
    case "Canna Bar":
      return "canna-bar";
    case "Fashion":
      return "fashion";
    case "Munchies Kitchen":
      return "munchies-kitchen";
    default:
      return "edibles";
  }
}

/** Initial dataset — mirrors former hardcoded shop pages + mock samples */
export function getDefaultCatalog(): CatalogProduct[] {
  const today = new Date().toISOString().split("T")[0];
  let id = 1;
  const row = (
    partial: Omit<CatalogProduct, "id" | "created_at"> & { created_at?: string }
  ): CatalogProduct => ({
    id: id++,
    created_at: partial.created_at ?? today,
    ...partial,
  });

  return [
    row({
      name: "Premium Brownies",
      description: "Cannabis-infused brownies.",
      price: 100,
      category: "Edibles",
      stock: 50,
      productTypeKey: "edibles",
      bestSeller: true,
    }),
    row({
      name: "Cannabis Chocolates",
      description: "Premium chocolate with cannabis.",
      price: 120,
      category: "Edibles",
      stock: 30,
      productTypeKey: "edibles",
      bestSeller: true,
    }),
    row({
      name: "Pre-Roll Pack",
      description: "Premium pre-rolled cannabis.",
      price: 150,
      category: "Canna Bar",
      stock: 25,
      productTypeKey: "canna-bar",
      bestSeller: true,
    }),
    row({
      name: "Hard Candy",
      description: "Infused hard candy.",
      price: 90,
      category: "Edibles",
      stock: 40,
      productTypeKey: "edibles",
      bestSeller: true,
    }),
    row({
      name: "Chocolate Chip Cookies",
      description: "Classic infused cookies.",
      price: 110,
      category: "Edibles",
      stock: 35,
      productTypeKey: "edibles",
    }),
    row({
      name: "Lollipos",
      description: "Sweet infused lollipops.",
      price: 60,
      category: "Edibles",
      stock: 60,
      productTypeKey: "edibles",
      bestSeller: true,
    }),
    row({
      name: "Premium Pre-Roll Pack",
      description: "Curated pre-rolls.",
      price: 150,
      category: "Canna Bar",
      stock: 20,
      productTypeKey: "canna-bar",
      bestSeller: true,
    }),
    row({
      name: "Moonstick Collection",
      description: "Moonsticks variety pack.",
      price: 200,
      category: "Canna Bar",
      stock: 15,
      productTypeKey: "canna-bar",
    }),
    row({
      name: "Flower Bundle",
      description: "Selected flower bundle.",
      price: 180,
      category: "Canna Bar",
      stock: 18,
      productTypeKey: "canna-bar",
      bestSeller: true,
    }),
    row({
      name: "Sativa Blend",
      description: "Energizing sativa blend.",
      price: 170,
      category: "Canna Bar",
      stock: 22,
      productTypeKey: "canna-bar",
    }),
    row({
      name: "Indica Special",
      description: "Relaxing indica selection.",
      price: 190,
      category: "Canna Bar",
      stock: 20,
      productTypeKey: "canna-bar",
    }),
    row({
      name: "Hybrid Mix",
      description: "Balanced hybrid mix.",
      price: 175,
      category: "Canna Bar",
      stock: 24,
      productTypeKey: "canna-bar",
    }),
    row({
      name: "CBD Pre-Rolls",
      description: "CBD-forward pre-rolls.",
      price: 160,
      category: "Canna Bar",
      stock: 30,
      productTypeKey: "canna-bar",
    }),
    row({
      name: "Limited Edition",
      description: "Limited drop pre-rolls.",
      price: 250,
      category: "Canna Bar",
      stock: 8,
      productTypeKey: "canna-bar",
      newArrival: true,
    }),
    row({
      name: "Crew neck Sweater WLMxSID.25",
      description: "SID Studio × WLM collab.",
      price: 900,
      category: "Fashion",
      stock: 12,
      productTypeKey: "fashion",
      newArrival: true,
    }),
    row({
      name: "Classic WLMxSID.25",
      description: "SID Studio classic cut.",
      price: 1500,
      category: "Fashion",
      stock: 6,
      productTypeKey: "fashion",
      newArrival: true,
    }),
    row({
      name: "Pentagon",
      description: "Graphic tee — Pentagon.",
      price: 550,
      category: "Fashion",
      stock: 20,
      productTypeKey: "fashion",
      newArrival: true,
    }),
    row({
      name: "Every Day 420.25",
      description: "Everyday street piece.",
      price: 550,
      category: "Fashion",
      stock: 18,
      productTypeKey: "fashion",
      newArrival: true,
    }),
    row({
      name: "Haze 420.25",
      description: "Haze collection.",
      price: 550,
      category: "Fashion",
      stock: 16,
      productTypeKey: "fashion",
      newArrival: true,
    }),
    row({
      name: "Blaze",
      description: "Blaze graphic drop.",
      price: 550,
      category: "Fashion",
      stock: 22,
      productTypeKey: "fashion",
      newArrival: true,
    }),
    row({
      name: "Infused Burger Deluxe",
      description: "Signature infused burger.",
      price: 170,
      category: "Munchies Kitchen",
      stock: 40,
      productTypeKey: "munchies-kitchen",
      bestSeller: true,
    }),
    row({
      name: "Cannabis Pizza Slice",
      description: "Wood-fired style slice.",
      price: 150,
      category: "Munchies Kitchen",
      stock: 35,
      productTypeKey: "munchies-kitchen",
    }),
    row({
      name: "Special Brownie Sundae",
      description: "Dessert with a twist.",
      price: 120,
      category: "Munchies Kitchen",
      stock: 28,
      productTypeKey: "munchies-kitchen",
      bestSeller: true,
    }),
    row({
      name: "Infused Pasta",
      description: "House pasta, optional infusion.",
      price: 180,
      category: "Munchies Kitchen",
      stock: 25,
      productTypeKey: "munchies-kitchen",
    }),
    row({
      name: "Cannabis Cocktail",
      description: "Bar craft cocktail.",
      price: 100,
      category: "Munchies Kitchen",
      stock: 50,
      productTypeKey: "munchies-kitchen",
    }),
    row({
      name: "Signature Wrap",
      description: "Loaded wrap.",
      price: 140,
      category: "Munchies Kitchen",
      stock: 32,
      productTypeKey: "munchies-kitchen",
    }),
    row({
      name: "Infused Smoothie",
      description: "Cold-pressed smoothie.",
      price: 90,
      category: "Munchies Kitchen",
      stock: 45,
      productTypeKey: "munchies-kitchen",
    }),
    row({
      name: "Premium Meal Combo",
      description: "Full combo plate.",
      price: 250,
      category: "Munchies Kitchen",
      stock: 15,
      productTypeKey: "munchies-kitchen",
      newArrival: true,
    }),
  ];
}

export function parseStoredCatalog(raw: string | null): CatalogProduct[] | null {
  if (!raw) return null;
  try {
    const data = JSON.parse(raw) as unknown;
    if (!Array.isArray(data)) return null;
    return data as CatalogProduct[];
  } catch {
    return null;
  }
}

export function loadCatalogFromStorage(): CatalogProduct[] {
  if (typeof window === "undefined") return getDefaultCatalog();
  const parsed = parseStoredCatalog(localStorage.getItem(CATALOG_STORAGE_KEY));
  if (parsed && parsed.length > 0) return parsed;
  const initial = getDefaultCatalog();
  localStorage.setItem(CATALOG_STORAGE_KEY, JSON.stringify(initial));
  return initial;
}

export function saveCatalogToStorage(products: CatalogProduct[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(CATALOG_STORAGE_KEY, JSON.stringify(products));
}
