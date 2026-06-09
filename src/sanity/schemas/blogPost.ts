import { defineField, defineType } from "sanity";

export default defineType({
  name: "blogPost",
  title: "Blog Posts",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Post Title",
      type: "string",
      description: "The headline of your blog post. Keep it under 70 characters for best SEO.",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      description: "Auto-generated from the title. This becomes the URL: /blog/your-slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      description: "The date this post will appear as published.",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      initialValue: "Denise",
      description: "Who wrote this post.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "Topic category for this post.",
      options: {
        list: [
          { title: "Childcare Tips", value: "Childcare Tips" },
          { title: "EYFS & Development", value: "EYFS & Development" },
          { title: "Activities & Play", value: "Activities & Play" },
          { title: "Parent Guides", value: "Parent Guides" },
          { title: "Gillingham & Local", value: "Gillingham & Local" },
          { title: "News & Updates", value: "News & Updates" },
        ],
      },
      initialValue: "Childcare Tips",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "readingTime",
      title: "Reading Time (minutes)",
      type: "number",
      description: "Approximate reading time. Tip: 200 words ≈ 1 minute.",
      initialValue: 4,
      validation: (Rule) => Rule.required().min(1).max(30),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt / Summary",
      type: "text",
      rows: 3,
      description:
        "A short summary shown on the blog listing page and used as the SEO meta description. Keep it under 160 characters.",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "mainImage",
      title: "Cover Image",
      type: "image",
      description: "The featured image shown on the blog card and at the top of the post.",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Image Alt Text",
          type: "string",
          description: "Describe the image for SEO and accessibility.",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "body",
      title: "Post Content",
      type: "array",
      description: "Write your full blog post content here. Use headings, paragraphs, bullet lists, and images.",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Underline", value: "underline" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt Text",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "caption",
              type: "string",
              title: "Caption (optional)",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author",
      media: "mainImage",
      publishedAt: "publishedAt",
    },
    prepare({ title, author, media, publishedAt }) {
      const date = publishedAt
        ? new Date(publishedAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })
        : "Draft";
      return {
        title,
        subtitle: `By ${author ?? "Denise"} · ${date}`,
        media,
      };
    },
  },
});
