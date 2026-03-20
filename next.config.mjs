import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  './src/i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
    // any existing next config goes here
};

export default withNextIntl(nextConfig);
