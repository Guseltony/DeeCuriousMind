import { defineField, defineType } from "sanity";

export default defineType({
  name: "heroSlide",
  title: "Hero Carousel Slides",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Slide Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "badge",
      title: "Slide Badge Label (e.g. Active EYFS Learning)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description Text",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Controls the slide sequence (lower numbers display first).",
      initialValue: 10,
    }),
  ],
});
