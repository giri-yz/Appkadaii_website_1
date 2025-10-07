
'use client';

import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { Particles } from '@/components/landing/particles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsOfServicePage() {
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
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <div className="bg-destructive/10 border-l-4 border-destructive text-destructive-foreground p-4 rounded-md my-4">
                  <h4 className="font-bold">Disclaimer</h4>
                  <p>This is a sample Terms of Service. Please consult with a legal professional to ensure these terms are appropriate for your specific business needs.</p>
              </div>

              <p>
                Please read these Terms of Service ("Terms", "Terms of Service")
                carefully before using the appkadaii.in website (the "Service")
                operated by App kadaii ("us", "we", or "our").
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">1. Acceptance of Terms</h3>
              <p>
                By accessing and using our Service, you accept and agree to be
                bound by the terms and provision of this agreement.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">2. Use License</h3>
              <p>
                Permission is granted to temporarily download one copy of the
                materials on App kadaii's website for personal, non-commercial
                transitory viewing only. This is the grant of a license, not a
                transfer of title.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">3. Disclaimer</h3>
              <p>
                The materials on App kadaii's website are provided on an 'as is'
                basis. App kadaii makes no warranties, expressed or implied,
                and hereby disclaims and negates all other warranties.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">4. Limitations</h3>
              <p>
                In no event shall App kadaii or its suppliers be liable for
                any damages (including, without limitation, damages for loss of
                data or profit, or due to business interruption) arising out
                of the use or inability to use the materials on App kadaii's
                website.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">5. Governing Law</h3>
              <p>
                These terms and conditions are governed by and construed in
                accordance with the laws of India and you irrevocably submit to
                the exclusive jurisdiction of the courts in that State or
                location.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">6. Changes to Terms</h3>
              <p>
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. We will provide notice of any
                changes by posting the new Terms of Service on this page.
              </p>

            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
