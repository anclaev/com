import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  './app/common/locales/i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: true,
  output: 'standalone',
  compress: true,
  reactStrictMode: true,
}

export default withNextIntl(nextConfig)
