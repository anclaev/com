import * as Sentry from '@sentry/nextjs'
import app from './package.json'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  integrations: [Sentry.replayIntegration()],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  ignoreErrors: [/^NEXT_NOT_FOUND$/],
  beforeSend(event) {
    event.release = `v${app.version}`

    return event
  },
})
