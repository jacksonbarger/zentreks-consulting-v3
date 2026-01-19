"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Heart,
  Landmark,
  Factory,
  CheckCircle,
} from "lucide-react";

const INDUSTRIES = [
  {
    title: "Technology",
    href: "/industries/technology",
    icon: Building2,
    tagline: "SaaS, startups, and enterprise tech",
    description: "We help technology companies scale operations, optimize product development, and leverage AI to stay ahead of the competition.",
    clients: ["SaaS platforms", "Enterprise software", "Tech startups", "IT services"],
  },
  {
    title: "Healthcare",
    href: "/industries/healthcare",
    icon: Heart,
    tagline: "Digital health and medical innovation",
    description: "Transform patient care and operational efficiency with AI-powered solutions, from clinical workflows to administrative processes.",
    clients: ["Health systems", "Digital health", "Medical devices", "Pharma & biotech"],
  },
  {
    title: "Financial Services",
    href: "/industries/financial",
    icon: Landmark,
    tagline: "Banking, fintech, and insurance",
    description: "Navigate digital disruption with strategies that enhance customer experience, improve risk management, and drive operational excellence.",
    clients: ["Banks & credit unions", "Fintech", "Insurance", "Asset management"],
  },
  {
    title: "Manufacturing",
    href: "/industries/manufacturing",
    icon: Factory,
    tagline: "Industry 4.0 and smart factories",
    description: "Implement smart manufacturing solutions that increase efficiency, reduce costs, and enable predictive maintenance.",
    clients: ["Discrete manufacturing", "Process industries", "Industrial equipment", "Consumer goods"],
  },
];

export default function IndustriesPage() {
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
              <Building2 size={16} className="text-[#C9A961]" />
              <span className="text-sm text-[#C9A961] font-medium">Industries</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="headline-italic font-light">Deep expertise</span> across
              <span className="block text-gradient-gold">key sectors</span>
            </h1>
            <p className="text-xl text-[#B8C5D6]">
              Our industry specialists bring sector-specific knowledge that accelerates impact
              and ensures our solutions address your unique challenges and opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {INDUSTRIES.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#111827] border border-[#1F2937] p-8 hover:border-[#1E3A5F]/50 transition-all group"
              >
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-[#1E3A5F]/10 flex items-center justify-center flex-shrink-0">
                        <industry.icon size={28} className="text-[#C9A961]" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-1">{industry.title}</h2>
                        <p className="text-[#C9A961]">{industry.tagline}</p>
                      </div>
                    </div>
                    <p className="text-[#B8C5D6] mb-6">{industry.description}</p>
                    <Link
                      href={industry.href}
                      className="inline-flex items-center text-[#C9A961] font-medium hover:text-white transition-colors group-hover:gap-3 gap-2"
                    >
                      Explore {industry.title}
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                  <div className="bg-[#0B1120] border border-[#1F2937] p-6">
                    <p className="text-sm text-[#6B7A8F] mb-3">We serve</p>
                    <ul className="space-y-2">
                      {industry.clients.map((client) => (
                        <li key={client} className="flex items-center gap-2 text-[#B8C5D6]">
                          <CheckCircle size={14} className="text-[#C9A961]" />
                          {client}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Industry Expertise */}
      <section className="py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cross-Industry Expertise
            </h2>
            <p className="text-[#B8C5D6] max-w-2xl mx-auto">
              We also serve clients across these sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Retail & E-commerce",
              "Energy & Utilities",
              "Transportation & Logistics",
              "Media & Entertainment",
              "Real Estate",
              "Professional Services",
              "Education",
              "Government & Public Sector",
            ].map((sector, index) => (
              <motion.div
                key={sector}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-[#0B1120] border border-[#1F2937] p-4 text-center text-[#B8C5D6] hover:border-[#C9A961]/50 hover:text-white transition-colors"
              >
                {sector}
              </motion.div>
            ))}
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
              Don't see your industry?
            </h2>
            <p className="text-xl text-[#B8C5D6] mb-8">
              Our methodologies and solutions apply across sectors. Let's discuss your specific needs.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Talk to an Industry Expert
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
