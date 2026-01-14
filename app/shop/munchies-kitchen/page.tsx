import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

export default function MunchiesKitchen() {
  const meals = [
    { id: 1, name: "Infused Burger Deluxe", price: "R170,00", bestSeller: true },
    { id: 2, name: "Cannabis Pizza Slice", price: "R150,00" },
    { id: 3, name: "Special Brownie Sundae", price: "R120,00", bestSeller: true },
    { id: 4, name: "Infused Pasta", price: "R180,00" },
    { id: 5, name: "Cannabis Cocktail", price: "R100,00" },
    { id: 6, name: "Signature Wrap", price: "R140,00" },
    { id: 7, name: "Infused Smoothie", price: "R90,00" },
    { id: 8, name: "Premium Meal Combo", price: "R250,00", newArrival: true },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4 text-budz-red">Munchies Kitchen</h1>
          <p className="text-gray-600 mb-12 max-w-3xl">
            Signature meals (standard or infused) • Drinks & spirits
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {meals.map((meal) => (
              <ProductCard
                key={meal.id}
                name={meal.name}
                price={meal.price}
                bestSeller={meal.bestSeller}
                newArrival={meal.newArrival}
                productType="munchies-kitchen"
                onAddToCart={() => console.log(`Added ${meal.name} to cart`)}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

