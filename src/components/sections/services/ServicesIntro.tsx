"use client";

import React from "react";
import { CheckCircle, Smile } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../../shared/Section";

export default function ServicesIntro() {
  return (
    <Section background="white" id="services-intro" className="relative py-8 md:py-12 overflow-hidden">
      {/* Playful watermark doodles */}
      <div className="absolute top-6 right-10 text-primary/5 pointer-events-none -z-10 select-none">
        <Smile className="w-16 h-16 md:w-20 md:h-20 rotate-12" />
      </div>
      <div className="max-w-4xl mx-auto text-left space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
            Our Approach to Care
          </span>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-text-primary leading-tight font-poppins">
            Tailored Development for Every Unique Mind
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed font-inter">
            We understand that no two children develop at the exact same speed. Some take their first steps earlier, while others discover drawing or phonics at their own unique pace. At <strong className="font-semibold text-text-primary">Dee's Curious Minds</strong>, our childminding approach respects this individuality. We organize activities that align with children's natural interests while gently matching EYFS guidelines.
          </p>
        </motion.div>

        {/* Highlight points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-start gap-3"
          >
            <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm sm:text-base font-bold text-text-primary font-poppins">Age-Appropriate Design</h4>
              <p className="text-xs sm:text-sm text-text-secondary mt-0.5 font-inter">Activities are customized according to your child's age group, from sensory tasks to school readiness puzzles.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-start gap-3"
          >
            <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm sm:text-base font-bold text-text-primary font-poppins">Holistic Development focus</h4>
              <p className="text-xs sm:text-sm text-text-secondary mt-0.5 font-inter">We focus equally on emotional wellbeing, speech clarity, fine motor coordinates, and positive socialization.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
