'use server';

import { Resend } from 'resend';
import * as z from 'zod';
import { RESEND_API_KEY } from '@/lib/config';

const formSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  applyingFor: z.string(),
  about: z.string(),
  resume: z.object({
    filename: z.string(),
    content: z.string(), // Base64 encoded file
  }),
});

type FormSchema = z.infer<typeof formSchema>;

export async function applyForJob(values: FormSchema) {
  if (!RESEND_API_KEY) {
    console.error('Resend API key is not configured.');
    return {
      success: false,
      error: 'The email service is not configured. Please add a Resend API key to your environment variables.',
    };
  }

  const resend = new Resend(RESEND_API_KEY);

  const textBody = `
New Job Application from: ${values.fullName}
---------------------------------------
Applying for: ${values.applyingFor}

Name: ${values.fullName}
Email: ${values.email}
Phone: ${values.phone}

About:
${values.about}
  `.trim();

  try {
    const { data, error } = await resend.emails.send({
      from: 'App Kadaii Careers <forms@appkadaii.in>',
      to: ['appkadaii@gmail.com', 'hello.gkarthick@gmail.com'],
      subject: `New Application: ${values.applyingFor} - ${values.fullName}`,
      text: textBody,
      attachments: [
        {
          filename: values.resume.filename,
          content: values.resume.content,
        },
      ],
    });

    if (error) {
      console.error({ error });
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error: any) {
    console.error(error);
    return {
      success: false,
      error: error.message || 'An unknown error occurred.',
    };
  }
}
