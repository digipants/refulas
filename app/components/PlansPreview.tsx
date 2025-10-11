"use client";

const plans = [
  {
    name: "Basic Protect",
    price: "$9.99/mo",
    tagline: "Perfect for individuals",
    features: [
      "Covers accidental damage",
      "Fast claim process",
      "1 registered device",
    ],
    popular: false,
  },
  {
    name: "Total Protect",
    price: "$19.99/mo",
    tagline: "Our most popular choice",
    features: [
      "All Basic features",
      "Theft & loss coverage",
      "2 registered devices",
      "Priority replacements",
    ],
    popular: true,
  },
  {
    name: "Family Shield",
    price: "$29.99/mo",
    tagline: "Ideal for households",
    features: [
      "All Total features",
      "Covers up to 4 devices",
      "24/7 family support",
      "Accidental and liquid damage",
    ],
    popular: false,
  },
];

export default function PlansPreview() {
  return (
    <section className="pt-28 pb-24 bg-gradient-to-b from-white via-blue-50/30 to-white text-center relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-200/40 blur-3xl rounded-full"></div>

      <div className="relative z-10">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-4">
          Choose Your Plan
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          Simple pricing. No hidden fees. Cancel anytime.  
          Get the protection that fits your lifestyle.
        </p>

        <div className="max-w-6xl mx-auto grid gap-10 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-8 shadow-md transition-transform hover:-translate-y-2 hover:shadow-xl border ${
                p.popular
                  ? "bg-gradient-to-b from-blue-600 to-blue-700 text-white border-transparent"
                  : "bg-white border-gray-100"
              }`}
            >
              {/* “Most Popular” badge */}
              {p.popular && (
                <span className="absolute top-4 right-4 bg-white/20 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md border border-white/30">
                  Most Popular
                </span>
              )}

              <h3
                className={`text-2xl font-bold mb-1 ${
                  p.popular ? "text-white" : "text-blue-700"
                }`}
              >
                {p.name}
              </h3>
              <p
                className={`text-sm mb-4 ${
                  p.popular ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {p.tagline}
              </p>
              <p
                className={`text-4xl font-extrabold mb-6 ${
                  p.popular ? "text-white" : "text-gray-900"
                }`}
              >
                {p.price}
              </p>

              <ul
                className={`space-y-2 mb-8 text-sm ${
                  p.popular ? "text-blue-100" : "text-gray-700"
                }`}
              >
                {p.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-semibold transition ${
                  p.popular
                    ? "bg-white text-blue-700 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-12">
          * All prices are in USD. Taxes may apply. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
