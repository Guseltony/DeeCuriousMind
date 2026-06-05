"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, AlertCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { sendContactInquiry } from "@/app/actions/contact";

const contactFormSchema = z.object({
  parentName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(6, { message: "Please enter a valid phone number." }),
  childAge: z.string().optional(),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const infoDetails = [
  {
    icon: Phone,
    label: "Call Direct",
    value: "07840066028",
    href: "tel:07840066028",
    color: "text-indigo-600 bg-indigo-50 border-indigo-100",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "Deescuriousminds@gmail.com",
    href: "mailto:Deescuriousminds@gmail.com",
    color: "text-rose-600 bg-rose-50 border-rose-100",
  },
  {
    icon: MapPin,
    label: "Our Setting",
    value: "Gillingham, Kent",
    href: "https://maps.google.com/?q=Gillingham,+Kent",
    color: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    icon: Clock,
    label: "Opening Hours",
    value: "8:00 AM - 6:00 PM (Mon - Fri)",
    href: null,
    color: "text-amber-600 bg-amber-50 border-amber-100",
  },
];

export default function ContactFormSection() {
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      parentName: "",
      email: "",
      phone: "",
      childAge: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setErrorMessage(null);
    try {
      const result = await sendContactInquiry(data);
      if (result.success) {
        setSuccess(true);
        reset();
      } else {
        setErrorMessage(result.error || "An error occurred while sending your inquiry.");
      }
    } catch (err: any) {
      setErrorMessage("A network error occurred. Please try again later.");
    }
  };

  return (
    <section className="relative min-h-[65vh] flex items-center pt-32 pb-12 lg:pt-40 lg:pb-14 px-4 sm:px-6 lg:px-8 w-full bg-gradient-to-br from-bg-light via-white to-primary/10 overflow-hidden text-left" id="contact-form">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 translate-x-20 -translate-y-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 -translate-x-20 translate-y-20" />

      {/* Wave Divider at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative block w-full h-[25px] md:h-[40px]" preserveAspectRatio="none">
          <path d="M0,50 L1440,50 L1440,10 C1080,35 720,35 360,10 L0,30 Z" fill="#FFFFFF" />
        </svg>
      </div>

      <div className="max-w-7xl xl:max-w-[1360px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        
        {/* Left Column: Heading & Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 space-y-6 text-left"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide uppercase">
            Get in Touch
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight font-poppins">
            Start Your Journey <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              With Denise Today
            </span>
          </h1>
          <p className="text-sm md:text-base text-text-secondary font-inter max-w-xl leading-relaxed">
            Have questions about our schedule, open slots, or curriculum? Contact Denise directly by submitting the form, calling, or writing to us.
          </p>

          {/* Contact Details List */}
          <div className="space-y-4 pt-4">
            {infoDetails.map((item, idx) => {
              const Icon = item.icon;
              const isLink = !!item.href;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-4 bg-white p-4 rounded-2xl border-2 border-slate-100/60 shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <div className={`p-3 rounded-xl border shrink-0 ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary font-inter font-semibold">{item.label}</p>
                    {isLink && item.href ? (
                      <a
                        href={item.href}
                        className="text-sm sm:text-base font-bold text-text-primary hover:text-primary transition-colors font-poppins"
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm sm:text-base font-bold text-text-primary font-poppins">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Column: Inquiry Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border-2 border-slate-100 shadow-sm text-left w-full"
        >
          {success ? (
            /* Thank You / Success State */
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-6">
              <div className="p-4 bg-green-50 text-green-600 rounded-full shrink-0">
                <CheckCircle2 className="w-16 h-16" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-text-primary font-poppins">
                  Enquiry Sent Successfully!
                </h3>
                <p className="text-base text-text-secondary font-inter max-w-md leading-relaxed">
                  Thank you for your enquiry. We will get back to you shortly.
                </p>
              </div>
              <button
                onClick={() => setSuccess(false)}
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-sm transition-all"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            /* Inquiry Form State */
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold text-text-primary font-poppins">
                  Send a Childcare Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary font-inter">
                  Fill out the form below to message Denise directly. Required fields are marked *.
                </p>
              </div>

              {/* Error Callout */}
              {errorMessage && (
                <div className="p-4 bg-red-50 border border-red-100 text-red-700 rounded-xl flex items-start gap-3 text-sm font-inter">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Input Group: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="parentName" className="text-xs sm:text-sm font-semibold text-text-primary font-inter">
                    Parent Name *
                  </label>
                  <input
                    id="parentName"
                    type="text"
                    {...register("parentName")}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 rounded-xl border font-inter text-sm bg-bg-light focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
                      errors.parentName ? "border-red-400 focus:ring-red-100" : "border-slate-200 focus:border-primary"
                    }`}
                  />
                  {errors.parentName && (
                    <span className="text-xs text-red-600 font-semibold font-inter">
                      {errors.parentName.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs sm:text-sm font-semibold text-text-primary font-inter">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="parent@example.com"
                    className={`w-full px-4 py-3 rounded-xl border font-inter text-sm bg-bg-light focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
                      errors.email ? "border-red-400 focus:ring-red-100" : "border-slate-200 focus:border-primary"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-600 font-semibold font-inter">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Input Group: Phone & Child Age */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs sm:text-sm font-semibold text-text-primary font-inter">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="e.g. +44 7123 456789"
                    className={`w-full px-4 py-3 rounded-xl border font-inter text-sm bg-bg-light focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
                      errors.phone ? "border-red-400 focus:ring-red-100" : "border-slate-200 focus:border-primary"
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-xs text-red-600 font-semibold font-inter">
                      {errors.phone.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="childAge" className="text-xs sm:text-sm font-semibold text-text-primary font-inter">
                    Child's Age (Optional)
                  </label>
                  <input
                    id="childAge"
                    type="text"
                    {...register("childAge")}
                    placeholder="e.g. 18 months, 3 years"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 font-inter text-sm bg-bg-light focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>

              {/* Input: Subject */}
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs sm:text-sm font-semibold text-text-primary font-inter">
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register("subject")}
                  placeholder="e.g. Enquiry about childminder openings"
                  className={`w-full px-4 py-3 rounded-xl border font-inter text-sm bg-bg-light focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
                    errors.subject ? "border-red-400 focus:ring-red-100" : "border-slate-200 focus:border-primary"
                  }`}
                />
                {errors.subject && (
                  <span className="text-xs text-red-600 font-semibold font-inter">
                    {errors.subject.message}
                  </span>
                )}
              </div>

              {/* Input: Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs sm:text-sm font-semibold text-text-primary font-inter">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message")}
                  placeholder="Please specify your preferred hours, start dates, or specific care needs..."
                  className={`w-full px-4 py-3 rounded-xl border font-inter text-sm bg-bg-light focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none ${
                    errors.message ? "border-red-400 focus:ring-red-100" : "border-slate-200 focus:border-primary"
                  }`}
                />
                {errors.message && (
                  <span className="text-xs text-red-600 font-semibold font-inter">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover disabled:bg-slate-400 text-white font-bold tracking-wide py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  "Send Enquiry"
                )}
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
