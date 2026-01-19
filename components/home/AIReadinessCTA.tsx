"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Clock, Target, Sparkles } from "lucide-react";

export default function AIReadinessCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#141414] via-[#0D0D0D] to-[#141414] relative overflow-hidden">
      {/* Background decoration - Updated to red */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C4251D]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Updated colors */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#C4251D]/10 border border-[#C4251D]/30 px-4 py-2 mb-6">
              <Sparkles size={16} className="text-[#D4A574]" />
              <span className="text-sm text-[#D4A574] font-medium">Free Assessment</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              <span className="headline-italic font-light">Discover</span> your
              <span className="block text-gradient-gold">AI readiness score</span>
            </h2>

            <p className="text-lg text-[#C4B8B8] mb-6">
              Benchmark your organization against enterprise AI maturity frameworks used by
              leading consulting firms. Understand where you stand across strategy, data,
              technology, talent, and governance dimensions.
            </p>

            {/* Benefits - Updated colors */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-[#D4A574]" />
                <span className="text-[#C4B8B8] text-sm">5-7 minutes</span>
              </div>
              <div className="flex items-center gap-3">
                <Target size={20} className="text-[#D4A574]" />
                <span className="text-[#C4B8B8] text-sm">7 dimensions</span>
              </div>
              <div className="flex items-center gap-3">
                <BarChart3 size={20} className="text-[#D4A574]" />
                <span className="text-[#C4B8B8] text-sm">Instant results</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/ai-readiness" className="btn-primary text-lg px-8 py-4">
                Take Free Assessment
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Book Consultation
              </Link>
            </div>

            {/* Free consultation note */}
            <p className="text-sm text-[#8A7A7A] mt-4">
              Includes a complimentary 30-minute strategy session to review your results
            </p>
          </motion.div>

          {/* Right Visual - Updated colors */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-[#141414] border border-[#2A2A2A] p-8 relative">
              {/* Mock Assessment Preview */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 size={24} className="text-[#D4A574]" />
                  <span className="text-white font-semibold">AI Maturity Assessment</span>
                </div>
                <div className="h-2 bg-[#2A2A2A] rounded-full overflow-hidden mb-2">
                  <div className="h-full w-3/4 bg-gradient-to-r from-[#C4251D] to-[#D4A574] rounded-full" />
                </div>
                <p className="text-sm text-[#8A7A7A]">Question 7 of 10</p>
              </div>

              {/* Mock Question */}
              <div className="border-t border-[#2A2A2A] pt-6">
                <p className="text-sm text-[#C4251D] mb-2">Talent & Skills</p>
                <p className="text-white mb-4">
                  How would you describe your organization's AI talent and capabilities?
                </p>

                {/* Mock Options */}
                <div className="space-y-2">
                  {[
                    "No dedicated AI expertise",
                    "Limited internal skills",
                    "Growing AI team with upskilling",
                    "Strong AI Center of Excellence",
                  ].map((option, i) => (
                    <div
                      key={i}
                      className={`p-3 border ${
                        i === 2
                          ? "bg-[#C4251D]/10 border-[#C4251D]"
                          : "bg-[#1E1E1E] border-[#2A2A2A]"
                      }`}
                    >
                      <span className="text-sm text-[#C4B8B8]">{option}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Score Preview */}
              <div className="border-t border-[#2A2A2A] mt-6 pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#8A7A7A] text-sm">Your maturity level</p>
                    <p className="text-2xl font-bold text-white">&quot;Stage 3: AI Scaling&quot;</p>
                  </div>
                  <div className="w-16 h-16 rounded-full border-4 border-[#D4A574] flex items-center justify-center">
                    <span className="text-[#D4A574] font-bold text-lg">&quot;28&quot;</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
