import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import GalleryHero from "@/components/sections/gallery/GalleryHero";
import GalleryIntro from "@/components/sections/gallery/GalleryIntro";
import GalleryMasonry from "@/components/sections/gallery/GalleryMasonry";
import EnvironmentSpaces from "@/components/sections/gallery/EnvironmentSpaces";
import ActivityHighlights from "@/components/sections/gallery/ActivityHighlights";
import GalleryTimeline from "@/components/sections/gallery/GalleryTimeline";
import WhyEnvironmentMatters from "@/components/sections/gallery/WhyEnvironmentMatters";
import GalleryCta from "@/components/sections/gallery/GalleryCta";

export const metadata: Metadata = {
  title: "Our Childcare Playroom & Setting Gallery | Dee's Curious Minds",
  description:
    "Browse the physical learning environments, safe outdoor spaces, sensory toys, and daily activities at Dee's Curious Minds in Gillingham. Take a visual tour today.",
  keywords: [
    "childcare photos Gillingham",
    "playroom gallery Kent",
    "childcare setting tour Gillingham",
    "Montessori environment photos",
    "Dee's Curious Minds",
  ],
  openGraph: {
    title: "Childcare playroom & setting gallery | Dee's Curious Minds",
    description:
      "A look inside the home-like learning environments, quiet reading corners, creative art desks, and secure gardens at Dee's Curious Minds.",
    type: "website",
    locale: "en_GB",
  },
};

export default function GalleryPage() {
  return (
    <>
      {/* Sticky Header Navigation */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col w-full overflow-hidden">
        {/* 1. Gallery Hero Section */}
        <GalleryHero />

        {/* 2. Environment Introduction */}
        <GalleryIntro />

        {/* 3. Filtering Gallery Masonry Grid */}
        <GalleryMasonry />

        {/* 4. Individual Environment Space Details */}
        <EnvironmentSpaces />

        {/* 5. Daily Curriculum Activity Highlights */}
        <ActivityHighlights />

        {/* 6. Typical Day Journey Timeline */}
        <GalleryTimeline />

        {/* 7. Why Environment Matters Philosophy */}
        <WhyEnvironmentMatters />

        {/* 8. Final CTA Call To Action */}
        <GalleryCta />
      </main>

      {/* Footer Navigation */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </>
  );
}
