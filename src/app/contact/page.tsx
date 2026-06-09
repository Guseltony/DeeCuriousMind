import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ContactFormSection from "@/components/sections/contact/ContactFormSection";
import GoogleMapSection from "@/components/sections/contact/GoogleMapSection";

export const metadata: Metadata = {
  title: "Contact Denise | Dees Curious Minds Childcare Gillingham",
  description:
    "Get in touch with Denise at Dees Curious Minds in Gillingham, Kent. Submit a childcare enquiry, check open spaces, ask questions, or arrange a setting tour.",
  keywords: [
    "Contact childminder Gillingham",
    "enquire childcare Gillingham",
    "nanny Gillingham contact",
    "Gillingham childminding openings",
    "Dees Curious Minds",
  ],
  alternates: {
    canonical: "https://deescuriousminds.co.uk/contact",
  },
  openGraph: {
    title: "Contact Denise | Childcare Enquiry & Visits Gillingham",
    description:
      "Have questions or want to arrange a setting visit? Contact Denise at Dees Curious Minds Childcare in Gillingham, Kent.",
    url: "https://deescuriousminds.co.uk/contact",
    siteName: "Dees Curious Minds",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Dees Curious Minds childcare in Gillingham",
      },
    ],
  },
};


export default function ContactPage() {
  return (
    <>
      {/* Sticky Header Navigation */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col w-full overflow-hidden">
        {/* 1. Combined Contact Form & Direct Details Cards */}
        <ContactFormSection />

        {/* 2. Embedded Google Location Map */}
        <GoogleMapSection />
      </main>

      {/* Footer Navigation */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </>
  );
}

