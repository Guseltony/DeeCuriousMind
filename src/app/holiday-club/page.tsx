import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import Section from "@/components/shared/Section";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Sparkles, Smile, ArrowRight, BookOpen } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

export const metadata: Metadata = {
  title: "Holiday Clubs | Dees Curious Minds Gillingham",
  description:
    "Fun-filled holiday clubs and play schemes in Gillingham, Kent. Find upcoming clubs, view past activities, and book spaces for your children.",
  keywords: [
    "holiday club Gillingham",
    "childrens holiday activities Kent",
    "half term club Gillingham",
    "summer play scheme Kent",
    "school holiday childcare Gillingham",
    "Dees Curious Minds holiday club",
  ],
  alternates: {
    canonical: "https://www.deescuriousminds.co.uk/holiday-club",
  },
  openGraph: {
    title: "Holiday Clubs | Dees Curious Minds Gillingham",
    description:
      "Explore and book our holiday clubs in Gillingham, Kent. Dynamic activities, safe setting, and Ofsted registered care.",
    url: "https://www.deescuriousminds.co.uk/holiday-club",
    siteName: "Dees Curious Minds",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Holiday Clubs at Dees Curious Minds Gillingham",
      },
    ],
  },
};

interface HolidayClub {
  _id: string;
  title: string;
  slug: { current: string };
  status: "active" | "upcoming" | "past";
  description: string;
  flyerImage: any;
  dateRange: string;
  hours: string;
  location: string;
  ages: string;
  pricing: string;
  formUrl?: string;
}

async function getHolidayClubs(): Promise<HolidayClub[]> {
  try {
    const clubs = await client.fetch(
      `*[_type == "holidayClub" && !(_id in path('drafts.**'))] | order(order asc, title asc) {
        _id,
        title,
        slug,
        status,
        description,
        flyerImage,
        dateRange,
        hours,
        location,
        ages,
        pricing,
        formUrl
      }`,
      {},
      { next: { revalidate: 0 } }
    );
    return clubs ?? [];
  } catch (error) {
    console.error("Failed to fetch holiday clubs:", error);
    return [];
  }
}

