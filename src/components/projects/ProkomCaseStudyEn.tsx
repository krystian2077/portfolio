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
import type { ProjectArchitectureContent } from '@/content/projectArchitecture'
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

const GALLERY_PATH = '/projects/prokom-system/gallery'

const PROKOM_SCREENSHOTS_EN = [
  {
    title: 'Service landing page',
    desc: 'The public starting view presents the service offer, main repair request CTA and consistent PRO-KOM branding.',
    src: '/projects/prokom/prokom-public-home.png',
    alt: 'PRO-KOM Serwis System — public service homepage with repair request CTA',
  },
  {
    title: 'Repair request form',
    desc: 'A five-step form collects contact details, device information, delivery method and repair request summary.',
    src: '/projects/prokom/prokom-repair-form.png',
    alt: 'PRO-KOM Serwis System — online repair request form with ticket preview',
  },
  {
    title: 'Staff analytics',
    desc: 'The KPI view presents revenue, completed repairs, work in progress, overdue tickets and status distribution.',
    src: '/projects/prokom/prokom-employee-analytics.png',
    alt: 'PRO-KOM Serwis System — staff panel with repair statistics and analytics',
  },
  {
    title: 'My repairs',
    desc: 'The repair table allows quick filtering of assigned tickets, statuses, customers, devices and actions requiring attention.',
    src: '/projects/prokom/prokom-employee-repairs.png',
    alt: 'PRO-KOM Serwis System — list of repairs assigned to a staff member with status filters',
  },
  {
    title: 'Staff dashboard',
    desc: 'The operational panel combines active repair counters, next actions, work time and quick access to ticket handling.',
    src: '/projects/prokom/prokom-employee-dashboard.png',
    alt: 'PRO-KOM Serwis System — staff dashboard with repair counters and next action cards',
  },
  {
    title: 'Admin dashboard',
    desc: 'The management view shows status pipeline, technician workload, monthly revenue and process alerts.',
    src: '/projects/prokom/prokom-admin-dashboard.png',
    alt: 'PRO-KOM Serwis System — admin dashboard with KPIs, status pipeline and technician workload',
  },
]

const architectureLabelsEn = {
  heading: 'System architecture',
  decisionHeading: 'Why this architecture?',
  technicalDiagram: 'Show technical ASCII diagram',
}

const prokomArchitectureEn: ProjectArchitectureContent = {
  description:
    'The architecture was designed around three user panels: customer, staff and administrator. The Next.js frontend communicates with the Django/DRF backend, while background tasks are handled by Celery with Redis.',
  layers: [
    {
      icon: 'users',
      name: 'Users',
      description: 'Three user types with separate needs, permissions and workflows.',
      elements: ['Client Panel', 'Staff Panel', 'Admin Panel'],
    },
    {
      icon: 'frontend',
      name: 'Frontend',
      description: 'System interface, panel views, application state and API communication.',
      elements: ['Next.js 14', 'React Query', 'Zustand', 'TypeScript'],
    },
    {
      icon: 'backend',
      name: 'Backend',
      description: 'REST API, domain logic, authentication and request handling.',
      elements: ['Django 5.1', 'DRF', 'Gunicorn', 'JWT'],
    },
    {
      icon: 'modules',
      name: 'Domain Modules',
      description: 'Modules responsible for the main areas of the repair process.',
      elements: ['Repairs', 'Clients', 'Inventory', 'Analytics', 'Auth'],
    },
    {
      icon: 'data',
      name: 'Data & Async',
      description: 'Database, cache, task queue and background operations.',
      elements: ['PostgreSQL 16', 'Redis 7', 'Celery', 'Celery Beat'],
    },
    {
      icon: 'security',
      name: 'Security & Deploy',
      description: 'Access control, change history, reverse proxy and secure deployment.',
      elements: ['RBAC', 'Audit Log', 'Nginx', 'HTTPS', 'Certbot'],
    },
  ],
  decisions: [
    {
      title: 'Three separate user flows',
      description:
        'Customers, staff and administrators see the same repair process from different perspectives and have different needs.',
    },
    {
      title: 'Modular Django backend',
      description:
        'Repairs, customers, inventory, analytics and auth are separated into modules with clear responsibilities.',
    },
    {
      title: 'Celery for background jobs',
      description:
        'Notifications, reminders, backups and reports do not block the main request-response cycle.',
    },
    {
      title: 'RBAC and audit log',
      description:
        'The system requires access control, change history and the ability to reconstruct the full repair workflow.',
    },
  ],
}

