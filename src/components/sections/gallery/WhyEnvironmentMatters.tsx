"use client";

import React from "react";
import { ShieldCheck, Smile, Compass, Users, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../../shared/Section";
import SectionHeading from "../../shared/SectionHeading";

const points = [
  {
    icon: ShieldCheck,
    title: "Safe & Protective Spaces",
    description: "Every corner is meticulously safety-proofed and monitored, allowing toddlers to explore freely without restrictive baby-gates.",
    color: "text-green-600 bg-green-50 border-green-100",
  },
  {
    icon: Smile,
    title: "Fosters Self-Confidence",
    description: "Low-level tables and accessible open shelving allow children to make their own activity choices, building independence.",
    color: "text-indigo-600 bg-indigo-50 border-indigo-100",
  },
  {
    icon: Compass,
    title: "Inspires Native Curiosity",
    description: "We use natural, open-ended materials (wooden items, shells, twigs) that prompt children to touch, ask questions, and explore.",
    color: "text-purple-600 bg-purple-50 border-purple-100",
  },
  {
    icon: Users,
    title: "Builds Peer Relationships",
    description: "Cozy group seating and double art easels teach kids how to negotiate resources, share materials, and build active friendships.",
    color: "text-rose-600 bg-rose-50 border-rose-100",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning Opportunities",
    description: "Our zones integrate printed word labels, early numbering charts, and sensory setups that trigger language development naturally.",
    color: "text-amber-600 bg-amber-50 border-amber-100",
  },
];

export default function WhyEnvironmentMatters() {
  return (
    <Section background="light" id="why-environment-matters">
      <SectionHeading
        title="Why the Childcare Environment Matters"
        subtitle="A child's physical surroundings influence their mood, confidence, and cognitive development. Here is how we optimize our spaces."
        badge="Space Philosophy"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
        {points.map((point, idx) => {
          const IconComponent = point.icon;
          const isLast = idx === points.length - 1;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className={`p-6 md:p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left group ${
                isLast ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="space-y-4">
                {/* Icon Container */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 ${point.color}`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-text-primary font-poppins mb-2">
                    {point.title}
                  </h4>
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed font-inter">
                    {point.description}
                  </p>
                </div>
              </div>

              {/* Sub hover bar */}
              <div className="w-8 h-1 bg-slate-100 group-hover:bg-primary group-hover:w-full transition-all duration-300 rounded-full mt-6" />
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
