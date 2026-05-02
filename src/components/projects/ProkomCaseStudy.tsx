'use client'

import { motion } from 'framer-motion'
import {
  ClipboardList,
  Calendar,
  BarChart,
  LayoutDashboard,
  Bell,
  ShieldCheck,
  Package,
  BarChart2,
  Lock,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Server,
  Layers,
  Zap,
  ShieldAlert,
} from 'lucide-react'
import Link from 'next/link'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.6, ease: EASE, delay },
  }
}

const STACK_BADGES = [
  'Django 5.1',
  'DRF',
  'PostgreSQL 16',
  'Redis 7',
  'Celery 5.4',
  'Next.js 14',
  'TypeScript',
  'Tailwind CSS',
  'React Query',
  'Zustand',
  'Framer Motion',
  'Docker',
  'Nginx',
  'Certbot',
  'pytest',
  'GitHub Actions',
]

const PROKOM_ASCII = `┌─────────────────────────────────────────┐
│    Nginx (Reverse Proxy + SSL/TLS)      │
│         Port 80/443                     │
└───────────┬─────────────┬───────────────┘
            │             │
┌───────────▼───┐  ┌──────▼──────────────┐
│  Next.js 14   │  │   Django 5.1 + DRF  │
│  Port 3000    │  │   Gunicorn           │
│               │  │   Port 8000         │
│ ├ Panel Klienta│  │ ├ Auth API          │
│ ├ Panel Staff │  │ ├ Repairs API       │
│ ├ Panel Admin │  │ ├ Inventory API     │
│ └ Public Site │  │ └ Analytics API     │
└───────────────┘  └──────┬──────────────┘
                          │
          ┌───────────────┼──────────────┐
          │               │              │
┌─────────▼──────┐  ┌─────▼───┐  ┌──────▼──────┐
│ PostgreSQL 16  │  │ Redis 7 │  │   Celery    │
│ Primary DB     │  │ Cache/  │  │  Workers   │
│                │  │ Queue   │  │            │
│ ├ Repairs      │  │         │  │ ├ Emails   │
│ ├ Clients      │  │         │  │ ├ SMS/WA   │
│ ├ Inventory    │  │         │  │ ├ Backups  │
│ └ Audit Log    │  │         │  │ └ Reports  │
└────────────────┘  └─────────┘  └────────────┘`

