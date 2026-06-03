"use client";

import React from "react";
import { Palette, Calculator, MessageCircle, Leaf, Brain, ChefHat } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../../shared/Section";
import SectionHeading from "../../shared/SectionHeading";

const highlights = [
  {
    icon: Palette,
    title: "Arts & Crafts",
    description: "Finger painting, leaf prints, paper mache, and clay sculpting to boost fine-motor control and color matching.",
    color: "text-indigo-600 bg-indigo-50 border-indigo-100",
  },
  {
    icon: Calculator,
    title: "Early Maths",
    description: "Counting wooden blocks, sorting buttons by size, and identifying geometric shapes in everyday toys.",
    color: "text-purple-600 bg-purple-50 border-purple-100",
  },
  {
    icon: MessageCircle,
    title: "Language Development",
    description: "Daily reading groups, interactive storyboards, and bilingual conversation exercises (English & Hindi).",
    color: "text-green-600 bg-green-50 border-green-100",
  },
  {
    icon: Leaf,
    title: "Nature Exploration",
    description: "Bug hunting, seed planting, composting, and exploring weather patterns in our local Gillingham parks.",
    color: "text-amber-600 bg-amber-50 border-amber-100",
  },
  {
    icon: Brain,
    title: "Mindfulness Activities",
    description: "Emotion checking charts, quiet music hours, breathing play, and sensory jar shaking to build focus.",
    color: "text-rose-600 bg-rose-50 border-rose-100",
  },
  {
    icon: ChefHat,
    title: "Cookery Sessions",
    description: "Mixing dough, measuring safe baking ingredients, and identifying fruits to build life skills.",
    color: "text-teal-600 bg-teal-50 border-teal-100",
  },
];

export default function ActivityHighlights() {
  return (
    <Section background="light" id="activity-highlights">
      <SectionHeading
        title="Activity Highlights"
        subtitle="A closer look at the structured educational segments we weave into your child's weekly routine."
        badge="Curriculum Highlights"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {highlights.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div className="space-y-4">
                {/* Icon Circle */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 ${item.color}`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-text-primary font-poppins mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-inter">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="w-8 h-1 bg-slate-100 group-hover:bg-primary group-hover:w-full transition-all duration-300 rounded-full mt-4" />
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
