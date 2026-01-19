"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Users,
  Award,
  Globe,
  TrendingUp,
  Shield,
  Lightbulb,
} from "lucide-react";
import { STATS } from "@/lib/constants";

const LEADERSHIP_TEAM = [
  {
    name: "Graham Wilson",
    role: "Founder & Principal Consultant",
    bio: "With 17+ years in enterprise technology—from IT marketing and storage solutions to strategic sales leadership—Graham founded Zentreks to bring Fortune 500-caliber strategy to technology companies of all sizes. Six Sigma & Agile Scrum certified.",
    image: "/images/graham-wilson-200.png",
    linkedIn: "https://www.linkedin.com/in/graham-wilson-83148b/",
  },
];

const VALUES = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We measure success by the measurable impact we create for our clients, not by hours billed.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay at the forefront of technology and methodology to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "We work alongside your team, building capabilities that last long after our engagement ends.",
  },
  {
    icon: Shield,
    title: "Integrity Always",
    description: "We provide honest assessments and recommendations, even when they're not what you want to hear.",
  },
];

export default function AboutPage() {
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
              <Globe size={16} className="text-[#C9A961]" />
              <span className="text-sm text-[#C9A961] font-medium">About Zentreks</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="headline-italic font-light">Shaping</span> the future
              <span className="block text-gradient-gold">with confidence</span>
            </h1>
            <p className="text-xl text-[#B8C5D6]">
              We're a team of strategists, technologists, and operators united by a single
              mission: helping organizations harness the power of AI and digital transformation
              to create lasting competitive advantage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b border-[#1F2937]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-[#6B7A8F]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-[#B8C5D6]">
                <p>
                  Zentreks Consulting was founded in 2008 by Graham Wilson with a clear vision:
                  technology companies of all sizes deserve access to the same caliber of strategic
                  guidance that Fortune 500 firms take for granted.
                </p>
                <p>
                  After decades in enterprise technology—from IT marketing and storage solutions
                  to strategic sales leadership—Graham recognized that too many growing companies
                  were struggling to implement effective strategies without enterprise-level expertise.
                </p>
                <p>
                  Today, we've helped over 200 clients transform their operations, leverage AI
                  effectively, and build sustainable competitive advantages. Our approach combines
                  Six Sigma methodology with consultative selling principles to deliver measurable results.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#111827] border border-[#1F2937] p-8"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-[#1F2937]">
                  <TrendingUp size={32} className="text-[#C9A961] mb-4" />
                  <div className="text-2xl font-bold text-white mb-1">$2B+</div>
                  <div className="text-sm text-[#6B7A8F]">Value created for clients</div>
                </div>
                <div className="p-6 bg-[#1F2937]">
                  <Globe size={32} className="text-[#C9A961] mb-4" />
                  <div className="text-2xl font-bold text-white mb-1">40+</div>
                  <div className="text-sm text-[#6B7A8F]">Countries served</div>
                </div>
                <div className="p-6 bg-[#1F2937]">
                  <Users size={32} className="text-[#C9A961] mb-4" />
                  <div className="text-2xl font-bold text-white mb-1">75+</div>
                  <div className="text-sm text-[#6B7A8F]">Expert consultants</div>
                </div>
                <div className="p-6 bg-[#1F2937]">
                  <Award size={32} className="text-[#C9A961] mb-4" />
                  <div className="text-2xl font-bold text-white mb-1">95%</div>
                  <div className="text-sm text-[#6B7A8F]">Client retention</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-[#B8C5D6] max-w-2xl mx-auto">
              These principles guide every engagement and shape how we work with our clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#0B1120] border border-[#1F2937] p-6"
              >
                <value.icon size={32} className="text-[#C9A961] mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-[#6B7A8F]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet the Founder</h2>
            <p className="text-[#B8C5D6] max-w-2xl mx-auto">
              When you work with Zentreks, you work directly with Graham
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {LEADERSHIP_TEAM.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#111827] border border-[#1F2937] p-8 group hover:border-[#1E3A5F]/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Headshot */}
                  <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#C9A961]/30 flex-shrink-0">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#1E3A5F] to-[#C9A961] flex items-center justify-center">
                        <span className="text-white text-3xl font-bold">
                          {member.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-[#C9A961] mb-3">{member.role}</p>
                    <p className="text-[#B8C5D6] mb-4">{member.bio}</p>
                    {member.linkedIn && (
                      <a
                        href={member.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#C9A961] hover:text-white transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        Connect on LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E3A5F]/10 to-[#C9A961]/10 border-t border-b border-[#1E3A5F]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to transform your business?
            </h2>
            <p className="text-xl text-[#B8C5D6] mb-8">
              Let's discuss how Zentreks can help you achieve your strategic objectives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Schedule a Consultation
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link href="/ai-readiness" className="btn-secondary text-lg px-8 py-4">
                Take AI Assessment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
