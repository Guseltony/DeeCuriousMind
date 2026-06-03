"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  badge,
  centered = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-3xl mb-6 md:mb-8 flex flex-col gap-2.5 ${
        centered ? "mx-auto text-center items-center" : "text-left items-start"
      }`}
    >
      {badge && (
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase">
          {badge}
        </span>
      )}
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-text-primary leading-tight font-poppins">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xs sm:text-sm md:text-base text-text-secondary font-inter max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
