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
  title: "Our Childcare Services | Dee's Curious Minds Gillingham",
  description:
    "Explore early years childcare services at Dee's Curious Minds in Gillingham. Play-based learning, cognitive milestones, sensory explorations, creative arts, and school readiness.",
  keywords: [
    "childcare services Gillingham",
    "early years learning Kent",
    "play-based childcare",
    "school readiness childminder",
    "toddler sensory activities",
    "Dee's Curious Minds",
  ],
  openGraph: {
    title: "Childcare & Childminding Services | Dee's Curious Minds",
    description:
      "High-quality early learning and development services in Gillingham. Guided play, social milestones, language rich environment, and outdoor exploration.",
    type: "website",
    locale: "en_GB",
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

