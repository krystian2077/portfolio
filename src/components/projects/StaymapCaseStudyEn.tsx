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
import type { ProjectArchitectureContent } from '@/content/projectArchitecture'
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

const PRODUCT_SCREENS_EN = [
  {
    title: 'Homepage and quick search',
    image: '/images/staymap-home.png',
    desc: 'The first product touchpoint: users choose location, dates and guests, then move straight into map-based results.',
    alt: 'StayMap Polska — homepage with accommodation search form',
  },
  {
    title: 'Search results on the map',
    image: '/images/staymap-search-map.png',
    desc: 'Map-first search combines offers, pins, filters and location context so users can judge where they actually want to stay.',
    alt: 'StayMap Polska — accommodation search results in map view',
  },
  {
    title: 'Host panel',
    image: '/images/staymap-host-panel.png',
    desc: 'The host panel keeps offers, bookings and availability management in one workflow instead of scattering them across separate tools.',
    alt: 'StayMap Polska — host panel',
  },
  {
    title: 'Offer details and booking',
    image: '/images/staymap-offer-details.png',
    desc: 'The offer view leads users from photos and place details through price calculation and the booking decision.',
    alt: 'StayMap Polska — accommodation offer details and booking flow',
  },
  {
    title: 'Offer comparison',
    image: '/images/staymap-compare.png',
    desc: 'The comparison view helps users evaluate several stays side by side when price alone is not enough to decide.',
    alt: 'StayMap Polska — comparison of selected accommodation offers',
  },
  {
    title: 'Polish AI search',
    image: '/images/staymap-ai-search.png',
    desc: 'Natural Polish-language queries support search when users describe what they need instead of clicking through a full filter set.',
    alt: 'StayMap Polska — accommodation search with AI assistance',
  },
]

const PRODUCT_SCREEN_ITEMS_EN = PRODUCT_SCREENS_EN.map(({ image, ...screen }) => ({
  ...screen,
  src: image,
}))

const DEMO_CHECKLIST_EN = [
  'accommodation search on the map',
  'offer filtering',
  'travel modes',
  'host panel',
  'booking flow',
  'Polish AI search',
  'real-time chat',
  'Swagger/OpenAPI documentation',
]

const architectureLabelsEn = {
  heading: 'System architecture',
  decisionHeading: 'Why this architecture?',
  technicalDiagram: 'Show technical ASCII diagram',
}

const staymapArchitectureEn: ProjectArchitectureContent = {
  description:
    'The architecture is split into layers: Next.js frontend, Django/DRF backend, WebSocket communication through Channels, PostgreSQL/PostGIS database and asynchronous background tasks with Celery.',
  layers: [
    {
      icon: 'client',
      name: 'Client',
      description: 'Browser and mobile users interacting with the booking platform.',
      elements: ['Browser', 'Mobile', 'Guest', 'Host'],
    },
    {
      icon: 'frontend',
      name: 'Frontend',
      description: 'User interface, routing, views and BFF proxy layer.',
      elements: ['Next.js 14', 'SSR/CSR', 'BFF proxy', 'TypeScript'],
    },
    {
      icon: 'api',
      name: 'API Layer',
      description: 'REST API, business logic, authentication and API contract documentation.',
      elements: ['Django 5', 'DRF', 'Swagger/OpenAPI', 'JWT'],
    },
    {
      icon: 'realtime',
      name: 'Real-time',
      description: 'WebSocket communication for chat and real-time status updates.',
      elements: ['Django Channels', 'Daphne ASGI', 'WebSocket', 'Events'],
    },
    {
      icon: 'data',
      name: 'Data & Geo',
      description: 'Data model, bookings, location and spatial queries.',
      elements: ['PostgreSQL', 'PostGIS', 'GeoDjango', 'Spatial indexes'],
    },
    {
      icon: 'async',
      name: 'Async & Integrations',
      description: 'Background jobs, cache, AI search and external integrations.',
      elements: ['Redis', 'Celery', 'OpenAI', 'Google OAuth', 'Nominatim', 'Overpass'],
    },
  ],
  decisions: [
    {
      title: 'BFF proxy in Next.js',
      description:
        'The frontend does not communicate directly with the backend. The proxy layer helps control requests, authentication and API structure.',
    },
    {
      title: 'ASGI for REST + WebSocket',
      description:
        'Daphne makes it possible to handle standard HTTP requests and real-time chat within one application architecture.',
    },
    {
      title: 'PostGIS for location-based search',
      description:
        'Location is the core of the product, so spatial queries are part of the data model instead of being an external add-on.',
    },
    {
      title: 'Redis in multiple roles',
      description:
        'Redis handles cache, Celery broker and the WebSocket channel layer while keeping responsibilities logically separated.',
    },
  ],
}

