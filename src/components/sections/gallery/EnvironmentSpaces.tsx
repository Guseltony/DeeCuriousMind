"use client";

import React from "react";
import Image from "next/image";
import { Home, Sparkles, BookOpen, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../../shared/Section";
import SectionHeading from "../../shared/SectionHeading";

const spaceCards = [
  {
    image: "/images/hero_childcare.png",
    icon: Home,
    title: "Indoor Learning Space",
    description: "Designed to feel like home yet structured for education, equipped with Montessori wooden toys, counting boards, and sensory trays.",
    color: "bg-indigo-500",
  },
  {
    image: "/images/creative_activity.png",
    icon: Sparkles,
    title: "Creative Corner",
    description: "A dedicated messy play station featuring washable surfaces for paint exercises, clay modeling, baking prep, and texture work.",
    color: "bg-rose-500",
  },
  {
    image: "/images/social_group.png",
    icon: BookOpen,
    title: "Reading Area",
    description: "A quiet, carpeted reading nook with floor cushions, toddler-height open bookshelves, and a rich, language-rich storybook library.",
    color: "bg-purple-500",
  },
  {
    image: "/images/nature_explore.png",
    icon: Shield,
    title: "Outdoor Play Area",
    description: "A secure, gated backyard play garden with climbing structures, organic seed beds, and grass areas for fresh air coordination.",
    color: "bg-green-500",
  },
  {
    image: "/images/learning_play.png",
    icon: Users,
    title: "Group Activity Area",
    description: "An open, multi-purpose area for tabletop snacks, group play circles, musical song sessions, and cooperative milestones.",
    color: "bg-amber-500",
  },
];

export default function EnvironmentSpaces() {
  return (
    <Section background="white" id="environment-spaces">
      <SectionHeading
        title="Our Specialized Learning Areas"
        subtitle="Every square foot of our setting is thoughtfully structured to balance educational discovery with comforting safety."
        badge="Physical Environment"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
        {spaceCards.map((space, idx) => {
          const IconComponent = space.icon;
          const isLast = idx === spaceCards.length - 1;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              whileHover={{ y: -6, boxShadow: "0 15px 35px -10px rgba(0, 0, 0, 0.06)" }}
              className={`bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm flex flex-col group text-left h-full transition-all duration-300 ${
                isLast ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Image Frame */}
              <div className="relative h-56 w-full overflow-hidden shrink-0">
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Floating Icon */}
                <div className={`absolute top-4 left-4 p-2.5 rounded-xl text-white ${space.color} shadow-md`}>
                  <IconComponent className="w-5 h-5" />
                </div>
              </div>

              {/* Content body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-bold text-text-primary font-poppins">
                    {space.title}
                  </h3>
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed font-inter">
                    {space.description}
                  </p>
                </div>

                <div className="w-10 h-1 bg-slate-100 group-hover:bg-primary group-hover:w-full transition-all duration-500 rounded-full mt-6" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
