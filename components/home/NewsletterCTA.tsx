"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Check } from "lucide-react";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setEmail("");
  };

  return (
    <section className="py-16 bg-[#1A1717]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#C4251D]/10 to-[#D4A574]/10 border border-[#231F1F] p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Text */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Be the first to know
              </h3>
              <p className="text-[#C4B8B8]">
                Sign up to receive the latest business insights and industry trends.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A7F7F]" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full md:w-80 pl-12 pr-4 py-4 bg-[#0D0D0D] border border-[#231F1F] text-white placeholder-[#8A7F7F] focus:outline-none focus:border-[#C4251D] transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className="btn-primary whitespace-nowrap disabled:opacity-50"
              >
                {submitted ? (
                  <>
                    <Check size={20} className="mr-2" />
                    Subscribed
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight size={20} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
