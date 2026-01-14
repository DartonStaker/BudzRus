import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Log In</h1>
          <form className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-budz-blue"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-budz-blue"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-budz-green text-white px-4 py-3 rounded-lg font-semibold hover:bg-budz-orange transition"
            >
              Log In
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

