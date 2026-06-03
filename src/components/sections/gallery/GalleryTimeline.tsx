"use client";

import React from "react";
import { Smile, BookOpen, TreePine, Palette, Users, Home, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../../shared/Section";
import SectionHeading from "../../shared/SectionHeading";

const stages = [
  {
    icon: Smile,
    title: "1. Welcome & Free Play",
    description: "Children arrive, settle in comfortably, and select toys, easing into the morning routine.",
    color: "bg-indigo-500 text-white shadow-indigo-100",
  },
  {
    icon: BookOpen,
    title: "2. Early Learning Circle",
    description: "Phonics sheets, letter writing worksheets, counting games, and bilingual storytelling sessions.",
    color: "bg-purple-500 text-white shadow-purple-100",
  },
  {
    icon: TreePine,
    title: "3. Garden Outdoor Play",
    description: "Planting seeds in the garden, nature searches, and gross motor climbing coordination.",
    color: "bg-green-500 text-white shadow-green-100",
  },
  {
    icon: Palette,
    title: "4. Arts, Crafts & Baking",
    description: "Clay dough modeling, fingers painting, and mixing baking ingredients to build fine motor muscles.",
    color: "bg-rose-500 text-white shadow-rose-100",
  },
  {
    icon: Users,
    title: "5. Social Circle & Snack",
    description: "Sharing snack plates, tabletop manners practice, cooperative group play, and cleaning up.",
    color: "bg-amber-500 text-white shadow-amber-100",
  },
  {
    icon: Home,
    title: "6. Wind-Down & Home Time",
    description: "Reflecting on favorite daily moments, packing folders, and greeting parents for feedback.",
    color: "bg-teal-500 text-white shadow-teal-100",
  },
];

export default function GalleryTimeline() {
  return (
    <Section background="white" id="gallery-timeline">
      <SectionHeading
        title="Our Typical Day Journey"
        subtitle="A visual pathway showing how we structure our days to nurture children's physical, cognitive, and social development."
        badge="Daily Routine"
      />

      <div className="relative max-w-5xl mx-auto py-8 pl-8 md:pl-0">
        {/* Central Vertical Connector Line (Desktop Only) */}
        <div className="absolute left-[20px] md:left-1/2 top-4 bottom-4 w-[2px] bg-slate-200 -translate-x-1/2 hidden md:block" />
        {/* Central Vertical Connector Line (Mobile Only) */}
        <div className="absolute left-[16px] top-4 bottom-4 w-[2px] bg-slate-200 md:hidden" />

        <div className="space-y-12">
          {stages.map((stage, idx) => {
            const IconComponent = stage.icon;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left"
              >
                {/* Node Center (Desktop Only) */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-4 border-white shadow-sm flex items-center justify-center z-20 hidden md:flex"
                  style={{
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className={`w-full h-full rounded-full flex items-center justify-center ${stage.color}`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                </motion.div>

                {/* Node Left (Mobile Only) */}
                <div
                  className="absolute left-[-24px] top-2 w-8 h-8 rounded-full border-4 border-white shadow-sm flex items-center justify-center z-20 md:hidden"
                >
                  <div className={`w-full h-full rounded-full flex items-center justify-center ${stage.color}`}>
                    <IconComponent className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Content Panel */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -35 : 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`md:col-span-5 ${
                    isEven ? "md:text-right md:col-start-1" : "md:col-start-8"
                  }`}
                >
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 relative">
                    <h3 className="text-lg font-bold text-text-primary font-poppins mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed font-inter">
                      {stage.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
