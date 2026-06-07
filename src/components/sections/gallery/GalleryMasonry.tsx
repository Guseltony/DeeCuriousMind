"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Shield, Sparkles, Heart, Compass, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../../shared/Section";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

const defaultGalleryList = [
  { src: "/images/playroom_wide_view.jpeg", caption: "Welcome to our spacious playroom, where learning and imagination come alive! 🌈" },
  { src: "/images/backyard_playground.jpeg", caption: "Our secure backyard playground, perfect for active outdoor adventures! ☀️" },
  { src: "/images/sensory_toys_sorting.jpeg", caption: "Sensory exploration and sorting activities to build fine motor skills. 🧩" },
  { src: "/images/outdoor_play_area.jpeg", caption: "An outdoor play environment designed for safe discovery and fun. 🌿" },
  { src: "/images/toy_storage_and_first_aid.jpeg", caption: "Organized toy stations with safety and care at the heart of everything. 🧸" },
  { src: "/images/outdoor_seating_and_easel.jpeg", caption: "Creative art easels and outdoor spaces to inspire young artists! 🎨" },
  { src: "/images/cozy_sofa_and_activity_table.jpeg", caption: "A cozy reading corner and dedicated tables for active learning. 📚" },
  { src: "/images/building_blocks_and_dinosaurs.jpeg", caption: "Building dreams and exploring history with blocks and dinosaurs! 🦖" },
  { src: "/images/reading_corner_and_lego_rug.jpeg", caption: "Comfortable spaces to sit back, read, and create with LEGO. 🧱" },
  { src: "/images/wooden_monkey_stacking_toy.jpeg", caption: "Eco-friendly wooden toys to foster concentration and coordination. 🐒" },
  { src: "/images/match_and_count_sorting_tray.jpeg", caption: "Early mathematics and cognitive development through interactive play. 🔢" },
  { src: "/images/water_play_pipettes_and_funnels.jpeg", caption: "Fascinating water play experiments to spark scientific curiosity! 💧" },
  { src: "/images/color_recognition_sensory_tray.jpeg", caption: "Vibrant color recognition trays that make sensory learning a joy. ✨" },
  { src: "/images/gardening_planter_box.jpeg", caption: "Budding gardeners learning where veggies grow in our planter box. 🌱" },
  { src: "/images/children_nature_walk_outing.jpeg", caption: "Exciting nature walks and local outings to connect with the world. 🚶" },
  { src: "/images/number_learning_table.jpeg", caption: "Interactive number learning stations to build a solid foundation. 🎓" },
  { src: "/images/Child_daycare_room_background_202606051617.jpeg", caption: "A warm, bright, and secure daycare setting for early childhood exploration. ☀️" },
  { src: "/images/hero/background.jpeg", caption: "Premium day childcare settings where children feel safe, happy, and valued. ❤️" },
  { src: "/images/hero/children-in-garden.jpeg", caption: "Outdoor physical activities in our garden helping kids build motor skills. 🌿" },
  { src: "/images/hero/children-sorting.jpeg", caption: "Sensory development games that prepare children for future learning. 🧠" },
  { src: "/images/with kids/Add_children_to_daycare_setup_202606061350.jpeg", caption: "Hands-on creative arts and crafts to develop imagination and motor skills. 🎨" },
  { src: "/images/with kids/Children_playing_in_playground_202606051646.jpeg", caption: "Active outdoor play with peers to foster social bonds and coordination. ⚽" },
  { src: "/images/with kids/Daycare_setting_for_young_children_202606061434.jpeg", caption: "A nurturing early education setting filled with positive peer interactions. 🌟" },
  { src: "/images/with kids/turn_this_into_daycare_settings_202606061354.jpeg", caption: "Interactive group circle times and play-based learning spaces. 🧸" },
];

