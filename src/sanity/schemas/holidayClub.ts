import { defineField, defineType } from "sanity";

export default defineType({
  name: "holidayClub",
  title: "Holiday Club",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Club Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Active / Booking Open", value: "active" },
          { title: "Upcoming / Announced", value: "upcoming" },
          { title: "Past / Archived", value: "past" },
        ],
        layout: "radio",
      },
      initialValue: "active",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description Text",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "flyerImage",
      title: "Flyer Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "dateRange",
      title: "Dates (e.g. 20th July – 14th August 2026)",
      type: "string",
    }),
    defineField({
      name: "hours",
      title: "Hours (e.g. 09:00am – 03:00pm)",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Location (e.g. Gillingham)",
      type: "string",
    }),
    defineField({
      name: "ages",
      title: "Ages (e.g. 2 – 11 years)",
      type: "string",
    }),
    defineField({
      name: "pricing",
      title: "Pricing & Meals (e.g. £30 per day (Lunch included))",
      type: "string",
    }),
    defineField({
      name: "formUrl",
      title: "Google Form Registration Link",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),
  ],
});
