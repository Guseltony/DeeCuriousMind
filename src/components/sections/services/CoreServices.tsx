"use client";

import React, { useState, useEffect } from "react";
import { Heart, TreePine, Palette, BookOpen, Award, Check } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../../shared/Section";
import SectionHeading from "../../shared/SectionHeading";
import { client } from "@/sanity/lib/client";
import * as LucideIcons from "lucide-react";

const coreServices = [
  {
    icon: Heart,
    title: "Full-Time Daycare & Naps",
    description: "Loving full-day care matching your child's home routines for feeding, nap time, and comfort, ensuring they feel secure and valued.",
    benefits: ["Cozy nap routines", "Healthy home-cooked meals", "Flexible settling-in support"],
    color: "bg-indigo-50 border-indigo-100 text-indigo-600",
    iconBg: "bg-indigo-500 text-white",
  },
  {
    icon: BookOpen,
    title: "Play-Based Reading & Phonics",
    description: "Fun, story-centered activities and guided phonics designed to naturally build early vocabulary and meet milestones.",
    benefits: ["Phonics & pre-writing", "Language tracking", "Bilingual communication support"],
    color: "bg-rose-50 border-rose-100 text-rose-600",
    iconBg: "bg-rose-500 text-white",
  },
  {
    icon: Palette,
    title: "Creative Arts & Messy Play",
    description: "Process-driven art sessions including finger-painting, molding clay, simple baking, and musical circle games.",
    benefits: ["Fine motor skills focus", "Sensory messy play tables", "Rhythms & nursery rhymes"],
    color: "bg-violet-50 border-violet-100 text-violet-600",
    iconBg: "bg-violet-500 text-white",
  },
  {
    icon: TreePine,
    title: "Sensory Nature Explorations",
    description: "Daily backyard play, sensory planting, leaf collection walks, and insect watching to inspire a love of nature.",
    benefits: ["Secure private garden", "Planting & gardening", "Gross motor activities"],
    color: "bg-emerald-50 border-emerald-100 text-emerald-600",
    iconBg: "bg-emerald-500 text-white",
  },
  {
    icon: Award,
    title: "EYFS School Readiness",
    description: "Preschool milestones centered on early counting, structural games, and teaching practical independence.",
    benefits: ["Simple counting games", "Self-dressing & toilet prep", "Emotional confidence"],
    color: "bg-amber-50 border-amber-100 text-amber-600",
    iconBg: "bg-amber-500 text-white",
  },
];

const serviceColors = [
  { color: "bg-indigo-50 border-indigo-100 text-indigo-600", iconBg: "bg-indigo-500 text-white" },
  { color: "bg-rose-50 border-rose-100 text-rose-600", iconBg: "bg-rose-500 text-white" },
  { color: "bg-violet-50 border-violet-100 text-violet-600", iconBg: "bg-violet-500 text-white" },
  { color: "bg-emerald-50 border-emerald-100 text-emerald-600", iconBg: "bg-emerald-500 text-white" },
  { color: "bg-amber-50 border-amber-100 text-amber-600", iconBg: "bg-amber-500 text-white" },
];

export default function CoreServices() {
  const [activeCoreServices, setActiveCoreServices] = useState<any[]>(coreServices);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await client.fetch(`*[_type == "service"] | order(order asc) {
          title,
          description,
          ageRange,
          schedule,
          iconName
        }`);
        if (data && data.length > 0) {
          const formatted = data.map((item: any, idx: number) => {
            const IconComponent = (LucideIcons as any)[item.iconName] || LucideIcons.HelpCircle;
            const style = serviceColors[idx % serviceColors.length];
            return {
              icon: IconComponent,
              title: item.title,
              description: item.description,
              benefits: [`Ages: ${item.ageRange}`, `Schedule: ${item.schedule}`],
              color: style.color,
              iconBg: style.iconBg,
            };
          });
          setActiveCoreServices([...formatted, ...coreServices]);
        }
      } catch (error) {
        console.error("Failed to fetch core services from Sanity:", error);
      }
    };
    fetchServices();
  }, []);

  return (
    <Section background="light" id="core-services" className="relative pt-16 pb-16 md:pt-20 md:pb-20 overflow-hidden">


      {/* Playful watermark doodles */}
      <div className="absolute top-20 right-10 text-primary/5 pointer-events-none -z-10 select-none">
        <BookOpen className="w-16 h-16 md:w-20 md:h-20 rotate-12" />
      </div>
      <div className="absolute bottom-20 left-10 text-secondary/5 pointer-events-none -z-10 select-none">
        <Palette className="w-16 h-16 md:w-20 md:h-20 -rotate-12" />
      </div>

      <SectionHeading
        title="Our Core Childcare Services"
        subtitle="A comprehensive early years framework combining structured development tasks with flexible, loving home care."
        badge="What We Provide"
      />

      <div className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1536px] 3xl:max-w-[1720px] 4xl:max-w-[1920px] mx-auto relative z-10 w-full">
        {activeCoreServices.map((svc, idx) => {
          const IconComponent = svc.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white rounded-3xl p-6 md:p-8 border-2 border-slate-100 shadow-sm flex flex-col justify-between text-left group transition-all duration-300 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)]"
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
                  {svc.benefits.map((benefit: string, bIdx: number) => (
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

