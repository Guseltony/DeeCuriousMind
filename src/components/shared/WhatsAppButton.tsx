"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "447840066028"; // Denise's actual phone number
  const message = encodeURIComponent("Hello! I'm interested in enrolling my child at Dees Curious Minds. Could I get more information?");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20BA56] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse effect rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 -z-10 animate-ping group-hover:animate-none opacity-75" />

      {/* WhatsApp SVG Icon */}
      <svg
        className="w-6 h-6 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.747 1.451 5.436.002 9.861-4.422 9.864-9.863.001-2.635-1.022-5.11-2.884-6.974C16.55 1.897 14.075.874 11.44.874 6.008.874 1.585 5.298 1.582 10.733c-.001 1.636.43 3.232 1.25 4.646L1.87 20.893l5.777-1.517zM17.81 14.61c-.307-.154-1.815-.896-2.097-.998-.281-.103-.487-.154-.69.154-.204.307-.791.998-.97 1.202-.178.204-.356.23-.663.077-1.127-.565-1.928-1.008-2.696-2.32-.204-.349.204-.324.582-.879.083-.115.041-.218-.02-.321-.061-.103-.49-1.18-.67-1.616-.177-.424-.355-.366-.489-.373-.127-.006-.273-.008-.419-.008-.146 0-.384.054-.585.274-.202.219-.77.753-.77 1.833 0 1.08.787 2.122.896 2.27.11.149 1.547 2.362 3.75 3.313 1.22.527 2.172.842 2.914 1.077.747.237 1.428.204 1.966.124.6-.09 1.815-.742 2.072-1.459.256-.718.256-1.334.18-1.46-.077-.127-.282-.205-.589-.359z" />
      </svg>

      {/* Pop-up tooltip on hover */}
      <span className="absolute right-16 scale-0 origin-right group-hover:scale-100 transition-transform duration-200 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md">
        Need help? Chat with Denise
      </span>
    </motion.a>
  );
}
