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
import { sendEmail } from '@/app/contact/actions';

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name is required.' }),
  email: z.string().email({ message: 'A valid email is required.' }),
  phone: z.string().min(10, { message: 'A valid phone number is required.' }),
  date: z.date({ required_error: 'Please select a date.' }),
  time: z.string().min(1, { message: 'A valid time is required.' }),
  purpose: z.string({ required_error: 'Please select a purpose.' }),
  contactMethod: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: 'You have to select at least one item.',
    }),
  referralSource: z.string({ required_error: 'Please select a source.' }),
  notes: z.string().optional(),
});

const contactMethods = [
  { id: 'Email', label: 'Email' },
  { id: 'Phone Call', label: 'Phone Call' },
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
      date: new Date(),
      time: '',
      purpose: '',
      referralSource: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    const htmlBody = `
      <h1>New Contact Form Submission</h1>
      <p><strong>Full Name:</strong> ${values.fullName}</p>
      <p><strong>Email:</strong> ${values.email}</p>
      <p><strong>Phone:</strong> ${values.phone}</p>
      <p><strong>Date:</strong> ${format(values.date, 'PPP')}</p>
      <p><strong>Time:</strong> ${values.time}</p>
      <p><strong>Purpose:</strong> ${values.purpose}</p>
      <p><strong>Contact Method:</strong> ${values.contactMethod.join(', ')}</p>
      <p><strong>Referral Source:</strong> ${values.referralSource}</p>
      <p><strong>Notes:</strong> ${values.notes || 'N/A'}</p>
    `;

    try {
      const result = await sendEmail(values, htmlBody);
      if (result.success) {
        toast({
          title: 'Message Sent!',
          description: 'Thank you for reaching out. We will get back to you shortly.',
        });
        form.reset();
      } else {
        throw new Error(result.error);
      }
    } catch (e: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: e.message || "Could not send your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const pageDetails = {
    appointment: {
      title: 'Book Your Appointment',
      subtitle:
        'Schedule a convenient time to connect with us. We look forward to assisting you.',
      cardTitle: 'Tell us about your project',
      buttonText: 'Request Appointment',
    },
    contact: {
      title: 'Get in Touch',
      subtitle:
        "Have a project in mind or just want to say hi? Fill out the form below and we'll get back to you.",
      cardTitle: 'Contact Us',
      buttonText: 'Send Message',
    },
  };

  const details = pageDetails[formType];

  return (
    <section id="contact-form" className="py-16 px-8">
      <div className="container max-w-2xl mx-auto">
        <SectionHeading title={details.title} subtitle={details.subtitle} />
        <Card className="mt-12 bg-card/50 border border-primary/20 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-foreground">
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
                          <PopoverContent className="w-auto p-0" align="start">
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
                          <Input
                            type="time"
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
                          <SelectItem value="Technical Support">
                            Technical Support
                          </SelectItem>
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
                                      onCheckedChange={(checked: any) => {
                                        return checked
                                          ? field.onChange([
                                              ...(field.value || []),
                                              item.id,
                                            ])
                                          : field.onChange(
                                              (field.value || []).filter(
                                                (value) => value !== item.id
                                              )
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    {item.label}
                                  </FormLabel>
                                </FormItem>
                              );
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
                            <RadioGroupItem value="Search Engine (Google, Bing, etc.)" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Search Engine
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
                          <FormLabel className="font-normal">Referral</FormLabel>
                        </FormItem>
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
                      <FormLabel>Additional Notes</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us anything else we should know."
                          className="bg-transparent"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full cta-btn cta-primary"
                  disabled={isSubmitting}
                >
                  <Send className="mr-2 h-4 w-4" />
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
