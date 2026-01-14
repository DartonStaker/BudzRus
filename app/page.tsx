import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[600px] bg-gradient-to-r from-budz-green via-budz-blue to-budz-orange text-white">
          <div className="absolute inset-0 bg-budz-dark-blue opacity-20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-6">
                Premium flower, edibles, infused meals, art, fashion and experiences across Soweto, Marshalltown and Fourways.
              </h1>
              <div className="flex space-x-4">
                <Link href="/shop" className="bg-white text-budz-green px-8 py-3 rounded-lg font-semibold hover:bg-budz-yellow hover:text-budz-dark-blue transition">
                  Shop Now
                </Link>
                <Link href="/shop/events" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-budz-blue transition">
                  View Events
                </Link>
                <Link href="/locations" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-budz-orange transition">
                  Visit a Branch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Shop Categories Section - Inspired by Taste of Cannabis */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Shop Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Link href="/shop/edibles" className="group">
                <div className="bg-gradient-to-br from-budz-orange to-budz-yellow rounded-lg p-8 text-center hover:shadow-xl transition-all transform hover:scale-105">
                  <div className="text-4xl mb-4">🍪</div>
                  <h3 className="text-xl font-bold text-white mb-2">Edibles</h3>
                  <p className="text-white/90 text-sm">Explore our cannabis edibles range</p>
                  <span className="text-white font-semibold mt-4 inline-block group-hover:translate-x-1 transition">Shop Edibles →</span>
                </div>
              </Link>
              <Link href="/shop/canna-bar" className="group">
                <div className="bg-gradient-to-br from-budz-green to-budz-blue rounded-lg p-8 text-center hover:shadow-xl transition-all transform hover:scale-105">
                  <div className="text-4xl mb-4">🌿</div>
                  <h3 className="text-xl font-bold text-white mb-2">Vapes</h3>
                  <p className="text-white/90 text-sm">Browse our cannabis vapes</p>
                  <span className="text-white font-semibold mt-4 inline-block group-hover:translate-x-1 transition">Shop Vapes →</span>
                </div>
              </Link>
              <Link href="/shop/canna-bar" className="group">
                <div className="bg-gradient-to-br from-budz-blue to-budz-green rounded-lg p-8 text-center hover:shadow-xl transition-all transform hover:scale-105">
                  <div className="text-4xl mb-4">💧</div>
                  <h3 className="text-xl font-bold text-white mb-2">Oils</h3>
                  <p className="text-white/90 text-sm">Shop our cannabis oils</p>
                  <span className="text-white font-semibold mt-4 inline-block group-hover:translate-x-1 transition">Shop Oil →</span>
                </div>
              </Link>
              <Link href="/shop/canna-bar" className="group">
                <div className="bg-gradient-to-br from-budz-red to-budz-orange rounded-lg p-8 text-center hover:shadow-xl transition-all transform hover:scale-105">
                  <div className="text-4xl mb-4">🌸</div>
                  <h3 className="text-xl font-bold text-white mb-2">Pre-Rolls + Flower</h3>
                  <p className="text-white/90 text-sm">Explore our flower and pre-rolls</p>
                  <span className="text-white font-semibold mt-4 inline-block group-hover:translate-x-1 transition">Shop Flower →</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Branches Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Visit Our Branches</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-budz-green">
                <h3 className="text-xl font-bold mb-4 text-budz-green">Fourways</h3>
                <p className="text-gray-600 mb-4">Pineslopes Shopping Centre, Fourways</p>
                <button className="text-budz-blue hover:text-budz-orange transition font-semibold">WhatsApp Coming Soon</button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-budz-orange">
                <h3 className="text-xl font-bold mb-4 text-budz-orange">Marshalltown</h3>
                <p className="text-gray-600 mb-4">7 Loveday Street, Marshalltown, Johannesburg</p>
                <button className="text-budz-blue hover:text-budz-orange transition font-semibold">WhatsApp Us</button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-budz-red">
                <h3 className="text-xl font-bold mb-4 text-budz-red">Soweto</h3>
                <p className="text-gray-600 mb-4">1037 Mbhele Street, Zola North, Soweto</p>
                <button className="text-budz-blue hover:text-budz-orange transition font-semibold">WhatsApp Us</button>
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
                <Link href="/shop" className="text-budz-green font-semibold hover:text-budz-orange transition">
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
                <Link href="/shop/events" className="text-budz-blue font-semibold hover:text-budz-orange transition">
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
                <Link href="/420-sunday-market" className="inline-block bg-budz-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-budz-orange transition">
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
                <Link href="/shop/munchies-kitchen" className="text-budz-red font-semibold hover:text-budz-orange transition">
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
                      <button className="w-full bg-budz-green text-white px-4 py-2 rounded-lg hover:bg-budz-orange transition font-semibold">
                        Buy Tickets
                      </button>
                    ) : (
                      <button className="w-full bg-budz-blue text-white px-4 py-2 rounded-lg hover:bg-budz-yellow transition font-semibold">
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
              <Link href="/shop/edibles" className="bg-budz-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-budz-yellow transition inline-block">
                Shop Edibles
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { name: "Brownies", price: "R100,00", bestSeller: true },
                { name: "Chocolates", price: "R120,00", bestSeller: true },
                { name: "Hard Candy", price: "R90,00", bestSeller: true },
                { name: "Chocolate Chip Cookies", price: "R110,00" },
                { name: "Lollipos", price: "R60,00", bestSeller: true },
              ].map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  price={product.price}
                  bestSeller={product.bestSeller}
                  productType="edibles"
                />
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
            <Link href="/shop/canna-bar" className="bg-budz-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-budz-green transition inline-block">
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
                { name: "Crew neck Sweater WLMxSID.25", price: "R900,00", newArrival: true },
                { name: "Classic WLMxSID.25", price: "R1 500,00", newArrival: true },
                { name: "Pentagon", price: "R550,00", newArrival: true },
                { name: "Every Day 420.25", price: "R550,00", newArrival: true },
                { name: "Haze 420.25", price: "R550,00", newArrival: true },
                { name: "Blaze", price: "R550,00", newArrival: true },
              ].map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  price={product.price}
                  newArrival={product.newArrival}
                  productType="fashion"
                />
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link href="/shop/fashion" className="text-budz-blue font-semibold hover:text-budz-orange transition">
                Shop →
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products Section - Inspired by Taste of Cannabis */}
        <section className="py-16 bg-gradient-to-br from-budz-green/10 to-budz-blue/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Latest Creations</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover the newest additions to our premium cannabis collection, carefully curated for quality and innovation.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: "Premium Pre-Roll Pack", price: "R150,00", newArrival: true },
                { name: "Infused Brownie Deluxe", price: "R120,00", newArrival: true },
                { name: "Cannabis Chocolate Bar", price: "R110,00", newArrival: true },
                { name: "Moonstick Collection", price: "R200,00", newArrival: true },
                { name: "CBD Oil Premium", price: "R180,00", newArrival: true },
                { name: "Vape Cartridge Set", price: "R250,00", newArrival: true },
              ].map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  price={product.price}
                  newArrival={product.newArrival}
                  productType="edibles"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Best Sellers Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Best sellers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Brownies", price: "R100,00", bestSeller: true },
                { name: "Chocolates", price: "R120,00", bestSeller: true },
                { name: "Hard Candy", price: "R90,00", bestSeller: true },
                { name: "Lollipos", price: "R60,00", bestSeller: true },
              ].map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  price={product.price}
                  bestSeller={product.bestSeller}
                  productType="edibles"
                />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/shop" className="text-budz-green font-semibold hover:text-budz-orange transition">
                Shop More Products →
              </Link>
            </div>
          </div>
        </section>

        {/* Member Benefits Section - Inspired by Taste of Cannabis */}
        <section className="py-16 bg-budz-dark-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Embrace The Collective</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
                As a distinguished member you gain privileged access to top-tier cannabis flowers, pre-rolls, vapes, edibles, oils and more.
              </p>
              <p className="text-2xl font-bold text-budz-yellow mb-8">Membership is Free</p>
              <Link href="/become-member" className="inline-block bg-budz-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-budz-orange transition text-lg">
                Join The Canna Collective
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6 bg-white/10 rounded-lg">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-xl font-bold mb-2">Member Products</h3>
                <p className="text-gray-300">Members access to THC products</p>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-lg">
                <div className="text-4xl mb-4">💚</div>
                <h3 className="text-xl font-bold mb-2">Member Care</h3>
                <p className="text-gray-300">Special offers and rewards for membership</p>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-lg">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-xl font-bold mb-2">Thoughtful Gifts</h3>
                <p className="text-gray-300">Personalised gifts and exclusive givebacks</p>
              </div>
            </div>
          </div>
        </section>

        {/* Essential Wellbeing Section - Inspired by Taste of Cannabis */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Essential Wellbeing</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Discover the essential wellbeing benefits of cannabis, including help with sleep issues, pain relief and deep relaxation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-budz-blue to-budz-green rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Sleep Aid</h3>
                <p className="mb-6 text-white/90">Products formulated to give you a deep, restful sleep</p>
                <Link href="/shop?benefit=sleep" className="inline-block bg-white text-budz-blue px-6 py-3 rounded-lg font-semibold hover:bg-budz-yellow hover:text-budz-dark-blue transition">
                  Shop Now
                </Link>
              </div>
              <div className="bg-gradient-to-br from-budz-green to-budz-orange rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Relax</h3>
                <p className="mb-6 text-white/90">Ease anxiety and experience blissful relaxation with special formulations</p>
                <Link href="/shop?benefit=relax" className="inline-block bg-white text-budz-green px-6 py-3 rounded-lg font-semibold hover:bg-budz-yellow hover:text-budz-dark-blue transition">
                  Shop Now
                </Link>
              </div>
              <div className="bg-gradient-to-br from-budz-orange to-budz-red rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Pain Relief</h3>
                <p className="mb-6 text-white/90">Manage pain and inflammation the natural, effective way</p>
                <Link href="/shop?benefit=pain" className="inline-block bg-white text-budz-orange px-6 py-3 rounded-lg font-semibold hover:bg-budz-yellow hover:text-budz-dark-blue transition">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-r from-budz-green to-budz-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-2">Get R100 Off!</h2>
            <p className="mb-6 text-lg">Subscribe to our mailing list and receive R100 off your first order when you spend R500 or more.</p>
            <p className="text-sm mb-4 opacity-80">Ts&Cs Apply</p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email here"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <button
                type="submit"
                className="bg-budz-yellow text-budz-dark-blue px-8 py-3 rounded-lg font-semibold hover:bg-budz-orange hover:text-white transition"
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

