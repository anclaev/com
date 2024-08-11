export type Locale = 'ru' | 'en'

export type ParamsWithLocale = {
  locale: Locale
}

export const LOCALES: Locale[] = ['ru', 'en']
export const DEFAULT_LOCALE: Locale = 'ru'
