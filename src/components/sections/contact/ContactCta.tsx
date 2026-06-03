"use client";

import React from "react";
import Image from "next/image";
import { PhoneCall, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactCta() {
  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full py-10 md:py-16 px-4 md:px-8 lg:px-12 text-center text-white overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero_childcare.png"
          alt="Childcare playroom environment"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900/90 to-primary/40" />
      </div>

      <div className="max-w-4xl mx-auto space-y-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-primary-hover text-xs font-bold uppercase tracking-wider">
            Curious Minds Childcare
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight font-poppins">
            Ready to Learn More About <br className="hidden sm:inline" />
            Dee's Curious Minds?
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 font-inter max-w-xl mx-auto leading-relaxed">
            Get in touch to check available enrollment slots, discuss your child's schedule, or coordinate a settling-in timetable.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="tel:07840066028"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-xl font-bold tracking-wide shadow-md hover:shadow-lg transition-all hover:translate-y-[-2px]"
          >
            <PhoneCall className="w-4 h-4 fill-current" />
            Call Now
          </a>

          <button
            onClick={scrollToForm}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3.5 rounded-xl font-bold tracking-wide transition-all hover:translate-y-[-2px] cursor-pointer"
          >
            Send Enquiry
            <ArrowUp className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
