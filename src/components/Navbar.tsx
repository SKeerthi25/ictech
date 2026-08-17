"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/90 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-white tracking-tighter">
              IC<span className="text-blue-500">TECH</span>
            </span>
          </Link>
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="hidden md:block text-gray-300 hover:text-white transition-colors text-sm font-medium">Home</Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">About</Link>
            <Link href="/services" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Services</Link>
            <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Portfolio</Link>
            <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Pricing</Link>
            <Link href="/blog" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Blog</Link>
            <Link href="/contact" className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all hover:scale-105 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
              Get a Quote
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md absolute top-full left-0 w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-white hover:bg-slate-800 rounded-md">Home</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-white hover:bg-slate-800 rounded-md">About</Link>
            <Link href="/services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-white hover:bg-slate-800 rounded-md">Services</Link>
            <Link href="/portfolio" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-white hover:bg-slate-800 rounded-md">Portfolio</Link>
            <Link href="/pricing" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-white hover:bg-slate-800 rounded-md">Pricing</Link>
            <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-white hover:bg-slate-800 rounded-md">Blog</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-blue-400 hover:bg-slate-800 rounded-md mt-2 border-t border-slate-700 pt-4">Get a Quote</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
