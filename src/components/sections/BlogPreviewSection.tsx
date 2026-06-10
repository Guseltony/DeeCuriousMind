import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import BlogCard from "@/components/sections/blog/BlogCard";
import { client } from "@/sanity/lib/client";

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

async function getLatestPosts(): Promise<BlogPost[]> {
  try {
    const posts = await client.fetch(
      `*[_type == "blogPost"] | order(publishedAt desc)[0...3] {
        _id, title, slug, publishedAt, author, category, readingTime, excerpt, mainImage
      }`,
      {},
      { next: { revalidate: 0 } }
    );
    return posts ?? [];
  } catch {
    return [];
  }
}

export default async function BlogPreviewSection() {
  const posts = await getLatestPosts();

  // Only render if there are published posts
  if (!posts || posts.length === 0) return null;

  return (
    <section className="w-full bg-bg-light py-10 md:py-14">
      <div className="max-w-7xl xl:max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">

        {/* Header row */}
        <div className="flex items-end justify-between mb-6 md:mb-8">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary">
              <BookOpen className="w-3.5 h-3.5" />
              From the Blog
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-text-primary font-poppins leading-tight">
              Childcare Tips & Guides
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors shrink-0"
          >
            All Posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>

        {/* Mobile view all */}
        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/30 px-5 py-2.5 rounded-xl hover:bg-primary/5 transition-all"
          >
            View All Posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
