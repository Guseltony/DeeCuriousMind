import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import Section from "@/components/shared/Section";
import { Award, Smile } from "lucide-react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import FaqAccordion from "@/components/sections/faqs/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQs | Dees Curious Minds Childcare Gillingham",
  description:
    "Frequently asked questions about Dees Curious Minds childcare in Gillingham. Learn about our opening hours, age groups, EYFS approach, enrollment process, and daily routine.",
  keywords: [
    "childcare FAQs Gillingham",
    "childminder questions Gillingham",
    "EYFS childcare questions",
    "childcare enrollment Gillingham",
    "Dees Curious Minds FAQ",
  ],
  alternates: {
    canonical: "https://deescuriousminds.co.uk/faqs",
  },
  openGraph: {
    title: "Frequently Asked Questions | Dees Curious Minds Gillingham",
    description:
      "Answers to common questions about our childcare setting, opening hours, EYFS framework, enrollment, and daily routine in Gillingham, Kent.",
    url: "https://deescuriousminds.co.uk/faqs",
    siteName: "Dees Curious Minds",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dees Curious Minds – Childcare FAQ Gillingham",
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
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );
    if (data && data.length > 0) return data;
  } catch (error) {
    console.error("Failed to fetch FAQs from Sanity:", error);
  }
  return [];
}

export default async function FaqsPage() {
  const faqs = await getFaqs();

  // FAQPage JSON-LD structured data — generates rich accordion snippets in Google results
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
      {/* FAQPage JSON-LD for Google rich results (FAQ accordion in search) */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Header />

      <main className="flex-1 flex flex-col w-full overflow-hidden pt-24">
        {/* Banner Fold */}
        <section className="relative py-12 md:py-16 w-full bg-gradient-to-br from-bg-light via-white to-primary/10 overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />

          <div className="max-w-4xl mx-auto px-4 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide uppercase">
              Parent Resources
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight font-poppins">
              Frequently Asked Questions
            </h1>
            <p className="text-base md:text-lg text-text-secondary font-inter max-w-xl mx-auto leading-relaxed">
              Find quick answers to questions about our openings, home setting, daily routine, and EYFS-guided care details.
            </p>
          </div>
        </section>

        {/* FAQs List Accordion */}
        <Section background="white" id="faqs-list" className="py-12 md:py-16">
          {/* Playful watermark doodles */}
          <div className="absolute top-10 left-10 text-primary/5 pointer-events-none -z-10 select-none">
            <Award className="w-16 h-16 md:w-20 md:h-20 rotate-12" />
          </div>
          <div className="absolute bottom-10 right-10 text-secondary/5 pointer-events-none -z-10 select-none">
            <Smile className="w-16 h-16 md:w-20 md:h-20 -rotate-12" />
          </div>

          {/* Client component handles the interactive accordion state */}
          <FaqAccordion faqs={faqs} />
        </Section>

        {/* Call to action section */}
        <section className="bg-bg-light py-12 md:py-16 w-full text-center">
          <div className="max-w-2xl mx-auto px-4 space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-text-primary font-poppins">
              Have More Questions?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-text-secondary font-inter leading-relaxed">
              If you didn't find the answers you need, feel free to send us a direct message or drop us a WhatsApp chat. Denise is happy to discuss details!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white text-sm font-semibold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                Send Enquiry
              </Link>
              <a
                href="https://wa.me/447840066028?text=Hi%20Denise!%20I%20have%20some%20questions%20about%20your%20childcare%2520services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-slate-200 bg-white hover:bg-slate-50 text-text-primary text-sm font-semibold px-8 py-3.5 rounded-xl transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
