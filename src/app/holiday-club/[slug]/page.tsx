import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import SummerClubSection from "@/components/sections/SummerClubSection";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { client } from "@/sanity/lib/client";

interface HolidayClubData {
  title: string;
  description: string;
  flyerImage: string;
  dateRange?: string;
  hours?: string;
  location?: string;
  ages?: string;
  pricing?: string;
  formUrl?: string;
  status: string;
  slug: string;
}

async function getHolidayClub(slug: string): Promise<HolidayClubData | null> {
  try {
    const decodedSlug = decodeURIComponent(slug);
    console.log("getHolidayClub called with slug:", slug, "decoded:", decodedSlug);
    return await client.fetch(
      `*[_type == "holidayClub" && (slug.current == $slug || slug.current == $decodedSlug) && !(_id in path('drafts.**'))][0] {
        title,
        description,
        "flyerImage": flyerImage.asset->url,
        dateRange,
        hours,
        location,
        ages,
        pricing,
        formUrl,
        status,
        "slug": slug.current
      }`,
      { slug, decodedSlug },
      { next: { revalidate: 0 } }
    );
  } catch (error) {
    console.error("Failed to fetch holiday club details:", error);
    return null;
  }
}

async function getAllSlugs(): Promise<{ slug: string }[]> {
  try {
    return await client.fetch(
      `*[_type == "holidayClub" && !(_id in path('drafts.**'))] { "slug": slug.current }`,
      {},
      { next: { revalidate: 0 } }
    );
  } catch {
    return [];
  }
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.filter((s) => s && s.slug).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const club = await getHolidayClub(slug);
  if (!club) return { title: "Holiday Club Not Found | Dees Curious Minds" };

  const title = club.title || "Holiday Club";
  const description = club.description ? club.description.substring(0, 160) : "Holiday Club details and bookings";
  const canonicalUrl = `https://www.deescuriousminds.co.uk/holiday-club/${club.slug || ""}`;

  return {
    title: `${title} | Dees Curious Minds Gillingham`,
    description: description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | Dees Curious Minds Gillingham`,
      description: description,
      url: canonicalUrl,
      siteName: "Dees Curious Minds",
      type: "website",
      locale: "en_GB",
      images: club.flyerImage ? [{ url: club.flyerImage, width: 1200, height: 630, alt: title }] : [],
    },
  };
}

export default async function HolidayClubDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const club = await getHolidayClub(slug);

  if (!club) notFound();

  // Breadcrumbs schema for SEO
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.deescuriousminds.co.uk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Holiday Clubs",
        item: "https://www.deescuriousminds.co.uk/holiday-club",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: club.title,
        item: `https://www.deescuriousminds.co.uk/holiday-club/${club.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main className="flex-1 flex flex-col w-full overflow-hidden pt-24">
        {/* Back Link Breadcrumb */}
        <div className="max-w-7xl xl:max-w-[1360px] mx-auto px-6 md:px-8 lg:px-12 pt-6 w-full text-left">
          <Link
            href="/holiday-club"
            className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-primary transition-colors font-inter"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Holiday Clubs
          </Link>
        </div>

        {/* Detailed Section */}
        <SummerClubSection clubs={[club]} titleOverride={club.title} />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
