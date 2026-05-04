'use client'

import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

// ─── Social icons (lucide-react v1.14 lacks Github/Linkedin) ─────────────────

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

// ─── Terminal ─────────────────────────────────────────────────────────────────

type TermLine = { text: string; color: string }

const TERMINAL_LINES: TermLine[] = [
  { text: '$ python manage.py startproject krystian_potaczek', color: '#22D3EE' },
  { text: '✓ Portfolio initialized successfully', color: '#4ADE80' },
  { text: '', color: '' },
  { text: '$ git commit -m "Build real Django projects"', color: '#22D3EE' },
  { text: '✓ StayMap Polska ready — live demo', color: '#4ADE80' },
  { text: '✓ PRO-KOM System ready — live demo', color: '#4ADE80' },
  { text: '', color: '' },
  { text: '$ docker compose up --build', color: '#22D3EE' },
  { text: '✓ PostgreSQL connected', color: '#7EA8BD' },
  { text: '✓ Redis running', color: '#7EA8BD' },
  { text: '✓ Celery worker started', color: '#7EA8BD' },
  { text: '', color: '' },
  { text: '$ echo "Ready to join your team 🚀"', color: '#22D3EE' },
  { text: 'Ready to join your team 🚀', color: '#F0F9FF' },
]

const CHAR_MS = 50
const PAUSE_MS = 120
const EMPTY_LINE_MS = 80

