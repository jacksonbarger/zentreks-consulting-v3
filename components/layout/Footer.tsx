"use client";

import Link from "next/link";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import { BUSINESS_INFO, FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0D0D] border-t border-[#231F1F]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#C4251D] to-[#D4A574] rounded flex items-center justify-center">
                <span className="text-white font-bold text-2xl">Z</span>
              </div>
              <div>
                <span className="text-white font-semibold text-xl">Zentreks</span>
                <span className="block text-[#8A7F7F] text-sm">{BUSINESS_INFO.tagline}</span>
              </div>
            </Link>
            <p className="text-[#8A7F7F] mb-6 max-w-sm">
              {BUSINESS_INFO.description}. We bring enterprise-level expertise and AI-native strategies to businesses ready for transformation.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1A1717] rounded flex items-center justify-center text-[#8A7F7F] hover:text-[#D4A574] hover:bg-[#231F1F] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1A1717] rounded flex items-center justify-center text-[#8A7F7F] hover:text-[#D4A574] hover:bg-[#231F1F] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1A1717] rounded flex items-center justify-center text-[#8A7F7F] hover:text-[#D4A574] hover:bg-[#231F1F] transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#8A7F7F] hover:text-[#D4A574] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#8A7F7F] hover:text-[#D4A574] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#8A7F7F] hover:text-[#D4A574] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#231F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#8A7F7F] text-sm">
              &copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              {FOOTER_LINKS.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#8A7F7F] hover:text-[#D4A574] transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
