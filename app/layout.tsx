import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteTitle = 'UAB Ruedus | Agricultural Wholesale in Vilnius'
const siteDescription =
  'UAB "Ruedus" supplies fertilizers, agrochemical products, and agricultural goods from Vilnius, Lithuania.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ruedus.com'),
  title: {
    default: siteTitle,
    template: '%s | UAB Ruedus',
  },
  description: siteDescription,
  keywords: [
    'UAB Ruedus',
    'agricultural wholesale',
    'fertilizer supplier Lithuania',
    'agrochemical products',
    'urea wholesale',
    'agricultural goods Vilnius',
  ],
  authors: [{ name: 'UAB Ruedus' }],
  generator: 'v0.app',
  alternates: {
    canonical: 'https://www.ruedus.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: 'website',
    url: 'https://www.ruedus.com',
    siteName: 'UAB Ruedus',
    locale: 'en_US',
    images: [
      {
        url: '/urea-field.jpeg',
        width: 1200,
        height: 630,
        alt: 'UAB Ruedus agricultural wholesale fields',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/urea-field.jpeg'],
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4f1e8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
