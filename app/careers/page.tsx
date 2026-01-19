"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Briefcase, MapPin, Clock, Users, Zap, Heart, TrendingUp } from "lucide-react";

const OPEN_POSITIONS = [
  {
    title: "Senior AI Consultant",
    department: "AI Practice",
    location: "New York / Remote",
    type: "Full-time",
    description: "Lead AI transformation engagements for Fortune 500 clients, from strategy through implementation.",
  },
  {
    title: "Strategy Consultant",
    department: "Strategy",
    location: "New York / Remote",
    type: "Full-time",
    description: "Develop data-driven strategies that help clients achieve sustainable competitive advantage.",
  },
  {
    title: "Data Engineer",
    department: "Technology",
    location: "Remote",
    type: "Full-time",
    description: "Build and optimize data pipelines that power AI solutions for enterprise clients.",
  },
  {
    title: "Business Development Manager",
    department: "Growth",
    location: "New York",
    type: "Full-time",
    description: "Drive growth by building relationships with C-suite executives and identifying transformation opportunities.",
  },
];

const BENEFITS = [
  { icon: TrendingUp, title: "Growth", description: "Clear career paths with mentorship from industry leaders" },
  { icon: Zap, title: "Impact", description: "Work on high-stakes projects that transform enterprises" },
  { icon: Users, title: "Culture", description: "Collaborative environment with exceptional colleagues" },
  { icon: Heart, title: "Wellbeing", description: "Comprehensive benefits and work-life flexibility" },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] pt-24 pb-16">
      {/* Hero */}
      <section className="py-16 border-b border-[#1F2937]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#1E3A5F]/10 border border-[#1E3A5F]/30 px-4 py-2 mb-6">
              <Briefcase size={16} className="text-[#C9A961]" />
              <span className="text-sm text-[#C9A961] font-medium">Careers</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="headline-italic font-light">Shape</span> the future
              <span className="block text-gradient-gold">with us</span>
            </h1>
            <p className="text-xl text-[#B8C5D6]">
              Join a team of exceptional strategists, technologists, and operators working on
              transformative projects for the world's leading organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Join Zentreks</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {BENEFITS.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#111827] border border-[#1F2937] p-6 text-center"
              >
                <benefit.icon size={32} className="text-[#C9A961] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-[#6B7A8F]">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Open Positions</h2>
          <div className="space-y-4">
            {OPEN_POSITIONS.map((position, i) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href="#"
                  className="block bg-[#0B1120] border border-[#1F2937] p-6 hover:border-[#1E3A5F]/50 transition-colors group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#C9A961] transition-colors mb-2">
                        {position.title}
                      </h3>
                      <p className="text-sm text-[#6B7A8F] mb-3">{position.description}</p>
                      <div className="flex flex-wrap gap-4 text-xs text-[#6B7A8F]">
                        <span className="flex items-center gap-1">
                          <Briefcase size={12} /> {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} /> {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> {position.type}
                        </span>
                      </div>
                    </div>
                    <ArrowRight size={24} className="text-[#6B7A8F] group-hover:text-[#C9A961] transition-colors flex-shrink-0" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don't see the right role?</h2>
          <p className="text-xl text-[#B8C5D6] mb-8">
            We're always looking for exceptional talent. Send us your resume and let's talk.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Get in Touch <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
