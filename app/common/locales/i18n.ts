import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

import { Locale } from '@interfaces/locale'

import { LOCALES } from '@locales/index'

export default getRequestConfig(async ({ locale }) => {
  if (!LOCALES.includes(locale as Locale)) notFound()

  return {
    messages: (await import(`./${locale}.json`)).default,
  }
})
