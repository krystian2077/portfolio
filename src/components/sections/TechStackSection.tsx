'use client'

import { motion } from 'framer-motion'
import { Server, Database, Monitor, Cloud, Shield, Bot, type LucideIcon } from 'lucide-react'
import { useLocale } from 'next-intl'
import { Section } from '@/components/ui'

interface TechGroup {
  icon: LucideIcon
  title: string
  tags: string[]
}

const sharedGroups = {
  backend: [
    'Python 3.12',
    'Django 5',
    'DRF',
    'REST API',
    'FastAPI',
    'Flask',
    'Celery',
    'GeoDjango',
    'SQLAlchemy',
    'Alembic',
  ],
  databases: ['PostgreSQL', 'PostGIS', 'Redis', 'SQLite', 'SQL'],
  frontend: [
    'Next.js 15',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'Zustand',
    'React Query',
    'Radix UI',
  ],
  devops: ['Docker', 'Docker Compose', 'Nginx', 'GitHub Actions', 'Vercel', 'Render', 'Certbot SSL'],
  quality: ['JWT', 'Google OAuth', 'SimpleJWT', 'pytest', 'pytest-django', 'Playwright', 'Coverage', 'Faker'],
  ai: ['OpenAI API', 'LangChain', 'Claude', 'ChatGPT', 'GitHub Copilot', 'Cursor', 'Codex', 'Git', 'Postman', 'Swagger'],
}

const groupsPl: TechGroup[] = [
  { icon: Server, title: 'Backend', tags: sharedGroups.backend },
  { icon: Database, title: 'Bazy danych', tags: sharedGroups.databases },
  { icon: Monitor, title: 'Frontend', tags: sharedGroups.frontend },
  { icon: Cloud, title: 'DevOps & Infra', tags: sharedGroups.devops },
  { icon: Shield, title: 'Auth & Quality', tags: sharedGroups.quality },
  { icon: Bot, title: 'AI & Narzędzia', tags: sharedGroups.ai },
]

const groupsEn: TechGroup[] = [
  { icon: Server, title: 'Backend', tags: sharedGroups.backend },
  { icon: Database, title: 'Databases', tags: sharedGroups.databases },
  { icon: Monitor, title: 'Frontend', tags: sharedGroups.frontend },
  { icon: Cloud, title: 'DevOps & Infra', tags: sharedGroups.devops },
  { icon: Shield, title: 'Auth & Quality', tags: sharedGroups.quality },
  { icon: Bot, title: 'AI & Tools', tags: sharedGroups.ai },
]

export function TechStackSection() {
  const locale = useLocale()
  const isEn = locale === 'en'
  const groups = isEn ? groupsEn : groupsPl

  return (
    <Section id="stack" className="py-20">
      <div className="space-y-10">
        <div className="space-y-4">
          <p className="font-dm-mono text-xs uppercase tracking-widest text-[#22D3EE]">
            TECH STACK
          </p>
          <h2 className="font-sora text-3xl font-semibold text-[#F0F9FF]">
            {isEn ? 'Technologies I use' : 'Technologie, których używam'}
          </h2>
          <p className="text-base text-[#7EA8BD]">
            {isEn
              ? 'Not a random list of tools - only technologies I use in real projects.'
              : 'Nie przypadkowa lista technologii - tylko narzędzia, których używam w projektach.'}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-[rgba(34,211,238,0.1)] bg-[#081420] p-5"
            >
              <div className="mb-3 flex items-center gap-2">
                <group.icon className="h-5 w-5 text-[#22D3EE]" />
                <span className="text-sm font-semibold text-[#F0F9FF]">{group.title}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-dm-mono cursor-default rounded-md border border-[rgba(34,211,238,0.15)] bg-[#0C2030] px-2 py-1 text-xs text-[#7EA8BD] transition-colors duration-150 hover:border-[rgba(34,211,238,0.3)] hover:text-[#22D3EE]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
