import { Roboto } from 'next/font/google'
import { Metadata } from 'next'

import '../globals.css'

import type { ParamsWithLocale } from '@interfaces/locale'

const roboto = Roboto({ subsets: ['cyrillic'], weight: ['300', '400', '500'] })

export function generateMetadata({
  params,
}: {
  params: ParamsWithLocale
}): Metadata {
  const ogImageUrl = new URL(
    `${process.env.ORIGIN ?? 'http://localhost'}/assets/og-${params.locale}.jpg`
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
      description: `Fullstack-${params.locale === 'ru' ? 'разработчик' : 'developer'}`,
      locale: params.locale,
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
  params,
}: Readonly<{
  children: React.ReactNode
  params: ParamsWithLocale
}>) {
  return (
    <html lang={params.locale}>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
