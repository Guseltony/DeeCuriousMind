"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../../shared/Section";
import SectionHeading from "../../shared/SectionHeading";

const categories = [
  { id: "all", name: "All Photos" },
  { id: "learning", name: "Learning Activities" },
  { id: "creative", name: "Creative Play" },
  { id: "reading", name: "Reading & Story Time" },
  { id: "arts", name: "Arts & Crafts" },
  { id: "outdoor", name: "Outdoor Exploration" },
  { id: "daily", name: "Daily Activities" },
];

const galleryItems = [
  {
    id: 1,
    image: "/images/learning_play.png",
    title: "Early Learning Puzzles",
    subtitle: "Developing fine motor skills & logic",
    categories: ["learning", "creative"],
  },
  {
    id: 2,
    image: "/images/hero_childcare.png",
    title: "Indoor Safe Playroom",
    subtitle: "Montessori wooden toys and sensory sets",
    categories: ["daily", "creative"],
  },
  {
    id: 3,
    image: "/images/social_group.png",
    title: "Weekly Story Circle",
    subtitle: "Building vocabulary & group social skills",
    categories: ["reading", "daily"],
  },
  {
    id: 4,
    image: "/images/creative_activity.png",
    title: "Baking & Dough Shaping",
    subtitle: "Cookery, counting, and sensory texture",
    categories: ["arts", "creative"],
  },
  {
    id: 5,
    image: "/images/nature_explore.png",
    title: "Sensory Backyard Exploration",
    subtitle: "Discovering leaves, seedlings & fresh air",
    categories: ["outdoor"],
  },
  {
    id: 6,
    image: "/images/denise_childcare.png",
    title: "Denise's Learning Setup",
    subtitle: "Individual guidance & phonics circles",
    categories: ["learning", "arts"],
  },
];

export default function GalleryMasonry() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems = galleryItems.filter((item) =>
    activeFilter === "all" ? true : item.categories.includes(activeFilter)
  );

  return (
    <Section background="light" id="gallery-showcase">
      <SectionHeading
        title="Featured Gallery Showcase"
        subtitle="Filter by category to explore the everyday moments of discovery, playing, and milestones at our setting."
        badge="Setting Showcase"
      />

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeFilter === cat.id
                ? "bg-primary text-white shadow-sm"
                : "bg-white text-text-secondary hover:text-text-primary border border-slate-100 hover:bg-slate-50"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Grid Showcase */}
      <motion.div
        layout
        className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-6xl mx-auto items-stretch"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm flex flex-col group text-left h-full"
            >
              {/* Image Frame with Zoom */}
              <div className="relative h-36 sm:h-48 md:h-64 w-full overflow-hidden shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-w-768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Text Card Body */}
              <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm md:text-base font-bold text-text-primary font-poppins">
                    {item.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs md:text-sm text-text-secondary font-inter">
                    {item.subtitle}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-3 sm:pt-4">
                  {item.categories.map((cId) => {
                    const matchedCat = categories.find((cat) => cat.id === cId);
                    return (
                      <span
                        key={cId}
                        className="px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[8px] sm:text-[10px] font-bold font-inter capitalize"
                      >
                        {matchedCat ? matchedCat.name : cId}
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
