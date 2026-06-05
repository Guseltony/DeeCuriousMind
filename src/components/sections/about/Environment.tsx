"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Shield, Home, Sparkles, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../../shared/Section";
import SectionHeading from "../../shared/SectionHeading";

const spaces = [
  {
    image: "/images/hero_childcare.png",
    icon: Home,
    title: "Indoor Creative Playroom",
    description: "A bright, fully secured learning area filled with Montessori wooden toys, puzzles, building blocks, and customized sensory boxes.",
    features: ["Montessori Toys", "Custom Sensory Boxes", "Soft Safety Flooring"],
    color: "bg-indigo-500 text-white shadow-indigo-100",
  },
  {
    image: "/images/nature_explore.png",
    icon: Shield,
    title: "Secure Outdoor Play Garden",
    description: "Our private outdoor garden allows children to interact with nature safely, planting seeds, exploring plants, and enjoying physical play.",
    features: ["Private Garden", "Climbing Structures", "Organic Gardening Beds"],
    color: "bg-green-500 text-white shadow-green-100",
  },
  {
    image: "/images/social_group.png",
    icon: BookOpen,
    title: "Cozy Storytelling & Reading Nook",
    description: "A quiet, carpeted corner with plush floor pillows and low-level shelving, making picture books accessible to children at any time.",
    features: ["Low-Level Shelving", "Comfortable Cushioning", "Language-Rich Library"],
    color: "bg-purple-50 text-white shadow-purple-100",
  },
  {
    image: "/images/creative_activity.png",
    icon: Sparkles,
    title: "Messy Play & Arts Station",
    description: "A dedicated space for clay molding, painting, baking preparation, and messy sensory tasks that boost fine motor control.",
    features: ["Washable Stations", "Arts & Crafts Cabinets", "Cookery Supplies"],
    color: "bg-amber-500 text-white shadow-amber-100",
  },
];

export default function Environment() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <Section background="light" id="environment" className="relative pt-16 pb-16 md:pt-20 md:pb-20">
      {/* Wave Dividers */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative block w-full h-[25px] md:h-[40px]" preserveAspectRatio="none">
          <path d="M0,0 L1440,0 L1440,35 C1152,10 864,55 576,35 C288,15 144,15 0,30 Z" fill="#FFFFFF" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative block w-full h-[25px] md:h-[40px]" preserveAspectRatio="none">
          <path d="M0,50 L1440,50 L1440,15 C1152,40 864,-5 576,15 C288,35 144,35 0,20 Z" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Playful watermark doodles */}
      <div className="absolute top-24 left-10 text-primary/5 pointer-events-none -z-10 select-none">
        <Home className="w-16 h-16 md:w-20 md:h-20 rotate-12" />
      </div>
      <div className="absolute bottom-20 right-10 text-secondary/5 pointer-events-none -z-10 select-none">
        <Shield className="w-16 h-16 md:w-20 md:h-20 -rotate-12" />
      </div>

      <SectionHeading
        title="Our Nurturing Learning Environment"
        subtitle="Explore the home-from-home spaces designed to keep your child safe, comfortable, and excited to discover."
        badge="Where We Learn & Play"
      />

      <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 relative z-10">
        {/* Responsive Tab Buttons */}
        <div className="flex overflow-x-auto gap-2 md:gap-3 pb-2 md:justify-center no-scrollbar">
          {spaces.map((space, idx) => {
            const IconComponent = space.icon;
            const isActive = activeIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold font-poppins transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/10"
                    : "bg-white text-text-secondary hover:text-text-primary border border-slate-100"
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{space.title.split(" ").slice(1).join(" ")}</span>
              </button>
            );
          })}
        </div>

        {/* Tab content panel */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 sm:p-6 md:p-8 text-left min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center"
            >
              {/* Left Column: Image */}
              <div className="md:col-span-6 relative aspect-video md:aspect-[4/3] w-full rounded-xl overflow-hidden shadow-sm border border-slate-100">
                <Image
                  src={spaces[activeIdx].image}
                  alt={spaces[activeIdx].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Right Column: Descriptions & features */}
              <div className="md:col-span-6 space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-text-primary font-poppins flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${spaces[activeIdx].color.split(" ")[0]}`} />
                  {spaces[activeIdx].title}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-inter">
                  {spaces[activeIdx].description}
                </p>

                <div className="space-y-2 pt-2">
                  <p className="text-xs font-bold text-text-primary uppercase tracking-wider font-poppins">Key Highlights:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {spaces[activeIdx].features.map((feature, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100 text-text-secondary text-[10px] sm:text-xs font-semibold font-inter"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
