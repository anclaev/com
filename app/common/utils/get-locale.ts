import { match } from '@formatjs/intl-localematcher'
import { NextRequest } from 'next/server'
import Negotiator from 'negotiator'

import { DEFAULT_LOCALE, LOCALES } from '@interfaces/locale'

export const getLocale = (req: NextRequest): string => {
  const acceptedLanguage = req.headers.get('accept-language') ?? undefined
  let headers = { 'accept-language': acceptedLanguage }
  let languages = new Negotiator({ headers }).languages()

  return match(languages, LOCALES, DEFAULT_LOCALE) // -> 'en-US'
}
