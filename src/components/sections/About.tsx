'use client'

import { motion } from 'framer-motion'
import { Bot, Lightbulb } from 'lucide-react'
import Image from 'next/image'
import { useLocale } from 'next-intl'

const STATS_PL = [
  { value: '2', label: 'rozbudowane projekty z live demo' },
  { value: '12+', label: 'technologii użytych w projektach' },
  { value: '600h+', label: 'nauki Python, Django i AI' },
  { value: '2,5 roku', label: 'doświadczenia w środowisku IT' },
]

const STATS_EN = [
  { value: '2', label: 'advanced projects with live demos' },
  { value: '12+', label: 'technologies used in projects' },
  { value: '600h+', label: 'learning Python, Django and AI' },
  { value: '2.5 years', label: 'of experience in an IT environment' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

export function About() {
  const locale = useLocale()
  const isEn = locale === 'en'
  const stats = isEn ? STATS_EN : STATS_PL

  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#050D12' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 space-y-3"
        >
          <p
            className="text-xs tracking-widest text-[#22D3EE] uppercase"
            style={{ fontFamily: 'var(--font-dm-mono)' }}
          >
            {isEn ? 'ABOUT ME' : 'O MNIE'}
          </p>
          <h2
            className="text-3xl leading-tight font-bold text-[#F0F9FF]"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            {isEn
              ? 'From passion to applications that solve real problems'
              : 'Od pasji do aplikacji, które rozwiązują realne problemy'}
          </h2>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-5"
          >
            <div className="relative h-20 w-20 flex-shrink-0 sm:h-24 sm:w-24">
              <div className="absolute inset-0 rounded-full bg-[#22D3EE]/20 blur-xl" />
              <div className="relative h-full w-full overflow-hidden rounded-full border border-[rgba(34,211,238,0.35)] bg-[#081420] p-1 shadow-[0_18px_45px_rgba(0,0,0,0.32)] ring-1 ring-white/10">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="/images/krystian-potaczek-profile.jpg"
                    alt="Krystian Potaczek"
                    fill
                    sizes="(min-width: 640px) 96px, 80px"
                    className="object-cover"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/10 ring-inset" />
              </div>
            </div>
            <div>
              <div
                className="text-sm font-semibold text-[#F0F9FF]"
                style={{ fontFamily: 'var(--font-sora)' }}
              >
                Krystian Potaczek
              </div>
              <div
                className="mt-0.5 text-xs text-[#7EA8BD]"
                style={{ fontFamily: 'var(--font-dm-mono)' }}
              >
                Junior Python / Django Developer
              </div>
              <div
                className="mt-0.5 text-xs text-[#3A5F73]"
                style={{ fontFamily: 'var(--font-dm-mono)' }}
              >
                Backend-focused • Full-stack aware
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,65fr)_minmax(0,35fr)]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4 text-sm leading-relaxed text-[#7EA8BD]"
            >
              <p>
                {isEn
                  ? 'Programming was not a random choice for me. I have been interested in computers, technology and software development for years - starting with hardware, networking and IT fundamentals, and gradually moving deeper into code, web applications and backend development.'
                  : 'Programowanie nie pojawiło się u mnie przypadkowo. Od lat interesuję się komputerami, technologią i tworzeniem oprogramowania - zaczynałem od sprzętu, sieci i podstaw informatyki, a z czasem coraz mocniej wszedłem w kod, aplikacje webowe i backend.'}
              </p>
              <p>
                {isEn
                  ? 'Today I am developing as a Junior Python / Django Developer. I focus on building web applications, REST APIs, databases and business logic. Backend is the area I enjoy the most, but I also understand frontend and the full process of turning an idea into a working demo.'
                  : 'Dzisiaj rozwijam się jako Junior Python / Django Developer. Skupiam się na budowie aplikacji webowych, REST API, baz danych i logice biznesowej. Najbardziej interesuje mnie backend, ale dobrze rozumiem też frontend i cały proces tworzenia aplikacji od pomysłu do działającego demo.'}
              </p>
              <p>
                {isEn
                  ? 'For more than 2 years I worked at PRO-KOM, where I had direct contact with customers, technical estimates and everyday business processes. That experience strongly shaped how I approach software - I look not only at the code, but also at the user, the workflow and the real problem the system is supposed to solve.'
                  : 'Przez ponad 2 lata pracowałem w PRO-KOM, gdzie miałem bezpośredni kontakt z klientami, wycenami i codziennymi procesami firmy. To doświadczenie mocno wpłynęło na moje podejście do programowania - patrzę nie tylko na kod, ale też na użytkownika, proces i realny problem, który system ma rozwiązać.'}
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col gap-3"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={cardVariants}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02, borderColor: 'rgba(34,211,238,0.25)' }}
                  className="flex cursor-default items-center gap-4 rounded-xl border border-[rgba(34,211,238,0.12)] bg-[#081420] p-4 transition-all duration-200"
                >
                  <p
                    className="shrink-0 text-3xl font-bold text-[#22D3EE]"
                    style={{ fontFamily: 'var(--font-sora)' }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-sm text-[#7EA8BD]">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="rounded-xl border border-[rgba(34,211,238,0.12)] bg-[#081420] p-5">
                <div className="mb-2 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-[#22D3EE]" />
                  <span className="text-sm font-semibold text-[#F0F9FF]">
                    {isEn ? 'Developer mindset' : 'Filozofia developera'}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[#7EA8BD]">
                  {isEn
                    ? 'I do not start with a framework or a technology. First, I try to understand the problem, the user and the business process. Only then do I choose the right tools, design the architecture and implement a solution that is not only technically correct, but genuinely useful.'
                    : 'Nie zaczynam od frameworka ani technologii. Najpierw staram się dobrze zrozumieć problem, użytkownika i proces biznesowy. Dopiero później dobieram narzędzia, projektuję architekturę i implementuję rozwiązanie, które ma być nie tylko poprawne technicznie, ale przede wszystkim użyteczne.'}
                </p>
              </div>

              <div className="rounded-xl border border-[rgba(34,211,238,0.12)] bg-[#081420] p-5">
                <div className="mb-2 flex items-center gap-2">
                  <Bot className="h-5 w-5 text-[#22D3EE]" />
                  <span className="text-sm font-semibold text-[#F0F9FF]">AI-assisted workflow</span>
                </div>
                <p className="text-sm leading-relaxed text-[#7EA8BD]">
                  {isEn
                    ? 'I use Claude, ChatGPT, Codex and GitHub Copilot consciously - as support for research, code analysis, debugging, documentation and refactoring. I treat AI as a productivity tool, but technical decisions, architecture and responsibility for the final code always stay on my side.'
                    : 'Korzystam z Claude, ChatGPT, Codex i GitHub Copilota świadomie - jako wsparcia w researchu, analizie kodu, debugowaniu, dokumentacji i refaktoryzacji. AI traktuję jako narzędzie zwiększające produktywność, ale decyzje techniczne, architektura i odpowiedzialność za finalny kod zawsze pozostają po mojej stronie.'}
                </p>
              </div>
            </div>

            <p className="mt-4 text-center text-sm text-[#7EA8BD]">
              {isEn
                ? 'I am looking for a place where I can grow as a Python / Django Developer and learn from more experienced engineers.'
                : 'Szukam miejsca gdzie będę mógł rozwijać się jako Python / Django Developer i uczyć się od bardziej doświadczonych osób.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
