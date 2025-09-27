'use client';

import * as React from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SectionHeading } from './section-heading';
import { useToast } from '@/hooks/use-toast';

export function BookingForm() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const { toast } = useToast();

  const handleBooking = () => {
    if (date) {
      toast({
        title: 'Booking Request Sent!',
        description: `We've received your request for a call on ${date.toLocaleDateString()}. We'll be in touch shortly to confirm.`,
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'Please select a date for your call.',
      });
    }
  };

  return (
    <section id="book-a-call" className="py-16 px-8">
      <div className="container max-w-2xl mx-auto">
        <SectionHeading
          title="Book a Consultation"
          subtitle="Select a date that works for you, and we'll schedule a call to discuss your project."
        />
        <Card className="mt-12 bg-[rgba(255,255,255,0.05)] border border-[rgba(16,185,129,0.2)] backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">
              Choose a date
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-6">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border bg-transparent"
              disabled={(date) => date < new Date() || date < new Date('1900-01-01')}
            />
            <Button
              onClick={handleBooking}
              className="cta-btn cta-primary w-full"
            >
              Request a Call
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
