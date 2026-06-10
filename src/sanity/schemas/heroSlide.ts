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
      name: "mediaType",
      title: "Media Type",
      type: "string",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Video", value: "video" },
        ],
        layout: "radio",
      },
      initialValue: "image",
    }),
    defineField({
      name: "image",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
      hidden: ({ parent }) => parent?.mediaType === "video",
    }),
    defineField({
      name: "video",
      title: "Background Video",
      type: "file",
      options: {
        accept: "video/*",
      },
      hidden: ({ parent }) => parent?.mediaType !== "video",
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
