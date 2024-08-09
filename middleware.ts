import createMiddleware from 'next-intl/middleware'

import { DEFAULT_LOCALE, LOCALES } from '@locales/index'

export default createMiddleware({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
})

export const config = {
  matcher: ['/', '/(ru|en)/:path*'],
}
