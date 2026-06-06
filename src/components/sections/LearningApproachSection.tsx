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
    image: "/images/building_blocks_and_dinosaurs.jpeg",
    color: "bg-indigo-500 text-white shadow-indigo-100",
  },
  {
    icon: BookOpen,
    title: "Phonics, Stories & Reading",
    subtitle: "Language building and picture storybook hours.",
    description: "Early literacy is nurtured through structured story circles, picture books, and basic phonetic games. We build vocabulary, listening capabilities, and confidence, setting a strong foundation for preschool speech.",
    image: "/images/reading_corner_and_lego_rug.jpeg",
    color: "bg-purple-500 text-white shadow-purple-100",
  },
  {
    icon: Leaf,
    title: "Sensory Outdoor Exploration",
    subtitle: "Gardening, nature discovery, and fresh air play.",
    description: "Physical and organic interactions are vital. Children explore our private garden space, plant seedlings, investigate leaves, and engage in outdoor sensory play that encourages curiosity about the natural world.",
    image: "/images/gardening_planter_box.jpeg",
    color: "bg-green-500 text-white shadow-green-100",
  },
  {
    icon: HeartHandshake,
    title: "Social & Emotional Milestones",
    subtitle: "Collaborative play, emotional regulation, and sharing.",
    description: "In our small home group, kids learn critical social tools: greeting peers, sharing toys, communicating needs, and understanding emotions. Group games build lasting empathy and healthy social habits.",
    image: "/images/children_nature_walk_outing.jpeg",
    color: "bg-amber-500 text-white shadow-amber-100",
  },
];

export default function LearningApproachSection() {
  return (
    <Section background="light" id="learning-approach" className="relative pt-12 pb-12 md:pt-20 md:pb-20">
      {/* Subtle play watermarks */}
      <div className="absolute top-24 left-10 text-primary/5 pointer-events-none -z-10 select-none">
        <Sun className="w-16 h-16 md:w-20 md:h-20 rotate-45" />
      </div>
      <div className="absolute bottom-20 right-10 text-secondary/5 pointer-events-none -z-10 select-none">
        <Compass className="w-16 h-16 md:w-20 md:h-20 -rotate-12" />
      </div>

      <SectionHeading
        title="Our Learning Journey Steps"
        subtitle="A child-led, structured curriculum that weaves play, sensory tasks, and cognitive milestones together."
        badge="Development Milestones"
      />

      {/* Desktop Layout (Compact Alternate Journey Timeline) */}
      <div className="hidden md:block relative max-w-4xl mx-auto">
        {/* Central Vertical Line */}
        <div className="absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-slate-200" />

        <div className="space-y-12">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className="relative grid grid-cols-12 gap-8 items-center"
              >
                {/* Center Timeline Icon */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-4 border-white shadow-sm flex items-center justify-center z-20"
                  style={{
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className={`w-full h-full rounded-full flex items-center justify-center ${step.color}`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                </motion.div>

                {/* Text Block */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -25 : 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`col-span-5 ${
                    isEven ? "text-right order-2 md:order-1" : "order-2 md:order-2 col-start-8"
                  } space-y-2 text-left`}
                >
                  <h3 className="text-lg font-bold text-text-primary font-poppins">
                    {step.title}
                  </h3>
                  <p className="text-xs font-bold text-primary font-inter uppercase tracking-wide">
                    {step.subtitle}
                  </p>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-inter">
                    {step.description}
                  </p>
                </motion.div>

                {/* Image Block */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 25 : -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`col-span-5 ${
                    isEven ? "col-start-8 order-1 md:order-2" : "order-1 md:order-1"
                  } flex justify-center`}
                >
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm border-2 border-white transition-transform duration-500 hover:scale-[1.01]">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="320px"
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Layout (Space-Saving Horizontal Snap Carousel) */}
      <div className="md:hidden flex overflow-x-auto gap-4 pb-4 px-4 snap-x snap-mandatory scrollbar-none scroll-smooth">
        {steps.map((step, idx) => {
          const IconComponent = step.icon;
          return (
            <div
              key={idx}
              className="w-[280px] sm:w-[320px] shrink-0 snap-center bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1 text-left">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${step.color}`}>
                    <IconComponent className="w-3 h-3" />
                    <span>Step {idx + 1}</span>
                  </span>
                  <h4 className="text-base font-bold text-text-primary font-poppins">{step.title}</h4>
                  <p className="text-[10px] font-bold text-primary font-inter uppercase">{step.subtitle}</p>
                  <p className="text-xs text-text-secondary font-inter leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
