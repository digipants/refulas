"use client";

import { motion } from "framer-motion";
import Hero from "./components/Hero";
import PlansPreview from "./components/PlansPreview";
import TestimonialsPage from "./components/Testimonials";

export default function Home() {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const transition = { duration: 0.6, ease: "easeOut" as const };

  return (
    // ✅ Remove overflow-hidden to allow scroll-based triggers
    <main className="relative bg-white">
      {/* HERO SECTION */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ ...transition, duration: 0.8 }}
        className="overflow-x-hidden"
      >
        <Hero />
      </motion.section>

      {/* PLANS SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // ✅ triggers on smaller viewports
        variants={fadeInUp}
        transition={{ ...transition, delay: 0.1 }}
        className="overflow-x-hidden"
      >
        <PlansPreview />
      </motion.section>

      {/* TESTIMONIALS SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // ✅ keep visible when scrolling on mobile
        variants={fadeIn}
        transition={{ ...transition, delay: 0.2 }}
        className="overflow-x-hidden"
      >
        <TestimonialsPage />
      </motion.section>
    </main>
  );
}
