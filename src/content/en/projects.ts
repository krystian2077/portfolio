export const projects = {
  eyebrow: 'Featured projects',
  title: 'Case studies, not just screenshots',
  subtitle:
    'Two core projects solving real business problems, plus this website as a separate engineering project.',
  actions: {
    liveDemo: 'Live Demo',
    github: 'GitHub',
    caseStudy: 'Case Study',
  },
  staymap: {
    badge: 'Flagship Project',
    title: 'StayMap Polska',
    description:
      'Production marketplace for accommodation in Poland. Map-first UX, Polish AI search, dynamic pricing, real-time chat, full host panel, and moderation.',
    stats: '12 modules · 44 views · 25 test files · 9 travel modes',
    hero: {
      badge: 'Flagship Project',
      title: 'StayMap Polska',
      subtitle:
        'Map-first marketplace for domestic accommodation in Poland. Dynamic pricing, AI search, and real-time chat.',
      cta: {
        live: 'Live Demo',
        github: 'GitHub',
      },
      links: {
        live: 'https://staymap-polska.vercel.app/',
        github: 'https://github.com/krystian2077/staymap-polska',
      },
    },
    problem: {
      title: 'Problem',
      body: 'There is no strong local map-first marketplace, and pricing rarely reflects Polish seasonality and holidays.',
    },
    role: {
      title: 'My role',
      body: 'Backend-focused ownership: API, geosearch, pricing engine, WebSocket chat, Celery tasks, and integrations.',
    },
    myRole: {
      title: 'My role',
      items: [
        'Designed and implemented the Django + DRF backend (domain modules, API contracts, validation rules).',
        'Implemented PostGIS-powered geosearch and ranking logic for map-first discovery.',
        'Built a dynamic pricing engine (seasonality, holidays, guest surcharges, long-stay discounts).',
        'Implemented realtime chat with Django Channels (message, typing, read events).',
        'Integrated external services: OpenAI-compatible API, Nominatim, Overpass, SMTP, and OAuth.',
      ],
    },
    architecture: {
      title: 'Architecture',
      body: 'Next.js (BFF) -> Daphne ASGI -> Django REST + Channels -> PostgreSQL + PostGIS + Redis + Celery',
    },
    metrics: {
      title: 'Project scale',
      items: [
        '12 backend modules (Django apps)',
        '44 frontend views (Next.js)',
        '25 test files',
        '9 travel modes',
      ],
    },
    features: {
      title: 'Key features',
      items: [
        'Map-first discovery',
        'Dynamic pricing engine',
        'Polish AI search',
        'Realtime chat (WebSocket)',
        'Blind-release reviews',
        'Host panel and moderation',
      ],
    },
    challenges: {
      title: 'Biggest challenges',
      problemLabel: 'Problem',
      solutionLabel: 'Solution',
      items: [
        {
          problem: 'Integrating PostGIS with listing ranking for a map-first UX.',
          solution:
            'Implemented a dedicated geospatial query layer and tuned ranking behavior for real discovery patterns.',
        },
        {
          problem: 'Using Redis in three roles: cache, Celery broker, and channel layer.',
          solution:
            'Separated configuration boundaries and operating patterns to avoid performance contention.',
        },
        {
          problem: 'Running REST and WebSocket traffic in one ASGI architecture.',
          solution:
            'Set up a coherent Daphne + Channels setup with clear boundaries and reliable realtime event flow.',
        },
      ],
    },
    stackRationale: {
      title: 'Stack rationale',
      items: [
        {
          tech: 'Django + DRF',
          why: 'Fast delivery of a modular backend and maintainable API for complex domain flows.',
        },
        {
          tech: 'PostgreSQL + PostGIS',
          why: 'Essential for geosearch, location filters, and map-based ranking.',
        },
        {
          tech: 'Redis + Celery + Channels',
          why: 'Enables async jobs and realtime messaging in one backend architecture.',
        },
        {
          tech: 'Next.js App Router',
          why: 'Scalable frontend with SSR/CSR flexibility and BFF proxy patterns.',
        },
      ],
    },
    screens: {
      title: 'Screens / mockups',
      placeholder: 'Coming soon - final product screenshots.',
      items: ['Listing map + filters', 'Host dashboard', 'Realtime chat', 'Booking flow'],
    },
    whatILearned: {
      title: 'What I learned',
      body: 'Geospatial queries, ASGI architecture, complex pricing rules, and production-grade integrations.',
    },
    next: {
      title: 'Roadmap',
      body: 'More E2E tests, stronger monitoring, and geosearch query optimization.',
    },
  },
  prokom: {
    badge: 'Business Solution',
    title: 'PRO-KOM Service System',
    description:
      'Repair management system for electronics service teams. Client, staff, and admin panels, Kanban board, Celery async jobs, and process automation.',
    stats: '3 user panels · RBAC · Audit log · SSL/TLS',
    hero: {
      badge: 'Business Solution',
      title: 'PRO-KOM Service System',
      subtitle: 'Advanced repair workflow platform with client, staff, and admin panels.',
      cta: {
        live: 'Live Demo',
        github: 'GitHub',
      },
      links: {
        live: 'https://prokomserwis.pl/',
        github: 'https://github.com/krystian2077/prokom-system',
      },
    },
    problem: {
      title: 'Problem',
      body: 'Small and medium repair businesses need process automation and real-time repair tracking.',
    },
    role: {
      title: 'My role',
      body: 'System design, backend implementation, Celery async jobs, reporting, and operational flows.',
    },
    myRole: {
      title: 'My role',
      items: [
        'Mapped the full repair lifecycle from intake to completion and handover.',
        'Implemented Django REST APIs for client, staff, and admin workflows.',
        'Automated operations using Celery (notifications, reports, scheduled jobs).',
        'Designed RBAC access model and auditable change history.',
        'Aligned frontend-backend flow for practical day-to-day service operations.',
      ],
    },
    architecture: {
      title: 'Architecture',
      body: 'Django REST -> PostgreSQL -> Redis -> Celery -> Next.js frontend, Docker, Nginx',
    },
    metrics: {
      title: 'Project scale',
      items: [
        '3 user panels (client, staff, admin)',
        'RBAC + audit log',
        'Operational workflow automation',
        'Docker + Nginx + TLS infrastructure',
      ],
    },
    features: {
      title: 'Key features',
      items: [
        'Online repair submission',
        'Kanban workflow for staff',
        'Automated notifications',
        'RBAC and audit log',
        'Exportable reports',
        'Scheduling calendar',
      ],
    },
    challenges: {
      title: 'Biggest challenges',
      problemLabel: 'Problem',
      solutionLabel: 'Solution',
      items: [
        {
          problem: 'Mapping real repair shop operations into a robust data model.',
          solution:
            'Defined clear lifecycle states and entity relationships to mirror real service processes.',
        },
        {
          problem: 'Managing Celery queues for different operational workloads.',
          solution:
            'Split async tasks by priority and workload type to keep execution predictable.',
        },
        {
          problem: 'Security and granular permissions across multiple panels.',
          solution:
            'Implemented RBAC policy checks per action and endpoint with full auditability.',
        },
      ],
    },
    stackRationale: {
      title: 'Stack rationale',
      items: [
        {
          tech: 'Django + DRF',
          why: 'Fast modular backend development with strong administrative support.',
        },
        {
          tech: 'PostgreSQL + Redis',
          why: 'Reliable transactional data with fast queuing and caching.',
        },
        {
          tech: 'Celery',
          why: 'Critical for non-blocking operational automation tasks.',
        },
        {
          tech: 'Next.js + TypeScript',
          why: 'Maintainable multi-panel frontend with a clean UX and clear structure.',
        },
      ],
    },
    screens: {
      title: 'Screens / mockups',
      placeholder: 'Coming soon - final service system screenshots.',
      items: ['Client panel', 'Staff Kanban board', 'Admin panel', 'Schedule view'],
    },
    whatILearned: {
      title: 'What I learned',
      body: 'Translating business processes into data models, modular Django architecture, and Redis/Celery scaling.',
    },
    next: {
      title: 'Roadmap',
      body: 'UX improvements, accounting integrations, and automated backups.',
    },
  },
  portfolio: {
    title: 'Portfolio Website',
    description:
      'This website - a premium personal brand experience built with Next.js 15, focused on performance, i18n, and UX.',
    cta: 'View code',
  },
}
