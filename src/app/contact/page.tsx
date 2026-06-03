import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import ContactFormSection from "@/components/sections/contact/ContactFormSection";
import EnquiryProcess from "@/components/sections/contact/EnquiryProcess";
import ContactFaq from "@/components/sections/contact/ContactFaq";
import GoogleMapSection from "@/components/sections/contact/GoogleMapSection";
import WhatsappCta from "@/components/sections/contact/WhatsappCta";
import ContactCta from "@/components/sections/contact/ContactCta";

export const metadata: Metadata = {
  title: "Contact Denise | Dee's Curious Minds Childcare Gillingham",
  description:
    "Get in touch with Denise at Dee's Curious Minds in Gillingham, Kent. Submit a childcare enquiry, check open spaces, ask questions, or arrange a setting tour.",
  keywords: [
    "Contact childminder Gillingham",
    "enquire childcare Gillingham",
    "nanny Gillingham contact",
    "Gillingham childminding openings",
    "Dee's Curious Minds",
  ],
  openGraph: {
    title: "Contact Denise | Childcare Enquiry & Visits Gillingham",
    description:
      "Have questions or want to arrange a setting visit? Contact Denise at Dee's Curious Minds Childcare in Gillingham, Kent.",
    type: "website",
    locale: "en_GB",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Sticky Header Navigation */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col w-full overflow-hidden">
        {/* 1. Contact Hero Header */}
        <ContactHero />

        {/* 2. Direct Details Cards */}
        <ContactInfo />

        {/* 3. Main Form & Info Column */}
        <ContactFormSection />

        {/* 4. Three-Step Enquiry Workflow Stepper */}
        <EnquiryProcess />

        {/* 5. Contact FAQ Accordion Accordion */}
        <ContactFaq />

        {/* 6. Embedded Google Location Map */}
        <GoogleMapSection />

        {/* 7. Quick Message WhatsApp CTA */}
        <WhatsappCta />

        {/* 8. Call or Submit Enquiry Cta */}
        <ContactCta />
      </main>

      {/* Footer Navigation */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </>
  );
}
