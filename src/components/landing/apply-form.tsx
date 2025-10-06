'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useRouter } from 'next/navigation';

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
import { Send, Upload, X, File as FileIcon } from 'lucide-react';
import { applyForJob } from '@/app/apply/actions';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name is required.' }),
  email: z.string().email({ message: 'A valid email is required.' }),
  phone: z.string().min(10, { message: 'A valid phone number is required.' }),
  applyingFor: z.string({ required_error: 'Please select a role.' }),
  about: z.string().min(10, { message: 'Tell us a bit about yourself.' }),
  resume: z
    .any()
    .refine((files) => files?.length == 1, 'Resume is required.')
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
      '.pdf and .doc files are accepted.'
    ),
});

export function ApplyForm() {
  const { toast } = useToast();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      applyingFor: '',
      about: '',
    },
  });

  const fileRef = React.useRef<HTMLInputElement>(null);
  const resumeFile = form.watch('resume');

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    const file = values.resume[0];
    const reader = new FileReader();

    reader.onloadend = async () => {
        const base64String = (reader.result as string).split(',')[1];
        
        const payload = {
            ...values,
            resume: {
                filename: file.name,
                content: base64String
            }
        };

        try {
          const result = await applyForJob(payload);
          if (result.success) {
            toast({
              title: 'Application Sent!',
              description: 'Thank you for applying. We will get back to you shortly.',
            });
            form.reset();
            router.push('/careers');
          } else {
            throw new Error(result.error);
          }
        } catch (e: any) {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: e.message || "Could not send your application. Please try again later.",
          });
        } finally {
          setIsSubmitting(false);
        }
    };

    reader.readAsDataURL(file);
  }

  return (
    <section id="apply-form" className="py-16 px-8">
      <div className="container max-w-2xl mx-auto">
        <SectionHeading
          title="Apply Now"
          subtitle="Join our mission to build amazing applications. We're excited to hear from you."
        />
        <Card className="mt-12 bg-card/50 border border-primary/20 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-foreground">
              Your Application
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

                <FormField
                  control={form.control}
                  name="applyingFor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Applying For</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-transparent">
                            <SelectValue placeholder="Select a role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Frontend Developer">
                            Frontend Developer
                          </SelectItem>
                          <SelectItem value="Backend Developer">
                            Backend Developer
                          </SelectItem>
                          <SelectItem value="AI Prompt Engineer">
                            AI Prompt Engineer
                          </SelectItem>
                           <SelectItem value="Sales & Marketing">
                            Sales & Marketing
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
                  name="about"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>About You</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us why you'd be a great fit for our team."
                          className="bg-transparent"
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="resume"
                  render={({ field: { onChange, onBlur, name, ref } }) => (
                    <FormItem>
                      <FormLabel>Resume</FormLabel>
                      <FormControl>
                        <div>
                          {resumeFile && resumeFile.length > 0 ? (
                            <div className="flex items-center justify-between rounded-md border border-input bg-transparent p-2">
                              <div className="flex items-center gap-2">
                                <FileIcon className="h-5 w-5 text-muted-foreground" />
                                <span className="text-sm text-foreground truncate max-w-xs">
                                  {resumeFile[0].name}
                                </span>
                              </div>
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6"
                                onClick={() => {
                                  form.setValue('resume', null, { shouldValidate: true });
                                  if (fileRef.current) {
                                    fileRef.current.value = '';
                                  }
                                }}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          ) : (
                            <div className="relative">
                              <Input
                                id="resume"
                                type="file"
                                className="bg-transparent pl-12"
                                onChange={(e) => onChange(e.target.files)}
                                onBlur={onBlur}
                                name={name}
                                ref={fileRef}
                              />
                              <Upload className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                            </div>
                          )}
                        </div>
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
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
