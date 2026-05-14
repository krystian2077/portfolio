'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLocale } from 'next-intl'
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

export function Projects() {
  const locale = useLocale()
  const isEn = locale === 'en'

  return (
    <section id="projects" className="py-20" style={{ backgroundColor: '#050D12' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

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
            {isEn ? 'PROJECTS' : 'PROJEKTY'}
          </p>
          <h2
            className="text-3xl font-bold leading-tight text-[#F0F9FF] md:text-4xl"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            {isEn ? 'Real applications. Working demos.' : 'Realne aplikacje. Działające demo.'}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-[#7EA8BD]">
            {isEn
              ? 'Not just technical exercises - systems built to solve real problems.'
              : 'Nie ćwiczenia techniczne - systemy zbudowane żeby rozwiązywać prawdziwe problemy.'}
          </p>
        </motion.div>

        <div className="space-y-8">

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

              <div className="p-8 lg:p-10">
                <span
                  className="mb-4 inline-block rounded-full bg-[rgba(34,211,238,0.1)] px-3 py-1 text-xs text-[#22D3EE]"
                  style={{ fontFamily: 'var(--font-dm-mono)' }}
                >
                  🚀 {isEn ? 'Flagship Project' : 'Flagship Project'}
                </span>

                <h3
                  className="mb-2 text-2xl font-bold text-[#F0F9FF]"
                  style={{ fontFamily: 'var(--font-sora)' }}
                >
                  StayMap Polska
                </h3>

                <p className="mb-4 text-sm text-[#7EA8BD]">
                  {isEn
                    ? 'A full-stack accommodation booking platform in Poland with a map-first approach.'
                    : 'Produkcyjna platforma marketplace noclegów w Polsce z podejściem map-first.'}
                </p>

                <p className="text-sm leading-relaxed text-[#7EA8BD]">
                  {isEn
                    ? 'Polish AI search, dynamic pricing engine, real-time chat via WebSocket, full host panel and content moderation. Built with Django 5 + DRF, PostGIS for geospatial search and Celery for asynchronous tasks.'
                    : 'AI search po polsku, dynamic pricing engine, real-time chat przez WebSocket, pełny panel hosta i moderacja treści. Zbudowana na Django 5 + DRF z PostGIS do geowyszukiwania i Celery do zadań asynchronicznych.'}
                </p>

                <div className="my-4 flex flex-wrap gap-6">
                  {(isEn
                    ? ['12 modules', '44 views', '25 tests', '9 travel modes']
                    : ['12 modułów', '44 widoki', '25 testów', '9 trybów podróży']
                  ).map((s) => (
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
                    href="https://www.staymap-polska.pl/"
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

              <div className="flex items-center justify-center p-6 lg:p-8">
                <div className="relative w-full h-64 rounded-xl overflow-hidden border border-[rgba(34,211,238,0.1)]">
                  <Image
                    src="/images/staymap-main.png"
                    alt={
                      isEn
                        ? 'StayMap Polska - accommodation booking platform in Poland'
                        : 'StayMap Polska - platforma rezerwacji noclegów w Polsce'
                    }
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

            </div>
          </motion.div>

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

              <div className="order-2 flex items-center justify-center p-6 lg:order-1 lg:p-8">
                <div className="relative w-full h-64 rounded-xl overflow-hidden border border-[rgba(34,211,238,0.1)]">
                  <Image
                    src="/images/main.png"
                    alt={
                      isEn
                        ? 'PRO-KOM Serwis System - electronics repair management system'
                        : 'PRO-KOM Serwis System - system zarządzania naprawami elektroniki'
                    }
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="order-1 p-8 lg:order-2 lg:p-10">
                <span
                  className="mb-4 inline-block rounded-full bg-[rgba(34,211,238,0.08)] px-3 py-1 text-xs text-[#22D3EE]"
                  style={{ fontFamily: 'var(--font-dm-mono)' }}
                >
                  💥 {isEn ? 'Business Solution' : 'Business Solution'}
                </span>

                <h3
                  className="mb-2 text-2xl font-bold text-[#F0F9FF]"
                  style={{ fontFamily: 'var(--font-sora)' }}
                >
                  PRO-KOM Serwis System
                </h3>

                <p className="mb-4 text-sm text-[#7EA8BD]">
                  {isEn
                    ? 'A repair management system for small and medium electronics service businesses.'
                    : 'System zarządzania naprawami elektroniki dla małych i średnich serwisów.'}
                </p>

                <p className="text-sm leading-relaxed text-[#7EA8BD]">
                  {isEn
                    ? 'End-to-end automation of the repair workflow - from device intake to customer pickup. Three panels: customer, staff Kanban board and admin dashboard. Celery for async tasks, real-time status tracking, audit log and RBAC.'
                    : 'Pełna automatyzacja procesu serwisowego - od przyjęcia urządzenia do odbioru przez klienta. Trzy panele: klient, pracownik (Kanban), admin. Celery do zadań async, real-time tracking statusów, audit log i RBAC.'}
                </p>

                <div className="my-4 flex flex-wrap gap-6">
                  {(isEn ? ['3 panels', 'RBAC', 'Audit log', 'SSL/TLS'] : ['3 panele', 'RBAC', 'Audit log', 'SSL/TLS']).map((s) => (
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
                    href="https://prokomserwis.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
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
              ⚡ {isEn ? 'This Website' : 'This Website'}
            </span>

            <h3
              className="mb-2 text-xl font-bold text-[#F0F9FF]"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Portfolio Website
            </h3>

            <p className="mb-4 text-sm leading-relaxed text-[#7EA8BD]">
              {isEn
                ? 'This website - a premium personal brand portfolio built with Next.js 15, TypeScript and Tailwind CSS v4.'
                : 'Ta strona - premium personal brand website zbudowany w Next.js 15, TypeScript i Tailwind CSS v4.'}
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
              📂 {isEn ? 'Source code' : 'Kod źródłowy'}
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
