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
  ExternalLink,
  GitBranch,
  BookOpen,
} from 'lucide-react'
import Link from 'next/link'
import { staymapArchitecture } from '@/content/projectArchitecture'
import { ProjectArchitecture } from './ProjectArchitecture'
import { ScreenshotLightboxGrid } from './ScreenshotLightboxGrid'

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
  'Django REST Framework',
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

const PRODUCT_SCREENS = [
  {
    title: 'Strona główna i szybkie wyszukiwanie',
    image: '/images/staymap-home.png',
    desc: 'Pierwszy kontakt z produktem: szybki wybór lokalizacji, terminu i liczby gości, z przejściem bezpośrednio do wyników opartych o mapę.',
    alt: 'StayMap Polska - strona główna z formularzem wyszukiwania noclegów',
  },
  {
    title: 'Wyniki wyszukiwania na mapie',
    image: '/images/staymap-search-map.png',
    desc: 'Map-first search łączy listę ofert, piny, filtry i kontekst lokalizacji, dzięki czemu użytkownik szybciej ocenia, gdzie faktycznie chce nocować.',
    alt: 'StayMap Polska - wyniki wyszukiwania noclegów w widoku mapy',
  },
  {
    title: 'Panel hosta',
    image: '/images/staymap-host-panel.png',
    desc: 'Panel dla gospodarza pokazuje zarządzanie ofertami, rezerwacjami i dostępnością w jednym miejscu, bez przełączania się między oddzielnymi narzędziami.',
    alt: 'StayMap Polska - panel hosta',
  },
  {
    title: 'Szczegóły oferty i rezerwacja',
    image: '/images/staymap-offer-details.png',
    desc: 'Widok szczegółów prowadzi użytkownika od zdjęć i informacji o miejscu do kalkulacji ceny oraz decyzji rezerwacyjnej.',
    alt: 'StayMap Polska - szczegóły oferty noclegu i proces rezerwacji',
  },
  {
    title: 'Porównanie ofert',
    image: '/images/staymap-compare.png',
    desc: 'Porównywarka pomaga zestawić kilka noclegów obok siebie, gdy sama cena nie wystarcza do podjęcia decyzji.',
    alt: 'StayMap Polska - porównanie wybranych ofert noclegów',
  },
  {
    title: 'AI search po polsku',
    image: '/images/staymap-ai-search.png',
    desc: 'Naturalne zapytania po polsku wspierają wyszukiwanie, gdy użytkownik opisuje potrzebę zamiast klikać zestaw klasycznych filtrów.',
    alt: 'StayMap Polska - wyszukiwanie noclegów z pomocą AI',
  },
]

const PRODUCT_SCREEN_ITEMS = PRODUCT_SCREENS.map(({ image, ...screen }) => ({
  ...screen,
  src: image,
}))

