import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Weed Lovers Market is your premier destination for premium cannabis products and marijuana accessories in South Africa. We offer a curated selection of flower, edibles, infused meals, art, fashion, and unforgettable experiences across our locations in Soweto, Marshalltown, and Fourways.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our mission is to create a vibrant community space where cannabis culture meets creativity, bringing together enthusiasts, artists, and entrepreneurs in a welcoming and responsible environment.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Locations</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Fourways</h3>
                <p className="text-gray-600">Pineslopes Shopping Centre, Fourways</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Marshalltown</h3>
                <p className="text-gray-600">7 Loveday Street, Marshalltown, Johannesburg</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Soweto</h3>
                <p className="text-gray-600">1037 Mbhele Street, Zola North, Soweto</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

