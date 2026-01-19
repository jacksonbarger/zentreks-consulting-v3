"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Target,
  Layers,
  TrendingUp,
  CheckCircle,
  Users,
  BarChart3,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Brain,
  Target,
  Layers,
  TrendingUp,
};

const SERVICE_DETAILS = [
  {
    title: "AI Integration",
    href: "/services/ai-integration",
    icon: "Brain",
    tagline: "Transform operations with intelligent automation",
    description: "We help organizations implement AI solutions that drive measurable business outcomes—from machine learning models to generative AI applications.",
    features: [
      "AI strategy and roadmap development",
      "Custom ML model development",
      "Generative AI implementation",
      "AI governance and ethics frameworks",
    ],
  },
  {
    title: "Strategy Consulting",
    href: "/services/strategy",
    icon: "Target",
    tagline: "Data-driven strategic planning and execution",
    description: "Develop winning strategies backed by rigorous analysis, market insights, and proven methodologies that position your organization for sustainable growth.",
    features: [
      "Corporate and growth strategy",
      "Market entry and expansion",
      "Competitive analysis",
      "M&A strategy and due diligence",
    ],
  },
  {
    title: "Workflow Optimization",
    href: "/services/workflow",
    icon: "Layers",
    tagline: "Eliminate inefficiencies and boost productivity",
    description: "Streamline processes, reduce costs, and improve operational efficiency through systematic analysis and intelligent automation.",
    features: [
      "Process mapping and analysis",
      "Automation opportunity assessment",
      "Change management support",
      "Performance monitoring systems",
    ],
  },
  {
    title: "Digital Transformation",
    href: "/services/digital",
    icon: "TrendingUp",
    tagline: "Modernize your technology for the digital age",
    description: "End-to-end digital modernization that encompasses technology, processes, and organizational culture to create sustainable competitive advantage.",
    features: [
      "Technology stack modernization",
      "Cloud migration strategy",
      "Digital product development",
      "Data platform architecture",
    ],
  },
];

export default function ServicesPage() {
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
              <BarChart3 size={16} className="text-[#C9A961]" />
              <span className="text-sm text-[#C9A961] font-medium">Our Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="headline-italic font-light">Capabilities</span> that
              <span className="block text-gradient-gold">drive results</span>
            </h1>
            <p className="text-xl text-[#B8C5D6]">
              From AI implementation to strategic transformation, our services are designed to
              create measurable business value and lasting competitive advantage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {SERVICE_DETAILS.map((service, index) => {
              const IconComponent = ICON_MAP[service.icon];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#111827] border border-[#1F2937] p-8 group hover:border-[#1E3A5F]/50 transition-all"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-[#1E3A5F]/10 flex items-center justify-center flex-shrink-0">
                      {IconComponent && <IconComponent size={28} className="text-[#C9A961]" />}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-1">{service.title}</h2>
                      <p className="text-[#C9A961]">{service.tagline}</p>
                    </div>
                  </div>

                  <p className="text-[#B8C5D6] mb-6">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-[#C9A961] mt-0.5 flex-shrink-0" />
                        <span className="text-[#B8C5D6] text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="inline-flex items-center text-[#C9A961] font-medium hover:text-white transition-colors group-hover:gap-3 gap-2"
                  >
                    Learn more
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Approach</h2>
            <p className="text-[#B8C5D6] max-w-2xl mx-auto">
              A proven methodology that delivers results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discover", description: "Deep-dive assessment of your current state, challenges, and opportunities" },
              { step: "02", title: "Design", description: "Develop tailored solutions with clear roadmaps and success metrics" },
              { step: "03", title: "Deliver", description: "Implement solutions with hands-on support and change management" },
              { step: "04", title: "Optimize", description: "Measure outcomes, refine approaches, and ensure sustainable impact" },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-gradient-gold mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                <p className="text-sm text-[#6B7A8F]">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not sure which service you need?
            </h2>
            <p className="text-xl text-[#B8C5D6] mb-8">
              Take our AI Readiness Assessment to understand your current state and get personalized recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ai-readiness" className="btn-primary text-lg px-8 py-4">
                Take Free Assessment
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Talk to an Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
