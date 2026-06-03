Project: Dee's Curious Minds Childcare Website

Overview

Build a modern, professional, responsive childcare website for Dee's Curious Minds, a childminding and childcare service. The purpose of the website is to establish trust with parents, showcase the childcare environment, communicate services and learning approaches, and generate inquiries through contact forms and WhatsApp.

This is not a SaaS application, dashboard, booking platform, or portal. It is a premium business website focused on branding, trust, SEO, and lead generation.

Tech Stack

* Next.js 15 (App Router)
* TypeScript
* Tailwind CSS
* Shadcn/UI
* Framer Motion
* Lucide React
* React Hook Form
* Zod
* Resend (or FormSubmit for forms)
* Next SEO best practices
* Vercel deployment target

Install Required Packages

npm install framer-motion lucide-react react-hook-form zod @hookform/resolvers clsx tailwind-merge class-variance-authority

npm install sonner

npm install react-icons

npm install next-themes

npm install embla-carousel-react

npm install react-countup

npm install react-intersection-observer

If using Resend:

npm install resend

Project Structure

src/
├── app
│   ├── page.tsx
│   ├── about
│   ├── services
│   ├── gallery
│   └── contact
│
├── components
│   ├── layout
│   ├── sections
│   ├── ui
│   └── shared
│
├── data
│
├── hooks
│
├── lib
│
├── types
│
├── constants
│
├── public
│
└── styles

Design Direction

The design should feel:

* Warm
* Trustworthy
* Professional
* Family-friendly
* Modern
* Clean
* Premium

Avoid:

* Corporate appearance
* Dark themes
* Tech startup styling
* Excessive animations
* Overly colorful children's cartoon designs

Primary Goal

A parent should immediately feel:

"Yes, I would trust this person with my child."

Typography

Font Family

Headings:
Poppins

Body:
Inter

Import through next/font.

Font Scale

Hero Heading:
text-5xl desktop
text-4xl tablet
text-3xl mobile

Section Heading:
text-4xl desktop
text-3xl tablet
text-2xl mobile

Card Heading:
text-xl

Body Text:
text-base

Small Text:
text-sm

Global Layout Standards

Container Width

max-w-7xl

Section Padding

Desktop:
py-24

Tablet:
py-20

Mobile:
py-16

Horizontal Padding

px-6 mobile

px-8 tablet

px-12 desktop

Content Spacing

Gap between sections:
gap-16

Gap between cards:
gap-6

Gap between text blocks:
gap-4

Border Radius

Cards:
rounded-2xl

Buttons:
rounded-xl

Images:
rounded-2xl

Shadows

Use soft shadows only.

shadow-sm
shadow-md

Avoid aggressive shadows.

Color System

Primary:
#4F46E5

Secondary:
#7C3AED

Accent:
#F59E0B

Background:
#FFFFFF

Light Section:
#F8FAFC

Text Primary:
#0F172A

Text Secondary:
#475569

Success:
#16A34A

Error:
#DC2626

Buttons

Primary Button

* Filled
* Medium shadow
* Smooth hover transition

Secondary Button

* Outline style
* Border only

Animations

Use Framer Motion sparingly.

Allowed:

* Fade In
* Slide Up
* Stagger Children
* Image Hover Zoom
* Card Hover Lift

Avoid:

* Continuous animations
* Excessive motion
* Fancy page transitions

SEO Setup

Configure:

Metadata
Open Graph
Twitter Cards
Robots
Sitemap

Each page must have:

Title
Description

Performance Requirements

* Lighthouse score above 90
* Mobile first
* Optimized images
* Lazy loading
* Next.js Image component
* No unnecessary dependencies

Accessibility

* Semantic HTML
* Keyboard navigation
* Proper aria labels
* Accessible forms
* Color contrast compliance

Reusable Components Required

Navbar

Footer

Page Hero

Section Heading

CTA Section

Testimonial Card

Service Card

Gallery Card

Contact Form

WhatsApp Floating Button

FAQ Accordion

Image Gallery

Final Pages

1. Home
2. About
3. Services
4. Gallery
5. Contact

Before implementing any page content, first create the complete design system, layout architecture, reusable components, theme configuration, typography system, spacing system, SEO setup, and project foundation.
