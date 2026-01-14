import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Weed Lovers Market</h3>
            <p className="text-gray-400">Need Help?</p>
            <p className="text-gray-400">WhatsApp us at</p>
            <p className="text-green-400">060 295 8320</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">WhatsApp</a>
              <a href="#" className="text-gray-400 hover:text-white">TikTok</a>
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white">X</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/shop" className="hover:text-white">Shop</Link></li>
              <li><Link href="/420-sunday-market" className="hover:text-white">420 Sunday Market</Link></li>
              <li><Link href="/stoners-blog" className="hover:text-white">Stoners Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/shop/munchies-kitchen" className="hover:text-white">Munchies Kitchen</Link></li>
              <li><Link href="/shop/edibles" className="hover:text-white">Edibles</Link></li>
              <li><Link href="/shop/canna-bar" className="hover:text-white">Strains</Link></li>
              <li><Link href="/shop/events" className="hover:text-white">Experiences</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/customer-support" className="hover:text-white">Customer Support</Link></li>
              <li><Link href="/locations" className="hover:text-white">Locations</Link></li>
              <li><Link href="/shipping-returns" className="hover:text-white">Shipping & Returns</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/payment-methods" className="hover:text-white">Payment Methods</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 by Weed Lovers Market.</p>
        </div>
      </div>
    </footer>
  );
}

