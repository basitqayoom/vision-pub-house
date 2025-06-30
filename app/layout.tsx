import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: 'Vision Publishing House - Professional Book Publishing Services',
  description: 'Vision Publishing House offers comprehensive book publishing services including manuscript editing, design, printing, and distribution. Contact us at +91-7889381511 or umaraziz97@gmail.com for educational publishing needs.',
  keywords: 'vision publishing house, book publishing, manuscript editing, book design, publishing services, self publishing, book printing, author services, literary services',
  authors: [{ name: 'Vision Publishing House' }],
  creator: 'Vision Publishing House',
  publisher: 'Vision Publishing House',
  metadataBase: new URL('https://www.visionpubhouse.com'),
  openGraph: {
    title: 'Vision Publishing House - Professional Book Publishing Services',
    description: 'Transform your manuscript into a published work with our comprehensive publishing services including editing, design, printing, and distribution.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.visionpubhouse.com',
    siteName: 'Vision Publishing House',
    images: [
      {
        url: 'https://www.visionpubhouse.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vision Publishing House - Professional Book Publishing Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vision Publishing House - Professional Book Publishing Services',
    description: 'Transform your manuscript into a published work with our comprehensive publishing services.',
    images: ['https://www.visionpubhouse.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.visionpubhouse.com',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a1a1a" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Structured Data for Business Information */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Vision Publishing House",
              "description": "Professional book publishing services including manuscript editing, design, printing, and distribution",
              "url": "https://www.visionpubhouse.com",
              "logo": "https://www.visionpubhouse.com/logo.png",
              "foundingDate": "2024",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7889381511",
                "email": "umaraziz97@gmail.com",
                "contactType": "customer service",
                "availableLanguage": ["English"],
                "areaServed": "Worldwide"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Batamaloo",
                "addressLocality": "Srinagar",
                "addressRegion": "Jammu & Kashmir",
                "postalCode": "190009",
                "addressCountry": "IN"
              },
              "serviceType": "Publishing Services",
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Publishing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Book Publishing",
                      "description": "Complete book publishing services from manuscript to market"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Manuscript Editing",
                      "description": "Professional editing services for manuscripts"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Book Design",
                      "description": "Professional book cover and interior design services"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* Local Business Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Vision Publishing House",
              "image": "https://www.visionpubhouse.com/logo.png",
              "telephone": "+91-7889381511",
              "email": "umaraziz97@gmail.com",
              "url": "https://www.visionpubhouse.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Batamaloo",
                "addressLocality": "Srinagar",
                "addressRegion": "Jammu & Kashmir",
                "postalCode": "190009",
                "addressCountry": "IN"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              }
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
