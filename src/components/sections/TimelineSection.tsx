'use client'

import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import { Section } from '@/components/ui'

type BadgeType = 'PROJECT' | 'COURSE' | 'STUDIES' | 'WORK' | 'GROWTH'

const badgeStyles: Record<BadgeType, string> = {
  PROJECT: 'bg-[rgba(34,211,238,0.15)] text-[#22D3EE]',
  COURSE: 'bg-[rgba(74,222,128,0.15)] text-[#4ADE80]',
  STUDIES: 'bg-[rgba(167,139,250,0.15)] text-[#A78BFA]',
  WORK: 'bg-[rgba(251,146,60,0.15)] text-[#FB923C]',
  GROWTH: 'bg-[rgba(244,114,182,0.15)] text-[#F472B6]',
}

interface TimelineItem {
  date: string
  badge: BadgeType
  active: boolean
  title: string
  description: string
}

const itemsEn: TimelineItem[] = [
  {
    date: '2025 - 2026',
    badge: 'PROJECT',
    active: true,
    title: 'StayMap Polska + PRO-KOM System',
    description:
      'Two advanced projects with live demos. Django, DRF, PostgreSQL/PostGIS, Celery, Redis, WebSocket, Next.js and Docker. These projects show how I approach business applications: from process analysis, through backend and API, to a working user interface.',
  },
  {
    date: 'Nov 2025 - May 2026',
    badge: 'COURSE',
    active: false,
    title: 'Python + Django + AI - LearnIT',
    description:
      'Intensive practical course covering Python, OOP, SQL, Flask, Django, DRF, FastAPI, Docker, AWS basics, CI/CD, testing and technical interview preparation. Completed with a project and certificate.',
  },
  {
    date: 'Oct 2025 - Dec 2025',
    badge: 'COURSE',
    active: false,
    title: 'Ready4AI',
    description:
      'Practical course on using AI in software development: LLMs, chatbots, AI agents, prompt engineering, Claude, Cursor, AI-assisted code review, technical documentation and deploying a web application from idea to cloud.',
  },
  {
    date: 'Sep 2024 - present',
    badge: 'STUDIES',
    active: false,
    title: 'Computer Science - Business Application Developer',
    description:
      'Studies focused on designing and building business applications, object-oriented programming, databases, information systems, web applications, UI/UX and software engineering fundamentals.',
  },
  {
    date: 'Nov 2023 - May 2026',
    badge: 'WORK',
    active: false,
    title: 'Sales Specialist / Technical Sales - PRO-KOM',
    description:
      'Over 2 years in an IT environment: B2B and B2C customer support, technical consulting, preparing estimates, solving customer problems and understanding real company workflows. This experience helps me design applications from the perspective of the user and the business - not only the code.',
  },
  {
    date: 'for years',
    badge: 'GROWTH',
    active: false,
    title: 'Programming as a passion',
    description:
      'My interest in IT started with computers, hardware, networks and my first attempts at programming. Since then, I have been growing through projects, courses, technical books, podcasts and hands-on application building.',
  },
]

const itemsPl: TimelineItem[] = [
  {
    date: '2025 - 2026',
    badge: 'PROJECT',
    active: true,
    title: 'StayMap Polska + PRO-KOM System',
    description:
      'Dwa rozbudowane projekty z live demo. Django, DRF, PostgreSQL/PostGIS, Celery, Redis, WebSocket, Next.js i Docker. Projekty pokazują moje podejście do budowy aplikacji biznesowych: od analizy procesu, przez backend i API, po działający interfejs.',
  },
  {
    date: 'XI 2025 - V 2026',
    badge: 'COURSE',
    active: false,
    title: 'Python + Django + AI - LearnIT',
    description:
      'Intensywny kurs praktyczny obejmujący Python, OOP, SQL, Flask, Django, DRF, FastAPI, Docker, AWS basics, CI/CD, testowanie i przygotowanie do rozmów technicznych. Kurs zakończony projektem oraz certyfikatem.',
  },
  {
    date: 'X 2025 - XII 2025',
    badge: 'COURSE',
    active: false,
    title: 'Ready4AI',
    description:
      'Praktyczny kurs pracy z AI w tworzeniu oprogramowania: LLM, chatboty, agenci AI, prompt engineering, Claude, Cursor, code review z AI, dokumentacja techniczna oraz wdrożenie aplikacji webowej od pomysłu do chmury.',
  },
  {
    date: 'IX 2024 - teraz',
    badge: 'STUDIES',
    active: false,
    title: 'Informatyka - Programista Aplikacji Biznesowych',
    description:
      'Studia skoncentrowane na projektowaniu i tworzeniu aplikacji biznesowych, programowaniu obiektowym, bazach danych, systemach informatycznych, aplikacjach internetowych, UI/UX oraz podstawach inżynierii oprogramowania.',
  },
  {
    date: 'XI 2023 - V 2026',
    badge: 'WORK',
    active: false,
    title: 'Specjalista ds. Sprzedaży / Technical Sales - PRO-KOM',
    description:
      'Ponad 2 lata pracy w środowisku IT: obsługa klientów B2B i B2C, doradztwo techniczne, przygotowywanie wycen, rozwiązywanie problemów klientów i poznanie realnych procesów firmy. To doświadczenie pomaga mi projektować aplikacje z perspektywy użytkownika i biznesu, a nie tylko kodu.',
  },
  {
    date: 'od lat',
    badge: 'GROWTH',
    active: false,
    title: 'Programowanie jako pasja',
    description:
      'Moje zainteresowanie IT zaczęło się od komputerów, sprzętu, sieci i pierwszych prób programowania. Od tego czasu regularnie rozwijam się przez projekty, kursy, książki techniczne, podcasty i praktyczne budowanie aplikacji.',
  },
]

const badgeLabelsPl: Record<BadgeType, string> = {
  PROJECT: 'PROJEKT',
  COURSE: 'KURS',
  STUDIES: 'STUDIA',
  WORK: 'PRACA',
  GROWTH: 'ROZWÓJ',
}

export function TimelineSection() {
  const locale = useLocale()
  const isEn = locale === 'en'
  const items = isEn ? itemsEn : itemsPl

  return (
    <Section id="experience" className="py-20">
      <div className="space-y-10">
        <div className="space-y-4">
          <p className="font-dm-mono text-xs tracking-widest text-[#22D3EE] uppercase">
            {isEn ? 'EXPERIENCE & EDUCATION' : 'DOŚWIADCZENIE & EDUKACJA'}
          </p>
          <h2 className="font-sora text-3xl font-semibold text-[#F0F9FF]">
            {isEn ? 'My path to Python' : 'Moja droga do Pythona'}
          </h2>
          <p className="text-base text-[#7EA8BD]">
            {isEn
              ? 'Programming is not a random career choice for me - it is a direction I have been developing for years, from an interest in computers and technology, through studies, courses and work in an IT environment, to my own Django applications with working live demos.'
              : 'Programowanie to dla mnie nie przypadkowy wybór, tylko kierunek, który rozwijam od lat - od zainteresowania komputerami i technologią, przez studia, kursy i pracę w środowisku IT, aż po własne aplikacje Django z działającym demo.'}
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-6 left-[7px] h-[calc(100%-3rem)] w-px bg-[rgba(34,211,238,0.2)]" />

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
                      {isEn ? item.badge : badgeLabelsPl[item.badge]}
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
