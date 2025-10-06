'use server';

import 'dotenv/config';
import { Resend } from 'resend';
import * as z from 'zod';
import { format } from 'date-fns';

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
  if (!process.env.RESEND_API_KEY) {
    console.error('Resend API key is not configured.');
    return { 
      success: false, 
      error: 'The email service is not configured. Please add a Resend API key to your environment variables.' 
    };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: 'App Kadaii Contact Form <onboarding@resend.dev>',
      to: ['appkadaii@gmail.com'],
      subject: `New Contact Form Submission - ${values.fullName}`,
      html: `
        <h1>New Form Submission</h1>
        <p><strong>Full Name:</strong> ${values.fullName}</p>
        <p><strong>Email:</strong> ${values.email}</p>
        <p><strong>Phone:</strong> ${values.phone}</p>
        <p><strong>Preferred Date:</strong> ${format(values.date, 'PPP')}</p>
        <p><strong>Preferred Time:</strong> ${values.time}</p>
        <p><strong>Purpose:</strong> ${values.purpose}</p>
        <p><strong>Preferred Contact Method(s):</strong> ${values.contactMethod.join(', ')}</p>
        <p><strong>Referral Source:</strong> ${values.referralSource}</p>
        <p><strong>Message:</strong></p>
        <p>${values.notes || 'No message provided.'}</p>
      `,
    });

    if (error) {
      console.error({ error });
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error: any) {
    console.error(error);
    return { success: false, error: error.message || 'An unknown error occurred.' };
  }
}
