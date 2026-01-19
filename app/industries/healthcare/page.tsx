"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Heart, CheckCircle, Stethoscope, Brain, Shield, Users } from "lucide-react";

const SOLUTIONS = [
  {
    icon: Brain,
    title: "Clinical AI Applications",
    description: "Implement AI solutions for diagnostics, treatment recommendations, and clinical decision support.",
  },
  {
    icon: Stethoscope,
    title: "Care Delivery Optimization",
    description: "Streamline clinical workflows, reduce wait times, and improve patient throughput.",
  },
  {
    icon: Users,
    title: "Patient Experience",
    description: "Design and implement digital patient engagement solutions that improve satisfaction and outcomes.",
  },
  {
    icon: Shield,
    title: "Compliance & Security",
    description: "Ensure HIPAA compliance and protect patient data with robust security frameworks.",
  },
];

export default function HealthcareIndustryPage() {
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
              <Heart size={16} className="text-[#C9A961]" />
              <span className="text-sm text-[#C9A961] font-medium">Healthcare</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform patient care with
              <span className="block text-gradient-gold">intelligent solutions</span>
            </h1>
            <p className="text-xl text-[#B8C5D6] mb-8">
              We help healthcare organizations leverage AI and digital technologies to improve patient
              outcomes, reduce costs, and create more efficient care delivery models.
            </p>
            <Link href="/contact" className="btn-primary">
              Discuss Healthcare Solutions <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 border-b border-[#1F2937]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "40%", label: "Cost reduction achieved" },
              { value: "60%", label: "Faster diagnostics" },
              { value: "25%", label: "Improved patient satisfaction" },
              { value: "30%", label: "Administrative time saved" },
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Healthcare Solutions</h2>
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
              { type: "Health Systems", desc: "Hospitals, IDNs, and academic medical centers" },
              { type: "Digital Health", desc: "Telehealth, remote monitoring, and health apps" },
              { type: "Medical Devices", desc: "Device manufacturers and MedTech companies" },
              { type: "Pharma & Biotech", desc: "Pharmaceutical and biotechnology companies" },
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to transform healthcare delivery?</h2>
          <p className="text-xl text-[#B8C5D6] mb-8">Let's discuss how AI can improve patient care at your organization</p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Schedule Healthcare Consultation <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
