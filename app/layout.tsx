import { Roboto } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const roboto = Roboto({ subsets: ['cyrillic'], weight: ['300', '400', '500'] })

export const metadata: Metadata = {
  title: 'a n c l a e v',
  description: 'Многогранный веб-разработчик',
}

export default function RootLayout({
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
