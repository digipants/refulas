import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-100 min-h-screen flex items-center">
      {/* Decorative gradient orbs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        {/* Left Content */}
        <div className="text-center md:text-left mt-20">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 mb-4 text-sm font-medium text-blue-700 shadow-sm">
            <ShieldCheck className="h-4 w-4" />
            Trusted by 100K+ U.S. Customers
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
            Protect What Powers <br />
            <span className="text-blue-700">Your Everyday Life</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-600 text-base sm:text-lg max-w-md mx-auto md:mx-0 mb-8">
            Fast, reliable, and affordable device protection across the U.S.
            Cover phones, laptops, tablets, and more — with 24/7 claims and
            same-day replacements.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              href="/plans"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition"
            >
              Explore Plans
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-blue-300 text-blue-700 font-medium hover:bg-blue-50 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[420px] md:h-[550px] lg:h-[620px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-200/50">
            <Image
              src="/hero.png"
              alt="Device protection visual"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent rounded-3xl"></div>

          {/* Floating badge */}
          <div className="absolute bottom-6 left-6 backdrop-blur-md bg-white/30 border border-white/40 rounded-2xl p-4 shadow-lg text-white max-w-[200px]">
            <p className="text-sm font-semibold">24/7 U.S. Support</p>
            <p className="text-xs text-gray-100">Always here when you need us.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
