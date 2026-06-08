"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, Smile, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../shared/Section";
import SectionHeading from "../shared/SectionHeading";
import { client } from "@/sanity/lib/client";

// const testimonials = [
//   {
//     rating: 5,
//     name: "Sarah Jenkins",
//     role: "Mother of Leo (3 years old)",
//     quote: "Finding Denise was the best thing that happened to our family. Leo settled in instantly. Her home is incredibly warm and safe, and she gives him the kind of personal care you just can't get at a larger nursery.",
//     initials: "SJ",
//   },
//   {
//     rating: 5,
//     name: "David Miller",
//     role: "Father of Mia (18 months old)",
//     quote: "Denise's focus on learning through play is amazing. Mia comes home talking about planting flowers and painting colors. Denise is organized, professional, and provides detailed daily updates.",
//     initials: "DM",
//   },
//   {
//     rating: 5,
//     name: "Emily Thompson",
//     role: "Mother of Noah (4 years old)",
//     quote: "Noah has grown so much socially. The EYFS timeline Denise follows prepares the kids so well for preschool. I trust her completely and would recommend her services to any parent.",
//     initials: "ET",
//   },
// ];

const getInitials = (name: string) => {
  if (!name) return "P";
  const parts = name.trim().split(/\s+/);
  if (parts.length > 1) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return parts[0][0].toUpperCase();
};

export default function TestimonialsSection() {
  const [activeTestimonials, setActiveTestimonials] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await client.fetch(`*[_type == "review"] | order(order asc) {
          rating,
          parentName,
          relationship,
          text
        }`);
        if (data && data.length > 0) {
          const formatted = data.map((item: any) => ({
            rating: item.rating,
            name: item.parentName,
            role: item.relationship || "Parent",
            quote: item.text,
            initials: getInitials(item.parentName),
          }));
          setActiveTestimonials([...formatted]);
        }
      } catch (error) {
        console.error("Failed to fetch reviews from Sanity:", error);
      }
    };
    fetchReviews();
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % activeTestimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + activeTestimonials.length) % activeTestimonials.length);
  };

  return (
    <Section background="light" id="testimonials" className="relative pt-16 pb-16 md:pt-20 md:pb-20">


      {/* Subtle play watermarks */}
      <div className="absolute top-24 right-10 text-primary/5 pointer-events-none -z-10 select-none">
        <Smile className="w-16 h-16 md:w-20 md:h-20 rotate-12" />
      </div>
      <div className="absolute bottom-20 left-10 text-secondary/5 pointer-events-none -z-10 select-none">
        <Sparkles className="w-16 h-16 md:w-20 md:h-20 -rotate-12" />
      </div>

      {/* Title */}
      <SectionHeading
        title="What Our Parents Say"
        subtitle="Hear directly from families who have experienced the warmth, safety, and learning environment of our childcare."
        badge="Parent Reviews"
      />

      {/* Desktop Grid Layout */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
        {activeTestimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between relative hover:shadow-md transition-shadow duration-300"
          >
            <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/5" />
            <div className="space-y-4 text-left">
              {/* Star Rating */}
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 font-inter text-base italic leading-relaxed">
                "{t.quote}"
              </p>
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-4 pt-6 mt-6 border-t border-slate-50">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold font-poppins flex items-center justify-center shrink-0">
                {t.initials}
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-text-primary font-poppins">{t.name}</h4>
                <p className="text-[11px] text-text-secondary font-semibold uppercase">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Slider Layout */}
      <div className="md:hidden max-w-sm mx-auto relative px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-2xl border border-slate-100 shadow-md flex flex-col justify-between min-h-[300px] relative text-left"
          >
            <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/5" />
            <div className="space-y-4">
              <div className="flex gap-1">
                {[...Array(activeTestimonials[activeIndex]?.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 font-inter text-sm italic leading-relaxed">
                "{activeTestimonials[activeIndex]?.quote || ""}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-50">
              <div className="w-9 h-9 rounded-full bg-primary/10 text-primary font-bold font-poppins flex items-center justify-center shrink-0 text-sm">
                {activeTestimonials[activeIndex]?.initials || "P"}
              </div>
              <div>
                <h4 className="text-sm font-bold text-text-primary font-poppins">
                  {activeTestimonials[activeIndex]?.name || ""}
                </h4>
                <p className="text-[10px] text-text-secondary font-semibold uppercase">
                  {activeTestimonials[activeIndex]?.role || ""}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={handlePrev}
            className="p-2.5 rounded-xl border border-slate-100 bg-white shadow-sm hover:bg-slate-50 transition-colors text-text-primary"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dot Indicators */}
          <div className="flex gap-1.5">
            {activeTestimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === i ? "bg-primary w-5" : "bg-slate-200"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2.5 rounded-xl border border-slate-100 bg-white shadow-sm hover:bg-slate-50 transition-colors text-text-primary"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Section>
  );
}
