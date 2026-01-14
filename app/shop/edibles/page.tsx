import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
          <h1 className="text-4xl font-bold mb-4">Edibles</h1>
          <p className="text-gray-600 mb-12">
            Discover the perfect blend of flavor and relaxation with our curated selection of cannabis-infused edibles.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-200 h-48"></div>
                <div className="p-4">
                  {product.bestSeller && (
                    <p className="text-sm text-gray-500 mb-1">Best Seller</p>
                  )}
                  <h3 className="font-bold mb-2">{product.name}</h3>
                  <p className="text-green-700 font-semibold mb-3">Price {product.price}</p>
                  <button className="w-full bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

