"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Image as ImageIcon } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Section from "../shared/Section";
import SectionHeading from "../shared/SectionHeading";

const galleryItems = [
  {
    image: "/images/playroom_wide_view.jpeg",
    title: "Vibrant Playroom",
    category: "Indoor Environment",
    height: "h-[160px] sm:h-[220px] md:h-[280px]",
  },
  {
    image: "/images/building_blocks_and_dinosaurs.jpeg",
    title: "Sensory Building Blocks",
    category: "Structured Play",
    height: "h-[200px] sm:h-[260px] md:h-[340px]",
  },
  {
    image: "/images/color_recognition_sensory_tray.jpeg",
    title: "Color Recognition Stacker",
    category: "Creative Arts",
    height: "h-[180px] sm:h-[240px] md:h-[300px]",
  },
  {
    image: "/images/gardening_planter_box.jpeg",
    title: "Seedling Planting",
    category: "Outdoor Learning",
    height: "h-[220px] sm:h-[280px] md:h-[360px]",
  },
  {
    image: "/images/cozy_sofa_and_activity_table.jpeg",
    title: "Cozy Activity Corner",
    category: "Early Literacy",
    height: "h-[170px] sm:h-[230px] md:h-[310px]",
  },
  {
    image: "/images/with kids/Add_children_to_daycare_setup_202606061350.jpeg",
    title: "Creative Arts & Crafts",
    category: "Expressive Design",
    height: "h-[210px] sm:h-[270px] md:h-[350px]",
  },
  {
    image: "/images/with kids/Children_playing_in_playground_202606051646.jpeg",
    title: "Outdoor Adventures",
    category: "Physical Play",
    height: "h-[190px] sm:h-[250px] md:h-[320px]",
  },
  {
    image: "/images/with kids/Daycare_setting_for_young_children_202606061434.jpeg",
    title: "Social Development",
    category: "Group Interaction",
    height: "h-[200px] sm:h-[260px] md:h-[340px]",
  },
  {
    image: "/images/hero/children-in-garden.jpeg",
    title: "Exploring Nature",
    category: "Active Discovery",
    height: "h-[180px] sm:h-[240px] md:h-[300px]",
  },
  {
    image: "/images/water_play_pipettes_and_funnels.jpeg",
    title: "Science & Water Experiments",
    category: "Cognitive Play",
    height: "h-[220px] sm:h-[280px] md:h-[360px]",
  },
];

export default function GalleryPreviewSection() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Section background="white" id="gallery-preview">
      {/* Title */}
      <SectionHeading
        title="Our Environment & Activities"
        subtitle="A visual peek into the safe learning environments, creative work, and garden play our kids enjoy daily."
        badge="Photo Gallery"
      />

      {/* CSS Columns Masonry Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="columns-2 lg:columns-3 gap-3 md:gap-6 space-y-3 md:space-y-6"
      >
        {galleryItems.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className={`break-inside-avoid relative rounded-2xl overflow-hidden shadow-sm group cursor-pointer border border-slate-100 mb-3 md:mb-6 ${item.height}`}
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Hover Backdrop Overlay */}
            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-5 z-10">
              {/* Floating Center Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-all duration-300">
                <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              {/* Title & Category Info */}
              <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 text-left">
                <span className="text-[10px] font-semibold text-primary-hover uppercase tracking-wider">
                  {item.category}
                </span>
                <h4 className="text-xs sm:text-base font-bold text-white font-poppins mt-0.5 leading-tight">
                  {item.title}
                </h4>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <div className="mt-12 text-center">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 border-2 border-slate-200 hover:border-primary/30 hover:bg-slate-50 text-text-primary px-7 py-3 rounded-xl font-bold tracking-wide transition-all hover:translate-y-[-1px] shadow-sm"
        >
          <ImageIcon className="w-4 h-4 text-primary" />
          View Full Gallery
        </Link>
      </div>
    </Section>
  );
}
