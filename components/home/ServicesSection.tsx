"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Target, Layers, TrendingUp } from "lucide-react";
import { SERVICES, WHAT_WE_DO } from "@/lib/constants";

const iconMap = {
  Brain,
  Target,
  Layers,
  TrendingUp,
};

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text - Updated with Webflow content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-gradient-gold">{WHAT_WE_DO.heading}</span>
            </h2>
            <p className="text-[#C4B8B8] text-lg mb-6 max-w-lg">
              {WHAT_WE_DO.intro}
            </p>
            <p className="text-[#C4B8B8] mb-4">
              {WHAT_WE_DO.subheading}
            </p>
            <ul className="space-y-3 mb-8">
              {WHAT_WE_DO.valueProps.map((prop, index) => (
                <li key={index} className="flex items-start gap-3 text-[#8A7A7A]">
                  <span className="text-[#C4251D] mt-1">•</span>
                  {prop}
                </li>
              ))}
            </ul>
            <Link href="/services" className="btn-primary inline-flex">
              Learn More
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>

          {/* Right Column - Services Grid - Updated colors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={service.href}
                    className="block bg-[#1E1E1E] p-6 h-full border border-[#2A2A2A] hover:border-[#C4251D]/30 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#C4251D]/20 to-[#D4A574]/10 flex items-center justify-center mb-4 group-hover:from-[#C4251D]/30 group-hover:to-[#D4A574]/20 transition-colors">
                      {Icon && <Icon className="w-6 h-6 text-[#D4A574]" />}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#D4A574] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#8A7A7A] text-sm">
                      {service.description}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
