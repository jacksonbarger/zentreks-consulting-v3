"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award } from "lucide-react";

const CASE_STUDIES = [
  {
    category: "Workflow",
    industry: "Retail Technology",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    title: "Retail Space SaaS Platform: From Paper to Platform",
    description: "Digitized retail space operations to create a modern, scalable SaaS product—built for efficiency, growth, and seamless client engagement.",
    metrics: [
      { value: "50%", label: "Faster client setup" },
      { value: "SOC 2", label: "Compliance achieved" },
      { value: "Modular", label: "Platform architecture" },
    ],
    href: "/case-studies/retail-saas-platform",
  },
  {
    category: "AI Integration",
    industry: "E-Commerce",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    title: "Revenue Doubled Without Increasing Ad Spend",
    description: "Transformed marketing and e-commerce to double revenue in one year—through AI-powered automation and retention strategies.",
    metrics: [
      { value: "2x", label: "Revenue in 12 months" },
      { value: "40%", label: "AOV increase" },
      { value: "$300K", label: "Email revenue" },
    ],
    href: "/case-studies/commercial-equipment",
  },
  {
    category: "Digital Transformation",
    industry: "Energy / Utilities",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    title: "UK Energy Brokerage: Multi-Utility Platform Build",
    description: "Rebuilt commercial systems for a UK-based energy brokerage—enabling faster onboarding, accurate billing, and frictionless multi-utility operations.",
    metrics: [
      { value: "3x", label: "Faster onboarding" },
      { value: "Unified", label: "Multi-utility platform" },
      { value: "Real-time", label: "Billing accuracy" },
    ],
    href: "/case-studies/utility-brokerage",
  },
  {
    category: "AI Strategy",
    industry: "Civic Tech / Media",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80",
    title: "AI-Driven Market Expansion for National Civic Platform",
    description: "Used data intelligence and AI to expand a civics platform from local activism to a national force—reaching underrepresented communities and doubling engagement.",
    metrics: [
      { value: "4-7%", label: "Acquisition rate" },
      { value: "$200M+", label: "Audience value" },
      { value: "2x", label: "Community engagement" },
    ],
    href: "/case-studies/civic-engagement",
  },
];

export default function CaseStudiesPage() {
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
              <Award size={16} className="text-[#C9A961]" />
              <span className="text-sm text-[#C9A961] font-medium">Case Studies</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="headline-italic font-light">Results</span> that
              <span className="block text-gradient-gold">speak for themselves</span>
            </h1>
            <p className="text-xl text-[#B8C5D6]">
              Explore how we've helped organizations across industries transform their operations,
              accelerate growth, and achieve measurable business outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {CASE_STUDIES.map((study, index) => (
              <motion.article
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={study.href}
                  className="block bg-[#111827] border border-[#1F2937] hover:border-[#1E3A5F]/50 transition-all group"
                >
                  <div className="grid lg:grid-cols-3">
                    {/* Image */}
                    <div className="relative min-h-[200px] lg:min-h-full overflow-hidden">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111827]/50 z-10" />
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-2 p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs bg-[#1E3A5F]/20 text-[#1E3A5F] px-3 py-1">
                          {study.category}
                        </span>
                        <span className="text-xs text-[#6B7A8F]">{study.industry}</span>
                      </div>

                      <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-[#C9A961] transition-colors">
                        {study.title}
                      </h2>
                      <p className="text-[#B8C5D6] mb-6">{study.description}</p>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {study.metrics.map((metric) => (
                          <div key={metric.label}>
                            <div className="text-2xl font-bold text-gradient-gold">{metric.value}</div>
                            <div className="text-xs text-[#6B7A8F]">{metric.label}</div>
                          </div>
                        ))}
                      </div>

                      <span className="inline-flex items-center text-[#C9A961] font-medium group-hover:gap-3 gap-2 transition-all">
                        Read full case study
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1E3A5F]/10 to-[#C9A961]/10 border-t border-[#1E3A5F]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to become our next success story?
            </h2>
            <p className="text-xl text-[#B8C5D6] mb-8">
              Let's discuss how we can help you achieve similar results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Schedule Consultation
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link href="/ai-readiness" className="btn-secondary text-lg px-8 py-4">
                Take AI Assessment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
