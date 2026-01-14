"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-green-700">Weed Lovers Market</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-700">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-green-700">About Us</Link>
            
            <div className="relative group">
              <button className="text-gray-700 hover:text-green-700 flex items-center">
                Shop
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link href="/shop/canna-bar" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">Canna Bar</Link>
                  <Link href="/shop/edibles" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">Edibles</Link>
                  <Link href="/shop/fashion" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">Fashion</Link>
                  <Link href="/shop/events" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">Events</Link>
                  <Link href="/shop/munchies-kitchen" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">Munchies Kitchen</Link>
                </div>
              </div>
            </div>

            <Link href="/420-sunday-market" className="text-gray-700 hover:text-green-700">420 Sunday Market</Link>
            <Link href="/stoners-blog" className="text-gray-700 hover:text-green-700">Stoners Blog</Link>
            <Link href="/redeem-points" className="text-gray-700 hover:text-green-700">Redeem Your Points</Link>
            <Link href="/my-orders" className="text-gray-700 hover:text-green-700">My Orders</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-green-700">Log In</Link>
            <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
              Subscribe
            </button>
          </div>

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
          <div className="md:hidden py-4 border-t">
            <Link href="/" className="block py-2 text-gray-700">Home</Link>
            <Link href="/about" className="block py-2 text-gray-700">About Us</Link>
            <button
              onClick={() => setIsShopOpen(!isShopOpen)}
              className="flex items-center justify-between w-full py-2 text-gray-700"
            >
              Shop
              <ChevronDown className={`h-4 w-4 transition-transform ${isShopOpen ? 'rotate-180' : ''}`} />
            </button>
            {isShopOpen && (
              <div className="pl-4">
                <Link href="/shop/canna-bar" className="block py-2 text-gray-600">Canna Bar</Link>
                <Link href="/shop/edibles" className="block py-2 text-gray-600">Edibles</Link>
                <Link href="/shop/fashion" className="block py-2 text-gray-600">Fashion</Link>
                <Link href="/shop/events" className="block py-2 text-gray-600">Events</Link>
                <Link href="/shop/munchies-kitchen" className="block py-2 text-gray-600">Munchies Kitchen</Link>
              </div>
            )}
            <Link href="/420-sunday-market" className="block py-2 text-gray-700">420 Sunday Market</Link>
            <Link href="/stoners-blog" className="block py-2 text-gray-700">Stoners Blog</Link>
            <Link href="/redeem-points" className="block py-2 text-gray-700">Redeem Your Points</Link>
            <Link href="/my-orders" className="block py-2 text-gray-700">My Orders</Link>
            <Link href="/login" className="block py-2 text-gray-700">Log In</Link>
            <button className="w-full bg-green-700 text-white px-4 py-2 rounded mt-2">
              Subscribe
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

