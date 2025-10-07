
'use client';

import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { Particles } from '@/components/landing/particles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState, useEffect } from 'react';

export default function TermsOfServicePage() {
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
                Terms of Service
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none text-foreground/90">
              <p>
                <strong>Last Updated:</strong> {lastUpdated}
              </p>

              <p>
                Please read these Terms of Service ("Terms") carefully before using the appkadaii.in website (the "Service"). This website is operated as a portfolio project and is not a registered business entity.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">1. Acceptance of Terms</h3>
              <p>
                By accessing and using our Service, you accept and agree to be bound by these terms. If you disagree with any part of the terms, then you may not access the Service.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">2. Use of Website</h3>
              <p>
                This website is intended to showcase project work and facilitate contact. The information and materials are provided for general informational purposes only.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">3. Disclaimer</h3>
              <p>
                The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties. The content is for portfolio purposes and does not constitute a formal offer of service.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">4. Limitation of Liability</h3>
              <p>
                In no event shall the owner of this website be liable for any damages arising out of the use or inability to use the materials on this website.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">5. Changes to Terms</h3>
              <p>
                We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms of Service on this page.
              </p>

            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
