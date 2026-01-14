import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CannaBar() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Canna Bar</h1>
          <p className="text-gray-600 mb-12 max-w-3xl">
            The Canna Bar is a unique concept where cannabis meets creativity and culture. It offers a curated selection of cannabis pre-rolls providing customers with a relaxing and social space to enjoy responsibly. Whether you're unwinding after a long day or exploring new flavors, the Canna Bar is the perfect blend of chill vibes and premium cannabis experiences.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
              <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-200 h-64"></div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Product {id}</h3>
                  <p className="text-green-700 font-semibold mb-3">Price R{100 + id * 10},00</p>
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

