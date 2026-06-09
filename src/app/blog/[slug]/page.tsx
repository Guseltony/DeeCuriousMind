import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import BlogPostBody from "@/components/sections/blog/BlogPostBody";
import BlogCard from "@/components/sections/blog/BlogCard";
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

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
  body: any[];
}

async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    return await client.fetch(
      `*[_type == "blogPost" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        publishedAt,
        author,
        category,
        readingTime,
        excerpt,
        mainImage,
        body
      }`,
      { slug },
      { next: { revalidate: 3600 } }
    );
  } catch {
    return null;
  }
}

async function getRelatedPosts(currentId: string, category: string): Promise<BlogPost[]> {
  try {
    return await client.fetch(
      `*[_type == "blogPost" && _id != $currentId && category == $category] | order(publishedAt desc)[0...3] {
        _id, title, slug, publishedAt, author, category, readingTime, excerpt, mainImage
      }`,
      { currentId, category },
      { next: { revalidate: 3600 } }
    );
  } catch {
    return [];
  }
}

async function getAllSlugs(): Promise<{ slug: string }[]> {
  try {
    return await client.fetch(
      `*[_type == "blogPost"] { "slug": slug.current }`,
      {},
      { next: { revalidate: 3600 } }
    );
  } catch {
    return [];
  }
}

// Generate static paths for all published posts
export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

// Dynamic metadata per post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post Not Found | Dees Curious Minds" };

  const ogImage = post.mainImage
    ? urlForImage(post.mainImage).width(1200).height(630).fit("crop").url()
    : "/og-image.jpg";

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.deescuriousminds.co.uk/blog/${post.slug.current}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.deescuriousminds.co.uk/blog/${post.slug.current}`,
      siteName: "Dees Curious Minds",
      type: "article",
      locale: "en_GB",
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const relatedPosts = await getRelatedPosts(post._id, post.category);

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const ogImage = post.mainImage
    ? urlForImage(post.mainImage).width(1200).height(630).fit("crop").url()
    : "/og-image.jpg";

  // Article JSON-LD
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
      worksFor: {
        "@type": "ChildCare",
        name: "Dees Curious Minds",
        url: "https://www.deescuriousminds.co.uk",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Dees Curious Minds",
      url: "https://www.deescuriousminds.co.uk",
      logo: {
        "@type": "ImageObject",
        url: "https://www.deescuriousminds.co.uk/black-logo.webp",
      },
    },
    image: ogImage,
    url: `https://www.deescuriousminds.co.uk/blog/${post.slug.current}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.deescuriousminds.co.uk/blog/${post.slug.current}`,
    },
  };

  // Breadcrumb JSON-LD
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
        name: "Blog",
        item: "https://www.deescuriousminds.co.uk/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://www.deescuriousminds.co.uk/blog/${post.slug.current}`,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main className="flex-1 flex flex-col w-full overflow-hidden pt-24">

        {/* Cover Image */}
        {post.mainImage && (
          <div className="relative w-full h-64 sm:h-80 md:h-96 bg-slate-100 overflow-hidden">
            <Image
              src={urlForImage(post.mainImage).width(1400).height(600).fit("crop").url()}
              alt={post.mainImage.alt ?? post.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
          </div>
        )}

        {/* Article */}
        <article className="w-full bg-white py-10 md:py-14">
          <div className="max-w-3xl mx-auto px-4 md:px-8">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-1.5 text-xs text-text-secondary font-inter">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                <li>/</li>
                <li className="text-text-primary font-medium truncate max-w-[180px]">{post.title}</li>
              </ol>
            </nav>

            {/* Category */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide mb-4">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary font-poppins leading-tight mb-4">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-text-secondary font-inter mb-8 pb-6 border-b border-slate-100">
              <span className="flex items-center gap-1.5 font-semibold text-text-primary">
                By {post.author}
              </span>
              <span className="w-px h-3 bg-slate-200" />
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {formattedDate}
              </span>
              <span className="w-px h-3 bg-slate-200" />
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readingTime} min read
              </span>
            </div>

            {/* Blog Content */}
            <BlogPostBody body={post.body} />

            {/* Footer actions */}
            <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-primary transition-colors font-inter"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-2.5 rounded-xl shadow-sm hover:shadow-md hover:bg-primary-hover transition-all"
              >
                Enquire About Childcare
              </Link>
            </div>

          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-bg-light py-12 md:py-16 border-t border-slate-100">
            <div className="max-w-7xl xl:max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
              <h2 className="text-lg md:text-xl font-bold text-text-primary font-poppins mb-6">
                You Might Also Like
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((p) => (
                  <BlogCard key={p._id} post={p} />
                ))}
              </div>
            </div>
          </section>
        )}

      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
