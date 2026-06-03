"use client";

import React from "react";
import { Send, PhoneCall, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../../shared/Section";
import SectionHeading from "../../shared/SectionHeading";

const steps = [
  {
    icon: Send,
    title: "1. Send Enquiry",
    description: "Fill out our quick contact form or WhatsApp us. Let us know your preferred care days, hours, and your child's age.",
    color: "bg-indigo-500 text-white shadow-indigo-100",
  },
  {
    icon: PhoneCall,
    title: "2. Discuss Requirements",
    description: "Denise will schedule a friendly call to discuss your child's milestones, sleeping schedules, and childcare support options.",
    color: "bg-purple-500 text-white shadow-purple-100",
  },
  {
    icon: Calendar,
    title: "3. Arrange a Visit",
    description: "Come visit our home playroom in Gillingham. Meet Denise, inspect the resources, and check where your child will play.",
    color: "bg-green-500 text-white shadow-green-100",
  },
];

export default function EnquiryProcess() {
  return (
    <Section background="white" id="enquiry-process">
      <SectionHeading
        title="Our Childcare Enquiry Process"
        subtitle="Getting started with Dee's Curious Minds is simple. We follow a gentle three-step onboarding process to ensure we are a perfect match."
        badge="Enrollment Steps"
      />

      <div className="relative max-w-5xl mx-auto py-8">
        {/* Horizontal Connector Line (Desktop Only) */}
        <div className="absolute top-[56px] left-12 right-12 h-1 bg-gradient-to-r from-indigo-200 via-purple-200 to-green-200 rounded-full hidden md:block z-0" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 text-left">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start"
              >
                {/* Node Dot */}
                <div className="flex justify-center mb-6 relative">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${step.color}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-text-primary font-poppins mb-2">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed font-inter">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
