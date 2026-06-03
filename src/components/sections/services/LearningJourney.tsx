"use client";

import React, { useState } from "react";
import { Search, Compass, Shield, GraduationCap, ChevronDown, ChevronUp, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../../shared/Section";
import SectionHeading from "../../shared/SectionHeading";

const journeyStages = [
  {
    icon: Search,
    title: "1. Exploration",
    subtitle: "Sensory & Physical Play",
    description: "Young toddlers interact with textures, sounds, and soft play layouts, establishing emotional security and primary muscle control.",
    color: "bg-indigo-500 text-white shadow-indigo-100",
  },
  {
    icon: Compass,
    title: "2. Discovery",
    subtitle: "Patterns & Phonics",
    description: "Children begin to identify shapes, sort colors, ask questions, and build active speech and language structures.",
    color: "bg-purple-500 text-white shadow-purple-100",
  },
  {
    icon: Shield,
    title: "3. Confidence",
    subtitle: "Self-Reliance & Social Skills",
    description: "Fostering independence in handwashing, toilet training, toy sharing, and using verbal empathy to handle feelings.",
    color: "bg-green-500 text-white shadow-green-100",
  },
  {
    icon: GraduationCap,
    title: "4. School Readiness",
    subtitle: "Structured EYFS Milestones",
    description: "Mastering phonetic sounds, pencil hold, basic numeracy, and structural concentration, readying kids for primary school.",
    color: "bg-amber-500 text-white shadow-amber-100",
  },
];

export default function LearningJourney() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <Section background="light" id="learning-journey" className="relative pt-16 pb-16 md:pt-20 md:pb-20 overflow-hidden">
      {/* Wave Dividers */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative block w-full h-[25px] md:h-[40px]" preserveAspectRatio="none">
          <path d="M0,0 L1440,0 L1440,20 C1200,50 960,10 720,30 C480,50 240,10 0,40 Z" fill="#FFFFFF" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative block w-full h-[25px] md:h-[40px]" preserveAspectRatio="none">
          <path d="M0,50 L1440,50 L1440,30 C1200,0 960,40 720,20 C480,0 240,40 0,10 Z" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Playful watermark doodles */}
      <div className="absolute top-24 left-10 text-primary/5 pointer-events-none -z-10 select-none">
        <Compass className="w-16 h-16 md:w-20 md:h-20 rotate-12" />
      </div>
      <div className="absolute bottom-20 right-10 text-secondary/5 pointer-events-none -z-10 select-none">
        <Sun className="w-16 h-16 md:w-20 md:h-20 -rotate-12" />
      </div>

      <SectionHeading
        title="Our Childcare Development Pathway"
        subtitle="We guide children through a connected learning journey, helping them grow from curious toddlers into confident school starters."
        badge="Development Flow"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative z-10">
        {journeyStages.map((stage, idx) => {
          const IconComponent = stage.icon;
          const isOpen = activeIndex === idx;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-85px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative group text-left"
            >
              {/* Card container */}
              <div
                className={`p-4 rounded-2xl shadow-sm transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                  isOpen
                    ? "border-primary bg-bg-light/40 ring-2 ring-primary/10 shadow-md"
                    : "border-slate-100 bg-white hover:bg-slate-50/50 hover:translate-y-[-2px]"
                }`}
                onClick={() => toggleAccordion(idx)}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-xl shrink-0 ${stage.color} shadow-sm`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold font-poppins uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isOpen ? "bg-primary text-white" : "text-slate-400 bg-slate-100"
                      }`}>
                        Stage {idx + 1}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-bold text-text-primary font-poppins mb-0.5">
                    {stage.title.replace(/^\d+\.\s*/, "")}
                  </h3>
                  <p className="text-[10px] font-bold text-primary/90 font-inter uppercase tracking-wide mb-2">
                    {stage.subtitle}
                  </p>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-inter pt-1">
                          {stage.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
