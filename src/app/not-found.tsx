'use client';

import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Particles } from '@/components/landing/particles';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Particles />
      <div className="global-bg"></div>

      <Header />
      <main>
        <section className="flex flex-col items-center justify-center text-center pt-32 px-8">
          <div className="container max-w-4xl mx-auto">
            <div 
              className="relative text-9xl font-bold text-primary mb-8"
              style={{
                filter: 'drop-shadow(0 0 25px hsla(var(--primary), 0.6))',
                animation: 'glow 2.5s ease-in-out infinite'
              }}
            >
              <span className="absolute -left-4 -top-4 opacity-30 blur-sm animate-pulse">404</span>
              <span className="relative">404</span>
            </div>
            
            <h1
              className="text-[clamp(2.5rem,7vw,4.5rem)] font-bold tracking-tight leading-tight mb-4 text-foreground [text-shadow:0_4px_30px_rgba(0,0,0,0.1)]"
              style={{ animation: 'titleSlide 1s ease-out 0.3s both' }}
            >
              Lost in the Code?
            </h1>

            <p 
              className="text-xl text-muted-foreground max-w-xl mx-auto mb-12"
              style={{ animation: 'subtitleFade 1.2s ease-out 0.6s both' }}
            >
              Looks like the page you’re searching for doesn’t exist. But hey, let’s get you back to building something amazing!
            </p>

            <div style={{ animation: 'ctaRise 1.4s ease-out 0.9s both' }}>
              <Button asChild className="cta-btn cta-primary">
                <Link href="/">
                  <Home className="mr-2" /> Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
       <style jsx>{`
        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 10px hsla(var(--primary), 0.4), 0 0 20px hsla(var(--primary), 0.3), 0 0 30px hsla(var(--primary), 0.2);
          }
          50% {
            text-shadow: 0 0 20px hsla(var(--primary), 0.6), 0 0 30px hsla(var(--primary), 0.4), 0 0 40px hsla(var(--primary), 0.3);
          }
        }
      `}</style>
    </>
  );
}
