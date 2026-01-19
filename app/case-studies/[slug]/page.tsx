"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle, TrendingUp, Users, Clock } from "lucide-react";
import { notFound } from "next/navigation";

const CASE_STUDIES: Record<string, {
  title: string;
  category: string;
  industry: string;
  duration: string;
  image: string;
  description: string;
  challenge: string;
  solution: string[];
  results: { value: string; label: string; description: string }[];
  testimonial: { quote: string; author: string; role: string };
  services: string[];
  relatedStudies: { title: string; slug: string }[];
}> = {
  "healthcare-ai": {
    title: "How a healthcare provider reduced costs by 40% with AI",
    category: "AI Integration",
    industry: "Healthcare",
    duration: "18 months",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
    description: "A comprehensive AI implementation that transformed patient care and operational efficiency across a 12-hospital system.",
    challenge: "A major regional healthcare system with 12 hospitals and over 200 outpatient facilities was struggling with rising operational costs, inconsistent patient outcomes, and long wait times for diagnostic results. Manual processes in radiology and pathology departments created bottlenecks, while fragmented data systems prevented clinicians from accessing comprehensive patient information at the point of care. The organization needed to modernize its operations while maintaining the highest standards of patient safety and care quality.",
    solution: [
      "Deployed AI-powered diagnostic imaging analysis across all radiology departments, enabling automated preliminary readings that prioritize urgent cases and reduce time-to-diagnosis by 60%.",
      "Implemented a unified patient data platform that aggregates information from all facilities, giving clinicians real-time access to complete patient histories, lab results, and treatment records.",
      "Created predictive models for patient flow optimization, enabling better resource allocation and reducing emergency department wait times by 35%.",
      "Established a Center of Excellence for AI in Healthcare to ensure ongoing innovation, governance, and best practice sharing across the system.",
      "Developed comprehensive training programs to ensure clinical staff could effectively work with AI tools while maintaining appropriate oversight of automated decisions."
    ],
    results: [
      { value: "40%", label: "Cost Reduction", description: "Overall operational cost savings through efficiency gains and optimized resource utilization" },
      { value: "60%", label: "Faster Diagnostics", description: "Reduction in time from imaging to preliminary diagnosis, enabling faster treatment decisions" },
      { value: "25%", label: "Patient Satisfaction", description: "Improvement in patient satisfaction scores, driven by reduced wait times and better communication" }
    ],
    testimonial: {
      quote: "Zentreks helped us see AI not as a replacement for our clinical teams, but as a powerful tool that allows them to focus on what matters most: patient care. The results have exceeded our expectations.",
      author: "Dr. Rebecca Martinez",
      role: "Chief Medical Officer"
    },
    services: ["AI Integration", "Digital Transformation", "Change Management", "Data Architecture"],
    relatedStudies: [
      { title: "Manufacturing efficiency gains of 60% through automation", slug: "manufacturing-automation" },
      { title: "Enterprise digital transformation at scale", slug: "enterprise-digital" }
    ]
  },
  "fintech-growth": {
    title: "Scaling a fintech startup from Series A to IPO",
    category: "Strategy",
    industry: "Financial Services",
    duration: "36 months",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    description: "Strategic guidance that helped a financial technology company achieve successful market expansion and public listing.",
    challenge: "A promising fintech startup had just closed its Series A funding and faced the challenge of scaling rapidly while maintaining the product quality and customer focus that had driven their early success. The founders needed to expand into new markets, build enterprise-grade infrastructure, attract top talent, and establish the governance structures required for a future public offering—all while competing against well-funded incumbents and other fast-moving startups.",
    solution: [
      "Developed a comprehensive growth strategy that prioritized market expansion sequentially, focusing resources on winnable markets before moving to more competitive territories.",
      "Designed and implemented scalable technology architecture that could support 100x growth without requiring fundamental rebuilds, reducing technical debt and accelerating feature development.",
      "Created a talent acquisition and retention strategy that helped the company grow from 50 to 500 employees while maintaining cultural cohesion and high performance standards.",
      "Established board-level governance structures, financial controls, and reporting systems that exceeded IPO requirements, building credibility with investors throughout the journey.",
      "Guided the leadership team through three additional funding rounds, helping them navigate investor relationships and optimize valuation at each stage."
    ],
    results: [
      { value: "5x", label: "Revenue Growth", description: "Annual recurring revenue increased 5x from Series A to IPO, demonstrating sustainable business model" },
      { value: "40", label: "Countries Expanded", description: "Successfully launched operations in 40 countries across North America, Europe, and Asia Pacific" },
      { value: "$2B", label: "IPO Valuation", description: "Achieved $2 billion valuation at IPO, representing top-decile performance for fintech sector" }
    ],
    testimonial: {
      quote: "Zentreks was with us every step of the way, from scrappy startup to public company. Their strategic guidance helped us make the right decisions at critical moments, and their operational expertise helped us execute flawlessly.",
      author: "David Chen",
      role: "Co-founder & CEO"
    },
    services: ["Strategy Consulting", "Growth Strategy", "Organizational Design", "IPO Readiness"],
    relatedStudies: [
      { title: "Enterprise digital transformation at scale", slug: "enterprise-digital" },
      { title: "How a healthcare provider reduced costs by 40% with AI", slug: "healthcare-ai" }
    ]
  },
  "manufacturing-automation": {
    title: "Manufacturing efficiency gains of 60% through automation",
    category: "Workflow Optimization",
    industry: "Manufacturing",
    duration: "24 months",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&q=80",
    description: "Process optimization and intelligent automation that revolutionized production capabilities for a global manufacturer.",
    challenge: "A global industrial manufacturer with 15 production facilities was losing market share to competitors who had invested heavily in automation and Industry 4.0 capabilities. Quality inconsistencies across facilities, high scrap rates, and long changeover times were eroding margins. The company needed to modernize its manufacturing operations while minimizing disruption to current production commitments and addressing workforce concerns about automation.",
    solution: [
      "Conducted comprehensive assessment of all 15 facilities to identify automation opportunities with the highest ROI potential, prioritizing quick wins that would build momentum and fund larger initiatives.",
      "Deployed IoT sensor networks and real-time monitoring systems that provide visibility into equipment performance, enabling predictive maintenance and reducing unplanned downtime by 70%.",
      "Implemented collaborative robots (cobots) in high-volume assembly operations, augmenting human workers rather than replacing them and improving both productivity and ergonomics.",
      "Created digital twins of critical production lines, enabling simulation-based optimization and virtual validation of process changes before physical implementation.",
      "Developed workforce reskilling programs that prepared employees for new roles in automated facilities, resulting in zero involuntary layoffs while improving job satisfaction."
    ],
    results: [
      { value: "60%", label: "Efficiency Gain", description: "Overall equipment effectiveness improved by 60%, driven by reduced downtime and faster changeovers" },
      { value: "45%", label: "Cost Reduction", description: "Manufacturing cost per unit decreased by 45% through automation and waste reduction" },
      { value: "99.2%", label: "Quality Rate", description: "First-pass quality rate improved to 99.2%, virtually eliminating rework and scrap costs" }
    ],
    testimonial: {
      quote: "We were skeptical that we could achieve Industry 4.0 transformation without massive workforce disruption. Zentreks showed us how to automate intelligently, keeping our people at the center while dramatically improving our competitiveness.",
      author: "Michael Torres",
      role: "VP of Global Operations"
    },
    services: ["Workflow Optimization", "AI Integration", "Change Management", "Digital Transformation"],
    relatedStudies: [
      { title: "How a healthcare provider reduced costs by 40% with AI", slug: "healthcare-ai" },
      { title: "Enterprise digital transformation at scale", slug: "enterprise-digital" }
    ]
  },
  "enterprise-digital": {
    title: "Enterprise digital transformation at scale",
    category: "Digital Transformation",
    industry: "Technology",
    duration: "30 months",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    description: "Modernizing legacy systems for a Fortune 500 company across 40 countries while maintaining business continuity.",
    challenge: "A Fortune 500 technology company with operations in 40 countries was burdened by decades of accumulated technical debt. Legacy systems that had been patched and extended over 30 years were increasingly unstable, expensive to maintain, and unable to support new business requirements. Previous modernization attempts had failed, and the organization was losing ground to more agile competitors. The challenge was to execute a comprehensive transformation while keeping the business running and serving millions of customers without interruption.",
    solution: [
      "Developed a phased transformation roadmap that prioritized systems based on business criticality and modernization complexity, enabling quick wins while managing risk for core systems.",
      "Implemented a strangler pattern migration approach that allowed legacy and modern systems to coexist, gradually shifting functionality to new platforms without big-bang cutover risks.",
      "Established cloud-native architecture standards and a platform engineering team that accelerated development across all business units, reducing time-to-market for new features by 70%.",
      "Created comprehensive data migration and validation frameworks that ensured data integrity throughout the transition, with zero data loss across billions of records.",
      "Built internal capabilities through knowledge transfer and training, ensuring the organization could sustain and extend the transformation without ongoing external dependency."
    ],
    results: [
      { value: "40", label: "Countries Transformed", description: "Successfully modernized operations across all 40 countries with unified global platform" },
      { value: "70%", label: "Cost Reduction", description: "IT infrastructure costs reduced by 70% through cloud migration and legacy retirement" },
      { value: "3x", label: "Faster Time-to-Market", description: "New feature development accelerated 3x through modern architecture and DevOps practices" }
    ],
    testimonial: {
      quote: "After two failed transformation attempts, we were skeptical anyone could help us modernize without disrupting our business. Zentreks delivered what others couldn't—a complete transformation that our customers never noticed because the service just kept getting better.",
      author: "Sarah Kim",
      role: "Chief Technology Officer"
    },
    services: ["Digital Transformation", "Cloud Migration", "Enterprise Architecture", "Change Management"],
    relatedStudies: [
      { title: "Scaling a fintech startup from Series A to IPO", slug: "fintech-growth" },
      { title: "Manufacturing efficiency gains of 60% through automation", slug: "manufacturing-automation" }
    ]
  }
};

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = CASE_STUDIES[params.slug];

  if (!study) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0B1120] pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-12 border-b border-[#1F2937]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Link */}
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-[#6B7A8F] hover:text-[#C9A961] transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Case Studies
            </Link>

            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-xs bg-[#1E3A5F]/20 text-[#1E3A5F] px-3 py-1 font-medium">
                {study.category}
              </span>
              <span className="text-xs text-[#6B7A8F]">{study.industry}</span>
              <span className="flex items-center gap-1 text-sm text-[#6B7A8F]">
                <Clock size={14} />
                {study.duration} engagement
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {study.title}
            </h1>

            <p className="text-xl text-[#B8C5D6]">{study.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-video rounded-lg overflow-hidden"
          >
            <Image
              src={study.image}
              alt={study.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/50 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-12 border-b border-[#1F2937]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <TrendingUp size={24} className="text-[#C9A961]" />
              Key Results
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {study.results.map((result, index) => (
                <div
                  key={index}
                  className="bg-[#111827] border border-[#1F2937] p-6 rounded-lg"
                >
                  <div className="text-4xl font-bold text-gradient-gold mb-2">
                    {result.value}
                  </div>
                  <div className="text-white font-semibold mb-2">{result.label}</div>
                  <div className="text-sm text-[#6B7A8F]">{result.description}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">The Challenge</h2>
            <p className="text-[#B8C5D6] text-lg leading-relaxed">{study.challenge}</p>
          </motion.div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-12 bg-[#111827]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-white mb-8">Our Solution</h2>
            <div className="space-y-6">
              {study.solution.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle size={24} className="text-[#C9A961] flex-shrink-0 mt-1" />
                  <p className="text-[#B8C5D6]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-r from-[#1E3A5F]/20 to-[#C9A961]/10 border border-[#1E3A5F]/30 p-8 md:p-12 rounded-lg"
          >
            <blockquote className="text-xl md:text-2xl text-white italic mb-6">
              "{study.testimonial.quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1E3A5F] rounded-full flex items-center justify-center">
                <Users size={24} className="text-[#C9A961]" />
              </div>
              <div>
                <div className="text-white font-semibold">{study.testimonial.author}</div>
                <div className="text-[#6B7A8F]">{study.testimonial.role}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Used */}
      <section className="py-12 border-t border-[#1F2937]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-white mb-6">Services Provided</h3>
          <div className="flex flex-wrap gap-3">
            {study.services.map((service) => (
              <span
                key={service}
                className="px-4 py-2 bg-[#111827] border border-[#1F2937] text-[#B8C5D6] text-sm"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-12 border-t border-[#1F2937]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-white mb-8">Related Case Studies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {study.relatedStudies.map((related) => (
              <Link
                key={related.slug}
                href={`/case-studies/${related.slug}`}
                className="block bg-[#111827] border border-[#1F2937] p-6 hover:border-[#1E3A5F]/50 transition-all group"
              >
                <h4 className="text-lg font-semibold text-white group-hover:text-[#C9A961] transition-colors">
                  {related.title}
                </h4>
                <span className="inline-flex items-center gap-1 text-[#C9A961] text-sm mt-4">
                  Read case study
                  <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#1E3A5F]/10 to-[#C9A961]/10 border-t border-[#1E3A5F]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to achieve similar results?
          </h2>
          <p className="text-[#B8C5D6] mb-8">
            Let's discuss how we can help transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Schedule Consultation
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link href="/ai-readiness" className="btn-secondary">
              Take AI Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
