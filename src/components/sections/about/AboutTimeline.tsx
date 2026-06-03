"use client";

import React, { useState } from "react";
import { Briefcase, GraduationCap, Heart, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../../shared/Section";
import SectionHeading from "../../shared/SectionHeading";

const timelineItems = [
  {
    role: "Founder & Lead Childminder",
    organization: "Dee's Curious Minds (Gillingham)",
    icon: Heart,
    color: "bg-indigo-500 text-white shadow-indigo-100",
    description:
      "Established a nurturing home-from-home childcare service offering EYFS-guided learning, curiosity-led play, sensory exploration, and bilingual support.",
  },
  {
    role: "After School Manager",
    organization: "Local Education Provider",
    icon: Briefcase,
    color: "bg-purple-500 text-white shadow-purple-100",
    description:
      "Led after-school programs, managing activities for multi-age school groups. Focused on social skills, cooperative game plans, positive behaviour support, and structured homework help.",
  },
  {
    role: "Nursery Officer & Nursery Nurse",
    organization: "Early Years & Nursery Centers",
    icon: Briefcase,
    color: "bg-green-500 text-white shadow-green-100",
    description:
      "Delivered early years education in nursery settings, designing arts & crafts, phonics sessions, and basic mathematics games aligned with the EYFS framework.",
  },
  {
    role: "NVQ Level 3 in Children's Care, Learning & Development",
    organization: "Accredited Professional Qualification",
    icon: GraduationCap,
    color: "bg-amber-500 text-white shadow-amber-100",
    description:
      "Acquired comprehensive training in pediatric first aid, childhood safety policies, physical and emotional development stages, and inclusive learning design.",
  },
];

export default function AboutTimeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <Section background="light" id="about-timeline" className="relative pt-16 pb-16 md:pt-20 md:pb-20">
      {/* Wave Dividers */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative block w-full h-[25px] md:h-[40px]" preserveAspectRatio="none">
          <path d="M0,0 L1440,0 L1440,40 C1080,15 720,15 360,40 L0,20 Z" fill="#FFFFFF" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative block w-full h-[25px] md:h-[40px]" preserveAspectRatio="none">
          <path d="M0,50 L1440,50 L1440,10 C1080,35 720,35 360,10 L0,30 Z" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Playful watermark doodles */}
      <div className="absolute top-20 right-10 text-primary/5 pointer-events-none -z-10 select-none">
        <Briefcase className="w-16 h-16 md:w-20 md:h-20 rotate-12" />
      </div>
      <div className="absolute bottom-20 left-10 text-secondary/5 pointer-events-none -z-10 select-none">
        <GraduationCap className="w-16 h-16 md:w-20 md:h-20 -rotate-12" />
      </div>

      <SectionHeading
        title="Experience & Qualifications"
        subtitle="A snapshot of Denise's 15+ years of dedicated professional career in early childhood care and education."
        badge="Career & Credentials"
      />

      <div className="relative max-w-2xl mx-auto pl-10 md:pl-16 text-left z-10">
        {/* Timeline Connector Line */}
        <div className="absolute left-[13px] md:left-[17px] top-2 bottom-2 w-[2px] bg-slate-200" />

        <div className="space-y-6">
          {timelineItems.map((item, idx) => {
            const IconComponent = item.icon;
            const isOpen = activeIndex === idx;

            return (
              <div key={idx} className="relative">
                {/* Timeline Icon Node absolute positioned on the line */}
                <div
                  onClick={() => toggleAccordion(idx)}
                  className={`absolute left-[-37px] md:[-49px] top-1.5 w-7 h-7 md:w-9 md:h-9 rounded-full border-2 border-white shadow-sm flex items-center justify-center z-20 cursor-pointer hover:scale-105 transition-transform ${
                    isOpen ? item.color : "bg-white text-text-secondary border-slate-200"
                  }`}
                  style={{ left: "-37px" }}
                >
                  <IconComponent className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </div>

                {/* Timeline Card Accordion */}
                <div
                  className={`bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-300 ${
                    isOpen ? "ring-2 ring-primary/10 shadow-md" : "hover:bg-slate-50/50"
                  }`}
                >
                  {/* Accordion Trigger Header */}
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full py-4 px-5 flex items-center justify-between gap-3 text-left font-poppins cursor-pointer"
                  >
                    <div className="space-y-1 pr-4">
                      <h4 className="text-sm sm:text-base font-bold text-text-primary leading-tight">
                        {item.role}
                      </h4>
                      <p className="text-[10px] sm:text-xs font-semibold text-primary/95 tracking-wide">
                        {item.organization}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-50 text-green-700 text-[9px] font-bold border border-green-100">
                        <CheckCircle2 className="w-2.5 h-2.5" />
                        Verified
                      </span>
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
                          {item.description}
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
