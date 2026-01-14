"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TRENDING_INSIGHTS } from "@/lib/constants";

export default function TrendingNow() {
  return (
    <section className="py-20 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trending now
          </h2>
          <div className="w-16 h-1 bg-[#C4251D]" />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRENDING_INSIGHTS.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={insight.href}
                className="block h-full bg-[#1A1717] border border-[#231F1F] p-6 card-hover group"
              >
                {/* Category Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-[#C4251D]/10 border border-[#C4251D]/30 text-[#C4251D] text-xs font-medium mb-4">
                  {insight.category}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#D4A574] transition-colors">
                  {insight.title}
                </h3>

                {/* Description */}
                <p className="text-[#8A7F7F] text-sm mb-4 line-clamp-3">
                  {insight.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-[#231F1F]">
                  <span className="text-xs text-[#8A7F7F]">{insight.date}</span>
                  <span className="text-[#D4A574] flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
                    Read more
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-[#D4A574] font-medium hover:text-white transition-colors"
          >
            View all insights
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
