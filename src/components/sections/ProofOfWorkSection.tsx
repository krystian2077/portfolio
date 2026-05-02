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
import { Section } from '@/components/ui'

interface ProofCard {
  icon: LucideIcon
  title: string
  description: string
}

const cards: ProofCard[] = [
  {
    icon: Server,
    title: 'Django + DRF',
    description:
      'REST API StayMap — rezerwacje, auth, hosty, moderacja, AI search. 47 endpointów, pełna dokumentacja Swagger.',
  },
  {
    icon: MapPin,
    title: 'PostGIS + GeoDjango',
    description:
      'Geowyszukiwanie noclegów na mapie w StayMap. Zapytania przestrzenne, ranking ofert po lokalizacji.',
  },
  {
    icon: Cpu,
    title: 'Celery + Redis',
    description:
      'Redis w 3 rolach: cache, Celery broker, Channels layer. 8 zadań async w StayMap: cleanup, auto-anulowanie, przypomnienia.',
  },
  {
    icon: Zap,
    title: 'WebSocket + Channels',
    description:
      'Real-time chat w StayMap przez Django Channels + Daphne ASGI. Eventy: message.new, typing, read.',
  },
  {
    icon: Shield,
    title: 'JWT + Google OAuth',
    description:
      'Autoryzacja z rotacją tokenów i HTTP-only cookies w StayMap. RBAC + ABAC w PRO-KOM System.',
  },
  {
    icon: Container,
    title: 'Docker + Compose',
    description:
      'Środowisko dev/prod dla obu projektów. Nginx reverse proxy + Certbot SSL w PRO-KOM System.',
  },
  {
    icon: Globe,
    title: 'Next.js 14 App Router',
    description:
      'BFF proxy pattern, SSR/CSR, 44 widoki w StayMap. To portfolio zbudowane w Next.js 15.',
  },
  {
    icon: FlaskConical,
    title: 'pytest + Playwright',
    description:
      '25 plików testów backend w StayMap (pytest-django + Faker). E2E testy frontend przez Playwright.',
  },
  {
    icon: Bot,
    title: 'OpenAI API + LangChain',
    description:
      'AI search po polsku w StayMap — interpretacja naturalnego języka → filtry. Chatboty w LangChain z historią rozmowy.',
  },
  {
    icon: FileCode,
    title: 'Swagger / OpenAPI',
    description:
      'Auto-dokumentacja API przez drf-spectacular w StayMap. Pełny kontrakt REST dostępny live.',
  },
]

export function ProofOfWorkSection() {
  return (
    <Section id="proof-of-work" className="py-20">
      <div className="space-y-10">
        <div className="space-y-4">
          <p className="font-dm-mono text-xs uppercase tracking-widest text-[#22D3EE]">
            PROOF OF WORK
          </p>
          <h2 className="font-sora text-3xl font-semibold text-[#F0F9FF]">
            Nie ikonki. Konkretne dowody.
          </h2>
          <p className="text-base text-[#7EA8BD]">
            Każda technologia jest powiązana z realnym projektem gdzie ją zastosowałem.
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
