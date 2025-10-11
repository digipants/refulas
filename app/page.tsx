"use client";

import { motion } from "framer-motion";
import Hero from "./components/Hero";
import PlansPreview from "./components/PlansPreview";
import TestimonialsPage from "./components/Testimonials";

export default function Home() {
  // Motion Variants
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
    <main className="overflow-hidden">
      {/* HERO SECTION */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ ...transition, duration: 0.8 }}
      >
        <Hero />
      </motion.section>

      {/* PLANS SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        transition={{ ...transition, delay: 0.1 }}
      >
        <PlansPreview />
      </motion.section>

      {/* TESTIMONIALS SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        transition={{ ...transition, delay: 0.2 }}
      >
        <TestimonialsPage />
      </motion.section>
    </main>
  );
}
