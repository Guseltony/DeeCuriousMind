import { defineField, defineType } from "sanity";

export default defineType({
  name: "galleryItem",
  title: "Gallery & Reel Items",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // Enables visual cropping / centering in the Sanity Studio
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "e.g., Indoor Environment, Outdoor Learning, Structured Play, Expressive Design",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "caption",
      title: "Reel Caption / Description",
      type: "text",
      description: "This text will overlay beautifully on the vertical Instagram Reel viewer modal.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Used to sort images (smaller numbers display first).",
      initialValue: 10,
    }),
  ],
});
