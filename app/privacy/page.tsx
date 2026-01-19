"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 bg-[#1E3A5F]/10 border border-[#1E3A5F]/30 px-4 py-2 mb-6">
            <Shield size={16} className="text-[#C9A961]" />
            <span className="text-sm text-[#C9A961] font-medium">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-[#6B7A8F] mb-12">Last updated: January 14, 2026</p>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-[#B8C5D6]">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as when you fill out a contact
                  form, subscribe to our newsletter, or request a consultation. This may include your name,
                  email address, phone number, company name, and any other information you choose to provide.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Respond to your inquiries and provide requested services</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties
                  without your consent, except as necessary to provide our services or as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
                <p>
                  You have the right to access, correct, or delete your personal information. You may also
                  opt out of marketing communications at any time by clicking the unsubscribe link in our emails.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Cookies</h2>
                <p>
                  Our website uses cookies to enhance your browsing experience. You can control cookie
                  preferences through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:privacy@zentreks.com" className="text-[#C9A961] hover:text-white">
                    privacy@zentreks.com
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
