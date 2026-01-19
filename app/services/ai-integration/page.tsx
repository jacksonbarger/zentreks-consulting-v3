"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  CheckCircle,
  Cpu,
  Database,
  Shield,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

const CAPABILITIES = [
  {
    icon: Sparkles,
    title: "Generative AI Solutions",
    description: "Custom LLM implementations, RAG systems, AI assistants, and content generation tools tailored to your business needs.",
  },
  {
    icon: Cpu,
    title: "Machine Learning Models",
    description: "Predictive analytics, recommendation engines, computer vision, and NLP models built for production scale.",
  },
  {
    icon: Database,
    title: "AI-Ready Data Infrastructure",
    description: "Design and implement data pipelines, feature stores, and governance frameworks that enable AI at scale.",
  },
  {
    icon: Shield,
    title: "Responsible AI Governance",
    description: "Ethics frameworks, bias detection, explainability tools, and compliance protocols for trustworthy AI.",
  },
];

const CASE_METRICS = [
  { value: "40%", label: "Average cost reduction" },
  { value: "3x", label: "Faster decision making" },
  { value: "60%", label: "Process automation rate" },
  { value: "85%", label: "Model accuracy achieved" },
];

export default function AIIntegrationPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 border-b border-[#1F2937]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/services"
                className="inline-flex items-center text-[#6B7A8F] hover:text-[#C9A961] transition-colors mb-6"
              >
                <ArrowRight size={16} className="mr-2 rotate-180" />
                All Services
              </Link>
              <div className="inline-flex items-center gap-2 bg-[#1E3A5F]/10 border border-[#1E3A5F]/30 px-4 py-2 mb-6 ml-4">
                <Brain size={16} className="text-[#C9A961]" />
                <span className="text-sm text-[#C9A961] font-medium">AI Integration</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform operations with
                <span className="block text-gradient-gold">intelligent automation</span>
              </h1>
              <p className="text-xl text-[#B8C5D6] mb-8">
                We help organizations move from AI experimentation to production-ready solutions
                that deliver measurable business outcomes—whether you're implementing your first
                ML model or scaling enterprise-wide AI capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Discuss Your AI Strategy
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link href="/ai-readiness" className="btn-secondary">
                  Take AI Assessment
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                {CASE_METRICS.map((metric, index) => (
                  <div
                    key={metric.label}
                    className="bg-[#111827] border border-[#1F2937] p-6 text-center"
                  >
                    <div className="text-3xl font-bold text-gradient-gold mb-2">{metric.value}</div>
                    <div className="text-sm text-[#6B7A8F]">{metric.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Capabilities</h2>
            <p className="text-[#B8C5D6] max-w-2xl mx-auto">
              End-to-end AI implementation from strategy through production deployment
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

      {/* Process Section */}
      <section className="py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Implementation Approach
            </h2>
            <p className="text-[#B8C5D6] max-w-2xl">
              A proven methodology that minimizes risk and maximizes value
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                phase: "Discovery & Assessment",
                description: "We evaluate your data landscape, technical infrastructure, and business objectives to identify high-value AI opportunities and create a prioritized roadmap.",
                deliverables: ["AI opportunity assessment", "Data readiness evaluation", "Use case prioritization matrix", "Implementation roadmap"],
              },
              {
                phase: "Solution Design",
                description: "Our team designs AI architectures that balance innovation with practical constraints, ensuring solutions integrate seamlessly with your existing systems.",
                deliverables: ["Technical architecture", "Model specifications", "Integration design", "Governance framework"],
              },
              {
                phase: "Development & Training",
                description: "We build and train AI models using best-in-class MLOps practices, with rigorous testing and validation to ensure production readiness.",
                deliverables: ["Custom AI models", "Training pipelines", "Evaluation reports", "Documentation"],
              },
              {
                phase: "Deployment & Scale",
                description: "We deploy solutions to production with monitoring, alerting, and continuous improvement mechanisms that ensure long-term success.",
                deliverables: ["Production deployment", "Monitoring dashboards", "Performance optimization", "Team training"],
              },
            ].map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#0B1120] border border-[#1F2937] p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#1E3A5F]/20 flex items-center justify-center text-[#C9A961] font-bold text-xl flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{step.phase}</h3>
                    <p className="text-[#B8C5D6] mb-4">{step.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((item) => (
                        <span
                          key={item}
                          className="text-xs bg-[#1F2937] text-[#6B7A8F] px-3 py-1"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
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
              Technologies We Work With
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "OpenAI / GPT-4",
              "Anthropic Claude",
              "AWS SageMaker",
              "Google Vertex AI",
              "Azure ML",
              "Hugging Face",
              "LangChain",
              "PyTorch / TensorFlow",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-[#111827] border border-[#1F2937] p-4 text-center text-[#B8C5D6] hover:border-[#C9A961]/50 hover:text-white transition-colors"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E3A5F]/10 to-[#C9A961]/10 border-t border-[#1E3A5F]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Zap size={48} className="text-[#C9A961] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to unlock AI's potential?
            </h2>
            <p className="text-xl text-[#B8C5D6] mb-8">
              Let's discuss how AI can transform your operations and drive measurable results
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Schedule AI Strategy Session
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
