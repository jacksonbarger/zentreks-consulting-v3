"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import { BUSINESS_INFO, FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column - Updated colors */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img
                src="/images/zentreks-logo.png"
                alt="Zentreks Consulting"
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-[#8A7A7A] mb-6 max-w-sm">
              {BUSINESS_INFO.description}. We bring enterprise-level expertise and proven strategies to technology companies ready for transformation.
            </p>
            {/* Social Links - Updated colors */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#141414] rounded flex items-center justify-center text-[#8A7A7A] hover:text-[#D4A574] hover:bg-[#1E1E1E] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#141414] rounded flex items-center justify-center text-[#8A7A7A] hover:text-[#D4A574] hover:bg-[#1E1E1E] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#141414] rounded flex items-center justify-center text-[#8A7A7A] hover:text-[#D4A574] hover:bg-[#1E1E1E] transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Services - Updated colors */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#8A7A7A] hover:text-[#D4A574] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company - Updated colors */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#8A7A7A] hover:text-[#D4A574] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources - Updated colors */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#8A7A7A] hover:text-[#D4A574] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Updated with "Since 2008" */}
      <div className="border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#8A7A7A] text-sm">
              &copy; {BUSINESS_INFO.foundedYear} - {currentYear} {BUSINESS_INFO.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              {FOOTER_LINKS.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#8A7A7A] hover:text-[#D4A574] transition-colors text-sm"
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
