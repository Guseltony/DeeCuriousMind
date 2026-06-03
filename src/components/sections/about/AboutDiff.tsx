"use client";

import React from "react";
import { Home, HeartHandshake, ShieldCheck, MessageSquare, Smile } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../../shared/Section";
import SectionHeading from "../../shared/SectionHeading";

const diffPoints = [
  {
    icon: Home,
    title: "Home-from-Home",
    description: "A cozy, familiar domestic setting where children feel secure and settled, making separation transitions smooth and gentle.",
    color: "text-indigo-600 bg-indigo-50 border-indigo-100",
  },
  {
    icon: HeartHandshake,
    title: "Individual Attention",
    description: "Low childminder-to-child ratios ensure that your child receives personalized focus, care, and pacing tailored to their milestones.",
    color: "text-purple-600 bg-purple-50 border-purple-100",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Insured Care",
    description: "Fully Ofsted-registered, DBS-enhanced cleared, and pediatric first aid certified, offering a completely protected setting.",
    color: "text-green-600 bg-green-50 border-green-100",
  },
  {
    icon: MessageSquare,
    title: "Strong Communication",
    description: "Daily digital updates, sharing of photo stories, and milestone check-ins keep parents fully connected to daily activities.",
    color: "text-amber-600 bg-amber-50 border-amber-100",
  },
];

export default function AboutDiff() {
  return (
    <Section background="white" id="about-diff" className="relative py-8 md:py-12">
      {/* Playful watermark doodles */}
      <div className="absolute top-12 left-10 text-[#5F6C37]/5 pointer-events-none -z-10 select-none">
        <HeartHandshake className="w-16 h-16 md:w-20 md:h-20 rotate-12" />
      </div>
      <div className="absolute bottom-12 right-10 text-[#A66B3B]/5 pointer-events-none -z-10 select-none">
        <Smile className="w-16 h-16 md:w-20 md:h-20 -rotate-12" />
      </div>

      <SectionHeading
        title="What Makes Dee's Different"
        subtitle="We blend professional nursery curriculum milestones with the warmth, flexibility, and love of a family household."
        badge="Why Choose Us"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative z-10">
        {diffPoints.map((point, idx) => {
          const IconComponent = point.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-85px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -4, boxShadow: "0 10px 25px -10px rgba(0, 0, 0, 0.04)" }}
              className="p-5 md:p-6 bg-white border border-slate-100 rounded-2xl shadow-sm transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div className="space-y-3">
                {/* Icon Container */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 ${point.color}`}>
                  <IconComponent className="w-4 h-4" />
                </div>

                {/* Text Blocks */}
                <h3 className="text-base font-bold text-text-primary font-poppins">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-inter">
                  {point.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
