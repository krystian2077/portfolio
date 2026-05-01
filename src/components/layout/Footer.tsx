'use client'

import { useEffect, useState } from 'react'
import { ExternalLink, Moon, Sun } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import { Section } from '@/components/ui/Section'
import { cn } from '@/lib/utils'

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/krystian2077' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/krystianpotaczek' },
] as const

const PORTFOLIO_REPO = 'https://github.com/krystian2077/portfolio'

export function Footer() {
  const tFoot = useTranslations('footer')
  const tNav = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const year = new Date().getFullYear()

  useEffect(() => {
    setMounted(true)
  }, [])

  function toggleLocale() {
    router.replace(pathname, { locale: locale === 'pl' ? 'en' : 'pl' })
  }

  const isDark = mounted ? theme === 'dark' : true

  return (
    <footer className="border-t border-[var(--border)] py-10">
      <Section as="div" className="flex flex-col gap-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between sm:gap-8">
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <Link
              href="/"
              className="font-dm-mono text-base font-medium text-[var(--accent-cyan)] transition-opacity hover:opacity-80"
            >
              KP
            </Link>
            <p className="max-w-xs text-center text-xs text-[var(--text-muted)] sm:text-left">{tFoot('tagline')}</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {SOCIAL_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                {label}
                <ExternalLink size={11} />
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-end">
            <span className="sr-only">{tFoot('toggleLang')}</span>
            <button
              type="button"
              onClick={toggleLocale}
              className="inline-flex rounded-md border border-[var(--border)] bg-[var(--bg-card)] px-3 py-1.5 font-dm-mono text-[11px] text-[var(--text-secondary)] transition-colors hover:border-[var(--accent-cyan)]/40 hover:text-[var(--accent-cyan)]"
              aria-label={locale === 'pl' ? tNav('switchToEn') : tNav('switchToPl')}
            >
              PL / EN
            </button>
            <button
              type="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-muted)] transition-colors hover:border-[var(--accent-cyan)]/40 hover:text-[var(--accent-cyan)]',
              )}
              aria-label={isDark ? tNav('themeLight') : tNav('themeDark')}
            >
              {mounted ? isDark ? <Sun size={16} /> : <Moon size={16} /> : <span className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 border-t border-[var(--border)] pt-6 text-center text-xs text-[var(--text-muted)] sm:flex-row sm:justify-between sm:text-left">
          <p>{tFoot('builtWith')}</p>
          <a
            href={PORTFOLIO_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[var(--text-muted)] underline-offset-4 transition-colors hover:text-[var(--accent-cyan)] hover:underline"
          >
            {tFoot('repoCta')}
            <ExternalLink size={11} />
          </a>
        </div>

        <p className="text-center text-xs text-[var(--text-muted)] sm:text-left">
          © {year} {tFoot('copyright')}
        </p>
      </Section>
    </footer>
  )
}
