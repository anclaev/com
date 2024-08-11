import * as Sentry from '@sentry/nextjs'
import app from './package.json'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
  beforeSend(event) {
    event.release = `v${app.version}`

    return event
  },
})
