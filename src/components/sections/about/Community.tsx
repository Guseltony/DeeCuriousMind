"use client";

import React from "react";
import Image from "next/image";
import { BookOpen, TreePine, Users2, Landmark } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../../shared/Section";
import SectionHeading from "../../shared/SectionHeading";

const activities = [
  {
    icon: BookOpen,
    title: "Library Story & Rhyme Time",
    description: "Weekly trips to Gillingham libraries to listen to children's readings, browse picture books, and enjoy early phonics songs.",
    color: "text-indigo-600 bg-indigo-50 border-indigo-100",
  },
  {
    icon: TreePine,
    title: "Nature Walks & Parks",
    description: "Daily fresh air explorations where children collect leaves, watch seasonal changes, and run in safe green settings.",
    color: "text-green-600 bg-green-50 border-green-100",
  },
  {
    icon: Users2,
    title: "Local Toddler Playgroups",
    description: "Attending neighborhood toddler meets to practice cooperative group play and ease transitions into preschool.",
    color: "text-purple-600 bg-purple-50 border-purple-100",
  },
  {
    icon: Landmark,
    title: "Community Explorations",
    description: "Short walks to post offices, shops, and markets to learn real-world safety and familiarise kids with their neighborhood.",
    color: "text-amber-600 bg-amber-50 border-amber-100",
  },
];

export default function Community() {
  return (
    <Section background="white" id="community" className="relative py-8 md:py-12">
      {/* Playful watermark doodles */}
      <div className="absolute top-12 left-10 text-primary/5 pointer-events-none -z-10 select-none">
        <TreePine className="w-16 h-16 md:w-20 md:h-20 rotate-12" />
      </div>
      <div className="absolute bottom-12 right-10 text-secondary/5 pointer-events-none -z-10 select-none">
        <BookOpen className="w-16 h-16 md:w-20 md:h-20 -rotate-12" />
      </div>

      <SectionHeading
        title="Community Engagement & Local Outings"
        subtitle="Learning extends far beyond our front door. We explore Gillingham's parks, libraries, and groups to build social confidence."
        badge="Active Community"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
        {/* Left Column: Visual Support */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 relative flex justify-center"
        >
          <div className="relative w-[300px] h-[360px] sm:w-[350px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg border-8 border-white rotate-[3deg] hover:rotate-0 transition-transform duration-500 z-10">
            <Image
              src="/images/social_group.png"
              alt="Children participating in group library outing"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute -left-4 bottom-12 bg-white px-5 py-3 rounded-2xl shadow-md border border-slate-100 flex flex-col items-center justify-center text-center z-20">
            <span className="text-2xl font-extrabold text-green-600 font-poppins">Daily</span>
            <span className="text-xs font-semibold text-text-secondary">Outdoor Outings</span>
          </div>
        </motion.div>

        {/* Right Column: Outings List */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left"
        >
          {activities.map((act, idx) => {
            const IconComponent = act.icon;
            return (
              <div
                key={idx}
                className="p-5 bg-bg-light border border-slate-100 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 ${act.color}`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-text-primary font-poppins mb-1">
                    {act.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-inter">
                    {act.description}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
