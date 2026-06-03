"use client";

import React from "react";
import { Heart, Gamepad2, Smile, TreePine, Palette, BookOpen, Check } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../../shared/Section";
import SectionHeading from "../../shared/SectionHeading";

const coreServices = [
  {
    icon: Heart,
    title: "Early Years Care",
    description: "Nurturing care for infants and toddlers, matching home routines for sleeping, feeding, and comfort to ensure they feel safe.",
    benefits: ["Cozy nap routines", "Healthy home-cooked meals", "Bilingual verbal support"],
    color: "bg-indigo-50 text-indigo-600 border-indigo-100",
    iconBg: "bg-indigo-500 text-white",
  },
  {
    icon: Gamepad2,
    title: "Learning Through Play",
    description: "Child-led curiosity play supported by Montessori-style open-ended materials, wooden toys, and sensory discovery setups.",
    benefits: ["Montessori wooden toys", "Cognitive problem solving", "Sensory exploring boxes"],
    color: "bg-purple-50 text-purple-600 border-purple-100",
    iconBg: "bg-purple-500 text-white",
  },
  {
    icon: Smile,
    title: "Social & Emotional Growth",
    description: "Small group interactions designed to teach kids to name feelings, share toys, show empathy, and develop self-regulation.",
    benefits: ["Cooperative play circles", "Basic mindfulness exercises", "Emotional vocabulary"],
    color: "bg-green-50 text-green-600 border-green-100",
    iconBg: "bg-green-500 text-white",
  },
  {
    icon: TreePine,
    title: "Outdoor Learning",
    description: "Daily backyard play, nature walks, leaf collecting, and bug hunting to inspire a native love for the natural world and science.",
    benefits: ["Secure private garden", "Planting & gardening", "Gross motor coordination"],
    color: "bg-amber-50 text-amber-600 border-amber-100",
    iconBg: "bg-amber-500 text-white",
  },
  {
    icon: Palette,
    title: "Creative Arts & Crafts",
    description: "Hands-on process art including finger-painting, molding clay, simple baking preparation, and song sessions.",
    benefits: ["Fine motor coordination", "Messy play tables", "Musical rhythms & rhymes"],
    color: "bg-rose-50 text-rose-600 border-rose-100",
    iconBg: "bg-rose-500 text-white",
  },
  {
    icon: BookOpen,
    title: "School Readiness",
    description: "Pre-school milestones aligned with the EYFS framework, including guided phonics, simple numeracy, and self-help skills.",
    benefits: ["Phonics & pre-writing", "Basic counting games", "Dressing & independence"],
    color: "bg-teal-50 text-teal-600 border-teal-100",
    iconBg: "bg-teal-500 text-white",
  },
];

export default function CoreServices() {
  return (
    <Section background="light" id="core-services" className="relative pt-16 pb-16 md:pt-20 md:pb-20 overflow-hidden">
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
      <div className="absolute top-20 right-10 text-primary/5 pointer-events-none -z-10 select-none">
        <Gamepad2 className="w-16 h-16 md:w-20 md:h-20 rotate-12" />
      </div>
      <div className="absolute bottom-20 left-10 text-secondary/5 pointer-events-none -z-10 select-none">
        <Palette className="w-16 h-16 md:w-20 md:h-20 -rotate-12" />
      </div>

      <SectionHeading
        title="Our Core Childcare Services"
        subtitle="A comprehensive early years framework combining structured development tasks with flexible, loving home care."
        badge="What We Provide"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
        {coreServices.map((svc, idx) => {
          const IconComponent = svc.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-sm flex flex-col justify-between text-left group transition-all duration-300"
            >
              <div className="space-y-6">
                {/* Header: Icon & Title */}
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl border shrink-0 ${svc.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-text-primary font-poppins">
                    {svc.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-text-secondary leading-relaxed font-inter">
                  {svc.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-2.5 pt-2 border-t border-slate-50">
                  {svc.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-text-primary font-inter">
                      <div className={`p-0.5 rounded-full ${svc.iconBg}`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Underlying styling bar */}
              <div className="w-10 h-1 bg-slate-100 group-hover:bg-primary group-hover:w-full transition-all duration-500 rounded-full mt-6" />
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