function TerminalWindow() {
  const [linesDone, setLinesDone] = useState(-1)
  const [charsDone, setCharsDone] = useState(0)
  const [finished, setFinished] = useState(false)

  const restart = useCallback(() => {
    setFinished(false)
    setCharsDone(0)
    setLinesDone(0)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setLinesDone(0), 300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (linesDone < 0 || finished) return

    if (linesDone >= TERMINAL_LINES.length) {
      setFinished(true)
      return
    }

    const line = TERMINAL_LINES[linesDone] ?? { text: '', color: '' }

    if (!line.text || charsDone >= line.text.length) {
      const delay = line.text ? PAUSE_MS : EMPTY_LINE_MS
      const timer = setTimeout(() => {
        setLinesDone((l) => l + 1)
        setCharsDone(0)
      }, delay)
      return () => clearTimeout(timer)
    }

    const timer = setTimeout(() => setCharsDone((c) => c + 1), CHAR_MS)
    return () => clearTimeout(timer)
  }, [linesDone, charsDone, finished])

  const activeLine =
    linesDone >= 0 && linesDone < TERMINAL_LINES.length
      ? (TERMINAL_LINES[linesDone] ?? null)
      : null

  return (
    <div
      role="region"
      aria-label="Terminal demo"
      className={`overflow-hidden rounded-xl border border-[rgba(34,211,238,0.15)] shadow-2xl ${finished ? 'cursor-pointer' : 'cursor-default'}`}
      style={{ backgroundColor: '#0A1628' }}
      onClick={() => { if (finished) restart() }}
      title={finished ? 'Click to restart' : undefined}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-1.5 border-b border-[rgba(34,211,238,0.1)] px-4 py-3"
        style={{ backgroundColor: '#081420' }}
      >
        <span className="inline-block size-3 rounded-full" style={{ backgroundColor: '#FF5F57' }} />
        <span className="inline-block size-3 rounded-full" style={{ backgroundColor: '#FFBD2E' }} />
        <span className="inline-block size-3 rounded-full" style={{ backgroundColor: '#28C840' }} />
        <span
          className="ml-auto text-xs"
          style={{ fontFamily: 'var(--font-dm-mono)', color: 'rgba(240,249,255,0.5)' }}
        >
          bash — krystian@portfolio
        </span>
      </div>

      {/* Terminal content */}
      <div
        className="min-h-96 p-6 text-sm leading-7"
        style={{ fontFamily: 'var(--font-dm-mono)' }}
      >
        {/* Completed lines */}
        {TERMINAL_LINES.slice(0, Math.max(0, linesDone)).map((line, i) => (
          <div
            key={i}
            className="min-h-[1.75rem]"
            style={{ color: line.color || 'transparent' }}
          >
            {line.text || ' '}
          </div>
        ))}

        {/* Current line being typed */}
        {activeLine !== null && !finished && (
          <div
            className="min-h-[1.75rem]"
            style={{ color: activeLine.color || 'transparent' }}
          >
            {activeLine.text.slice(0, charsDone)}
            {activeLine.text !== '' ? (
              <span
                className="ml-px inline-block h-[15px] w-[7px] animate-pulse align-text-bottom"
                style={{ backgroundColor: '#22D3EE' }}
              />
            ) : (
              ' '
            )}
          </div>
        )}

        {/* Final blinking cursor after all lines */}
        {finished && (
          <div className="min-h-[1.75rem]">
            <span
              className="inline-block h-[15px] w-[7px] animate-pulse align-text-bottom"
              style={{ backgroundColor: '#22D3EE' }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Static data ──────────────────────────────────────────────────────────────

const TECH_TAGS = ['Python', 'Django', 'REST API', 'PostgreSQL', 'Docker', 'Next.js / React']

// ─── Framer Motion ────────────────────────────────────────────────────────────

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const colVariants = {
  hidden: {},
  show: {
    transition: { delayChildren: 0.2, staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}

// ─── HeroSection ─────────────────────────────────────────────────────────────

export function HeroSection() {
  const t = useTranslations('hero')
  const locale = useLocale()

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-[70px]"
      style={{ backgroundColor: '#050D12' }}
    >
      {/* Background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(34,211,238,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(34,211,238,0.08), transparent)',
        }}
      />

      {/* Main grid */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── Left column: terminal ── */}
          <div className="order-1 shadow-[0_0_60px_rgba(34,211,238,0.06)]">
            <TerminalWindow />
          </div>

          {/* ── Right column: content ── */}
          <motion.div
            variants={colVariants}
            initial="hidden"
            animate="show"
            className="order-2 flex flex-col items-center gap-5 text-center lg:items-start lg:text-left"
          >
            {/* Available badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span
                  className="absolute inline-flex size-full animate-ping rounded-full opacity-75"
                  style={{ backgroundColor: '#4ADE80' }}
                />
                <span
                  className="relative inline-flex size-2 rounded-full"
                  style={{ backgroundColor: '#4ADE80' }}
                />
              </span>
              <span
                className="text-sm"
                style={{ fontFamily: 'var(--font-dm-mono)', color: '#4ADE80' }}
              >
                {t('badge')}
              </span>
            </motion.div>

            {/* Name above headline */}
            <motion.p
              variants={itemVariants}
              className="mb-2 text-sm tracking-wide"
              style={{ fontFamily: 'var(--font-dm-mono)', color: '#7EA8BD' }}
            >
              {locale === 'en' ? "Hi, I'm" : 'Cześć, jestem'}{' '}
              <span style={{ color: '#F0F9FF', fontWeight: 500 }}>Krystian Potaczek</span>
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold leading-tight sm:text-5xl xl:text-6xl"
              style={{ color: '#F0F9FF', fontFamily: 'var(--font-sora)' }}
            >
              Junior Python /<br />
              Django Developer
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-xl text-lg font-medium"
              style={{ color: '#F0F9FF' }}
            >
              {t('lead')}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-2 text-base"
              style={{ color: '#7EA8BD', fontFamily: 'var(--font-dm-mono)' }}
            >
              {t('subheadline')}
            </motion.p>

            {/* Tech tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 lg:justify-start">
              {TECH_TAGS.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.15 }}
                  className="cursor-default rounded border px-3 py-1 text-xs"
                  style={{
                    fontFamily: 'var(--font-dm-mono)',
                    backgroundColor: '#081420',
                    borderColor: 'rgba(34,211,238,0.25)',
                    color: '#A0C4D4',
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link
                href="#projects"
                className="rounded-lg px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90 active:opacity-75"
                style={{ backgroundColor: '#22D3EE', color: '#050D12' }}
              >
                {t('cta.primary')}
              </Link>
              <a
                href="/Krystian_Potaczek_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border bg-transparent px-6 py-3 text-sm transition-colors hover:bg-[rgba(34,211,238,0.08)] active:bg-[rgba(34,211,238,0.12)]"
                style={{ borderColor: 'rgba(34,211,238,0.4)', color: '#22D3EE' }}
              >
                {t('cta.secondary')}
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="mt-4 flex max-w-full flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-x-4 lg:justify-start"
            >
              <a
                href="https://github.com/krystian2077"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-0 items-center gap-1.5 text-xs text-[#3A5F73] transition-colors hover:text-[#22D3EE]"
                style={{ fontFamily: 'var(--font-dm-mono)' }}
              >
                <IconGithub className="h-3.5 w-3.5" />
                GitHub
              </a>
              <span style={{ color: '#1E3A4A' }}>·</span>
              <a
                href="https://www.linkedin.com/in/krystian-potaczek-952968257/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-0 items-center gap-1.5 text-xs text-[#3A5F73] transition-colors hover:text-[#22D3EE]"
                style={{ fontFamily: 'var(--font-dm-mono)' }}
              >
                <IconLinkedin className="h-3.5 w-3.5" />
                LinkedIn
              </a>
              <span style={{ color: '#1E3A4A' }}>·</span>
              <a
                href="mailto:krystianpotaczek.dev@gmail.com"
                className="flex min-w-0 items-center gap-1.5 text-xs text-[#3A5F73] transition-colors hover:text-[#22D3EE]"
                style={{ fontFamily: 'var(--font-dm-mono)' }}
              >
                <Mail className="h-3.5 w-3.5" />
                Email
              </a>
            </motion.div>

            {/* Trust stats */}
            <motion.p
              variants={itemVariants}
              className="mt-2 max-w-sm text-balance text-xs leading-6 sm:max-w-xl"
              style={{ fontFamily: 'var(--font-dm-mono)', color: '#5B8EA6' }}
            >
              {t('trust')}
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
