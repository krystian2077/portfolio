'use client'

import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

// ─── Terminal ─────────────────────────────────────────────────────────────────

type TermLine = { text: string; color: string }

const TERMINAL_LINES: TermLine[] = [
  { text: '$ python manage.py startproject krystian_potaczek', color: '#22D3EE' },
  { text: '✓ Project initialized successfully', color: '#4ADE80' },
  { text: '', color: '' },
  { text: '$ git commit -m "Add Django REST API"', color: '#22D3EE' },
  { text: '✓ [main] Backend API ready — 47 endpoints', color: '#4ADE80' },
  { text: '', color: '' },
  { text: '$ docker-compose up --build', color: '#22D3EE' },
  { text: '✓ PostgreSQL connected', color: '#7EA8BD' },
  { text: '✓ Redis running', color: '#7EA8BD' },
  { text: '✓ Celery worker started', color: '#7EA8BD' },
  { text: '', color: '' },
  { text: '$ echo "Ready to ship 🚀"', color: '#22D3EE' },
  { text: 'Ready to ship 🚀', color: '#F0F9FF' },
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
        className="min-h-80 p-5 text-xs leading-7 sm:text-sm"
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

const TECH_TAGS = ['Python', 'Django', 'DRF', 'PostgreSQL', 'Docker', 'React/Next.js']

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

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
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
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── Left column: terminal ── */}
          <div className="order-1">
            <TerminalWindow />
          </div>

          {/* ── Right column: content ── */}
          <motion.div
            variants={colVariants}
            initial="hidden"
            animate="show"
            className="order-2 flex flex-col gap-5"
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
                style={{ fontFamily: 'var(--font-dm-mono)', color: '#7EA8BD' }}
              >
                {t('badge')}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold leading-tight xl:text-5xl"
              style={{ color: '#F0F9FF', fontFamily: 'var(--font-sora)' }}
            >
              {t('headline')}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg"
              style={{ color: '#7EA8BD' }}
            >
              {t('subheadline')}
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base"
              style={{ color: '#7EA8BD', opacity: 0.8 }}
            >
              {t('description')}
            </motion.p>

            {/* Tech tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {TECH_TAGS.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.15 }}
                  className="cursor-default rounded border px-3 py-1 text-xs"
                  style={{
                    fontFamily: 'var(--font-dm-mono)',
                    backgroundColor: '#081420',
                    borderColor: 'rgba(34,211,238,0.2)',
                    color: '#7EA8BD',
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <Link
                href="#projects"
                className="rounded-lg px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90 active:opacity-75"
                style={{ backgroundColor: '#22D3EE', color: '#050D12' }}
              >
                {t('cta.primary')}
              </Link>
              <Link
                href="#cv"
                className="rounded-lg border px-6 py-3 text-sm transition-colors hover:bg-[rgba(34,211,238,0.05)] active:bg-[rgba(34,211,238,0.08)]"
                style={{ borderColor: 'rgba(34,211,238,0.3)', color: '#22D3EE' }}
              >
                {t('cta.secondary')}
              </Link>
            </motion.div>

            {/* Trust stats */}
            <motion.p
              variants={itemVariants}
              className="mt-2 text-xs"
              style={{ fontFamily: 'var(--font-dm-mono)', color: '#3A5F73' }}
            >
              {t('trust')}
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
