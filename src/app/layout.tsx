import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Healthcare Platform - Book Your Medical Appointment",
  description: "Find and book appointments with top healthcare professionals. Easy scheduling with specialists in Cardiology, Dermatology, Pediatrics and more.",
  keywords: 'healthcare, doctors, medical appointments, online booking, specialists',
  authors: [{ name: 'Healthcare Platform' }],
  viewport: "width=device-width, initial-scale=1",
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://in-vitro-capital-test.vercel.app',
    siteName: 'Healthcare Platform',
    title: 'Healthcare Platform - Book Your Medical Appointment',
    description: 'Find and book appointments with top healthcare professionals. Easy scheduling with specialists in Cardiology, Dermatology, Pediatrics and more.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Healthcare Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare Platform - Book Your Medical Appointment',
    description: 'Find and book appointments with top healthcare professionals. Easy scheduling with specialists.',
    images: ['/images/og-image.png'],
  },
  verification: {
    google: 'your-google-verification-code', // Si tienes Google Search Console
  },
  alternates: {
    canonical: 'https://in-vitro-capital-test.vercel.app',
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      {
        url: '/images/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/images/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        {/* Skip link para accesibilidad */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 
                   bg-blue-900 text-white p-4 z-50"
        >
          Skip to main content
        </a>
        
        <div id="main-content" className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  );
}
