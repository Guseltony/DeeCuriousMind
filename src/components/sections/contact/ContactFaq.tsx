"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../../shared/Section";
import SectionHeading from "../../shared/SectionHeading";

const faqs = [
  {
    question: "How quickly do you respond?",
    answer: (
      <>
        We review and reply to all contact messages, emails, and WhatsApp enquiries within{" "}
        <strong className="font-semibold text-text-primary">24 hours</strong> on weekdays. For
        inquiries submitted over weekends, we will get back to you first thing on Monday morning.
      </>
    ),
  },
  {
    question: "Can I arrange a visit?",
    answer: (
      <>
        Yes, absolutely! We encourage all parents to visit our playroom and meet Denise before
        making a decision. To protect our childcare routine and security, visits are scheduled by{" "}
        <strong className="font-semibold text-text-primary">prior appointment only</strong>,
        usually after 6:00 PM on weekdays.
      </>
    ),
  },
  {
    question: "What ages do you accept?",
    answer: (
      <>
        We welcome children from <strong className="font-semibold text-text-primary">6 months to 5 years</strong>{" "}
        old. Our childcare spaces, toys, and learning pathways are structured to cater to both
        early toddler stages and preschool milestones.
      </>
    ),
  },
  {
    question: "How do I check availability?",
    answer: (
      <>
        Fill out the contact form specifying your required days and hours, or click the WhatsApp
        button to chat directly. We will let you know immediately if we have open slots or can
        add you to our waiting list.
      </>
    ),
  },
];

export default function ContactFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <Section background="light" id="contact-faq">
      <SectionHeading
        title="Contact FAQs"
        subtitle="Quick answers to common questions about setting visits, age ranges, and response times."
        badge="Got Questions?"
      />

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden text-left"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full px-4.5 py-3.5 sm:px-6 sm:py-4.5 flex items-center justify-between gap-4 font-poppins font-bold text-text-primary text-xs sm:text-sm hover:bg-slate-50 transition-colors focus:outline-none"
              >
                <div className="flex items-center gap-2.5">
                  <HelpCircle className="w-4.5 h-4.5 text-primary shrink-0" />
                  <span>{faq.question}</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-text-secondary shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-4.5 pb-4.5 pt-1.5 sm:px-6 sm:pb-5 text-[11px] sm:text-xs md:text-sm text-text-secondary font-inter leading-relaxed border-t border-slate-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
