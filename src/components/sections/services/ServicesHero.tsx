"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Award, Star } from "lucide-react";
import { motion } from "framer-motion";
import { getYearsOfExperience } from "@/utils/experience";

export default function ServicesHero() {
  const years = getYearsOfExperience();

  return (
    <section className="relative min-h-[50vh] lg:min-h-[55vh] flex items-center pt-24 pb-8 md:pb-12 px-4 sm:px-6 lg:px-8 w-full bg-gradient-to-br from-bg-light via-white to-primary/10 overflow-hidden text-left">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 translate-x-20 -translate-y-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 -translate-x-20 translate-y-20" />



      <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1536px] 3xl:max-w-[1720px] 4xl:max-w-[1920px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-12 lg:gap-16 items-center">
        {/* Text Content (Left Column) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 space-y-2 md:space-y-6 text-left"
        >
          {/* Subtle Badge */}
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            Curriculum & Care Structured for Growth
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight font-poppins">
            Holistic Childcare <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Nurturing Early Milestones
            </span>
          </h1>

          {/* Description - Blended with ServicesIntro concepts */}
          <p className="text-sm md:text-base text-text-secondary font-inter max-w-xl leading-relaxed">
            At Dees Curious Minds, we respect child individuality. We organize EYFS-guided daycare activities that match children's natural interests and sleeping/feeding routines, ensuring they grow into confident, curious learners at their own unique pace.
          </p>

          {/* Badges Box */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-100 shadow-sm">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm font-bold text-text-primary font-poppins">{years}+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-100 shadow-sm">
              <Star className="w-4 h-4 text-amber-500 fill-current" />
              <span className="text-xs sm:text-sm font-bold text-text-primary font-poppins">Ofsted Registered</span>
            </div>
          </div>
        </motion.div>

        {/* Image Composition (Right Column) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 relative flex justify-center items-center h-[350px] sm:h-[450px] md:h-[500px] "
        >
          {/* Main Image Frame */}
          <div className="relative w-full h-[90%] rounded-2xl overflow-hidden shadow-xl border-4 border-white rotate-[-1.5deg] hover:rotate-0 transition-transform duration-500 z-10">
            <Image
              src="/images/match_and_count_sorting_tray.jpeg"
              alt="Early education activities at Dees Curious Minds"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 650px"
              className="object-cover"
            />
          </div>

          {/* Overlapping small decorative card */}
          <div className="absolute right-0 top-1/4 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-2xl shadow-md border border-slate-100 flex items-center gap-2 z-20">
            <span className="text-base">🧸</span>
            <span className="text-xs font-bold text-text-primary">Play-Based Learning</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
