"use client";

import React from "react";
import { MessageSquare, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsappCta() {
  const phoneNumber = "447840066028";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Denise!%20I'd%20love%20to%20know%20more%20about%20your%20childcare%20openings.`;

  return (
    <section className="py-16 px-6 md:px-8 lg:px-12 w-full bg-white text-left">
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-indigo-900 to-purple-950 p-8 sm:p-12 text-white relative overflow-hidden shadow-md">
        {/* Decorative Background Blob */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-20 translate-x-20" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-primary-hover text-xs font-bold uppercase tracking-wider">
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              Quick Questions
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-poppins tracking-tight leading-tight">
              Prefer to Chat Directly?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-inter leading-relaxed">
              If you have a quick question about current availability or want to get in touch with Denise immediately, feel free to send a quick chat message on WhatsApp!
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-3.5 rounded-xl font-bold tracking-wide shadow-md hover:shadow-lg transition-all hover:translate-y-[-2px] text-center justify-center w-full md:w-auto"
            >
              <PhoneCall className="w-4 h-4 fill-current" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
