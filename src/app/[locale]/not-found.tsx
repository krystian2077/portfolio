import Link from 'next/link'
import { getLocale, getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'

export default async function LocaleNotFound() {
  const locale = await getLocale()
  const t = await getTranslations('notFound')

  return (
    <div className="min-h-[100svh] bg-[var(--bg-primary)] px-4 py-24 text-[var(--text-primary)]">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
        <p className="font-dm-mono text-xs uppercase tracking-[0.2em] text-[var(--accent-cyan)]">404</p>
        <h1 className="text-3xl font-semibold leading-tight md:text-4xl">{t('title')}</h1>
        <p className="text-base leading-relaxed text-[var(--text-secondary)]">{t('subtitle')}</p>

        <div className="flex flex-wrap gap-3">
          <Link
            href={`/${locale}`}
            className="inline-flex h-10 items-center justify-center rounded-lg bg-[var(--accent-cyan)] px-4 text-sm font-semibold text-[var(--bg-primary)] hover:bg-[var(--accent-cyan-light)]"
          >
            {t('home')}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex h-10 items-center justify-center rounded-lg border border-[var(--border)] px-4 text-sm font-medium text-[var(--text-primary)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-hover)]"
          >
            {t('contact')}
          </Link>
          <Link
            href="https://github.com/krystian2077"
            className="inline-flex h-10 items-center justify-center rounded-lg border border-[var(--border)] px-4 text-sm font-medium text-[var(--text-primary)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-hover)]"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </Link>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-4">
          <p className="text-xs font-medium text-[var(--text-secondary)]">{t('otherLocales')}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {routing.locales.map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                className={`font-dm-mono rounded-md border px-2.5 py-1 text-[11px] ${
                  l === locale
                    ? 'border-[rgba(34,211,238,0.35)] bg-[rgba(34,211,238,0.08)] text-[var(--accent-cyan)]'
                    : 'border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--border-hover)] hover:text-[var(--text-secondary)]'
                }`}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
