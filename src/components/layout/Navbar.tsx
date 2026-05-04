'use client'

import { useEffect, useMemo, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { ArrowRight, FileDown, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import { cn } from '@/lib/utils'

function IconGithub({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c.955.005 1.917.128 2.805.374 2.292-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.769.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function IconLinkedin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

type NavSectionId = 'about' | 'projects' | 'stack' | 'experience' | 'contact'

export function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
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

  function navHref(sectionId: NavSectionId): string {
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

  const ariaHome = t('homeAria')

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 h-[70px] transition-all duration-300',
          scrolled
            ? 'border-b border-[rgba(34,211,238,0.08)] bg-[rgba(5,13,18,0.85)] backdrop-blur-md'
            : 'bg-transparent',
        )}
      >
        <div className="mx-auto grid h-[70px] w-full max-w-7xl grid-cols-[auto_1fr_auto] items-center px-6">
          <Link
            href="/"
            className="font-dm-mono text-xl font-bold text-[#22D3EE] transition-[filter] hover:[filter:drop-shadow(0_0_8px_rgba(34,211,238,0.55))]"
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
            <a
              href="/Krystian_Potaczek_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('cvAria')}
              className="flex items-center gap-1.5 rounded-md border border-[rgba(34,211,238,0.25)] px-2.5 py-1 text-sm text-[#22D3EE] transition-colors hover:border-[rgba(34,211,238,0.5)] hover:text-[#67E8F9]"
            >
              <FileDown size={13} />
              {t('cv')}
            </a>
          </nav>

          <div className="flex items-center justify-end gap-4">
            {/* Social icons — visible on all breakpoints */}
            <a
              href="https://github.com/krystian2077"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#5B8EA6] transition-colors duration-200 hover:text-[#22D3EE]"
            >
              <IconGithub className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/krystian-potaczek-952968257/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#5B8EA6] transition-colors duration-200 hover:text-[#22D3EE]"
            >
              <IconLinkedin className="h-4 w-4" />
            </a>

            {/* Separator */}
            <span className="hidden h-4 w-px bg-[rgba(34,211,238,0.15)] md:block" />

            {/* PL · EN — desktop only */}
            <button
              onClick={toggleLocale}
              className="hidden items-center gap-1 font-dm-mono text-xs md:inline-flex"
              aria-label={locale === 'pl' ? t('switchToEn') : t('switchToPl')}
            >
              <span className={locale === 'pl' ? 'font-medium text-[#22D3EE]' : 'text-[#3A5F73] hover:text-[#7EA8BD]'}>PL</span>
              <span className="text-[#3A5F73]">·</span>
              <span className={locale === 'en' ? 'font-medium text-[#22D3EE]' : 'text-[#3A5F73] hover:text-[#7EA8BD]'}>EN</span>
            </button>

            {/* CTA — desktop only */}
            <Link
              href="/#contact"
              className="hidden items-center gap-2 rounded-lg bg-[#22D3EE] px-4 py-2 text-sm font-semibold text-[#050D12] transition hover:bg-[#67E8F9] md:inline-flex"
            >
              {t('hire')}
              <ArrowRight size={14} />
            </Link>

            {/* Mobile hamburger */}
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
              <a
                href="/Krystian_Potaczek_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('cvAria')}
                onClick={() => setIsMobileOpen(false)}
                className="flex w-fit items-center gap-1.5 rounded-md border border-[rgba(34,211,238,0.25)] px-2.5 py-1 text-sm text-[#22D3EE]"
              >
                <FileDown size={13} />
                {t('cv')}
              </a>

              <div className="flex items-center gap-4 border-t border-[rgba(34,211,238,0.08)] pt-4">
                <button
                  onClick={toggleLocale}
                  className="inline-flex items-center gap-1 font-dm-mono text-xs"
                  aria-label={locale === 'pl' ? t('switchToEn') : t('switchToPl')}
                >
                  <span className={locale === 'pl' ? 'font-medium text-[#22D3EE]' : 'text-[#3A5F73]'}>PL</span>
                  <span className="text-[#3A5F73]">·</span>
                  <span className={locale === 'en' ? 'font-medium text-[#22D3EE]' : 'text-[#3A5F73]'}>EN</span>
                </button>
                <Link
                  href="/#contact"
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
