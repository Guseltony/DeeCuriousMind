"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

const defaultSlides = [
  {
    image: "/images/hero/background.jpeg",
    badge: "Premium Home-from-Home Daycare",
    title: "A Nurturing Space Where Curious Minds Grow",
    description: "Offering a loving, secure, and stimulating early learning setting in Gillingham. Your child's comfort and developmental milestones are our highest priority.",
  },
  {
    image: "/images/hero/children-sorting.jpeg",
    badge: "Active EYFS Learning",
    title: "Creative Play That Inspires Young Minds",
    description: "Engaging child-led sensory sorting, arts, and cognitive puzzles. We follow the EYFS framework to prepare children for preschool at their own unique pace.",
  },
  {
    image: "/images/hero/children-in-garden.jpeg",
    badge: "Outdoor Exploration",
    title: "Discovering Nature in Our Secure Playground",
    description: "Fresh air, gardening, and physical outdoor play in our fully equipped, safe garden setting. Helping children build motor skills and healthy, active habits.",
  },
];

export default function HeroSection() {
  const [heroSlides, setHeroSlides] = useState(defaultSlides);
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const data = await client.fetch(`*[_type == "heroSlide"] | order(order asc) {
          title,
          badge,
          description,
          image
        }`);
        if (data && data.length > 0) {
          const formattedSlides = data.map((item: any) => ({
            image: urlForImage(item.image).url(),
            badge: item.badge,
            title: item.title,
            description: item.description,
          }));
          setHeroSlides([...formattedSlides, ...defaultSlides]);
        }
      } catch (error) {
        console.error("Failed to fetch hero slides from Sanity:", error);
      }
    };
    fetchSlides();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section className="relative min-h-[100vh] lg:min-h-[90vh] flex items-center pt-28 pb-20 px-4 sm:px-6 md:px-8 lg:px-12 w-full overflow-hidden bg-slate-950">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={heroSlides[currentIdx].image}
              alt={heroSlides[currentIdx].badge}
              fill
              priority={currentIdx === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay to ensure text contrast and premium feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-slate-900/60 to-black/40 z-10" />
      </div>

      <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1536px] 3xl:max-w-[1720px] 4xl:max-w-[1920px] mx-auto w-full relative z-20">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-5 md:space-y-6 text-left"
            >
              {/* Slogan Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white/15 text-[#FFFDF0] rounded-2xl border border-white/20 text-xs sm:text-sm font-bold tracking-wider font-poppins uppercase shadow-sm">
                <span>{heroSlides[currentIdx].badge}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-poppins">
                {heroSlides[currentIdx].title.split("Curious Minds").map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-amber-100">
                        Curious Minds
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </h1>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base text-slate-200 font-inter max-w-2xl leading-relaxed">
                {heroSlides[currentIdx].description}
              </p>

              {/* Call to Actions */}
              <div className="flex flex-row gap-3 items-center justify-start pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#FEFADF] hover:bg-[#FFFDF0] text-[#5F6C37] px-6 py-3.5 rounded-xl font-bold tracking-wide shadow-md hover:shadow-lg transition-all hover:translate-y-[-2px] cursor-pointer text-sm"
                >
                  Enquire Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center border-2 border-white/25 hover:border-white/40 bg-white/10 text-white hover:bg-white/15 px-6 py-3.5 rounded-xl font-bold tracking-wide transition-all hover:translate-y-[-2px] text-sm"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2.5">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIdx(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIdx === i ? "bg-white w-6" : "bg-white/40"
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
