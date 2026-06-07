import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import GalleryMasonry from "@/components/sections/gallery/GalleryMasonry";
import GalleryCta from "@/components/sections/gallery/GalleryCta";

export const metadata: Metadata = {
  title: "Our Childcare Playroom & Setting Gallery | Dees Curious Minds",
  description:
    "Browse the physical learning environments, safe outdoor spaces, sensory toys, and daily activities at Dees Curious Minds in Gillingham. Take a visual tour today.",
  keywords: [
    "childcare photos Gillingham",
    "playroom gallery Kent",
    "childcare setting tour Gillingham",
    "Montessori environment photos",
    "Dees Curious Minds",
  ],
  openGraph: {
    title: "Childcare playroom & setting gallery | Dees Curious Minds",
    description:
      "A look inside the home-like learning environments, quiet reading corners, creative art desks, and secure gardens at Dees Curious Minds.",
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
        {/* Combined Gallery Hero & Masonry Grid */}
        <GalleryMasonry />

        {/* 3. Final CTA Call To Action */}
        <GalleryCta />
      </main>

      {/* Footer Navigation */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </>
  );
}
