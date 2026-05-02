'use client'

import { motion } from 'framer-motion'
import {
  MapPin,
  TrendingUp,
  Users,
  Server,
  Globe,
  Database,
  Cpu,
  DollarSign,
  Bot,
  MessageSquare,
  Star,
  Shield,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
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
  'Django 5',
  'DRF',
  'PostGIS',
  'GeoDjango',
  'Redis',
  'Celery',
  'Channels',
  'Daphne',
  'Next.js 14',
  'TypeScript',
  'WebSocket',
  'OpenAI',
  'Google OAuth',
  'pytest',
  'Docker',
  'GitHub Actions',
]

const STAYMAP_ASCII = `┌─────────────────────────────────────────┐
│         Przeglądarka / Mobile           │
└──────────────┬──────────────────────────┘
               │ HTTPS
┌──────────────▼──────────────────────────┐
│     Next.js 14  (SSR + CSR + BFF)       │
│     /api/v1/[...path] → proxy           │
└──────────┬───────────────┬──────────────┘
           │ HTTP REST      │ WebSocket
┌──────────▼───────────────▼──────────────┐
│         Daphne ASGI Server              │
│   Django REST Framework  │  Channels    │
└──────────┬───────────────┬──────────────┘
           │               │
┌──────────▼───────┐  ┌────▼─────────────┐
│  PostgreSQL 16   │  │    Redis 7        │
│  + PostGIS 3.4   │  │  cache/broker/   │
│                  │  │  channel layer   │
└──────────────────┘  └────┬─────────────┘
                           │
                    ┌──────▼──────────────┐
                    │   Celery Worker     │
                    │   + Beat (cron)     │
                    └─────────────────────┘`