export default function ProkomCaseStudyEn() {
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
            A system for managing electronics repair workflows — from device intake, through
            diagnosis and status updates, to customer pickup. Inspired by 2.5 years of experience in
            a real service environment.
          </motion.p>

          {/* Stats */}
          <motion.div {...fadeUp(0.2)} className="mb-8 flex flex-wrap gap-3">
            {[
              { value: '3', label: 'user panels' },
              { value: 'RBAC', label: 'permission system' },
              { value: '8+', label: 'Celery async tasks' },
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
              Live Demo
            </a>
            <a
              href="https://github.com/krystian2077/prokom-system"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[rgba(34,211,238,0.4)] px-5 py-2.5 text-sm text-[#22D3EE] transition-colors hover:bg-[rgba(34,211,238,0.08)]"
            >
              GitHub
            </a>
            <a
              href="https://github.com/krystian2077/prokom-system"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm text-[#7EA8BD] transition-colors hover:text-[#F0F9FF]"
            >
              API in repo
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
              ORIGIN
            </p>
            <h2
              className="mb-8 text-2xl font-bold text-[#F0F9FF] sm:text-3xl"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Problem I wanted to solve
            </h2>
          </motion.div>

          {/* Personal context card */}
          <motion.div
            {...fadeUp(0.05)}
            className="mb-6 rounded-xl border-l-4 border-[#22D3EE] p-6"
            style={{ backgroundColor: '#081420' }}
          >
            <p className="text-sm leading-relaxed text-[#7EA8BD]">
              I built this project from the perspective of someone who worked in an electronics
              service environment for <span className="text-[#F0F9FF]">2.5 years</span>. That helped
              me understand where information gets lost in the daily repair process, what slows down
              service work and what customers, staff and business owners actually need.
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
                  title: 'No self-service repair status',
                  desc: 'Customers had to call the service to ask what was happening with their device. The system solves this with a status panel, notifications and a clear repair history.',
                },
                {
                  Icon: Calendar,
                  title: 'Manual service workflow management',
                  desc: 'The process relied on notes, spreadsheets and manually tracking priorities. The staff panel organizes repairs in a Kanban view with statuses, assignments and items that require action.',
                },
                {
                  Icon: BarChart,
                  title: 'No single operational data view',
                  desc: 'The business owner needs quick access to repair times, technician workload, common issues, revenue and inventory status. The admin panel brings these data points into one place.',
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
              Individual project. Idea, architecture and implementation — built fully by me.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                Icon: Server,
                title: 'Domain modeling',
                desc: 'I translated a real repair workflow into a Django data model: repair tickets, devices, customers, statuses, quotes, parts, change history and repair lifecycle.',
                delay: 0,
              },
              {
                Icon: Layers,
                title: 'Three user panels',
                desc: 'I designed separate flows for customers, staff and administrators: self-service for customers, Kanban for staff and a management dashboard for admins.',
                delay: 0.05,
              },
              {
                Icon: Zap,
                title: 'Async tasks and notifications',
                desc: 'I used Celery and Redis to handle notifications, automatic reminders, backups and tasks executed outside the main request-response cycle.',
                delay: 0.1,
              },
              {
                Icon: ShieldAlert,
                title: 'Security and audit',
                desc: 'I implemented roles and permissions, JWT auth, change history, audit log and mechanisms supporting controlled access to data.',
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

      <ProjectArchitecture content={prokomArchitectureEn} labels={architectureLabelsEn} />

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
                Icon: LayoutDashboard,
                title: 'Staff Kanban Board',
                desc: 'Drag-and-drop repair status changes. Columns: Accepted → In progress → Ready → Picked up. View of priorities, assignments and tickets requiring action.',
                delay: 0,
              },
              {
                Icon: Bell,
                title: 'Automatic notifications',
                desc: 'Celery Beat triggers tasks related to status changes, reminders and customer communication. Customers can track repair progress without calling the service.',
                delay: 0.05,
              },
              {
                Icon: ShieldCheck,
                title: 'RBAC + Audit Log',
                desc: 'Roles: customer, staff member and administrator. The system records status changes, ticket edits and user actions, making control and audit easier.',
                delay: 0.1,
              },
              {
                Icon: Package,
                title: 'Inventory management',
                desc: 'Spare parts catalog, reserving parts for repairs, stock levels, supplier orders and low-stock notifications.',
                delay: 0.15,
              },
              {
                Icon: BarChart2,
                title: 'Analytics and reports',
                desc: 'The admin dashboard shows repair times, staff workload, revenue, most common issues and data needed for operational decisions.',
                delay: 0.2,
              },
              {
                Icon: Lock,
                title: 'Security and deployment',
                desc: 'HTTPS with Let’s Encrypt, CSRF/XSS protection, rate limiting, data validation, role-based authorization and Django password hashing.',
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
              System in practice
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#7EA8BD]">
              Key staff and admin panel views showing the real repair workflow: ticket handling,
              Kanban, repair details, change history, dashboard and service process management.
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
                  For confidentiality reasons, I do not provide public login access to the staff and
                  administrator panels. Instead, I prepared anonymized system views that show the most
                  important workflow elements: ticket handling, staff Kanban, repair details, change
                  history, admin dashboard and service process management.
                </p>
                <p className="text-sm leading-relaxed text-[#7EA8BD]">
                  During a technical interview, I can walk through the system architecture, code and
                  selected panel views via presentation or screen share.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROKOM_SCREENSHOTS_EN.map((screen, i) => (
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
              I prepared a full gallery of over 30 staff and admin panel views — from repair intake
              to dashboards, change history and service management.
            </p>
            <Link
              href={GALLERY_PATH}
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#22D3EE] px-5 py-3 text-sm font-semibold text-[#050D12] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(34,211,238,0.25)]"
            >
              View full gallery →
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
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
              Hardest problems
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#7EA8BD]">
              Areas where the project required the most architectural decisions.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                num: '01',
                title: 'Modeling the repair lifecycle',
                problem:
                  'A repair ticket goes through many states, and each status can trigger different actions: notifications, reminders, customer visibility changes or staff queue updates.',
                solution:
                  'Enum-based status field, explicit transition rules and Celery tasks triggered on status changes.',
                delay: 0,
              },
              {
                num: '02',
                title: 'RBAC with three different UX flows',
                problem:
                  'Customers, staff members and administrators have different needs, permissions and views of the same resource. The same repair object must be represented differently depending on the user role.',
                solution:
                  'Custom DRF permission classes, separate serializers and controlled data representation for each role.',
                delay: 0.05,
              },
              {
                num: '03',
                title: 'Implementation without a ready-made pattern',
                problem:
                  'This was my first large project with the full Django + Next.js + Docker stack, so many architectural decisions had to be made independently.',
                solution:
                  'Modular architecture, moving logic into services/selectors/serializers and regular code review with AI as support.',
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
              'How to translate real business processes into a data model and status lifecycle',
              'Modular Django architecture — each app has a clear responsibility',
              'Clean Architecture in practice: selectors, services and serializers',
              'Docker + Nginx + Certbot — full web application deployment process',
              'Managing complex RBAC permissions in DRF',
              'Building from the user’s perspective — service experience gave me real context',
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
              What you can check in the demo
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                'repair request as a customer',
                'repair status panel',
                'staff Kanban board',
                'status and assignment changes',
                'administrator panel',
                'change history and audit log',
                'API documentation in the repo / code',
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
              Interested in this project?
            </h2>
            <p className="mb-8 text-[#7EA8BD]">
              I would be happy to talk more about the architecture, service process and technical
              decisions I made while building it.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#22D3EE] px-6 py-3 text-sm font-semibold text-[#050D12] transition-opacity hover:opacity-90"
              >
                Contact me
              </Link>
              <Link
                href="/projects/staymap-polska"
                className="inline-flex items-center gap-2 rounded-lg border border-[rgba(34,211,238,0.4)] px-6 py-3 text-sm text-[#22D3EE] transition-colors hover:bg-[rgba(34,211,238,0.08)]"
              >
                View the other project →
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
                  Previous project
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
