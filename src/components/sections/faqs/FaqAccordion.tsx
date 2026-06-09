"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (faqs.length === 0) {
    return (
      <div className="max-w-3xl mx-auto text-center py-12">
        <p className="text-text-secondary font-inter text-sm">
          No FAQs available at the moment. Please check back soon or{" "}
          <a href="/contact" className="text-primary underline font-semibold">
            contact us directly
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-4 relative z-10">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="bg-white rounded-3xl border-2 border-slate-100 shadow-sm overflow-hidden transition-all duration-300 hover:border-slate-200"
          >
            <button
              onClick={() => toggleFaq(idx)}
              className="w-full flex items-center justify-between py-4 px-5 sm:py-5 sm:px-8 text-left hover:bg-slate-50/50 transition-colors font-poppins focus:outline-none"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${idx}`}
              id={`faq-question-${idx}`}
            >
              <span className="text-sm sm:text-base font-bold text-text-primary flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-primary/80 shrink-0" />
                {faq.question}
              </span>
              <span
                className={`p-1.5 rounded-xl transition-colors shrink-0 ${
                  isOpen ? "bg-primary text-white" : "bg-slate-100 text-slate-500"
                }`}
              >
                {isOpen ? (
                  <Minus className="w-3.5 h-3.5" />
                ) : (
                  <Plus className="w-3.5 h-3.5" />
                )}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-5 pt-2 sm:px-8 sm:pb-6 text-xs sm:text-sm text-text-secondary leading-relaxed font-inter text-left border-t border-slate-50">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
