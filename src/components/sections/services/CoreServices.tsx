"use client";

import React from "react";
import { Heart, TreePine, Palette, BookOpen, Award, Check } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../../shared/Section";
import SectionHeading from "../../shared/SectionHeading";

const coreServices = [
  {
    icon: Heart,
    title: "Full-Time Daycare & Naps",
    description: "Loving full-day care matching your child's home routines for feeding, nap time, and comfort, ensuring they feel secure and valued.",
    benefits: ["Cozy nap routines", "Healthy home-cooked meals", "Flexible settling-in support"],
    color: "bg-indigo-50 border-indigo-100 text-indigo-600",
    iconBg: "bg-indigo-500 text-white",
  },
  {
    icon: BookOpen,
    title: "Play-Based Reading & Phonics",
    description: "Fun, story-centered activities and guided phonics designed to naturally build early vocabulary and meet milestones.",
    benefits: ["Phonics & pre-writing", "Language tracking", "Bilingual communication support"],
    color: "bg-rose-50 border-rose-100 text-rose-600",
    iconBg: "bg-rose-500 text-white",
  },
  {
    icon: Palette,
    title: "Creative Arts & Messy Play",
    description: "Process-driven art sessions including finger-painting, molding clay, simple baking, and musical circle games.",
    benefits: ["Fine motor skills focus", "Sensory messy play tables", "Rhythms & nursery rhymes"],
    color: "bg-violet-50 border-violet-100 text-violet-600",
    iconBg: "bg-violet-500 text-white",
  },
  {
    icon: TreePine,
    title: "Sensory Nature Explorations",
    description: "Daily backyard play, sensory planting, leaf collection walks, and insect watching to inspire a love of nature.",
    benefits: ["Secure private garden", "Planting & gardening", "Gross motor activities"],
    color: "bg-emerald-50 border-emerald-100 text-emerald-600",
    iconBg: "bg-emerald-500 text-white",
  },
  {
    icon: Award,
    title: "EYFS School Readiness",
    description: "Preschool milestones centered on early counting, structural games, and teaching practical independence.",
    benefits: ["Simple counting games", "Self-dressing & toilet prep", "Emotional confidence"],
    color: "bg-amber-50 border-amber-100 text-amber-600",
    iconBg: "bg-amber-500 text-white",
  },
];

export default function CoreServices() {
  return (
    <Section background="light" id="core-services" className="relative pt-16 pb-16 md:pt-20 md:pb-20 overflow-hidden">
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
        <BookOpen className="w-16 h-16 md:w-20 md:h-20 rotate-12" />
      </div>
      <div className="absolute bottom-20 left-10 text-secondary/5 pointer-events-none -z-10 select-none">
        <Palette className="w-16 h-16 md:w-20 md:h-20 -rotate-12" />
      </div>

      <SectionHeading
        title="Our Core Childcare Services"
        subtitle="A comprehensive early years framework combining structured development tasks with flexible, loving home care."
        badge="What We Provide"
      />

      <div className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-7xl xl:max-w-[1360px] mx-auto relative z-10 w-full">
        {coreServices.map((svc, idx) => {
          const IconComponent = svc.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white rounded-3xl p-6 md:p-8 border-2 border-slate-100 shadow-sm flex flex-col justify-between text-left group transition-all duration-300 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)]"
            >
              <div className="space-y-6">
                {/* Header: Icon & Title */}
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl border shrink-0 ${svc.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-text-primary font-poppins">
                    {svc.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-text-secondary leading-relaxed font-inter">
                  {svc.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-2.5 pt-2 border-t border-slate-50">
                  {svc.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-text-primary font-inter">
                      <div className={`p-0.5 rounded-full ${svc.iconBg}`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Underlying styling bar */}
              <div className="w-10 h-1 bg-slate-100 group-hover:bg-primary group-hover:w-full transition-all duration-500 rounded-full mt-6" />
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

