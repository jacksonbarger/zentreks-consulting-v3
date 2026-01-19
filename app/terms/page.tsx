"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 bg-[#1E3A5F]/10 border border-[#1E3A5F]/30 px-4 py-2 mb-6">
            <FileText size={16} className="text-[#C9A961]" />
            <span className="text-sm text-[#C9A961] font-medium">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Terms of Service</h1>
          <p className="text-[#6B7A8F] mb-12">Last updated: January 14, 2026</p>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-[#B8C5D6]">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using the Zentreks Consulting website and services, you accept and agree
                  to be bound by these Terms of Service. If you do not agree to these terms, please do not
                  use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
                <p>
                  Zentreks Consulting provides strategic consulting, AI integration, workflow optimization,
                  and digital transformation services. The specific terms of any engagement will be detailed
                  in a separate agreement between Zentreks and the client.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
                <p>
                  All content on this website, including text, graphics, logos, and images, is the property
                  of Zentreks Consulting and is protected by intellectual property laws. You may not
                  reproduce, distribute, or create derivative works without our express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Confidentiality</h2>
                <p>
                  We treat all client information as confidential. Our consultants are bound by strict
                  confidentiality agreements. Specific confidentiality terms will be included in individual
                  engagement agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
                <p>
                  Zentreks Consulting shall not be liable for any indirect, incidental, special, or
                  consequential damages arising from the use of our website or services. Our total liability
                  shall not exceed the fees paid for the specific services giving rise to the claim.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Disclaimer</h2>
                <p>
                  The information on this website is provided for general informational purposes only and
                  does not constitute professional advice. Each business situation is unique, and you should
                  consult with qualified professionals before making business decisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Governing Law</h2>
                <p>
                  These Terms of Service shall be governed by and construed in accordance with the laws of
                  the State of New York, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms of Service at any time. Changes will be
                  effective immediately upon posting to this website. Your continued use of our services
                  constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Contact</h2>
                <p>
                  For questions about these Terms of Service, please contact us at{" "}
                  <a href="mailto:legal@zentreks.com" className="text-[#C9A961] hover:text-white">
                    legal@zentreks.com
                  </a>
                </p>
              </section>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#1F2937]">
            <Link href="/" className="text-[#C9A961] hover:text-white transition-colors">
              ← Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
