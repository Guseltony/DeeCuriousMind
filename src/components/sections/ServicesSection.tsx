"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Compass, Shield, ArrowRight, Palette, Puzzle } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Section from "../shared/Section";
import SectionHeading from "../shared/SectionHeading";
import { client } from "@/sanity/lib/client";
import * as LucideIcons from "lucide-react";

const services = [
  {
    image: "/images/playroom_wide_view.jpeg",
    icon: Shield,
    title: "Full-Time Daycare",
    age: "1 – 5 Years",
    description: "A structured, full-day program providing a consistent routine of healthy meals, outdoor play, structured learning, and quiet nap times.",
    color: "bg-indigo-500 text-white",
  },
  {
    image: "/images/wooden_monkey_stacking_toy.jpeg",
    icon: Sparkles,
    title: "Early Years Learning",
    age: "2 – 5 Years",
    description: "Daily learning milestones based on EYFS framework, including language development, mathematics, arts, crafts, and sensory exploration.",
    color: "bg-amber-500 text-white",
  },
  {
    image: "/images/toy_storage_and_first_aid.jpeg",
    icon: Compass,
    title: "Flexi-Care & Half-Days",
    age: "6 Months – 5 Years",
    description: "Part-time scheduling tailored to work-life balance, featuring the same high-quality developmental activities and social integration.",
    color: "bg-purple-500 text-white",
  },
];

const serviceImages = [
  "/images/playroom_wide_view.jpeg",
  "/images/wooden_monkey_stacking_toy.jpeg",
  "/images/toy_storage_and_first_aid.jpeg",
  "/images/outdoor_play_area.jpeg",
  "/images/backyard_playground.jpeg",
];

const homeServiceColors = [
  "bg-indigo-500 text-white",
  "bg-amber-500 text-white",
  "bg-purple-500 text-white",
  "bg-rose-500 text-white",
  "bg-emerald-500 text-white",
];

export default function ServicesSection() {
  const [activeServices, setActiveServices] = useState<any[]>(services);

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
            return {
              image: serviceImages[idx % serviceImages.length],
              icon: IconComponent,
              title: item.title,
              age: item.ageRange,
              description: item.description,
              color: homeServiceColors[idx % homeServiceColors.length],
            };
          });
          setActiveServices([...formatted, ...services]);
        }
      } catch (error) {
        console.error("Failed to fetch services from Sanity:", error);
      }
    };
    fetchServices();
  }, []);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <Section background="white" id="services">
      {/* Playful watermark doodles */}
      <div className="absolute top-12 left-10 text-primary/5 pointer-events-none -z-10 select-none">
        <Palette className="w-16 h-16 md:w-20 md:h-20 rotate-12" />
      </div>
      <div className="absolute bottom-12 right-10 text-secondary/5 pointer-events-none -z-10 select-none">
        <Puzzle className="w-16 h-16 md:w-20 md:h-20 -rotate-12" />
      </div>

      {/* Title */}
      <SectionHeading
        title="Our Childcare Services"
        subtitle="Designed with love, structure, and flexibility to support your family's needs and your child's milestones."
        badge="Nurture & Learn"
      />

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {activeServices.map((svc, idx) => {
          const IconComponent = svc.icon;
          return (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.08)" }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm transition-all duration-300 flex flex-col h-full group text-left"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Floating Age Tag */}
                <span className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {svc.age}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between relative">
                {/* Floating Icon overlapping image border */}
                <div className={`absolute top-0 left-8 -translate-y-1/2 p-3.5 rounded-2xl ${svc.color} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-5 h-5" />
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="text-xl font-bold text-text-primary font-poppins">
                    {svc.title}
                  </h3>
                  <p className="text-sm md:text-base text-text-secondary font-inter leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                <div className="pt-6">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-hover transition-colors group/link"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
