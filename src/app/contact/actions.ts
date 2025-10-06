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
  
  // Create a simple, parser-friendly text body
  const textBody = `
New Inquiry from: ${values.fullName}
---------------------------------
Full Name: ${values.fullName}
Email: ${values.email}
Phone: ${values.phone}
Preferred Date: ${format(values.date, 'PPP')}
Preferred Time: ${values.time}
Purpose: ${values.purpose}
Contact Method: ${values.contactMethod.join(', ')}
Referral Source: ${values.referralSource}
Notes: ${values.notes || 'N/A'}
  `.trim();


  try {
    const { data, error } = await resend.emails.send({
      from: 'App Kadaii Contact Form <onboarding@resend.dev>',
      to: ['appkadaii@gmail.com', 'hello.gkarthick@gmail.com'],
      subject: `New Inquiry from ${values.fullName}`,
      text: textBody,
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
