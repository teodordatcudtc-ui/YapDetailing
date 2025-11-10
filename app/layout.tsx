import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import TopBar from '@/components/TopBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import PageTransition from '@/components/PageTransition'
import QuickBookingButton from '@/components/QuickBookingButton'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://yap-detailing.ro'),
  title: {
    default: 'Yap Detailing — Redefinim strălucirea mașinii tale',
    template: '%s | Yap Detailing'
  },
  description: 'Protecție ceramică, PPF și detailing interior premium în Cățelu. Servicii profesionale de detailing auto cu tehnologie de ultimă generație.',
  keywords: ['detailing auto', 'ceramic coating', 'PPF', 'protecție auto', 'Cățelu', 'detailing interior', 'polish auto'],
  authors: [{ name: 'Yap Detailing' }],
  creator: 'Yap Detailing',
  publisher: 'Yap Detailing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://yap-detailing.ro',
    siteName: 'Yap Detailing',
    title: 'Yap Detailing — Redefinim strălucirea mașinii tale',
    description: 'Protecție ceramică, PPF și detailing interior premium în Cățelu.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Yap Detailing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yap Detailing — Redefinim strălucirea mașinii tale',
    description: 'Protecție ceramică, PPF și detailing interior premium în Cățelu.',
    images: ['/og-image.jpg'],
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
  verification: {
    // Adaugă aici codurile de verificare pentru Google Search Console
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro-RO" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="canonical" href="https://yap-detailing.ro" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0B1A2B" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Yap Detailing",
              "image": "https://yap-detailing.ro/og-image.jpg",
              "@id": "https://yap-detailing.ro",
              "url": "https://yap-detailing.ro",
              "telephone": "0765432706",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Str. Libertății 62",
                "addressLocality": "Cățelu",
                "postalCode": "077105",
                "addressCountry": "RO"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.404866203491906,
                "longitude": 26.207526176561863
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "openingTime": "09:00",
                  "closingTime": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "openingTime": "09:00",
                  "closingTime": "14:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/yapdetailing",
                "https://www.instagram.com/yapdetailing"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        <TopBar />
        <Header />
        <PageTransition>
          {children}
        </PageTransition>
        <QuickBookingButton />
        <StickyCTA />
        <Footer />
      </body>
    </html>
  )
}

