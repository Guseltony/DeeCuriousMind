"use client";

import React from "react";
import { Award, Home, Gamepad2, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../../shared/Section";
import SectionHeading from "../../shared/SectionHeading";

const choiceCards = [
  {
    icon: Award,
    title: "Experienced Childminder",
    description: "Led by Denise, an educator with over 15 years of experience serving as a Nursery Officer, Nursery Nurse, and After School Manager.",
    color: "text-indigo-600 bg-indigo-50 border-indigo-100",
  },
  {
    icon: Home,
    title: "Home-from-Home Setting",
    description: "Our domestic childcare setting provides a cozy, familiar environment that reduces anxiety and makes learning feel natural.",
    color: "text-purple-600 bg-purple-50 border-purple-100",
  },
  {
    icon: Gamepad2,
    title: "Learning Through Play",
    description: "We weave EYFS milestones directly into child-led outdoor games, sensory discovery setups, and creative arts.",
    color: "text-green-600 bg-green-50 border-green-100",
  },
  {
    icon: HeartHandshake,
    title: "Individual Attention",
    description: "Small group sizes allow us to tailor care, sleep, and learning pacing directly to your child's personality and development.",
    color: "text-amber-600 bg-amber-50 border-amber-100",
  },
];

export default function WhyChoose() {
  return (
    <Section background="white" id="why-choose" className="py-8 md:py-12 relative overflow-hidden">
      <SectionHeading
        title="Why Parents Choose Dee's Curious Minds"
        subtitle="We provide a balanced alternative to large commercial nurseries, giving your child the love and attention they need to thrive."
        badge="Parent Confidence"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative z-10">
        {choiceCards.map((card, idx) => {
          const IconComponent = card.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-85px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.04)" }}
              className="p-5 md:p-6 bg-white border border-slate-100 rounded-2xl shadow-sm transition-all duration-300 flex flex-col justify-between text-left group animate-hover"
            >
              <div className="space-y-4">
                {/* Icon Circle */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 ${card.color}`}>
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Text Block */}
                <h3 className="text-lg font-bold text-text-primary font-poppins">
                  {card.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed font-inter">
                  {card.description}
                </p>
              </div>

              {/* Sub-hover visual bar */}
              <div className="w-8 h-1 bg-slate-100 group-hover:bg-primary group-hover:w-full transition-all duration-300 rounded-full mt-6" />
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
