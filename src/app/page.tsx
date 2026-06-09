import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import SummerClubSection from "@/components/sections/SummerClubSection";
import AboutPreviewSection from "@/components/sections/AboutPreviewSection";
import ServicesSection from "@/components/sections/ServicesSection";
import LearningApproachSection from "@/components/sections/LearningApproachSection";
import GalleryPreviewSection from "@/components/sections/GalleryPreviewSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactPreviewSection from "@/components/sections/ContactPreviewSection";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

export const metadata: Metadata = {
  title: "Dees Curious Minds | Premium Childcare & Childminding Gillingham",
  description:
    "Looking for premium, trustworthy childcare in Gillingham? Dees Curious Minds offers a secure home setting, EYFS curriculum alignment, and dedicated professional care for children aged 6 months to 5 years.",
  keywords: [
    "childcare Gillingham",
    "childminder Gillingham",
    "daycare Gillingham Kent",
    "home nursery Gillingham",
    "EYFS childcare Gillingham",
    "Montessori play Gillingham",
    "Dees Curious Minds",
  ],
  alternates: {
    canonical: "https://www.deescuriousminds.co.uk",
  },
  openGraph: {
    title: "Dees Curious Minds | Premium Childcare & Childminding Gillingham",
    description:
      "EYFS-aligned childcare and sensory play in a secure, nurturing home setting in Gillingham, Kent.",
    url: "https://www.deescuriousminds.co.uk",
    siteName: "Dees Curious Minds",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dees Curious Minds – Premium Childcare in Gillingham, Kent",
      },
    ],
  },
};



async function getHeroSlides() {
  try {
    const data = await client.fetch(`*[_type == "heroSlide"] | order(order asc) {
      title,
      badge,
      description,
      image
    }`);
    if (data && data.length > 0) {
      return data.map((item: any) => ({
        image: urlForImage(item.image).url(),
        badge: item.badge,
        title: item.title,
        description: item.description,
      }));
    }
  } catch (error) {
    console.error("Failed to fetch hero slides from Sanity:", error);
  }
  return [];
}

export default async function Home() {
  const heroSlides = await getHeroSlides();

  return (
    <>
      {/* Sticky Header Navigation */}
      <Header />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col w-full overflow-hidden">
        {/* 1. Hero Section */}
        <HeroSection initialSlides={heroSlides} />

        {/* 2. Trust & Credibility Badges */}
        <TrustSection />

        {/* Summer Club Special Announcement */}
        <SummerClubSection />

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
