"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ShieldCheck, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/plans", label: "Plans" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-lg backdrop-blur-xl"
          : "bg-gradient-to-r from-blue-50 via-white to-blue-50/80 backdrop-blur-md"
      }`}
    >
      {/* Top gradient accent line */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 shadow-sm"></div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-extrabold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          <ShieldCheck className="h-6 w-6 text-blue-700" />
          <span>Refula</span>
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition-all duration-200 ${
                  pathname === link.href
                    ? "text-blue-700 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-[-6px] left-0 w-full h-[2px] rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Phone Button (Desktop) */}
          <a
            href="tel:8339215472"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <Phone className="h-4 w-4" />
            (833) 921-5472
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
          >
            {open ? (
              <X className="h-6 w-6 text-blue-700" />
            ) : (
              <Menu className="h-6 w-6 text-blue-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-blue-100 shadow-md animate-slideDown">
          <div className="flex flex-col gap-4 px-6 py-5 text-gray-700">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-base font-medium transition-colors ${
                  pathname === link.href
                    ? "text-blue-700 font-semibold"
                    : "hover:text-blue-600"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <a
              href="tel:8339215472"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-blue-700 font-medium mt-3 bg-blue-50 border border-blue-100 py-2 px-4 rounded-full hover:bg-blue-100 transition"
            >
              <Phone className="h-4 w-4" />
              (833) 921-5472
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
