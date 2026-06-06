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



      <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1536px] 3xl:max-w-[1720px] 4xl:max-w-[1920px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">

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

          {/* Social Links on Contact Page */}
          <div className="pt-6 space-y-3">
            <p className="text-xs font-bold text-text-secondary uppercase tracking-wider font-poppins">Connect with us on Social Media</p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.facebook.com/search/top/?q=Dees%20curious%20minds"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-white border-2 border-slate-100 hover:border-primary/20 hover:bg-slate-50 rounded-2xl text-xs sm:text-sm font-bold text-text-primary transition-all shadow-sm cursor-pointer"
              >
                <svg className="w-4 h-4 fill-[#1877F2] shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/Dees_curious_minds/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-white border-2 border-slate-100 hover:border-primary/20 hover:bg-slate-50 rounded-2xl text-xs sm:text-sm font-bold text-text-primary transition-all shadow-sm cursor-pointer"
              >
                <svg className="w-4 h-4 fill-[#E4405F] shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.26-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 110 12.324 6.162 6.162 0 010-12.324zM12 16a4 4 0 100-8 4 4 0 000 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                <span>Instagram</span>
              </a>
            </div>
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
                    className={`w-full px-4 py-3 rounded-xl border font-inter text-sm bg-bg-light focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${errors.parentName ? "border-red-400 focus:ring-red-100" : "border-slate-200 focus:border-primary"
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
                    className={`w-full px-4 py-3 rounded-xl border font-inter text-sm bg-bg-light focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${errors.email ? "border-red-400 focus:ring-red-100" : "border-slate-200 focus:border-primary"
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
                    className={`w-full px-4 py-3 rounded-xl border font-inter text-sm bg-bg-light focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${errors.phone ? "border-red-400 focus:ring-red-100" : "border-slate-200 focus:border-primary"
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
                  className={`w-full px-4 py-3 rounded-xl border font-inter text-sm bg-bg-light focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${errors.subject ? "border-red-400 focus:ring-red-100" : "border-slate-200 focus:border-primary"
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
                  className={`w-full px-4 py-3 rounded-xl border font-inter text-sm bg-bg-light focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none ${errors.message ? "border-red-400 focus:ring-red-100" : "border-slate-200 focus:border-primary"
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
