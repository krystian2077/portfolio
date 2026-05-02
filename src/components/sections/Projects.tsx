'use client'

import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

const STAYMAP_STACK = [
  'Django 5', 'DRF', 'PostGIS', 'Redis', 'Celery',
  'Channels', 'Next.js 14', 'WebSocket', 'OpenAI',
]

const PROKOM_STACK = [
  'Django 5.1', 'DRF', 'PostgreSQL', 'Celery',
  'Redis', 'Next.js 14', 'Docker', 'Nginx',
]

const PORTFOLIO_STACK = [
  'Next.js 15', 'TypeScript', 'Tailwind v4', 'Framer Motion', 'Vercel',
]

function TechTag({ label }: { label: string }) {
  return (
    <span
      className="rounded-md border border-[rgba(34,211,238,0.15)] bg-[#0C2030] px-2 py-1 text-xs text-[#7EA8BD]"
      style={{ fontFamily: 'var(--font-dm-mono)' }}
    >
      {label}
    </span>
  )
}

function StatPill({ label }: { label: string }) {
  return (
    <span
      className="text-xs text-[#22D3EE]"
      style={{ fontFamily: 'var(--font-dm-mono)' }}
    >
      {label}
    </span>
  )
}

function ImagePlaceholder() {
  return (
    <div className="flex h-64 w-full items-center justify-center rounded-xl bg-[#0C2030]">
      <span
        className="text-xs text-[#3A5F73]"
        style={{ fontFamily: 'var(--font-dm-mono)' }}
      >
        Screenshot projektu
      </span>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-20" style={{ backgroundColor: '#050D12' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="mb-12 space-y-3"
        >
          <p
            className="text-xs uppercase tracking-widest text-[#22D3EE]"
            style={{ fontFamily: 'var(--font-dm-mono)' }}
          >
            PROJEKTY
          </p>
          <h2
            className="text-3xl font-bold leading-tight text-[#F0F9FF] md:text-4xl"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Realne aplikacje. Działające demo.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-[#7EA8BD]">
            Nie ćwiczenia techniczne — systemy zbudowane żeby rozwiązywać prawdziwe problemy.
          </p>
        </motion.div>

        <div className="space-y-8">

          {/* ── KARTA 1: StayMap Polska ── */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            whileHover={{
              borderColor: 'rgba(34,211,238,0.3)',
              boxShadow: '0 0 30px rgba(34,211,238,0.05)',
            }}
            className="overflow-hidden rounded-2xl border border-[rgba(34,211,238,0.12)] bg-[#081420] transition-shadow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr]">

              {/* Left: description */}
              <div className="p-8 lg:p-10">
                <span
                  className="mb-4 inline-block rounded-full bg-[rgba(34,211,238,0.1)] px-3 py-1 text-xs text-[#22D3EE]"
                  style={{ fontFamily: 'var(--font-dm-mono)' }}
                >
                  🚀 Flagship Project
                </span>

                <h3
                  className="mb-2 text-2xl font-bold text-[#F0F9FF]"
                  style={{ fontFamily: 'var(--font-sora)' }}
                >
                  StayMap Polska
                </h3>

                <p className="mb-4 text-sm text-[#7EA8BD]">
                  Produkcyjna platforma marketplace noclegów w Polsce z podejściem map-first.
                </p>

                <p className="text-sm leading-relaxed text-[#7EA8BD]">
                  AI search po polsku, dynamic pricing engine, real-time chat przez WebSocket,
                  pełny panel hosta i moderacja treści. Zbudowana na Django 5 + DRF z PostGIS
                  do geowyszukiwania i Celery do zadań asynchronicznych.
                </p>

                <div className="my-4 flex flex-wrap gap-6">
                  {['12 modułów', '44 widoki', '25 testów', '9 trybów podróży'].map((s) => (
                    <StatPill key={s} label={s} />
                  ))}
                </div>

                <div className="mb-6 flex flex-wrap gap-2">
                  {STAYMAP_STACK.map((tag) => (
                    <TechTag key={tag} label={tag} />
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://staymap-polska.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-[#22D3EE] px-5 py-2.5 text-sm font-semibold text-[#050D12] transition-opacity hover:opacity-90 active:opacity-75"
                  >
                    🚀 Live Demo
                  </a>
                  <a
                    href="https://github.com/krystian2077/staymap-polska"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-[rgba(34,211,238,0.4)] px-5 py-2.5 text-sm text-[#22D3EE] transition-colors hover:bg-[rgba(34,211,238,0.08)] active:bg-[rgba(34,211,238,0.12)]"
                  >
                    📂 GitHub
                  </a>
                  <Link
                    href="/projects/staymap-polska"
                    className="px-5 py-2.5 text-sm text-[#22D3EE] transition-opacity hover:opacity-70"
                  >
                    📋 Case Study →
                  </Link>
                </div>
              </div>

              {/* Right: image placeholder */}
              <div className="flex items-center justify-center p-6 lg:p-8">
                <ImagePlaceholder />
              </div>

            </div>
          </motion.div>

          {/* ── KARTA 2: PRO-KOM Serwis System (reversed) ── */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            whileHover={{
              borderColor: 'rgba(34,211,238,0.3)',
              boxShadow: '0 0 30px rgba(34,211,238,0.05)',
            }}
            className="overflow-hidden rounded-2xl border border-[rgba(34,211,238,0.12)] bg-[#081420] transition-shadow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr]">

              {/* Left on desktop: image placeholder (order-2 on mobile) */}
              <div className="order-2 flex items-center justify-center p-6 lg:order-1 lg:p-8">
                <ImagePlaceholder />
              </div>

              {/* Right on desktop: description (order-1 on mobile) */}
              <div className="order-1 p-8 lg:order-2 lg:p-10">
                <span
                  className="mb-4 inline-block rounded-full bg-[rgba(34,211,238,0.08)] px-3 py-1 text-xs text-[#22D3EE]"
                  style={{ fontFamily: 'var(--font-dm-mono)' }}
                >
                  💼 Business Solution
                </span>

                <h3
                  className="mb-2 text-2xl font-bold text-[#F0F9FF]"
                  style={{ fontFamily: 'var(--font-sora)' }}
                >
                  PRO-KOM Serwis System
                </h3>

                <p className="mb-4 text-sm text-[#7EA8BD]">
                  System zarządzania naprawami elektroniki dla małych i średnich serwisów.
                </p>

                <p className="text-sm leading-relaxed text-[#7EA8BD]">
                  Pełna automatyzacja procesu serwisowego — od przyjęcia urządzenia do odbioru
                  przez klienta. Trzy panele: klient, pracownik (Kanban), admin. Celery do zadań
                  async, real-time tracking statusów, audit log i RBAC.
                </p>

                <div className="my-4 flex flex-wrap gap-6">
                  {['3 panele', 'RBAC', 'Audit log', 'SSL/TLS'].map((s) => (
                    <StatPill key={s} label={s} />
                  ))}
                </div>

                <div className="mb-6 flex flex-wrap gap-2">
                  {PROKOM_STACK.map((tag) => (
                    <TechTag key={tag} label={tag} />
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="rounded-lg bg-[#22D3EE] px-4 py-2 text-sm font-semibold text-[#050D12] transition-opacity hover:opacity-90 active:opacity-75"
                  >
                    🚀 Live Demo
                  </a>
                  <a
                    href="https://github.com/krystian2077/prokom-system"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-[rgba(34,211,238,0.4)] bg-transparent px-4 py-2 text-sm text-[#22D3EE] transition-colors hover:bg-[rgba(34,211,238,0.08)] active:bg-[rgba(34,211,238,0.12)]"
                  >
                    📂 GitHub
                  </a>
                  <Link
                    href="/projects/prokom-system"
                    className="bg-transparent px-4 py-2 text-sm text-[#22D3EE] underline-offset-2 transition-all hover:underline"
                  >
                    📋 Case Study →
                  </Link>
                </div>
              </div>

            </div>
          </motion.div>

          {/* ── KARTA 3: Portfolio Website (mała) ── */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-lg rounded-xl border border-[rgba(34,211,238,0.08)] bg-[#081420] p-6"
          >
            <span
              className="mb-3 inline-block rounded-full bg-[rgba(34,211,238,0.08)] px-3 py-1 text-xs text-[#22D3EE]"
              style={{ fontFamily: 'var(--font-dm-mono)' }}
            >
              ⚡ This Website
            </span>

            <h3
              className="mb-2 text-xl font-bold text-[#F0F9FF]"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Portfolio Website
            </h3>

            <p className="mb-4 text-sm leading-relaxed text-[#7EA8BD]">
              Ta strona — premium personal brand website zbudowany w Next.js 15,
              TypeScript i Tailwind CSS v4.
            </p>

            <div className="mb-5 flex flex-wrap gap-2">
              {PORTFOLIO_STACK.map((tag) => (
                <TechTag key={tag} label={tag} />
              ))}
            </div>

            <a
              href="#"
              className="inline-flex rounded-lg border border-[rgba(34,211,238,0.4)] px-5 py-2.5 text-sm text-[#22D3EE] transition-colors hover:bg-[rgba(34,211,238,0.08)] active:bg-[rgba(34,211,238,0.12)]"
            >
              📂 Kod źródłowy
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
