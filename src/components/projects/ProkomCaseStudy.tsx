'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
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
  ArrowLeft,
  CheckCircle2,
  Server,
  Layers,
  Zap,
  ShieldAlert,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'
import { projects as projectsContent } from '@/content/pl/projects'
import { prokomArchitecture } from '@/content/projectArchitecture'
import { ProjectArchitecture } from './ProjectArchitecture'

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

const GALLERY_PATH = projectsContent.prokom.screens.galleryPath

const PROKOM_SCREENSHOTS = projectsContent.prokom.screens.items

const PROKOM_ASCII = `┌─────────────────────────────────────────┐
│    Nginx (Reverse Proxy + HTTPS/TLS)    │
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
│ ├ Clients      │  │         │  │ ├ Reminders│
│ ├ Inventory    │  │         │  │ ├ Backups  │
│ └ Audit Log    │  │         │  │ └ Reports  │
└────────────────┘  └─────────┘  └────────────┘`

export default function ProkomCaseStudy() {
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
            System do zarządzania procesem napraw sprzętu elektronicznego — od przyjęcia zgłoszenia,
            przez diagnozę i statusy, aż po odbiór przez klienta. Projekt inspirowany 2,5-letnim
            doświadczeniem w realnym środowisku serwisowym.
          </motion.p>

          {/* Stats */}
          <motion.div {...fadeUp(0.2)} className="mb-8 flex flex-wrap gap-3">
            {[
              { value: '3', label: 'panele użytkownika' },
              { value: 'RBAC', label: 'system uprawnień' },
              { value: '8+', label: 'zadań Celery async' },
              { value: 'HTTPS', label: "Let's Encrypt" },
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
              href="https://prokomserwis.pl/"
              target="_blank"
              rel="noopener noreferrer"
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
              href="https://github.com/krystian2077/prokom-system"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm text-[#7EA8BD] transition-colors hover:text-[#F0F9FF]"
            >
              📖 API w repo
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

      {/* ── SCREENSHOT ── */}
      <section className="py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0.1)}>
            <div className="relative h-80 w-full overflow-hidden rounded-xl border border-[rgba(34,211,238,0.1)]">
              <Image
                src="/images/main.png"
                alt="PRO-KOM Serwis System"
                fill
                sizes="100vw"
                className="object-cover object-top"
              />
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
              Problem, który rozwiązuję
            </h2>
          </motion.div>

          {/* Personal context card */}
          <motion.div
            {...fadeUp(0.05)}
            className="mb-6 rounded-xl border-l-4 border-[#22D3EE] p-6"
            style={{ backgroundColor: '#081420' }}
          >
            <p className="text-sm leading-relaxed text-[#7EA8BD]">
              Ten projekt zbudowałem z perspektywy osoby, która przez{' '}
              <span className="text-[#F0F9FF]">2,5 roku pracowała w serwisie elektroniki</span>.
              Dzięki temu dobrze rozumiałem, gdzie w codziennym procesie napraw ginie informacja, co
              spowalnia obsługę i czego realnie potrzebuje klient, pracownik oraz właściciel.
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
                  title: 'Brak samoobsługowego statusu naprawy',
                  desc: 'Klient musiał kontaktować się telefonicznie, żeby dowiedzieć się, co dzieje się z jego urządzeniem. System rozwiązuje to przez panel statusu, powiadomienia i przejrzystą historię zgłoszenia.',
                },
                {
                  Icon: Calendar,
                  title: 'Ręczne zarządzanie pracą serwisu',
                  desc: 'Proces opierał się na notatkach, arkuszach i ręcznym pilnowaniu priorytetów. Panel pracownika porządkuje naprawy w widoku Kanban, pokazuje statusy, przypisania i zadania wymagające reakcji.',
                },
                {
                  Icon: BarChart,
                  title: 'Brak jednego widoku danych operacyjnych',
                  desc: 'Właściciel potrzebuje szybkiego dostępu do danych: czasu napraw, obciążenia pracowników, popularnych usterek, przychodów i stanu magazynu. Panel admina zbiera te informacje w jednym miejscu.',
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
              Projekt indywidualny. Pomysł, architektura, implementacja — całość samodzielnie.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                Icon: Server,
                title: 'Modelowanie domeny',
                desc: 'Przełożyłem realny proces serwisowy na model danych Django: zgłoszenia, urządzenia, klienci, statusy, wyceny, części, historia zmian i lifecycle naprawy.',
                delay: 0,
              },
              {
                Icon: Layers,
                title: 'Trzy panele użytkownika',
                desc: 'Zaprojektowałem osobne przepływy dla klienta, pracownika i administratora: self-service dla klienta, Kanban dla staffu oraz panel zarządczy dla admina.',
                delay: 0.05,
              },
              {
                Icon: Zap,
                title: 'Zadania async i powiadomienia',
                desc: 'Wykorzystałem Celery i Redis do obsługi powiadomień, automatycznych przypomnień, backupów oraz zadań wykonywanych poza głównym request-response cycle.',
                delay: 0.1,
              },
              {
                Icon: ShieldAlert,
                title: 'Bezpieczeństwo i audyt',
                desc: 'Zaimplementowałem system ról i uprawnień, JWT auth, historię zmian, audit log oraz mechanizmy wspierające kontrolę dostępu do danych.',
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

      <ProjectArchitecture content={prokomArchitecture} technicalDiagram={PROKOM_ASCII} />

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
                Icon: LayoutDashboard,
                title: 'Kanban Board dla pracowników',
                desc: 'Drag-and-drop zmiana statusów napraw. Kolumny: Przyjęte → W trakcie → Gotowe → Odebrane. Widok priorytetów, przypisań i zgłoszeń wymagających reakcji.',
                delay: 0,
              },
              {
                Icon: Bell,
                title: 'Automatyczne powiadomienia',
                desc: 'Celery Beat uruchamia zadania związane ze zmianą statusów, przypomnieniami i komunikacją z klientem. Klient może śledzić naprawę bez telefonowania do serwisu.',
                delay: 0.05,
              },
              {
                Icon: ShieldCheck,
                title: 'RBAC + Audit Log',
                desc: 'Role: klient, pracownik, administrator. System zapisuje historię zmian statusów, edycji zgłoszeń i działań użytkowników, co ułatwia kontrolę oraz audyt.',
                delay: 0.1,
              },
              {
                Icon: Package,
                title: 'Zarządzanie magazynem',
                desc: 'Katalog części zamiennych, rezerwacja części pod naprawę, stany magazynowe, zamówienia hurtowni oraz powiadomienia o niskim stanie.',
                delay: 0.15,
              },
              {
                Icon: BarChart2,
                title: 'Analityka i raporty',
                desc: 'Dashboard admina pokazuje czas napraw, obciążenie pracowników, przychody, najpopularniejsze usterki i dane potrzebne do podejmowania decyzji.',
                delay: 0.2,
              },
              {
                Icon: Lock,
                title: 'Bezpieczeństwo i wdrożenie',
                desc: "HTTPS przez Let's Encrypt, ochrona CSRF/XSS, rate limiting, walidacja danych, autoryzacja po rolach oraz hashowanie haseł po stronie Django.",
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

      {/* DEMO VIEWS */}
      <section className="py-16">
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
              System w praktyce
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#7EA8BD]">
              Najważniejsze widoki panelu pracownika i administratora pokazujące realny workflow
              serwisu: obsługę zgłoszeń, Kanban, szczegóły naprawy, historię zmian, dashboard oraz
              zarządzanie procesem.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp(0.05)}
            className="mb-8 rounded-2xl border border-[rgba(34,211,238,0.14)] p-6 shadow-[0_0_40px_rgba(34,211,238,0.05)]"
            style={{ backgroundColor: '#081420' }}
          >
            <div className="flex gap-4">
              <Lock className="mt-1 h-5 w-5 shrink-0 text-[#22D3EE]" />
              <div className="space-y-3">
                <p className="text-sm leading-relaxed text-[#7EA8BD]">
                  Ze względu na poufność danych firmowych i danych klientów nie udostępniam
                  publicznego logowania do panelu pracownika oraz administratora. Zamiast tego
                  przygotowałem zanonimizowane widoki systemu, które pokazują najważniejsze elementy
                  workflow: obsługę zgłoszeń, Kanban pracownika, szczegóły naprawy, historię zmian,
                  dashboard administratora i zarządzanie procesem serwisowym.
                </p>
                <p className="text-sm leading-relaxed text-[#7EA8BD]">
                  Podczas rozmowy technicznej mogę przejść przez architekturę systemu, kod oraz
                  wybrane widoki panelu w formie prezentacji lub screen share.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROKOM_SCREENSHOTS.map((screen, i) => (
              <motion.article
                key={screen.src}
                {...fadeUp(i * 0.04)}
                className="group overflow-hidden rounded-2xl border border-[rgba(34,211,238,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(34,211,238,0.28)] hover:shadow-[0_18px_50px_rgba(34,211,238,0.08)]"
                style={{ backgroundColor: '#081420' }}
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-[rgba(34,211,238,0.08)] bg-[#050D12]">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050D12]/35 via-transparent to-transparent opacity-70" />
                </div>
                <div className="p-5">
                  <h3 className="mb-2 font-semibold text-[#F0F9FF]">{screen.title}</h3>
                  <p className="text-sm leading-relaxed text-[#7EA8BD]">{screen.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            {...fadeUp(0.12)}
            className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-[rgba(34,211,238,0.12)] p-6 sm:flex-row sm:items-center"
            style={{ backgroundColor: '#081420' }}
          >
            <p className="max-w-2xl text-sm leading-relaxed text-[#7EA8BD]">
              Mam przygotowaną pełną galerię ponad 30 widoków panelu pracownika i administratora —
              od zgłoszenia naprawy po dashboard, historię zmian i zarządzanie serwisem.
            </p>
            <Link
              href={GALLERY_PATH}
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#22D3EE] px-5 py-3 text-sm font-semibold text-[#050D12] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(34,211,238,0.25)]"
            >
              Zobacz pełną galerię widoków
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
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
              Najtrudniejsze problemy
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#7EA8BD]">
              Miejsca, w których projekt wymagał najwięcej decyzji architektonicznych.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                num: '01',
                title: 'Modelowanie lifecycle naprawy',
                problem:
                  'Naprawa przechodzi przez wiele stanów, a każdy status może uruchamiać inne akcje: powiadomienia, przypomnienia, zmianę widoczności dla klienta lub aktualizację kolejki pracownika.',
                solution:
                  '→ Enum-based status field, jawna logika dozwolonych przejść oraz zadania Celery uruchamiane przy zmianach statusu.',
                delay: 0,
              },
              {
                num: '02',
                title: 'RBAC z trzema różnymi UX flows',
                problem:
                  'Klient, pracownik i administrator mają różne potrzeby, uprawnienia i widoki tego samego zasobu. Ten sam obiekt naprawy musi być prezentowany inaczej zależnie od roli.',
                solution:
                  '→ Custom permission classes w DRF, osobne serializery i kontrolowana reprezentacja danych dla każdej roli.',
                delay: 0.05,
              },
              {
                num: '03',
                title: 'Implementacja bez gotowego wzorca',
                problem:
                  'To był mój pierwszy duży projekt z pełnym stackiem Django + Next.js + Docker, dlatego wiele decyzji architektonicznych musiałem podjąć samodzielnie.',
                solution:
                  '→ Modularna architektura, wydzielenie logiki do services/selectors/serializers oraz regularny code review z wykorzystaniem AI jako wsparcia.',
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
              'Jak przełożyć realne procesy biznesowe na model danych i lifecycle statusów',
              'Modułowa architektura Django — każda app ma jedną odpowiedzialność',
              'Clean Architecture w praktyce: selectors, services, serializers',
              'Docker + Nginx + Certbot — pełny proces wdrożenia aplikacji webowej',
              'Zarządzanie złożonymi uprawnieniami RBAC w DRF',
              'Budowanie z perspektywy użytkownika — doświadczenie w serwisie dało mi realny kontekst',
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

      {/* ── DEMO CHECKLIST ── */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp()}
            className="rounded-2xl border border-[rgba(34,211,238,0.12)] p-8"
            style={{ backgroundColor: '#081420' }}
          >
            <p
              className="mb-2 text-xs tracking-widest text-[#22D3EE] uppercase"
              style={{ fontFamily: 'var(--font-dm-mono)' }}
            >
              DEMO
            </p>
            <h2
              className="mb-6 text-2xl font-bold text-[#F0F9FF] sm:text-3xl"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Co możesz sprawdzić w demo
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                'zgłoszenie naprawy jako klient',
                'panel statusu naprawy',
                'Kanban board dla pracownika',
                'zmianę statusów i przypisań',
                'panel administratora',
                'historię zmian i audit log',
                'dokumentację API w repo / w kodzie',
              ].map((item, i) => (
                <motion.div key={item} {...fadeUp(i * 0.03)} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#22D3EE]" />
                  <p className="text-sm leading-relaxed text-[#7EA8BD]">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Chętnie opowiem więcej o architekturze, procesie serwisowym i decyzjach technicznych,
              które podjąłem podczas budowy.
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
                Zobacz drugi projekt →
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
