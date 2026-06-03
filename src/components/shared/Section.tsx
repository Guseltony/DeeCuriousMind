import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "white" | "light" | "transparent";
}

export default function Section({
  children,
  id,
  className,
  background = "white",
}: SectionProps) {
  return (
    <section
      id={id}
      className={twMerge(
        clsx(
          "relative py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 w-full transition-colors duration-300 overflow-hidden",
          {
            "bg-white": background === "white",
            "bg-bg-light": background === "light",
            "bg-transparent": background === "transparent",
          }
        ),
        className
      )}
    >
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
}
