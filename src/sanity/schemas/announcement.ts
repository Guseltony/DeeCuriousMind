import { defineField, defineType } from "sanity";

export default defineType({
  name: "announcement",
  title: "Announcement Banner",
  type: "document",
  fields: [
    defineField({
      name: "text",
      title: "Banner Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "linkText",
      title: "CTA Link Text",
      type: "string",
      initialValue: "Book Spot Now",
    }),
    defineField({
      name: "linkUrl",
      title: "CTA Link URL",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isActive",
      title: "Is Banner Active?",
      type: "boolean",
      initialValue: true,
    }),
  ],
});
