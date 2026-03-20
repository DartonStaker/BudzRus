import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CatalogGrid from "@/components/shop/CatalogGrid";

export default function EdiblesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 font-display text-4xl font-bold text-budz-orange">
            Edibles
          </h1>
          <p className="mb-12 max-w-3xl text-stone-600">
            Discover the perfect blend of flavor and relaxation — products below
            come from the admin catalog (saved in your browser until Supabase is
            connected).
          </p>

          <CatalogGrid
            category="Edibles"
            columnsClass="grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-5"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
