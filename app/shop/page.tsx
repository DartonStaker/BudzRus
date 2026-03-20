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
          <h1 className="mb-12 text-center font-display text-4xl font-bold tracking-tight md:text-5xl">
            Shop
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link key={category.href} href={category.href}>
                <div className="card-hover overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-md ring-1 ring-black/5">
                  <div className="h-64 bg-gradient-to-br from-budz-green to-budz-blue"></div>
                  <div className="p-6">
                    <h2 className="mb-2 font-display text-2xl font-bold text-budz-green">
                      {category.name}
                    </h2>
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

