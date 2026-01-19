"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Clock,
  Target,
  Zap,
  BarChart3,
  Rocket,
  Shield,
  Globe
} from "lucide-react";
import { notFound } from "next/navigation";

const CASE_STUDIES: Record<string, {
  title: string;
  subtitle: string;
  category: string;
  industry: string;
  duration: string;
  heroImage: string;
  galleryImages: { src: string; caption: string }[];
  description: string;
  challenge: string;
  challengePoints: string[];
  solution: string[];
  results: { value: string; label: string; description: string; icon: "chart" | "rocket" | "target" | "zap" }[];
  highlights: { title: string; description: string }[];
  testimonial?: { quote: string; author: string; role: string };
  services: string[];
  relatedStudies: { title: string; slug: string; category: string }[];
}> = {
  "retail-saas-platform": {
    title: "Retail Space SaaS Platform",
    subtitle: "From Paper to Platform",
    category: "Workflow Optimization",
    industry: "Retail Technology",
    duration: "12 months",
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    galleryImages: [
      { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", caption: "Dashboard Analytics" },
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", caption: "Client Onboarding Portal" }
    ],
    description: "Digitized retail space operations to create a modern, scalable SaaS product—built for efficiency, growth, and seamless client engagement across global markets.",
    challenge: "A fast-growing SaaS provider for short-term retail rentals was struggling with complex, fragmented workflows that couldn't scale. Manual processes, disconnected systems, and compliance gaps were blocking their path to enterprise clients and global expansion.",
    challengePoints: [
      "Fragmented systems causing data silos and inefficiencies",
      "Manual billing processes prone to errors",
      "No SOC 2 compliance, limiting enterprise opportunities",
      "Slow client onboarding across different markets",
      "CRM and scheduling tools not integrated"
    ],
    solution: [
      "Led a comprehensive modular platform rebuild, establishing clean architecture that separates concerns and enables rapid feature development",
      "Implemented SOC 2-ready infrastructure with proper security controls, audit logging, and data governance frameworks",
      "Designed and deployed scalable billing automation that handles complex multi-currency, multi-tenant scenarios with ease",
      "Built compliance-ready integrations with major payment processors and regional regulatory requirements",
      "Revamped CRM, scheduling, and payment logic to work as a unified system, cutting client setup time by 50%",
      "Created self-service onboarding flows that work seamlessly across global markets with localization support"
    ],
    results: [
      { value: "50%", label: "Faster Onboarding", description: "Client setup time cut in half through streamlined workflows", icon: "rocket" },
      { value: "3x", label: "Enterprise Wins", description: "Major enterprise contracts secured post-transformation", icon: "target" },
      { value: "SOC 2", label: "Compliance Ready", description: "Infrastructure built to enterprise security standards", icon: "zap" }
    ],
    highlights: [
      { title: "Global Scale Architecture", description: "Built to handle multi-region deployments with data residency compliance" },
      { title: "Deep Team Integration", description: "Embedded with internal and external teams for seamless knowledge transfer" },
      { title: "Revenue Foundation", description: "Platform positioned for sustainable, scalable revenue growth" }
    ],
    testimonial: {
      quote: "Zentreks didn't just rebuild our platform—they transformed how we think about scalability. We went from struggling with manual processes to winning enterprise deals we couldn't have touched before.",
      author: "Platform CEO",
      role: "Short-Term Retail SaaS"
    },
    services: ["Workflow Optimization", "Digital Transformation", "Compliance & Security", "Platform Architecture"],
    relatedStudies: [
      { title: "Utility Brokerage & Billing Aggregator", slug: "utility-brokerage", category: "Digital Transformation" },
      { title: "Commercial Equipment Brand", slug: "commercial-equipment", category: "AI Integration" }
    ]
  },
  "commercial-equipment": {
    title: "Commercial Equipment Brand",
    subtitle: "Revenue Doubled Without Increasing Ad Spend",
    category: "AI Integration",
    industry: "E-Commerce / Manufacturing",
    duration: "18 months",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    galleryImages: [
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", caption: "Predictive Analytics Dashboard" },
      { src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80", caption: "Inventory Management System" }
    ],
    description: "Transformed marketing and e-commerce to double revenue in one year—through AI-powered automation and retention strategies that maximized customer lifetime value.",
    challenge: "A high-demand pool equipment brand needed to scale revenue without expanding headcount or increasing advertising spend. They faced challenges with inventory management, inconsistent customer retention, and manual marketing processes that couldn't keep pace with demand.",
    challengePoints: [
      "Manual marketing processes limiting scale",
      "Poor visibility into inventory and SKU performance",
      "Missed upsell and cross-sell opportunities",
      "High SEO vendor costs with unclear ROI",
      "No automated post-sale engagement"
    ],
    solution: [
      "Built predictive analytics dashboards that provide real-time visibility into inventory, demand forecasting, and SKU-level profitability",
      "Optimized inventory flow with just-in-time principles, reducing carrying costs while maintaining availability",
      "Implemented AI-powered upsell and cross-sell engine that analyzes purchase patterns and recommends relevant products",
      "Created automated email flows for post-purchase engagement, generating over $300K in incremental annual revenue",
      "Revamped digital content strategy and brought SEO management in-house, saving $30K/year in vendor costs",
      "Prepared the team for just-in-time production planning with demand signals and supplier integration"
    ],
    results: [
      { value: "2x", label: "Revenue Growth", description: "Revenue doubled within 12 months of implementation", icon: "chart" },
      { value: "40%", label: "Higher AOV", description: "Average order value increased through intelligent upsells", icon: "target" },
      { value: "$300K+", label: "New Revenue Stream", description: "Annual revenue from automated post-sale email flows", icon: "rocket" }
    ],
    highlights: [
      { title: "AI-First Marketing", description: "Predictive models drive personalized customer experiences at scale" },
      { title: "Cost Optimization", description: "$30K annual savings from SEO vendor consolidation alone" },
      { title: "Zero Headcount Growth", description: "Scaled operations through automation, not hiring" }
    ],
    testimonial: {
      quote: "Zentreks showed us that doubling revenue doesn't mean doubling costs. Their AI-driven approach transformed our marketing from reactive to predictive, and the results speak for themselves.",
      author: "Brand Owner",
      role: "Pool Equipment Manufacturer"
    },
    services: ["AI Integration", "Marketing Automation", "E-Commerce Optimization", "Data Analytics"],
    relatedStudies: [
      { title: "Retail Space SaaS Platform", slug: "retail-saas-platform", category: "Workflow Optimization" },
      { title: "Civic Engagement Platform", slug: "civic-engagement", category: "AI Strategy" }
    ]
  },
  "utility-brokerage": {
    title: "Utility Brokerage & Billing Aggregator",
    subtitle: "Multi-Utility Platform Transformation",
    category: "Digital Transformation",
    industry: "Energy Services",
    duration: "14 months",
    heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80",
    galleryImages: [
      { src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80", caption: "Partner Dashboard" },
      { src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80", caption: "Customer Journey Mapping" }
    ],
    description: "Rebuilt commercial systems for a UK-based energy brokerage—enabling faster onboarding, accurate billing, and frictionless multi-utility operations with measurable customer experience improvements.",
    challenge: "A UK-based energy services company was facing critical operational challenges: fragmented customer data, high churn rates, and manual processes that couldn't scale. Partner accountability was poor, and customers were dropping off at key journey points.",
    challengePoints: [
      "Fragmented data across multiple systems",
      "High customer churn with unclear root causes",
      "Manual onboarding taking weeks instead of days",
      "Poor partner accountability and visibility",
      "Inconsistent messaging across channels"
    ],
    solution: [
      "Introduced SOP-driven automation that standardized processes across the organization and reduced human error",
      "Executed comprehensive CRM replatforming, creating a single source of truth for customer data",
      "Designed AI-first customer journeys that anticipate needs and proactively address common pain points",
      "Developed CSAT and CX diagnostic frameworks to identify drop-off points in the customer journey",
      "Optimized messaging across SMS, email, and portal touchpoints for consistent, personalized communication",
      "Built partner accountability dashboards with real-time performance metrics and automated alerts"
    ],
    results: [
      { value: "3x", label: "Faster Onboarding", description: "Customer onboarding time reduced from weeks to days", icon: "rocket" },
      { value: "↑", label: "Renewal Conversions", description: "Measurable uplift in customer retention and renewals", icon: "chart" },
      { value: "360°", label: "Customer View", description: "Unified data platform with complete customer visibility", icon: "target" }
    ],
    highlights: [
      { title: "AI-Powered CX", description: "Proactive customer engagement based on behavioral signals" },
      { title: "Multi-Channel Optimization", description: "Consistent experience across SMS, email, and web" },
      { title: "New Service Tiers", description: "Platform improvements enabled launch of premium offerings" }
    ],
    testimonial: {
      quote: "The transformation went beyond technology—Zentreks helped us fundamentally rethink how we serve our customers. Our churn is down, partner performance is up, and we're launching new services we couldn't have imagined before.",
      author: "Managing Director",
      role: "UK Energy Brokerage"
    },
    services: ["Digital Transformation", "CRM Implementation", "Customer Experience", "Process Automation"],
    relatedStudies: [
      { title: "Retail Space SaaS Platform", slug: "retail-saas-platform", category: "Workflow Optimization" },
      { title: "Civic Engagement Platform", slug: "civic-engagement", category: "AI Strategy" }
    ]
  },
  "civic-engagement": {
    title: "Civic Engagement & Data Platform",
    subtitle: "AI-Driven Market Expansion",
    category: "AI Strategy",
    industry: "Civic Technology",
    duration: "10 months",
    heroImage: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200&q=80",
    galleryImages: [
      { src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80", caption: "Audience Segmentation" },
      { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80", caption: "Campaign Analytics" }
    ],
    description: "Used data intelligence and AI to expand a civics platform from local activism to a national force—reaching underrepresented communities and doubling engagement across 400+ markets.",
    challenge: "A civic polling platform with ambitions to scale across 400+ markets needed to dramatically accelerate growth while maintaining high trust and engagement. Traditional outreach methods weren't working for reaching diverse, underrepresented communities at scale.",
    challengePoints: [
      "Limited reach into underrepresented communities",
      "Manual outreach processes that couldn't scale",
      "No data enrichment or audience intelligence",
      "Low conversion rates from campaigns",
      "Lack of predictive capabilities for targeting"
    ],
    solution: [
      "Integrated advanced data enrichment pipelines that create rich participant profiles from multiple sources",
      "Built consent-first outreach flows that respect privacy while enabling personalized engagement",
      "Developed influencer segmentation models that identify key community voices and amplifiers",
      "Created custom workflows that automate targeting while maintaining authenticity and trust",
      "Implemented predictive analytics to forecast engagement likelihood and optimize campaign timing",
      "Designed participant-tier frameworks and onboarding dashboards for scalable community building"
    ],
    results: [
      { value: "4-7%", label: "Acquisition Rate", description: "Blended acquisition from targeted campaigns", icon: "rocket" },
      { value: "$200M+", label: "Audience Value", description: "Monetizable audience value unlocked", icon: "chart" },
      { value: "400+", label: "Markets Reached", description: "Platform expanded to national scale", icon: "target" }
    ],
    highlights: [
      { title: "Consent-First Data", description: "Privacy-respecting data practices that build long-term trust" },
      { title: "Strategic Transformation", description: "Evolved from survey tool to civic insight engine" },
      { title: "High-Trust Growth", description: "Maintained community trust while scaling rapidly" }
    ],
    testimonial: {
      quote: "Zentreks helped us see that our platform wasn't just a polling tool—it was a civic intelligence engine waiting to be unlocked. The AI-driven approach opened markets and communities we thought were unreachable.",
      author: "Founder & CEO",
      role: "Civic Technology Platform"
    },
    services: ["AI Strategy", "Data Intelligence", "Growth Strategy", "Community Engagement"],
    relatedStudies: [
      { title: "Commercial Equipment Brand", slug: "commercial-equipment", category: "AI Integration" },
      { title: "Utility Brokerage Platform", slug: "utility-brokerage", category: "Digital Transformation" }
    ]
  }
};

const iconMap = {
  chart: BarChart3,
  rocket: Rocket,
  target: Target,
  zap: Zap
};

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
};

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const study = CASE_STUDIES[slug];

  if (!study) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0B1120] pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-12 border-b border-[#1F2937] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Link */}
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-[#6B7A8F] hover:text-[#C9A961] transition-colors mb-8 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Case Studies
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Category & Meta */}
                <motion.div
                  className="flex flex-wrap items-center gap-4 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-xs bg-[#C9A961]/20 text-[#C9A961] px-3 py-1 font-medium">
                    {study.category}
                  </span>
                  <span className="text-xs text-[#6B7A8F] flex items-center gap-1">
                    <Globe size={12} />
                    {study.industry}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[#6B7A8F]">
                    <Clock size={12} />
                    {study.duration}
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {study.title}
                </motion.h1>

                <motion.p
                  className="text-xl text-gradient-gold font-medium mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {study.subtitle}
                </motion.p>

                <motion.p
                  className="text-lg text-[#B8C5D6]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {study.description}
                </motion.p>
              </div>

              {/* Hero Image */}
              <motion.div
                className="relative aspect-video rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.95, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Image
                  src={study.heroImage}
                  alt={study.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/70 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120]/30 to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Summary - Animated Cards */}
      <section className="py-16 border-b border-[#1F2937]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <motion.div
                className="p-2 bg-[#C9A961]/20 rounded-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <TrendingUp size={24} className="text-[#C9A961]" />
              </motion.div>
              <h2 className="text-2xl font-bold text-white">Key Results</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {study.results.map((result, index) => {
                const IconComponent = iconMap[result.icon];
                return (
                  <motion.div
                    key={index}
                    className="relative bg-gradient-to-br from-[#111827] to-[#0B1120] border border-[#1F2937] p-8 rounded-xl overflow-hidden group hover:border-[#C9A961]/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Background glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A961]/5 rounded-full blur-3xl group-hover:bg-[#C9A961]/10 transition-colors" />

                    <motion.div
                      className="mb-4"
                      whileHover={{ scale: 1.1 }}
                    >
                      <IconComponent size={28} className="text-[#C9A961]" />
                    </motion.div>

                    <motion.div
                      className="text-5xl font-bold text-gradient-gold mb-3"
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", delay: index * 0.15 + 0.2 }}
                    >
                      {result.value}
                    </motion.div>
                    <div className="text-white font-semibold text-lg mb-2">{result.label}</div>
                    <div className="text-sm text-[#6B7A8F]">{result.description}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                className="p-2 bg-red-500/10 rounded-lg"
                whileHover={{ scale: 1.1 }}
              >
                <Shield size={24} className="text-red-400" />
              </motion.div>
              <h2 className="text-2xl font-bold text-white">The Challenge</h2>
            </div>

            <p className="text-lg text-[#B8C5D6] mb-8 leading-relaxed">{study.challenge}</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {study.challengePoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-[#111827]/50 border border-[#1F2937] rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-red-400/50 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-[#B8C5D6] text-sm">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-[#111827]/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {study.galleryImages.map((img, index) => (
              <motion.div
                key={index}
                className="relative aspect-video rounded-xl overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-sm text-white/80 bg-[#0B1120]/70 px-3 py-1 rounded-full">
                    {img.caption}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-gradient-to-b from-[#0B1120] to-[#111827]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <motion.div
                className="p-2 bg-emerald-500/10 rounded-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Zap size={24} className="text-emerald-400" />
              </motion.div>
              <h2 className="text-2xl font-bold text-white">Our Solution</h2>
            </div>

            <div className="space-y-4">
              {study.solution.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 p-5 bg-[#0B1120] border border-[#1F2937] rounded-xl hover:border-emerald-500/30 transition-colors group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle size={24} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  </motion.div>
                  <p className="text-[#B8C5D6] group-hover:text-white transition-colors">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 border-t border-[#1F2937]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-8 text-center">Project Highlights</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {study.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-[#1E3A5F] to-[#C9A961]/20 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Rocket size={28} className="text-[#C9A961]" />
                  </motion.div>
                  <h4 className="text-white font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-[#6B7A8F]">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      {study.testimonial && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-br from-[#1E3A5F]/30 to-[#C9A961]/10 border border-[#1E3A5F]/40 p-8 md:p-12 rounded-2xl overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-[#C9A961]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#1E3A5F]/20 rounded-full blur-3xl" />

              <motion.div
                className="text-6xl text-[#C9A961]/30 mb-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                "
              </motion.div>

              <blockquote className="text-xl md:text-2xl text-white italic mb-8 relative z-10">
                {study.testimonial.quote}
              </blockquote>

              <div className="flex items-center gap-4 relative z-10">
                <motion.div
                  className="w-14 h-14 bg-gradient-to-br from-[#1E3A5F] to-[#C9A961]/30 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <Users size={24} className="text-[#C9A961]" />
                </motion.div>
                <div>
                  <div className="text-white font-semibold text-lg">{study.testimonial.author}</div>
                  <div className="text-[#C9A961]">{study.testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Services Used */}
      <section className="py-12 border-t border-[#1F2937]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-white mb-6">Services Provided</h3>
          <div className="flex flex-wrap gap-3">
            {study.services.map((service, index) => (
              <motion.span
                key={service}
                className="px-5 py-2.5 bg-[#111827] border border-[#1F2937] text-[#B8C5D6] text-sm rounded-full hover:border-[#C9A961]/50 hover:text-white transition-all cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -2 }}
              >
                {service}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-12 border-t border-[#1F2937]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-white mb-8">Related Case Studies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {study.relatedStudies.map((related, index) => (
              <motion.div
                key={related.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/case-studies/${related.slug}`}
                  className="block bg-[#111827] border border-[#1F2937] p-6 rounded-xl hover:border-[#C9A961]/50 transition-all group"
                >
                  <span className="text-xs text-[#C9A961] mb-2 block">{related.category}</span>
                  <h4 className="text-lg font-semibold text-white group-hover:text-[#C9A961] transition-colors mb-4">
                    {related.title}
                  </h4>
                  <span className="inline-flex items-center gap-2 text-[#C9A961] text-sm group-hover:gap-3 transition-all">
                    Read case study
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1E3A5F]/20 via-[#0B1120] to-[#C9A961]/10 border-t border-[#1E3A5F]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Ready to achieve similar results?
            </motion.h2>
            <p className="text-lg text-[#B8C5D6] mb-10 max-w-2xl mx-auto">
              Let's discuss how Zentreks can help transform your business with proven strategies and AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="btn-primary inline-flex items-center">
                  Schedule Consultation
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/ai-readiness" className="btn-secondary inline-flex items-center">
                  Take AI Assessment
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
