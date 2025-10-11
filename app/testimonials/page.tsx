import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Reviews | Refula",
  description:
    "See what real customers across the U.S. say about Refula's trusted device protection — fast claims, quick replacements, and friendly 24/7 support.",
};

const testimonials = [
  {
    name: "Jessica Miller",
    state: "California",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    text: "Refula replaced my cracked iPhone screen in just 2 days! Super easy process and their support team was so helpful.",
  },
  {
    name: "Daniel Johnson",
    state: "Texas",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "Best experience ever! Their claim process is transparent, and I got a replacement laptop shipped overnight.",
  },
  {
    name: "Samantha Lee",
    state: "Florida",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 4,
    text: "Customer service is top-notch. They walked me through every step when I dropped my tablet.",
  },
  {
    name: "Michael Carter",
    state: "New York",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    text: "My gaming console was repaired within 72 hours. Refula delivers exactly what they promise!",
  },
  {
    name: "Rachel Anderson",
    state: "Illinois",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    rating: 5,
    text: "The Family Shield plan covers all of our devices — it’s a lifesaver with three kids in the house.",
  },
  {
    name: "Ethan Ramirez",
    state: "Nevada",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    rating: 4,
    text: "Affordable and straightforward. No hidden fees, no long wait times — exactly what I wanted.",
  },
];

export default function TestimonialsPage() {
  return (
    <section className="relative pt-32 pb-24 bg-gradient-to-b from-white via-blue-50/40 to-white overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
          What Our Customers Say
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          Real feedback from customers across the U.S. who trust Refula to
          protect their phones, laptops, and tech essentials every day.
        </p>

        {/* Testimonial grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-white/80 backdrop-blur-md border border-blue-100 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-blue-100 shadow-md">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
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

              <p className="text-gray-700 text-sm leading-relaxed italic">
                “{t.text}”
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            Ready to experience stress-free device protection?
          </h2>
          <Link
            href="/plans"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform"
          >
            Explore Plans
          </Link>
        </div>
      </div>
    </section>
  );
}
