"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, BookOpen, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../shared/Section";
import SectionHeading from "../shared/SectionHeading";

export default function AboutPreviewSection() {
  return (
    <Section background="light" id="about-preview" className="relative pt-16 pb-16 md:pt-20 md:pb-20">
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

      {/* Subtle play watermarks */}
      <div className="absolute top-20 right-10 text-primary/5 pointer-events-none -z-10 select-none">
        <BookOpen className="w-16 h-16 md:w-20 md:h-20 rotate-[15deg]" />
      </div>
      <div className="absolute bottom-16 left-10 text-secondary/5 pointer-events-none -z-10 select-none">
        <Heart className="w-16 h-16 md:w-20 md:h-20 -rotate-[15deg] fill-current" />
      </div>
      {/* Title */}
      <SectionHeading
        title="Meet Denise, Your Local Childminder"
        subtitle="Creating a warm, supportive environment where children feel safe, valued, and inspired to learn."
        badge="About Our Founder"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Image with Stats Overlay */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 relative flex justify-center"
        >
          {/* Main Photo Frame */}
          <div className="relative w-[300px] h-[360px] sm:w-[350px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg border-8 border-white rotate-[-3deg] hover:rotate-0 transition-transform duration-500 z-10">
            <Image
              src="/images/denise_childcare.png"
              alt="Denise - Founder of Dee's Curious Minds"
              fill
              className="object-cover"
            />
          </div>

          {/* Overlapping Stat Box: Experience */}
          <div className="absolute -right-4 top-12 bg-white px-5 py-3 rounded-2xl shadow-md border border-slate-100 flex flex-col items-center justify-center text-center z-20">
            <span className="text-2xl font-extrabold text-primary font-poppins">10+</span>
            <span className="text-xs font-semibold text-text-secondary">Years Experience</span>
          </div>

          {/* Overlapping Stat Box: Happy Kids */}
          <div className="absolute -left-4 bottom-12 bg-white px-5 py-3 rounded-2xl shadow-md border border-slate-100 flex flex-col items-center justify-center text-center z-20">
            <span className="text-2xl font-extrabold text-secondary font-poppins">100%</span>
            <span className="text-xs font-semibold text-text-secondary">Parent Trust</span>
          </div>
        </motion.div>

        {/* Right Column: Story & Philosophy */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-7 space-y-4 sm:space-y-6 text-left"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary font-poppins">
            A Nurturing Home-From-Home Experience
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-text-secondary font-inter leading-relaxed">
            Hi, I’m Denise! With over a decade of experience in early years development, I founded Dee's Curious Minds to offer families a reliable, highly personal alternative to large nurseries. I believe that children thrive best in a structured yet flexible home environment where they receive individual care and affection.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-text-secondary font-inter leading-relaxed">
            My philosophy centers on the <strong className="font-semibold text-text-primary">Early Years Foundation Stage (EYFS)</strong> curriculum, combined with child-led play. Every day is filled with reading, sensory play, basic logic games, and outdoor explorations to trigger native curiosity.
          </p>

          {/* Check List */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm md:text-base text-text-primary font-semibold font-inter">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
              <span>EYFS Curriculum Aligned</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
              <span>Paediatric First Aid Certified</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
              <span>DBS Enhanced Cleared</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
              <span>Ofsted Registered</span>
            </li>
          </ul>

          {/* Action Button */}
          <div className="pt-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-bold tracking-wide transition-all group"
            >
              Learn More About Denise
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
