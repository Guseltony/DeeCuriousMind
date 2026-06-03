"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, Heart, Award, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[50vh] lg:min-h-[55vh] flex items-center pt-20 lg:pt-24 pb-14 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 w-full bg-gradient-to-br from-[#738249] via-[#5F6C37] to-[#4E582D] overflow-hidden">
      {/* Decorative blobs & background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10 translate-x-20 -translate-y-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -z-10 -translate-x-20 translate-y-20" />
      
      {/* Playful background doodles (drawings) */}
      <div className="absolute top-20 left-10 text-white/10 select-none hidden md:block text-2xl font-poppins">★</div>
      <div className="absolute bottom-32 right-12 text-white/15 select-none hidden md:block text-3xl font-poppins">☁</div>
      <div className="absolute top-1/3 right-1/3 text-white/10 select-none hidden lg:block text-xl font-poppins">✿</div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Text Content (Left Column) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 space-y-3.5 md:space-y-5 text-left order-2 lg:order-1"
        >
          {/* Slogan Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 bg-white/15 text-[#FFFDF0] rounded-2xl border border-white/20 text-xs font-bold tracking-wider font-poppins uppercase shadow-sm">
            <span>Extend</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
            <span>Explore</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
            <span>Achieve</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-poppins">
            A Nurturing Space Where <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-amber-100">
              Curious Minds
            </span>{" "}
            Grow & Play
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-slate-100 font-inter max-w-xl leading-relaxed">
            Dee's Curious Minds childcare offers a loving, safe, and engaging home-from-home childcare service in Gillingham. We focus on personal attention, developmental milestones, and learning through play.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-row gap-3 items-center justify-start">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#FEFADF] hover:bg-[#FFFDF0] text-[#5F6C37] px-6 py-3 rounded-xl font-bold tracking-wide shadow-md hover:shadow-lg transition-all hover:translate-y-[-2px] cursor-pointer text-sm"
            >
              Enquire Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border-2 border-white/25 hover:border-white/40 bg-white/10 text-white hover:bg-white/15 px-6 py-3 rounded-xl font-bold tracking-wide transition-all hover:translate-y-[-2px] text-sm"
            >
              Our Services
            </Link>
          </div>
        </motion.div>

        {/* Video Composition & Floating Cards (Right Column) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 relative flex justify-center items-center h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px] order-1 lg:order-2 w-full"
        >
          {/* Main Video Frame playing video.webm */}
          <div className="relative w-full h-full sm:w-11/12 sm:h-11/12 md:w-4/5 md:h-4/5 rounded-3xl overflow-hidden shadow-xl border-4 border-white rotate-[-2deg] hover:rotate-0 transition-all duration-500 z-10 bg-slate-100">
            <video
              src="/videos/video.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlapping Secondary Image Frame (Activity) */}
          <div className="absolute left-0 bottom-4 w-2/5 h-2/5 rounded-2xl overflow-hidden shadow-lg border-4 border-white rotate-[6deg] hover:rotate-0 transition-transform duration-500 z-20 hidden sm:block">
            <Image
              src="/images/learning_play.png"
              alt="Child learning through play"
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>

          {/* Floating Card 1: Safe Environment */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1 sm:top-4 left-1 sm:left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-md border border-slate-100 flex items-center gap-2 z-30"
          >
            <div className="p-1.5 bg-green-50 text-green-600 rounded-lg shrink-0">
              <Shield className="w-3.5 h-3.5" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-text-primary">Safe Environment</p>
              <p className="text-[8px] text-text-secondary leading-none">Secure & Insured</p>
            </div>
          </motion.div>

          {/* Floating Card 2: Learning Through Play */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-1 sm:bottom-4 right-1 sm:right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-md border border-slate-100 flex items-center gap-2 z-30"
          >
            <div className="p-1.5 bg-amber-50 text-amber-500 rounded-lg shrink-0">
              <Heart className="w-3.5 h-3.5 fill-current" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-text-primary">Learning via Play</p>
              <p className="text-[8px] text-text-secondary leading-none">Sensory & Creative</p>
            </div>
          </motion.div>

          {/* Floating Card 3: Experienced Care */}
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="hidden sm:flex absolute top-1/4 -right-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-md border border-slate-100 items-center gap-2 z-30"
          >
            <div className="p-1.5 bg-purple-50 text-purple-600 rounded-lg shrink-0">
              <Award className="w-3.5 h-3.5" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-text-primary">Ofsted Registered</p>
              <p className="text-[8px] text-text-secondary leading-none">Qualified Pro</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Playful Cloud/Wave Divider at the Bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-[60px] md:h-[90px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32 C240,74 480,74 720,32 C960,-10 1200,-10 1440,32 L1440,74 L0,74 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
}
