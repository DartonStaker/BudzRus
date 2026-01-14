"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown, Search, ShoppingCart, User } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [isCannabis101Open, setIsCannabis101Open] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b-4 border-budz-blue">
      {/* Top Utility Bar */}
      <div className="bg-budz-dark-blue text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end space-x-6 py-2">
            <Link href="/stockist" className="hover:text-budz-yellow transition">Stockist Enquiry</Link>
            <Link href="/stores" className="hover:text-budz-yellow transition">Stores</Link>
            <Link href="/track-orders" className="hover:text-budz-yellow transition">Track Orders</Link>
            <Link href="/contact" className="hover:text-budz-yellow transition">Contact</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo, Search, Cart Row */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Budz R Us"
              width={180}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 pl-10 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-budz-blue"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Cart and User Icons */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              <span className="absolute top-0 right-0 bg-budz-yellow text-budz-dark-blue text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <User className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <nav className="hidden md:flex items-center space-x-8 py-4 border-t border-gray-200">
          <div className="relative group">
            <button className="text-gray-700 hover:text-budz-green flex items-center transition font-semibold">
              Shop Now
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {/* Mega Menu */}
            <div className="absolute left-0 top-full mt-2 w-screen max-w-6xl bg-white rounded-lg shadow-2xl border-2 border-budz-blue opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="p-8 grid grid-cols-4 gap-8">
                {/* Shop CBD Column */}
                <div>
                  <h3 className="text-lg font-bold text-budz-green mb-4 pb-2 border-b-2 border-budz-yellow">Shop CBD</h3>
                  <ul className="space-y-2">
                    <li><Link href="/shop/edibles?category=cbd" className="text-gray-700 hover:text-budz-green transition">Edibles</Link></li>
                    <li><Link href="/shop/oils?category=cbd" className="text-gray-700 hover:text-budz-green transition">Oils</Link></li>
                    <li><Link href="/shop/pets" className="text-gray-700 hover:text-budz-green transition">For pets</Link></li>
                    <li><Link href="/shop/tea" className="text-gray-700 hover:text-budz-green transition">Tea</Link></li>
                    <li><Link href="/shop/vapes?category=cbd" className="text-gray-700 hover:text-budz-green transition">Vape Cartridges</Link></li>
                    <li><Link href="/shop/vapes?type=refill" className="text-gray-700 hover:text-budz-green transition">Vape Refills</Link></li>
                  </ul>
                </div>

                {/* Shop THC Column */}
                <div>
                  <h3 className="text-lg font-bold text-budz-orange mb-4 pb-2 border-b-2 border-budz-yellow">Shop THC</h3>
                  <ul className="space-y-2">
                    <li><Link href="/shop/canna-bar?type=flower" className="text-gray-700 hover:text-budz-orange transition">Flower</Link></li>
                    <li><Link href="/shop/canna-bar" className="text-gray-700 hover:text-budz-orange transition">Pre-Rolls</Link></li>
                    <li><Link href="/shop/edibles?type=cookies" className="text-gray-700 hover:text-budz-orange transition">Cookies</Link></li>
                    <li><Link href="/shop/edibles?type=gummies" className="text-gray-700 hover:text-budz-orange transition">Gummies</Link></li>
                    <li><Link href="/shop/edibles?type=fudge" className="text-gray-700 hover:text-budz-orange transition">Fudge</Link></li>
                    <li><Link href="/shop/edibles?type=lollipops" className="text-gray-700 hover:text-budz-orange transition">Lollipops</Link></li>
                    <li><Link href="/shop/oils?type=feco" className="text-gray-700 hover:text-budz-orange transition">FECO Oils</Link></li>
                    <li><Link href="/shop/vapes?type=disposable" className="text-gray-700 hover:text-budz-orange transition">Disposable Vapes</Link></li>
                    <li><Link href="/shop/vapes?type=pods" className="text-gray-700 hover:text-budz-orange transition">Vape Pods</Link></li>
                    <li><Link href="/shop/vapes?type=cartridges" className="text-gray-700 hover:text-budz-orange transition">Vape Cartridges</Link></li>
                    <li><Link href="/shop/vapes?type=battery" className="text-gray-700 hover:text-budz-orange transition">Vape Battery Devices</Link></li>
                  </ul>
                </div>

                {/* Shop Brands Column */}
                <div>
                  <h3 className="text-lg font-bold text-budz-blue mb-4 pb-2 border-b-2 border-budz-yellow">Shop Brands</h3>
                  <ul className="space-y-2">
                    <li><Link href="/shop?brand=cannalicious" className="text-gray-700 hover:text-budz-blue transition">Cannalicious</Link></li>
                    <li><Link href="/shop?brand=homegrown" className="text-gray-700 hover:text-budz-blue transition">Homegrown</Link></li>
                    <li><Link href="/shop?brand=budzrus" className="text-gray-700 hover:text-budz-blue transition">BudzRus</Link></li>
                  </ul>
                </div>

                {/* Shop Benefits Column */}
                <div>
                  <h3 className="text-lg font-bold text-budz-red mb-4 pb-2 border-b-2 border-budz-yellow">Shop Benefits</h3>
                  <ul className="space-y-2">
                    <li><Link href="/shop?benefit=energy" className="text-gray-700 hover:text-budz-red transition">Energy</Link></li>
                    <li><Link href="/shop?benefit=intimacy" className="text-gray-700 hover:text-budz-red transition">Intimacy</Link></li>
                    <li><Link href="/shop?benefit=pain" className="text-gray-700 hover:text-budz-red transition">Pain</Link></li>
                    <li><Link href="/shop?benefit=relax" className="text-gray-700 hover:text-budz-red transition">Relax</Link></li>
                    <li><Link href="/shop?benefit=sleep" className="text-gray-700 hover:text-budz-red transition">Sleep</Link></li>
                    <li><Link href="/shop?benefit=sugar-free" className="text-gray-700 hover:text-budz-red transition">Sugar Free</Link></li>
                    <li><Link href="/shop?benefit=vegan" className="text-gray-700 hover:text-budz-red transition">Vegan</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Link href="/about" className="text-gray-700 hover:text-budz-green transition font-semibold">About Us</Link>
          
          <div className="relative group">
            <button className="text-gray-700 hover:text-budz-green flex items-center transition font-semibold">
              Brands
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg border-2 border-budz-blue opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-1">
                <Link href="/shop?brand=cannalicious" className="block px-4 py-2 text-sm text-gray-700 hover:bg-budz-green hover:text-white transition">Cannalicious</Link>
                <Link href="/shop?brand=homegrown" className="block px-4 py-2 text-sm text-gray-700 hover:bg-budz-green hover:text-white transition">Homegrown</Link>
                <Link href="/shop?brand=budzrus" className="block px-4 py-2 text-sm text-gray-700 hover:bg-budz-green hover:text-white transition">BudzRus</Link>
              </div>
            </div>
          </div>

          <div className="relative group">
            <button className="text-gray-700 hover:text-budz-green flex items-center transition font-semibold">
              Cannabis 101
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg border-2 border-budz-blue opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-1">
                <Link href="/cannabis-101/basics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-budz-green hover:text-white transition">Cannabis Basics</Link>
                <Link href="/cannabis-101/health" className="block px-4 py-2 text-sm text-gray-700 hover:bg-budz-green hover:text-white transition">Health & Wellness</Link>
                <Link href="/cannabis-101/consumption" className="block px-4 py-2 text-sm text-gray-700 hover:bg-budz-green hover:text-white transition">Consumption</Link>
                <Link href="/cannabis-101/resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-budz-green hover:text-white transition">Resources</Link>
              </div>
            </div>
          </div>

          <Link href="/canna-collective" className="text-gray-700 hover:text-budz-green transition font-semibold">Canna Collective</Link>
          <Link href="/become-member" className="text-gray-700 hover:text-budz-green transition font-semibold">Become a Member</Link>
          <Link href="/60-minute-delivery" className="text-gray-700 hover:text-budz-green transition font-semibold">60-Minute Delivery</Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 border-t bg-white">
          <div className="px-4 mb-4">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
            />
          </div>
          <Link href="/" className="block px-4 py-2 text-gray-700 hover:text-budz-green transition">Home</Link>
          <button
            onClick={() => setIsShopOpen(!isShopOpen)}
            className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:text-budz-green transition"
          >
            Shop Now
            <ChevronDown className={`h-4 w-4 transition-transform ${isShopOpen ? 'rotate-180' : ''}`} />
          </button>
          {isShopOpen && (
            <div className="pl-8 space-y-2">
              <Link href="/shop/edibles" className="block py-2 text-gray-600">Edibles</Link>
              <Link href="/shop/canna-bar" className="block py-2 text-gray-600">Canna Bar</Link>
              <Link href="/shop/fashion" className="block py-2 text-gray-600">Fashion</Link>
              <Link href="/shop/events" className="block py-2 text-gray-600">Events</Link>
              <Link href="/shop/munchies-kitchen" className="block py-2 text-gray-600">Munchies Kitchen</Link>
            </div>
          )}
          <Link href="/about" className="block px-4 py-2 text-gray-700 hover:text-budz-green transition">About Us</Link>
          <Link href="/420-sunday-market" className="block px-4 py-2 text-gray-700 hover:text-budz-green transition">420 Sunday Market</Link>
          <Link href="/stoners-blog" className="block px-4 py-2 text-gray-700 hover:text-budz-green transition">Stoners Blog</Link>
          <Link href="/login" className="block px-4 py-2 text-gray-700 hover:text-budz-green transition">Log In</Link>
        </div>
      )}
    </header>
  );
}
