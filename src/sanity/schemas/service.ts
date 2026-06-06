import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Core Childcare Services",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Service Name (e.g. Baby Care)",
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
      name: "ageRange",
      title: "Age Range (e.g. 3 months – 2 years)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "schedule",
      title: "Schedule Info (e.g. Full-Time & Part-Time)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "iconName",
      title: "Icon Identifier (e.g. Baby, Heart, Shield, GraduationCap)",
      type: "string",
      description: "Type a Lucide icon key name to dynamically match styling.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 10,
    }),
  ],
});
