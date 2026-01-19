"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Clock, Filter } from "lucide-react";

const FEATURED_INSIGHT = {
  category: "AI Strategy",
  title: "The dividend age: How AI investments are turning into real business value",
  description: "Our latest research reveals that organizations with mature AI capabilities are seeing 40% higher productivity gains. Learn what separates AI leaders from the rest.",
  date: "January 12, 2026",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  href: "/insights/ai-dividend-age",
};

const INSIGHTS = [
  {
    category: "AI Strategy",
    title: "How AI is reshaping business strategy in 2026",
    description: "Discover how leading companies are leveraging AI to gain competitive advantage and transform their operations.",
    date: "Jan 10, 2026",
    readTime: "6 min",
    href: "/insights/ai-strategy-2026",
  },
  {
    category: "Digital Transformation",
    title: "The future of work: Automation meets human potential",
    description: "Explore how automation is creating new opportunities for workforce development and organizational growth.",
    date: "Jan 8, 2026",
    readTime: "5 min",
    href: "/insights/future-of-work",
  },
  {
    category: "Market Trends",
    title: "2026 Economic outlook: Navigating uncertainty",
    description: "Our analysis of global economic trends and strategic recommendations for business leaders.",
    date: "Jan 5, 2026",
    readTime: "7 min",
    href: "/insights/economic-outlook-2026",
  },
  {
    category: "Healthcare",
    title: "AI in healthcare: From diagnosis to treatment optimization",
    description: "How healthcare organizations are using AI to improve patient outcomes and reduce costs.",
    date: "Jan 3, 2026",
    readTime: "6 min",
    href: "/insights/ai-healthcare",
  },
  {
    category: "Financial Services",
    title: "The rise of AI-powered risk management",
    description: "Financial institutions are revolutionizing risk assessment with machine learning models.",
    date: "Dec 28, 2025",
    readTime: "5 min",
    href: "/insights/ai-risk-management",
  },
  {
    category: "Manufacturing",
    title: "Industry 4.0: Lessons from early adopters",
    description: "What successful smart factory implementations can teach us about digital transformation.",
    date: "Dec 22, 2025",
    readTime: "8 min",
    href: "/insights/industry-4-lessons",
  },
];

const CATEGORIES = ["All", "AI Strategy", "Digital Transformation", "Market Trends", "Healthcare", "Financial Services", "Manufacturing"];

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 border-b border-[#1F2937]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-[#1E3A5F]/10 border border-[#1E3A5F]/30 px-4 py-2 mb-6">
              <BookOpen size={16} className="text-[#C9A961]" />
              <span className="text-sm text-[#C9A961] font-medium">Insights</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="headline-italic font-light">Ideas</span> that
              <span className="block text-gradient-gold">shape the future</span>
            </h1>
            <p className="text-xl text-[#B8C5D6]">
              Research, perspectives, and thought leadership from our team of strategists,
              technologists, and industry experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Insight */}
      <section className="py-16 border-b border-[#1F2937]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href={FEATURED_INSIGHT.href}
              className="block bg-gradient-to-r from-[#111827] to-[#1F2937] border border-[#1F2937] p-8 md:p-12 hover:border-[#1E3A5F]/50 transition-all group"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs bg-[#1E3A5F]/20 text-[#1E3A5F] px-3 py-1 font-medium">
                      Featured
                    </span>
                    <span className="text-xs text-[#6B7A8F]">{FEATURED_INSIGHT.category}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#C9A961] transition-colors">
                    {FEATURED_INSIGHT.title}
                  </h2>
                  <p className="text-[#B8C5D6] mb-6">{FEATURED_INSIGHT.description}</p>
                  <div className="flex items-center gap-4 text-sm text-[#6B7A8F]">
                    <span>{FEATURED_INSIGHT.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {FEATURED_INSIGHT.readTime}
                    </span>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="relative aspect-video bg-[#0B1120] border border-[#1F2937] overflow-hidden">
                    <Image
                      src={FEATURED_INSIGHT.image}
                      alt={FEATURED_INSIGHT.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-[#111827]/30 to-transparent z-10" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-[#1F2937]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter size={18} className="text-[#6B7A8F] flex-shrink-0" />
            {CATEGORIES.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 text-sm whitespace-nowrap transition-colors ${
                  category === "All"
                    ? "bg-[#1E3A5F] text-white"
                    : "bg-[#111827] text-[#6B7A8F] hover:text-white border border-[#1F2937]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSIGHTS.map((insight, index) => (
              <motion.article
                key={insight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={insight.href}
                  className="block bg-[#111827] border border-[#1F2937] p-6 h-full hover:border-[#1E3A5F]/50 transition-all group"
                >
                  <div className="text-xs text-[#C9A961] mb-3">{insight.category}</div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#C9A961] transition-colors line-clamp-2">
                    {insight.title}
                  </h3>
                  <p className="text-sm text-[#6B7A8F] mb-4 line-clamp-3">{insight.description}</p>
                  <div className="flex items-center justify-between text-xs text-[#6B7A8F]">
                    <span>{insight.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {insight.readTime}
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-secondary">
              Load More Insights
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-[#111827]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <BookOpen size={40} className="text-[#C9A961] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Stay informed</h2>
            <p className="text-[#B8C5D6] mb-8">
              Get the latest insights, research, and perspectives delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-[#0B1120] border border-[#1F2937] text-white placeholder-[#6B7A8F] focus:outline-none focus:border-[#1E3A5F]"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
                <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
