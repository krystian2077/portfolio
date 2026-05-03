export type LocaleCode = 'pl' | 'en'

export interface LearnItModule {
  number: string
  title: string
  description: string
  chips: readonly string[]
  topics: readonly string[]
}

export interface LearnItSummaryCard {
  title: string
  body: string
}

export const learnItContent = {
  pl: {
    home: {
      label: 'ŚCIEŻKA PRAKTYCZNA',
      heading: 'Python + Django + AI w praktyce',
      description:
        'W ramach intensywnego kursu LearnIT przerobiłem pełną ścieżkę tworzenia aplikacji backendowych: od podstaw Pythona, OOP i SQL, przez Flask, Django, DRF i FastAPI, po Docker, testy, CI/CD, podstawy AWS oraz przygotowanie do rozmów technicznych.',
      secondDescription:
        'Łącznie było to ponad 600 godzin nauki, zadań praktycznych i pracy projektowej. Największą wartością było dla mnie przechodzenie od teorii do praktycznych aplikacji budowanych krok po kroku.',
      cta: 'Zobacz pełny zakres nauki',
      stats: [
        '34+ lekcji',
        '600h+ nauki, zadań i projektów',
        'Backend, REST API · DevOps · AI',
        'Python · Django · DRF · FastAPI',
      ],
    },
    page: {
      heroLabel: 'LEARNIT PATH',
      heroHeading: 'Python + Django + AI|Pełna ścieżka backendowa',
      heroDescription:
        'Intensywny program praktyczny obejmujący Python, OOP, SQL, Flask, Django, Django REST Framework, Celery, FastAPI, asynchroniczność, Docker, CI/CD, podstawy AWS oraz nowoczesny workflow wspierany przez AI.',
      heroSecondDescription:
        'Dla mnie była to uporządkowana ścieżka przejścia od podstaw programowania do budowy aplikacji backendowych, API, pracy z bazami danych, testowania, konteneryzacji i przygotowania do rozmów technicznych — wzmocniona dużą liczbą zadań praktycznych i pracy projektowej.',
      metrics: [
        '8 głównych modułów',
        '34+ lekcji',
        '600h+ nauki, zadań i projektów',
        'praktyczne zadania i projekty',
      ],
      backToPortfolio: 'Wróć do portfolio',
      viewProjects: 'Zobacz projekty',
      introLabel: 'ZAKRES',
      introHeading: 'Od podstaw Pythona do aplikacji backendowych',
      introDescription:
        'Program LearnIT pomógł mi uporządkować wiedzę i przejść przez najważniejsze obszary pracy backend developera: składnię Pythona, OOP, SQL, frameworki webowe, REST API, autoryzację, zadania asynchroniczne, testy, konteneryzację i podstawy deploymentu. Najważniejsze było dla mnie to, że każdy obszar był połączony z praktyką — nie tylko z teorią.',
      modulesLabel: 'MODUŁY',
      modulesHeading: 'Praktyczne obszary nauki',
      detailsLabel: 'Pokaż szczegóły',
      summaryLabel: 'PODSUMOWANIE',
      summaryHeading: 'Co wyniosłem z tej ścieżki?',
      finalHeading: 'Chcesz zobaczyć, jak wykorzystałem tę wiedzę w praktyce?',
      finalDescription:
        'Najlepszym dowodem są moje projekty: StayMap Polska i PRO-KOM Serwis System — aplikacje, w których wykorzystałem Django, DRF, PostgreSQL, Celery, Redis, Docker, Next.js i AI-assisted workflow.',
      homeCta: 'Wróć do strony głównej',
    },
    modules: [
      {
        number: '01',
        title: 'Podstawy programowania i Pythona',
        description:
          'Pierwszy etap był skupiony na składni Pythona, logice programowania, pracy ze środowiskiem, algorytmach, strukturach danych, funkcjach, obsłudze błędów oraz pracy z plikami i danymi zewnętrznymi.',
        chips: ['Python', 'Algorytmy', 'Funkcje', 'Pętle', 'Struktury danych', 'Virtualenv', 'PEP', 'JSON', 'CSV', 'Regex'],
        topics: [
          'podstawy algorytmizacji i programowania',
          'architektura komputerowa i reprezentacja danych',
          'środowisko programistyczne i virtualenv',
          'składnia Pythona, zmienne, typy danych, operatory',
          'instrukcje warunkowe, pętle i Big O',
          'funkcje, argumenty, zakresy zmiennych i dokumentowanie kodu',
          'programowanie funkcyjne: lambda, map, filter, reduce, domknięcia, dekoratory',
          'obsługa wyjątków: try/except, finally, else, raise, asercje',
          'pliki, serializacja/deserializacja, JSON, CSV, regex',
          'iteratory, generatory i podstawowe wzorce projektowe',
        ],
      },
      {
        number: '02',
        title: 'Git i programowanie obiektowe',
        description:
          'Ten etap przygotował mnie do pracy z kodem w bardziej projektowy sposób: kontrola wersji, Git Flow, GitHub oraz programowanie obiektowe jako fundament większych aplikacji.',
        chips: ['Git', 'GitHub', 'Git Flow', 'OOP', 'Klasy', 'Dziedziczenie', 'Polimorfizm', 'MRO'],
        topics: [
          'Git i praca z komendami',
          'Git Flow i podstawy pracy zespołowej',
          'GitHub, GitLab, Bitbucket',
          'klasy, obiekty, metody, atrybuty i konstruktory',
          'enkapsulacja, property, dziedziczenie i abstrakcja',
          'przesłanianie metod, wielokrotne dziedziczenie i MRO',
          'metody instancji, klasy i statyczne',
          'dataclasses, polimorfizm, przeciążanie operatorów',
          'własne wyjątki',
        ],
      },
      {
        number: '03',
        title: 'Bazy danych i SQL',
        description:
          'W tym module pracowałem z relacyjnymi bazami danych, SQL, relacjami, indeksami, JOIN-ami, ORM oraz praktycznym podłączaniem bazy do aplikacji.',
        chips: ['SQL', 'Bazy danych', 'JOIN', 'Relacje', 'Indeksy', 'ORM', 'SQLAlchemy', 'Alembic'],
        topics: [
          'bazy danych i systemy zarządzania bazami danych',
          'język SQL i proste zapytania',
          'funkcje i procedury',
          'klucze, indeksy i relacje',
          'podzapytania i JOIN',
          'ORM',
          'praktyka: raw SQL i SQLAlchemy',
          'aplikacja konsolowa na raw SQL',
          'aplikacja z SQLAlchemy i Alembic',
        ],
      },
      {
        number: '04',
        title: 'Sieć, internet i web development',
        description:
          'Ten moduł pomógł mi lepiej zrozumieć fundamenty działania aplikacji webowych: internet, HTTP, REST, model klient-serwer i wzorce architektoniczne używane w web developmencie.',
        chips: ['HTTP', 'REST', 'TCP/IP', 'OSI', 'MVC', 'MTV', 'MVVM', 'Client-Server'],
        topics: [
          'zasady działania internetu',
          'architektura klient-serwer',
          'model OSI i TCP/IP',
          'wzorce MTV, MVC, MVVM',
          'protokol HTTP',
          'REST',
          'przegląd frameworków web developmentu',
        ],
      },
      {
        number: '05',
        title: 'Frameworki Flask i Django',
        description:
          'Najważniejszy etap webowy: budowa aplikacji we Flasku i Django, routing, widoki, ORM, migracje, szablony, formularze, panel admina, autoryzacja i transakcje.',
        chips: ['Flask', 'Django', 'ORM', 'Routing', 'CRUD', 'PostgreSQL', 'Jinja2', 'Pagination', 'Admin Panel', 'ACID'],
        topics: [
          'tworzenie aplikacji Flask',
          'Flask + PostgreSQL przez psycopg2',
          'raw SQL bez ORM',
          'szablony Jinja2',
          'Flask + SQLAlchemy ORM',
          'migracje Alembic',
          'konfiguracja projektu Django',
          'PostgreSQL w Django',
          'manage.py i aplikacje Django',
          'widoki, routing, modele, ORM, migracje',
          'szablony, formularze, pagination',
          'QuerySet, seeder, Faker',
          'panel administracyjny Django: filtry, sortowanie, wyszukiwanie, inline, admin actions',
          'bulk operations',
          'transakcje, ACID, poziomy izolacji',
          'rejestracja i autoryzacja',
        ],
      },
      {
        number: '06',
        title: 'Django REST Framework i Celery',
        description:
          'Ten moduł był skoncentrowany na budowie backendu API: DRF, serializery, autoryzacja, JWT, middleware, cache, dokumentacja Swagger/OpenAPI oraz zadania w tle z Celery i Celery Beat.',
        chips: ['Django REST Framework', 'REST API', 'JWT', 'Swagger', 'OpenAPI', 'Celery', 'Celery Beat', 'Cache', 'Postman'],
        topics: [
          'Django REST Framework',
          'Postman',
          'parametry ścieżki i zapytań',
          'serializery',
          'ciasteczka',
          'testowanie w Django',
          'middleware',
          'JWT',
          'rejestracja i logowanie w DRF',
          'cache',
          'dokumentacja API: Swagger i OpenAPI',
          'Celery',
          'Celery Beat',
          'zadania cykliczne i praca w tle',
        ],
      },
      {
        number: '07',
        title: 'Równoległość, asynchroniczność i nowoczesne API',
        description:
          'Ten etap rozszerzył backend o zagadnienia wydajności i nowoczesnej komunikacji: procesy, wątki, GIL, asyncio, aiohttp, FastAPI, WebSockets i GraphQL.',
        chips: ['FastAPI', 'AsyncIO', 'Aiohttp', 'WebSockets', 'GraphQL', 'Multiprocessing', 'GIL', 'Event Loop', 'async/await'],
        topics: [
          'równoległe wykonywanie kodu',
          'procesy i wątki',
          'GIL',
          'wielowątkowość i multiprocessing',
          'komunikacja między procesami',
          'asynchroniczność',
          'korutyny, event loop, futures',
          'asyncio i async/await',
          'synchronizacja zadań',
          'aiohttp',
          'FastAPI',
          'WebSockets',
          'GraphQL',
        ],
      },
      {
        number: '08',
        title: 'DevOps, konteneryzacja i CI/CD',
        description:
          'Ostatni obszar dotyczył uruchamiania aplikacji poza lokalnym środowiskiem: Docker, docker-compose, podstawy AWS, CI/CD, GitHub Actions i organizacja pracy zespołowej.',
        chips: ['Docker', 'Docker Compose', 'GitHub Actions', 'CI/CD', 'AWS basics', 'EC2', 'S3', 'RDS', 'DevOps', 'Agile', 'Scrum', 'Kanban'],
        topics: [
          'rola DevOps',
          'podstawy AWS',
          'EC2, S3, RDS, ELB, Route53',
          'AWS CLI',
          'wdrażanie aplikacji w chmurze AWS',
          'konteneryzacja i wirtualizacja',
          'Docker',
          'sieci Docker',
          'docker-compose',
          'aplikacja w kontenerze',
          'CI/CD',
          'GitHub Actions',
          'narzędzia CD',
          'Agile, Scrum, Kanban',
        ],
      },
    ],
    summary: [
      {
        title: 'Backend od podstaw do API',
        body:
          'Poznałem cały proces budowy aplikacji backendowej: od składni Pythona i OOP, przez Django i Flask, po REST API, autoryzację i dokumentację.',
      },
      {
        title: 'Praca z danymi',
        body:
          'Przerobiłem SQL, relacje, indeksy, JOIN-y, ORM, migracje i podłączanie baz danych do aplikacji.',
      },
      {
        title: 'Nowoczesny backend',
        body:
          'Zrozumiałem podstawy asynchroniczności, FastAPI, WebSockets, Celery i zadań wykonywanych poza głównym request-response cycle.',
      },
      {
        title: 'Jakosc i praktyka',
        body:
          'Duży nacisk był położony na praktyczne zadania, testowanie, debugowanie, dokumentowanie API i pracę z narzędziami używanymi w realnych projektach.',
      },
      {
        title: 'Deployment i workflow',
        body:
          'Poznałem Docker, Docker Compose, CI/CD, GitHub Actions oraz podstawy wdrażania aplikacji w chmurze AWS.',
      },
      {
        title: 'AI-assisted workflow',
        body:
          'Nauczyłem się traktować AI jako narzędzie wspierające research, code review, dokumentację, debugowanie i naukę — z pełną odpowiedzialnością po stronie developera.',
      },
    ],
  },
  en: {
    home: {
      label: 'PRACTICAL PATH',
      heading: 'Python + Django + AI in practice',
      description:
        'During the intensive LearnIT program, I worked through a full backend development path: from Python fundamentals, OOP and SQL, through Flask, Django, DRF and FastAPI, to Docker, testing, CI/CD, AWS basics and technical interview preparation.',
      secondDescription:
        'In total, it was over 600 hours of learning, practical exercises and project work. The biggest value for me was moving from theory to practical applications built step by step.',
      cta: 'View full learning path',
      stats: [
        '34+ lessons',
        '600h+ learning, exercises and projects',
        'Backend, REST API · DevOps · AI',
        'Python · Django · DRF · FastAPI',
      ],
    },
    page: {
      heroLabel: 'LEARNIT PATH',
      heroHeading: 'Python + Django + AI|Full backend learning path',
      heroDescription:
        'An intensive practical program covering Python, OOP, SQL, Flask, Django, Django REST Framework, Celery, FastAPI, asynchronous programming, Docker, CI/CD, AWS basics and modern AI-assisted workflow.',
      heroSecondDescription:
        'For me, it was a structured path from programming fundamentals to building backend applications, APIs, database-driven systems, tests, containers and technical interview readiness — reinforced with a large amount of practical exercises and project work.',
      metrics: [
        '8 main modules',
        '34+ lessons',
        '600h+ learning, exercises and projects',
        'practical exercises and projects',
      ],
      backToPortfolio: 'Back to portfolio',
      viewProjects: 'View projects',
      introLabel: 'SCOPE',
      introHeading: 'From Python fundamentals to backend applications',
      introDescription:
        'The LearnIT program helped me structure my knowledge and move through the key areas of backend development: Python syntax, OOP, SQL, web frameworks, REST APIs, authorization, asynchronous tasks, testing, containers and deployment fundamentals. What mattered most was that each area was connected to hands-on work, not only theory.',
      modulesLabel: 'MODULES',
      modulesHeading: 'Practical learning areas',
      detailsLabel: 'Show details',
      summaryLabel: 'SUMMARY',
      summaryHeading: 'What did I take from this path?',
      finalHeading: 'Want to see how I used this knowledge in practice?',
      finalDescription:
        'The best proof is in my projects: StayMap Polska and PRO-KOM Serwis System — applications where I used Django, DRF, PostgreSQL, Celery, Redis, Docker, Next.js and an AI-assisted workflow.',
      homeCta: 'Back to homepage',
    },
    modules: [
      {
        number: '01',
        title: 'Programming and Python fundamentals',
        description:
          'The first stage focused on Python syntax, programming logic, development environment setup, algorithms, data structures, functions, error handling and working with files and external data.',
        chips: ['Python', 'Algorithms', 'Functions', 'Loops', 'Data structures', 'Virtualenv', 'PEP', 'JSON', 'CSV', 'Regex'],
        topics: [
          'algorithmic thinking and programming fundamentals',
          'computer architecture and data representation',
          'development environment and virtualenv',
          'Python syntax, variables, data types and operators',
          'conditionals, loops and Big O',
          'functions, arguments, scopes and code documentation',
          'functional programming: lambda, map, filter, reduce, closures and decorators',
          'exception handling: try/except, finally, else, raise and assertions',
          'files, serialization/deserialization, JSON, CSV and regex',
          'iterators, generators and basic design patterns',
        ],
      },
      {
        number: '02',
        title: 'Git and object-oriented programming',
        description:
          'This stage prepared me to work with code in a more project-oriented way: version control, Git Flow, GitHub and object-oriented programming as a foundation for larger applications.',
        chips: ['Git', 'GitHub', 'Git Flow', 'OOP', 'Classes', 'Inheritance', 'Polymorphism', 'MRO'],
        topics: [
          'Git and command-line workflow',
          'Git Flow and team workflow basics',
          'GitHub, GitLab and Bitbucket',
          'classes, objects, methods, attributes and constructors',
          'encapsulation, properties, inheritance and abstraction',
          'method overriding, multiple inheritance and MRO',
          'instance, class and static methods',
          'dataclasses, polymorphism and operator overloading',
          'custom exceptions',
        ],
      },
      {
        number: '03',
        title: 'Databases and SQL',
        description:
          'In this module, I worked with relational databases, SQL, relationships, indexes, JOINs, ORM and practical database integration inside applications.',
        chips: ['SQL', 'Databases', 'JOIN', 'Relations', 'Indexes', 'ORM', 'SQLAlchemy', 'Alembic'],
        topics: [
          'databases and database management systems',
          'SQL and basic queries',
          'functions and procedures',
          'keys, indexes and relationships',
          'subqueries and JOINs',
          'ORM concepts',
          'hands-on work with raw SQL and SQLAlchemy',
          'console application using raw SQL',
          'application with SQLAlchemy and Alembic',
        ],
      },
      {
        number: '04',
        title: 'Networking, internet and web development',
        description:
          'This module helped me better understand how web applications work: the internet, HTTP, REST, client-server architecture and common web development patterns.',
        chips: ['HTTP', 'REST', 'TCP/IP', 'OSI', 'MVC', 'MTV', 'MVVM', 'Client-Server'],
        topics: [
          'how the internet works',
          'client-server architecture',
          'OSI and TCP/IP models',
          'MTV, MVC and MVVM patterns',
          'HTTP protocol',
          'REST',
          'overview of web development frameworks',
        ],
      },
      {
        number: '05',
        title: 'Flask and Django frameworks',
        description:
          'The key web development stage: building applications with Flask and Django, routing, views, ORM, migrations, templates, forms, admin panel, authorization and transactions.',
        chips: ['Flask', 'Django', 'ORM', 'Routing', 'CRUD', 'PostgreSQL', 'Jinja2', 'Pagination', 'Admin Panel', 'ACID'],
        topics: [
          'building Flask applications',
          'Flask + PostgreSQL via psycopg2',
          'raw SQL without ORM',
          'Jinja2 templates',
          'Flask + SQLAlchemy ORM',
          'Alembic migrations',
          'Django project configuration',
          'PostgreSQL in Django',
          'manage.py and Django apps',
          'views, routing, models, ORM and migrations',
          'templates, forms and pagination',
          'QuerySet, seeders and Faker',
          'Django admin: filters, sorting, search, inline models and admin actions',
          'bulk operations',
          'transactions, ACID and isolation levels',
          'registration and authorization',
        ],
      },
      {
        number: '06',
        title: 'Django REST Framework and Celery',
        description:
          'This module focused on building API backends: DRF, serializers, authorization, JWT, middleware, cache, Swagger/OpenAPI documentation and background jobs with Celery and Celery Beat.',
        chips: ['Django REST Framework', 'REST API', 'JWT', 'Swagger', 'OpenAPI', 'Celery', 'Celery Beat', 'Cache', 'Postman'],
        topics: [
          'Django REST Framework',
          'Postman',
          'path and query parameters',
          'serializers',
          'cookies',
          'testing in Django',
          'middleware',
          'JWT',
          'registration and login in DRF',
          'cache',
          'API documentation with Swagger and OpenAPI',
          'Celery',
          'Celery Beat',
          'scheduled and background tasks',
        ],
      },
      {
        number: '07',
        title: 'Parallelism, async and modern APIs',
        description:
          'This stage extended backend development into performance and modern communication topics: processes, threads, GIL, asyncio, aiohttp, FastAPI, WebSockets and GraphQL.',
        chips: ['FastAPI', 'AsyncIO', 'Aiohttp', 'WebSockets', 'GraphQL', 'Multiprocessing', 'GIL', 'Event Loop', 'async/await'],
        topics: [
          'parallel code execution',
          'processes and threads',
          'GIL',
          'multithreading and multiprocessing',
          'inter-process communication',
          'asynchronous programming',
          'coroutines, event loop and futures',
          'asyncio and async/await',
          'task synchronization',
          'aiohttp',
          'FastAPI',
          'WebSockets',
          'GraphQL',
        ],
      },
      {
        number: '08',
        title: 'DevOps, containers and CI/CD',
        description:
          'The final area covered running applications outside the local environment: Docker, docker-compose, AWS basics, CI/CD, GitHub Actions and team workflow organization.',
        chips: ['Docker', 'Docker Compose', 'GitHub Actions', 'CI/CD', 'AWS basics', 'EC2', 'S3', 'RDS', 'DevOps', 'Agile', 'Scrum', 'Kanban'],
        topics: [
          'the role of DevOps',
          'AWS basics',
          'EC2, S3, RDS, ELB and Route53',
          'AWS CLI',
          'deploying applications to AWS cloud',
          'containerization and virtualization',
          'Docker',
          'Docker networks',
          'docker-compose',
          'application inside a container',
          'CI/CD',
          'GitHub Actions',
          'CD tools',
          'Agile, Scrum and Kanban',
        ],
      },
    ],
    summary: [
      {
        title: 'Backend from fundamentals to APIs',
        body:
          'I worked through the full process of building backend applications: from Python syntax and OOP, through Django and Flask, to REST APIs, authorization and documentation.',
      },
      {
        title: 'Working with data',
        body:
          'I practiced SQL, relationships, indexes, JOINs, ORM, migrations and connecting databases to applications.',
      },
      {
        title: 'Modern backend development',
        body:
          'I learned the foundations of asynchronous programming, FastAPI, WebSockets, Celery and work performed outside the main request-response cycle.',
      },
      {
        title: 'Quality and practice',
        body:
          'A large part of the program focused on practical exercises, testing, debugging, API documentation and tools used in real projects.',
      },
      {
        title: 'Deployment and workflow',
        body:
          'I worked with Docker, Docker Compose, CI/CD, GitHub Actions and the basics of deploying applications to AWS cloud.',
      },
      {
        title: 'AI-assisted workflow',
        body:
          'I learned to treat AI as support for research, code review, documentation, debugging and learning, while keeping responsibility on the developer side.',
      },
    ],
  },
} as const satisfies Record<
  LocaleCode,
  {
    home: {
      label: string
      heading: string
      description: string
      secondDescription: string
      cta: string
      stats: readonly string[]
    }
    page: {
      heroLabel: string
      heroHeading: string
      heroDescription: string
      heroSecondDescription: string
      metrics: readonly string[]
      backToPortfolio: string
      viewProjects: string
      introLabel: string
      introHeading: string
      introDescription: string
      modulesLabel: string
      modulesHeading: string
      detailsLabel: string
      summaryLabel: string
      summaryHeading: string
      finalHeading: string
      finalDescription: string
      homeCta: string
    }
    modules: readonly LearnItModule[]
    summary: readonly LearnItSummaryCard[]
  }
>
