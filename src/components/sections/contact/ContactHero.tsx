"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center pt-28 pb-16 px-6 md:px-8 lg:px-12 w-full bg-gradient-to-br from-bg-light via-white to-primary/10 overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 translate-x-20 -translate-y-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 -translate-x-20 translate-y-20" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center text-left">
        {/* Left Column: Headings */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-4"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide uppercase">
            Get in Touch
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight font-poppins">
            Start Your Journey <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              With Denise Today
            </span>
          </h1>
          <p className="text-base md:text-lg text-text-secondary font-inter max-w-xl leading-relaxed">
            Have questions about our schedule, openings, or curriculum? Contact Denise to arrange a playroom tour, review spaces, or register your child.
          </p>
        </motion.div>

        {/* Right Column: Mini Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 grid grid-cols-1 gap-4"
        >
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
            <div className="p-3 bg-indigo-50 text-primary rounded-lg shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-text-secondary font-inter">Call Direct</p>
              <a href="tel:07840066028" className="text-sm font-bold text-text-primary hover:text-primary transition-colors font-poppins">
                07840066028
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
            <div className="p-3 bg-purple-50 text-secondary rounded-lg shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-text-secondary font-inter">Email Us</p>
              <a href="mailto:Deescuriousminds@gmail.com" className="text-sm font-bold text-text-primary hover:text-primary transition-colors font-poppins">
                Deescuriousminds@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
            <div className="p-3 bg-green-50 text-green-600 rounded-lg shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-text-secondary font-inter">Location</p>
              <p className="text-sm font-bold text-text-primary font-poppins">
                6 Merlin Way, Gillingham, Kent, ME7 4JN
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
