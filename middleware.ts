import { NextRequest, NextResponse } from 'next/server'

import { getLocale } from '@utils/get-locale'

import { LOCALES } from '@interfaces/locale'

export function middleware(req: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = req.nextUrl.pathname
  const pathnameIsMissingLocale = LOCALES.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(req)

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, req.url))
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    '/((?!api|assets|.*\\..*|_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}
