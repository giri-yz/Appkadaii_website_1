'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { format } from 'date-fns';

import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SectionHeading } from './section-heading';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar as CalendarIcon, Send } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '../ui/checkbox';

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name is required.' }),
  email: z.string().email({ message: 'A valid email is required.' }),
  phone: z.string().min(10, { message: 'A valid phone number is required.' }),
  date: z.date({ required_error: 'Please select a date.' }),
  time: z.string({ required_error: 'Please select a time slot.' }),
  purpose: z.string({ required_error: 'Please select a purpose.' }),
  contactMethod: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  referralSource: z.string().optional(),
  notes: z.string().optional(),
});

// These entry IDs are from your new Google Form.
const GOOGLE_FORM_ACTION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfVqsdpzS5O4YqCuxx_NlXWxEcWU2e6xQuily5oAb_JJMYYEA/formResponse';

const HIDDEN_EMAIL_ID = 'entry.618588388';
const FULL_NAME_ID = 'entry.1948634153';
const EMAIL_ID = 'entry.2075370401';
const PHONE_ID = 'entry.875121725';
const DATE_ID = 'entry.1216755856';
const TIME_ID = 'entry.1027392810';
const PURPOSE_ID = 'entry.1480777819';
const CONTACT_METHOD_ID = 'entry.183810773';
const REFERRAL_SOURCE_ID = 'entry.700209598';
const NOTES_ID = 'entry.236791353'; // Re-using old notes ID for the new confirmation.
const CONFIRM_ID = 'entry.236791353';

const contactMethods = [
  { id: 'Email', label: 'Email' },
  { id: 'Phone', label: 'Phone' },
  { id: 'Whatsapp', label: 'Whatsapp' },
  { id: 'Video Conference', label: 'Video Conference' },
] as const;


interface ContactFormProps {
  formType: 'appointment' | 'contact';
}

export function ContactForm({ formType }: ContactFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      notes: '',
      contactMethod: [],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const formData = new FormData();
    // Hidden field
    formData.append(HIDDEN_EMAIL_ID, 'appkadaii@gmail.com');
    
    // User-filled fields
    formData.append(FULL_NAME_ID, values.fullName);
    formData.append(EMAIL_ID, values.email);
    formData.append(PHONE_ID, values.phone);
    
    // Google Forms expects date as YYYY-MM-DD and time separately.
    const dateParts = format(values.date, 'yyyy-MM-dd').split('-');
    formData.append(`${DATE_ID}_year`, dateParts[0]);
    formData.append(`${DATE_ID}_month`, dateParts[1]);
    formData.append(`${DATE_ID}_day`, dateParts[2]);

    const timeParts = values.time.split(':');
    formData.append(`${TIME_ID}_hour`, timeParts[0]);
    formData.append(`${TIME_ID}_minute`, timeParts[1]);

    formData.append(PURPOSE_ID, values.purpose);
    
    // Handle multiple selection for contact method
    values.contactMethod.forEach(method => {
      formData.append(CONTACT_METHOD_ID, method);
    });

    formData.append(REFERRAL_SOURCE_ID, values.referralSource || '');
    formData.append(NOTES_ID, values.notes || '');

    // Automated confirmation
    formData.append(CONFIRM_ID, 'Yes, I confirm.');

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });

      toast({
        title: formType === 'appointment' ? 'Appointment Request Sent! ✅' : 'Form Submitted Successfully! ✅',
        description:
          "We've received your message and will be in touch shortly.",
      });
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description:
          'There was a problem submitting your request. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const timeSlots = [
    { value: '09:00', label: '09:00 AM - 10:00 AM' },
    { value: '10:00', label: '10:00 AM - 11:00 AM' },
    { value: '11:00', label: '11:00 AM - 12:00 PM' },
    { value: '12:00', label: '12:00 PM - 01:00 PM' },
    { value: '13:00', label: '01:00 PM - 02:00 PM' },
    { value: '14:00', label: '02:00 PM - 03:00 PM' },
    { value: '15:00', label: '03:00 PM - 04:00 PM' },
    { value: '16:00', label: '04:00 PM - 05:00 PM' },
  ];

  const pageDetails = {
    appointment: {
      title: 'Book Your Appointment',
      subtitle: 'Schedule a convenient time to connect with us. We look forward to assisting you.',
      cardTitle: 'Tell us about your project',
      buttonText: 'Request Appointment',
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Have a project in mind or just want to say hi? Fill out the form below and we\'ll get back to you.',
      cardTitle: 'Contact Us',
      buttonText: 'Send Message',
    }
  };

  const details = pageDetails[formType];

  return (
    <section id="contact-form" className="py-16 px-8">
      <div className="container max-w-2xl mx-auto">
        <SectionHeading
          title={details.title}
          subtitle={details.subtitle}
        />
        <Card className="mt-12 bg-[rgba(255,255,255,0.05)] border border-[rgba(16,185,129,0.2)] backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">
              {details.cardTitle}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            {...field}
                            className="bg-transparent"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="you@example.com"
                            {...field}
                            className="bg-transparent"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="+1 (555) 123-4567"
                          {...field}
                          className="bg-transparent"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Preferred Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={'outline'}
                                className={cn(
                                  'w-full justify-start text-left font-normal bg-transparent',
                                  !field.value && 'text-muted-foreground'
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {field.value ? (
                                  format(field.value, 'PPP')
                                ) : (
                                  <span>Pick a date</span>
                                )}
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent
                            className="w-auto p-0"
                            align="start"
                          >
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date < new Date() ||
                                date < new Date('1900-01-01')
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Time</FormLabel>
                         <FormControl>
                          <Input type="time" {...field} className="bg-transparent" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="purpose"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Purpose of Contact</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-transparent">
                            <SelectValue placeholder="What's this about?" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Project Discussion">
                            Project Discussion
                          </SelectItem>
                          <SelectItem value="Consultation">
                            Consultation
                          </SelectItem>
                          <SelectItem value="Demo">Demo</SelectItem>
                          <SelectItem value="Support">Support</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contactMethod"
                  render={() => (
                    <FormItem>
                      <FormLabel>Preferred Contact Method(s)</FormLabel>
                      <div className="grid grid-cols-2 gap-4">
                      {contactMethods.map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="contactMethod"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...(field.value || []), item.id])
                                        : field.onChange(
                                            (field.value || []).filter(
                                              (value) => value !== item.id
                                            )
                                          )
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {item.label}
                                </FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="referralSource"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How did you hear about us?</FormLabel>
                       <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-2 gap-4"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="Online Advertisement" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Online Advertisement
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="Social Media" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Social Media
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="Referral" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Referral
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="Other" />
                          </FormControl>
                          <FormLabel className="font-normal">Other</FormLabel>
                        </FormItem>
                      </RadioGroup>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us anything else that might be helpful."
                          className="resize-none bg-transparent"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="cta-btn cta-primary w-full"
                  disabled={isSubmitting}
                >
                  <Send />
                  {isSubmitting ? 'Sending...' : details.buttonText}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
