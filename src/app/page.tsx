import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import AboutPreviewSection from "@/components/sections/AboutPreviewSection";
import ServicesSection from "@/components/sections/ServicesSection";
import LearningApproachSection from "@/components/sections/LearningApproachSection";
import GalleryPreviewSection from "@/components/sections/GalleryPreviewSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactPreviewSection from "@/components/sections/ContactPreviewSection";

export const metadata: Metadata = {
  title: "Dee's Curious Minds | Premium Childcare & Childminding Gillingham",
  description: "Looking for premium, trustworthy childcare in Gillingham? Dee's Curious Minds offers a secure home setting, EYFS curriculum alignment, and dedicated professional care for children aged 6 months to 5 years.",
  keywords: [
    "childcare Gillingham",
    "childminder Gillingham",
    "daycare Gillingham Kent",
    "home nursery Gillingham",
    "EYFS childcare Gillingham",
    "Montessori play Gillingham",
    "Dee's Curious Minds"
  ],
  openGraph: {
    title: "Dee's Curious Minds | Premium Childcare & Childminding Gillingham",
    description: "EYFS-aligned childcare and sensory play in a secure, nurturing home setting in Gillingham, Kent.",
    url: "https://deescuriousminds.co.uk",
    siteName: "Dee's Curious Minds",
    type: "website",
    locale: "en_GB",
  }
};

export default function Home() {
  return (
    <>
      {/* Sticky Header Navigation */}
      <Header />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col w-full overflow-hidden">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Trust & Credibility Badges */}
        <TrustSection />

        {/* 3. About Denise Preview */}
        <AboutPreviewSection />

        {/* 4. Service Cards */}
        <ServicesSection />

        {/* 5. Connected Learning Pathway */}
        <LearningApproachSection />

        {/* 6. Gallery Masonry Teaser */}
        <GalleryPreviewSection />

        {/* 7. Parent Testimonials Carousel */}
        <TestimonialsSection />

        {/* 8. Contact Details & Inquiry Form */}
        <ContactPreviewSection />
      </div>

      {/* Footer Navigation & Copyright */}
      <Footer />

      {/* Floating WhatsApp Action Trigger */}
      <WhatsAppButton />
    </>
  );
}
