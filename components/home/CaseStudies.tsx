"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { CASE_STUDIES } from "@/lib/constants";

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % CASE_STUDIES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
  };

  const getVisibleCases = () => {
    const cases = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentIndex + i) % CASE_STUDIES.length;
      cases.push({ ...CASE_STUDIES[index], originalIndex: index });
    }
    return cases;
  };

  return (
    <section className="py-20 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Updated colors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured case studies
            </h2>
            <div className="w-16 h-1 bg-[#C4251D]" />
          </div>
          <Link
            href="/case-studies"
            className="hidden sm:flex items-center gap-2 text-[#D4A574] font-medium hover:text-white transition-colors"
          >
            See all case studies
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* Carousel - Updated colors */}
        <div className="relative">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getVisibleCases().map((caseStudy, index) => (
              <motion.div
                key={`${caseStudy.title}-${caseStudy.originalIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={caseStudy.href}
                  className="block bg-[#141414] border border-[#2A2A2A] overflow-hidden card-hover group h-full"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent z-10" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="inline-flex items-center px-3 py-1 bg-[#C4251D]/10 border border-[#C4251D]/30 text-[#C4251D] text-xs font-medium mb-3">
                      {caseStudy.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#D4A574] transition-colors">
                      {caseStudy.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#8A7A7A] text-sm mb-4 line-clamp-2">
                      {caseStudy.description}
                    </p>

                    {/* Read More */}
                    <span className="text-[#D4A574] flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
                      Read more
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons - Updated colors */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-[#141414] border border-[#2A2A2A] flex items-center justify-center text-[#C4B8B8] hover:text-white hover:border-[#C4251D] transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {CASE_STUDIES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-[#C4251D]" : "bg-[#2A2A2A]"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-[#141414] border border-[#2A2A2A] flex items-center justify-center text-[#C4B8B8] hover:text-white hover:border-[#C4251D] transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Mobile View All Link - Updated colors */}
        <div className="sm:hidden mt-8 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-[#D4A574] font-medium hover:text-white transition-colors"
          >
            See all case studies
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
