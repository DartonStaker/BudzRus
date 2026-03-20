import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CatalogGrid from "@/components/shop/CatalogGrid";

export default function CannaBarPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 font-display text-4xl font-bold text-budz-blue">
            Canna Bar
          </h1>
          <p className="mb-12 max-w-3xl text-stone-600">
            Cannabis meets creativity — inventory is managed in{" "}
            <span className="font-medium text-budz-dark-blue">Admin → Products</span>
            .
          </p>

          <CatalogGrid category="Canna Bar" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
