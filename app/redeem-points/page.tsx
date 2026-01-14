import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RedeemPoints() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Redeem Your Points</h1>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-center text-gray-600 mb-8">You currently have 0 points.</p>
            <div className="text-center">
              <button className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition">
                View Rewards
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

