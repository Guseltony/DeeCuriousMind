import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import AboutHero from "@/components/sections/about/AboutHero";
import DeniseStory from "@/components/sections/about/DeniseStory";
import AboutTimeline from "@/components/sections/about/AboutTimeline";
import Philosophy from "@/components/sections/about/Philosophy";
import Environment from "@/components/sections/about/Environment";
import AboutDiff from "@/components/sections/about/AboutDiff";
import AboutPathway from "@/components/sections/about/AboutPathway";
import Community from "@/components/sections/about/Community";
import AboutCta from "@/components/sections/about/AboutCta";

export const metadata: Metadata = {
  title: "About Denise | Dee's Curious Minds Childcare Gillingham",
  description:
    "Meet Denise, an Ofsted-registered childminder with over 15 years of childcare experience. Discover her qualifications, philosophy, and nurturing home childcare environment in Gillingham.",
  keywords: [
    "About Denise",
    "childminder Gillingham",
    "nursery officer Gillingham",
    "experienced childminder",
    "childcare qualifications Kent",
    "Dee's Curious Minds",
  ],
  openGraph: {
    title: "About Denise | Dee's Curious Minds Childcare",
    description:
      "Meet Denise, an Ofsted-registered childminder in Gillingham. 15+ years experience in nursery care, childminding, and after-school care.",
    type: "website",
    locale: "en_GB",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Sticky Header Navigation */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col w-full overflow-hidden">
        {/* 1. About Hero Section */}
        <AboutHero />

        {/* 2. Denise's Personal Story */}
        <DeniseStory />

        {/* 3. Qualifications & Career Timeline */}
        <AboutTimeline />

        {/* 4. Core Childcare Philosophy */}
        <Philosophy />

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
