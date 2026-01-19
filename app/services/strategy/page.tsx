"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  CheckCircle,
  TrendingUp,
  Users,
  Globe,
  BarChart3,
  Briefcase,
} from "lucide-react";

const CAPABILITIES = [
  {
    icon: TrendingUp,
    title: "Corporate Strategy",
    description: "Define your strategic direction, portfolio priorities, and resource allocation to maximize long-term value creation.",
  },
  {
    icon: Globe,
    title: "Market Entry & Expansion",
    description: "Identify and capture growth opportunities in new markets, segments, and geographies with data-driven insights.",
  },
  {
    icon: BarChart3,
    title: "Competitive Intelligence",
    description: "Understand your competitive landscape and develop strategies to differentiate and win in your markets.",
  },
  {
    icon: Briefcase,
    title: "M&A Strategy",
    description: "Identify acquisition targets, conduct due diligence, and develop integration strategies that realize deal value.",
  },
];

export default function StrategyPage() {
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
            <Link
              href="/services"
              className="inline-flex items-center text-[#6B7A8F] hover:text-[#C9A961] transition-colors mb-6"
            >
              <ArrowRight size={16} className="mr-2 rotate-180" />
              All Services
            </Link>
            <div className="inline-flex items-center gap-2 bg-[#1E3A5F]/10 border border-[#1E3A5F]/30 px-4 py-2 mb-6 ml-4">
              <Target size={16} className="text-[#C9A961]" />
              <span className="text-sm text-[#C9A961] font-medium">Strategy Consulting</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Data-driven strategies for
              <span className="block text-gradient-gold">sustainable growth</span>
            </h1>
            <p className="text-xl text-[#B8C5D6] mb-8">
              We help organizations develop and execute winning strategies backed by rigorous
              analysis, market insights, and proven methodologies. Our approach combines
              analytical depth with practical execution to deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Discuss Your Strategy
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Strategy Capabilities
            </h2>
            <p className="text-[#B8C5D6] max-w-2xl mx-auto">
              Comprehensive strategic services to help you compete and win
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {CAPABILITIES.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#111827] border border-[#1F2937] p-8 hover:border-[#1E3A5F]/50 transition-colors"
              >
                <capability.icon size={32} className="text-[#C9A961] mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                <p className="text-[#B8C5D6]">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What Sets Us Apart
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Data-Driven Insights",
                    description: "We combine traditional strategy frameworks with advanced analytics and AI to uncover insights others miss.",
                  },
                  {
                    title: "Implementation Focus",
                    description: "We don't just develop strategies—we partner with you to ensure successful execution and measurable results.",
                  },
                  {
                    title: "Industry Expertise",
                    description: "Our consultants bring deep sector knowledge that accelerates impact and ensures relevance.",
                  },
                  {
                    title: "Agile Methodology",
                    description: "We adapt our approach to your needs, delivering value iteratively rather than in lengthy engagements.",
                  },
                ].map((item, index) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <CheckCircle size={24} className="text-[#C9A961] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-[#6B7A8F]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#0B1120] border border-[#1F2937] p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6">Results We've Delivered</h3>
              <div className="space-y-6">
                {[
                  { metric: "25%", description: "Average revenue growth for clients" },
                  { metric: "40+", description: "Strategic transformations completed" },
                  { metric: "$500M+", description: "M&A transactions advised" },
                  { metric: "15+", description: "Countries where we've executed strategies" },
                ].map((stat) => (
                  <div key={stat.description} className="flex items-center gap-4">
                    <div className="text-3xl font-bold text-gradient-gold w-24">{stat.metric}</div>
                    <div className="text-[#B8C5D6]">{stat.description}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to define your winning strategy?
            </h2>
            <p className="text-xl text-[#B8C5D6] mb-8">
              Let's discuss how we can help you achieve your strategic objectives
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Schedule Strategy Session
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
