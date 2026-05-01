'use client'

import { useEffect, useMemo, useState } from 'react'
import { useLocale } from 'next-intl'
import { useTheme } from 'next-themes'
import { ArrowRight, Menu, Moon, Sun, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import { cn } from '@/lib/utils'

type NavLink = {
  id: 'about' | 'projects' | 'stack' | 'experience' | 'contact'
  label: string
}

export function Navbar() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<NavLink['id']>('about')

  const navLinks = useMemo<NavLink[]>(() => {
    if (locale === 'en') {
      return [
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'stack', label: 'Stack' },
        { id: 'experience', label: 'Experience' },
        { id: 'contact', label: 'Contact' },
      ]
    }

    return [
      { id: 'about', label: 'O mnie' },
      { id: 'projects', label: 'Projekty' },
      { id: 'stack', label: 'Stack' },
      { id: 'experience', label: 'Doświadczenie' },
      { id: 'contact', label: 'Kontakt' },
    ]
  }, [locale])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      let current: NavLink['id'] = 'about'

      for (const link of navLinks) {
        const section = document.getElementById(link.id)
        if (!section) continue

        const offset = section.offsetTop - 120
        if (window.scrollY >= offset) {
          current = link.id
        }
      }

      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navLinks])

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

  const isDark = mounted ? theme === 'dark' : true

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
            aria-label="Krystian Potaczek — strona główna"
          >
            KP
          </Link>

          <nav className="hidden items-center justify-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={`/#${link.id}`}
                className={cn(
                  'text-sm transition-colors',
                  activeSection === link.id
                    ? 'text-[#22D3EE]'
                    : 'text-[#7EA8BD] hover:text-[#F0F9FF]',
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2">
            <button
              onClick={toggleLocale}
              className="hidden font-dm-mono text-xs text-[#3A5F73] transition-colors hover:text-[#22D3EE] md:inline-flex"
              aria-label={locale === 'pl' ? 'Przelacz jezyk na angielski' : 'Switch language to Polish'}
            >
              PL / EN
            </button>

            <button
              onClick={toggleTheme}
              className="hidden h-8 w-8 items-center justify-center text-[#7EA8BD] transition-colors hover:text-[#22D3EE] md:inline-flex"
              aria-label={isDark ? 'Wlacz jasny motyw' : 'Wlacz ciemny motyw'}
            >
              {mounted ? isDark ? <Sun size={16} /> : <Moon size={16} /> : <span className="h-4 w-4" />}
            </button>

            <Link
              href="/#contact"
              className="hidden items-center gap-2 rounded-lg bg-[#22D3EE] px-4 py-2 text-sm font-semibold text-[#050D12] transition hover:bg-[#67E8F9] md:inline-flex"
            >
              {locale === 'en' ? 'Contact me' : 'Napisz do mnie'}
              <ArrowRight size={14} />
            </Link>

            <button
              onClick={() => setIsMobileOpen((prev) => !prev)}
              className="inline-flex h-8 w-8 items-center justify-center text-[#7EA8BD] transition-colors hover:text-[#22D3EE] md:hidden"
              aria-label={isMobileOpen ? 'Zamknij menu' : 'Otworz menu'}
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
                  href={`/#${link.id}`}
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    'text-sm transition-colors',
                    activeSection === link.id
                      ? 'text-[#22D3EE]'
                      : 'text-[#7EA8BD] hover:text-[#F0F9FF]',
                  )}
                >
                  {link.label}
                </Link>
              ))}

              <div className="flex items-center gap-4 border-t border-[rgba(34,211,238,0.08)] pt-4">
                <button
                  onClick={toggleLocale}
                  className="font-dm-mono text-xs text-[#3A5F73] transition-colors hover:text-[#22D3EE]"
                >
                  PL / EN
                </button>
                <button
                  onClick={toggleTheme}
                  className="inline-flex h-8 w-8 items-center justify-center text-[#7EA8BD] transition-colors hover:text-[#22D3EE]"
                  aria-label={isDark ? 'Wlacz jasny motyw' : 'Wlacz ciemny motyw'}
                >
                  {mounted ? isDark ? <Sun size={16} /> : <Moon size={16} /> : <span className="h-4 w-4" />}
                </button>
                <Link
                  href="/#contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="ml-auto inline-flex items-center gap-2 rounded-lg bg-[#22D3EE] px-4 py-2 text-sm font-semibold text-[#050D12] transition hover:bg-[#67E8F9]"
                >
                  {locale === 'en' ? 'Contact me' : 'Napisz do mnie'}
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