export default function GalleryMasonry() {
  const [galleryList, setGalleryList] = useState(defaultGalleryList);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  React.useEffect(() => {
    if (selectedIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIdx]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const data = await client.fetch(`*[_type == "galleryItem"] | order(order asc) {
          title,
          image,
          caption
        }`);
        if (data && data.length > 0) {
          const cmsItems = data.map((item: any) => ({
            src: urlForImage(item.image).url(),
            caption: item.caption
          }));
          setGalleryList([...cmsItems, ...defaultGalleryList]);
        }
      } catch (error) {
        console.error("Failed to fetch gallery items from Sanity:", error);
      }
    };
    fetchGallery();
  }, []);

  const openReel = (idx: number) => {
    setSelectedIdx(idx);
    setTimeout(() => {
      const container = document.getElementById("reels-scroll-container");
      const el = document.getElementById(`reel-item-${idx}`);
      if (container && el) {
        container.scrollTop = el.offsetTop;
      }
    }, 120);
  };

  return (
    <div className="w-full flex flex-col bg-bg-light">
      {/* Scrollbar hiding styles for desktop */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @media (min-width: 768px) {
          .hide-scrollbar::-webkit-scrollbar {
            display: none !important;
          }
          .hide-scrollbar {
            -ms-overflow-style: none !important;
            scrollbar-width: none !important;
          }
        }
      `}} />

      {/* 1. Combined Gallery Hero Section */}
      <section className="relative flex items-center pt-30 md:pt-40 pb-12 px-4 sm:px-6 lg:px-8 w-full bg-gradient-to-br from-bg-light via-white to-primary/10 overflow-hidden text-left">
        {/* Background Blurs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 translate-x-20 -translate-y-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 -translate-x-20 translate-y-20" />

        <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1536px] 3xl:max-w-[1720px] 4xl:max-w-[1920px] mx-auto w-full flex justify-center">
          {/* Text Content (Left Column) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 space-y-5 text-center"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide uppercase">
              <Compass className="w-3.5 h-3.5 fill-current" />
              A Visual Tour of Our Setting
            </span>

            {/* Main Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight font-poppins">
              Explore Life at <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Dees Curious Minds
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base text-text-secondary font-inter max-w-xl leading-relaxed text-center">
              Take a look at the rooms, outdoor gardens, and creative setups where children spend their days exploring, learning, and developing lifelong friendships.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-2.5 pt-1">
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-100 shadow-sm">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-xs font-bold text-text-primary font-poppins">Safe Environment</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-100 shadow-sm">
                <Heart className="w-4 h-4 text-primary fill-current" />
                <span className="text-xs font-bold text-text-primary font-poppins">Learning via Play</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-100 shadow-sm">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="text-xs font-bold text-text-primary font-poppins">Creative Activities</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Gallery Masonry Grid */}
      <Section background="light" id="gallery-showcase" className="py-12 md:py-16">
        <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1536px] 3xl:max-w-[1720px] 4xl:max-w-[1920px] mx-auto columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6 px-2 sm:px-4">
          {galleryList.map((item, index) => (
            <div
              key={index}
              onClick={() => openReel(index)}
              className="break-inside-avoid bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 group relative mb-4 sm:mb-6 cursor-pointer"
            >
              <img
                src={item.src}
                alt={`Gallery showcase ${index + 1}`}
                className="w-full h-auto object-cover block"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </Section>

      {/* 3. Full-Screen Vertical Reel Modal Viewer */}
      {selectedIdx !== null && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-[150] flex items-center justify-center overflow-hidden select-none">
          {/* Centered Scrollable Instagram Reels Container */}
          <div
            id="reels-scroll-container"
            className="w-full max-w-[480px] md:max-w-[700px] lg:max-w-[850px] xl:max-w-[950px] h-full h-screen h-[100dvh] bg-neutral-950 md:border-x md:border-neutral-800/40 overflow-y-scroll snap-y snap-mandatory scroll-smooth relative flex flex-col hide-scrollbar touch-pan-y"
          >
            {galleryList.map((item, index) => (
              <div
                key={index}
                id={`reel-item-${index}`}
                className="w-full h-full h-screen h-[100dvh] flex-shrink-0 snap-start relative bg-black overflow-hidden"
              >
                <img
                  src={item.src}
                  alt={`Reel view ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                />

                {/* Top Header Label */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/80 to-transparent p-4 flex items-center justify-between pointer-events-none z-20">
                  <span className="font-poppins font-extrabold text-xs tracking-wider text-white drop-shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse fill-accent" />
                    Dees CURIOUS MINDS
                  </span>
                </div>

                {/* Bottom Captions Card Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent p-6 pb-14 pt-20 text-left text-white z-20 pointer-events-none">
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-7 h-7 rounded-full bg-primary/35 border border-primary/45 flex items-center justify-center backdrop-blur-sm text-[11px]">
                      ✨
                    </div>
                    <span className="font-poppins font-bold text-sm tracking-wide text-white drop-shadow-md">
                      Dees Curious Minds
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-primary/80 border border-primary/20 text-[9px] font-bold uppercase tracking-wider text-white">
                      Setting
                    </span>
                  </div>
                  <p className="font-inter text-xs sm:text-sm text-neutral-200 leading-relaxed font-medium drop-shadow-md">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Close Button (Rendered after container for guaranteed overlay) */}
          <button
            onClick={() => setSelectedIdx(null)}
            className="fixed top-4 right-4 z-[100] p-3 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer border border-white/20 backdrop-blur-md shadow-lg"
            aria-label="Close viewer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}
