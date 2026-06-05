"use client";

import React from "react";
import { Home, BookOpen, Palette, TreePine } from "lucide-react";
import { motion } from "framer-motion";

const diffPoints = [
  {
    icon: Home,
    title: "HAPPY ENVIRONMENT",
  },
  {
    icon: BookOpen,
    title: "ACTIVE LEARNING",
  },
  {
    icon: Palette,
    title: "CREATIVE LESSONS",
  },
  {
    icon: TreePine,
    title: "AMAZING PLAYGROUND",
  },
];

export default function AboutDiff() {
  return (
    <section id="about-diff" className="relative w-full py-16 md:py-20 bg-[#5F6C37] overflow-hidden text-center">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -z-10 translate-x-20 -translate-y-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -z-10 -translate-x-20 translate-y-20" />

      <div className="max-w-7xl xl:max-w-[1360px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 justify-items-center relative z-10">
          {diffPoints.map((point, idx) => {
            const IconComponent = point.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                {/* Large white circular icon frame */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105 shrink-0">
                  <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 text-[#5f6c37]" />
                </div>

                {/* Bold white uppercase text */}
                <h3 className="text-xs sm:text-sm font-black text-[#FEFADF] tracking-widest font-poppins mt-5 uppercase text-center leading-snug max-w-[160px] transition-colors group-hover:text-white">
                  {point.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
