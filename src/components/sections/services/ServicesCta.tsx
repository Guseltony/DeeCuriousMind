"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesCta() {
  const phoneNumber = "447840066028";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Denise!%20I'd%20love%20to%20know%20more%20about%20your%20childcare%20services.`;

  return (
    <section className="relative w-full py-10 md:py-16 px-4 md:px-8 lg:px-12 text-center text-white overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero_childcare.png"
          alt="Warm, friendly playroom environment"
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
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-accent text-xs font-bold uppercase tracking-wider">
            Plan a Visit
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight font-poppins">
            Ready to Learn More About <br className="hidden sm:inline" />
            Our Childcare Services?
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 font-inter max-w-xl mx-auto leading-relaxed">
            Reach out to schedule a friendly home visit, ask questions, or discuss your child's specific developmental support needs.
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
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-xl font-bold tracking-wide shadow-md hover:shadow-lg transition-all hover:translate-y-[-2px]"
          >
            Contact Us
          </Link>

          <Link
            href="/gallery"
            className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3.5 rounded-xl font-bold tracking-wide transition-all hover:translate-y-[-2px]"
          >
            View Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
