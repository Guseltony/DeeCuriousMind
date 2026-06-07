"use client";

import React from "react";
import Link from "next/link";
import { PhoneCall, ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPreviewSection() {
  const phoneNumber = "447840066028";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Denise!%20I'd%20love%20to%20arrange%20a%20visit%20to%20your%20childcare%20setting.`;

  return (
    <section className="relative w-full py-16 md:py-24 px-4 md:px-8 lg:px-12 text-center text-white overflow-hidden">


      {/* Google Map Background with Overlay */}
      <div className="absolute inset-0 -z-10 w-full h-full select-none">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9960.00824746995!2d0.5335358626562748!3d51.38464015086108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8cd79d63e9fe5%3A0x47e9ca2d70c5d942!2s6%20Merlin%20Wy%2C%20Gillingham%20ME7%204JN%2C%20UK!5e0!3m2!1sen!2sng!4v1780480846793!5m2!1sen!2sng"
          className="absolute inset-0 w-full h-full border-0 pointer-events-none scale-110 opacity-70 contrast-100 brightness-75"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dees Curious Minds Location Map"
        />
        {/* Dark earthy gradient overlay to match our olive green branding */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/85 via-slate-950/75 to-primary/20" />
      </div>

      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-accent text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3 h-3" />
            Visit Our Gillingham Setting
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight font-poppins">
            Ready to see our learning <br className="hidden sm:inline" />
            playroom in person?
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 font-inter max-w-xl mx-auto leading-relaxed">
            We would love to welcome you and your child for a friendly tour. Meet Denise, inspect our secure environment, and discuss enrollment options.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-xl font-bold tracking-wide shadow-md hover:shadow-lg transition-all hover:translate-y-[-2px] cursor-pointer"
          >
            Enquire & Schedule Visit
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3.5 rounded-xl font-bold tracking-wide transition-all hover:translate-y-[-2px]"
          >
            <PhoneCall className="w-4 h-4 text-green-400 fill-current animate-pulse" />
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