export default function StaymapCaseStudyEn() {
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
              href="/#projects"
              className="inline-flex items-center gap-1.5 text-xs text-[#3A5F73] transition-colors hover:text-[#22D3EE]"
              style={{ fontFamily: 'var(--font-dm-mono)' }}
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to projects
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
            A full-stack accommodation booking platform in Poland with a map-first approach, Polish
            AI search and real-time communication.
          </motion.p>

          {/* Stats */}
          <motion.div {...fadeUp(0.2)} className="mb-8 flex flex-wrap gap-3">
            {[
              { value: '12', label: 'Django modules' },
              { value: '44', label: 'Next.js views' },
              { value: '25', label: 'test files' },
              { value: '9', label: 'travel modes' },
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
              Product in practice
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#7EA8BD]">
              Key project views showing map-first search, the booking flow, the host panel and
              real-time communication.
            </p>
          </motion.div>

          <ScreenshotLightboxGrid
            items={PRODUCT_SCREEN_ITEMS_EN}
            className="grid gap-4 sm:grid-cols-2"
            imageSizes="(min-width: 640px) 50vw, 100vw"
            labels={{
              enlargeAria: 'Enlarge screenshot',
              enlarge: 'Enlarge',
              closeAria: 'Close preview',
              previewHeading: 'View preview',
              note: 'The screenshot shows a selected part of the StayMap Polska product. The demo is publicly available, and the technical architecture is described later in this case study.',
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
              What you can check in the demo
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {DEMO_CHECKLIST_EN.map((item) => (
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
              ORIGIN
            </p>
            <h2
              className="mb-8 text-2xl font-bold text-[#F0F9FF] sm:text-3xl"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Product problem
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-[#7EA8BD]">
              StayMap was created as a response to the problem of accommodation search, where
              location, price, availability and user needs are often scattered across different
              screens and filters.
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
                  title: 'Map as the main interface',
                  desc: 'In many platforms, the map is only an addition to the results list. In StayMap, location is the starting point — users discover offers directly on the map.',
                },
                {
                  Icon: TrendingUp,
                  title: 'Pricing without seasonal context',
                  desc: 'Accommodation prices depend on dates, length of stay, season, holidays and number of guests. The dynamic pricing engine handles these rules in one consistent process.',
                },
                {
                  Icon: Users,
                  title: 'Fragmented user journey',
                  desc: 'Guests, hosts and administrators often work in separate workflows. StayMap connects search, booking, communication, host management and moderation in one system.',
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

      {/* ── MY ROLE ── */}
      <section className="py-16" style={{ backgroundColor: '#050D12' }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="mb-8">
            <p
              className="mb-2 text-xs tracking-widest text-[#22D3EE] uppercase"
              style={{ fontFamily: 'var(--font-dm-mono)' }}
            >
              SCOPE
            </p>
            <h2
              className="text-2xl font-bold text-[#F0F9FF] sm:text-3xl"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              My role in the project
            </h2>
            <p className="mt-2 text-sm text-[#7EA8BD]">
              This was an individual project — I designed and built the full application myself:
              backend, API, data model, business logic, integrations, frontend and live demo
              deployment.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                Icon: Server,
                title: 'Backend architecture',
                desc: 'I designed the structure of 12 Django modules, model relationships, permission system and the booking lifecycle.',
                delay: 0,
              },
              {
                Icon: Globe,
                title: 'REST API + WebSocket',
                desc: 'I built 47 DRF endpoints with Swagger/OpenAPI documentation and an ASGI layer with Daphne handling both REST and WebSocket communication.',
                delay: 0.05,
              },
              {
                Icon: Database,
                title: 'Data and geolocation',
                desc: 'I designed the PostgreSQL/PostGIS database schema, spatial queries, geographic indexes and location-based offer search.',
                delay: 0.1,
              },
              {
                Icon: Cpu,
                title: 'Async tasks and integrations',
                desc: 'I added Celery tasks, Redis in multiple roles, OpenAI integration, Google OAuth, transactional email and external location data sources.',
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

      <ProjectArchitecture content={staymapArchitectureEn} labels={architectureLabelsEn} />

      {/* ── KEY FEATURES ── */}
      <section className="py-16" style={{ backgroundColor: '#050D12' }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="mb-8">
            <p
              className="mb-2 text-xs tracking-widest text-[#22D3EE] uppercase"
              style={{ fontFamily: 'var(--font-dm-mono)' }}
            >
              FEATURES
            </p>
            <h2
              className="text-2xl font-bold text-[#F0F9FF] sm:text-3xl"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Key technical features
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                Icon: MapPin,
                title: 'Map-first UX + PostGIS',
                desc: 'Geospatial accommodation search built with GeoDjango and PostGIS 3.4. Spatial queries, distance filtering, location-based ranking and integration with Nominatim and Overpass API.',
                delay: 0,
              },
              {
                Icon: DollarSign,
                title: 'Dynamic Pricing Engine',
                desc: 'Multi-layer pricing engine: seasons, Polish holidays, weekends, extra guest fees and long-stay discounts. The final price is saved as a snapshot at the moment of booking.',
                delay: 0.05,
              },
              {
                Icon: Bot,
                title: 'Polish AI Search',
                desc: 'OpenAI API interprets user queries in Polish and maps user intent to search filters. AI sessions include TTL and cost limits.',
                delay: 0.1,
              },
              {
                Icon: MessageSquare,
                title: 'Real-time Chat',
                desc: 'Django Channels + Daphne ASGI. WebSocket events: message.new, typing.start, typing.stop and message.read. Connection authorization is based on JWT.',
                delay: 0.15,
              },
              {
                Icon: Star,
                title: 'Blind Reviews',
                desc: 'Reviews are published only when both sides — guest and host — submit their opinion. This limits the influence of one review on the other and makes the process fairer.',
                delay: 0.2,
              },
              {
                Icon: Shield,
                title: 'Auth + Security',
                desc: 'JWT with token rotation and HTTP-only cookies, Google OAuth, upload validation and rate limiting for AI, auth and upload endpoints.',
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

      {/* ── CHALLENGES ── */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="mb-8">
            <p
              className="mb-2 text-xs tracking-widest text-[#22D3EE] uppercase"
              style={{ fontFamily: 'var(--font-dm-mono)' }}
            >
              CHALLENGES
            </p>
            <h2
              className="text-2xl font-bold text-[#F0F9FF] sm:text-3xl"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Hardest problems to solve
            </h2>
            <p className="mt-2 text-sm text-[#7EA8BD]">
              Areas where the project required real technical decisions.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                num: '01',
                title: 'Redis in 3 roles',
                problem:
                  'Redis had to work as application cache, Celery message broker and Django Channels layer at the same time, with proper database separation to avoid mixing data.',
                solution:
                  'Separate Redis databases: db=0 for cache, db=1 for Celery, db=2 for Channels. Docker Compose health checks ensure Redis starts before the application.',
                delay: 0,
              },
              {
                num: '02',
                title: 'ASGI + WSGI',
                problem:
                  'Moving from WSGI to ASGI required understanding how HTTP request routing and WebSocket routing can work together in one application process.',
                solution:
                  'asgi.py configuration with URLRouter for Channels and Django application wrapper for standard HTTP requests. Daphne as the main application server.',
                delay: 0.05,
              },
              {
                num: '03',
                title: 'Dynamic pricing',
                problem:
                  'Multiple pricing rules can overlap for the same date range: season, holiday, weekend and long-stay. The order of applying rules affects the final price.',
                solution:
                  'Rule priority system with explicit order: base → season → holiday → extra guests → long-stay discount. Price snapshot saved atomically when creating a booking.',
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

      {/* Learnings */}
      <section className="py-16" style={{ backgroundColor: '#050D12' }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="mb-8">
            <p
              className="mb-2 text-xs tracking-widest text-[#22D3EE] uppercase"
              style={{ fontFamily: 'var(--font-dm-mono)' }}
            >
              LEARNINGS
            </p>
            <h2
              className="text-2xl font-bold text-[#F0F9FF] sm:text-3xl"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              What I learned
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'ASGI vs WSGI architecture and when to use each of them',
              'Geospatial queries with PostGIS — from theory to spatial indexes',
              'BFF pattern in Next.js as a proxy layer between frontend and API',
              'Managing complex booking state, deadlines and lifecycle',
              'Redis as a multi-purpose tool — cache, broker and channel layer',
              'Error monitoring, structured logging and thinking about application observability',
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
              Planned product extensions
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#7EA8BD]">
              Features that naturally develop StayMap into a more complete travel product.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="flex flex-wrap gap-3">
            {[
              'AI “When to go?” — date recommendation',
              'Isochrones — search by travel time',
              'Stripe — online payments',
              'Travel diary — photos after the stay',
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
              Interested in this project?
            </h2>
            <p className="mb-8 text-[#7EA8BD]">
              I would be happy to talk more about the technical decisions, architecture and problems
              I solved while building it.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#22D3EE] px-6 py-3 text-sm font-semibold text-[#050D12] transition-opacity hover:opacity-90"
              >
                Contact me
              </Link>
              <Link
                href="/projects/prokom-system"
                className="inline-flex items-center gap-2 rounded-lg border border-[rgba(34,211,238,0.4)] px-6 py-3 text-sm text-[#22D3EE] transition-colors hover:bg-[rgba(34,211,238,0.08)]"
              >
                View the other project →
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
                  Next project
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
