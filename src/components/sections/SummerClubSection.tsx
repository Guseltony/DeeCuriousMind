"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, Clock, MapPin, Tag, Phone, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../shared/Section";
import SectionHeading from "../shared/SectionHeading";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

export default function SummerClubSection() {
  // const [clubInfo, setClubInfo] = useState({
  //   title: "🌞 We’re Back Again for Another Exciting Summer! 🌈",
  //   description: "Our fun-filled club offers a safe, stimulating, and creative environment where children can learn, play, and thrive. Each day is packed with excitement — from outdoor adventures and arts & crafts to sports, themed days, and so much more! 🎨⚽🌿",
  //   flyerImage: "/images/summer_club.png",
  //   dateRange: "20th July – 14th August 2026",
  //   hours: "09:00am – 03:00pm",
  //   location: "Gillingham",
  //   ages: "2 – 11 years",
  //   pricing: "£30 per day (Lunch & Snacks included)",
  //   formUrl: "https://docs.google.com/forms/d/1e2MNK5ITSYLdb9Sa9385RAxSdCU6Dtx3qOpVLfEUseg/edit",
  // });
  const [isLoading, setIsLoading] = useState(true);
  const [hasData, setHasData] = useState(false);

  const [clubInfo, setClubInfo] = useState({
    title: "",
    description: "",
    flyerImage: "",
    dateRange: "",
    hours: "",
    location: "",
    ages: "",
    pricing: "",
    formUrl: "",
  });

  useEffect(() => {
    const fetchClub = async () => {
      try {
        const data = await client.fetch(`*[_type == "summerClub"][0] {
          title,
          description,
          flyerImage,
          dateRange,
          hours,
          location,
          ages,
          pricing,
          formUrl
        }`);
        if (data) {
          setClubInfo({
            title: data.title || "🌞 We’re Back Again for Another Exciting Summer! 🌈",
            description: data.description || "Our fun-filled club offers a safe, stimulating, and creative environment where children can learn, play, and thrive. Each day is packed with excitement — from outdoor adventures and arts & crafts to sports, themed days, and so much more! 🎨⚽🌿",
            flyerImage: data.flyerImage ? urlForImage(data.flyerImage).url() : "/images/summer_club.png",
            dateRange: data.dateRange || "20th July – 14th August 2026",
            hours: data.hours || "09:00am – 03:00pm",
            location: data.location || "Gillingham",
            ages: data.ages || "2 – 11 years",
            pricing: data.pricing || "£30 per day (Lunch & Snacks included)",
            formUrl: data.formUrl || "https://docs.google.com/forms/d/1e2MNK5ITSYLdb9Sa9385RAxSdCU6Dtx3qOpVLfEUseg/edit",
          });
          setHasData(true);
        } else {
          setHasData(false);
        }
      } catch (error) {
        console.error("Failed to fetch Summer Club info from Sanity:", error);
        setHasData(false);
      } finally {
        setIsLoading(false);
      }
    };
    fetchClub();
  }, []);

  if (isLoading || !hasData) return null;

  return (
    <Section background="light" id="summer-club">
      <SectionHeading
        title="Summer Holiday Club 2026"
        subtitle="Get ready for another unforgettable summer! Spaces are limited, so book now to secure your child's spot."
        badge="Special Event"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl xl:max-w-[1240px] 2xl:max-w-[1400px] 3xl:max-w-[1560px] mx-auto text-left">
        {/* Left Column: Flyer Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-[300px] h-[450px] sm:w-[350px] sm:h-[520px] rounded-2xl overflow-hidden shadow-lg border-8 border-white transition-transform duration-500 hover:scale-[1.02] bg-slate-100">
            <Image
              src={clubInfo.flyerImage}
              alt="Dees Curious Minds Summer Holiday Club Flyer"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right Column: Outings List */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-text-primary font-poppins leading-tight">
              {clubInfo.title}
            </h3>
            <p className="text-sm sm:text-base text-text-secondary font-inter leading-relaxed whitespace-pre-line">
              {clubInfo.description}
            </p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
              <Calendar className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-text-primary font-poppins">When</h4>
                <p className="text-xs sm:text-sm text-text-secondary font-inter">{clubInfo.dateRange}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
              <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-text-primary font-poppins">Hours</h4>
                <p className="text-xs sm:text-sm text-text-secondary font-inter">{clubInfo.hours}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-text-primary font-poppins">Where & Ages</h4>
                <p className="text-xs sm:text-sm text-text-secondary font-inter">{clubInfo.location} (Ages {clubInfo.ages})</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
              <Tag className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-text-primary font-poppins">Pricing & Meals</h4>
                <p className="text-xs sm:text-sm text-text-secondary font-inter">{clubInfo.pricing}</p>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-text-secondary font-inter">
            <span className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-secondary" />
              07840 066028
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-secondary" />
              deescuriousminds@gmail.com
            </span>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <a
              href={clubInfo.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-hover text-white px-8 py-4 rounded-xl font-bold tracking-wide shadow-md hover:shadow-lg transition-all hover:translate-y-[-2px] cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-current animate-pulse" />
              Book Summer Club Spot Now
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
