"use client";

import React from "react";
import Image from "next/image";
import { Award, GraduationCap, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative min-h-[50vh] lg:min-h-[55vh] flex items-center pt-24 pb-8 md:pb-12 px-6 md:px-8 lg:px-12 w-full bg-gradient-to-br from-bg-light via-white to-primary/10 overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 translate-x-20 -translate-y-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 -translate-x-20 translate-y-20" />

      {/* Wave Divider at Bottom to blend into white DeniseStory */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative block w-full h-[25px] md:h-[40px]" preserveAspectRatio="none">
          <path d="M0,50 L1440,50 L1440,10 C1080,35 720,35 360,10 L0,30 Z" fill="#FFFFFF" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text & Badges */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 space-y-4 md:space-y-6 text-left"
        >
          {/* Heart Badge */}
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-semibold tracking-wide uppercase">
            <Heart className="w-3 h-3 fill-current" />
            Dedicated Early Years Educator
          </span>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight font-poppins">
            Get to Know <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Denise & Her Vision
            </span>
          </h1>

          {/* Intro Paragraph */}
          <p className="text-xs sm:text-sm md:text-base text-text-secondary font-inter max-w-xl leading-relaxed">
            With over 15 years of dedicated childcare experience, I provide a warm, safe, and curiosity-rich home childcare environment in Gillingham. Here, every child is nurtured to learn, play, and grow at their own pace.
          </p>

          {/* Dual Highlights: Experience & Qualification Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
            {/* Experience Box */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
              <div className="p-2.5 bg-indigo-50 text-primary rounded-lg shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-text-primary font-poppins">15+ Years Care</h4>
                <p className="text-xs text-text-secondary mt-1 font-inter">Experienced Nursery Officer & After School Manager.</p>
              </div>
            </div>

            {/* Qualification Box */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
              <div className="p-2.5 bg-purple-50 text-secondary rounded-lg shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-text-primary font-poppins">NVQ Certified</h4>
                <p className="text-xs text-text-secondary mt-1 font-inter">Children's Care, Learning & Development.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Image with Overlays */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 relative flex justify-center items-center h-[350px] sm:h-[450px] md:h-[500px]"
        >
          {/* Main Photo Frame */}
          <div className="relative w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-xl border-4 border-white rotate-[2deg] hover:rotate-0 transition-transform duration-500 z-10">
            <Image
              src="/images/denise_childcare.png"
              alt="Denise - Founder of Dee's Curious Minds"
              fill
              priority
              sizes="(max-w-7xl) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Overlapping Info Badge 1 */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 left-0 sm:left-4 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-2xl shadow-md border border-slate-100 flex items-center gap-2.5 z-20"
          >
            <span className="text-xl">🇬🇧 🇮🇳</span>
            <div className="text-left">
              <p className="text-xs font-bold text-text-primary">Bilingual Care</p>
              <p className="text-[10px] text-text-secondary font-inter">English & Hindi Speaking</p>
            </div>
          </motion.div>

          {/* Overlapping Info Badge 2 */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="absolute bottom-12 right-0 sm:right-4 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-2xl shadow-md border border-slate-100 flex items-center gap-2.5 z-20"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <div className="text-left">
              <p className="text-xs font-bold text-text-primary">Based in Gillingham</p>
              <p className="text-[10px] text-text-secondary font-inter">Safe, Local Setting</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
