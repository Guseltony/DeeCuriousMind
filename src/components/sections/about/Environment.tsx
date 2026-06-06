"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Shield, Home, Sparkles, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../../shared/Section";
import SectionHeading from "../../shared/SectionHeading";

const spaces = [
  {
    images: [
      "/images/playroom_wide_view.jpeg",
      "/images/sensory_toys_sorting.jpeg",
      "/images/toy_storage_and_first_aid.jpeg",
      "/images/cozy_sofa_and_activity_table.jpeg"
    ],
    icon: Home,
    title: "Indoor Creative Playroom",
    description: "A bright, fully secured learning area filled with Montessori wooden toys, puzzles, building blocks, and customized sensory boxes.",
    features: ["Montessori Toys", "Custom Sensory Boxes", "Soft Safety Flooring"],
    color: "bg-indigo-500 text-white shadow-indigo-100",
  },
  {
    images: [
      "/images/backyard_playground.jpeg",
      "/images/outdoor_play_area.jpeg",
      "/images/outdoor_seating_and_easel.jpeg"
    ],
    icon: Shield,
    title: "Secure Outdoor Play Garden",
    description: "Our private outdoor garden allows children to interact with nature safely, planting seeds, exploring plants, and enjoying physical play.",
    features: ["Private Garden", "Climbing Structures", "Organic Gardening Beds"],
    color: "bg-green-500 text-white shadow-green-100",
  },
  {
    images: [
      "/images/reading_corner_and_lego_rug.jpeg",
      "/images/building_blocks_and_dinosaurs.jpeg"
    ],
    icon: BookOpen,
    title: "Cozy Storytelling & Reading Nook",
    description: "A quiet, carpeted corner with plush floor pillows and low-level shelving, making picture books accessible to children at any time.",
    features: ["Low-Level Shelving", "Comfortable Cushioning", "Language-Rich Library"],
    color: "bg-purple-50 text-white shadow-purple-100",
  },
  {
    images: [
      "/images/water_play_pipettes_and_funnels.jpeg",
      "/images/color_recognition_sensory_tray.jpeg",
      "/images/match_and_count_sorting_tray.jpeg"
    ],
    icon: Sparkles,
    title: "Messy Play & Arts Station",
    description: "A dedicated space for clay molding, painting, baking preparation, and messy sensory tasks that boost fine motor control.",
    features: ["Washable Stations", "Arts & Crafts Cabinets", "Cookery Supplies"],
    color: "bg-amber-500 text-white shadow-amber-100",
  },
];

export default function Environment() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [imgIdx, setImgIdx] = useState(0);

  const handleTabChange = (idx: number) => {
    setActiveIdx(idx);
    setImgIdx(0);
  };

  const handleNextImg = () => {
    const activeSpace = spaces[activeIdx];
    setImgIdx((prev) => (prev + 1) % activeSpace.images.length);
  };

  const handlePrevImg = () => {
    const activeSpace = spaces[activeIdx];
    setImgIdx((prev) => (prev - 1 + activeSpace.images.length) % activeSpace.images.length);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      const activeSpace = spaces[activeIdx];
      if (activeSpace.images.length > 1) {
        setImgIdx((prev) => (prev + 1) % activeSpace.images.length);
      }
    }, 4500);
    return () => clearInterval(timer);
  }, [activeIdx]);

  const activeSpace = spaces[activeIdx];

  return (
    <Section background="light" id="environment" className="relative pt-12 pb-12 md:pt-20 md:pb-20">
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

      <div className="max-w-4xl xl:max-w-[960px] 2xl:max-w-[1080px] mx-auto space-y-4 md:space-y-6 relative z-10">
        {/* Responsive Tab Buttons */}
        <div className="flex overflow-x-auto gap-2 md:gap-3 pb-2 md:justify-center no-scrollbar">
          {spaces.map((space, idx) => {
            const IconComponent = space.icon;
            const isActive = activeIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => handleTabChange(idx)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs md:text-sm font-bold font-poppins transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/10"
                    : "bg-white text-text-secondary hover:text-text-primary border border-slate-100"
                }`}
              >
                <IconComponent className="w-3.5 h-3.5" />
                <span>{space.title.split(" ").slice(1).join(" ")}</span>
              </button>
            );
          })}
        </div>

        {/* Tab content panel */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 sm:p-5 md:p-6 text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              {/* Left Column: Image Carousel */}
              <div className="md:col-span-6 relative aspect-[3/2] w-full rounded-xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={imgIdx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={activeSpace.images[imgIdx]}
                      alt={`${activeSpace.title} carousel ${imgIdx + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain bg-slate-50/80"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Left/Right Controls (visible when space has >1 image) */}
                {activeSpace.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImg}
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-black/40 text-white hover:bg-black/60 transition-colors cursor-pointer z-20"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button
                      onClick={handleNextImg}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-black/40 text-white hover:bg-black/60 transition-colors cursor-pointer z-20"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </>
                )}

                {/* Dot Indicators */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-20">
                  {activeSpace.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIdx(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        imgIdx === i ? "bg-white w-4" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right Column: Descriptions & features */}
              <div className="md:col-span-6 space-y-3.5">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-text-primary font-poppins flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${activeSpace.color.split(" ")[0]}`} />
                  {activeSpace.title}
                </h3>
                
                {/* Description (slightly shortened and smaller text on mobile) */}
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-inter">
                  {activeSpace.description}
                </p>

                {/* Highlights (hidden on small screens to save space) */}
                <div className="space-y-1.5 pt-1.5 hidden md:block">
                  <p className="text-xs font-bold text-text-primary uppercase tracking-wider font-poppins">Key Highlights:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {activeSpace.features.map((feature, fIdx) => (
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
