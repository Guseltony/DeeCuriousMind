"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, AlertCircle, Calendar, ShieldCheck, Clock, HelpCircle } from "lucide-react";
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
    <section className="py-10 md:py-16 px-6 md:px-8 lg:px-12 w-full bg-bg-light" id="contact-form">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Form Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-slate-100 shadow-sm text-left"
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

        {/* Right Side: Info Panel Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 space-y-6 text-left"
        >
          {/* Box 1: Response Time */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-indigo-50 text-primary rounded-xl shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-text-primary font-poppins">Expected Response Time</h4>
              <p className="text-xs sm:text-sm text-text-secondary mt-1 font-inter leading-relaxed">
                Denise reviews contact messages daily. You can expect a response within <strong className="font-semibold text-text-primary">24 hours</strong> on working days.
              </p>
            </div>
          </div>

          {/* Box 2: Visit Arrangements */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-purple-50 text-secondary rounded-xl shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-text-primary font-poppins">Visit Arrangements</h4>
              <p className="text-xs sm:text-sm text-text-secondary mt-1 font-inter leading-relaxed">
                Visits to our setting are by <strong className="font-semibold text-text-primary">prior appointment only</strong> (usually scheduled after-hours) to respect childcare groups and maintain a quiet, secure environment.
              </p>
            </div>
          </div>

          {/* Box 3: Open Slots Availability */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-green-50 text-green-600 rounded-xl shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-text-primary font-poppins">Availability & Enrollment</h4>
              <p className="text-xs sm:text-sm text-text-secondary mt-1 font-inter leading-relaxed">
                We accept children from 6 months to 5 years. Slots are limited to maintain our low childminder-to-child ratios. Let us know your requirements early!
              </p>
            </div>
          </div>

          {/* Box 4: General Questions */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-text-primary font-poppins">General Questions</h4>
              <p className="text-xs sm:text-sm text-text-secondary mt-1 font-inter leading-relaxed">
                Feel free to ask about custom session lengths, billing, settling-in periods, or specific allergy accommodations.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
