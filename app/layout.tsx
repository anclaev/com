import { Roboto } from 'next/font/google'
import { Metadata } from 'next'

import './globals.css'

import type { Locale } from '@interfaces/locale'

const roboto = Roboto({ subsets: ['cyrillic'], weight: ['300', '400', '500'] })

export function generateMetadata(): Metadata {
  const ogImageUrl = new URL(
    `${process.env.ORIGIN ?? 'http://localhost'}/assets/og-en.jpg`
  )

  return {
    applicationName: 'anclaev',
    appleWebApp: {
      title: 'anclaev',
    },
    manifest: '/site.webmanifest',
    metadataBase: new URL(process.env.ORIGIN ?? 'http://localhost'),
    other: {
      'apple-mobile-web-app-title': 'anclaev',
      'application-name': 'anclaev',
      'msapplication-TileColor': '#ffffff',
      'theme-color': '#ffffff',
    },
    icons: [
      {
        type: 'image/png',
        sizes: '32x32',
        url: '/assets/fav/favicon-32x32.png',
        rel: 'icon',
      },
      {
        type: 'image/png',
        sizes: '16x16',
        url: '/assets/fav/favicon-16x16.png',
        rel: 'icon',
      },
      {
        sizes: '180x180',
        url: '/assets/fav/apple-touch-icon.png',
        rel: 'apple-touch-icon',
      },
      {
        color: '#4b4b4b',
        url: '/assets/fav/safari-pinned-tab.svg',
        rel: 'mask-icon',
      },
      {
        url: '/favicon.ico',
        rel: 'shortcut icon',
      },
    ],
    openGraph: {
      type: 'website',
      title: 'anclaev',
      description: 'Fullstack-developer',
      locale: 'en',
      images: [
        {
          type: 'image/jpeg',
          url: ogImageUrl,
          secureUrl: ogImageUrl,
          alt: 'anclaev',
          width: 968,
          height: 504,
        },
      ],
    },
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
