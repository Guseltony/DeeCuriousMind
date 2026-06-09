import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-[#738249] via-[#5F6C37] to-[#4E582D] text-slate-100 font-inter mt-0 pt-8 md:pt-16 pb-0">


      {/* Upper Footer */}
      <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1536px] 3xl:max-w-[1720px] 4xl:max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 py-6 md:py-12 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6 md:gap-x-8 md:gap-y-10">
        {/* Brand Info */}
        <div className="col-span-2 lg:col-span-1 space-y-4 md:space-y-6">
          <Link href="/" className="flex items-center gap-3 group text-white">
            <div className="relative w-8 h-8 md:w-10 md:h-10 shrink-0">
              <Image
                src="/white-logo.webp"
                alt="Dees Curious Minds Logo"
                fill
                sizes="40px"
                className="object-contain"
              />
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tight font-poppins text-white">
              Dees <span className="text-yellow-200">Curious Minds</span>
            </span>
          </Link>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-200/90">
            A premium childminding and childcare service that parents trust. We provide a nurturing home environment filled with creativity, exploration, and individual care.
          </p>
          {/* Social Links */}
          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="https://www.facebook.com/search/top/?q=Dees%20curious%20minds"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 md:p-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all"
              aria-label="Facebook"
            >
              <svg className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/Dees_curious_minds/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 md:p-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all"
              aria-label="Instagram"
            >
              <svg className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.26-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 110 12.324 6.162 6.162 0 010-12.324zM12 16a4 4 0 100-8 4 4 0 000 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-1 space-y-4 md:space-y-6">
          <h4 className="text-white font-semibold font-poppins text-sm md:text-lg">Quick Links</h4>
          <ul className="space-y-2 md:space-y-3.5 text-xs sm:text-sm">
            <li>
              <Link href="/" className="hover:text-yellow-200 transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-200 transition-colors">About Us</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-yellow-200 transition-colors">Services</Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-yellow-200 transition-colors">Photo Gallery</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-200 transition-colors">Contact & Enquiries</Link>
            </li>
          </ul>
        </div>

        {/* Operating Hours */}
        <div className="col-span-1 space-y-4 md:space-y-6">
          <h4 className="text-white font-semibold font-poppins text-sm md:text-lg">Opening Hours</h4>
          <ul className="space-y-2 md:space-y-3.5 text-xs sm:text-sm">
            <li className="flex items-center gap-2 md:gap-3">
              <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-200 shrink-0" />
              <div>
                <p className="font-semibold text-white">Mon – Fri:</p>
                <p className="text-[10px] md:text-xs text-slate-200/80">8:00 AM – 6:00 PM</p>
              </div>
            </li>
            <li className="flex items-center gap-2 md:gap-3">
              <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/30 shrink-0" />
              <div>
                <p className="font-semibold text-slate-300/80">Sat – Sun:</p>
                <p className="text-[10px] md:text-xs text-slate-400/70">Closed</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-2 lg:col-span-1 space-y-4 md:space-y-6">
          <h4 className="text-white font-semibold font-poppins text-sm md:text-lg">Contact Us</h4>
          <address className="not-italic">
            <ul className="space-y-2 md:space-y-3.5 text-xs sm:text-sm">
              <li className="flex items-start gap-2 md:gap-3">
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-200 shrink-0 mt-0.5" />
                <span className="text-slate-100">Gillingham, Kent</span>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-200 shrink-0" />
                <a href="tel:07840066028" className="hover:text-yellow-200 transition-colors text-slate-100">07840066028</a>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-200 shrink-0" />
                <a href="mailto:Deescuriousminds@gmail.com" className="hover:text-yellow-200 transition-colors text-slate-100">Deescuriousminds@gmail.com</a>
              </li>
            </ul>
          </address>
        </div>

      </div>

      {/* Lower Footer */}
      <div className="bg-[#4E582D]/40 text-[10px] sm:text-xs text-slate-200/80 py-4 md:py-6 border-t border-white/10">
        <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1536px] 3xl:max-w-[1720px] 4xl:max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <p>© {currentYear} Dees Curious Minds Childcare. All Rights Reserved.</p>
          <div className="flex gap-4 md:gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
