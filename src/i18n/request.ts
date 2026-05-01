import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = ((await requestLocale) ?? routing.defaultLocale) as (typeof routing.locales)[number]

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
