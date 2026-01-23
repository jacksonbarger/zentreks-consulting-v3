"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Calendar,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

interface FormErrors {
  general?: string;
  fields?: string[];
}

export default function ContactPage() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
    // Honeypot field - hidden from users, bots will fill it
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formState.firstName,
          lastName: formState.lastName,
          email: formState.email,
          company: formState.company || undefined,
          message: `[Service: ${formState.service || "Not specified"}]\n\n${formState.message}`,
          // Include honeypot field
          website: formState.website,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 429) {
          setErrors({ general: "Too many requests. Please try again later." });
        } else if (data.errors) {
          setErrors({ fields: data.errors });
        } else {
          setErrors({ general: data.message || "Something went wrong. Please try again." });
        }
        return;
      }

      setIsSubmitted(true);
    } catch {
      setErrors({ general: "Network error. Please check your connection and try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear errors when user starts typing
    if (errors.general || errors.fields) {
      setErrors({});
    }
  };

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
              <Mail size={16} className="text-[#C9A961]" />
              <span className="text-sm text-[#C9A961] font-medium">Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="headline-italic font-light">Let's</span> shape your
              <span className="block text-gradient-gold">future together</span>
            </h1>
            <p className="text-xl text-[#B8C5D6]">
              Whether you're exploring AI transformation, seeking strategic guidance, or ready
              to modernize your operations, we're here to help you achieve measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>

              {isSubmitted ? (
                <div className="bg-[#111827] border border-[#C9A961]/30 p-8 text-center">
                  <CheckCircle size={48} className="text-[#C9A961] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Message Received</h3>
                  <p className="text-[#B8C5D6] mb-6">
                    Thank you for reaching out. A member of our team will contact you within
                    24 hours to discuss your needs.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({
                        firstName: "",
                        lastName: "",
                        email: "",
                        company: "",
                        phone: "",
                        service: "",
                        message: "",
                        website: "",
                      });
                    }}
                    className="btn-secondary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Error Display */}
                  {(errors.general || errors.fields) && (
                    <div className="bg-red-900/20 border border-red-500/30 p-4 flex items-start gap-3">
                      <AlertCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        {errors.general && (
                          <p className="text-red-400">{errors.general}</p>
                        )}
                        {errors.fields && (
                          <ul className="text-red-400 list-disc list-inside">
                            {errors.fields.map((error, i) => (
                              <li key={i}>{error}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Honeypot field - hidden from users */}
                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={formState.website}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-[#B8C5D6] mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formState.firstName}
                        onChange={handleChange}
                        required
                        maxLength={100}
                        className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] text-white placeholder-[#6B7A8F] focus:outline-none focus:border-[#1E3A5F] transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#B8C5D6] mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formState.lastName}
                        onChange={handleChange}
                        required
                        maxLength={100}
                        className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] text-white placeholder-[#6B7A8F] focus:outline-none focus:border-[#1E3A5F] transition-colors"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-[#B8C5D6] mb-2">Work Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        maxLength={254}
                        className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] text-white placeholder-[#6B7A8F] focus:outline-none focus:border-[#1E3A5F] transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#B8C5D6] mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        maxLength={200}
                        className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] text-white placeholder-[#6B7A8F] focus:outline-none focus:border-[#1E3A5F] transition-colors"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-[#B8C5D6] mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        maxLength={30}
                        className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] text-white placeholder-[#6B7A8F] focus:outline-none focus:border-[#1E3A5F] transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#B8C5D6] mb-2">
                        Service Area
                      </label>
                      <select
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] text-white focus:outline-none focus:border-[#1E3A5F] transition-colors"
                      >
                        <option value="">Select a service area</option>
                        <option value="ai-integration">AI Integration</option>
                        <option value="strategy">Strategy Consulting</option>
                        <option value="workflow">Workflow Optimization</option>
                        <option value="digital">Digital Transformation</option>
                        <option value="assessment">AI Readiness Assessment</option>
                        <option value="other">Other / General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-[#B8C5D6] mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      maxLength={5000}
                      className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] text-white placeholder-[#6B7A8F] focus:outline-none focus:border-[#1E3A5F] transition-colors resize-none"
                      placeholder="Tell us about your project or challenge..."
                    />
                    <p className="text-xs text-[#6B7A8F] mt-1">
                      {formState.message.length}/5000 characters
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full sm:w-auto disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Right Column - Calendly + Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Calendly Booking */}
              <div className="bg-[#111827] border border-[#1F2937] p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar size={24} className="text-[#C9A961]" />
                  <h3 className="text-xl font-bold text-white">Book a Consultation</h3>
                </div>
                <p className="text-[#B8C5D6] mb-6">
                  Schedule a free 30-minute strategy session with one of our consultants to
                  discuss your specific needs and explore how we can help.
                </p>

                {/* Calendly Embed Placeholder */}
                <div className="bg-[#1F2937] border border-[#1F2937] p-8 text-center">
                  <Calendar size={40} className="text-[#6B7A8F] mx-auto mb-4" />
                  <p className="text-[#6B7A8F] text-sm mb-4">
                    Calendly booking widget will appear here
                  </p>
                  <p className="text-xs text-[#6B7A8F] mb-4">
                    Replace CALENDLY_URL in this component with your actual Calendly link
                  </p>
                  {/*
                    TO ENABLE CALENDLY:
                    1. Replace the placeholder div above with:
                    <iframe
                      src="https://calendly.com/YOUR_USERNAME/30min"
                      width="100%"
                      height="600"
                      frameBorder="0"
                    />
                    2. Or use the Calendly inline widget script
                  */}
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex"
                  >
                    Schedule a Call
                    <ArrowRight size={18} className="ml-2" />
                  </a>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-[#111827] border border-[#1F2937] p-8">
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1E3A5F]/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-[#C9A961]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#6B7A8F] mb-1">Email</p>
                      <a
                        href={`mailto:${BUSINESS_INFO.email}`}
                        className="text-white hover:text-[#C9A961] transition-colors"
                      >
                        {BUSINESS_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1E3A5F]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-[#C9A961]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#6B7A8F] mb-1">Headquarters</p>
                      <p className="text-white">
                        New York, NY
                        <br />
                        <span className="text-[#6B7A8F]">Serving clients globally</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1E3A5F]/10 flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-[#C9A961]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#6B7A8F] mb-1">Business Hours</p>
                      <p className="text-white">
                        Monday - Friday: 9:00 AM - 6:00 PM EST
                        <br />
                        <span className="text-[#6B7A8F]">24/7 support for enterprise clients</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-r from-[#1E3A5F]/10 to-[#C9A961]/10 border border-[#1E3A5F]/30 p-6">
                <p className="text-[#C9A961] font-medium mb-1">Typical Response Time</p>
                <p className="text-white text-2xl font-bold">Within 24 Hours</p>
                <p className="text-[#6B7A8F] text-sm mt-2">
                  For urgent matters, call us directly or book a same-day consultation
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
