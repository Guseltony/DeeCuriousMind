"use client";

import React from "react";
import { MapPin, Navigation, Car, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../../shared/Section";
import SectionHeading from "../../shared/SectionHeading";

export default function GoogleMapSection() {
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=6+Merlin+Way,+Gillingham,+ME7+4JN";

  return (
    <Section background="white" id="service-location">
      <SectionHeading
        title="Our Setting Location & Service Area"
        subtitle="Conveniently situated in Gillingham, Kent, with easy transport links and secure parking for stress-free morning drop-offs."
        badge="Location"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl xl:max-w-[1240px] 2xl:max-w-[1400px] 3xl:max-w-[1560px] 4xl:max-w-[1720px] mx-auto text-left">
        
        {/* Left Side: Local Area Information */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 bg-bg-light border border-slate-100 rounded-2xl"
        >
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-text-primary font-poppins flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Serving Gillingham & Kent
            </h3>
            
            <p className="text-sm md:text-base text-text-secondary leading-relaxed font-inter">
              Dee's Curious Minds is located in a quiet, family-friendly residential neighborhood in Gillingham. Our quiet location makes it ideal for local Gillingham families as well as commuting parents.
            </p>

            <ul className="space-y-4 font-inter text-sm text-text-secondary">
              <li className="flex gap-3">
                <Car className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-text-primary block">Easy Drop-off & Parking</span>
                  Dedicated driveway parking is available for quick, secure drop-offs and pickups.
                </div>
              </li>
              <li className="flex gap-3">
                <ShieldCheck className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-text-primary block">Coverage Service Area</span>
                  We primarily support Gillingham, Chatham, Rainham, Rochester, and surrounding Kent areas.
                </div>
              </li>
            </ul>
          </div>

          <div className="pt-8">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-sm transition-all hover:translate-y-[-1px]"
            >
              Get Directions
              <Navigation className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Map Embed */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-slate-100 shadow-sm min-h-[300px] lg:min-h-full"
        >
          {/* Free public iframe without API Key */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9960.00824746995!2d0.5335358626562748!3d51.38464015086108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8cd79d63e9fe5%3A0x47e9ca2d70c5d942!2s6%20Merlin%20Wy%2C%20Gillingham%20ME7%204JN%2C%20UK!5e0!3m2!1sen!2sng!4v1780480846793!5m2!1sen!2sng"
            className="w-full h-full min-h-[350px] lg:min-h-[400px] border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dee's Curious Minds Location Map"
          />
        </motion.div>

      </div>
    </Section>
  );
}
