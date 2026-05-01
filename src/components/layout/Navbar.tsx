'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import { Badge } from '@/components/ui/Badge'
import { buttonVariants } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const NAV_LINKS = ['about', 'projects', 'contact'] as const

export function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  function toggleLocale() {
    const next = locale === 'pl' ? 'en' : 'pl'
    router.replace(pathname, { locale: next })
  }

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const isDark = mounted ? theme === 'dark' : true

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-[var(--border)] bg-[var(--bg-primary)]/90 backdrop-blur-md'
            : 'bg-transparent',
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Available for hire badge — hidden on mobile */}
          <div className="hidden w-40 md:flex">
            <Badge variant="available">{t('available')}</Badge>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="font-dm-mono text-xl font-medium tracking-tight text-[var(--accent-cyan)] transition-opacity hover:opacity-80"
            aria-label="Krystian Potaczek — strona główna"
          >
            KP
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((key) => (
              <Link
                key={key}
                href={`/#${key}`}
                className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                {t(key)}
              </Link>
            ))}

            {/* Locale toggle */}
            <button
              onClick={toggleLocale}
              className="font-dm-mono text-xs font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
              aria-label={`Przełącz język na ${locale === 'pl' ? 'angielski' : 'polski'}`}
            >
              {locale === 'pl' ? 'EN' : 'PL'}
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="flex size-8 items-center justify-center rounded-md text-[var(--text-muted)] transition-colors hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]"
              aria-label={isDark ? 'Włącz jasny motyw' : 'Włącz ciemny motyw'}
            >
              {mounted ? (
                isDark ? <Sun size={16} /> : <Moon size={16} />
              ) : (
                <span className="size-4" />
              )}
            </button>

            {/* CTA */}
            <Link
              href="/#contact"
              className={cn(buttonVariants({ variant: 'primary', size: 'sm' }))}
            >
              {t('hire')}
              <ArrowUpRight size={14} />
            </Link>
          </nav>

          {/* Mobile: locale + theme + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLocale}
              className="font-dm-mono text-xs font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
            >
              {locale === 'pl' ? 'EN' : 'PL'}
            </button>
            <button
              onClick={toggleTheme}
              className="flex size-8 items-center justify-center rounded-md text-[var(--text-muted)] transition-colors hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]"
              aria-label={isDark ? 'Włącz jasny motyw' : 'Włącz ciemny motyw'}
            >
              {mounted ? (
                isDark ? <Sun size={16} /> : <Moon size={16} />
              ) : (
                <span className="size-4" />
              )}
            </button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="flex size-8 items-center justify-center rounded-md text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]"
              aria-label={mobileOpen ? 'Zamknij menu' : 'Otwórz menu'}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-x-0 top-16 z-40 border-b border-[var(--border)] bg-[var(--bg-primary)]/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-6">
              <Badge variant="available" className="mb-4 self-start">
                {t('available')}
              </Badge>
              {NAV_LINKS.map((key) => (
                <Link
                  key={key}
                  href={`/#${key}`}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]"
                >
                  {t(key)}
                </Link>
              ))}
              <div className="mt-4 border-t border-[var(--border)] pt-4">
                <Link
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className={cn(buttonVariants({ variant: 'primary', size: 'md' }), 'w-full')}
                >
                  {t('hire')}
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
