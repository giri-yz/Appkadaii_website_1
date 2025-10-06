'use client';

import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Particles } from '@/components/landing/particles';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AlertTriangle, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Particles />
      <div className="global-bg"></div>

      <Header />
      <main>
        <section className="flex flex-col items-center justify-center text-center pt-32 px-8">
          <div className="container max-w-4xl mx-auto">
            <div className="relative w-32 h-32 mx-auto mb-8">
               <AlertTriangle className="absolute inset-0 w-32 h-32 text-primary opacity-20" />
               <AlertTriangle className="relative w-32 h-32 text-primary animate-pulse" />
            </div>
            
            <h1
              className="text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-tight leading-tight mb-4 text-foreground [text-shadow:0_4px_30px_rgba(0,0,0,0.1)]"
              style={{ animation: 'titleSlide 1s ease-out 0.3s both' }}
            >
              404 - Page Not Found
            </h1>

            <p 
              className="text-xl text-muted-foreground max-w-xl mx-auto mb-12"
              style={{ animation: 'subtitleFade 1.2s ease-out 0.6s both' }}
            >
              Oops! It seems the page you were looking for has taken a detour. Let's get you back on track.
            </p>

            <div style={{ animation: 'ctaRise 1.4s ease-out 0.9s both' }}>
              <Button asChild className="cta-btn cta-primary">
                <Link href="/">
                  <Home className="mr-2" /> Go to Homepage
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
