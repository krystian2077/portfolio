import { projects } from './projects'

const messages = {
  nav: {
    about: 'O mnie',
    projects: 'Projekty',
    stack: 'Technologie',
    experience: 'Doświadczenie',
    contact: 'Kontakt',
    available: 'Dostępny do pracy',
    hire: 'Napisz do mnie',
    homeAria:
      'Krystian Potaczek — strona główna',
    switchToEn: 'Przełącz język na angielski',
    switchToPl: 'Przełącz język na polski',
    themeLight: 'Włącz jasny motyw',
    themeDark: 'Włącz ciemny motyw',
    openMenu: 'Otwórz menu',
    closeMenu: 'Zamknij menu',
    cv: 'CV',
    cvAria: 'Otwórz Curriculum Vitae (PDF)',
  },
  footer: {
    copyright: 'Krystian Potaczek. Wszystkie prawa zastrzeżone.',
    tagline: 'Junior Python / Django Developer',
    builtWith: 'Zbudowane w Next.js 15 · Stack jak w pozostałych projektach.',
    repoCta: 'Kod portfolio na GitHubie',
    toggleLang: 'Język',
    toggleTheme: 'Motyw',
  },
  hero: {
    badge: 'Dostępny do pracy',
    headline: 'Junior Python / Django Developer',
    lead: 'Buduję aplikacje webowe oparte na realnych problemach biznesowych.',
    subheadline: 'Backend-focused · Full-stack aware · AI-assisted workflow',
    description: '',
    headline1: 'Junior Python',
    headlineAccent: '/ Django',
    headline2: 'Developer',
    subtitle:
      'Tworzę produkty, które adresują realne potrzeby biznesowe.',
    scroll: 'Przewiń',
    cta: {
      primary: 'Zobacz projekty',
      secondary: 'Pobierz CV',
    },
    trust: '2 projekty z live demo  ·  Student informatyki  ·  Ready4AI  ·  EN B1/B2',
  },
  trustBar: {
    fact1: '2 projekty produkcyjne z demo online',
    fact2: '7 przeczytanych książek technicznych',
    fact3: 'Kurs Python + Django + AI (600h+)',
    fact4: 'Ready4AI - LLM, agenty, MCP, prompt engineering',
    fact5: '2,5 roku w środowisku IT (PRO-KOM)',
  },
  about: {
    eyebrow: 'O mnie',
    title: 'Od technikum do produkcyjnych aplikacji Django',
    intro:
      'Nie trafiłem do programowania przypadkiem — interesuje mnie od technikum: najpierw podstawy sieci i sprzętu, potem coraz głębiej w kod. Praca w PRO-KOM przez ponad dwa lata dała mi coś, często rzadkie u początkujących deweloperów — kontakt z prawdziwym klientem, problemem i procesem biznesowym. Dlatego, gdy buduję aplikacje, patrzę nie tylko na kod, ale także na to, czy system rozwiązuje faktyczny problem i czy jest użyteczny dla użytkownika.',
    philosophy: {
      title: 'Jak podchodzę do projektów',
      body: 'Nie zaczynam od frameworka. Najpierw staram się zrozumieć problem, osobę użytkownika i proces. Dopiero potem dobieram technologie, projektuję struktury danych, API i przepływ aplikacji.',
    },
    ai: {
      title: 'AI workflow',
      body:
        'Korzystam ze sztucznej inteligencji świadomie — Claude, ChatGPT, Copilot i Cursor to moje narzędzia, nie wyrocznie. Weryfikuję każdy wynik, rozumiem kod i biorę pełną odpowiedzialność za to, co dostarczam.',
    },
  },
  projects,
  proofOfWork: {
    eyebrow: 'Proof of work',
    title: 'Proof of Work - nie ikonki, konkretne dowody',
    subtitle:
      'Poniżej widać, gdzie i po co zastosowałem najważniejsze elementy stacku.',
    items: {
      djangoDrf: {
        title: 'Django + DRF',
        description:
          'REST API StayMap: rezerwacje, uwierzytelnianie, panel gospodarza, moderacja i wyszukiwanie AI.',
      },
      postgis: {
        title: 'PostGIS + GeoDjango',
        description:
          'Geosearch ofert noclegowych na mapie z rankingiem dopasowanym do realnych scenariuszy na rynku PL.',
      },
      celeryRedis: {
        title: 'Celery + Redis',
        description:
          'Redis w trzech rolach i zadania asynchroniczne: sprzątanie, auto-anulowanie, przypomnienia, odświeżanie cache.',
      },
      channelsWebsocket: {
        title: 'WebSocket + Django Channels',
        description:
          'Czat realtime w StayMap na ASGI + Daphne ze zdarzeniami wiadomości i stanu pisania.',
      },
      jwtGoogle: {
        title: 'JWT + Google OAuth',
        description:
          'Logowanie i autoryzacja tokenowa oraz bezpieczna obsługa sesji użytkownika.',
      },
      dockerCompose: {
        title: 'Docker Compose',
        description:
          'Środowisko dev/prod dla obu projektów: backend, baza, Redis i worker.',
      },
      nextAppRouter: {
        title: 'Next.js App Router',
        description:
          'Frontend / BFF dla StayMap i PRO-KOM: SSR/CSR oraz modułowa struktura widoków.',
      },
      testing: {
        title: 'pytest + Playwright',
        description:
          'Testy backendu i E2E frontu ze skupieniem na stabilności krytycznych ścieżek użytkownika.',
      },
      aiIntegration: {
        title: 'AI Integration',
        description:
          'OpenAI API w StayMap oraz praktyczne wykorzystanie LLM i prompt engineering w workflow.',
      },
      swagger: {
        title: 'Swagger/OpenAPI',
        description:
          'Automatyczna dokumentacja API przez drf-spectacular, gotowa dla integracji i review.',
      },
    },
  },
  timeline: {
    eyebrow: 'Doświadczenie',
    title: 'Doświadczenie i edukacja',
    subtitle:
      'Oś czasu: studia, kursy, projekty i praca — od najnowszych wstecz.',
    items: {
      student: {
        date: '2024-2026',
        title: 'Student informatyki',
        body: 'Specjalizacja: programista aplikacji biznesowych.',
      },
      learnit: {
        date: 'XI 2025 - V 2026',
        title: 'Kurs Python + Django + AI (LearnIt)',
        body: 'Program: Python, Django, DRF, FastAPI, Docker, AWS, CI/CD i AI workflow.',
      },
      ready4ai: {
        date: 'X - XII 2025',
        title: 'Kurs Ready4AI',
        body:
          'LLM, agenty AI, serwery MCP, prompt engineering i praktyczne wdrożenia.',
      },
      projects: {
        date: '2025-2026',
        title: 'Projekty: StayMap Polska, PRO-KOM Serwis System',
        body:
          'Budowa aplikacji rozwiązujących realne problemy biznesowe.',
      },
      prokomJob: {
        date: 'XI 2023 - V 2026',
        title: 'Specjalista ds. sprzedaży — PRO-KOM',
        body:
          'Obsługa B2B/B2C, wyceny, procesy sprzedażowe i wsparcie techniczne.',
      },
      technikum: {
        date: 'Wcześniej',
        title: 'Technikum informatyczne',
        body: 'Fundamenty sieci, systemów i programowania.',
      },
    },
  },
  techStack: {
    eyebrow: 'Tech stack',
    title: 'Technologie, których realnie używam',
    subtitle:
      'To nie checklista z tutoriala — stack wypracowany w projektach i wdrożeniach.',
    usedIn: 'Użyte w',
    groups: {
      backend: {
        title: 'Backend',
        items: {
          python: { label: 'Python 3.12', usedIn: 'StayMap Polska, PRO-KOM Serwis System' },
          django: { label: 'Django 5', usedIn: 'StayMap Polska, PRO-KOM Serwis System' },
          drf: { label: 'Django REST Framework', usedIn: 'StayMap Polska, PRO-KOM Serwis System' },
          fastapi: { label: 'FastAPI', usedIn: 'Projekty kursowe (LearnIt)' },
          flask: { label: 'Flask', usedIn: 'Projekty kursowe (LearnIt)' },
          geodjango: { label: 'GeoDjango', usedIn: 'StayMap Polska - geosearch' },
          celery: { label: 'Celery', usedIn: 'StayMap Polska, PRO-KOM Serwis System' },
          sqlalchemy: { label: 'SQLAlchemy', usedIn: 'Projekty kursowe (LearnIt)' },
        },
      },
      database: {
        title: 'Bazy danych',
        items: {
          postgres: { label: 'PostgreSQL + PostGIS', usedIn: 'StayMap Polska, PRO-KOM Serwis System' },
          redis: { label: 'Redis', usedIn: 'StayMap Polska, PRO-KOM Serwis System' },
          alembic: { label: 'Alembic', usedIn: 'Projekty kursowe (LearnIt)' },
        },
      },
      frontend: {
        title: 'Frontend',
        items: {
          next: { label: 'Next.js 14/15', usedIn: 'StayMap Polska, PRO-KOM Serwis System, Portfolio' },
          react: { label: 'React', usedIn: 'StayMap Polska, PRO-KOM Serwis System, Portfolio' },
          typescript: { label: 'TypeScript', usedIn: 'StayMap Polska, PRO-KOM Serwis System, Portfolio' },
          tailwind: { label: 'Tailwind CSS', usedIn: 'StayMap Polska, PRO-KOM Serwis System, Portfolio' },
          framer: { label: 'Framer Motion', usedIn: 'Portfolio' },
        },
      },
      devops: {
        title: 'DevOps i infrastruktura',
        items: {
          docker: { label: 'Docker + Compose', usedIn: 'StayMap Polska, PRO-KOM Serwis System' },
          nginx: { label: 'Nginx', usedIn: 'PRO-KOM Serwis System' },
          ghactions: { label: 'GitHub Actions', usedIn: 'StayMap Polska, projekty kursowe' },
          aws: { label: 'AWS (EC2/S3/RDS)', usedIn: 'Labs i projekty kursowe' },
          vercel: { label: 'Vercel', usedIn: 'StayMap frontend, Portfolio' },
          render: { label: 'Render', usedIn: 'Wdrożenia kursowe' },
        },
      },
      authSecurity: {
        title: 'Auth i security',
        items: {
          jwt: { label: 'JWT', usedIn: 'StayMap Polska, PRO-KOM Serwis System' },
          googleOAuth: { label: 'Google OAuth', usedIn: 'StayMap Polska' },
          csrf: { label: 'CSRF', usedIn: 'StayMap Polska, PRO-KOM Serwis System' },
          rateLimiting: { label: 'Rate limiting', usedIn: 'StayMap Polska, PRO-KOM Serwis System' },
          tls: { label: 'HTTPS/TLS', usedIn: 'PRO-KOM Serwis System, Portfolio' },
        },
      },
      testing: {
        title: 'Testowanie',
        items: {
          pytest: { label: 'pytest + pytest-django', usedIn: 'StayMap Polska, PRO-KOM Serwis System' },
          playwright: { label: 'Playwright', usedIn: 'StayMap Polska frontend' },
          coverage: { label: 'Coverage', usedIn: 'PRO-KOM Serwis System' },
          faker: { label: 'Faker', usedIn: 'StayMap Polska testy backend' },
        },
      },
      aiTools: {
        title: 'AI i narzędzia',
        items: {
          openai: { label: 'OpenAI API', usedIn: 'StayMap Polska, projekty kursowe' },
          langchain: { label: 'LangChain', usedIn: 'Ready4AI, projekty kursowe' },
          ollama: { label: 'Ollama (local)', usedIn: 'Ready4AI' },
          mcp: { label: 'MCP servers', usedIn: 'Ready4AI, codzienna praca developera' },
          prompt: { label: 'Prompt engineering', usedIn: 'Ready4AI, codzienna praca' },
        },
      },
      devTools: {
        title: 'Narzędzia developera',
        items: {
          git: { label: 'Git + GitHub', usedIn: 'Wszystkie projekty' },
          cursor: { label: 'Cursor', usedIn: 'Codzienna praca developera' },
          claude: { label: 'Claude', usedIn: 'Code review i architektura' },
          copilot: { label: 'GitHub Copilot', usedIn: 'Inline suggestions' },
          postman: { label: 'Postman', usedIn: 'Testowanie API' },
          swagger: { label: 'Swagger/OpenAPI', usedIn: 'StayMap Polska, PRO-KOM Serwis System' },
        },
      },
    },
  },
  books: {
    eyebrow: 'BIBLIOTEKA',
    title: 'Książki, które ukształtowały moje podejście do programowania',
    subtitle:
      'Czytam je nie dla CV, tylko dlatego, że naprawdę chcę lepiej rozumieć kod, jakość i odpowiedzialność w pracy developera.',
    items: {
      cleanCode: {
        title: 'Czysty Kod',
        author: 'Robert C. Martin',
        insight:
          'Kod piszemy dla ludzi, nie tylko dla maszyn. Czytelność, nazewnictwo i prostota to część profesjonalizmu.',
      },
      pragmatic: {
        title: 'Pragmatyczny Programista',
        author: 'Andrew Hunt, David Thomas',
        insight:
          'Bierz odpowiedzialność, automatyzuj, szukaj lepszych rozwiązań i stale rozwijaj swój warsztat.',
      },
      craftsman: {
        title: 'Software Craftsman',
        author: 'Sandro Mancuso',
        insight:
          'Programowanie to rzemiosło — liczy się jakość, odpowiedzialność i długoterminowa wartość kodu.',
      },
      cleanCoder: {
        title: 'Mistrz Czystego Kodu',
        author: 'Robert C. Martin',
        insight:
          'Profesjonalizm to nie tylko kod, ale też komunikacja, odpowiedzialność i uczciwe podejście do pracy.',
      },
      tdd: {
        title: 'TDD: Sztuka tworzenia dobrego kodu',
        author: 'Kent Beck',
        insight:
          'Testy pomagają lepiej rozumieć wymagania i projektować zachowanie systemu przed implementacją.',
      },
      algorithms: {
        title: 'Algorytmy. Ilustrowany przewodnik',
        author: 'Aditya Bhargava',
        insight:
          'Algorytmy uczą myślenia o problemach — jak wybrać rozwiązanie prostsze, szybsze i bardziej skalowalne.',
      },
      cpp: {
        title: 'C++ Opus Magnum',
        author: 'Jerzy Grębosz',
        insight:
          'Fundamenty C++ pomagają lepiej rozumieć pamięć, strukturę programu i to, co dzieje się pod spodem.',
      },
    },
  },
  aiWorkflow: {
    eyebrow: 'AI workflow',
    title: 'AI jako narzędzie, nie jako wyrocznia',
    subtitle:
      'Każdy commit jest mój — każdą decyzję techniczną rozumiem i potrafię uzasadnić.',
    points: {
      review:
        'Code review z Claude: analiza architektury i ryzyk przed commitem.',
      docs:
        'Generowanie szkiców BRD, PRD i TSD — szybciej, ale zawsze z ręczną walidacją.',
      debate:
        'Debata nad decyzjami technicznymi - np. kiedy PostGIS ma sens zamiast prostych kolumn lat/lng.',
      refactor:
        'Refaktoryzacja z AI jako sparring partnerem - AI proponuje, ja podejmuje decyzje.',
      learning:
        'Nauka nowych technologii: AI jak mentor przyspieszający research i zestawienie opcji.',
    },
  },
  contact: {
    eyebrow: 'Kontakt',
    title: 'Porozmawiajmy o Twoim kolejnym systemie lub produkcie',
    subtitle:
      'Napisz krótko, czego potrzebujesz — odpowiem z sensem i konkretnym następnym krokiem.',
    description:
      'Formularz trafia bezpośrednio do skrzynki — bez zbędnej biurokracji. Preferuję jasny opis zakresu, stacku lub ograniczeń czasowych.',
    name: 'Imię i nazwisko',
    email: 'Adres e-mail',
    company: 'Firma (opcjonalnie)',
    message: 'Wiadomość',
    send: 'Wyślij wiadomość',
    sending: 'Wysyłanie…',
    success: 'Wiadomość wysłana. Dziękuję!',
    error: 'Nie udało się wysłać. Spróbuj ponownie.',
    required: 'To pole jest wymagane',
    invalid_email: 'Podaj poprawny adres e-mail',
    min_message: 'Wiadomość musi mieć co najmniej 10 znaków',
    sidebarTitle: 'Szybkie fakty',
    cvLabel: 'CV (PDF)',
    cvHint: 'Plik PDF — uzupełnię niebawem; w międzyczasie zajrzyj na LinkedIn lub GitHub.',
    openBadge: 'Otwarty na współpracę (Junior / staż / pierwszy etat)',
    connectGithub: 'Profil GitHub',
    connectLinkedin: 'Profil LinkedIn',
    sidebarIntro:
      'Repozytoria z kodem case studies oraz ten projekt portfolio są publicznie dostępne.',
  },
  notFound: {
    title: 'Ta strona nie istnieje',
    subtitle:
      'Ten link mógł się zestarzeć albo adres został wpisany z literówką.',
    home: 'Strona główna',
    contact: 'Kontakt',
    otherLocales: 'Inne jezyki',
  },
}

export default messages
