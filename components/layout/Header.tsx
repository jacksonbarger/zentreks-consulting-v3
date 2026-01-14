"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { NAV_ITEMS, BUSINESS_INFO } from "@/lib/constants";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-[#231F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#C4251D] to-[#D4A574] rounded flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-semibold text-lg">Zentreks</span>
              <span className="block text-[#8A7F7F] text-xs">{BUSINESS_INFO.tagline}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative mega-menu-trigger"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-[#C4B8B8] hover:text-white transition-colors"
                >
                  {item.label}
                  {item.children && <ChevronDown size={14} />}
                </Link>

                {/* Mega Menu Dropdown */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-80 bg-[#1A1717] border border-[#231F1F] shadow-xl"
                      >
                        <div className="p-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block p-3 hover:bg-[#231F1F] transition-colors group"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-white font-medium group-hover:text-[#D4A574] transition-colors">
                                  {child.label}
                                </span>
                                <ArrowRight size={14} className="text-[#8A7F7F] group-hover:text-[#D4A574] transition-colors" />
                              </div>
                              <p className="text-sm text-[#8A7F7F] mt-1">{child.description}</p>
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-[#231F1F] p-4">
                          <Link
                            href={item.href}
                            className="text-[#D4A574] text-sm font-medium hover:text-white transition-colors flex items-center gap-2"
                          >
                            View all {item.label.toLowerCase()}
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-[#C4B8B8] hover:text-white transition-colors">
              <Search size={20} />
            </button>
            <Link href="/contact" className="hidden sm:block btn-primary text-sm py-2 px-4">
              Get Started
            </Link>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-[#C4B8B8] hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#1A1717] border-t border-[#231F1F]"
          >
            <nav className="max-w-7xl mx-auto px-4 py-6">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="mb-4">
                  <Link
                    href={item.href}
                    className="block text-white font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block text-[#8A7F7F] py-1 hover:text-[#D4A574] transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-[#231F1F]">
                <Link
                  href="/contact"
                  className="btn-primary w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
