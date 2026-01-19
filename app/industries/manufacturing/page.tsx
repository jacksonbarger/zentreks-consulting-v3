"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Factory, Cog, BarChart3, Cpu, Truck } from "lucide-react";

const SOLUTIONS = [
  {
    icon: Cpu,
    title: "Predictive Maintenance",
    description: "Use AI to predict equipment failures before they occur, reducing downtime and maintenance costs.",
  },
  {
    icon: BarChart3,
    title: "Quality Optimization",
    description: "Implement AI-powered quality control and defect detection to reduce waste and improve yields.",
  },
  {
    icon: Cog,
    title: "Production Planning",
    description: "Optimize production scheduling, inventory management, and resource allocation with AI.",
  },
  {
    icon: Truck,
    title: "Supply Chain Intelligence",
    description: "Gain visibility and optimize your supply chain with predictive analytics and automation.",
  },
];

export default function ManufacturingIndustryPage() {
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
              <Factory size={16} className="text-[#C9A961]" />
              <span className="text-sm text-[#C9A961] font-medium">Manufacturing</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Build the factory of
              <span className="block text-gradient-gold">the future</span>
            </h1>
            <p className="text-xl text-[#B8C5D6] mb-8">
              We help manufacturers implement Industry 4.0 solutions that increase efficiency,
              reduce costs, and enable data-driven decision making across operations.
            </p>
            <Link href="/contact" className="btn-primary">
              Discuss Manufacturing Solutions <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 border-b border-[#1F2937]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "60%", label: "Downtime reduction" },
              { value: "35%", label: "Maintenance cost savings" },
              { value: "20%", label: "Quality improvement" },
              { value: "15%", label: "Energy efficiency gains" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-gradient-gold mb-2">{stat.value}</div>
                <div className="text-sm text-[#6B7A8F]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Smart Manufacturing Solutions</h2>
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
              { type: "Discrete Manufacturing", desc: "Automotive, aerospace, and electronics" },
              { type: "Process Industries", desc: "Chemicals, food & beverage, and pharma" },
              { type: "Industrial Equipment", desc: "Heavy machinery and equipment makers" },
              { type: "Consumer Goods", desc: "CPG and consumer durables manufacturers" },
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to modernize your manufacturing operations?</h2>
          <p className="text-xl text-[#B8C5D6] mb-8">Let's discuss how Industry 4.0 can transform your factory</p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Schedule Manufacturing Consultation <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
