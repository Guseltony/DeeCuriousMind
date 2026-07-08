"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  Tag,
  Phone,
  Mail,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../shared/Section";
import SectionHeading from "../shared/SectionHeading";

interface HolidayClubData {
  title: string;
  description: string;
  flyerImage: string;
  dateRange?: string;
  hours?: string;
  location?: string;
  ages?: string;
  pricing?: string;
  formUrl?: string;
  status: string;
  slug?: string;
}

interface SummerClubSectionProps {
  clubs: HolidayClubData[];
  titleOverride?: string;
}

export default function SummerClubSection({ clubs, titleOverride }: SummerClubSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!clubs || clubs.length === 0) return null;

  const clubInfo = clubs[activeIndex];
  if (!clubInfo) return null;

  const isBookingOpen = clubInfo.status === "active";
  const badgeText =
    clubInfo.status === "active"
      ? "Booking Open"
      : clubInfo.status === "upcoming"
      ? "Upcoming Event"
      : "Past Event";

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % clubs.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + clubs.length) % clubs.length);
  };

  return (
    <Section background="light" id="summer-club">
      <SectionHeading
        title={titleOverride || "Holiday Club details"}
        subtitle="Get ready for another exciting holiday club adventure! Spaces are limited, so book now to secure your child's spot."
        badge={badgeText}
      />

      <div className="relative max-w-6xl xl:max-w-[1240px] 2xl:max-w-[1400px] 3xl:max-w-[1560px] mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left"
          >
            {/* Left Column: Flyer Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-[300px] h-[450px] sm:w-[350px] sm:h-[520px] rounded-2xl overflow-hidden shadow-lg border-8 border-white transition-transform duration-500 hover:scale-[1.02] bg-slate-100">
                {clubInfo.flyerImage ? (
                  <Image
                    src={clubInfo.flyerImage}
                    alt={`${clubInfo.title} Flyer`}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-500 font-semibold">
                    No Image Available
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Details & Action */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-black text-text-primary font-poppins leading-tight">
                  {clubInfo.title}
                </h3>
                <p className="text-sm sm:text-base text-text-secondary font-inter leading-relaxed whitespace-pre-line">
                  {clubInfo.description}
                </p>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {clubInfo.dateRange && (
                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <Calendar className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-text-primary font-poppins">When</h4>
                      <p className="text-xs sm:text-sm text-text-secondary font-inter">
                        {clubInfo.dateRange}
                      </p>
                    </div>
                  </div>
                )}

                {clubInfo.hours && (
                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-text-primary font-poppins">Hours</h4>
                      <p className="text-xs sm:text-sm text-text-secondary font-inter">
                        {clubInfo.hours}
                      </p>
                    </div>
                  </div>
                )}

                {clubInfo.location && (
                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-text-primary font-poppins">Where & Ages</h4>
                      <p className="text-xs sm:text-sm text-text-secondary font-inter">
                        {clubInfo.location} {clubInfo.ages ? `(Ages ${clubInfo.ages})` : ""}
                      </p>
                    </div>
                  </div>
                )}

                {clubInfo.pricing && (
                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <Tag className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-text-primary font-poppins">Pricing & Meals</h4>
                      <p className="text-xs sm:text-sm text-text-secondary font-inter">
                        {clubInfo.pricing}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Details */}
              <div className="flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-text-secondary font-inter">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-secondary" />
                  07840 066028
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-secondary" />
                  deescuriousminds@gmail.com
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                {clubInfo.formUrl && isBookingOpen && (
                  <a
                    href={clubInfo.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-hover text-white px-8 py-4 rounded-xl font-bold tracking-wide shadow-md hover:shadow-lg transition-all hover:translate-y-[-2px] cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 fill-current animate-pulse" />
                    Book Holiday Club Spot Now
                  </a>
                )}

                <Link
                  href="/holiday-club"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-slate-200 bg-white hover:bg-slate-50 text-text-primary px-8 py-4 rounded-xl font-bold tracking-wide transition-all hover:translate-y-[-2px] cursor-pointer"
                >
                  View All Holiday Clubs
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls (only shown if multiple active clubs exist) */}
        {clubs.length > 1 && (
          <div className="flex items-center justify-center gap-4 mt-12 relative z-20">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl border border-slate-100 bg-white shadow-sm hover:bg-slate-50 transition-all text-text-primary hover:scale-105 active:scale-95"
              aria-label="Previous holiday club"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Slider Dots */}
            <div className="flex gap-2">
              {clubs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === i ? "bg-primary w-6" : "bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Go to holiday club slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-xl border border-slate-100 bg-white shadow-sm hover:bg-slate-50 transition-all text-text-primary hover:scale-105 active:scale-95"
              aria-label="Next holiday club"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </Section>
  );
}
