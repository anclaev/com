import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: true,
  output: 'standalone',
  compress: true,
  reactStrictMode: true
}

export default withSentryConfig(nextConfig, {
  org: 'anclaev-ti',
  project: 'anclaev-com',
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: false,
  hideSourceMaps: true,
  widenClientFileUpload: true,
})
