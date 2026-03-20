import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  './src/i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow hot module replacement testing from mobile devices on local network
  allowedDevOrigins: ['192.168.1.22', "localhost:3000"],
};

export default withNextIntl(nextConfig);
