"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Check, AlertCircle } from "lucide-react";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  // Honeypot field
  const [website, setWebsite] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          source: "newsletter",
          // Honeypot field
          website,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 429) {
          setError("Too many attempts. Please try again later.");
        } else {
          setError(data.error || "Something went wrong. Please try again.");
        }
        return;
      }

      setSubmitted(true);
      setEmail("");
      // Reset after 5 seconds to allow another submission
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#C4251D]/10 to-[#D4A574]/10 border border-[#2A2A2A] p-8 md:p-12"
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
            <form onSubmit={handleSubmit} className="w-full md:w-auto">
              {/* Honeypot field - hidden from users */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="newsletter-website">Website</label>
                <input
                  type="text"
                  id="newsletter-website"
                  name="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A7A7A]" size={20} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="Enter your email"
                    required
                    maxLength={254}
                    disabled={isSubmitting || submitted}
                    className="w-full md:w-80 pl-12 pr-4 py-4 bg-[#0D0D0D] border border-[#2A2A2A] text-white placeholder-[#8A7A7A] focus:outline-none focus:border-[#C4251D] transition-colors disabled:opacity-50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="btn-primary whitespace-nowrap disabled:opacity-50"
                >
                  {submitted ? (
                    <>
                      <Check size={20} className="mr-2" />
                      Subscribed!
                    </>
                  ) : isSubmitting ? (
                    "Subscribing..."
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight size={20} className="ml-2" />
                    </>
                  )}
                </button>
              </div>

              {/* Error message */}
              {error && (
                <div className="flex items-center gap-2 mt-3 text-red-400 text-sm">
                  <AlertCircle size={16} />
                  <span>{error}</span>
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
