import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import BlogCard from "@/components/sections/blog/BlogCard";
import { BookOpen, PenLine } from "lucide-react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

export const metadata: Metadata = {
  title: "Childcare Blog | Dees Curious Minds Gillingham",
  description:
    "Expert tips, EYFS guides, activity ideas and local childcare advice from Denise at Dees Curious Minds in Gillingham, Kent. Helping parents raise curious, confident children.",
  keywords: [
    "childcare blog Gillingham",
    "childminder tips Kent",
    "EYFS activities for toddlers",
    "early years parenting tips",
    "daycare advice Gillingham",
    "toddler activities Gillingham",
    "Dees Curious Minds blog",
  ],
  alternates: {
    canonical: "https://www.deescuriousminds.co.uk/blog",
  },
  openGraph: {
    title: "Childcare Blog | Dees Curious Minds Gillingham",
    description:
      "Expert childcare tips, EYFS development guides, and activity ideas from Denise in Gillingham, Kent.",
    url: "https://www.deescuriousminds.co.uk/blog",
    siteName: "Dees Curious Minds",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dees Curious Minds Childcare Blog – Gillingham, Kent",
      },
    ],
  },
};

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  author: string;
  category: string;
  readingTime: number;
  excerpt: string;
  mainImage?: any;
}

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const posts = await client.fetch(
      `*[_type == "blogPost"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        publishedAt,
        author,
        category,
        readingTime,
        excerpt,
        mainImage
      }`,
      {},
      { next: { revalidate: 0 } }
    );
    return posts ?? [];
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const featuredPost = posts[0] ?? null;
  const remainingPosts = posts.slice(1);

  return (
    <>
      <Header />

      <main className="flex-1 flex flex-col w-full overflow-hidden pt-24">

        {/* Hero Banner */}
        <section className="relative py-12 md:py-16 w-full bg-gradient-to-br from-bg-light via-white to-primary/10 overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />

          <div className="max-w-4xl mx-auto px-4 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide uppercase">
              <PenLine className="w-3.5 h-3.5" />
              From Our Setting
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight font-poppins">
              Childcare Tips &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Parenting Guides
              </span>
            </h1>
            <p className="text-base md:text-lg text-text-secondary font-inter max-w-2xl mx-auto leading-relaxed">
              Expert advice from Denise on EYFS development, sensory play, toddler activities, and making the most of childcare in Gillingham.
            </p>
          </div>
        </section>

        {/* Blog Content */}
        <section className="w-full bg-bg-light py-12 md:py-16">
          <div className="max-w-7xl xl:max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">

            {posts.length === 0 ? (
              /* Empty state */
              <div className="text-center py-20 space-y-5">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-text-primary font-poppins">
                  Blog Posts Coming Soon
                </h2>
                <p className="text-text-secondary font-inter text-sm max-w-md mx-auto">
                  We're working on our first posts — childcare tips, EYFS guides, activity ideas, and local Gillingham news. Check back soon!
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:bg-primary-hover transition-all"
                >
                  Enquire About Childcare
                </Link>
              </div>
            ) : (
              <div className="space-y-10 md:space-y-14">

                {/* Featured Post */}
                {featuredPost && (
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-5 font-poppins">
                      Latest Post
                    </h2>
                    <BlogCard post={featuredPost} featured={true} />
                  </div>
                )}

                {/* Remaining Posts Grid */}
                {remainingPosts.length > 0 && (
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-5 font-poppins">
                      More Articles
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {remainingPosts.map((post) => (
                        <BlogCard key={post._id} post={post} />
                      ))}
                    </div>
                  </div>
                )}

              </div>
            )}

          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-12 md:py-16 w-full text-center border-t border-slate-100">
          <div className="max-w-2xl mx-auto px-4 space-y-5">
            <h2 className="text-xl md:text-2xl font-bold text-text-primary font-poppins">
              Looking for Childcare in Gillingham?
            </h2>
            <p className="text-sm text-text-secondary font-inter leading-relaxed">
              Dees Curious Minds offers EYFS-aligned home childcare for children aged 6 months to 5 years in Gillingham, Kent. Spaces are limited — enquire today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white text-sm font-semibold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                Enquire Now
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center border-2 border-slate-200 bg-white hover:bg-slate-50 text-text-primary text-sm font-semibold px-8 py-3.5 rounded-xl transition-all"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
