import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Testimonials | Refula",
  description:
    "See what real U.S. customers say about Refula’s trusted device protection services. Fast replacements, reliable support, and complete peace of mind.",
};

const testimonials = [
  {
    name: "Jessica Miller",
    state: "California",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "Refula replaced my cracked iPhone screen within 48 hours! The process was super easy and the support team was incredibly kind.",
  },
  {
    name: "Daniel Johnson",
    state: "Texas",
    image:
      "https://plus.unsplash.com/premium_photo-1658506615399-d1280310ad6c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGFtZXJpY2FuJTIwbWVufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    rating: 4,
    text: "Affordable plans and reliable service. I filed a claim for my laptop, and it was handled faster than I expected!",
  },
  {
    name: "Samantha Lee",
    state: "Florida",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "I’ve used other protection services before, but Refula’s 24/7 support really stands out. They genuinely care about helping.",
  },
  {
    name: "Michael Carter",
    state: "New York",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "My tablet was accidentally dropped on vacation — Refula approved the claim instantly and sent a replacement. 10/10!",
  },
  {
    name: "Rachel Anderson",
    state: "Illinois",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    rating: 4,
    text: "The Family Shield plan is perfect for us! With three kids, we’ve already saved hundreds on accidental repairs.",
  },
  {
    name: "Ethan Ramirez",
    state: "Nevada",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "Super transparent pricing, no hidden fees. Their ‘Total Protect’ plan is the best value out there.",
  },
];


export default function TestimonialsPage() {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-white via-blue-50/20 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">
          What Our Customers Say
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          Trusted across the U.S. — real stories from real people who rely on
          Refula to keep their devices protected.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white shadow-lg hover:shadow-xl transition-all rounded-3xl p-8 border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {t.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{t.state}</p>

              {/* Star rating */}
              <div className="flex justify-center mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#facc15"
                    className="w-5 h-5"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.384 2.46a1 1 0 00-.364 1.118l1.287 3.972c.3.922-.755 1.688-1.54 1.118l-3.384-2.46a1 1 0 00-1.176 0l-3.384 2.46c-.785.57-1.84-.196-1.54-1.118l1.287-3.972a1 1 0 00-.364-1.118L2.046 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.973z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                “{t.text}”
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            Ready to experience the difference?
          </h2>
          <a
            href="/plans"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Explore Plans
          </a>
        </div>
      </div>
    </section>
  );
}
