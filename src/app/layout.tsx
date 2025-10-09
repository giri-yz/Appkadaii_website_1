import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = 'https://appkadaii.in';
const logoUrl = `${siteUrl}/Gemini_Generated_Image_iopkcriopkcriopk.png`;
const siteTitle = 'Appkadaii – Turning Ideas into Reality';
const siteDescription =
  'Appkadaii builds apps, websites, and digital solutions that help businesses grow faster.';

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: [
    'Appkadaii',
    'appkadai',
    'software company',
    'website builder',
    'web development',
    'Chennai',
    'business apps',
    'custom software',
    'AI solutions',
  ],
  robots: 'index, follow',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: logoUrl,
        width: 1088,
        height: 960,
        alt: 'Appkadaii Logo',
      },
    ],
    siteName: 'Appkadaii',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [logoUrl],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteUrl}/site.webmanifest`,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Appkadaii',
  url: siteUrl,
  logo: logoUrl,
  sameAs: [
    'https://www.linkedin.com/in/g-karthick/',
    'https://github.com/Gk-karthick',
    'https://www.instagram.com/mr_pirate_gk/',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn(inter.className, 'overflow-x-hidden relative font-body')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
