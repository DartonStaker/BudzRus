import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

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
          <h1 className="text-4xl font-bold mb-4 text-budz-blue">Fashion</h1>
          <p className="text-gray-600 mb-12 max-w-3xl">
            Explore a bold collaboration between Weed Lovers Market and the iconic SID Studio. A celebration of cannabis culture through fashion. Designed with intention, this limited-edition range blends comfort, street style, and identity in wearable art that speaks to the 420 lifestyle.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                price={product.price}
                newArrival={product.new}
                productType="fashion"
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

