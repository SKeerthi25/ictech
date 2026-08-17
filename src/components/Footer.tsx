import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <span className="text-2xl font-bold text-white tracking-tighter block mb-6">
              IC<span className="text-blue-500">TECH</span>
            </span>
            <p className="text-sm text-gray-400 leading-relaxed">
              UK-based software development company specializing in business and domestic software solutions. We build premium, trustworthy, and technically credible applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-blue-400 transition-colors">Portfolio</Link></li>
              <li><Link href="/pricing" className="hover:text-blue-400 transition-colors">Pricing</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-blue-400 transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Business Software</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Domestic Solutions</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Web Applications</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Mobile App Development</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">IT Consulting</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-blue-500 shrink-0 mt-0.5" />
                <span className="leading-tight">19 Radnor Close, Worthing,<br/>BN13 1DJ, United Kingdom</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-blue-500 shrink-0" />
                <a href="tel:07344860892" className="hover:text-white transition-colors">07344 860892</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-blue-500 shrink-0" />
                <a href="mailto:tech@ictechlimited.com" className="hover:text-white transition-colors">tech@ictechlimited.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} IC TECH LTD. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