const DEMO_CHECKLIST = [
  'wyszukiwanie noclegów na mapie',
  'filtrowanie ofert',
  'tryby podróży',
  'panel hosta',
  'proces rezerwacji',
  'AI search po polsku',
  'real-time chat',
  'dokumentację Swagger/OpenAPI',
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
        className="relative overflow-hidden pt-12 pb-16"
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
            Full-stackowa platforma rezerwacji noclegów w Polsce z podejściem map-first, AI search
            po polsku i komunikacją real-time.
          </motion.p>

          {/* Stats */}
          <motion.div {...fadeUp(0.2)} className="mb-8 flex flex-wrap gap-3">
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
              href="https://www.staymap-polska.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#22D3EE] px-5 py-2.5 text-sm font-semibold text-[#050D12] transition-opacity hover:opacity-90"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
            <a
              href="https://github.com/krystian2077/staymap-polska"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[rgba(34,211,238,0.4)] px-5 py-2.5 text-sm text-[#22D3EE] transition-colors hover:bg-[rgba(34,211,238,0.08)]"
            >
              <GitBranch className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://www.staymap-polska.pl/api/schema/swagger-ui/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm text-[#7EA8BD] transition-colors hover:text-[#F0F9FF]"
            >
              <BookOpen className="h-4 w-4" />
              Swagger API
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

      {/* ── DEMO ── */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="mb-8">
            <p
              className="mb-2 text-xs tracking-widest text-[#22D3EE] uppercase"
              style={{ fontFamily: 'var(--font-dm-mono)' }}
            >
              DEMO
            </p>
            <h2
              className="text-2xl font-bold text-[#F0F9FF] sm:text-3xl"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Produkt w praktyce
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#7EA8BD]">
              Najważniejsze widoki projektu, które pokazują map-first search, proces rezerwacji,
              panel hosta i komunikację real-time.
            </p>
          </motion.div>

          <ScreenshotLightboxGrid
            items={PRODUCT_SCREEN_ITEMS}
            className="grid gap-4 sm:grid-cols-2"
            imageSizes="(min-width: 640px) 50vw, 100vw"
            labels={{
              enlargeAria: 'Powiększ screen',
              enlarge: 'Powiększ',
              closeAria: 'Zamknij podgląd',
              previewHeading: 'Podgląd widoku',
              note: 'Screen pokazuje wybrany fragment produktu StayMap Polska. Demo możesz sprawdzić publicznie, a techniczne szczegóły architektury są opisane niżej w case study.',
            }}
          />

          <motion.div
            {...fadeUp(0.2)}
            className="mt-6 rounded-xl border border-[rgba(34,211,238,0.12)] p-6"
            style={{ backgroundColor: '#081420' }}
          >
            <h3
              className="mb-4 text-lg font-semibold text-[#F0F9FF]"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Co możesz sprawdzić w demo
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {DEMO_CHECKLIST.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#22D3EE]" />
                  <p className="text-sm leading-relaxed text-[#7EA8BD]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()}>
            <p
              className="mb-2 text-xs tracking-widest text-[#22D3EE] uppercase"
              style={{ fontFamily: 'var(--font-dm-mono)' }}
            >
              GENEZA
            </p>
            <h2
              className="mb-8 text-2xl font-bold text-[#F0F9FF] sm:text-3xl"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Problem produktowy
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-[#7EA8BD]">
              StayMap powstał jako odpowiedź na problem wyszukiwania noclegów, w którym lokalizacja,
              cena, dostępność i potrzeby użytkownika często są rozproszone między różnymi ekranami
              i filtrami.
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
                  Icon: MapPin,
                  title: 'Mapa jako główny interfejs',
                  desc: 'W wielu serwisach mapa jest dodatkiem do listy wyników. W StayMap lokalizacja jest punktem wyjścia — użytkownik odkrywa oferty bezpośrednio na mapie.',
                },
                {
                  Icon: TrendingUp,
                  title: 'Ceny bez kontekstu sezonowości',
                  desc: 'Cena noclegu zależy od terminu, długości pobytu, sezonu, świąt i liczby gości. Dynamic pricing engine uwzględnia te reguły w jednym procesie.',
                },
                {
                  Icon: Users,
                  title: 'Rozproszona ścieżka użytkownika',
                  desc: 'Gość, host i administrator często działają w osobnych procesach. StayMap łączy wyszukiwanie, rezerwację, komunikację, panel hosta i moderację w jednym systemie.',
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
              className="mb-2 text-xs tracking-widest text-[#22D3EE] uppercase"
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
              Projekt indywidualny — zaprojektowałem i zbudowałem całość samodzielnie: backend, API,
              model danych, logikę biznesową, integracje, frontend oraz wdrożenie demo.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                Icon: Server,
                title: 'Architektura backendu',
                desc: 'Zaprojektowałem strukturę 12 modułów Django, relacje między modelami, system uprawnień oraz lifecycle rezerwacji.',
                delay: 0,
              },
              {
                Icon: Globe,
                title: 'REST API + WebSocket',
                desc: 'Zbudowałem 47 endpointów DRF z dokumentacją Swagger/OpenAPI oraz warstwę ASGI z Daphne obsługującą jednocześnie REST i WebSocket.',
                delay: 0.05,
              },
              {
                Icon: Database,
                title: 'Dane i geolokalizacja',
                desc: 'Zaprojektowałem schemat bazy PostgreSQL/PostGIS, zapytania przestrzenne, indeksy geograficzne oraz wyszukiwanie ofert po lokalizacji.',
                delay: 0.1,
              },
              {
                Icon: Cpu,
                title: 'Async tasks i integracje',
                desc: 'Dodałem zadania Celery, Redis w kilku rolach, integrację OpenAI, Google OAuth, mailing transakcyjny oraz zewnętrzne źródła danych lokalizacyjnych.',
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

      <ProjectArchitecture content={staymapArchitecture} technicalDiagram={STAYMAP_ASCII} />

      {/* ── KLUCZOWE FUNKCJE ── */}
      <section className="py-16" style={{ backgroundColor: '#050D12' }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="mb-8">
            <p
              className="mb-2 text-xs tracking-widest text-[#22D3EE] uppercase"
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
                desc: 'Geowyszukiwanie noclegów przez GeoDjango i PostGIS 3.4. Zapytania przestrzenne, filtrowanie po odległości, ranking ofert według lokalizacji oraz integracja z Nominatim i Overpass API.',
                delay: 0,
              },
              {
                Icon: DollarSign,
                title: 'Dynamic Pricing Engine',
                desc: 'Wielowarstwowy silnik cenowy: sezony, polskie święta, weekendy, dopłaty za gości i rabaty long-stay. Cena jest zapisywana jako snapshot w momencie rezerwacji.',
                delay: 0.05,
              },
              {
                Icon: Bot,
                title: 'AI Search po polsku',
                desc: 'OpenAI API interpretuje zapytania użytkownika w języku polskim i mapuje intencję na filtry wyszukiwarki. Sesje AI mają TTL oraz limity kosztowe.',
                delay: 0.1,
              },
              {
                Icon: MessageSquare,
                title: 'Real-time Chat',
                desc: 'Django Channels + Daphne ASGI. WebSocket eventy: message.new, typing.start, typing.stop, message.read. Autoryzacja połączenia oparta o JWT.',
                delay: 0.15,
              },
              {
                Icon: Star,
                title: 'Blind Reviews',
                desc: 'Recenzje są publikowane dopiero wtedy, gdy obie strony — gość i host — dodadzą swoją opinię. Ogranicza to wpływ jednej recenzji na drugą i zwiększa uczciwość procesu.',
                delay: 0.2,
              },
              {
                Icon: Shield,
                title: 'Auth + Security',
                desc: 'JWT z rotacją tokenów i HTTP-only cookies, Google OAuth, walidacja uploadów oraz rate limiting dla AI, auth i uploadów.',
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
              className="mb-2 text-xs tracking-widest text-[#22D3EE] uppercase"
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
            <p className="mt-2 text-sm text-[#7EA8BD]">
              Miejsca, w których projekt wymagał prawdziwych decyzji technicznych.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                num: '01',
                title: 'Redis w 3 rolach',
                problem:
                  'Redis musi działać jako cache aplikacji, broker wiadomości Celery i channel layer dla Django Channels — wszystko jednocześnie, z odpowiednią konfiguracją baz danych Redis żeby nie mieszać danych.',
                solution:
                  'Osobne bazy Redis: db=0 dla cache, db=1 dla Celery, db=2 dla Channels. Docker Compose z health checks zapewnia, że Redis startuje przed aplikacją.',
                delay: 0,
              },
              {
                num: '02',
                title: 'ASGI + WSGI',
                problem:
                  'Przejście z WSGI (Gunicorn) na ASGI (Daphne) wymagało zrozumienia jak routing żądań HTTP i WebSocket działa jednocześnie w jednym procesie.',
                solution:
                  'Konfiguracja asgi.py z URLRouter dla Channels i Django WSGI wrapper dla standardowych requestów. Daphne jako główny serwer aplikacji.',
                delay: 0.05,
              },
              {
                num: '03',
                title: 'Dynamic pricing',
                problem:
                  'Wiele reguł cenowych może nakładać się na ten sam termin (sezon + święto + weekend + long-stay). Kolejność aplikowania reguł wpływa na finalną cenę.',
                solution:
                  'System priorytetów reguł z jawnie zdefiniowaną kolejnością: base → season → holiday → extra guests → long-stay discount. Snapshot ceny zapisywany atomowo przy tworzeniu rezerwacji.',
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
                    className="shrink-0 text-4xl leading-none font-bold"
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
              className="mb-2 text-xs tracking-widest text-[#22D3EE] uppercase"
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
              'Zapytania geospatial z PostGIS — od teorii do indeksów przestrzennych',
              'Wzorzec BFF w Next.js jako proxy layer między frontendem a API',
              'Zarządzanie złożonym stanem rezerwacji, deadline’ami i lifecycle',
              'Redis jako wielofunkcyjne narzędzie — cache, broker i channel layer',
              'Monitoring błędów, structured logging i myślenie o obserwowalności aplikacji',
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
              className="mb-2 text-xs tracking-widest text-[#22D3EE] uppercase"
              style={{ fontFamily: 'var(--font-dm-mono)' }}
            >
              ROADMAP
            </p>
            <h2
              className="text-2xl font-bold text-[#F0F9FF] sm:text-3xl"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Planowane rozszerzenia produktu
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#7EA8BD]">
              Funkcje, które naturalnie rozwijają StayMap w stronę bardziej kompletnego produktu
              turystycznego.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="flex flex-wrap gap-3">
            {[
              "AI 'Kiedy jechać?' — rekomendacja terminu",
              'Izochrony — wyszukiwanie po czasie dojazdu',
              'Stripe — płatności online',
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
              Chętnie opowiem więcej o decyzjach technicznych, architekturze i problemach, które
              rozwiązałem podczas budowy.
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
