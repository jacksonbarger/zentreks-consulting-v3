"use client";

import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";
import { PROMO_BANNER } from "@/lib/constants";

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#0D0D0D] border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-2.5 relative">
          <Link
            href={PROMO_BANNER.href}
            className="flex items-center gap-3 text-sm hover:opacity-80 transition-opacity"
          >
            {/* Badge */}
            <span className="inline-flex items-center px-2.5 py-0.5 bg-[#C4251D] text-white text-xs font-semibold rounded-sm">
              {PROMO_BANNER.badge}
            </span>
            {/* Text */}
            <span className="text-white">
              {PROMO_BANNER.text}
            </span>
          </Link>

          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-0 p-1 text-[#8A7A7A] hover:text-white transition-colors"
            aria-label="Close banner"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
