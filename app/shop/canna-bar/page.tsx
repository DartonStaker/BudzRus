import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

export default function CannaBar() {
  const products = [
    { id: 1, name: "Premium Pre-Roll Pack", price: "R150,00", bestSeller: true },
    { id: 2, name: "Moonstick Collection", price: "R200,00" },
    { id: 3, name: "Flower Bundle", price: "R180,00", bestSeller: true },
    { id: 4, name: "Sativa Blend", price: "R170,00" },
    { id: 5, name: "Indica Special", price: "R190,00" },
    { id: 6, name: "Hybrid Mix", price: "R175,00" },
    { id: 7, name: "CBD Pre-Rolls", price: "R160,00" },
    { id: 8, name: "Limited Edition", price: "R250,00", newArrival: true },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4 text-budz-blue">Canna Bar</h1>
          <p className="text-gray-600 mb-12 max-w-3xl">
            The Canna Bar is a unique concept where cannabis meets creativity and culture. It offers a curated selection of cannabis pre-rolls providing customers with a relaxing and social space to enjoy responsibly. Whether you're unwinding after a long day or exploring new flavors, the Canna Bar is the perfect blend of chill vibes and premium cannabis experiences.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                bestSeller={product.bestSeller}
                newArrival={product.newArrival}
                productType="canna-bar"
                onAddToCart={() => console.log(`Added ${product.name} to cart`)}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

