import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Fashion() {
  const products = [
    { name: "Crew neck Sweater WLMxSID.25", price: "R900,00", new: true },
    { name: "Classic WLMxSID.25", price: "R1 500,00", new: true },
    { name: "Pentagon", price: "R550,00", new: true },
    { name: "Every Day 420.25", price: "R550,00", new: true },
    { name: "Haze 420.25", price: "R550,00", new: true },
    { name: "Blaze", price: "R550,00", new: true },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Fashion</h1>
          <p className="text-gray-600 mb-12 max-w-3xl">
            Explore a bold collaboration between Weed Lovers Market and the iconic SID Studio. A celebration of cannabis culture through fashion. Designed with intention, this limited-edition range blends comfort, street style, and identity in wearable art that speaks to the 420 lifestyle.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-200 h-64 relative">
                  {product.new && (
                    <span className="absolute top-2 right-2 bg-green-700 text-white text-xs px-2 py-1 rounded">New Arrival</span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2 text-sm">{product.name}</h3>
                  <p className="text-green-700 font-semibold mb-3">Price {product.price}</p>
                  <button className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 text-sm">
                    Quick View
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

