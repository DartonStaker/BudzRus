import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CatalogGrid from "@/components/shop/CatalogGrid";

export default function MunchiesKitchenPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 font-display text-4xl font-bold text-budz-red">
            Munchies Kitchen
          </h1>
          <p className="mb-12 max-w-3xl text-stone-600">
            Signature meals and drinks — menu items are catalog products with
            category &quot;Munchies Kitchen&quot;.
          </p>

          <CatalogGrid category="Munchies Kitchen" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
