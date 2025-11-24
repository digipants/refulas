import { Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-gradient-to-b from-blue-50 via-white to-blue-50 border-t border-blue-100">
      {/* Top gradient accent */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400"></div>

      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* Brand Section */}
        <div>
          <h3 className="font-extrabold text-2xl bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
            Refula
          </h3>
          <p className="text-gray-600 mt-3 text-sm leading-relaxed max-w-xs">
            Reliable U.S.-based protection for all your devices. Fast
            replacements, trusted coverage, and friendly 24/7 support.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <a
              href="mailto:support@Refula.com"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
            >
              <Mail className="h-4 w-4 text-blue-600" />
              support@Refula.com
            </a>
            <a
              href="tel:8339215472"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
            >
              <Phone className="h-4 w-4 text-blue-600" />
              (844) 587-5473
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-gray-900 text-lg mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/plans" className="hover:text-blue-600 transition">
                Plans
              </Link>
            </li>
            <li>
              <Link
                href="/testimonials"
                className="hover:text-blue-600 transition"
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h4 className="font-semibold text-gray-900 text-lg mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacy" className="hover:text-blue-600 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-blue-600 transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-6 text-center text-xs text-gray-500 bg-white/60 backdrop-blur-sm">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-blue-700">Refula</span>. All rights
        reserved.
        <span className="block mt-1 text-gray-400">
          Coverage availability and features may vary by state.
        </span>
      </div>
    </footer>
  );
}
