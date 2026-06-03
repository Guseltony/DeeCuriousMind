"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../../shared/Section";

export default function GalleryIntro() {
  return (
    <Section background="white" id="gallery-intro" className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto text-left space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
            A Nurturing Environment
          </span>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-text-primary leading-tight font-poppins">
            Spaces Designed to Welcome, Inspire & Protect
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed font-inter">
            Welcome to the visual heart of <strong className="font-semibold text-text-primary">Dee's Curious Minds</strong>. We believe a child's surrounding environment behaves as their "third teacher." Every toy selection, reading shelf, nature box, and messy play station has been structured to spark natural curiosity, encourage peer socialization, and support active exploration in a secure, home-like setting.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-start gap-3"
          >
            <ShieldCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm sm:text-base font-bold text-text-primary font-poppins">Strict Safety Standards</h4>
              <p className="text-xs sm:text-sm text-text-secondary mt-0.5 font-inter">Our playroom features soft flooring, secured baby-guards, and clean, pediatric-approved Montessori tools.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-start gap-3"
          >
            <ShieldCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm sm:text-base font-bold text-text-primary font-poppins">Holistic Growth Zones</h4>
              <p className="text-xs sm:text-sm text-text-secondary mt-0.5 font-inter">We divide our home into focused zones for reading quietness, creative messy sessions, and outdoor gardens.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
