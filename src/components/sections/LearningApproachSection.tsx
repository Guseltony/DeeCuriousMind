"use client";

import React from "react";
import Image from "next/image";
import { Palette, BookOpen, Leaf, HeartHandshake, Sun, Compass } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../shared/Section";
import SectionHeading from "../shared/SectionHeading";

const steps = [
  {
    icon: Palette,
    title: "Creativity & Expression",
    subtitle: "Art, crafts, clay, and painting sessions.",
    description: "We encourage children to express themselves through hands-on creative experiments. Artistic activities boost fine motor skills, encourage independence, and allow children to discover colors, textures, and shapes naturally.",
    image: "/images/creative_activity.png",
    color: "bg-indigo-500 text-white shadow-indigo-100",
  },
  {
    icon: BookOpen,
    title: "Phonics, Stories & Reading",
    subtitle: "Language building and picture storybook hours.",
    description: "Early literacy is nurtured through structured story circles, picture books, and basic phonetic games. We build vocabulary, listening capabilities, and confidence, setting a strong foundation for preschool speech.",
    image: "/images/social_group.png",
    color: "bg-purple-500 text-white shadow-purple-100",
  },
  {
    icon: Leaf,
    title: "Sensory Outdoor Exploration",
    subtitle: "Gardening, nature discovery, and fresh air play.",
    description: "Physical and organic interactions are vital. Children explore our private garden space, plant seedlings, investigate leaves, and engage in outdoor sensory play that encourages curiosity about the natural world.",
    image: "/images/nature_explore.png",
    color: "bg-green-500 text-white shadow-green-100",
  },
  {
    icon: HeartHandshake,
    title: "Social & Emotional Milestones",
    subtitle: "Collaborative play, emotional regulation, and sharing.",
    description: "In our small home group, kids learn critical social tools: greeting peers, sharing toys, communicating needs, and understanding emotions. Group games build lasting empathy and healthy social habits.",
    image: "/images/learning_play.png",
    color: "bg-amber-500 text-white shadow-amber-100",
  },
];

export default function LearningApproachSection() {
  return (
    <Section background="light" id="learning-approach" className="relative pt-16 pb-16 md:pt-20 md:pb-20">
      {/* Wave Dividers */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative block w-full h-[25px] md:h-[40px]" preserveAspectRatio="none">
          <path d="M0,0 L1440,0 L1440,35 C1152,10 864,55 576,35 C288,15 144,15 0,30 Z" fill="#FFFFFF" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative block w-full h-[25px] md:h-[40px]" preserveAspectRatio="none">
          <path d="M0,50 L1440,50 L1440,15 C1152,40 864,-5 576,15 C288,35 144,35 0,20 Z" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Subtle play watermarks */}
      <div className="absolute top-24 left-10 text-primary/5 pointer-events-none -z-10 select-none">
        <Sun className="w-16 h-16 md:w-20 md:h-20 rotate-45" />
      </div>
      <div className="absolute bottom-20 right-10 text-secondary/5 pointer-events-none -z-10 select-none">
        <Compass className="w-16 h-16 md:w-20 md:h-20 rotate-12" />
      </div>
      {/* Title */}
      <SectionHeading
        title="Our Learning Journey Pathway"
        subtitle="A child-led, structured curriculum that weaves play, sensory tasks, and cognitive milestones together."
        badge="Development Milestones"
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Central Vertical Line (Desktop Only) */}
        <div className="absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-slate-200 hidden md:block" />

        {/* Journey Steps */}
        <div className="space-y-16 md:space-y-24">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
              >
                {/* Timeline Node Center (Desktop Only) */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-white shadow-md flex items-center justify-center z-20 hidden md:flex"
                  style={{
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className={`w-full h-full rounded-full flex items-center justify-center ${step.color}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                </motion.div>

                {/* Left Side (Desktop: Content or Image) */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className={`md:col-span-5 ${
                    isEven ? "md:text-right order-2 md:order-1" : "order-2 md:order-2 md:col-start-8"
                  } space-y-4 text-left`}
                >
                  {/* Category Badge on Mobile/Desktop */}
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider md:hidden ${step.color}`}>
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>Step {idx + 1}</span>
                  </span>

                  <h3 className="text-xl md:text-2xl font-bold text-text-primary font-poppins">
                    {step.title}
                  </h3>
                  <p className="text-sm font-semibold text-primary font-inter uppercase tracking-wide">
                    {step.subtitle}
                  </p>
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed font-inter">
                    {step.description}
                  </p>
                </motion.div>

                {/* Right Side (Desktop: Image or Content) */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className={`md:col-span-5 ${
                    isEven ? "md:col-start-8 order-1 md:order-2" : "order-1 md:order-1"
                  } flex justify-center`}
                >
                  <div className="relative w-full aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden shadow-md border-4 border-white transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 42vw"
                      className="object-cover"
                    />
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
