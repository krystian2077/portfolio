import { projects } from './projects'

const messages = {
  nav: {
    about: 'About',
    projects: 'Projects',
    stack: 'Stack',
    experience: 'Experience',
    contact: 'Contact',
    available: 'Available for hire',
    hire: 'Contact me',
    homeAria: 'Krystian Potaczek — home',
    switchToEn: 'Switch language to English',
    switchToPl: 'Switch language to Polish',
    themeLight: 'Switch to light theme',
    themeDark: 'Switch to dark theme',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  footer: {
    copyright: 'Krystian Potaczek. All rights reserved.',
    tagline: 'Junior Python / Django Developer',
    builtWith: 'Built with Next.js 15 — aligned with my other stacks.',
    repoCta: 'Portfolio source on GitHub',
    toggleLang: 'Language',
    toggleTheme: 'Theme',
  },
  hero: {
    badge: 'Available for hire',
    headline: 'Junior Python / Django Developer',
    lead: 'I build web apps grounded in real business problems.',
    subheadline: 'Backend-focused · Full-stack aware · AI-assisted workflow',
    description: '',
    headline1: 'Junior Python',
    headlineAccent: '/ Django',
    headline2: 'Developer',
    subtitle: 'I build products that solve real business problems.',
    scroll: 'Scroll',
    cta: {
      primary: 'View projects',
      secondary: 'Download CV',
    },
    trust: '2 projects with live demo  ·  CS student  ·  Ready4AI  ·  EN B1/B2',
  },
  trustBar: {
    fact1: '2 production-ready projects with live demos',
    fact2: '7 technical books completed',
    fact3: 'Python + Django + AI course (600h+)',
    fact4: 'Ready4AI - LLMs, agents, MCP, prompt engineering',
    fact5: '2.5 years in an IT business environment (PRO-KOM)',
  },
  about: {
    eyebrow: 'About me',
    title: 'From IT technical school to production Django applications',
    intro:
      'I did not get into programming by accident. I have been interested in it since technical school - I started with networking and hardware fundamentals, then went deeper into code. My 2+ years at PRO-KOM gave me something many juniors still miss: contact with real clients, real problems, and real business processes. That is why, when I build software, I focus not only on code, but also on whether the system solves an actual problem and makes sense for users.',
    philosophy: {
      title: 'How I approach projects',
      body: 'I do not start with a framework. First I understand the problem, the user, and the process. Only then do I choose technology, design data structures, API contracts, and the application flow.',
    },
    ai: {
      title: 'AI workflow',
      body: 'I use AI consciously - Claude, ChatGPT, Copilot, and Cursor are my tools, not oracles. I verify every output, understand the code, and take full responsibility for what I ship.',
    },
  },
  projects,
  proofOfWork: {
    eyebrow: 'Proof of work',
    title: 'Proof of Work - not logos, concrete evidence',
    subtitle: 'This section shows where and why each technology was applied.',
    items: {
      djangoDrf: {
        title: 'Django + DRF',
        description:
          'StayMap REST API for bookings, auth, host operations, moderation, and AI search.',
      },
      postgis: {
        title: 'PostGIS + GeoDjango',
        description: 'Map geosearch for listings with ranking tuned to real product behavior.',
      },
      celeryRedis: {
        title: 'Celery + Redis',
        description:
          'Redis in 3 roles plus async jobs: cleanup, auto-cancel, reminders, and cache refresh.',
      },
      channelsWebsocket: {
        title: 'WebSocket + Django Channels',
        description:
          'Realtime chat in StayMap built on ASGI + Daphne with message and typing events.',
      },
      jwtGoogle: {
        title: 'JWT + Google OAuth',
        description: 'Secure login and authorization with token-based session flows.',
      },
      dockerCompose: {
        title: 'Docker Compose',
        description:
          'Dev/prod-like environments for both projects: backend, database, Redis, workers.',
      },
      nextAppRouter: {
        title: 'Next.js App Router',
        description: 'Frontend/BFF architecture for StayMap and PRO-KOM with SSR/CSR support.',
      },
      testing: {
        title: 'pytest + Playwright',
        description: 'Backend and E2E testing focused on critical user flows and reliability.',
      },
      aiIntegration: {
        title: 'AI Integration',
        description: 'OpenAI API in StayMap plus practical LLM and prompt-engineering usage.',
      },
      swagger: {
        title: 'Swagger/OpenAPI',
        description: 'Auto-generated API documentation via drf-spectacular.',
      },
    },
  },
  timeline: {
    eyebrow: 'Experience',
    title: 'Experience and education',
    subtitle: 'Timeline: studies, courses, projects, and work - newest first.',
    items: {
      student: {
        date: '2024-2026',
        title: 'Computer science student',
        body: 'Business Application Developer specialization.',
      },
      learnit: {
        date: 'Nov 2025 - May 2026',
        title: 'Python + Django + AI course (LearnIt)',
        body: 'Curriculum: Python, Django, DRF, FastAPI, Docker, AWS, CI/CD, and AI workflow.',
      },
      ready4ai: {
        date: 'Oct - Dec 2025',
        title: 'Ready4AI course',
        body: 'LLMs, AI agents, MCP servers, prompt engineering, and practical deployments.',
      },
      projects: {
        date: '2025-2026',
        title: 'Projects: StayMap Polska, PRO-KOM Service System',
        body: 'Building applications that solve real business problems.',
      },
      prokomJob: {
        date: 'Nov 2023 - May 2026',
        title: 'Sales Specialist - PRO-KOM',
        body: 'B2B/B2C support, quotations, sales operations, and technical troubleshooting.',
      },
      technikum: {
        date: 'Earlier',
        title: 'IT technical school',
        body: 'Strong foundations in networking, systems, and programming.',
      },
    },
  },
  techStack: {
    eyebrow: 'Tech stack',
    title: 'Technology I use in real projects',
    subtitle: 'Not a tutorial checklist - this stack comes from practical implementation work.',
    usedIn: 'Used in',
    groups: {
      backend: {
        title: 'Backend',
        items: {
          python: { label: 'Python 3.12', usedIn: 'StayMap Polska, PRO-KOM Service System' },
          django: { label: 'Django 5', usedIn: 'StayMap Polska, PRO-KOM Service System' },
          drf: { label: 'Django REST Framework', usedIn: 'StayMap Polska, PRO-KOM Service System' },
          fastapi: { label: 'FastAPI', usedIn: 'Course projects (LearnIt)' },
          flask: { label: 'Flask', usedIn: 'Course projects (LearnIt)' },
          geodjango: { label: 'GeoDjango', usedIn: 'StayMap Polska - geosearch' },
          celery: { label: 'Celery', usedIn: 'StayMap Polska, PRO-KOM Service System' },
          sqlalchemy: { label: 'SQLAlchemy', usedIn: 'Course projects (LearnIt)' },
        },
      },
      database: {
        title: 'Database',
        items: {
          postgres: { label: 'PostgreSQL + PostGIS', usedIn: 'StayMap Polska, PRO-KOM Service System' },
          redis: { label: 'Redis', usedIn: 'StayMap Polska, PRO-KOM Service System' },
          alembic: { label: 'Alembic', usedIn: 'Course projects (LearnIt)' },
        },
      },
      frontend: {
        title: 'Frontend',
        items: {
          next: { label: 'Next.js 14/15', usedIn: 'StayMap Polska, PRO-KOM Service System, Portfolio' },
          react: { label: 'React', usedIn: 'StayMap Polska, PRO-KOM Service System, Portfolio' },
          typescript: { label: 'TypeScript', usedIn: 'StayMap Polska, PRO-KOM Service System, Portfolio' },
          tailwind: { label: 'Tailwind CSS', usedIn: 'StayMap Polska, PRO-KOM Service System, Portfolio' },
          framer: { label: 'Framer Motion', usedIn: 'Portfolio' },
        },
      },
      devops: {
        title: 'DevOps and infrastructure',
        items: {
          docker: { label: 'Docker + Compose', usedIn: 'StayMap Polska, PRO-KOM Service System' },
          nginx: { label: 'Nginx', usedIn: 'PRO-KOM Service System' },
          ghactions: { label: 'GitHub Actions', usedIn: 'StayMap Polska, course projects' },
          aws: { label: 'AWS (EC2/S3/RDS)', usedIn: 'Labs and course projects' },
          vercel: { label: 'Vercel', usedIn: 'StayMap frontend, Portfolio' },
          render: { label: 'Render', usedIn: 'Course deployments' },
        },
      },
      authSecurity: {
        title: 'Auth and security',
        items: {
          jwt: { label: 'JWT', usedIn: 'StayMap Polska, PRO-KOM Service System' },
          googleOAuth: { label: 'Google OAuth', usedIn: 'StayMap Polska' },
          csrf: { label: 'CSRF', usedIn: 'StayMap Polska, PRO-KOM Service System' },
          rateLimiting: { label: 'Rate limiting', usedIn: 'StayMap Polska, PRO-KOM Service System' },
          tls: { label: 'HTTPS/TLS', usedIn: 'PRO-KOM Service System, Portfolio' },
        },
      },
      testing: {
        title: 'Testing',
        items: {
          pytest: { label: 'pytest + pytest-django', usedIn: 'StayMap Polska, PRO-KOM Service System' },
          playwright: { label: 'Playwright', usedIn: 'StayMap Polska frontend' },
          coverage: { label: 'Coverage', usedIn: 'PRO-KOM Service System' },
          faker: { label: 'Faker', usedIn: 'StayMap Polska backend tests' },
        },
      },
      aiTools: {
        title: 'AI and tools',
        items: {
          openai: { label: 'OpenAI API', usedIn: 'StayMap Polska, course projects' },
          langchain: { label: 'LangChain', usedIn: 'Ready4AI, course projects' },
          ollama: { label: 'Ollama (local)', usedIn: 'Ready4AI' },
          mcp: { label: 'MCP servers', usedIn: 'Ready4AI, developer workflow' },
          prompt: { label: 'Prompt engineering', usedIn: 'Ready4AI, daily workflow' },
        },
      },
      devTools: {
        title: 'Developer tools',
        items: {
          git: { label: 'Git + GitHub', usedIn: 'All projects' },
          cursor: { label: 'Cursor', usedIn: 'Daily development workflow' },
          claude: { label: 'Claude', usedIn: 'Code review and architecture work' },
          copilot: { label: 'GitHub Copilot', usedIn: 'Inline suggestions' },
          postman: { label: 'Postman', usedIn: 'API testing' },
          swagger: { label: 'Swagger/OpenAPI', usedIn: 'StayMap Polska, PRO-KOM Service System' },
        },
      },
    },
  },
  books: {
    eyebrow: 'Technical books',
    title: 'I read because I care',
    subtitle: 'Craft mindset over tool hype.',
    items: {
      cleanCode: {
        title: 'Clean Code',
        author: 'Robert C. Martin',
        insight: 'Code is written for people first, machines second.',
      },
      pragmatic: {
        title: 'The Pragmatic Programmer',
        author: 'Hunt & Thomas',
        insight: 'Own your craft and your engineering decisions.',
      },
      craftsman: {
        title: 'Software Craftsman',
        author: 'Sandro Mancuso',
        insight: 'Professionalism and quality outlast technology trends.',
      },
      cleanCoder: {
        title: 'The Clean Coder',
        author: 'Robert C. Martin',
        insight: 'Architecture decisions compound in cost over time.',
      },
      tdd: {
        title: 'TDD: By Example',
        author: 'Robert C. Martin',
        insight: 'Tests are living documentation and refactoring safety.',
      },
      algorithms: {
        title: 'Algorithms',
        author: 'Sedgewick & Wayne',
        insight: 'Solid fundamentals survive every framework cycle.',
      },
      cpp: {
        title: 'C++ Opus Magnum',
        author: 'Jerzy Grebosz',
        insight: 'This is where deeper understanding of compilers begins.',
      },
    },
  },
  aiWorkflow: {
    eyebrow: 'AI workflow',
    title: 'AI as a tool, never an oracle',
    subtitle: 'Every commit is mine. Every technical decision is understood and defendable.',
    points: {
      review: 'Architecture and risk-focused code review with Claude before commit.',
      docs: 'Generating BRD/PRD/TSD drafts faster, always with manual validation.',
      debate:
        'Debating technical choices - for example, when PostGIS is justified over simple lat/lng columns.',
      refactor:
        'Using AI as a refactoring sparring partner - AI proposes, I decide and implement.',
      learning:
        'Learning new tech with AI as a mentor to speed up research and compare approaches.',
    },
  },
  contact: {
    eyebrow: 'Contact',
    title: "Tell me what you're building — I'll reply with clarity",
    subtitle:
      'Drop the challenge in a few sentences. I answer fast with next steps.',
    description:
      'The form reaches my inbox without middlemen — share scope, timelines, stack preferences, whatever helps.',
    name: 'Full name',
    email: 'Email address',
    company: 'Company (optional)',
    message: 'How can I help?',
    send: 'Send message',
    sending: 'Sending…',
    success: 'Message sent. Thank you!',
    error: 'Something went wrong. Please try again.',
    required: 'This field is required',
    invalid_email: 'Please enter a valid email address',
    min_message: 'Message must be at least 10 characters',
    sidebarTitle: 'Quick links',
    cvLabel: 'Resume (PDF)',
    cvHint:
      "I'll upload a downloadable PDF soon — meanwhile explore GitHub & LinkedIn.",
    openBadge: 'Open for junior roles · internships · first hires',
    connectGithub: 'GitHub profile',
    connectLinkedin: 'LinkedIn profile',
    sidebarIntro:
      'Repos for both case studies and this portfolio ship publicly on GitHub.',
  },
  notFound: {
    title: 'Page not found',
    subtitle: 'This link may be outdated, or the URL has a typo.',
    home: 'Home',
    contact: 'Contact',
    otherLocales: 'Other languages',
  },
}

export default messages
