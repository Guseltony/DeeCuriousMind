"use client";

import React, { useState } from "react";
import { Plus, Minus, Award, Smile } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../shared/Section";
import SectionHeading from "../shared/SectionHeading";

const faqs = [
  {
    question: "What ages do you accept?",
    answer: "We accept children aged 6 months to 5 years old. Our learning programs and physical spaces are specifically tailored to fit the developmental milestones of early infancy through pre-school age.",
  },
  {
    question: "What are your opening hours?",
    answer: "Our standard opening hours are Monday to Friday, from 7:30 AM to 6:00 PM. We are closed on Saturdays, Sundays, and major bank holidays. Flexi-care and half-day scheduling are also available depending on vacancy.",
  },
  {
    question: "How can I enquire about enrollment?",
    answer: "You can easily submit an enquiry using the Contact Form at the bottom of this page, email us, or click the floating WhatsApp button to chat directly with Denise. We will then schedule a warm home-visit for you and your child to explore the environment.",
  },
  {
    question: "What activities do children participate in?",
    answer: "Our daily routine includes structured learning milestones aligned with EYFS (Early Years Foundation Stage) such as phonic reading, sensory play, painting/crafts, fine motor puzzles, outdoor gardening exploration, music hours, and rest periods.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section background="white" id="faq">
      {/* Playful watermark doodles */}
      <div className="absolute top-10 left-10 text-primary/5 pointer-events-none -z-10 select-none">
        <Award className="w-16 h-16 md:w-20 md:h-20 rotate-12" />
      </div>
      <div className="absolute bottom-10 right-10 text-secondary/5 pointer-events-none -z-10 select-none">
        <Smile className="w-16 h-16 md:w-20 md:h-20 -rotate-12" />
      </div>

      {/* Title */}
      <SectionHeading
        title="Frequently Asked Questions"
        subtitle="Got questions? We have answers. If you don't find what you are looking for, feel free to reach out directly."
        badge="Common Inquiries"
      />

      {/* Accordion container */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-300"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between py-3.5 px-5 sm:py-4.5 sm:px-6 text-left hover:bg-slate-50/50 transition-colors font-poppins"
                aria-expanded={isOpen}
              >
                <span className="text-sm sm:text-base font-bold text-text-primary">
                  {faq.question}
                </span>
                <span className={`p-1 rounded-lg transition-colors shrink-0 ${
                  isOpen ? "bg-primary text-white" : "bg-slate-100 text-slate-500"
                }`}>
                  {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </span>
              </button>

              {/* Answer Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-5 pt-1 border-t border-slate-50 text-xs sm:text-sm text-text-secondary leading-relaxed font-inter text-left">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
