import Link from 'next/link'
import './globals.css'
import { routing } from '@/i18n/routing'

export default function NotFound() {
  const locale = routing.defaultLocale

  return (
    <div className="min-h-[100svh] bg-[var(--bg-primary)] px-4 py-24 text-[var(--text-primary)]">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
        <p className="font-dm-mono text-xs uppercase tracking-[0.2em] text-[var(--accent-cyan)]">404</p>
        <h1 className="text-3xl font-semibold leading-tight md:text-4xl">Nie znaleziono tej strony</h1>
        <p className="text-base leading-relaxed text-[var(--text-secondary)]">
          Link moze byc nieaktualny albo adres zostal wpisany z literowka.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href={`/${locale}`}
            className="inline-flex h-10 items-center justify-center rounded-lg bg-[var(--accent-cyan)] px-4 text-sm font-semibold text-[var(--bg-primary)] hover:bg-[var(--accent-cyan-light)]"
          >
            Wróc na stronę główną
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex h-10 items-center justify-center rounded-lg border border-[var(--border)] px-4 text-sm font-medium text-[var(--text-primary)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-hover)]"
          >
            Kontakt
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
      </div>
    </div>
  )
}
