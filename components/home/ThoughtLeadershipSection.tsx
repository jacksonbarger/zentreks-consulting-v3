"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { THOUGHT_LEADERSHIP } from "@/lib/constants";

export default function ThoughtLeadershipSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-wider text-[#8A7A7A] mb-4"
          >
            {THOUGHT_LEADERSHIP.heading}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D0D0D]"
          >
            {THOUGHT_LEADERSHIP.subheading}
          </motion.h2>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {THOUGHT_LEADERSHIP.categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={category.href} className="group block">
                {/* Image Container */}
                <div className="relative aspect-[4/3] mb-4 overflow-hidden bg-[#141414]">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#0D0D0D]/40 group-hover:bg-[#0D0D0D]/20 transition-colors duration-300" />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#C4251D] flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-6 h-6 text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#0D0D0D] uppercase tracking-wide group-hover:text-[#C4251D] transition-colors">
                  {category.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link
            href={THOUGHT_LEADERSHIP.ctaHref}
            className="inline-flex items-center justify-center px-8 py-4 bg-[#0D0D0D] text-white font-semibold hover:bg-[#C4251D] transition-colors duration-300"
          >
            {THOUGHT_LEADERSHIP.cta}
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
