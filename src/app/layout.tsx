import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ResponsiveAnimationProvider } from "@/components/providers/responsive-animation-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BootOverlay } from "@/components/boot/boot-overlay";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { PageTracking } from "@/components/analytics/page-tracking";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bahaa-dev.vercel.app'),
  title: "Bahaa Gaballah | Full Stack Developer & Software Engineer",
  description: "Experienced Full Stack Developer specializing in React, Next.js, Node.js, TypeScript, and cloud technologies. Portfolio showcasing professional projects and expertise.",
  keywords: ["Bahaa Gaballah", "Full Stack Developer", "Software Engineer", "React Developer", "Next.js", "TypeScript", "Node.js", "Frontend Developer", "Backend Developer", "Web Developer", "Portfolio"],
  authors: [{ name: "Bahaa Gaballah" }],
  creator: "Bahaa Gaballah",
  publisher: "Bahaa Gaballah",
  openGraph: {
    title: "Bahaa Gaballah | Full Stack Developer & Software Engineer",
    description: "Experienced Full Stack Developer specializing in React, Next.js, Node.js, TypeScript, and cloud technologies.",
    url: "https://bahaa-dev.vercel.app",
    siteName: "Bahaa Gaballah Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bahaa Gaballah - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bahaa Gaballah | Full Stack Developer & Software Engineer",
    description: "Experienced Full Stack Developer specializing in React, Next.js, Node.js, TypeScript, and cloud technologies.",
    images: ["/og-image.jpg"],
    creator: "@bahaagaballah",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code-here",
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Responsive Meta Tags handled via exported viewport config */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Performance & Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preload" href="/avatar.jpg" as="image" />
        
        {/* Theme & Icons */}
        <meta name="theme-color" content="#10b981" />
        <meta name="msapplication-TileColor" content="#10b981" />
        <meta name="apple-mobile-web-app-title" content="Bahaa Gaballah" />
        <link rel="icon" href="/avatar.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/avatar.jpg" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="google-site-verification-code-here" />
        
        {/* PWA & Performance */}
        <meta name="application-name" content="Bahaa Gaballah Portfolio" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Accessibility */}
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ResponsiveAnimationProvider>
          <ThemeProvider>
            <BootOverlay />
            <Navbar />
            <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-emerald-950 dark:via-black dark:to-green-950">
              {children}
            </main>
            <Footer />
            <GoogleAnalytics />
            <PageTracking />
            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
        </ResponsiveAnimationProvider>
      </body>
    </html>
  );
}
