import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

import { LOCALES } from '@locales/index'

export default getRequestConfig(async ({ locale }) => {
  if (!LOCALES.includes(locale as string)) notFound()

  return {
    messages: (await import(`./${locale}.json`)).default,
  }
})
