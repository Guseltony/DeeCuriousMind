"use client";

import React, { useState } from "react";
import { Sparkles, Gamepad2, Compass, Heart, Smile, Users, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../../shared/Section";
import SectionHeading from "../../shared/SectionHeading";

const values = [
  {
    icon: Gamepad2,
    title: "Learning Through Play",
    description:
      "Play is the natural language of childhood. We build games and setups that invite organic problem-solving, cognitive reasoning, and native discovery.",
    color: "bg-indigo-50 text-indigo-600 border-indigo-100",
    badgeColor: "bg-indigo-500",
  },
  {
    icon: Compass,
    title: "Nurturing Curiosity",
    description:
      "Fostering a space where questions are welcomed. Children learn to touch, observe, and investigate materials, triggering active critical minds.",
    color: "bg-purple-50 text-purple-600 border-purple-100",
    badgeColor: "bg-purple-500",
  },
  {
    icon: Sparkles,
    title: "Creative Expression",
    description:
      "Free exploration of painting, clay, music, and crafts. We value the creative process over the final product, allowing kids to express freely.",
    color: "bg-pink-50 text-pink-600 border-pink-100",
    badgeColor: "bg-pink-500",
  },
  {
    icon: Heart,
    title: "Emotional Wellbeing",
    description:
      "A secure emotional foundation is key. We practice mindfulness, validate feelings, and build a safe home haven where children feel loved.",
    color: "bg-green-50 text-green-600 border-green-100",
    badgeColor: "bg-green-500",
  },
  {
    icon: Smile,
    title: "Positive Behaviour",
    description:
      "Using constructive guidance, clear expectations, and active empathy to help children develop emotional regulation and self-awareness.",
    color: "bg-amber-50 text-amber-600 border-amber-100",
    badgeColor: "bg-amber-500",
  },
  {
    icon: Users,
    title: "Social Development",
    description:
      "Our cozy home group teaches children critical life lessons: greeting peers, sharing toys, collaborative problem-solving, and showing empathy.",
    color: "bg-teal-50 text-teal-600 border-teal-100",
    badgeColor: "bg-teal-500",
  },
];

export default function Philosophy() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <Section background="white" id="philosophy" className="relative py-8 md:py-12">
      {/* Playful watermark doodles */}
      <div className="absolute top-12 left-10 text-primary/5 pointer-events-none -z-10 select-none">
        <Smile className="w-16 h-16 md:w-20 md:h-20 rotate-12" />
      </div>
      <div className="absolute bottom-12 right-10 text-secondary/5 pointer-events-none -z-10 select-none">
        <Sparkles className="w-16 h-16 md:w-20 md:h-20 -rotate-12" />
      </div>

      <SectionHeading
        title="Our Childcare Philosophy"
        subtitle="A connected circle of core values that guide our daily activities and support your child's holistic development."
        badge="How We Nurture"
      />

      <div className="relative max-w-5xl mx-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {values.map((val, idx) => {
            const IconComponent = val.icon;
            const isOpen = activeIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative group text-left"
              >
                {/* Card Container */}
                <div
                  className={`h-full p-4 rounded-2xl shadow-sm transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                    isOpen
                      ? "border-primary bg-bg-light/40 ring-2 ring-primary/10 shadow-md"
                      : "border-slate-100 bg-white hover:bg-slate-50/50 hover:translate-y-[-2px]"
                  }`}
                  onClick={() => toggleAccordion(idx)}
                >
                  <div>
                    {/* Header: Icon & Step Number & Chevron */}
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2.5 rounded-xl border ${val.color} shrink-0`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${val.badgeColor}`}>
                          0{idx + 1}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-base font-bold text-text-primary font-poppins mb-1">
                      {val.title}
                    </h3>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-inter pt-1">
                            {val.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
