'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui'

type BadgeType = 'PROJEKT' | 'KURS' | 'STUDIA' | 'PRACA' | 'EDUKACJA' | 'PASJA'

const badgeStyles: Record<BadgeType, string> = {
  PROJEKT: 'bg-[rgba(34,211,238,0.15)] text-[#22D3EE]',
  KURS: 'bg-[rgba(74,222,128,0.15)] text-[#4ADE80]',
  STUDIA: 'bg-[rgba(167,139,250,0.15)] text-[#A78BFA]',
  PRACA: 'bg-[rgba(251,146,60,0.15)] text-[#FB923C]',
  EDUKACJA: 'bg-[rgba(148,163,184,0.15)] text-[#94A3B8]',
  PASJA: 'bg-[rgba(244,114,182,0.15)] text-[#F472B6]',
}

interface TimelineItem {
  date: string
  badge: BadgeType
  active: boolean
  title: string
  description: string
}

const items: TimelineItem[] = [
  {
    date: '2025 – 2026',
    badge: 'PROJEKT',
    active: true,
    title: 'StayMap Polska + PRO-KOM System',
    description:
      'Dwa duże projekty produkcyjne z live demo. Django 5, DRF, PostGIS, Celery, WebSocket, Next.js 14, Docker.',
  },
  {
    date: 'XI 2025 – V 2026',
    badge: 'KURS',
    active: false,
    title: 'Python + Django + AI — LearnIt',
    description:
      '600h+ nauki: Python, OOP, Django, DRF, FastAPI, Flask, Docker, AWS, CI/CD, próbna rozmowa techniczna. Certyfikat wkrótce.',
  },
  {
    date: 'X – XII 2025',
    badge: 'KURS',
    active: false,
    title: 'Ready4AI',
    description:
      'LLM, chatboty, agenty AI, MCP servers, Prompt Engineering, Cursor, Claude Code, wdrożenia chmurowe. Projekt webowy od A do Z.',
  },
  {
    date: 'IX 2024 – teraz',
    badge: 'STUDIA',
    active: false,
    title: 'Informatyka — Programista Aplikacji Biznesowych',
    description:
      'Specjalność: aplikacje desktopowe (C#/WPF), internetowe (ASP.NET, PHP), mobilne (Xamarin), React, Entity Framework, bazy danych, sieci.',
  },
  {
    date: 'XI 2023 – V 2026',
    badge: 'PRACA',
    active: false,
    title: 'Specjalista ds. Sprzedaży — PRO-KOM',
    description:
      '2,5 roku w środowisku IT. Obsługa klientów B2B i B2C, wyceny dla firm, zarządzanie sklepem. Realne rozumienie procesów biznesowych.',
  },
  {
    date: 'wcześniej',
    badge: 'EDUKACJA',
    active: false,
    title: 'Technikum Informatyczne',
    description:
      'Fundamenty: sieci komputerowe, sprzęt, podstawy programowania. Tu zaczęła się pasja do IT.',
  },
  {
    date: 'zawsze',
    badge: 'PASJA',
    active: false,
    title: 'Programowanie jako pasja',
    description:
      '7 książek technicznych (Clean Code, Pragmatic Programmer, TDD i inne), podcasty o IT i AI, ciągły rozwój.',
  },
]

export function TimelineSection() {
  return (
    <Section id="experience" className="py-20">
      <div className="space-y-10">
        <div className="space-y-4">
          <p className="font-dm-mono text-xs uppercase tracking-widest text-[#22D3EE]">
            DOŚWIADCZENIE & EDUKACJA
          </p>
          <h2 className="font-sora text-3xl font-semibold text-[#F0F9FF]">
            Moja droga do Pythona
          </h2>
          <p className="text-base text-[#7EA8BD]">
            Konsekwentna ścieżka — od pasji do produkcyjnych projektów.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[7px] top-6 h-[calc(100%-3rem)] w-px bg-[rgba(34,211,238,0.2)]" />

          <div className="space-y-5">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start"
              >
                <div className="relative z-10 flex w-4 shrink-0 justify-center pt-[22px]">
                  {item.active ? (
                    <div className="h-4 w-4 rounded-full bg-[#22D3EE] ring-4 ring-[rgba(34,211,238,0.2)]" />
                  ) : (
                    <div className="h-3 w-3 rounded-full border-2 border-[#22D3EE] bg-[#143545]" />
                  )}
                </div>

                <div className="ml-6 flex-1 rounded-xl border border-[rgba(34,211,238,0.1)] bg-[#081420] p-5 transition-colors duration-200 hover:border-[rgba(34,211,238,0.2)]">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span
                      className={`font-dm-mono rounded-md px-2 py-0.5 text-xs font-medium ${badgeStyles[item.badge]}`}
                    >
                      {item.badge}
                    </span>
                    <span className="font-dm-mono text-xs text-[#3A5F73]">{item.date}</span>
                  </div>
                  <h3 className="font-sora mb-1.5 text-base font-semibold text-[#F0F9FF]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#7EA8BD]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
