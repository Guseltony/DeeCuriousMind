"use server";

import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  parentName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(6, { message: "Please enter a valid phone number." }),
  childAge: z.string().optional(),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function sendContactInquiry(formData: z.infer<typeof contactSchema>) {
  // 1. Validate inputs on the server
  const validated = contactSchema.safeParse(formData);
  if (!validated.success) {
    return { success: false, error: "Invalid form data. Please check your inputs." };
  }

  const { parentName, email, phone, childAge, subject, message } = validated.data;

  // 2. Initialize Resend
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey === "re_your_api_key_here") {
    console.warn("Resend API Key is missing or default. Simulating successful form submission.");
    console.log("Inquiry details received:", validated.data);
    return { success: true, warning: "Simulated success because RESEND_API_KEY is not set." };
  }

  const resend = new Resend(apiKey);

  try {
    // 3. Send email via Resend
    // By default, Resend onboarding allows sending to the address associated with your account.
    // We send from onboarding@resend.dev to a test box, but in production, we reply to the parent.
    const emailResult = await resend.emails.send({
      from: "Dees Curious Minds <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL_RECIPIENT || "deescuriousminds@gmail.com"],
      replyTo: email,
      subject: `New Childcare Inquiry: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f1f5f9; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #4F46E5; margin-bottom: 24px;">New Childcare Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #0F172A; width: 150px;">Parent Name:</td>
              <td style="padding: 10px 0; color: #475569;">${parentName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #0F172A;">Email Address:</td>
              <td style="padding: 10px 0; color: #475569;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #0F172A;">Phone Number:</td>
              <td style="padding: 10px 0; color: #475569;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #0F172A;">Child's Age:</td>
              <td style="padding: 10px 0; color: #475569;">${childAge || "Not specified"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #0F172A;">Subject:</td>
              <td style="padding: 10px 0; color: #475569;">${subject}</td>
            </tr>
            <tr>
              <td style="padding: 15px 0 10px 0; font-weight: bold; color: #0F172A;" colspan="2">Message:</td>
            </tr>
            <tr>
              <td style="padding: 10px; color: #475569; background-color: #f8fafc; border-radius: 8px;" colspan="2">
                ${message.replace(/\n/g, "<br />")}
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    if (emailResult.error) {
      console.error("Resend API Error:", emailResult.error);
      return { success: false, error: emailResult.error.message };
    }

    return { success: true };
  } catch (error: any) {
    console.error("Failed to send email:", error);
    return { success: false, error: error.message || "An unexpected error occurred." };
  }
}
