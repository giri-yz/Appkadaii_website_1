
'use client';

import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { Particles } from '@/components/landing/particles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
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
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>
              
              <p>
                App kadaii ("we," "our," or "us") is committed to protecting your
                privacy. This Privacy Policy explains how your personal
                information is collected, used, and disclosed by App kadaii.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">1. Information We Collect</h3>
              <p>
                We only collect information that you voluntarily provide to us. This includes personal details you submit through forms on our website, such as when you book a call, contact us for an inquiry, or apply for a job. The information we collect is limited to what is provided in these forms (e.g., name, email address, phone number). We do not collect any other data automatically.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">2. How We Use Your Information</h3>
              <p>
                We use the information we collect solely to:
              </p>
              <ul>
                <li>Provide, operate, and maintain our website and services.</li>
                <li>Communicate with you, including responding to your inquiries and sending you updates.</li>
                <li>Process your job applications or contact requests.</li>
                <li>Improve our website and services.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">3. Information Sharing and Disclosure</h3>
              <p>
                We do not sell, trade, or otherwise transfer your personal
                information to outside parties. This does not include trusted
                third parties who assist us in operating our website or
                servicing you, so long as those parties agree to keep this
                information confidential.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">4. Data Security</h3>
              <p>
                We implement a variety of security measures to maintain the safety
                of your personal information when you submit it through our forms.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">5. Your Consent</h3>
              <p>
                By using our site and submitting our forms, you consent to our website's privacy policy.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">6. Changes to Our Privacy Policy</h3>
              <p>
                If we decide to change our privacy policy, we will post those
                changes on this page.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
