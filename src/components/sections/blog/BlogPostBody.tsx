"use client";

import React from "react";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

interface BlogPostBodyProps {
  body: any[];
}

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-base text-text-secondary leading-relaxed font-inter mb-5">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary font-poppins mt-10 mb-4 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg sm:text-xl font-bold text-text-primary font-poppins mt-8 mb-3 leading-snug">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-5 my-6 bg-primary/5 rounded-r-2xl py-4 pr-4 italic text-text-secondary font-inter text-base">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-none space-y-2 mb-6 ml-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal space-y-2 mb-6 ml-6 font-inter text-text-secondary">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-2 text-text-secondary font-inter text-base">
        <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="text-text-secondary font-inter text-base leading-relaxed">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-text-primary">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-text-secondary">{children}</em>
    ),
    underline: ({ children }) => (
      <span className="underline underline-offset-2">{children}</span>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-2 hover:text-primary/80 font-semibold transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      const imageUrl = urlForImage(value).width(900).fit("max").url();
      return (
        <figure className="my-8 rounded-2xl overflow-hidden shadow-md">
          <div className="relative w-full aspect-video">
            <Image
              src={imageUrl}
              alt={value.alt ?? "Blog post image"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {value.caption && (
            <figcaption className="text-center text-xs text-text-secondary font-inter mt-2 italic px-4 pb-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export default function BlogPostBody({ body }: BlogPostBodyProps) {
  return (
    <article className="prose-custom max-w-none">
      <PortableText value={body} components={components} />
    </article>
  );
}
