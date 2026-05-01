'use client'

import { useEffect, useMemo, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { ArrowRight, Menu, Moon, Sun, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import { cn } from '@/lib/utils'

type NavSectionId = 'about' | 'projects' | 'stack' | 'experience' | 'contact'

export function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<NavSectionId | null>('about')

  const navLinks = useMemo(() => {
    return [
      { id: 'about' as const, label: t('about') },
      { id: 'projects' as const, label: t('projects') },
      { id: 'stack' as const, label: t('stack') },
      { id: 'experience' as const, label: t('experience') },
      { id: 'contact' as const, label: t('contact') },
    ]
  }, [t])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    function computeActiveFromScroll() {
      let current: NavSectionId | null = null

      for (const link of navLinks) {
        const section = document.getElementById(link.id)
        if (!section) continue

        const offset = section.offsetTop - 120
        if (window.scrollY >= offset) {
          current = link.id
        }
      }

      setActiveSection(current ?? 'about')
    }

    function handleScroll() {
      setScrolled(window.scrollY > 50)

      if (pathname === '/contact') {
        setActiveSection('contact')
        return
      }

      if (pathname !== '/') {
        setActiveSection(null)
        return
      }

      computeActiveFromScroll()
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname, navLinks])

  useEffect(() => {
    if (isMobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  function toggleLocale() {
    const next = locale === 'pl' ? 'en' : 'pl'
    router.replace(pathname, { locale: next })
  }

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  function navHref(sectionId: NavSectionId): string {
    if (sectionId === 'contact') return '/contact'
    return `/#${sectionId}`
  }

  function isNavLinkHighlighted(linkId: NavSectionId): boolean {
    if (pathname === '/') {
      return activeSection === linkId
    }
    if (pathname === '/contact') {
      return linkId === 'contact'
    }
    return false
  }

  const isDark = mounted ? theme === 'dark' : true
  const ariaHome = t('homeAria')

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 h-16 transition-all duration-300',
          scrolled
            ? 'border-b border-[rgba(34,211,238,0.08)] bg-[rgba(5,13,18,0.85)] backdrop-blur-md'
            : 'bg-transparent',
        )}
      >
        <div className="mx-auto grid h-16 w-full max-w-7xl grid-cols-[auto_1fr_auto] items-center px-6">
          <Link
            href="/"
            className="font-dm-mono rounded-lg border border-[rgba(34,211,238,0.3)] px-3 py-1 text-xl font-bold text-[#22D3EE] transition hover:bg-[rgba(34,211,238,0.08)]"
            aria-label={ariaHome}
          >
            KP
          </Link>

          <nav className="hidden items-center justify-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={navHref(link.id)}
                className={cn(
                  'text-sm transition-colors',
                  isNavLinkHighlighted(link.id)
                    ? 'text-[#22D3EE]'
                    : 'text-[#7EA8BD] hover:text-[#F0F9FF]',
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2">
            <div className="hidden items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 md:inline-flex">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-dm-mono text-[11px] text-emerald-300">{t('available')}</span>
            </div>

            <span
              className="inline-flex size-2 rounded-full bg-emerald-400 md:hidden"
              aria-label={t('available')}
              title={t('available')}
            />

            <button
              onClick={toggleLocale}
              className="hidden font-dm-mono text-xs text-[#3A5F73] transition-colors hover:text-[#22D3EE] md:inline-flex"
              aria-label={locale === 'pl' ? t('switchToEn') : t('switchToPl')}
            >
              PL / EN
            </button>

            <button
              onClick={toggleTheme}
              className="hidden h-8 w-8 items-center justify-center text-[#7EA8BD] transition-colors hover:text-[#22D3EE] md:inline-flex"
              aria-label={isDark ? t('themeLight') : t('themeDark')}
            >
              {mounted ? isDark ? <Sun size={16} /> : <Moon size={16} /> : <span className="h-4 w-4" />}
            </button>

            <Link
              href="/contact"
              className="hidden items-center gap-2 rounded-lg bg-[#22D3EE] px-4 py-2 text-sm font-semibold text-[#050D12] transition hover:bg-[#67E8F9] md:inline-flex"
            >
              {t('hire')}
              <ArrowRight size={14} />
            </Link>

            <button
              onClick={() => setIsMobileOpen((prev) => !prev)}
              className="inline-flex h-8 w-8 items-center justify-center text-[#7EA8BD] transition-colors hover:text-[#22D3EE] md:hidden"
              aria-label={isMobileOpen ? t('closeMenu') : t('openMenu')}
            >
              {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-x-0 top-16 z-40 border-b border-[rgba(34,211,238,0.08)] bg-[#081420] md:hidden"
          >
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={navHref(link.id)}
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    'text-sm transition-colors',
                    isNavLinkHighlighted(link.id)
                      ? 'text-[#22D3EE]'
                      : 'text-[#7EA8BD] hover:text-[#F0F9FF]',
                  )}
                >
                  {link.label}
                </Link>
              ))}

              <div className="flex items-center gap-4 border-t border-[rgba(34,211,238,0.08)] pt-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="font-dm-mono text-[11px] text-emerald-300">{t('available')}</span>
                </div>
                <button
                  onClick={toggleLocale}
                  className="font-dm-mono text-xs text-[#3A5F73] transition-colors hover:text-[#22D3EE]"
                  aria-label={locale === 'pl' ? t('switchToEn') : t('switchToPl')}
                >
                  PL / EN
                </button>
                <button
                  onClick={toggleTheme}
                  className="inline-flex h-8 w-8 items-center justify-center text-[#7EA8BD] transition-colors hover:text-[#22D3EE]"
                  aria-label={isDark ? t('themeLight') : t('themeDark')}
                >
                  {mounted ? isDark ? <Sun size={16} /> : <Moon size={16} /> : <span className="h-4 w-4" />}
                </button>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="ml-auto inline-flex items-center gap-2 rounded-lg bg-[#22D3EE] px-4 py-2 text-sm font-semibold text-[#050D12] transition hover:bg-[#67E8F9]"
                >
                  {t('hire')}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
