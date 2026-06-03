"use client";

import React from "react";
import Image from "next/image";
import { Shield, Sparkles, Heart, Compass } from "lucide-react";
import { motion } from "framer-motion";

export default function GalleryHero() {
  return (
    <section className="relative min-h-[75vh] flex items-center pt-28 pb-16 md:pb-24 px-6 md:px-8 lg:px-12 w-full bg-gradient-to-br from-bg-light via-white to-primary/10 overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 translate-x-20 -translate-y-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 -translate-x-20 translate-y-20" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Text Content (Left Column) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 space-y-6 md:space-y-8 text-left"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide uppercase">
            <Compass className="w-3.5 h-3.5 fill-current" />
            A Visual Tour of Our Setting
          </span>

          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight font-poppins">
            Explore Life at <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Dee's Curious Minds
            </span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-text-secondary font-inter max-w-xl leading-relaxed">
            Take a look at the rooms, outdoor gardens, and creative setups where children spend their days exploring, learning, and developing lifelong friendships.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-3 pt-2">
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-100 shadow-sm">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-xs sm:text-sm font-bold text-text-primary font-poppins">Safe Environment</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-100 shadow-sm">
              <Heart className="w-4 h-4 text-primary fill-current" />
              <span className="text-xs sm:text-sm font-bold text-text-primary font-poppins">Learning via Play</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-100 shadow-sm">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-xs sm:text-sm font-bold text-text-primary font-poppins">Creative Activities</span>
            </div>
          </div>
        </motion.div>

        {/* Image Frame (Right Column) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 relative flex justify-center items-center h-[320px] sm:h-[400px] md:h-[450px]"
        >
          {/* Main Image Frame */}
          <div className="relative w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-xl border-4 border-white rotate-[2deg] hover:rotate-0 transition-transform duration-500 z-10">
            <Image
              src="/images/social_group.png"
              alt="Group reading activity at Dee's Curious Minds"
              fill
              priority
              sizes="(max-w-7xl) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