export default function ProkomCaseStudy() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#050D12' }}>

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden pb-16 pt-12"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(34,211,238,0.08) 0%, transparent 70%), #050D12',
        }}
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <motion.div {...fadeUp(0)} className="mb-8">
            <Link
              href="/#projekty"
              className="inline-flex items-center gap-1.5 text-xs text-[#3A5F73] transition-colors hover:text-[#22D3EE]"
              style={{ fontFamily: 'var(--font-dm-mono)' }}
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Powrót do projektów
            </Link>
          </motion.div>

          {/* Badge */}
          <motion.div {...fadeUp(0.05)} className="mb-4">
            <span
              className="inline-block rounded-full px-3 py-1 text-xs text-[#22D3EE]"
              style={{
                fontFamily: 'var(--font-dm-mono)',
                backgroundColor: 'rgba(34,211,238,0.1)',
              }}
            >
              💼 Business Solution
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            {...fadeUp(0.1)}
            className="mb-4 text-4xl font-bold text-[#F0F9FF] sm:text-5xl"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            PRO-KOM Serwis System
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            {...fadeUp(0.15)}
            className="mb-8 max-w-2xl text-xl leading-relaxed text-[#7EA8BD]"
          >
            System zarządzania naprawami sprzętu elektronicznego — od zgłoszenia do odbioru.
            Inspirowany 2,5-letnim doświadczeniem w realnym serwisie.
          </motion.p>

          {/* Stats */}
          <motion.div
            {...fadeUp(0.2)}
            className="mb-8 flex flex-wrap gap-3"
          >
            {[
              { value: '3', label: 'panele użytkownika' },
              { value: 'RBAC', label: 'system uprawnień' },
              { value: '8+', label: 'zadań Celery async' },
              { value: 'SSL', label: "Let's Encrypt" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border px-5 py-4 text-center"
                style={{
                  backgroundColor: '#081420',
                  borderColor: 'rgba(34,211,238,0.12)',
                  minWidth: '110px',
                }}
              >
                <p
                  className="text-3xl font-bold text-[#22D3EE]"
                  style={{ fontFamily: 'var(--font-sora)' }}
                >
                  {stat.value}
                </p>
                <p
                  className="mt-1 text-xs text-[#7EA8BD]"
                  style={{ fontFamily: 'var(--font-dm-mono)' }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Action buttons */}
          <motion.div {...fadeUp(0.25)} className="mb-6 flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-[#22D3EE] px-5 py-2.5 text-sm font-semibold text-[#050D12] transition-opacity hover:opacity-90"
            >
              🚀 Live Demo
            </a>
            <a
              href="https://github.com/krystian2077/prokom-system"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[rgba(34,211,238,0.4)] px-5 py-2.5 text-sm text-[#22D3EE] transition-colors hover:bg-[rgba(34,211,238,0.08)]"
            >
              📂 GitHub
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm text-[#7EA8BD] transition-colors hover:text-[#F0F9FF]"
            >
              📖 Swagger
            </a>
          </motion.div>

          {/* Stack badges */}
          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-2">
            {STACK_BADGES.map((badge) => (
              <span
                key={badge}
                className="rounded-md border px-2 py-1 text-xs text-[#7EA8BD]"
                style={{
                  fontFamily: 'var(--font-dm-mono)',
                  backgroundColor: '#081420',
                  borderColor: 'rgba(34,211,238,0.15)',
                }}
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()}>
            <p
              className="mb-2 text-xs uppercase tracking-widest text-[#22D3EE]"
              style={{ fontFamily: 'var(--font-dm-mono)' }}
            >
              GENEZA
            </p>
            <h2
              className="mb-8 text-2xl font-bold text-[#F0F9FF] sm:text-3xl"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Problem który rozwiązuje
            </h2>
          </motion.div>

          {/* Personal context card */}
          <motion.div
            {...fadeUp(0.05)}
            className="mb-6 rounded-xl border-l-4 border-[#22D3EE] p-6"
            style={{ backgroundColor: '#081420' }}
          >
            <p className="text-sm leading-relaxed text-[#7EA8BD]">
              Ten projekt zbudowałem z perspektywy kogoś, kto przez{' '}
              <span className="text-[#F0F9FF]">2,5 roku pracował w serwisie elektroniki</span>.
              Wiedziałem dokładnie jakie procesy są nieefektywne, gdzie gubi się informacja
              i czego klientom brakuje.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp(0.1)}
            className="rounded-2xl border border-[rgba(34,211,238,0.12)] p-8"
            style={{ backgroundColor: '#081420' }}
          >
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                {
                  Icon: ClipboardList,
                  title: 'Brak transparentności dla klienta',
                  desc: 'Klient nie wiedział co dzieje się z jego urządzeniem bez dzwonienia do serwisu. Brak powiadomień, brak self-service panelu.',
                },
                {
                  Icon: Calendar,
                  title: 'Ręczne zarządzanie harmonogramem',
                  desc: 'Pracownicy żonglowali notatkami i excelem. Brak widoku priorytetów, brak Kanban board, brak automatycznych przypomnień.',
                },
                {
                  Icon: BarChart,
                  title: 'Brak danych do decyzji',
                  desc: 'Właściciel nie miał dostępu do analityki — czas napraw, wydajność pracowników, popularne usterki, stan magazynu.',
                },
              ].map(({ Icon, title, desc }) => (
                <div key={title} className="space-y-3">
                  <Icon className="h-6 w-6 text-[#22D3EE]" />
                  <h3 className="font-semibold text-[#F0F9FF]">{title}</h3>
                  <p className="text-sm leading-relaxed text-[#7EA8BD]">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MOJA ROLA ── */}
      <section className="py-16" style={{ backgroundColor: '#050D12' }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="mb-8">
            <p
              className="mb-2 text-xs uppercase tracking-widest text-[#22D3EE]"
              style={{ fontFamily: 'var(--font-dm-mono)' }}
            >
              ZAKRES
            </p>
            <h2
              className="text-2xl font-bold text-[#F0F9FF] sm:text-3xl"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Moja rola w projekcie
            </h2>
            <p className="mt-2 text-sm text-[#7EA8BD]">
              Projekt indywidualny. Pomysł, architektura, implementacja — całość samodzielnie.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                Icon: Server,
                title: 'Domain Modeling',
                desc: 'Przełożyłem realne procesy serwisowe na model danych Django. Lifecycle naprawy: PENDING → ACCEPTED → IN_PROGRESS → READY → DELIVERED.',
                delay: 0,
              },
              {
                Icon: Layers,
                title: 'Trzy panele UX',
                desc: 'Różne przepływy dla klienta, pracownika i admina. Kanban board drag-drop dla staff, self-service dla klienta bez logowania.',
                delay: 0.05,
              },
              {
                Icon: Zap,
                title: 'Async & Notifications',
                desc: 'Celery do emaili, SMS/WhatsApp, automatycznych backupów i raportów. Redis jako broker i cache.',
                delay: 0.1,
              },
              {
                Icon: ShieldAlert,
                title: 'Security & Compliance',
                desc: 'RBAC + ABAC, JWT auth, HTTPS z Let\'s Encrypt, audit log (django-simple-history), GDPR/RODO.',
                delay: 0.15,
              },
            ].map(({ Icon, title, desc, delay }) => (
              <motion.div
                key={title}
                {...fadeUp(delay)}
                className="rounded-xl border border-[rgba(34,211,238,0.1)] p-6 transition-colors hover:border-[rgba(34,211,238,0.25)]"
                style={{ backgroundColor: '#081420' }}
              >
                <Icon className="mb-3 h-5 w-5 text-[#22D3EE]" />
                <h3 className="mb-2 font-semibold text-[#F0F9FF]">{title}</h3>
                <p className="text-sm leading-relaxed text-[#7EA8BD]">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARCHITEKTURA ── */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="mb-8">
            <p
              className="mb-2 text-xs uppercase tracking-widest text-[#22D3EE]"
              style={{ fontFamily: 'var(--font-dm-mono)' }}
            >
              DESIGN
            </p>
            <h2
              className="text-2xl font-bold text-[#F0F9FF] sm:text-3xl"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Architektura systemu
            </h2>
          </motion.div>

          <motion.div
            {...fadeUp(0.1)}
            className="overflow-hidden rounded-xl border p-6"
            style={{
              backgroundColor: '#0A1628',
              borderColor: 'rgba(34,211,238,0.15)',
            }}
          >
            <pre
              className="overflow-x-auto text-xs leading-relaxed text-[#22D3EE]"
              style={{ fontFamily: 'var(--font-dm-mono)' }}
            >
              {PROKOM_ASCII}
            </pre>
          </motion.div>

          <motion.div {...fadeUp(0.15)} className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Frontend', desc: 'Next.js 14, React Query, Zustand' },
              { label: 'Backend', desc: 'Django 5.1, DRF, Gunicorn, Nginx' },
              { label: 'Data', desc: 'PostgreSQL 16, Redis 7, Celery' },
            ].map(({ label, desc }) => (
              <div key={label} className="text-sm">
                <span
                  className="text-[#22D3EE]"
                  style={{ fontFamily: 'var(--font-dm-mono)' }}
                >
                  {label}:
                </span>{' '}
                <span className="text-[#7EA8BD]">{desc}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── KLUCZOWE FUNKCJE ── */}
      <section className="py-16" style={{ backgroundColor: '#050D12' }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="mb-8">
            <p
              className="mb-2 text-xs uppercase tracking-widest text-[#22D3EE]"
              style={{ fontFamily: 'var(--font-dm-mono)' }}
            >
              FUNKCJE
            </p>
            <h2
              className="text-2xl font-bold text-[#F0F9FF] sm:text-3xl"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Kluczowe funkcje techniczne
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                Icon: LayoutDashboard,
                title: 'Kanban Board dla Staff',
                desc: 'Drag-drop zmiana statusów napraw. Kolumny: Przyjęte → W trakcie → Gotowe → Odebrane. Widok priorytetów i przypisań do pracowników.',
                delay: 0,
              },
              {
                Icon: Bell,
                title: 'Automatyczne powiadomienia',
                desc: 'Celery Beat wysyła emaile przy każdej zmianie statusu. Klient śledzi naprawę bez dzwonienia do serwisu.',
                delay: 0.05,
              },
              {
                Icon: ShieldCheck,
                title: 'RBAC + Audit Log',
                desc: 'Role: klient, pracownik, admin. django-simple-history śledzi każdą zmianę w systemie. Pełna historia dla compliance i audytu.',
                delay: 0.1,
              },
              {
                Icon: Package,
                title: 'Zarządzanie magazynem',
                desc: 'Katalog części zamiennych, rezerwacja przy naprawie, stany magazynowe. Zamówienia hurtowni z powiadomieniami o niskim stanie.',
                delay: 0.15,
              },
              {
                Icon: BarChart2,
                title: 'Analityka i raporty',
                desc: 'Dashboard dla admina: czas napraw, wydajność pracowników, przychody, najpopularniejsze usterki. Eksport CSV/PDF.',
                delay: 0.2,
              },
              {
                Icon: Lock,
                title: 'Security Production-ready',
                desc: "HTTPS z Let's Encrypt (Certbot), CSRF, XSS prevention, rate limiting, SQL injection prevention przez ORM, PBKDF2 password hashing.",
                delay: 0.25,
              },
            ].map(({ Icon, title, desc, delay }) => (
              <motion.div
                key={title}
                {...fadeUp(delay)}
                className="rounded-xl border border-[rgba(34,211,238,0.1)] p-6 transition-colors hover:border-[rgba(34,211,238,0.25)]"
                style={{ backgroundColor: '#081420' }}
              >
                <Icon className="mb-3 h-5 w-5 text-[#22D3EE]" />
                <h3 className="mb-2 font-semibold text-[#F0F9FF]">{title}</h3>
                <p className="text-sm leading-relaxed text-[#7EA8BD]">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WYZWANIA ── */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="mb-8">
            <p
              className="mb-2 text-xs uppercase tracking-widest text-[#22D3EE]"
              style={{ fontFamily: 'var(--font-dm-mono)' }}
            >
              WYZWANIA
            </p>
            <h2
              className="text-2xl font-bold text-[#F0F9FF] sm:text-3xl"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Najtrudniejsze problemy
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                num: '01',
                title: 'Modelowanie złożonego lifecycle naprawy',
                problem:
                  'Naprawa przechodzi przez wiele stanów z różnymi regułami przejść, deadlines i automatycznymi akcjami przy każdej zmianie.',
                solution:
                  '→ Django signals do wyzwalania Celery tasków przy zmianie statusu. Enum-based status field z jawną logiką dozwolonych przejść.',
                delay: 0,
              },
              {
                num: '02',
                title: 'RBAC z trzema różnymi UX flows',
                problem:
                  'Klient, pracownik i admin mają zupełnie inne potrzeby i uprawnienia. Ten sam zasób (naprawa) musi się inaczej prezentować każdej roli.',
                solution:
                  '→ Custom permission classes w DRF. Serializery z metodą to_representation zwracającą różne pola per rola. Trzy osobne sekcje Next.js.',
                delay: 0.05,
              },
              {
                num: '03',
                title: 'Implementacja bez wcześniejszego wzorca',
                problem:
                  'To był mój pierwszy duży projekt z pełnym stack Django + Next.js + Docker. Wiele decyzji architektonicznych podejmowałem bez gotowego szablonu.',
                solution:
                  '→ Czysty Kod i Software Craftsman jako przewodniki. Selectors/Services/Serializers jako pattern. Regularne code review z pomocą AI.',
                delay: 0.1,
              },
            ].map(({ num, title, problem, solution, delay }) => (
              <motion.div
                key={num}
                {...fadeUp(delay)}
                className="rounded-r-xl border-l-4 border-[#22D3EE] p-6"
                style={{ backgroundColor: '#081420' }}
              >
                <div className="mb-3 flex items-start gap-4">
                  <span
                    className="shrink-0 text-4xl font-bold leading-none"
                    style={{
                      fontFamily: 'var(--font-dm-mono)',
                      color: 'rgba(34,211,238,0.2)',
                    }}
                  >
                    {num}
                  </span>
                  <h3 className="pt-1 text-lg font-semibold text-[#F0F9FF]">{title}</h3>
                </div>
                <p className="mb-3 text-sm leading-relaxed text-[#7EA8BD]">{problem}</p>
                <p
                  className="text-sm leading-relaxed text-[#22D3EE]"
                  style={{ fontFamily: 'var(--font-dm-mono)' }}
                >
                  {solution}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CZEGO SIĘ NAUCZYŁEM ── */}
      <section className="py-16" style={{ backgroundColor: '#050D12' }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="mb-8">
            <p
              className="mb-2 text-xs uppercase tracking-widest text-[#22D3EE]"
              style={{ fontFamily: 'var(--font-dm-mono)' }}
            >
              WNIOSKI
            </p>
            <h2
              className="text-2xl font-bold text-[#F0F9FF] sm:text-3xl"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Czego się nauczyłem
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Jak przełożyć realne procesy biznesowe na model danych i lifecycle stanów',
              'Modułowa architektura Django — każda app ma jedną odpowiedzialność',
              'Clean Architecture w praktyce: selectors, services, serializers',
              'Docker + Nginx + Certbot — deployment produkcyjny od A do Z',
              'Zarządzanie złożonymi uprawnieniami RBAC i ABAC w DRF',
              'Budowanie z perspektywy użytkownika — 2,5 roku w serwisie to bezcenny kontekst',
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.05)}
                className="flex items-start gap-3 rounded-xl border border-[rgba(34,211,238,0.08)] p-4"
                style={{ backgroundColor: '#081420' }}
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#22D3EE]" />
                <p className="text-sm leading-relaxed text-[#7EA8BD]">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp()}
            className="rounded-2xl border border-[rgba(34,211,238,0.15)] p-8 text-center"
            style={{ backgroundColor: '#081420' }}
          >
            <h2
              className="mb-3 text-2xl font-bold text-[#F0F9FF]"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Zaciekawił Cię ten projekt?
            </h2>
            <p className="mb-8 text-[#7EA8BD]">
              Chętnie opowiem więcej o decyzjach technicznych i architekturze.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/#kontakt"
                className="inline-flex items-center gap-2 rounded-lg bg-[#22D3EE] px-6 py-3 text-sm font-semibold text-[#050D12] transition-opacity hover:opacity-90"
              >
                Napisz do mnie
              </Link>
              <Link
                href="/projects/staymap-polska"
                className="inline-flex items-center gap-2 rounded-lg border border-[rgba(34,211,238,0.4)] px-6 py-3 text-sm text-[#22D3EE] transition-colors hover:bg-[rgba(34,211,238,0.08)]"
              >
                ← Zobacz StayMap Polska
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROJECT NAVIGATION ── */}
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="flex justify-start">
            <Link
              href="/projects/staymap-polska"
              className="flex items-center gap-3 rounded-xl border border-[rgba(34,211,238,0.1)] p-4 transition-colors hover:border-[rgba(34,211,238,0.25)]"
              style={{ backgroundColor: '#081420' }}
            >
              <ArrowLeft className="h-4 w-4 shrink-0 text-[#22D3EE]" />
              <div>
                <p
                  className="mb-0.5 text-xs text-[#3A5F73]"
                  style={{ fontFamily: 'var(--font-dm-mono)' }}
                >
                  Poprzedni projekt
                </p>
                <p className="text-sm font-semibold text-[#F0F9FF]">StayMap Polska</p>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
