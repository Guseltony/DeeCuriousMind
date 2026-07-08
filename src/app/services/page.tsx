import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ServicesHero from "@/components/sections/services/ServicesHero";
import CoreServices from "@/components/sections/services/CoreServices";
import DailyActivities from "@/components/sections/services/DailyActivities";
import ServicesCta from "@/components/sections/services/ServicesCta";
import Section from "@/components/shared/Section";
import { Award, Smile } from "lucide-react";
import { client } from "@/sanity/lib/client";
import FaqAccordion from "@/components/sections/faqs/FaqAccordion";

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

interface FaqItem {
  question: string;
  answer: string;
}

async function getFaqs(): Promise<FaqItem[]> {
  try {
    const data = await client.fetch(
      `*[_type == "faq"] | order(order asc) { question, answer }`,
      {},
      { next: { revalidate: 0 } }
    );
    if (data && data.length > 0) return data;
  } catch (error) {
    console.error("Failed to fetch FAQs from Sanity:", error);
  }
  return [];
}

export default async function ServicesPage() {
  const faqs = await getFaqs();

  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      {/* FAQPage JSON-LD for Google rich results */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

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

        {/* FAQs Accordion Section */}
        {faqs.length > 0 && (
          <Section background="light" id="faqs-list" className="py-12 md:py-16 relative">
            <div className="max-w-4xl mx-auto text-center mb-10 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide uppercase">
                Got Questions?
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-text-primary leading-tight font-poppins">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base text-text-secondary font-inter max-w-xl mx-auto leading-relaxed">
                Find quick answers to common questions about our openings, settings, daily routine, and childcare details.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute top-10 left-10 text-primary/5 pointer-events-none -z-10 select-none hidden lg:block">
                <Award className="w-16 h-16 md:w-20 md:h-20 rotate-12" />
              </div>
              <div className="absolute bottom-10 right-10 text-secondary/5 pointer-events-none -z-10 select-none hidden lg:block">
                <Smile className="w-16 h-16 md:w-20 md:h-20 -rotate-12" />
              </div>
              
              <FaqAccordion faqs={faqs} />
            </div>
          </Section>
        )}

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

