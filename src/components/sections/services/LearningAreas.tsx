"use client";

import React from "react";
import { MessageSquare, Calculator, Heart, Palette, Cpu, UtensilsCrossed, Activity } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../../shared/Section";
import SectionHeading from "../../shared/SectionHeading";

const learningAreas = [
  {
    icon: MessageSquare,
    title: "Language Development",
    description: "Daily reading times, phonics exercises, vocabulary building, and bilingual English/Hindi exploration to shape early talkers.",
    color: "text-indigo-600 bg-indigo-50 border-indigo-100",
  },
  {
    icon: Calculator,
    title: "Early Maths",
    description: "Counting, categorising, spatial sorting, and pattern games integrated into playing routines to make maths intuitive.",
    color: "text-purple-600 bg-purple-50 border-purple-100",
  },
  {
    icon: Heart,
    title: "Mindfulness",
    description: "Calm breathing games, sensory jars, and simple emotional check-ins designed to support self-regulation and focus.",
    color: "text-green-600 bg-green-50 border-green-100",
  },
  {
    icon: Palette,
    title: "Arts & Crafts",
    description: "Process-oriented painting, clay work, and scrapbooking to challenge spatial skills and support creative expression.",
    color: "text-rose-600 bg-rose-50 border-rose-100",
  },
  {
    icon: Cpu,
    title: "Digital Literacy",
    description: "A cautious, highly managed introduction to interactive problem-solving puzzles and early logic-building software.",
    color: "text-blue-600 bg-blue-50 border-blue-100",
  },
  {
    icon: UtensilsCrossed,
    title: "Cookery",
    description: "Measuring ingredients, safe vegetable sorting, and baking prep to teach chemistry, weighing units, and cooking safety.",
    color: "text-amber-600 bg-amber-50 border-amber-100",
  },
  {
    icon: Activity,
    title: "Physical Development",
    description: "Outdoor climbing, dancing, garden running, and balance challenges that build healthy gross-motor coordinates.",
    color: "text-teal-600 bg-teal-50 border-teal-100",
  },
];

export default function LearningAreas() {
  return (
    <Section background="light" id="learning-areas" className="relative pt-16 pb-16 md:pt-20 md:pb-20 overflow-hidden">
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

      {/* Playful watermark doodles */}
      <div className="absolute top-20 left-10 text-primary/5 pointer-events-none -z-10 select-none">
        <MessageSquare className="w-16 h-16 md:w-20 md:h-20 rotate-12" />
      </div>
      <div className="absolute bottom-20 right-10 text-secondary/5 pointer-events-none -z-10 select-none">
        <Activity className="w-16 h-16 md:w-20 md:h-20 -rotate-12" />
      </div>

      <SectionHeading
        title="Our Curriculum & Learning Areas"
        subtitle="We offer rich, hands-on activities that foster cognitive expansion, creative expression, and early academic skills."
        badge="Areas of Learning"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
        {learningAreas.map((area, idx) => {
          const IconComponent = area.icon;
          const isLast = idx === learningAreas.length - 1;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className={`p-5 sm:p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left group ${
                isLast ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="space-y-4">
                {/* Icon Circle */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 ${area.color}`}>
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-text-primary font-poppins">
                  {area.title}
                </h3>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed font-inter">
                  {area.description}
                </p>
              </div>

              {/* Underlying color bar */}
              <div className="w-8 h-1 bg-slate-100 group-hover:bg-primary group-hover:w-full transition-all duration-300 rounded-full mt-6" />
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
