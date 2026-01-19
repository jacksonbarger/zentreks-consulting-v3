"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { STATS, BUSINESS_INFO } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-32 overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero-circuit-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: '80% center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-[#0D0D0D]/40" />

      {/* Content - Centered to align with chip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex justify-center">
        <div className="max-w-2xl text-center">
          {/* Headline - Webflow Style */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
          >
            <span className="headline-italic font-light">Strategic</span> consulting
            <span className="block text-gradient-gold mt-2">since 2008.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg sm:text-xl text-[#C4B8B8] mb-10"
          >
            {BUSINESS_INFO.heroSubheadline}
          </motion.p>

          {/* CTA Button - Webflow Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-16 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#C4251D] text-white font-semibold text-lg px-8 py-4 hover:bg-[#D4453D] transition-colors"
            >
              {BUSINESS_INFO.heroCTA}
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <button className="btn-secondary text-lg px-8 py-4 group">
              <Play size={20} className="mr-2" />
              Watch Overview
            </button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center"
          >
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="border-l-2 border-[#C4251D] pl-4"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-[#8A7A7A]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0D0D0D] to-transparent" />
    </section>
  );
}
