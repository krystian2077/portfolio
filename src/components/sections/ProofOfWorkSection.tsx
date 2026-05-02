'use client'

import { motion } from 'framer-motion'
import {
  Server,
  MapPin,
  Cpu,
  Zap,
  Shield,
  Container,
  Globe,
  FlaskConical,
  Bot,
  FileCode,
  type LucideIcon,
} from 'lucide-react'
import { useLocale } from 'next-intl'
import { Section } from '@/components/ui'

interface ProofCard {
  icon: LucideIcon
  title: string
  description: string
}

const cardsPl: ProofCard[] = [
  {
    icon: Server,
    title: 'Django + DRF',
    description:
      'REST API dla StayMap - rezerwacje, autoryzacja, panel hosta, moderacja i AI search. 47 endpointów oraz dokumentacja Swagger/OpenAPI.',
  },
  {
    icon: MapPin,
    title: 'PostgreSQL + PostGIS + GeoDjango',
    description:
      'Geowyszukiwanie noclegów na mapie w StayMap. PostgreSQL z PostGIS, zapytania przestrzenne, filtrowanie po lokalizacji i ranking ofert według odległości.',
  },
  {
    icon: Cpu,
    title: 'Celery + Redis',
    description:
      'Redis jako cache, broker Celery i Channels layer. Zadania asynchroniczne w StayMap: cleanup, auto-anulowanie rezerwacji i przypomnienia.',
  },
  {
    icon: Zap,
    title: 'WebSocket + Channels',
    description:
      'Real-time chat w StayMap oparty o Django Channels i Daphne ASGI. Eventy: message.new, typing i read.',
  },
  {
    icon: Shield,
    title: 'JWT + Google OAuth',
    description:
      'Autoryzacja z rotacją tokenów i HTTP-only cookies w StayMap. RBAC oraz kontrola dostępu w PRO-KOM System.',
  },
  {
    icon: Container,
    title: 'Docker + Compose',
    description:
      'Środowisko dev/prod dla obu głównych projektów. Docker Compose, Nginx reverse proxy i Certbot SSL w PRO-KOM System.',
  },
  {
    icon: Globe,
    title: 'Next.js App Router',
    description:
      'BFF proxy pattern, SSR/CSR i 44 widoki w StayMap. To portfolio zbudowane w Next.js 15.',
  },
  {
    icon: FlaskConical,
    title: 'pytest + Playwright',
    description:
      '25 plików testów backendu w StayMap: pytest-django, Faker i testy logiki aplikacji. E2E testy frontendu przez Playwright.',
  },
  {
    icon: Bot,
    title: 'OpenAI API + LangChain',
    description:
      'AI search po polsku w StayMap - interpretacja języka naturalnego i mapowanie intencji na filtry. Chatboty w LangChain z historią rozmowy.',
  },
  {
    icon: FileCode,
    title: 'Swagger / OpenAPI',
    description:
      'Automatyczna dokumentacja API przez drf-spectacular w StayMap. Kontrakt REST dostępny w Swagger/OpenAPI.',
  },
]

const cardsEn: ProofCard[] = [
  {
    icon: Server,
    title: 'Django + DRF',
    description:
      'REST API for StayMap - bookings, authentication, host panel, moderation and AI search. 47 endpoints with Swagger/OpenAPI documentation.',
  },
  {
    icon: MapPin,
    title: 'PostgreSQL + PostGIS + GeoDjango',
    description:
      'Geospatial accommodation search in StayMap. PostgreSQL with PostGIS, spatial queries, location-based filtering and ranking offers by distance.',
  },
  {
    icon: Cpu,
    title: 'Celery + Redis',
    description:
      'Redis used as cache, Celery broker and Channels layer. Asynchronous tasks in StayMap: cleanup, automatic booking cancellation and reminders.',
  },
  {
    icon: Zap,
    title: 'WebSocket + Channels',
    description:
      'Real-time chat in StayMap built with Django Channels and Daphne ASGI. Events: message.new, typing and read status.',
  },
  {
    icon: Shield,
    title: 'JWT + Google OAuth',
    description:
      'Authentication with token rotation and HTTP-only cookies in StayMap. RBAC and access control in PRO-KOM System.',
  },
  {
    icon: Container,
    title: 'Docker + Compose',
    description:
      'Development and production environments for both main projects. Docker Compose, Nginx reverse proxy and Certbot SSL in PRO-KOM System.',
  },
  {
    icon: Globe,
    title: 'Next.js App Router',
    description:
      'BFF proxy pattern, SSR/CSR and 44 views in StayMap. This portfolio is built with Next.js 15.',
  },
  {
    icon: FlaskConical,
    title: 'pytest + Playwright',
    description:
      '25 backend test files in StayMap: pytest-django, Faker and application logic tests. End-to-end frontend tests with Playwright.',
  },
  {
    icon: Bot,
    title: 'OpenAI API + LangChain',
    description:
      'Polish AI search in StayMap - natural language interpretation and mapping user intent to filters. LangChain chatbots with conversation history.',
  },
  {
    icon: FileCode,
    title: 'Swagger / OpenAPI',
    description:
      'Automatic API documentation generated with drf-spectacular in StayMap. REST contract available through Swagger/OpenAPI.',
  },
]

export function ProofOfWorkSection() {
  const locale = useLocale()
  const isEn = locale === 'en'
  const cards = isEn ? cardsEn : cardsPl

  return (
    <Section id="proof-of-work" className="py-20">
      <div className="space-y-10">
        <div className="space-y-4">
          <p className="font-dm-mono text-xs tracking-widest text-[#22D3EE] uppercase">
            {isEn ? 'PROOF OF WORK' : 'PROOF OF WORK'}
          </p>
          <h2 className="font-sora text-3xl font-semibold text-[#F0F9FF]">
            {isEn ? 'Not just icons. Concrete proof.' : 'Nie ikonki. Konkretne dowody.'}
          </h2>
          <p className="text-base text-[#7EA8BD]">
            {isEn
              ? 'Every technology below is connected to a real project where I actually used it.'
              : 'Każda technologia poniżej jest powiązana z konkretnym projektem, w którym faktycznie jej użyłem.'}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-xl border border-[rgba(34,211,238,0.1)] bg-[#081420] p-5 transition-colors duration-200 hover:border-[rgba(34,211,238,0.25)]"
            >
              <div className="flex items-start gap-4">
                <div className="mt-0.5 shrink-0">
                  <card.icon className="h-8 w-8 text-[#22D3EE]" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-dm-mono text-sm font-semibold text-[#F0F9FF]">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#7EA8BD]">{card.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
