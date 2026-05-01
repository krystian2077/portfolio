import type { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'
import { siteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ['', '/contact', '/projects/staymap-polska', '/projects/prokom-system']

  const entries: MetadataRoute.Sitemap = routing.locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${siteUrl}/${locale}${path}`,
      changeFrequency: 'weekly',
      priority: path === '' ? 1 : path === '/contact' ? 0.85 : 0.7,
      lastModified: new Date(),
    })),
  )

  return entries
}
