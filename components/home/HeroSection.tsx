"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { BUSINESS_INFO, STATS } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#1A1717] to-[#0D0D0D]" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#C4251D]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-[#D4A574]/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(#D4A574 1px, transparent 1px), linear-gradient(90deg, #D4A574 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-[#1A1717] border border-[#C4251D]/30 px-4 py-2 mb-8"
            >
              <div className="w-2 h-2 bg-[#C4251D] rounded-full animate-pulse" />
              <span className="text-sm text-[#C4B8B8]">AI-First Strategic Consulting</span>
            </motion.div>

            {/* Headline - EY Style with italic */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              <span className="headline-italic font-light">Transform</span> your business
              <span className="block text-gradient-gold mt-2">with confidence</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-[#C4B8B8] mb-8 max-w-xl"
            >
              We help businesses leverage cutting-edge AI, optimize workflows, and achieve
              sustainable growth through proven strategies and enterprise expertise.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link href="/contact" className="btn-primary text-base px-8 py-4">
                Schedule Consultation
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <button className="btn-secondary text-base px-8 py-4 group">
                <Play size={20} className="mr-2" />
                Watch Overview
              </button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {STATS.map((stat, index) => (
                <div key={stat.label} className="border-l-2 border-[#C4251D] pl-4">
                  <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-[#8A7F7F]">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative aspect-square">
              {/* Abstract geometric shape */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-96 h-96">
                  {/* Rotating rings */}
                  <motion.div
                    className="absolute inset-0 border-2 border-[#C4251D]/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-8 border-2 border-[#D4A574]/30 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-16 border-2 border-[#C4251D]/20 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Center element */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-[#C4251D] to-[#D4A574] rounded-lg rotate-45 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold -rotate-45">Z</span>
                    </div>
                  </div>

                  {/* Orbiting dots */}
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-[#D4A574] rounded-full"
                      style={{
                        top: "50%",
                        left: "50%",
                      }}
                      animate={{
                        x: [
                          Math.cos((i * Math.PI) / 2) * 180,
                          Math.cos((i * Math.PI) / 2 + Math.PI * 2) * 180,
                        ],
                        y: [
                          Math.sin((i * Math.PI) / 2) * 180,
                          Math.sin((i * Math.PI) / 2 + Math.PI * 2) * 180,
                        ],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D0D0D] to-transparent" />
    </section>
  );
}
