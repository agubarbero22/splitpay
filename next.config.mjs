import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/**
 * Undefined entries are not supported. Push optional patterns to this array only if defined.
 * @type {import('next/dist/shared/lib/image-config').RemotePattern}
 */
const remotePatterns = []

// S3 Storage
if (process.env.S3_UPLOAD_ENDPOINT) {
  // custom endpoint for providers other than AWS
  const url = new URL(process.env.S3_UPLOAD_ENDPOINT);
  remotePatterns.push({
    hostname: url.hostname,
  })
} else if (process.env.S3_UPLOAD_BUCKET && process.env.S3_UPLOAD_REGION) {
  // default provider
  remotePatterns.push({
    hostname: `${process.env.S3_UPLOAD_BUCKET}.s3.${process.env.S3_UPLOAD_REGION}.amazonaws.com`,
  })
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns
  },
  headers: async () => [
    {
      source: "/(.*)", // Aplica el header a todas las rutas
      headers: [
        {
          // Explicitly allow the required Google domains for scripts and connections
          key: "Content-Security-Policy",
          value: `
              default-src 'self';
              script-src 'self' https://ep2.adtrafficquality.google https://pagead2.googlesyndication.com;
              connect-src 'self' https://ep2.adtrafficquality.google https://googleads.g.doubleclick.net;
              img-src 'self' https://tpc.googlesyndication.com data:;
              frame-src 'self' https://googleads.g.doubleclick.net;
              style-src 'self' 'unsafe-inline';
            `.replace(/\s{2,}/g, " ").trim(),
        },
      ],
    },

  ],
  // Required to run in a codespace (see https://github.com/vercel/next.js/issues/58019)
  experimental: {
    serverActions: {
        allowedOrigins: ['localhost:3000'],
    },
},
};


export default withNextIntl(nextConfig)
