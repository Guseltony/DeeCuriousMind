import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ServicesHero from "@/components/sections/services/ServicesHero";
import CoreServices from "@/components/sections/services/CoreServices";
import DailyActivities from "@/components/sections/services/DailyActivities";
import ServicesCta from "@/components/sections/services/ServicesCta";

export const metadata: Metadata = {
  title: "Our Childcare Services | Dees Curious Minds Gillingham",
  description:
    "Explore early years childcare services at Dees Curious Minds in Gillingham. Play-based learning, cognitive milestones, sensory explorations, creative arts, and school readiness.",
  keywords: [
    "childcare services Gillingham",
    "daycare services Gillingham",
    "nursery activities Gillingham",
    "pre-nursery Gillingham",
    "early years learning Kent",
    "EYFS activities Gillingham",
    "play-based childcare Gillingham",
    "school readiness childminder",
    "toddler sensory activities",
    "baby care Gillingham",
    "childminder Medway",
    "Dees Curious Minds",
  ],
  alternates: {
    canonical: "https://www.deescuriousminds.co.uk/services",
  },
  openGraph: {
    title: "Childcare & Childminding Services | Dees Curious Minds Gillingham",
    description:
      "High-quality early learning and development services in Gillingham. Guided play, social milestones, language rich environment, and outdoor exploration.",
    url: "https://www.deescuriousminds.co.uk/services",
    siteName: "Dees Curious Minds",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Childcare services at Dees Curious Minds Gillingham",
      },
    ],
  },
};


export default function ServicesPage() {
  return (
    <>
      {/* Sticky Header Navigation */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col w-full overflow-hidden">
        {/* 1. Services Hero Section */}
        <ServicesHero />

        {/* 2. Core Childcare Services Cards */}
        <CoreServices />

        {/* 3. Typical Daily Routine Timeline */}
        <DailyActivities />

        {/* 4. Final Call to Action */}
        <ServicesCta />
      </main>

      {/* Footer Navigation */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </>
  );
}

