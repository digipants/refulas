"use client";

import { motion } from "framer-motion";

export default function PlansPage() {
  const plans = [
    {
      name: "Basic Protect",
      price: "$9.99/mo",
      features: [
        "Covers accidental damage",
        "Fast claim process",
        "1 registered device",
      ],
    },
    {
      name: "Total Protect",
      price: "$19.99/mo",
      features: [
        "All Basic features",
        "Theft & loss coverage",
        "2 registered devices",
      ],
      popular: true,
    },
    {
      name: "Family Shield",
      price: "$29.99/mo",
      features: [
        "All Total features",
        "Covers up to 4 devices",
        "Priority support included",
      ],
    },
    {
      name: "Home Tech Plus",
      price: "$39.99/mo",
      features: [
        "Smart TVs & gaming consoles",
        "Power surge protection",
        "In-home service option",
      ],
    },
    {
      name: "Student Saver",
      price: "$7.99/mo",
      features: [
        "Ideal for college students",
        "Covers spills & screen cracks",
        "1 laptop or tablet",
      ],
    },
    {
      name: "ProTech Plan",
      price: "$49.99/mo",
      features: [
        "Up to 5 devices",
        "Same-day replacements",
        "24/7 expert tech support",
      ],
    },
    {
      name: "Travel Secure",
      price: "$14.99/mo",
      features: [
        "Worldwide coverage",
        "Lost device replacement",
        "Airport claim assistance",
      ],
    },
    {
      name: "Gadget Guard",
      price: "$11.99/mo",
      features: [
        "Covers wearables & accessories",
        "Water & impact protection",
        "Fast online claim approval",
      ],
    },
    {
      name: "Elite Protect",
      price: "$59.99/mo",
      features: [
        "Unlimited household devices",
        "VIP support team",
        "2-year extended warranty",
      ],
    },
    {
      name: "Business Shield",
      price: "$79.99/mo",
      features: [
        "Up to 10 employee devices",
        "Corporate claim dashboard",
        "Dedicated account manager",
      ],
    },
    {
      name: "Eco Protect",
      price: "$8.49/mo",
      features: [
        "Certified refurbished replacements",
        "Sustainable packaging",
        "1-year green warranty",
      ],
    },
    {
      name: "Lifetime Care",
      price: "$299.99 one-time",
      features: [
        "Lifetime accidental damage coverage",
        "Transferable between devices",
        "No monthly payments ever",
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="pt-28 pb-24 text-center bg-gradient-to-b from-white via-blue-50/40 to-white relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-300/30 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Animated header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-bold text-blue-700 mb-6">
            All Protection Plans
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-14">
            Pick the plan that fits your lifestyle — from single devices to
            enterprise coverage. Simple, transparent pricing for every need.
          </p>
        </motion.div>

        {/* Animated grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              variants={card}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`relative group rounded-3xl p-8 border transition-all duration-300 hover:shadow-2xl ${
                plan.popular
                  ? "bg-gradient-to-b from-blue-600 to-blue-700 text-white border-transparent shadow-lg"
                  : "bg-white border-gray-100 shadow-sm hover:border-blue-200"
              }`}
            >
              {plan.popular && (
                <span className="absolute top-4 right-4 bg-white/20 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md border border-white/40">
                  Most Popular
                </span>
              )}

              <h3
                className={`text-2xl font-bold mb-2 ${
                  plan.popular ? "text-white" : "text-blue-700"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-4xl font-extrabold mb-6 ${
                  plan.popular ? "text-white" : "text-gray-900"
                }`}
              >
                {plan.price}
              </p>

              <ul
                className={`space-y-2 mb-8 text-left text-sm ${
                  plan.popular ? "text-blue-100" : "text-gray-700"
                }`}
              >
                {plan.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-semibold transition duration-300 ${
                  plan.popular
                    ? "bg-white text-blue-700 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xs text-gray-500 mt-12"
        >
          * All prices in USD. Coverage may vary by plan and location.
        </motion.p>
      </div>
    </section>
  );
}
