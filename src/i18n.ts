import {getRequestConfig} from 'next-intl/server';
 
const locales = ['en', 'nl', 'fr', 'it', 'es', 'pt', 'de', 'el'];
 
export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  console.log("NEXT-INTL CONFIG LOCALE IS:", locale);
  if (!locale || !locales.includes(locale as string)) {
    console.error("404 TRIGGERED OR FALLBACK USED. Locale:", locale);
    locale = 'en'; // Safe fallback to prevent complete destruction of next-intl on global 404s
  }
 
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
