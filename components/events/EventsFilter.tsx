"use client";

import { motion } from "framer-motion";
import { Search, X, MapPin, Calendar, Tag, Filter } from "lucide-react";
import { EVENT_REGIONS, EVENT_MONTHS, EVENT_TYPES } from "@/lib/constants";

interface EventsFilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedType: string;
  setSelectedType: (type: string) => void;
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
  selectedMonth: string;
  setSelectedMonth: (month: string) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

export default function EventsFilter({
  searchQuery,
  setSearchQuery,
  selectedType,
  setSelectedType,
  selectedRegion,
  setSelectedRegion,
  selectedMonth,
  setSelectedMonth,
  onClearFilters,
  hasActiveFilters,
}: EventsFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-[#111827] border border-[#1F2937] p-4 md:p-6"
    >
      {/* Search Input */}
      <div className="relative mb-4">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7A8F]"
        />
        <input
          type="text"
          placeholder="Search events by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-10 py-3 bg-[#0B1120] border border-[#1F2937] text-white placeholder-[#6B7A8F] focus:outline-none focus:border-[#1E3A5F] transition-colors"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7A8F] hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Filter Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Event Type Filter */}
        <div>
          <label className="flex items-center gap-2 text-xs text-[#6B7A8F] mb-2 font-medium">
            <Tag size={14} />
            Event Type
          </label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full px-3 py-2.5 bg-[#0B1120] border border-[#1F2937] text-white focus:outline-none focus:border-[#1E3A5F] transition-colors appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B7A8F' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 12px center",
            }}
          >
            {EVENT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Region Filter */}
        <div>
          <label className="flex items-center gap-2 text-xs text-[#6B7A8F] mb-2 font-medium">
            <MapPin size={14} />
            Region
          </label>
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="w-full px-3 py-2.5 bg-[#0B1120] border border-[#1F2937] text-white focus:outline-none focus:border-[#1E3A5F] transition-colors appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B7A8F' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 12px center",
            }}
          >
            {EVENT_REGIONS.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        {/* Month Filter */}
        <div>
          <label className="flex items-center gap-2 text-xs text-[#6B7A8F] mb-2 font-medium">
            <Calendar size={14} />
            Month
          </label>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="w-full px-3 py-2.5 bg-[#0B1120] border border-[#1F2937] text-white focus:outline-none focus:border-[#1E3A5F] transition-colors appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B7A8F' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 12px center",
            }}
          >
            {EVENT_MONTHS.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Clear Filters & Results Count */}
      {hasActiveFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="flex items-center justify-between mt-4 pt-4 border-t border-[#1F2937]"
        >
          <div className="flex items-center gap-2">
            <Filter size={14} className="text-[#C9A961]" />
            <span className="text-sm text-[#6B7A8F]">Filters active</span>
          </div>
          <button
            onClick={onClearFilters}
            className="flex items-center gap-2 text-sm text-[#C9A961] hover:text-white transition-colors"
          >
            <X size={14} />
            Clear All Filters
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
