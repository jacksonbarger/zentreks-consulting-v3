"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  CheckCircle,
  Cloud,
  Code,
  Database,
  Shield,
} from "lucide-react";

const CAPABILITIES = [
  {
    icon: Cloud,
    title: "Cloud Migration & Modernization",
    description: "Migrate legacy systems to the cloud with minimal disruption while optimizing for performance, cost, and scalability.",
  },
  {
    icon: Code,
    title: "Digital Product Development",
    description: "Design and build digital products that create new revenue streams and enhance customer experiences.",
  },
  {
    icon: Database,
    title: "Data Platform Architecture",
    description: "Build modern data infrastructure that enables analytics, AI, and data-driven decision making at scale.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Ensure your digital transformation meets security standards and regulatory requirements.",
  },
];

export default function DigitalPage() {
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
              <TrendingUp size={16} className="text-[#C9A961]" />
              <span className="text-sm text-[#C9A961] font-medium">Digital Transformation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Modernize your business for
              <span className="block text-gradient-gold">the digital age</span>
            </h1>
            <p className="text-xl text-[#B8C5D6] mb-8">
              End-to-end digital transformation that encompasses technology, processes, and
              organizational culture. We help you build the digital capabilities needed to
              compete and win in an increasingly digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Start Your Transformation
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link href="/ai-readiness" className="btn-secondary">
                Assess Your Readiness
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
              Transformation Capabilities
            </h2>
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

      {/* Transformation Pillars */}
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
              Our Transformation Framework
            </h2>
            <p className="text-[#B8C5D6] max-w-2xl mx-auto">
              Successful digital transformation requires alignment across four key pillars
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                pillar: "Technology",
                items: ["Cloud infrastructure", "Modern architecture", "Integration platforms", "DevOps practices"],
              },
              {
                pillar: "Data",
                items: ["Data strategy", "Analytics platforms", "Data governance", "AI/ML capabilities"],
              },
              {
                pillar: "Process",
                items: ["Process redesign", "Automation", "Agile methodologies", "Continuous improvement"],
              },
              {
                pillar: "People",
                items: ["Digital skills", "Change management", "New ways of working", "Culture transformation"],
              },
            ].map((item, index) => (
              <motion.div
                key={item.pillar}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#0B1120] border border-[#1F2937] p-6"
              >
                <h3 className="text-xl font-bold text-gradient-gold mb-4">{item.pillar}</h3>
                <ul className="space-y-2">
                  {item.items.map((listItem) => (
                    <li key={listItem} className="flex items-center gap-2 text-sm text-[#B8C5D6]">
                      <CheckCircle size={14} className="text-[#C9A961]" />
                      {listItem}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
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
              Technology Partnerships
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Amazon Web Services",
              "Microsoft Azure",
              "Google Cloud",
              "Snowflake",
              "Databricks",
              "Salesforce",
              "ServiceNow",
              "Confluent",
            ].map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-[#111827] border border-[#1F2937] p-4 text-center text-[#B8C5D6] hover:border-[#C9A961]/50 hover:text-white transition-colors"
              >
                {partner}
              </motion.div>
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
              Ready to transform your business?
            </h2>
            <p className="text-xl text-[#B8C5D6] mb-8">
              Let's discuss how digital transformation can accelerate your growth
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Schedule Transformation Discussion
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
