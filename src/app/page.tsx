"use client";

import Navbar from "@/components/navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "@/components/hero";
import Features from "@/components/features";
import HowItWorks from "@/components/how-it-works";
import Footer from "@/components/footer";
import Spacer from "@/components/spacer";

export default function Home() {
  // const { scrollYProgress } = useScroll();
  // const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <motion.main className="min-h-screen">
      <Navbar />

      <Hero />

      <Spacer />

      <Features />

      <Spacer />
      <HowItWorks />
      
      <Footer />
    </motion.main>
  );
}
