import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { client } from "@/sanity/lib/client";

export default function AnnouncementBar() {
  const [announcement, setAnnouncement] = useState({
    text: "☀️ Summer Club 2026 Open!",
    linkText: "Book Spot Now",
    linkUrl: "https://docs.google.com/forms/d/1e2MNK5ITSYLdb9Sa9385RAxSdCU6Dtx3qOpVLfEUseg/edit",
    isActive: true,
  });

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const data = await client.fetch(`*[_type == "announcement" && isActive == true][0] {
          text,
          linkText,
          linkUrl,
          isActive
        }`);
        if (data) {
          setAnnouncement(data);
        }
      } catch (error) {
        console.error("Failed to fetch announcement from Sanity:", error);
      }
    };
    fetchAnnouncement();
  }, []);

  if (!announcement.isActive) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-secondary via-primary to-secondary text-[#FFFDF0] px-1 py-1 sm:px-3 sm:py-1.5 text-center text-[12px] md:text-[16px] font-bold tracking-wide flex items-center justify-center gap-0.5 sm:gap-1.5 relative z-50 shadow-sm w-full">
      <Sparkles className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-current hidden xs:inline animate-pulse shrink-0" />
      <span className="shrink-0">{announcement.text}</span>
      <a
        href={announcement.linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-white inline-flex items-center gap-0.5 ml-0.5 cursor-pointer shrink-0"
      >
        {announcement.linkText || "Book Spot Now"} <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
      </a>
    </div>
  );
}
