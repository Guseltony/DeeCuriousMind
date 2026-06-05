"use client";

import React from "react";
import Image from "next/image";
import { Award, GraduationCap, Heart, Quote, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { getYearsOfExperience } from "@/utils/experience";

export default function AboutHero() {
  const years = getYearsOfExperience();

  return (
    <section className="relative w-full pt-28 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-bg-light via-white to-primary/10 overflow-hidden text-left">
      {/* Decorative Background Blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 translate-x-20 -translate-y-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 -translate-x-20 translate-y-20" />

      {/* Wave Divider at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative block w-full h-[25px] md:h-[40px]" preserveAspectRatio="none">
          <path d="M0,50 L1440,50 L1440,10 C1080,35 720,35 360,10 L0,30 Z" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Main Section Content Wrapper */}
      <div className="max-w-7xl xl:max-w-[1360px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Text & Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Heart Badge */}
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-semibold tracking-wide uppercase">
              <Heart className="w-3 h-3 fill-current" />
              Dedicated Early Years Educator
            </span>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight font-poppins">
              Get to Know <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Denise & Her Vision
              </span>
            </h1>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-sm md:text-base text-text-secondary font-inter leading-relaxed">
              <p>
                Hi, I’m Denise! My passion for working with children began over {years} years ago. I have always believed that the early years of a child’s life are the most critical for shaping their character, confidence, and native love for learning. This conviction led me to dedicate my career to early childhood education and developmental care.
              </p>
              <p>
                Throughout my journey, I’ve had the privilege of serving as a <strong className="font-semibold text-text-primary">Nursery Officer</strong>, a <strong className="font-semibold text-text-primary">Nursery Nurse</strong>, and an <strong className="font-semibold text-text-primary">After School Manager</strong>. These professional roles allowed me to work with children from diverse backgrounds, understanding their unique developmental milestones, learning patterns, and emotional needs.
              </p>
              <p>
                I founded <strong className="font-semibold text-text-primary">Dee’s Curious Minds</strong> in Gillingham to create a nurturing, secure home-from-home setting. By combining the structured learning of the EYFS curriculum with the custom attention, safety, and warmth of a domestic environment, I help children grow and discover at their own unique pace.
              </p>
            </div>

            {/* Quick Highlights Grid: Experience, Qualification, and Philosophy */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {/* Experience Card */}
              <div className="flex flex-col p-4 rounded-xl bg-white border border-slate-100 shadow-sm text-left">
                <div className="p-2 bg-indigo-50 text-primary rounded-lg w-fit mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-text-primary font-poppins">{years}+ Years Care</h4>
                <p className="text-[10px] text-text-secondary mt-1 font-inter leading-normal">Nursery Officer & Manager history.</p>
              </div>

              {/* Qualification Card */}
              <div className="flex flex-col p-4 rounded-xl bg-white border border-slate-100 shadow-sm text-left">
                <div className="p-2 bg-purple-50 text-secondary rounded-lg w-fit mb-3">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-text-primary font-poppins">NVQ Certified</h4>
                <p className="text-[10px] text-text-secondary mt-1 font-inter leading-normal">CCLD Level 3 professional training.</p>
              </div>

              {/* Philosophy Card */}
              <div className="flex flex-col p-4 rounded-xl bg-white border border-slate-100 shadow-sm text-left">
                <div className="p-2 bg-amber-50 text-amber-600 rounded-lg w-fit mb-3">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-text-primary font-poppins">Play-Based</h4>
                <p className="text-[10px] text-text-secondary mt-1 font-inter leading-normal">Guided learning & nurturing care.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Profile Image & Quote Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col items-center gap-8 w-full"
          >
            {/* Image Container */}
            <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden shadow-xl border-4 border-white rotate-[1.5deg] hover:rotate-0 transition-transform duration-500 z-10 shrink-0">
              <Image
                src="/images/denise_childcare_corporate.png"
                alt="Denise - Founder of Dee's Curious Minds"
                fill
                priority
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 650px"
                className="object-cover"
              />

              {/* Overlapping Info Badge 1 */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-xl shadow-md border border-slate-100 flex items-center gap-2.5 z-20"
              >
                <span className="text-lg">🇬🇧 🇮🇳</span>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-text-primary leading-none">Bilingual Care</p>
                  <p className="text-[8px] text-text-secondary font-inter mt-0.5">English & Hindi Speaking</p>
                </div>
              </motion.div>

              {/* Overlapping Info Badge 2 */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-xl shadow-md border border-slate-100 flex items-center gap-2.5 z-20"
              >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] font-bold text-text-primary leading-none">Gillingham, Kent</p>
                  <p className="text-[8px] text-text-secondary font-inter mt-0.5">Safe, Local Setting</p>
                </div>
              </motion.div>
            </div>

            {/* Quote Card */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-indigo-50/60 to-purple-50/60 border border-indigo-100/80 shadow-sm w-full">
              <Quote className="absolute top-4 right-6 w-10 h-10 text-primary/10 rotate-180" />
              <p className="text-sm sm:text-base text-indigo-950 font-medium italic font-poppins leading-relaxed relative z-10">
                "Children are not vessels to be filled, but lamps to be lit. My goal is to foster their natural spark, helping them become confident, compassionate, and curious lifelong learners."
              </p>
              <div className="mt-4 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs shrink-0">
                  D
                </div>
                <div>
                  <h4 className="text-xs font-bold text-text-primary font-poppins">Denise</h4>
                  <p className="text-[10px] text-text-secondary font-inter">Founder & Lead Childminder</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
