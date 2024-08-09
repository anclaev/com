import { getMessages } from 'next-intl/server'
import { Roboto } from 'next/font/google'
import '../globals.css'

import type { Locale } from '@interfaces/locale'
import { NextIntlClientProvider } from 'next-intl'

const roboto = Roboto({ subsets: ['cyrillic'], weight: ['300', '400', '500'] })

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: Locale }
}>) {
  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={await getMessages()}>
        <body className={roboto.className}>{children}</body>
      </NextIntlClientProvider>
    </html>
  )
}
