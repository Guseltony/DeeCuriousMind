"use client";

import React, { useState } from "react";
import { Compass, MessageCircle, BarChart3, Heart, Palette, Monitor, ChefHat, Sun, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../../shared/Section";
import SectionHeading from "../../shared/SectionHeading";

const pathwaySteps = [
  {
    icon: Compass,
    title: "Curiosity Approach",
    description: "Encouraging child-led discovery by replacing plastic toys with natural, recycled, and open-ended items.",
    color: "bg-indigo-500 text-white shadow-indigo-100",
  },
  {
    icon: MessageCircle,
    title: "Language Rich Environment",
    description: "Continuous dialogue, bilingual English/Hindi immersion, and storytelling to boost vocabulary and communication skills.",
    color: "bg-purple-500 text-white shadow-purple-100",
  },
  {
    icon: BarChart3,
    title: "Early Maths Integration",
    description: "Embedding measuring, counting, and pattern sorting into daily routines, making logic learning intuitive.",
    color: "bg-green-500 text-white shadow-green-100",
  },
  {
    icon: Heart,
    title: "Mindfulness & Self-Regulation",
    description: "Teaching breathing techniques and using sensory bottles to help children identify emotions and self-soothe.",
    colorStyle: "bg-amber-500 text-white shadow-amber-100",
  },
  {
    icon: Palette,
    title: "Arts & Fine Motor Crafts",
    description: "Engaging in clay work, painting, and scissors play to build finger strength and coordination.",
    colorStyle: "bg-rose-500 text-white shadow-rose-100",
  },
  {
    icon: Monitor,
    title: "Digital Literacy",
    description: "Providing controlled introduction to age-appropriate learning applications and basic problem-solving games.",
    colorStyle: "bg-teal-500 text-white shadow-teal-100",
  },
  {
    icon: ChefHat,
    title: "Cookery & Life Skills",
    description: "Measuring ingredients, safe vegetable washing, and stirring tasks to build independence and food awareness.",
    colorStyle: "bg-indigo-500 text-white shadow-indigo-100",
  },
];

export default function AboutPathway() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <Section background="light" id="about-pathway" className="relative pt-16 pb-16 md:pt-20 md:pb-20">
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
        title="Our Learning Approach"
        subtitle="A connected curriculum designed to build confidence, practical life skills, and academic readiness."
        badge="How Children Learn"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
        {pathwaySteps.map((step, idx) => {
          const IconComponent = step.icon;
          const itemBgColor = step.colorStyle || step.color || "bg-primary text-white";
          const isOpen = activeIndex === idx;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-65px" }}
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
                    <div className={`p-2.5 rounded-xl shrink-0 ${itemBgColor} shadow-sm`}>
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
                  <h3 className="text-base font-bold text-text-primary font-poppins mb-1">
                    {step.title}
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-inter pt-1">
                          {step.description}
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
