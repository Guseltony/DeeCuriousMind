import { defineField, defineType } from "sanity";

export default defineType({
  name: "review",
  title: "Parent Reviews / Testimonials",
  type: "document",
  fields: [
    defineField({
      name: "parentName",
      title: "Parent Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "relationship",
      title: "Relationship Details (e.g. Parent of 2yo)",
      type: "string",
    }),
    defineField({
      name: "rating",
      title: "Star Rating (1-5)",
      type: "number",
      initialValue: 5,
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: "text",
      title: "Review Text",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Controls the testimonial order (lower numbers first).",
      initialValue: 10,
    }),
  ],
});
