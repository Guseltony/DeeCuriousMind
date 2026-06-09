import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
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
}

const categoryColors: Record<string, string> = {
  "Childcare Tips": "bg-primary/10 text-primary",
  "EYFS & Development": "bg-emerald-50 text-emerald-700",
  "Activities & Play": "bg-amber-50 text-amber-700",
  "Parent Guides": "bg-blue-50 text-blue-700",
  "Gillingham & Local": "bg-violet-50 text-violet-700",
  "News & Updates": "bg-rose-50 text-rose-700",
};

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const categoryClass =
    categoryColors[post.category] ?? "bg-slate-100 text-slate-600";

  const imageUrl = post.mainImage
    ? urlForImage(post.mainImage)
        .width(featured ? 900 : 600)
        .height(featured ? 500 : 340)
        .fit("crop")
        .url()
    : null;

  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className={`group flex flex-col bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 overflow-hidden ${
        featured ? "lg:flex-row" : ""
      }`}
    >
      {/* Cover Image */}
      <div
        className={`relative overflow-hidden bg-slate-100 ${
          featured
            ? "lg:w-1/2 h-56 sm:h-72 lg:h-auto lg:min-h-[320px]"
            : "h-48 sm:h-56"
        }`}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={post.mainImage?.alt ?? post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 640px) 100vw, 50vw"}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
            <span className="text-4xl">📝</span>
          </div>
        )}
        {/* Category badge overlaid on image */}
        <span
          className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide backdrop-blur-sm ${categoryClass} bg-opacity-90`}
        >
          <Tag className="w-2.5 h-2.5" />
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className={`flex flex-col justify-between p-5 sm:p-6 flex-1 ${featured ? "lg:p-8" : ""}`}>
        <div className="space-y-3">
          {/* Meta row */}
          <div className="flex items-center gap-3 text-[11px] sm:text-xs text-text-secondary font-inter">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 shrink-0" />
              {formattedDate}
            </span>
            <span className="w-px h-3 bg-slate-200" />
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 shrink-0" />
              {post.readingTime} min read
            </span>
          </div>

          {/* Title */}
          <h2
            className={`font-bold text-text-primary leading-snug font-poppins group-hover:text-primary transition-colors ${
              featured ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
            }`}
          >
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-xs sm:text-sm text-text-secondary font-inter leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        {/* Read more */}
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-50">
          <span className="text-xs text-text-secondary font-inter">
            By <span className="font-semibold text-text-primary">{post.author}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:gap-2.5 transition-all duration-200">
            Read More <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