export default async function HolidayClubPage() {
  const clubs = await getHolidayClubs();

  const activeClubs = clubs.filter((c) => c.status === "active" || c.status === "upcoming");
  const pastClubs = clubs.filter((c) => c.status === "past");

  return (
    <>
      <Header />

      <main className="flex-1 flex flex-col w-full overflow-hidden pt-24">
        {/* Banner Section */}
        <section className="relative py-12 md:py-16 w-full bg-gradient-to-br from-bg-light via-white to-primary/10 overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />

          <div className="max-w-4xl mx-auto px-4 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 fill-current text-primary" />
              Seasonal Fun
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight font-poppins">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Holiday Clubs
              </span>
            </h1>
            <p className="text-base md:text-lg text-text-secondary font-inter max-w-2xl mx-auto leading-relaxed">
              We offer fun-filled, stimulating, and safe holiday clubs throughout the school holidays for children to play, learn, and make friends.
            </p>
          </div>
        </section>

        {/* Active and Upcoming Clubs Section */}
        <Section background="white" id="active-clubs" className="py-12 md:py-16">
          <div className="max-w-7xl xl:max-w-[1360px] mx-auto px-4 md:px-8">
            <div className="mb-10 text-left border-l-4 border-primary pl-4">
              <h2 className="text-2xl font-extrabold text-text-primary font-poppins">
                Now Booking & Upcoming Clubs
              </h2>
              <p className="text-sm text-text-secondary font-inter mt-1">
                Explore our active holiday schedules and secure your child's spot before space runs out.
              </p>
            </div>

            {activeClubs.length === 0 ? (
              <div className="text-center py-16 bg-bg-light rounded-3xl p-8 border border-slate-100 max-w-3xl mx-auto">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smile className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-text-primary font-poppins">No Active Booking Cycles</h3>
                <p className="text-sm text-text-secondary font-inter mt-2 max-w-md mx-auto">
                  We don't have a holiday club open for booking right now. Please get in touch or check back soon for our next term break details.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-md transition-all"
                >
                  Enquire About Dates
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {activeClubs.map((club) => {
                  const flyerUrl = club.flyerImage ? urlForImage(club.flyerImage).url() : null;
                  const isBookingOpen = club.status === "active";

                  return (
                    <div
                      key={club._id}
                      className="group bg-white rounded-3xl border-2 border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
                    >
                      {/* Flyer / Image Preview */}
                      <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                        {flyerUrl ? (
                          <Image
                            src={flyerUrl}
                            alt={club.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 30vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-400 font-semibold bg-slate-100">
                            Holiday Club Flyer
                          </div>
                        )}
                        {/* Status Badge */}
                        <span
                          className={`absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full text-xs font-bold shadow-md tracking-wide uppercase ${
                            isBookingOpen
                              ? "bg-secondary text-white animate-pulse"
                              : "bg-primary text-white"
                          }`}
                        >
                          {isBookingOpen ? "Booking Open" : "Upcoming"}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <h3 className="text-lg sm:text-xl font-bold text-text-primary font-poppins leading-snug group-hover:text-primary transition-colors">
                            {club.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-text-secondary font-inter line-clamp-3 leading-relaxed">
                            {club.description}
                          </p>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-slate-50 text-xs sm:text-sm text-text-secondary font-inter">
                          {club.dateRange && (
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-primary shrink-0" />
                              <span>{club.dateRange}</span>
                            </div>
                          )}
                          {club.location && (
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-primary shrink-0" />
                              <span>
                                {club.location} {club.ages ? `(Ages ${club.ages})` : ""}
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="pt-4 flex items-center justify-between gap-4">
                          <Link
                            href={`/holiday-club/${club.slug.current}`}
                            className="text-xs sm:text-sm font-bold text-primary group-hover:text-primary-hover flex items-center gap-1 transition-all"
                          >
                            Read Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                          {isBookingOpen && club.formUrl && (
                            <a
                              href={club.formUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-secondary hover:bg-secondary-hover text-white text-xs font-bold px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all"
                            >
                              Book Now
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </Section>

        {/* Past Clubs Archive Section */}
        {pastClubs.length > 0 && (
          <Section background="light" id="past-clubs" className="py-12 md:py-16">
            <div className="max-w-7xl xl:max-w-[1360px] mx-auto px-4 md:px-8">
              <div className="mb-10 text-left border-l-4 border-slate-400 pl-4">
                <h2 className="text-2xl font-extrabold text-text-primary font-poppins">
                  Our Past Holiday Clubs
                </h2>
                <p className="text-sm text-text-secondary font-inter mt-1">
                  Take a look at the exciting adventures and themed programs we ran in the past.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastClubs.map((club) => {
                  const flyerUrl = club.flyerImage ? urlForImage(club.flyerImage).url() : null;

                  return (
                    <div
                      key={club._id}
                      className="group bg-white/70 backdrop-blur-sm rounded-3xl border border-slate-200/60 overflow-hidden shadow-sm grayscale hover:grayscale-0 transition-all duration-300 flex flex-col h-full opacity-80 hover:opacity-100"
                    >
                      {/* Flyer / Image Preview */}
                      <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                        {flyerUrl ? (
                          <Image
                            src={flyerUrl}
                            alt={club.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 30vw"
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-400 font-semibold bg-slate-100">
                            Holiday Club Flyer
                          </div>
                        )}
                        <span className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full text-xs font-bold bg-slate-400 text-white shadow-sm tracking-wide uppercase">
                          Past Event
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <h3 className="text-lg font-bold text-text-primary font-poppins leading-snug group-hover:text-primary transition-colors">
                            {club.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-text-secondary font-inter line-clamp-3 leading-relaxed">
                            {club.description}
                          </p>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-slate-50 text-xs text-text-secondary font-inter">
                          {club.dateRange && (
                            <div className="flex items-center gap-2">
                              <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                              <span>{club.dateRange}</span>
                            </div>
                          )}
                          {club.location && (
                            <div className="flex items-center gap-2">
                              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                              <span>
                                {club.location} {club.ages ? `(Ages ${club.ages})` : ""}
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="pt-4 flex items-center justify-between gap-4">
                          <Link
                            href={`/holiday-club/${club.slug.current}`}
                            className="text-xs sm:text-sm font-bold text-slate-500 hover:text-primary flex items-center gap-1 transition-all"
                          >
                            View Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Section>
        )}
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
