/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'v5.airtableusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dl.airtable.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
  env: {
    // Make environment variables available to the client
    // This exposes GATSBY_AIRTABLE_API to the browser for compatibility
    GATSBY_AIRTABLE_API: process.env.GATSBY_AIRTABLE_API || process.env.NEXT_PUBLIC_AIRTABLE_API,
  },
}

module.exports = nextConfig