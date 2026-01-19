"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle, Cpu, Cloud, Rocket, Shield } from "lucide-react";

const SOLUTIONS = [
  {
    icon: Cpu,
    title: "AI-Powered Products",
    description: "Integrate AI capabilities into your products to create differentiated offerings and new revenue streams.",
  },
  {
    icon: Cloud,
    title: "Platform Scalability",
    description: "Architect and optimize your platform for scale, ensuring performance and reliability as you grow.",
  },
  {
    icon: Rocket,
    title: "Go-to-Market Strategy",
    description: "Accelerate growth with data-driven GTM strategies, pricing optimization, and market expansion planning.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Build trust with enterprise customers through robust security practices and compliance frameworks.",
  },
];

export default function TechnologyIndustryPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] pt-24 pb-16">
      {/* Hero */}
      <section className="py-16 border-b border-[#1F2937]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <Link href="/industries" className="inline-flex items-center text-[#6B7A8F] hover:text-[#C9A961] mb-6">
              <ArrowRight size={16} className="mr-2 rotate-180" /> All Industries
            </Link>
            <div className="inline-flex items-center gap-2 bg-[#1E3A5F]/10 border border-[#1E3A5F]/30 px-4 py-2 mb-6 ml-4">
              <Building2 size={16} className="text-[#C9A961]" />
              <span className="text-sm text-[#C9A961] font-medium">Technology</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Accelerate growth in
              <span className="block text-gradient-gold">technology & software</span>
            </h1>
            <p className="text-xl text-[#B8C5D6] mb-8">
              We help technology companies—from early-stage startups to enterprise software leaders—scale
              operations, optimize products, and leverage AI to stay ahead of the competition.
            </p>
            <Link href="/contact" className="btn-primary">
              Discuss Your Challenges <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Solutions for Technology Companies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {SOLUTIONS.map((solution, i) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#111827] border border-[#1F2937] p-8 hover:border-[#1E3A5F]/50 transition-colors"
              >
                <solution.icon size={32} className="text-[#C9A961] mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-[#B8C5D6]">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Who We Serve</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { type: "SaaS Platforms", desc: "B2B and B2C software companies seeking to scale" },
              { type: "Enterprise Software", desc: "Large software vendors modernizing offerings" },
              { type: "Tech Startups", desc: "Seed to Series C companies building for growth" },
              { type: "IT Services", desc: "System integrators and managed service providers" },
            ].map((client) => (
              <div key={client.type} className="bg-[#0B1120] border border-[#1F2937] p-6 text-center">
                <h3 className="text-lg font-bold text-white mb-2">{client.type}</h3>
                <p className="text-sm text-[#6B7A8F]">{client.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to accelerate your technology business?</h2>
          <p className="text-xl text-[#B8C5D6] mb-8">Let's discuss how we can help you scale and innovate</p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Schedule Consultation <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
