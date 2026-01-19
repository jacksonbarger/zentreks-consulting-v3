"use client";

import { motion } from "framer-motion";
import { MISSION } from "@/lib/constants";

export default function MissionSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80')`,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/95 via-[#0D0D0D]/80 to-[#0D0D0D]/70" />

      {/* Red accent gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C4251D]/10 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl ml-auto">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
              <span className="text-gradient-gold">{MISSION.heading}</span>
            </h2>

            {/* Mission statement */}
            <p className="text-lg sm:text-xl text-[#C4B8B8] leading-relaxed">
              {MISSION.statement}
            </p>

            {/* Decorative accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-[#C4251D] mt-8 origin-left"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
