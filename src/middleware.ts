import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'nl', 'fr', 'it', 'es', 'pt', 'de', 'el'],
 
  // Used when no locale matches
  defaultLocale: 'en',
  
  // Disable cookie memory so the main root page ALWAYS resolves to the browser's language
  // instead of becoming 'stuck' in a specific embassy's locale upon return.
  localeCookie: false,
  localeDetection: true
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(nl|fr|it|es|pt|de|el|en)/:path*']
};
