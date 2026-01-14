import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Shop() {
  const categories = [
    { name: "Canna Bar", href: "/shop/canna-bar", description: "Premium cannabis pre-rolls and flower" },
    { name: "Edibles", href: "/shop/edibles", description: "Cannabis-infused treats and snacks" },
    { name: "Fashion", href: "/shop/fashion", description: "Cannabis culture fashion and accessories" },
    { name: "Events", href: "/shop/events", description: "Experiences and events" },
    { name: "Munchies Kitchen", href: "/shop/munchies-kitchen", description: "Signature meals and drinks" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-12 text-center">Shop</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link key={category.href} href={category.href}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                  <div className="bg-gray-200 h-64"></div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

