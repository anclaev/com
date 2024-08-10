import en from './app/common/locales/en.json'

type Messages = typeof en

declare global {
  interface IntlMessages extends Messages {}

  namespace NodeJs {
    interface ProcessEnv {
      ORIGIN: string
    }
  }
}

export {}
