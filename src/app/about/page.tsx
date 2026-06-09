import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import AboutHero from "@/components/sections/about/AboutHero";
import Environment from "@/components/sections/about/Environment";
import AboutDiff from "@/components/sections/about/AboutDiff";
import AboutPathway from "@/components/sections/about/AboutPathway";
import Community from "@/components/sections/about/Community";
import AboutCta from "@/components/sections/about/AboutCta";

import { getYearsOfExperience } from "@/utils/experience";

export function generateMetadata(): Metadata {
  const years = getYearsOfExperience();
  return {
    title: "About Denise | Dees Curious Minds Childcare Gillingham",
    description: `Meet Denise, an Ofsted-registered childminder with over ${years} years of childcare experience. Discover her qualifications, philosophy, and nurturing home childcare environment in Gillingham.`,
    keywords: [
      "About Denise",
      "childminder Gillingham",
      "nursery officer Gillingham",
      "experienced childminder",
      "childcare qualifications Kent",
      "Ofsted registered childminder",
      "Dees Curious Minds",
    ],
    alternates: {
      canonical: "https://www.deescuriousminds.co.uk/about",
    },
    openGraph: {
      title: "About Denise | Dees Curious Minds Childcare Gillingham",
      description: `Meet Denise, an Ofsted-registered childminder in Gillingham. ${years}+ years experience in nursery care, childminding, and after-school care.`,
      url: "https://www.deescuriousminds.co.uk/about",
      siteName: "Dees Curious Minds",
      type: "website",
      locale: "en_GB",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Denise, founder of Dees Curious Minds childcare in Gillingham",
        },
      ],
    },
  };
}


export default function AboutPage() {
  return (
    <>
      {/* Sticky Header Navigation */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col w-full overflow-hidden">
        {/* 1. About Hero Section */}
        <AboutHero />

        {/* 5. Physical Learning Environment */}
        <Environment />

        {/* 6. What Makes Us Different */}
        <AboutDiff />

        {/* 7. Detailed Learning Approach Pathway */}
        <AboutPathway />

        {/* 8. Local Activities & Outings */}
        <Community />

        {/* 9. Final Call To Action */}
        <AboutCta />
      </main>

      {/* Footer Navigation */}
      <Footer />

      {/* Floating WhatsApp Action Trigger */}
      <WhatsAppButton />
    </>
  );
}
