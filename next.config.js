/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    // List of locales supported by your application
    locales: ['en', 'es'],
    // Default locale when visiting a non-locale prefixed path
    defaultLocale: 'en',
    // Whether to automatically handle locale detection
    localeDetection: true,
  },
  // ... other Next.js config
}

module.exports = nextConfig
