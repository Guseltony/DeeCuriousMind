"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import { Plus, Minus, HelpCircle, Award, Smile } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import { client } from "@/sanity/lib/client";

const allFaqs = [
  {
    question: "What ages do you accept?",
    answer: "We welcome children from 6 months to 5 years old. Our childcare spaces, Montessori toys, and learning pathways are specifically tailored to fit the developmental milestones of early infancy through pre-school age.",
  },
  {
    question: "What are your opening hours?",
    answer: "Our standard opening hours are Monday to Friday, from 8:00 AM to 6:00 PM. We are closed on Saturdays, Sundays, and major bank holidays.",
  },
  {
    question: "How quickly do you respond to inquiries?",
    answer: "We review and reply to all contact messages, emails, and WhatsApp enquiries within 24 hours on weekdays. For inquiries submitted over weekends, we will get back to you first thing on Monday morning.",
  },
  {
    question: "Can I arrange a visit to the setting?",
    answer: "Yes, absolutely! We encourage all parents to visit our playroom and meet Denise before making a decision. To protect our childcare routine and security, visits are scheduled by prior appointment only, usually after 6:00 PM on weekdays.",
  },
  {
    question: "How do I check slot availability?",
    answer: "Fill out the contact form specifying your required days and hours, or click the WhatsApp button to chat directly. We will let you know immediately if we have open slots or can add you to our waiting list. Ratios are kept small, so early enrollment is recommended.",
  },
  {
    question: "What activities do children participate in?",
    answer: "Our daily routine includes structured learning milestones aligned with EYFS (Early Years Foundation Stage) such as phonic reading, sensory play, painting/crafts, fine motor puzzles, outdoor gardening exploration, music hours, and rest periods.",
  },
];

export default function FaqsPage() {
  const [faqs, setFaqs] = useState(allFaqs);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const data = await client.fetch(`*[_type == "faq"] | order(order asc) {
          question,
          answer
        }`);
        if (data && data.length > 0) {
          setFaqs([...data, ...allFaqs]);
        }
      } catch (error) {
        console.error("Failed to fetch FAQs from Sanity:", error);
      }
    };
    fetchFaqs();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />

      <main className="flex-1 flex flex-col w-full overflow-hidden pt-24">
        {/* Banner Fold */}
        <section className="relative py-12 md:py-16 w-full bg-gradient-to-br from-bg-light via-white to-primary/10 overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />

          <div className="max-w-4xl mx-auto px-4 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide uppercase">
              Parent Resources
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight font-poppins">
              Frequently Asked Questions
            </h1>
            <p className="text-base md:text-lg text-text-secondary font-inter max-w-xl mx-auto leading-relaxed">
              Find quick answers to questions about our openings, home setting, daily routine, and EYFS-guided care details.
            </p>
          </div>
        </section>

        {/* FAQs List Accordion */}
        <Section background="white" id="faqs-list" className="py-12 md:py-16">
          {/* Playful watermark doodles */}
          <div className="absolute top-10 left-10 text-primary/5 pointer-events-none -z-10 select-none">
            <Award className="w-16 h-16 md:w-20 md:h-20 rotate-12" />
          </div>
          <div className="absolute bottom-10 right-10 text-secondary/5 pointer-events-none -z-10 select-none">
            <Smile className="w-16 h-16 md:w-20 md:h-20 -rotate-12" />
          </div>

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
                  >
                    <span className="text-sm sm:text-base font-bold text-text-primary flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-primary/80 shrink-0" />
                      {faq.question}
                    </span>
                    <span className={`p-1.5 rounded-xl transition-colors shrink-0 ${
                      isOpen ? "bg-primary text-white" : "bg-slate-100 text-slate-500"
                    }`}>
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
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
        </Section>

        {/* Call to action section */}
        <section className="bg-bg-light py-12 md:py-16 w-full text-center">
          <div className="max-w-2xl mx-auto px-4 space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-text-primary font-poppins">
              Have More Questions?
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-text-secondary font-inter leading-relaxed">
              If you didn't find the answers you need, feel free to send us a direct message or drop us a WhatsApp chat. Denise is happy to discuss details!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white text-sm font-semibold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                Send Enquiry
              </Link>
              <a
                href="https://wa.me/447840066028?text=Hi%20Denise!%20I%20have%20some%20questions%20about%20your%20childcare%2520services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-slate-200 bg-white hover:bg-slate-50 text-text-primary text-sm font-semibold px-8 py-3.5 rounded-xl transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
