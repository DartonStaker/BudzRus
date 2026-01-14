import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MyOrders() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">My Orders</h1>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-center text-gray-600">You have no orders yet.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

