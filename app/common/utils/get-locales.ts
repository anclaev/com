import 'server-only'

import { Locale } from '@interfaces/locale'

const locales = {
  ru: () => import('../../../locales/ru.json').then((m) => m.default),
  en: () => import('../../../locales/en.json').then((m) => m.default),
}

export const getLocales = async (locale: Locale) => locales[locale]()
