"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnnouncementBar from "./AnnouncementBar";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const isHeaderLight = !isHome || scrolled;

  return (
    <div className="fixed top-0 left-0 w-full z-[100] flex flex-col">
      <AnnouncementBar />
      <header
        className={`w-full transition-all duration-300 ${isHeaderLight
            ? "bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm py-3"
            : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1536px] 3xl:max-w-[1720px] 4xl:max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300">
              <Image
                src={isHeaderLight ? "/black-logo.webp" : "/white-logo.webp"}
                alt="Dees Curious Minds Logo"
                fill
                sizes="40px"
                className="object-contain"
              />
            </div>
            <span className={`text-xl font-bold tracking-tight font-poppins transition-colors duration-300 ${isHeaderLight ? "text-text-primary" : "text-white"
              }`}>
              Dees <span className={isHeaderLight ? "text-secondary" : "text-accent"}>Curious Minds</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide font-inter transition-colors duration-300 relative py-1 ${isActive
                      ? isHeaderLight
                        ? "text-primary"
                        : "text-accent"
                      : isHeaderLight
                        ? "text-text-secondary hover:text-text-primary"
                        : "text-white/85 hover:text-white"
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className={`absolute bottom-0 left-0 w-full h-[2px] rounded-full ${isHeaderLight ? "bg-primary" : "bg-accent"
                        }`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center bg-primary hover:bg-primary-hover text-white text-sm font-semibold tracking-wide px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all hover:translate-y-[-1px]"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`p-2 md:hidden rounded-lg transition-colors ${isHeaderLight
                ? "text-text-secondary hover:text-text-primary hover:bg-slate-100"
                : "text-white hover:text-white/80 hover:bg-white/10"
              }`}
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black"
            />

            {/* Menu Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl z-50 p-6 flex flex-col justify-between"
            >
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8">
                      <Image
                        src="/black-logo.webp"
                        alt="Dees Curious Minds Logo"
                        fill
                        sizes="32px"
                        className="object-contain"
                      />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-text-primary font-poppins">
                      Dees Minds
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-text-secondary hover:text-text-primary rounded-lg hover:bg-slate-100 transition-colors"
                    aria-label="Close navigation menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex flex-col gap-5 pt-8">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-lg font-semibold font-inter py-2 border-b border-slate-50 transition-colors ${isActive ? "text-primary" : "text-text-secondary hover:text-text-primary"
                          }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Mobile CTA */}
              <div className="pt-6">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-semibold py-3.5 rounded-xl shadow-md transition-all text-center w-full"
                >
                  Enquire Now
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
