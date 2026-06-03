"use client";

import React, { useState } from "react";
import { Smile, BookOpen, TreePine, Palette, Users, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../../shared/Section";
import SectionHeading from "../../shared/SectionHeading";

const activities = [
  {
    icon: Smile,
    title: "Morning Welcome & Free Play",
    description: "Welcoming kids with warmth as they settle in. Children choose their own starting activities, from Montessori puzzles to sensory boxes, easing separation transitions.",
    focus: "Comfort & Independence",
    color: "bg-indigo-500 text-white shadow-indigo-100",
  },
  {
    icon: BookOpen,
    title: "Focused Early Learning Circle",
    description: "Age-appropriate group sessions based on EYFS framework, covering phonics, vocabulary games, counting structures, and storytime hours.",
    focus: "Cognitive & Language skills",
    color: "bg-purple-50 text-white shadow-purple-100",
  },
  {
    icon: TreePine,
    title: "Sensory Outdoor & Nature Exploration",
    description: "Daily fresh air time in our secure play garden or local parks. We learn about plants, count leaves, watch insects, and engage in gross motor play.",
    focus: "Physical Health & Nature Curiosity",
    color: "bg-green-500 text-white shadow-green-100",
  },
  {
    icon: Palette,
    title: "Creative Arts & Messy Play",
    description: "Painting, playdough, cutting tasks, basic cookery prep, or clay sculpting. The focus is entirely on process exploration and fine motor muscle control.",
    focus: "Creativity & Motor Coordination",
    color: "bg-rose-50 text-white shadow-rose-100",
  },
  {
    icon: Users,
    title: "Social Snack & Cooperative Play",
    description: "Sharing healthy snack plates, practicing tabletop manners, playing board games, and singing collaborative rhyme-tunes to build warm social relationships.",
    focus: "Social Integration & Empathy",
    color: "bg-amber-50 text-white shadow-amber-100",
  },
];

export default function DailyActivities() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <Section background="white" id="daily-activities" className="relative py-8 md:py-12">
      {/* Playful watermark doodles */}
      <div className="absolute top-20 right-10 text-primary/5 pointer-events-none -z-10 select-none">
        <Smile className="w-16 h-16 md:w-20 md:h-20 rotate-12" />
      </div>
      <div className="absolute bottom-20 left-10 text-secondary/5 pointer-events-none -z-10 select-none">
        <Users className="w-16 h-16 md:w-20 md:h-20 -rotate-12" />
      </div>

      <SectionHeading
        title="Our Daily Flow of Activities"
        subtitle="We follow a responsive routine that balances child-led playing, structured learning, fresh air, and peer social bonding."
        badge="A Typical Day"
      />

      <div className="relative max-w-2xl mx-auto pl-10 md:pl-16 text-left z-10">
        {/* Timeline Connector Line */}
        <div className="absolute left-[13px] md:left-[17px] top-2 bottom-2 w-[2px] bg-slate-200" />

        <div className="space-y-6">
          {activities.map((act, idx) => {
            const IconComponent = act.icon;
            const isOpen = activeIndex === idx;

            return (
              <div key={idx} className="relative">
                {/* Timeline Icon Node absolute positioned on the line */}
                <div
                  onClick={() => toggleAccordion(idx)}
                  className={`absolute left-[-37px] md:left-[-49px] top-1.5 w-7 h-7 md:w-9 md:h-9 rounded-full border-2 border-white shadow-sm flex items-center justify-center z-20 cursor-pointer hover:scale-105 transition-transform ${
                    isOpen ? act.color : "bg-white text-text-secondary border-slate-200"
                  }`}
                  style={{ left: "-37px" }}
                >
                  <IconComponent className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </div>

                {/* Timeline Card Accordion */}
                <div
                  className={`rounded-2xl shadow-sm overflow-hidden transition-all duration-300 border ${
                    isOpen
                      ? "border-primary bg-bg-light/40 ring-2 ring-primary/10 shadow-md"
                      : "border-slate-100 bg-white hover:bg-slate-50/50"
                  }`}
                >
                  {/* Accordion Trigger Header */}
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full py-4 px-5 flex items-center justify-between gap-3 text-left font-poppins cursor-pointer animate-none"
                  >
                    <div className="space-y-1 pr-4">
                      <h4 className="text-sm sm:text-base font-bold text-text-primary leading-tight">
                        {act.title}
                      </h4>
                      <p className="text-[10px] sm:text-xs font-semibold text-primary/95 tracking-wide">
                        {act.focus}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                  </button>

                  {/* Accordion Content body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-4 border-t border-slate-50 pt-3 text-xs sm:text-sm text-text-secondary leading-relaxed font-inter">
                          {act.description}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
