"use client";

import React from "react";
import { Award, ShieldCheck, Users, Sparkles, Smile, Puzzle } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Section from "../shared/Section";

const trustItems = [
  {
    icon: Award,
    title: "Experienced Childminder",
    description: "Certified EYFS childcare provider focused on nurturing cognitive development and early milestones.",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: ShieldCheck,
    title: "Safe Home Setting",
    description: "A secure, fully insured, child-proof environment equipped with rich sensory play and outdoor spaces.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Users,
    title: "Personal Attention",
    description: "Small group sizes to guarantee individual attention, personalized learning plans, and dedicated care.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Sparkles,
    title: "Learning Through Play",
    description: "Engaging structured play focusing on social interaction, logic building, sensory skills, and arts.",
    color: "bg-amber-50 text-amber-500",
  },
];

export default function TrustSection() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let direction = 1; // 1 = right, -1 = left
    let intervalId: NodeJS.Timeout;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        const maxScrollLeft = el.scrollWidth - el.clientWidth;
        if (maxScrollLeft <= 0) return;

        let nextScroll = el.scrollLeft + direction * 1.2;

        if (nextScroll >= maxScrollLeft) {
          nextScroll = maxScrollLeft;
          direction = -1;
        } else if (nextScroll <= 0) {
          nextScroll = 0;
          direction = 1;
        }

        el.scrollLeft = nextScroll;
      }, 40);
    };

    const handleResize = () => {
      clearInterval(intervalId);
      if (window.innerWidth < 1024) {
        startAutoScroll();
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleInteraction = () => {
      clearInterval(intervalId);
    };

    el.addEventListener("touchstart", handleInteraction);
    el.addEventListener("mousedown", handleInteraction);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
      if (el) {
        el.removeEventListener("touchstart", handleInteraction);
        el.removeEventListener("mousedown", handleInteraction);
      }
    };
  }, []);

  return (
    <Section background="white">
      {/* Playful watermark doodles */}
      <div className="absolute top-6 left-8 text-[#5F6C37]/5 pointer-events-none -z-10 select-none">
        <Smile className="w-16 h-16 md:w-20 md:h-20 rotate-12" />
      </div>
      <div className="absolute bottom-6 right-12 text-[#A66B3B]/5 pointer-events-none -z-10 select-none">
        <Puzzle className="w-20 h-20 md:w-24 md:h-24 -rotate-12" />
      </div>
      <div className="absolute top-1/2 right-1/4 text-[#E29B27]/5 pointer-events-none -z-10 select-none hidden md:block">
        <Sparkles className="w-14 h-14 rotate-45" />
      </div>

      <motion.div
        ref={scrollRef}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex lg:grid lg:grid-cols-4 gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-none snap-x snap-mandatory w-full"
      >
        {trustItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: "0 10px 30px -15px rgba(0,0,0,0.08)" }}
              className="bg-white p-3.5 sm:p-5 md:p-6 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 flex flex-col gap-2.5 group text-left w-[240px] sm:w-[280px] lg:w-full shrink-0 snap-center"
            >
              <div className={`p-2.5 w-fit rounded-xl ${item.color} group-hover:scale-105 transition-transform duration-300`}>
                <IconComponent className="w-5 h-5" />
              </div>
              <h3 className="text-xs sm:text-sm md:text-base font-bold text-text-primary font-poppins mt-1">
                {item.title}
              </h3>
              <p className="text-[10px] sm:text-xs md:text-sm text-text-secondary font-inter leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
