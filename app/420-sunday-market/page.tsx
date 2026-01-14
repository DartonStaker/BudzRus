import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SundayMarket() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6">4:20 Sunday Market</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A monthly cannabis & lifestyle marketplace for cannapreneurs, creatives, food, coffee, cocktails, vinyl, art, fashion and accessories.
            </p>
          </div>

          <div className="bg-gray-200 h-96 rounded-lg mb-12 flex items-center justify-center">
            <span className="text-gray-400 text-xl">420 Sunday Market Image</span>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Key Details</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-green-700 font-bold mr-3">•</span>
                <span className="text-lg">Last Sunday monthly</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-700 font-bold mr-3">•</span>
                <span className="text-lg">09:00–18:00</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-700 font-bold mr-3">•</span>
                <span className="text-lg">Stall fee: R500</span>
              </li>
            </ul>

            <div className="text-center">
              <Link
                href="/apply-stall"
                className="inline-block bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-800 transition"
              >
                Apply for a Stall
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

