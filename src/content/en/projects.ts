export const projects = {
  eyebrow: 'PROJECTS',
  title: 'Real applications. Working demos.',
  subtitle:
    'Not just technical exercises - systems built to solve real problems.',
  actions: {
    liveDemo: 'Live Demo',
    github: 'GitHub',
    caseStudy: 'Case Study ->',
  },
  staymap: {
    badge: 'Flagship Project',
    title: 'StayMap Polska',
    description:
      'A full-stack accommodation booking platform in Poland with a map-first approach.',
    longDescription:
      'Polish AI search, dynamic pricing engine, real-time chat via WebSocket, full host panel and content moderation. Built with Django 5 + DRF, PostGIS for geospatial search and Celery for asynchronous tasks.',
    stats: '12 modules - 44 views - 25 tests - 9 travel modes',
    imageAlt: 'StayMap Polska - accommodation booking platform in Poland',
    hero: {
      badge: 'Flagship Project',
      title: 'StayMap Polska',
      subtitle:
        'A full-stack accommodation booking platform in Poland with a map-first approach.',
      cta: {
        live: 'Live Demo',
        github: 'GitHub',
      },
      links: {
        live: 'https://www.staymap-polska.pl/',
        github: 'https://github.com/krystian2077/staymap-polska',
      },
    },
    problem: {
      title: 'Problem',
      body: 'There is no strong local map-first marketplace, and pricing rarely reflects Polish seasonality and holidays.',
    },
    role: {
      title: 'My role',
      body: 'Backend-focused ownership: API, geospatial search, pricing engine, WebSocket chat, Celery tasks and integrations.',
    },
    myRole: {
      title: 'My role',
      items: [
        'Designed and implemented the Django + DRF backend: domain modules, API contracts and validation rules.',
        'Implemented PostGIS-powered geospatial search and ranking logic for map-first discovery.',
        'Built a dynamic pricing engine covering seasonality, holidays, guest surcharges and long-stay discounts.',
        'Implemented real-time chat with Django Channels: message, typing and read events.',
        'Integrated external services: OpenAI-compatible API, Nominatim, Overpass, SMTP and OAuth.',
      ],
    },
    architecture: {
      title: 'Architecture',
      body: 'Next.js BFF -> Daphne ASGI -> Django REST + Channels -> PostgreSQL + PostGIS + Redis + Celery',
    },
    metrics: {
      title: 'Project scale',
      items: ['12 modules', '44 views', '25 tests', '9 travel modes'],
    },
    features: {
      title: 'Key features',
      items: [
        'Map-first discovery',
        'Dynamic pricing engine',
        'Polish AI search',
        'Real-time chat via WebSocket',
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
          problem: 'Using Redis as cache, Celery broker and Channels layer.',
          solution:
            'Separated configuration boundaries and operating patterns to avoid performance contention.',
        },
        {
          problem: 'Running REST and WebSocket traffic in one ASGI architecture.',
          solution:
            'Set up a coherent Daphne + Channels architecture with clear boundaries and reliable real-time event flow.',
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
          why: 'Essential for geospatial search, location filters and map-based ranking.',
        },
        {
          tech: 'Redis + Celery + Channels',
          why: 'Enables asynchronous jobs and real-time messaging in one backend architecture.',
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
      items: ['Listing map + filters', 'Host dashboard', 'Real-time chat', 'Booking flow'],
    },
    whatILearned: {
      title: 'What I learned',
      body: 'Geospatial queries, ASGI architecture, complex pricing rules and production-grade integrations.',
    },
    next: {
      title: 'Roadmap',
      body: 'More E2E tests, stronger monitoring and geospatial query optimization.',
    },
  },
  prokom: {
    badge: 'Business Solution',
    title: 'PRO-KOM Serwis System',
    description:
      'A repair management system for small and medium electronics service businesses.',
    longDescription:
      'End-to-end automation of the repair workflow - from device intake to customer pickup. Three panels: customer, staff Kanban board and admin dashboard. Celery for async tasks, real-time status tracking, audit log and RBAC.',
    stats: '3 panels - RBAC - Audit log - SSL/TLS',
    imageAlt: 'PRO-KOM Serwis System - electronics repair management system',
    hero: {
      badge: 'Business Solution',
      title: 'PRO-KOM Serwis System',
      subtitle:
        'A repair management system for small and medium electronics service businesses.',
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
      body: 'System design, backend implementation, Celery async jobs, reporting and operational flows.',
    },
    myRole: {
      title: 'My role',
      items: [
        'Mapped the full repair lifecycle from device intake to completion and pickup.',
        'Implemented Django REST APIs for customer, staff and admin workflows.',
        'Automated operations using Celery: notifications, reports and scheduled jobs.',
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
      items: ['3 panels', 'RBAC', 'Audit log', 'SSL/TLS'],
    },
    features: {
      title: 'Key features',
      items: [
        'Online repair submission',
        'Staff Kanban board',
        'Admin dashboard',
        'Real-time status tracking',
        'Audit log and RBAC',
        'Asynchronous tasks with Celery',
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
      items: ['Customer panel', 'Staff Kanban board', 'Admin panel', 'Schedule view'],
    },
    whatILearned: {
      title: 'What I learned',
      body: 'Translating business processes into data models, modular Django architecture and Redis/Celery scaling.',
    },
    next: {
      title: 'Roadmap',
      body: 'UX improvements, accounting integrations and automated backups.',
    },
  },
  portfolio: {
    badge: 'This Website',
    title: 'Portfolio Website',
    description:
      'This website - a premium personal brand portfolio built with Next.js 15, TypeScript and Tailwind CSS v4.',
    cta: 'Source code',
  },
}
