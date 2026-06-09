/** @type {import('next').NextConfig} */
const nextConfig = {
  // Note: static export ('output: export') is intentionally NOT used here because
  // the Stripe checkout flow relies on a Server Action, which requires a server runtime.
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
