import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import LocalBusinessSchema from "@/components/shared/LocalBusinessSchema";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  // metadataBase is required so Next.js can resolve relative og:image URLs correctly
  metadataBase: new URL("https://www.deescuriousminds.co.uk"),
  title: {
    default: "Dees Curious Minds | Premium Childcare & Childminding Gillingham",
    template: "%s | Dees Curious Minds",
  },
  description:
    "Dees Curious Minds is a registered childminder and home daycare in Gillingham, Kent. Safe, nurturing childcare and pre-nursery provision for children aged 6 months to 5 years. EYFS-aligned, personal attention, and learning through play.",
  keywords: [
    // Primary — what Denise offers
    "childminder Gillingham",
    "childminding Gillingham",
    "childcare Gillingham",
    // Daycare variations
    "daycare Gillingham",
    "day care Gillingham",
    "baby daycare Gillingham",
    "toddler daycare Gillingham",
    // Nursery variations
    "nursery Gillingham",
    "pre-nursery Gillingham",
    "pre nursery Gillingham",
    "home nursery Gillingham",
    "private nursery Gillingham",
    // Early years
    "early years childcare Gillingham",
    "EYFS childcare Kent",
    "early learning Gillingham",
    // Location variants
    "childcare Medway",
    "childminder Medway",
    "childcare ME7",
    "childminder Kent",
    // Other care types parents search for
    "after school care Gillingham",
    "wraparound care Gillingham",
    "registered childminder Gillingham",
    "Ofsted childminder Gillingham",
    // Brand
    "Dees Curious Minds",
    "learning through play",
  ],
  authors: [{ name: "Denise", url: "https://deescuriousminds.co.uk/about" }],
  creator: "Dees Curious Minds",
  publisher: "Dees Curious Minds",
  openGraph: {
    title: "Dees Curious Minds | Premium Childcare & Childminding Gillingham",
    description:
      "Discover a safe, nurturing, and creative childcare environment at Dees Curious Minds in Gillingham, Kent. Learning through play and personal attention for every child.",
    type: "website",
    locale: "en_GB",
    url: "https://www.deescuriousminds.co.uk",
    siteName: "Dees Curious Minds",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dees Curious Minds – Premium Childcare in Gillingham, Kent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dees Curious Minds | Childcare & Childminding Gillingham",
    description:
      "A warm, nurturing environment where children learn, play, and grow. EYFS childcare in Gillingham, Kent.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { media: "(prefers-color-scheme: dark)", url: "/white-logo.webp" },
      { media: "(prefers-color-scheme: light)", url: "/black-logo.webp" },
    ],
  },
  alternates: {
    canonical: "https://www.deescuriousminds.co.uk",
  },
  verification: {
    google: "google52936d136425e2e5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-white text-text-primary">
        {/* LocalBusiness + ChildCare JSON-LD structured data for Google rich snippets */}
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}
