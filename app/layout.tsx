import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ruedus.com'),
  title: 'UAB Ruedus | Agricultural Wholesale in Vilnius',
  description:
    'UAB "Ruedus" supplies fertilizers, agrochemical products, and agricultural goods from Vilnius, Lithuania.',
  generator: 'v0.app',
  openGraph: {
    title: 'UAB Ruedus | Agricultural Wholesale in Vilnius',
    description:
      'UAB "Ruedus" supplies fertilizers, agrochemical products, and agricultural goods from Vilnius, Lithuania.',
    type: 'website',
    url: 'https://www.ruedus.com',
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
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
