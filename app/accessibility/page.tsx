"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Accessibility,
  Eye,
  Keyboard,
  Monitor,
  MessageSquare,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const ACCESSIBILITY_FEATURES = [
  {
    icon: Eye,
    title: "Visual Accessibility",
    features: [
      "High contrast color schemes",
      "Readable font sizes (minimum 16px)",
      "Clear visual hierarchy",
      "Alt text for all images",
    ],
  },
  {
    icon: Keyboard,
    title: "Keyboard Navigation",
    features: [
      "Full keyboard accessibility",
      "Visible focus indicators",
      "Skip navigation links",
      "Logical tab order",
    ],
  },
  {
    icon: Monitor,
    title: "Screen Reader Support",
    features: [
      "Semantic HTML structure",
      "ARIA labels where needed",
      "Descriptive link text",
      "Proper heading hierarchy",
    ],
  },
  {
    icon: MessageSquare,
    title: "Content Accessibility",
    features: [
      "Clear, plain language",
      "Consistent navigation",
      "Error identification",
      "Form field labels",
    ],
  },
];

export default function AccessibilityPage() {
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
              <Accessibility size={16} className="text-[#C9A961]" />
              <span className="text-sm text-[#C9A961] font-medium">Accessibility</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Accessibility
              <span className="block text-gradient-gold">Statement</span>
            </h1>
            <p className="text-xl text-[#B8C5D6]">
              Zentreks Consulting is committed to ensuring digital accessibility for people
              of all abilities. We continually improve the user experience for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 border-b border-[#1F2937]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Our Commitment</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-[#B8C5D6] text-lg leading-relaxed mb-4">
                Zentreks Consulting strives to ensure that our website is accessible to all users,
                including those with disabilities. We aim to comply with the Web Content Accessibility
                Guidelines (WCAG) 2.1 Level AA standards.
              </p>
              <p className="text-[#B8C5D6] text-lg leading-relaxed">
                We believe that the internet should be available and accessible to anyone, and we are
                committed to providing a website that is accessible to the widest possible audience,
                regardless of technology or ability.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-16 border-b border-[#1F2937]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Accessibility Features</h2>
            <p className="text-[#B8C5D6]">
              Our website includes the following accessibility features:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {ACCESSIBILITY_FEATURES.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#111827] border border-[#1F2937] p-6 hover:border-[#1E3A5F]/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#1E3A5F]/20 flex items-center justify-center">
                    <category.icon size={20} className="text-[#C9A961]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-[#B8C5D6]">
                      <CheckCircle2 size={16} className="text-[#C9A961] mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conformance Status */}
      <section className="py-16 border-b border-[#1F2937]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Conformance Status</h2>
            <div className="bg-[#111827] border border-[#1F2937] p-6">
              <p className="text-[#B8C5D6] mb-4">
                The Web Content Accessibility Guidelines (WCAG) defines requirements for designers
                and developers to improve accessibility for people with disabilities. It defines
                three levels of conformance: Level A, Level AA, and Level AAA.
              </p>
              <p className="text-[#B8C5D6]">
                <strong className="text-white">Zentreks Consulting</strong> is partially conformant
                with WCAG 2.1 Level AA. Partially conformant means that some parts of the content
                do not fully conform to the accessibility standard. We are actively working to
                achieve full conformance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#1E3A5F]/20 to-[#C9A961]/10 border border-[#1E3A5F]/30 p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Feedback</h2>
            <p className="text-[#B8C5D6] mb-6 max-w-2xl">
              We welcome your feedback on the accessibility of the Zentreks Consulting website.
              If you encounter any accessibility barriers or have suggestions for improvement,
              please let us know.
            </p>
            <div className="space-y-3 text-[#B8C5D6] mb-8">
              <p>
                <strong className="text-white">Email:</strong>{" "}
                <a href="mailto:contact@zentreksconsulting.com" className="text-[#C9A961] hover:text-white transition-colors">
                  contact@zentreksconsulting.com
                </a>
              </p>
              <p>
                <strong className="text-white">Response time:</strong> We aim to respond to accessibility
                feedback within 5 business days.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center"
            >
              Contact Us
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-[#6B7A8F]">
            This accessibility statement was last updated on January 19, 2026.
          </p>
        </div>
      </section>
    </div>
  );
}
