import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

export default function Edibles() {
  const products = [
    { id: 1, name: "Brownies", price: "R100,00", bestSeller: true },
    { id: 2, name: "Chocolates", price: "R120,00", bestSeller: true },
    { id: 3, name: "Hard Candy", price: "R90,00", bestSeller: true },
    { id: 4, name: "Chocolate Chip Cookies", price: "R110,00" },
    { id: 5, name: "Lollipos", price: "R60,00", bestSeller: true },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4 text-budz-orange">Edibles</h1>
          <p className="text-gray-600 mb-12">
            Discover the perfect blend of flavor and relaxation with our curated selection of cannabis-infused edibles.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                bestSeller={product.bestSeller}
                productType="edibles"
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

