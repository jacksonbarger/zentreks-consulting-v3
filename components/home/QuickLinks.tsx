"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";

const quickLinks = [
  { label: "AI Integration", href: "/services/ai-integration" },
  { label: "Strategy Consulting", href: "/services/strategy" },
  { label: "Workflow Optimization", href: "/services/workflow" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Contact Us", href: "/contact" },
];

export default function QuickLinks() {
  return (
    <section className="py-16 bg-[#0D0D0D] border-t border-[#231F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Search CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Discover more</h3>
            <button className="flex items-center gap-3 w-full bg-[#1A1717] border border-[#231F1F] p-4 text-left hover:border-[#C4251D]/30 transition-colors group">
              <Search size={20} className="text-[#8A7F7F] group-hover:text-[#D4A574] transition-colors" />
              <span className="text-[#8A7F7F] group-hover:text-white transition-colors">
                Search Zentreks
              </span>
            </button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Popular Quick Links</h3>
            <div className="flex flex-wrap gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A1717] border border-[#231F1F] text-[#C4B8B8] hover:border-[#C4251D]/30 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
