import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[600px] bg-gradient-to-r from-green-600 to-green-800 text-white">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-6">
                Premium flower, edibles, infused meals, art, fashion and experiences across Soweto, Marshalltown and Fourways.
              </h1>
              <div className="flex space-x-4">
                <Link href="/shop" className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Shop Now
                </Link>
                <Link href="/shop/events" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition">
                  View Events
                </Link>
                <Link href="/locations" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition">
                  Visit a Branch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Branches Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Visit Our Branches</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Fourways</h3>
                <p className="text-gray-600 mb-4">Pineslopes Shopping Centre, Fourways</p>
                <button className="text-green-700 hover:underline">WhatsApp Coming Soon</button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Marshalltown</h3>
                <p className="text-gray-600 mb-4">7 Loveday Street, Marshalltown, Johannesburg</p>
                <button className="text-green-700 hover:underline">WhatsApp Us</button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Soweto</h3>
                <p className="text-gray-600 mb-4">1037 Mbhele Street, Zola North, Soweto</p>
                <button className="text-green-700 hover:underline">WhatsApp Us</button>
              </div>
            </div>
          </div>
        </section>

        {/* Shop Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-4">Shop</h2>
                <p className="text-gray-600 mb-6">Flower • Pre-rolls • Moonsticks • Edibles • Fashion</p>
                <Link href="/shop" className="text-green-700 font-semibold hover:underline">
                  Read More →
                </Link>
              </div>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Shop Image</span>
              </div>
            </div>
          </div>
        </section>

        {/* Events & Experiences Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center order-2 md:order-1">
                <span className="text-gray-400">Events Image</span>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-4xl font-bold mb-4">Events & Experiences</h2>
                <p className="text-gray-600 mb-6">First Thursdays • Puff & Paint • Jazz & Poetry</p>
                <Link href="/shop/events" className="text-green-700 font-semibold hover:underline">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 420 Sunday Market Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-4">4:20 Sunday Market</h2>
                <p className="text-gray-600 mb-6">
                  A monthly cannabis & lifestyle marketplace for cannapreneurs, creatives, food, coffee, cocktails, vinyl, art, fashion and accessories.
                </p>
                <div className="mb-6">
                  <p className="font-semibold mb-2">Key details:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Last Sunday monthly</li>
                    <li>09:00–18:00</li>
                    <li>Stall fee: R500</li>
                  </ul>
                </div>
                <Link href="/420-sunday-market" className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition">
                  Apply for a Stall
                </Link>
              </div>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">420 Market Image</span>
              </div>
            </div>
          </div>
        </section>

        {/* Kitchen Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center order-2 md:order-1">
                <span className="text-gray-400">Kitchen Image</span>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-4xl font-bold mb-4">Kitchen</h2>
                <p className="text-gray-600 mb-6">Signature meals (standard or infused) • Drinks & spirits</p>
                <Link href="/shop/munchies-kitchen" className="text-green-700 font-semibold hover:underline">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Experiences Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">EXPERIENCES</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Step into the heart of the action with our lineup of unforgettable events. From live music sessions and art showcases to Puff & Paint evenings and cultural gatherings, our events are designed to bring the community together in a vibrant, creative atmosphere. Experience the perfect mix of fun, connection, and entertainment at Weed Lovers Market.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "90's Music", date: "Sat, 24 Jan", location: "Weed Lovers Market Fourways" },
                { title: "4:20 Sunday Market", date: "Sun, 25 Jan", location: "Sandton" },
                { title: "Sundays are for Weed Lovers", date: "Sun, 25 Jan", location: "Weed Lovers Market Marshalltown" },
                { title: "To Jazz or Not To Jazz", date: "Sun, 01 Feb", location: "Weed Lovers Market Fourways" },
                { title: "What the Funk?", date: "Sat, 07 Feb", location: "Weed Lovers Market Fourways" },
                { title: "Frgmntd Space", date: "Sat, 28 Mar", location: "Weed Lovers Market Marshalltown", ticket: true },
              ].map((event, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-gray-200 h-48"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-1">{event.date}</p>
                    <p className="text-gray-600 mb-4">{event.location}</p>
                    {event.ticket ? (
                      <button className="w-full bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
                        Buy Tickets
                      </button>
                    ) : (
                      <button className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
                        RSVP
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Edibles Market Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">EDIBLES MARKET</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Discover the perfect blend of flavor and relaxation with our curated selection of cannabis-infused edibles. From sweet treats to savory snacks, each product is crafted with precision to deliver consistent, enjoyable experiences.
            </p>
            <div className="text-center mb-12">
              <Link href="/shop/edibles" className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition inline-block">
                Shop Edibles
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { name: "Brownies", price: "R100,00" },
                { name: "Chocolates", price: "R120,00" },
                { name: "Hard Candy", price: "R90,00" },
                { name: "Chocolate Chip Cookies", price: "R110,00" },
                { name: "Lollipos", price: "R60,00" },
              ].map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-gray-200 h-48"></div>
                  <div className="p-4">
                    <p className="text-sm text-gray-500 mb-1">Best Seller</p>
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
        </section>

        {/* Canna Market Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">CANNA MARKET</h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              The Canna Bar is a unique concept where cannabis meets creativity and culture. It offers a curated selection of cannabis pre-rolls providing customers with a relaxing and social space to enjoy responsibly. Whether you're unwinding after a long day or exploring new flavors, the Canna Bar is the perfect blend of chill vibes and premium cannabis experiences.
            </p>
            <Link href="/shop/canna-bar" className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition inline-block">
              SHOP
            </Link>
          </div>
        </section>

        {/* SID Studio Collaboration Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">SID Studio x WLM</h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Explore a bold collaboration between Weed Lovers Market and the iconic SID Studio. A celebration of cannabis culture through fashion. Designed with intention, this limited-edition range blends comfort, street style, and identity in wearable art that speaks to the 420 lifestyle.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: "Crew neck Sweater WLMxSID.25", price: "R900,00" },
                { name: "Classic WLMxSID.25", price: "R1 500,00" },
                { name: "Pentagon", price: "R550,00" },
                { name: "Every Day 420.25", price: "R550,00" },
                { name: "Haze 420.25", price: "R550,00" },
                { name: "Blaze", price: "R550,00" },
              ].map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-gray-200 h-64 relative">
                    <span className="absolute top-2 right-2 bg-green-700 text-white text-xs px-2 py-1 rounded">New Arrival</span>
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
            
            <div className="text-center mt-8">
              <Link href="/shop/fashion" className="text-green-700 font-semibold hover:underline">
                Shop →
              </Link>
            </div>
          </div>
        </section>

        {/* Best Sellers Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Best sellers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Brownies", price: "R100,00" },
                { name: "Chocolates", price: "R120,00" },
                { name: "Hard Candy", price: "R90,00" },
                { name: "Lollipos", price: "R60,00" },
              ].map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-gray-200 h-48"></div>
                  <div className="p-4">
                    <p className="text-sm text-gray-500 mb-1">Best Seller</p>
                    <h3 className="font-bold mb-2">{product.name}</h3>
                    <p className="text-green-700 font-semibold mb-3">Price {product.price}</p>
                    <button className="w-full bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 text-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/shop" className="text-green-700 font-semibold hover:underline">
                Shop More Products →
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-green-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to the Stoners Update</h2>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email here"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <button
                type="submit"
                className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Sign Up
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

