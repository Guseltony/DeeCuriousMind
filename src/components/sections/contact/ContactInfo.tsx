"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../../shared/Section";
import SectionHeading from "../../shared/SectionHeading";

const infoCards = [
  {
    icon: Phone,
    title: "Phone Number",
    value: "07840066028",
    href: "tel:07840066028",
    description: "Mon - Fri, 8:00 AM - 6:00 PM",
    color: "text-indigo-600 bg-indigo-50 border-indigo-100",
  },
  {
    icon: Mail,
    title: "Email Address",
    value: "Deescuriousminds@gmail.com",
    href: "mailto:Deescuriousminds@gmail.com",
    description: "Get a reply within 24 hours",
    color: "text-purple-600 bg-purple-50 border-purple-100",
  },
  {
    icon: MapPin,
    title: "Our Location",
    value: "6 Merlin Way, Gillingham, ME7 4JN",
    href: "https://maps.google.com/?q=6+Merlin+Way,+Gillingham,+ME7+4JN",
    description: "Accessible local home setting",
    color: "text-green-600 bg-green-50 border-green-100",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    value: "8:00 AM - 6:00 PM",
    href: null,
    description: "Monday to Friday (Closed Weekends)",
    color: "text-amber-600 bg-amber-50 border-amber-100",
  },
];

export default function ContactInfo() {
  return (
    <Section background="white" id="contact-info">
      <SectionHeading
        title="Direct Contact Information"
        subtitle="Call us, write an email, or drop by our location in Gillingham. We are always happy to help with childcare questions."
        badge="Contact Details"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {infoCards.map((card, idx) => {
          const IconComponent = card.icon;
          const isLink = !!card.href;
          const CardWrapper = isLink ? "a" : "div";

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-85px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={isLink ? { y: -5, boxShadow: "0 10px 25px -8px rgba(0, 0, 0, 0.05)" } : {}}
              className="p-6 md:p-8 bg-bg-light border border-slate-100 rounded-2xl shadow-sm flex flex-col justify-between text-left group transition-all duration-300 h-full"
            >
              {/* @ts-ignore */}
              <CardWrapper
                href={card.href || undefined}
                target={card.href?.startsWith("http") ? "_blank" : undefined}
                rel={card.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className={isLink ? "cursor-pointer block h-full flex flex-col justify-between" : "h-full flex flex-col justify-between"}
              >
                <div className="space-y-4">
                  {/* Icon Circle */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 ${card.color}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-text-secondary font-inter">
                      {card.title}
                    </h4>
                    <p className={`text-base sm:text-lg font-bold text-text-primary font-poppins mt-1 ${isLink ? "group-hover:text-primary transition-colors" : ""}`}>
                      {card.value}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-text-secondary mt-4 font-inter">
                  {card.description}
                </p>
              </CardWrapper>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
