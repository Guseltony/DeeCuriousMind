"use client";

import React from "react";
import { Quote, Heart, Smile } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../../shared/Section";
import SectionHeading from "../../shared/SectionHeading";

export default function DeniseStory() {
  return (
    <Section background="white" id="denise-story" className="relative py-8 md:py-12">
      {/* Playful watermark doodles */}
      <div className="absolute top-20 left-10 text-primary/5 pointer-events-none -z-10 select-none">
        <Heart className="w-16 h-16 md:w-20 md:h-20 rotate-12 fill-current" />
      </div>
      <div className="absolute bottom-16 right-10 text-secondary/5 pointer-events-none -z-10 select-none">
        <Smile className="w-16 h-16 md:w-20 md:h-20 -rotate-12" />
      </div>

      <SectionHeading
        title="My Journey & Passion for Early Years"
        subtitle="A look behind the scenes at how my career in childcare evolved and why I love what I do."
        badge="Denise's Story"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Story Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary font-poppins flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary fill-current" />
            Where It All Began
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-text-secondary font-inter leading-relaxed">
            My passion for working with children began over fifteen years ago. I have always believed that the early years of a child's life are the most critical for shaping their character, confidence, and love for learning. This conviction led me to pursue my professional certifications and dedicate my career to early childhood education.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-text-secondary font-inter leading-relaxed">
            Throughout my career, I've had the privilege of working in various childcare settings, including serving as a <strong className="font-semibold text-text-primary">Nursery Officer</strong>, a <strong className="font-semibold text-text-primary">Nursery Nurse</strong>, and an <strong className="font-semibold text-text-primary">After School Manager</strong>. These roles allowed me to work with children from diverse backgrounds, understanding their unique developmental timelines and learning styles.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-text-secondary font-inter leading-relaxed">
            I eventually founded <strong className="font-semibold text-text-primary">Dee's Curious Minds</strong> in Gillingham because I wanted to create an environment that blends the structured learning of a nursery school with the warmth, comfort, and direct attention of a home. In my experience, children bloom when they feel secure and have a consistent adult presence supporting their discoveries.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-text-secondary font-inter leading-relaxed">
            Seeing a child master a new skill, express themselves through art, or simply share a kind moment with a peer is the most rewarding part of my work. Every day here is an opportunity to ignite a spark of curiosity that children will carry with them for the rest of their lives.
          </p>
        </motion.div>

        {/* Right Column: Key Details & Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 space-y-8"
        >
          {/* Quote Card */}
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 shadow-sm text-left">
            <Quote className="absolute top-4 right-6 w-12 h-12 text-primary/10 rotate-180" />
            
            <p className="text-base md:text-lg text-indigo-950 font-medium italic font-poppins leading-relaxed relative z-10">
              "Children are not vessels to be filled, but lamps to be lit. My goal is to foster their natural spark, helping them become confident, compassionate, and curious lifelong learners."
            </p>
            
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                D
              </div>
              <div>
                <h4 className="text-sm font-bold text-text-primary font-poppins">Denise</h4>
                <p className="text-xs text-text-secondary font-inter">Founder & Dedicated Childminder</p>
              </div>
            </div>
          </div>

          {/* Quick Facts List */}
          <div className="p-6 rounded-2xl bg-bg-light border border-slate-100 text-left">
            <h4 className="text-base font-bold text-text-primary font-poppins mb-4">Denise's Profile Summary</h4>
            <ul className="space-y-3 font-inter text-sm text-text-secondary">
              <li className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="font-semibold text-text-primary">Based in:</span>
                <span>Gillingham, Kent</span>
              </li>
              <li className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="font-semibold text-text-primary">Languages:</span>
                <span>English & Hindi</span>
              </li>
              <li className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="font-semibold text-text-primary">Qualifications:</span>
                <span>NVQ Level 3 in CCLD</span>
              </li>
              <li className="flex justify-between pb-1">
                <span className="font-semibold text-text-primary">Key Experience:</span>
                <span>Nursery Officer, After School Manager</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