export default function StaymapCaseStudy() {
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
              🚀 Flagship Project
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            {...fadeUp(0.1)}
            className="mb-4 text-4xl font-bold text-[#F0F9FF] sm:text-5xl"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            StayMap Polska
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            {...fadeUp(0.15)}
            className="mb-8 max-w-2xl text-xl leading-relaxed text-[#7EA8BD]"
          >
            Produkcyjna platforma marketplace noclegów w Polsce z podejściem map-first,
            AI search po polsku i real-time komunikacją.
          </motion.p>

          {/* Stats */}
          <motion.div
            {...fadeUp(0.2)}
            className="mb-8 flex flex-wrap gap-3"
          >
            {[
              { value: '12', label: 'modułów Django' },
              { value: '44', label: 'widoków Next.js' },
              { value: '25', label: 'plików testów' },
              { value: '9', label: 'trybów podróży' },
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
              href="https://staymap-polska.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#22D3EE] px-5 py-2.5 text-sm font-semibold text-[#050D12] transition-opacity hover:opacity-90"
            >
              🚀 Live Demo
            </a>
            <a
              href="https://github.com/krystian2077/staymap-polska"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[rgba(34,211,238,0.4)] px-5 py-2.5 text-sm text-[#22D3EE] transition-colors hover:bg-[rgba(34,211,238,0.08)]"
            >
              📂 GitHub
            </a>
            <a
              href="https://staymap-polska.vercel.app/api/schema/swagger-ui/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm text-[#7EA8BD] transition-colors hover:text-[#F0F9FF]"
            >
              📖 Swagger API
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

          <motion.div
            {...fadeUp(0.1)}
            className="rounded-2xl border border-[rgba(34,211,238,0.12)] p-8"
            style={{ backgroundColor: '#081420' }}
          >
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                {
                  Icon: MapPin,
                  title: 'Brak platformy map-first',
                  desc: 'Istniejące platformy traktują mapę jako dodatek. W StayMap mapa jest głównym interfejsem odkrywania ofert — lokalizacja to punkt wyjścia, nie filtr.',
                },
                {
                  Icon: TrendingUp,
                  title: 'Statyczne ceny bez kontekstu',
                  desc: 'Brak uwzględnienia polskiej sezonowości, świąt i długości pobytu w cenach noclegów. Dynamic pricing engine rozwiązuje ten problem.',
                },
                {
                  Icon: Users,
                  title: 'Rozproszony journey użytkownika',
                  desc: 'Gość i host operowali w osobnych systemach. StayMap obsługuje cały proces w jednym miejscu — od odkrycia po recenzję.',
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
              Projekt indywidualny — zaprojektowałem i zbudowałem całość samodzielnie.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                Icon: Server,
                title: 'Backend Architecture',
                desc: 'Zaprojektowałem strukturę 12 modułów Django, relacje między modelami, system uprawnień i lifecycle rezerwacji.',
                delay: 0,
              },
              {
                Icon: Globe,
                title: 'REST API + WebSocket',
                desc: '47 endpointów DRF z dokumentacją Swagger. ASGI z Daphne obsługujący jednocześnie REST i WebSocket.',
                delay: 0.05,
              },
              {
                Icon: Database,
                title: 'Data & Geospatial',
                desc: 'Schemat bazy z PostGIS, indeksy przestrzenne, zapytania geosearch, Redis w 3 rolach jednocześnie.',
                delay: 0.1,
              },
              {
                Icon: Cpu,
                title: 'Async & Integrations',
                desc: '8 zadań Celery, integracja OpenAI, Nominatim, Overpass API, Google OAuth, mailing transakcyjny.',
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
              {STAYMAP_ASCII}
            </pre>
          </motion.div>

          <motion.div {...fadeUp(0.15)} className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Frontend', desc: 'Next.js 14, SSR/CSR, BFF proxy' },
              { label: 'Backend', desc: 'Django 5, DRF, Channels, ASGI' },
              { label: 'Data', desc: 'PostgreSQL+PostGIS, Redis, Celery' },
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
                Icon: MapPin,
                title: 'Map-first UX + PostGIS',
                desc: 'Geosearch noclegów przez GeoDjango i PostGIS 3.4. Zapytania przestrzenne, ranking ofert po odległości i destination score. Integracja z Nominatim i Overpass API.',
                delay: 0,
              },
              {
                Icon: DollarSign,
                title: 'Dynamic Pricing Engine',
                desc: 'Wielowarstwowy silnik cenowy: sezony, polskie święta, dopłaty za gości, rabaty long-stay. Snapshot ceny zapisywany w momencie rezerwacji.',
                delay: 0.05,
              },
              {
                Icon: Bot,
                title: 'AI Search po polsku',
                desc: 'OpenAI API interpretuje zapytania w języku polskim i mapuje je na filtry wyszukiwarki. Sesje AI z TTL i limitami kosztowymi.',
                delay: 0.1,
              },
              {
                Icon: MessageSquare,
                title: 'Real-time Chat',
                desc: 'Django Channels + Daphne ASGI. WebSocket eventy: message.new, typing.start, typing.stop, message.read. JWT autoryzacja przy połączeniu.',
                delay: 0.15,
              },
              {
                Icon: Star,
                title: 'Blind Release Reviews',
                desc: 'Recenzje publikowane dopiero gdy obie strony (gość i host) je dodadzą. Eliminuje efekt wpływu jednej strony na drugą.',
                delay: 0.2,
              },
              {
                Icon: Shield,
                title: 'Auth + Security',
                desc: 'JWT z rotacją tokenów w HTTP-only cookies. Google OAuth. MIME validation uploadów. Rate limiting na AI/upload/auth. Sentry w produkcji.',
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
              Najtrudniejsze problemy do rozwiązania
            </h2>
            <p className="mt-2 text-sm text-[#7EA8BD]">To gdzie się naprawdę uczyłem.</p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                num: '01',
                title: 'Redis w trzech rolach jednocześnie',
                problem:
                  'Redis musi działać jako cache aplikacji, broker wiadomości Celery i channel layer dla Django Channels — wszystko jednocześnie, z odpowiednią konfiguracją baz danych Redis żeby nie mieszać danych.',
                solution:
                  '→ Osobne bazy Redis (db=0 cache, db=1 Celery, db=2 Channels). Docker Compose z health checks upewniającymi się że Redis startuje przed aplikacją.',
                delay: 0,
              },
              {
                num: '02',
                title: 'Architektura ASGI z Daphne',
                problem:
                  'Przejście z WSGI (Gunicorn) na ASGI (Daphne) wymagało zrozumienia jak routing żądań HTTP i WebSocket działa jednocześnie w jednym procesie.',
                solution:
                  '→ Konfiguracja asgi.py z URLRouter dla Channels i Django WSGI wrapper dla standardowych requestów. Daphne jako główny serwer produkcyjny.',
                delay: 0.05,
              },
              {
                num: '03',
                title: 'Dynamic pricing z nakładającymi się regułami',
                problem:
                  'Wiele reguł cenowych może nakładać się na ten sam termin (sezon + święto + weekend + long-stay). Kolejność aplikowania reguł wpływa na finalną cenę.',
                solution:
                  '→ System priorytetów reguł z jawnie zdefiniowaną kolejnością: base → season → holiday → extra_guests → long_stay_discount. Snapshot ceny zapisywany atomowo przy tworzeniu rezerwacji.',
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
              'Architektura ASGI vs WSGI i kiedy używać każdej z nich',
              'Geospatial queries z PostGIS — od teorii do produkcyjnych indeksów',
              'Wzorzec BFF (Backend for Frontend) w Next.js jako proxy layer',
              'Zarządzanie złożonym stanem rezerwacji z deadlines i lifecycle',
              'Redis jako wielofunkcyjne narzędzie — nie tylko cache',
              'Monitoring produkcyjny z Sentry i structured logging',
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

      {/* ── ROADMAP ── */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="mb-6">
            <p
              className="mb-2 text-xs uppercase tracking-widest text-[#22D3EE]"
              style={{ fontFamily: 'var(--font-dm-mono)' }}
            >
              ROADMAP
            </p>
            <h2
              className="text-2xl font-bold text-[#F0F9FF] sm:text-3xl"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Co dalej
            </h2>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="flex flex-wrap gap-3">
            {[
              "AI 'Kiedy jechać?' — rekomendacja terminu",
              'Izochrony — wyszukiwanie po czasie dojazdu',
              'Stripe — integracja płatności',
              'Pamiętnik podróży — zdjęcia po pobycie',
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(34,211,238,0.2)] px-3 py-1.5 text-sm text-[#7EA8BD] transition-colors hover:border-[rgba(34,211,238,0.4)] hover:text-[#F0F9FF]"
                style={{ backgroundColor: 'rgba(34,211,238,0.04)' }}
              >
                <ArrowRight className="h-3 w-3 text-[#22D3EE]" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16" style={{ backgroundColor: '#050D12' }}>
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
                href="/projects/prokom-system"
                className="inline-flex items-center gap-2 rounded-lg border border-[rgba(34,211,238,0.4)] px-6 py-3 text-sm text-[#22D3EE] transition-colors hover:bg-[rgba(34,211,238,0.08)]"
              >
                Zobacz drugi projekt →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROJECT NAVIGATION ── */}
      <section className="pb-16" style={{ backgroundColor: '#050D12' }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="flex justify-end">
            <Link
              href="/projects/prokom-system"
              className="flex items-center gap-3 rounded-xl border border-[rgba(34,211,238,0.1)] p-4 transition-colors hover:border-[rgba(34,211,238,0.25)]"
              style={{ backgroundColor: '#081420' }}
            >
              <div className="text-right">
                <p
                  className="mb-0.5 text-xs text-[#3A5F73]"
                  style={{ fontFamily: 'var(--font-dm-mono)' }}
                >
                  Następny projekt
                </p>
                <p className="text-sm font-semibold text-[#F0F9FF]">PRO-KOM Serwis System</p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-[#22D3EE]" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
