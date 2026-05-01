import { useTranslations } from 'next-intl'
import { ExternalLink } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { Section } from '@/components/ui/Section'

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/krystian2077' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/krystianpotaczek' },
] as const

export function Footer() {
  const t = useTranslations('footer')
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border)] py-10">
      <Section as="div" className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        {/* Logo + tagline */}
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <Link
            href="/"
            className="font-dm-mono text-base font-medium text-[var(--accent-cyan)] transition-opacity hover:opacity-80"
          >
            KP
          </Link>
          <p className="text-xs text-[var(--text-muted)]">{t('tagline')}</p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-3">
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

        {/* Copyright */}
        <p className="text-xs text-[var(--text-muted)]">
          © {year} {t('copyright')}
        </p>
      </Section>
    </footer>
  )
}
