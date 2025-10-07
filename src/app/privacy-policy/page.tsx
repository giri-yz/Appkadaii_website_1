
'use client';

import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { Particles } from '@/components/landing/particles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState, useEffect } from 'react';

export default function PrivacyPolicyPage() {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    // This code runs only on the client, after the page has loaded.
    // This prevents a hydration error.
    setLastUpdated(new Date().toLocaleDateString());
  }, []);

  return (
    <>
      <Particles />
      <div className="global-bg"></div>
      <Header />
      <main className="py-16 px-8 pt-32">
        <div className="container max-w-4xl mx-auto">
          <Card className="bg-card/50 border border-primary/20 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary">
                Privacy Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none text-foreground/90">
              <p>
                <strong>Last Updated:</strong> {lastUpdated}
              </p>
              
              <p>
                This website, Appkadaii.in ("we," "our," or "us"), is a portfolio project. We are committed to protecting your privacy. This Privacy Policy explains how your personal information is handled on this site.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">1. Information We Collect</h3>
              <p>
                We only collect information that you voluntarily provide to us. This includes personal details you submit through forms on our website, such as when you book a call, contact us for an inquiry, or apply for a job. The information we collect is limited to what is provided in these forms (e.g., name, email address, phone number).
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">2. How We Use Your Information</h3>
              <p>
                We use the information you provide solely to communicate with you, respond to your inquiries, and process any requests you make. As this is a project website and not a registered company, your information will not be used for commercial marketing.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">3. Information Sharing</h3>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to outside parties. Your data is only used to facilitate communication between you and the site owner.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">4. Your Consent</h3>
              <p>
                By using our site and submitting our forms, you consent to this privacy policy.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
