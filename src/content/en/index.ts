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
    homeAria: 'Krystian Potaczek - home',
    switchToEn: 'Switch language to English',
    switchToPl: 'Switch language to Polish',
    themeLight: 'Switch to light theme',
    themeDark: 'Switch to dark theme',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    cv: 'CV',
    cvAria: 'Open Curriculum Vitae (PDF)',
  },
  footer: {
    copyright: 'Krystian Potaczek. All rights reserved.',
    tagline: 'Junior Python / Django Developer',
    builtWith: 'Built with Next.js 15 - TypeScript - Tailwind CSS v4 - Deployed on Vercel',
    repoCta: 'Portfolio source on GitHub',
    toggleLang: 'Language',
    toggleTheme: 'Theme',
  },
  hero: {
    badge: 'Available for hire',
    headline: 'Junior Python / Django Developer',
    intro: "Hi, I'm Krystian Potaczek",
    lead: 'I build web applications around real business problems.',
    subheadline: 'Backend-focused - Full-stack aware - AI-assisted workflow',
    description: '',
    headline1: 'Junior Python',
    headlineAccent: '/ Django',
    headline2: 'Developer',
    subtitle: 'I build web applications around real business problems.',
    scroll: 'Scroll',
    cta: {
      primary: 'View projects',
      secondary: 'CV coming soon',
    },
    trust:
      '2 projects with live demos - Computer Science student - Ready4AI - English B1/B2',
  },
  trustBar: {
    fact1: '2 projects with live demos',
    fact2: 'Django / DRF / PostgreSQL',
    fact3: '600h+ Python + Django + AI',
    fact4: 'AI-assisted workflow',
    fact5: '2.5 years in an IT environment',
  },
  about: {
    eyebrow: 'ABOUT ME',
    title: 'From passion to applications that solve real problems',
    intro:
      'Programming was not a random choice for me. I have been interested in computers, technology and software development for years - starting with hardware, networking and IT fundamentals, and gradually moving deeper into code, web applications and backend development.',
    philosophy: {
      title: 'Developer mindset',
      body: 'I do not start with a framework or a technology. First, I try to understand the problem, the user and the business process. Only then do I choose the right tools, design the architecture and implement a solution that is not only technically correct, but genuinely useful.',
    },
    ai: {
      title: 'AI-assisted workflow',
      body: 'I use Claude, ChatGPT, Codex and GitHub Copilot consciously - as support for research, code analysis, debugging, documentation and refactoring. I treat AI as a productivity tool, but technical decisions, architecture and responsibility for the final code always stay on my side.',
    },
  },
  projects,
  proofOfWork: {
    eyebrow: 'PROOF OF WORK',
    title: 'Not just icons. Concrete proof.',
    subtitle:
      'Every technology below is connected to a real project where I actually used it.',
    items: {
      djangoDrf: {
        title: 'Django + DRF',
        description:
          'REST API for StayMap - bookings, authentication, host panel, moderation and AI search. 47 endpoints with Swagger/OpenAPI documentation.',
      },
      postgis: {
        title: 'PostgreSQL + PostGIS + GeoDjango',
        description:
          'Geospatial accommodation search in StayMap. PostgreSQL with PostGIS, spatial queries, location-based filtering and ranking offers by distance.',
      },
      celeryRedis: {
        title: 'Celery + Redis',
        description:
          'Redis used as cache, Celery broker and Channels layer. Asynchronous tasks in StayMap: cleanup, automatic booking cancellation and reminders.',
      },
      channelsWebsocket: {
        title: 'WebSocket + Channels',
        description:
          'Real-time chat in StayMap built with Django Channels and Daphne ASGI. Events: message.new, typing and read status.',
      },
      jwtGoogle: {
        title: 'JWT + Google OAuth',
        description:
          'Authentication with token rotation and HTTP-only cookies in StayMap. RBAC and access control in PRO-KOM System.',
      },
      dockerCompose: {
        title: 'Docker + Compose',
        description:
          'Development and production environments for both main projects. Docker Compose, Nginx reverse proxy and Certbot SSL in PRO-KOM System.',
      },
      nextAppRouter: {
        title: 'Next.js App Router',
        description:
          'BFF proxy pattern, SSR/CSR and 44 views in StayMap. This portfolio is built with Next.js 15.',
      },
      testing: {
        title: 'pytest + Playwright',
        description:
          '25 backend test files in StayMap: pytest-django, Faker and application logic tests. End-to-end frontend tests with Playwright.',
      },
      aiIntegration: {
        title: 'OpenAI API + LangChain',
        description:
          'Polish AI search in StayMap - natural language interpretation and mapping user intent to filters. LangChain chatbots with conversation history.',
      },
      swagger: {
        title: 'Swagger / OpenAPI',
        description:
          'Automatic API documentation generated with drf-spectacular in StayMap. REST contract available through Swagger/OpenAPI.',
      },
    },
  },
  timeline: {
    eyebrow: 'EXPERIENCE & EDUCATION',
    title: 'My path to Python',
    subtitle:
      'Programming is not a random career choice for me - it is a direction I have been developing for years, from an interest in computers and technology, through studies, courses and work in an IT environment, to my own Django applications with working live demos.',
    items: {
      projects: {
        type: 'PROJECT',
        date: '2025 - 2026',
        title: 'StayMap Polska + PRO-KOM System',
        body: 'Two advanced projects with live demos. Django, DRF, PostgreSQL/PostGIS, Celery, Redis, WebSocket, Next.js and Docker. These projects show how I approach business applications: from process analysis, through backend and API, to a working user interface.',
      },
      learnit: {
        type: 'COURSE',
        date: 'Nov 2025 - May 2026',
        title: 'Python + Django + AI - LearnIT',
        body: 'Intensive practical course covering Python, OOP, SQL, Flask, Django, DRF, FastAPI, Docker, AWS basics, CI/CD, testing and technical interview preparation. Completed with a project and certificate.',
      },
      ready4ai: {
        type: 'COURSE',
        date: 'Oct 2025 - Dec 2025',
        title: 'Ready4AI',
        body: 'Practical course on using AI in software development: LLMs, chatbots, AI agents, prompt engineering, Claude, Cursor, AI-assisted code review, technical documentation and deploying a web application from idea to cloud.',
      },
      student: {
        type: 'STUDIES',
        date: 'Sep 2024 - present',
        title: 'Computer Science - Business Application Developer',
        body: 'Studies focused on designing and building business applications, object-oriented programming, databases, information systems, web applications, UI/UX and software engineering fundamentals.',
      },
      prokomJob: {
        type: 'WORK',
        date: 'Nov 2023 - May 2026',
        title: 'Sales Specialist / Technical Sales - PRO-KOM',
        body: 'Over 2 years in an IT environment: B2B and B2C customer support, technical consulting, preparing estimates, solving customer problems and understanding real company workflows. This experience helps me design applications from the perspective of the user and the business - not only the code.',
      },
      growth: {
        type: 'GROWTH',
        date: 'for years',
        title: 'Programming as a passion',
        body: 'My interest in IT started with computers, hardware, networks and my first attempts at programming. Since then, I have been growing through projects, courses, technical books, podcasts and hands-on application building.',
      },
    },
  },
  techStack: {
    eyebrow: 'TECH STACK',
    title: 'Technologies I use',
    subtitle:
      'Not a random list of tools - only technologies I use in real projects.',
    usedIn: 'Used in',
    groups: {},
  },
  books: {
    eyebrow: 'LIBRARY',
    title: 'Books that shaped my approach to programming',
    subtitle:
      'I do not read technical books just to add them to a CV. I read them because I genuinely want to understand code, quality and responsibility in software development.',
    items: {},
  },
  aiWorkflow: {
    eyebrow: 'AI WORKFLOW',
    title: 'AI as a tool, not an oracle',
    subtitle:
      'I use AI consciously - I verify results, understand the code and take responsibility for technical decisions.',
    quote:
      'I verify every result, understand the code and take full responsibility for what I deliver.',
    points: {},
  },
  contact: {
    eyebrow: 'CONTACT',
    title: 'Looking for a junior who understands code and business?',
    subtitle: "Let's talk.",
    description:
      'I am open to Junior Python / Django Developer and Junior Backend Developer roles - remote, hybrid or on-site in Poland. I usually reply within 24 hours.',
    name: 'Full name *',
    email: 'Email *',
    company: 'Company',
    subject: 'Subject',
    message: 'Message *',
    send: 'Send message ->',
    sending: 'Sending...',
    success: 'Message sent. Thank you!',
    error: 'Something went wrong. Please try again.',
    required: 'This field is required',
    invalid_email: 'Please enter a valid email address',
    min_message: 'Message must be at least 10 characters',
    sidebarTitle: 'Quick contact',
    cvLabel: 'Curriculum Vitae',
    cvHint: 'coming soon',
    openBadge: 'Available for hire',
    connectGithub: 'GitHub',
    connectLinkedin: 'LinkedIn',
    sidebarIntro: 'Quick contact',
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
