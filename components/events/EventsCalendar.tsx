"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  X,
  Sparkles,
} from "lucide-react";

interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  eventType: "conference" | "workshop" | "networking";
  registrationUrl: string;
  isFree: boolean;
  image?: string;
  region: string;
  month: string;
  startDate: string;
}

interface EventsCalendarProps {
  events: Event[];
}

const EVENT_TYPE_LABELS = {
  workshop: "Workshop",
  conference: "Conference",
  networking: "Networking",
};

const EVENT_TYPE_COLORS = {
  workshop: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  conference: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  networking: "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function EventsCalendar({ events }: EventsCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2, 1)); // Start at March 2026
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Get calendar days for current month
  const calendarDays = useMemo(() => {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const startingDayOfWeek = firstDayOfMonth.getDay();
    const daysInMonth = lastDayOfMonth.getDate();

    const days: (number | null)[] = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  }, [year, month]);

  // Get events for a specific date
  const getEventsForDate = (day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return events.filter((event) => {
      if (!event.startDate) return false;
      return event.startDate === dateStr;
    });
  };

  // Check if an event spans multiple days and includes this date
  const hasEventOnDate = (day: number) => {
    const currentDateNum = new Date(year, month, day).getTime();
    return events.some((event) => {
      if (!event.startDate) return false;
      const eventStart = new Date(event.startDate).getTime();
      // For multi-day events, check if date is in range
      const match = event.date.match(/(\w+)\s+(\d+)-(\d+)/);
      if (match) {
        const endDay = parseInt(match[3]);
        const startDay = parseInt(match[2]);
        const eventEnd = new Date(year, month, endDay).getTime();
        const eventStartDate = new Date(year, month, startDay).getTime();
        return currentDateNum >= eventStartDate && currentDateNum <= eventEnd;
      }
      return eventStart === currentDateNum;
    });
  };

  const navigateMonth = (direction: number) => {
    setCurrentDate(new Date(year, month + direction, 1));
  };

  const getEventsStartingOnDate = (day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return events.filter((event) => event.startDate === dateStr);
  };

  return (
    <div className="bg-[#111827] border border-[#1F2937] p-4 md:p-6">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigateMonth(-1)}
          className="p-2 hover:bg-[#1F2937] transition-colors"
        >
          <ChevronLeft size={20} className="text-[#B8C5D6]" />
        </button>
        <h2 className="text-xl md:text-2xl font-bold text-white">
          {MONTHS[month]} {year}
        </h2>
        <button
          onClick={() => navigateMonth(1)}
          className="p-2 hover:bg-[#1F2937] transition-colors"
        >
          <ChevronRight size={20} className="text-[#B8C5D6]" />
        </button>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAYS.map((day) => (
          <div
            key={day}
            className="text-center text-xs md:text-sm font-medium text-[#6B7A8F] py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((day, index) => {
          const dayEvents = day ? getEventsStartingOnDate(day) : [];
          const hasEvents = day ? hasEventOnDate(day) : false;

          return (
            <div
              key={index}
              className={`min-h-[80px] md:min-h-[100px] p-1 md:p-2 border border-[#1F2937] ${
                day ? "bg-[#0B1120]" : "bg-[#111827]"
              } ${hasEvents ? "cursor-pointer hover:border-[#C9A961]/50" : ""}`}
            >
              {day && (
                <>
                  <span
                    className={`text-xs md:text-sm ${
                      hasEvents ? "text-white font-medium" : "text-[#6B7A8F]"
                    }`}
                  >
                    {day}
                  </span>
                  <div className="mt-1 space-y-1">
                    {dayEvents.slice(0, 2).map((event, i) => (
                      <motion.button
                        key={i}
                        onClick={() => setSelectedEvent(event)}
                        className={`w-full text-left text-[10px] md:text-xs px-1 py-0.5 truncate border ${EVENT_TYPE_COLORS[event.eventType]}`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {event.title}
                      </motion.button>
                    ))}
                    {dayEvents.length > 2 && (
                      <span className="text-[10px] text-[#C9A961]">
                        +{dayEvents.length - 2} more
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Event Legend */}
      <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-[#1F2937]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500/20 border border-blue-500/30" />
          <span className="text-xs text-[#6B7A8F]">Conference</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-emerald-500/20 border border-emerald-500/30" />
          <span className="text-xs text-[#6B7A8F]">Workshop</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-purple-500/20 border border-purple-500/30" />
          <span className="text-xs text-[#6B7A8F]">Networking</span>
        </div>
      </div>

      {/* Event Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#111827] border border-[#1F2937] max-w-lg w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Image */}
              {selectedEvent.image ? (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent" />
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="absolute top-4 right-4 p-2 bg-[#0B1120]/80 hover:bg-[#0B1120] transition-colors"
                  >
                    <X size={20} className="text-white" />
                  </button>
                </div>
              ) : (
                <div className="relative h-32 bg-gradient-to-br from-[#1E3A5F]/20 to-[#C9A961]/10 flex items-center justify-center">
                  <Sparkles size={48} className="text-[#C9A961]/30" />
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="absolute top-4 right-4 p-2 bg-[#0B1120]/80 hover:bg-[#0B1120] transition-colors"
                  >
                    <X size={20} className="text-white" />
                  </button>
                </div>
              )}

              <div className="p-6">
                {/* Tags */}
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`text-xs px-2 py-1 font-medium ${EVENT_TYPE_COLORS[selectedEvent.eventType]}`}
                  >
                    {EVENT_TYPE_LABELS[selectedEvent.eventType]}
                  </span>
                  {selectedEvent.isFree && (
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 font-medium">
                      Free
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {selectedEvent.title}
                </h3>

                {/* Description */}
                <p className="text-[#B8C5D6] text-sm mb-4">
                  {selectedEvent.description}
                </p>

                {/* Event Details */}
                <div className="space-y-2 text-sm text-[#6B7A8F] mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-[#C9A961]" />
                    <span>{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-[#C9A961]" />
                    <span>{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-[#C9A961]" />
                    <span>{selectedEvent.location}</span>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={selectedEvent.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center w-full justify-center"
                >
                  Register Now
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
