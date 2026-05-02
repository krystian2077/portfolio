'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useLocale } from 'next-intl'
import { useTheme } from 'next-themes'
import { Link, usePathname, useRouter } from '@/i18n/navigation'

const NAV_LINKS = [
  { label: 'O mnie', href: '#about' },
  { label: 'Projekty', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Doświadczenie', href: '#experience' },
  { label: 'Kontakt', href: '#contact' },
] as const

const NAV_LINKS_EN = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const

const PROJECT_LINKS = [
  { label: 'StayMap Polska', href: '/projects/staymap-polska', internal: true },
  { label: 'PRO-KOM System', href: '/projects/prokom-system', internal: true },
  { label: 'Portfolio', href: 'https://github.com/krystian2077/portfolio', internal: false },
] as const

const PROJECT_LINKS_EN = [
  { label: 'StayMap Polska', href: '/projects/staymap-polska', internal: true },
  { label: 'PRO-KOM System', href: '/projects/prokom-system', internal: true },
  { label: 'Portfolio', href: 'https://github.com/krystian2077/portfolio', internal: false },
] as const

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/krystian2077', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/krystian-potaczek-952968257/', external: true },
  { label: 'Email', href: '#', external: false },
] as const

const linkClass =
  'text-sm text-[#7EA8BD] transition-colors hover:text-[#22D3EE]'

export function Footer() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const year = new Date().getFullYear()
  const isEn = locale === 'en'
  const navLinks = isEn ? NAV_LINKS_EN : NAV_LINKS
  const projectLinks = isEn ? PROJECT_LINKS_EN : PROJECT_LINKS

  useEffect(() => {
    setMounted(true)
  }, [])

  function toggleLocale() {
    router.replace(pathname, { locale: locale === 'pl' ? 'en' : 'pl' })
  }

  const isDark = mounted ? theme === 'dark' : true

  return (
    <footer className="border-t border-[rgba(34,211,238,0.08)] bg-[#050D12] py-12">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Top section */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">

          {/* Left: Logo + tagline + description */}
          <div className="max-w-xs">
            <Link
              href="/"
              className="font-dm-mono text-xl font-bold text-[#22D3EE] transition-opacity hover:opacity-80"
            >
              KP
            </Link>
            <p className="mt-1 text-sm text-[#7EA8BD]">Junior Python / Django Developer</p>
            <p className="mt-2 text-xs leading-relaxed text-[#3A5F73]">
              {isEn
                ? 'I build web applications around real business problems.'
                : 'Buduję aplikacje webowe oparte na realnych problemach biznesowych.'}
            </p>
          </div>

          {/* Right: 3-column links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">

            {/* Column 1: Navigation */}
            <div>
              <h4 className="mb-4 font-dm-mono text-xs uppercase tracking-widest text-[#22D3EE]">
                {isEn ? 'Navigation' : 'Nawigacja'}
              </h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={linkClass}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Projects */}
            <div>
              <h4 className="mb-4 font-dm-mono text-xs uppercase tracking-widest text-[#22D3EE]">
                {isEn ? 'Projects' : 'Projekty'}
              </h4>
              <ul className="space-y-2">
                {projectLinks.map((link) =>
                  link.internal ? (
                    <li key={link.label}>
                      <Link
                        href={link.href as '/'}
                        className={linkClass}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                      >
                        {link.label}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Column 3: Social */}
            <div>
              <h4 className="mb-4 font-dm-mono text-xs uppercase tracking-widest text-[#22D3EE]">
                Social
              </h4>
              <ul className="space-y-2">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className={linkClass}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[rgba(34,211,238,0.05)] pt-8 sm:flex-row">
          <p className="font-dm-mono text-xs text-[#3A5F73]">© {year} Krystian Potaczek</p>

          <p className="text-center text-xs text-[#3A5F73]">
            Built with Next.js 15 · TypeScript · Tailwind CSS v4 · Deployed on Vercel
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLocale}
              className="rounded-md border border-[rgba(34,211,238,0.15)] bg-[#081420] px-3 py-1.5 font-dm-mono text-xs text-[#7EA8BD] transition-colors hover:border-[rgba(34,211,238,0.4)] hover:text-[#22D3EE]"
            >
              PL / EN
            </button>
            <button
              type="button"
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-[rgba(34,211,238,0.15)] bg-[#081420] text-[#7EA8BD] transition-colors hover:border-[rgba(34,211,238,0.4)] hover:text-[#22D3EE]"
              aria-label={
                isEn
                  ? isDark
                    ? 'Switch to light theme'
                    : 'Switch to dark theme'
                  : isDark
                    ? 'Przełącz na jasny motyw'
                    : 'Przełącz na ciemny motyw'
              }
            >
              {mounted ? (
                isDark ? <Sun size={14} /> : <Moon size={14} />
              ) : (
                <span className="h-3.5 w-3.5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
