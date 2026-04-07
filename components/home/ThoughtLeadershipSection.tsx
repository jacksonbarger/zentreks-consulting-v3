"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
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

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {THOUGHT_LEADERSHIP.articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={article.href} className="group block">
                {/* Image Container */}
                <div className="relative aspect-[4/3] mb-4 overflow-hidden bg-[#141414]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 to-transparent" />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#C4251D] text-white text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-[#0D0D0D] mb-2 group-hover:text-[#C4251D] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#8A7A7A] mb-3 line-clamp-2">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-[#8A7A7A]">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
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
