"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Layers,
  CheckCircle,
  Cog,
  Zap,
  BarChart3,
  Users,
} from "lucide-react";

const CAPABILITIES = [
  {
    icon: Layers,
    title: "Process Mapping & Analysis",
    description: "Comprehensive documentation and analysis of current workflows to identify bottlenecks, redundancies, and improvement opportunities.",
  },
  {
    icon: Zap,
    title: "Intelligent Automation",
    description: "Identify and implement automation solutions—from RPA to AI-powered workflows—that reduce manual effort and errors.",
  },
  {
    icon: Users,
    title: "Change Management",
    description: "Ensure successful adoption through stakeholder engagement, training programs, and continuous improvement frameworks.",
  },
  {
    icon: BarChart3,
    title: "Performance Monitoring",
    description: "Design and implement KPI dashboards and monitoring systems that provide visibility and drive accountability.",
  },
];

export default function WorkflowPage() {
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
              <Layers size={16} className="text-[#C9A961]" />
              <span className="text-sm text-[#C9A961] font-medium">Workflow Optimization</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Eliminate inefficiencies and
              <span className="block text-gradient-gold">boost productivity</span>
            </h1>
            <p className="text-xl text-[#B8C5D6] mb-8">
              We help organizations streamline processes, reduce costs, and improve operational
              efficiency through systematic analysis, intelligent automation, and sustainable
              change management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Optimize Your Workflows
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link href="/ai-readiness" className="btn-secondary">
                Assess Your Readiness
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 border-b border-[#1F2937]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "60%", label: "Average efficiency gain" },
              { value: "45%", label: "Cost reduction" },
              { value: "80%", label: "Error reduction" },
              { value: "3x", label: "Faster processing" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[#6B7A8F]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
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
              Our Optimization Capabilities
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

      {/* Automation Technologies */}
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
              Automation Technologies
            </h2>
            <p className="text-[#B8C5D6] max-w-2xl mx-auto">
              We implement the right automation solution for each use case
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Robotic Process Automation",
                description: "Automate repetitive, rule-based tasks across applications without changing existing systems.",
                tools: ["UiPath", "Automation Anywhere", "Power Automate"],
              },
              {
                title: "Intelligent Document Processing",
                description: "Extract, classify, and process information from documents using AI and machine learning.",
                tools: ["AWS Textract", "Azure Form Recognizer", "Custom ML Models"],
              },
              {
                title: "Workflow Orchestration",
                description: "Connect systems, automate approvals, and orchestrate complex multi-step processes.",
                tools: ["Zapier", "n8n", "Custom Integrations"],
              },
            ].map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#0B1120] border border-[#1F2937] p-6"
              >
                <h3 className="text-lg font-bold text-white mb-3">{tech.title}</h3>
                <p className="text-[#6B7A8F] text-sm mb-4">{tech.description}</p>
                <div className="flex flex-wrap gap-2">
                  {tech.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs bg-[#1F2937] text-[#C9A961] px-2 py-1"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
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
            <Cog size={48} className="text-[#C9A961] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to optimize your operations?
            </h2>
            <p className="text-xl text-[#B8C5D6] mb-8">
              Let's identify opportunities to streamline your workflows and boost productivity
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Schedule Optimization Assessment
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
