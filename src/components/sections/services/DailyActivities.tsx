"use client";

import React from "react";
import { Smile, BookOpen, TreePine, Palette, Users } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../../shared/Section";
import SectionHeading from "../../shared/SectionHeading";

const activities = [
  {
    icon: Smile,
    title: "Morning Welcome & Free Play",
    focus: "Arrival & Transition",
    description: "Settle in comfortably with self-selected child-led learning, Montessori toys, and puzzles.",
    color: "bg-indigo-500 text-white shadow-indigo-100",
    badgeColor: "bg-indigo-50 border-indigo-100 text-indigo-700",
  },
  {
    icon: BookOpen,
    title: "Focused EYFS Phonics Circle",
    focus: "Early Language",
    description: "Story circles, phonics card games, nursery rhymes, and vocabulary activities.",
    color: "bg-rose-500 text-white shadow-rose-100",
    badgeColor: "bg-rose-50 border-rose-100 text-rose-700",
  },
  {
    icon: TreePine,
    title: "Outdoor Nature Exploration",
    focus: "Active & Outdoors",
    description: "Secure garden play, bug checking, leaf collections, and gross motor activities.",
    color: "bg-emerald-500 text-white shadow-emerald-100",
    badgeColor: "bg-emerald-50 border-emerald-100 text-emerald-700",
  },
  {
    icon: Palette,
    title: "Creative Arts & Messy Play",
    focus: "Process Art & Music",
    description: "Finger painting, sensory clay molding, dough shaping, and nursery rhythm tunes.",
    color: "bg-violet-500 text-white shadow-violet-100",
    badgeColor: "bg-violet-50 border-violet-100 text-violet-700",
  },
  {
    icon: Users,
    title: "Social Snack & Cozy Naps",
    focus: "Coziness & Share",
    description: "Healthy fruit plates followed by cozy naps or relaxing quiet reading sessions.",
    color: "bg-amber-500 text-white shadow-amber-100",
    badgeColor: "bg-amber-50 border-amber-100 text-amber-700",
  },
];

export default function DailyActivities() {
  return (
    <Section background="white" id="daily-activities" className="relative py-16 md:py-20">
      {/* Playful watermark doodles */}
      <div className="absolute top-20 right-10 text-primary/5 pointer-events-none -z-10 select-none">
        <Smile className="w-16 h-16 md:w-20 md:h-20 rotate-12" />
      </div>
      <div className="absolute bottom-20 left-10 text-secondary/5 pointer-events-none -z-10 select-none">
        <Users className="w-16 h-16 md:w-20 md:h-20 -rotate-12" />
      </div>

      <SectionHeading
        title="Our Daily Flow of Activities"
        subtitle="We follow a responsive routine that balances child-led playing, structured learning, fresh air, and peer social bonding."
        badge="A Typical Day"
      />

      <div className="relative max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1536px] 3xl:max-w-[1720px] 4xl:max-w-[1920px] mx-auto z-10 w-full pt-4">
        {/* Horizontal Connector Line for lg screen sizes */}
        <div className="hidden lg:block absolute top-[94px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-indigo-200 via-emerald-200 to-amber-200 rounded-full -z-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {activities.map((act, idx) => {
            const IconComponent = act.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white rounded-3xl p-6 border-2 border-slate-100 shadow-sm relative flex flex-col items-center text-center group hover:border-primary/20 transition-all duration-300"
              >
                {/* Step number floating badge */}
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold font-poppins shadow-md ${act.color}`}>
                  {idx + 1}
                </div>

                {/* Icon Circle */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white shadow-md ${act.color} transform group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Focus Area Badge */}
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-3 border ${act.badgeColor} font-poppins tracking-wider`}>
                  {act.focus}
                </span>

                {/* Title */}
                <h4 className="text-sm sm:text-base font-bold text-text-primary font-poppins mb-1.5 leading-tight">
                  {act.title}
                </h4>

                {/* Description */}
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-inter">
                  {act.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

