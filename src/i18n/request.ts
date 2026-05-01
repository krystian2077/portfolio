import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'
import plMessages from '@/content/pl'
import enMessages from '@/content/en'

const messageMap = {
  pl: plMessages,
  en: enMessages,
} as const

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = ((await requestLocale) ?? routing.defaultLocale) as (typeof routing.locales)[number]

  return {
    locale,
    messages: messageMap[locale],
  }
})
