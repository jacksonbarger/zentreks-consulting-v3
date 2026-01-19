"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Users,
  Sparkles,
  Grid3X3,
  List,
} from "lucide-react";
import { EVENTS } from "@/lib/constants";
import EventsCalendar from "@/components/events/EventsCalendar";
import EventsFilter from "@/components/events/EventsFilter";

const EVENT_TYPE_LABELS = {
  workshop: "Workshop",
  conference: "Conference",
  networking: "Networking",
};

const EVENT_TYPE_COLORS = {
  workshop: "bg-emerald-500/20 text-emerald-400",
  conference: "bg-blue-500/20 text-blue-400",
  networking: "bg-purple-500/20 text-purple-400",
};

type ViewMode = "calendar" | "list";

export default function EventsPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [selectedMonth, setSelectedMonth] = useState("All Months");

  // Filter events based on search and filters
  const filteredEvents = useMemo(() => {
    return EVENTS.filter((event) => {
      // Search filter
      if (
        searchQuery &&
        !event.title.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Type filter
      if (
        selectedType !== "All Types" &&
        event.eventType.toLowerCase() !== selectedType.toLowerCase()
      ) {
        return false;
      }

      // Region filter
      if (selectedRegion !== "All Regions" && event.region !== selectedRegion) {
        return false;
      }

      // Month filter
      if (selectedMonth !== "All Months" && event.month !== selectedMonth) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedType, selectedRegion, selectedMonth]);

  const hasActiveFilters =
    !!searchQuery ||
    selectedType !== "All Types" ||
    selectedRegion !== "All Regions" ||
    selectedMonth !== "All Months";

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedType("All Types");
    setSelectedRegion("All Regions");
    setSelectedMonth("All Months");
  };

  // Featured event is the first event if no filters active, otherwise first filtered result
  const featuredEvent = filteredEvents[0];
  const otherEvents = filteredEvents.slice(1);

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
              <Calendar size={16} className="text-[#C9A961]" />
              <span className="text-sm text-[#C9A961] font-medium">Events</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="headline-italic font-light">AI</span> Events
              <span className="block text-gradient-gold">2026 Calendar</span>
            </h1>
            <p className="text-xl text-[#B8C5D6]">
              Connect with industry leaders, learn from AI experts, and discover
              the latest innovations at these upcoming conferences, summits, and
              networking events across the United States.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 border-b border-[#1F2937]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EventsFilter
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            selectedMonth={selectedMonth}
            setSelectedMonth={setSelectedMonth}
            onClearFilters={clearFilters}
            hasActiveFilters={hasActiveFilters}
          />
        </div>
      </section>

      {/* View Toggle */}
      <section className="py-6 border-b border-[#1F2937]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#6B7A8F]">
              Showing{" "}
              <span className="text-white font-medium">
                {filteredEvents.length}
              </span>{" "}
              {filteredEvents.length === 1 ? "event" : "events"}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#6B7A8F] mr-2">View:</span>
              <button
                onClick={() => setViewMode("calendar")}
                className={`flex items-center gap-2 px-4 py-2 text-sm transition-colors ${
                  viewMode === "calendar"
                    ? "bg-[#1E3A5F] text-white"
                    : "bg-[#111827] text-[#6B7A8F] hover:text-white border border-[#1F2937]"
                }`}
              >
                <Grid3X3 size={16} />
                <span className="hidden sm:inline">Calendar</span>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`flex items-center gap-2 px-4 py-2 text-sm transition-colors ${
                  viewMode === "list"
                    ? "bg-[#1E3A5F] text-white"
                    : "bg-[#111827] text-[#6B7A8F] hover:text-white border border-[#1F2937]"
                }`}
              >
                <List size={16} />
                <span className="hidden sm:inline">List</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar View */}
      <AnimatePresence mode="wait">
        {viewMode === "calendar" && (
          <motion.section
            key="calendar"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="py-8"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <EventsCalendar events={filteredEvents} />
            </div>
          </motion.section>
        )}

        {/* List View */}
        {viewMode === "list" && (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Featured Event */}
            {featuredEvent && (
              <section className="py-16 border-b border-[#1F2937]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="bg-gradient-to-r from-[#111827] to-[#1F2937] border border-[#1F2937] p-8 md:p-12 hover:border-[#1E3A5F]/50 transition-all group">
                      <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                          <div className="flex items-center gap-4 mb-4">
                            <span className="text-xs bg-[#C9A961]/20 text-[#C9A961] px-3 py-1 font-medium">
                              Featured
                            </span>
                            <span
                              className={`text-xs px-3 py-1 font-medium ${EVENT_TYPE_COLORS[featuredEvent.eventType]}`}
                            >
                              {EVENT_TYPE_LABELS[featuredEvent.eventType]}
                            </span>
                            {featuredEvent.isFree && (
                              <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 font-medium">
                                Free
                              </span>
                            )}
                          </div>
                          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#C9A961] transition-colors">
                            {featuredEvent.title}
                          </h2>
                          <p className="text-[#B8C5D6] mb-6">
                            {featuredEvent.description}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-[#6B7A8F] mb-6">
                            <span className="flex items-center gap-1">
                              <Calendar size={14} />
                              {featuredEvent.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={14} />
                              {featuredEvent.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin size={14} />
                              {featuredEvent.location}
                            </span>
                          </div>
                          <Link
                            href={featuredEvent.registrationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary inline-flex items-center"
                          >
                            Register Now
                            <ArrowRight size={18} className="ml-2" />
                          </Link>
                        </div>
                        <div className="hidden lg:flex items-center justify-center">
                          <div className="relative w-full aspect-video overflow-hidden border border-[#1F2937]">
                            {featuredEvent.image ? (
                              <Image
                                src={featuredEvent.image}
                                alt={featuredEvent.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-[#1E3A5F]/20 to-[#C9A961]/10 flex items-center justify-center">
                                <Sparkles
                                  size={80}
                                  className="text-[#C9A961]/30"
                                />
                              </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-l from-[#111827]/50 to-transparent z-10" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>
            )}

            {/* Events Grid */}
            <section className="py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {otherEvents.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherEvents.map((event, index) => (
                      <motion.article
                        key={event.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <div className="bg-[#111827] border border-[#1F2937] h-full hover:border-[#1E3A5F]/50 transition-all group flex flex-col overflow-hidden">
                          {/* Event Image */}
                          {event.image && (
                            <div className="relative h-40 overflow-hidden">
                              <Image
                                src={event.image}
                                alt={event.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent" />
                              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                                <span
                                  className={`text-xs px-2 py-1 font-medium ${EVENT_TYPE_COLORS[event.eventType]}`}
                                >
                                  {EVENT_TYPE_LABELS[event.eventType]}
                                </span>
                                {event.isFree && (
                                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 font-medium">
                                    Free
                                  </span>
                                )}
                              </div>
                            </div>
                          )}
                          <div className="p-6 flex flex-col flex-grow">
                            {!event.image && (
                              <div className="flex items-center gap-2 mb-3">
                                <span
                                  className={`text-xs px-2 py-1 font-medium ${EVENT_TYPE_COLORS[event.eventType]}`}
                                >
                                  {EVENT_TYPE_LABELS[event.eventType]}
                                </span>
                                {event.isFree && (
                                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 font-medium">
                                    Free
                                  </span>
                                )}
                              </div>
                            )}
                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#C9A961] transition-colors">
                              {event.title}
                            </h3>
                            <p className="text-sm text-[#6B7A8F] mb-4 line-clamp-3 flex-grow">
                              {event.description}
                            </p>
                            <div className="space-y-2 text-xs text-[#6B7A8F] mb-4">
                              <div className="flex items-center gap-2">
                                <Calendar size={12} />
                                <span>{event.date}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock size={12} />
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin size={12} />
                                <span>{event.location}</span>
                              </div>
                            </div>
                            <Link
                              href={event.registrationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-[#C9A961] hover:text-white transition-colors inline-flex items-center gap-1 mt-auto"
                            >
                              Learn More & Register
                              <ArrowRight size={14} />
                            </Link>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                ) : filteredEvents.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-16"
                  >
                    <Calendar
                      size={48}
                      className="mx-auto mb-4 text-[#6B7A8F]"
                    />
                    <h3 className="text-xl font-bold text-white mb-2">
                      No events found
                    </h3>
                    <p className="text-[#6B7A8F] mb-6">
                      Try adjusting your filters to find more events.
                    </p>
                    <button
                      onClick={clearFilters}
                      className="text-[#C9A961] hover:text-white transition-colors"
                    >
                      Clear all filters
                    </button>
                  </motion.div>
                ) : null}
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-16 bg-[#111827]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Users size={40} className="text-[#C9A961] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Want to stay updated?
            </h2>
            <p className="text-[#B8C5D6] mb-8">
              Subscribe to our newsletter to get notified about upcoming AI
              events and exclusive invitations to our own workshops and meetups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-[#0B1120] border border-[#1F2937] text-white placeholder-[#6B7A8F] focus:outline-none focus:border-[#1E3A5F]"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
                <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
