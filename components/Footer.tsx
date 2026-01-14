import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-budz-dark-blue text-white border-t-4 border-budz-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Budz R Us"
                width={150}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300">Need Help?</p>
            <p className="text-gray-300">WhatsApp us at</p>
            <p className="text-budz-yellow font-semibold">060 295 8320</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-budz-green transition">WhatsApp</a>
              <a href="#" className="text-gray-300 hover:text-budz-orange transition">TikTok</a>
              <a href="#" className="text-gray-300 hover:text-budz-blue transition">Instagram</a>
              <a href="#" className="text-gray-300 hover:text-budz-red transition">X</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-budz-green transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-budz-green transition">About Us</Link></li>
              <li><Link href="/shop" className="hover:text-budz-green transition">Shop</Link></li>
              <li><Link href="/420-sunday-market" className="hover:text-budz-green transition">420 Sunday Market</Link></li>
              <li><Link href="/stoners-blog" className="hover:text-budz-green transition">Stoners Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/shop/munchies-kitchen" className="hover:text-budz-orange transition">Munchies Kitchen</Link></li>
              <li><Link href="/shop/edibles" className="hover:text-budz-orange transition">Edibles</Link></li>
              <li><Link href="/shop/canna-bar" className="hover:text-budz-orange transition">Strains</Link></li>
              <li><Link href="/shop/events" className="hover:text-budz-orange transition">Experiences</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-budz-blue transition">About Us</Link></li>
              <li><Link href="/customer-support" className="hover:text-budz-blue transition">Customer Support</Link></li>
              <li><Link href="/locations" className="hover:text-budz-blue transition">Locations</Link></li>
              <li><Link href="/shipping-returns" className="hover:text-budz-blue transition">Shipping & Returns</Link></li>
              <li><Link href="/terms" className="hover:text-budz-blue transition">Terms & Conditions</Link></li>
              <li><Link href="/payment-methods" className="hover:text-budz-blue transition">Payment Methods</Link></li>
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

