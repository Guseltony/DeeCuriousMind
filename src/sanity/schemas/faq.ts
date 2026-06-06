import { defineField, defineType } from "sanity";

export default defineType({
  name: "faq",
  title: "Frequently Asked Questions (FAQ)",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Controls the order of FAQs (lower numbers first).",
      initialValue: 10,
    }),
  ],
});
