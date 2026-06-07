import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";

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
  title: "Dees Curious Minds | Premium Childcare & Childminding Services",
  description: "Dees Curious Minds provides a warm, trustworthy, and safe home-away-from-home childcare environment. We focus on personal attention, professional care, and learning through play.",
  keywords: ["childcare", "childminding", "nanny", "childminder", "early learning", "learning through play", "Dees Curious Minds"],
  authors: [{ name: "Denise" }],
  openGraph: {
    title: "Dees Curious Minds | Premium Childcare & Childminding",
    description: "Discover a safe, nurturing, and creative childcare environment at Dees Curious Minds. Learning through play and personal attention for every child.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dees Curious Minds | Childcare & Childminding",
    description: "A warm, nurturing environment where children learn, play, and grow.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { media: "(prefers-color-scheme: dark)", url: "/white-logo.webp" },
      { media: "(prefers-color-scheme: light)", url: "/black-logo.webp" },
    ],
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
    >
      <body className="min-h-full flex flex-col bg-white text-text-primary">
        {children}
      </body>
    </html>
  );
}
