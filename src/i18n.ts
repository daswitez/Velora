import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
const locales = ['en', 'nl', 'fr', 'it', 'es', 'pt', 'de', 'el'];
 
export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  console.log("NEXT-INTL CONFIG LOCALE IS:", locale);
  if (!locale || !locales.includes(locale as any)) {
    console.error("404 TRIGGERED! Invalid or missing locale:", locale);
    notFound();
  }
 
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
