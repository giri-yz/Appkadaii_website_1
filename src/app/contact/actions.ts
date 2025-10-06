'use server';

import { Resend } from 'resend';
import * as z from 'zod';
import { format } from 'date-fns';
import { RESEND_API_KEY } from '@/lib/config';

const formSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  date: z.date(),
  time: z.string(),
  purpose: z.string(),
  contactMethod: z.array(z.string()),
  referralSource: z.string(),
  notes: z.string().optional(),
});

type FormSchema = z.infer<typeof formSchema>;

export async function sendEmail(values: FormSchema) {
  if (!RESEND_API_KEY) {
    console.error('Resend API key is not configured.');
    return {
      success: false,
      error:
        'The email service is not configured. Please add a Resend API key to your environment variables.',
    };
  }

  const resend = new Resend(RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: 'App Kadaii Contact Form <onboarding@resend.dev>',
      to: ['appkadaii@gmail.com', 'hello.gkarthick@gmail.com'],
      subject: `New Inquiry from ${values.fullName} via Website Form`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="border-bottom: 2px solid #eee; padding-bottom: 10px;">New Website Inquiry</h2>
          <p>A new submission has been received through the contact form. Please find the details below.</p>
          <table style="width: 100%; border-collapse: collapse; margin: 25px 0;">
            <tbody>
              <tr style="background-color: #f9f9f9;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Full Name:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${values.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Email Address:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${values.email}</td>
              </tr>
              <tr style="background-color: #f9f9f9;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Phone Number:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${values.phone}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Preferred Date:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${format(values.date, 'PPP')}</td>
              </tr>
              <tr style="background-color: #f9f9f9;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Preferred Time:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${values.time}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Purpose of Contact:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${values.purpose}</td>
              </tr>
              <tr style="background-color: #f9f9f9;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Preferred Contact Method(s):</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${values.contactMethod.join(', ')}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Referral Source:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${values.referralSource}</td>
              </tr>
              <tr style="background-color: #f9f9f9;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Message:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${values.notes || 'No message provided.'}</td>
              </tr>
            </tbody>
          </table>
          <p style="font-size: 0.9em; color: #777;">This email was sent automatically from the App Kadaii website.</p>
        </div>
      `,
    });

    if (error) {
      console.error({ error });
      // Return the specific error message from Resend
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error: any) {
    console.error(error);
    // Also return the specific error message in case of a crash
    return {
      success: false,
      error: error.message || 'An unknown error occurred.',
    };
  }
}
