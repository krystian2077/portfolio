export type ArchitectureIcon =
  | 'client'
  | 'frontend'
  | 'api'
  | 'realtime'
  | 'data'
  | 'async'
  | 'users'
  | 'backend'
  | 'modules'
  | 'security'

export type ArchitectureLayer = {
  icon: ArchitectureIcon
  name: string
  description: string
  elements: string[]
}

export type ArchitectureDecision = {
  title: string
  description: string
}

export type ProjectArchitectureContent = {
  description: string
  layers: ArchitectureLayer[]
  decisions: ArchitectureDecision[]
}

export const staymapArchitecture: ProjectArchitectureContent = {
  description:
    'Architektura została podzielona na warstwy: frontend Next.js, backend Django/DRF, komunikację WebSocket przez Channels, bazę PostgreSQL/PostGIS oraz zadania asynchroniczne Celery.',
  layers: [
    {
      icon: 'client',
      name: 'Client',
      description: 'Przeglądarka i urządzenia mobilne użytkowników.',
      elements: ['Browser', 'Mobile', 'Guest', 'Host'],
    },
    {
      icon: 'frontend',
      name: 'Frontend',
      description: 'Interfejs użytkownika, routing, widoki i warstwa BFF proxy.',
      elements: ['Next.js 14', 'SSR/CSR', 'BFF proxy', 'TypeScript'],
    },
    {
      icon: 'api',
      name: 'API Layer',
      description: 'REST API, logika biznesowa, autoryzacja i dokumentacja kontraktu API.',
      elements: ['Django 5', 'DRF', 'Swagger/OpenAPI', 'JWT'],
    },
    {
      icon: 'realtime',
      name: 'Real-time',
      description: 'Komunikacja WebSocket dla czatu i statusów w czasie rzeczywistym.',
      elements: ['Django Channels', 'Daphne ASGI', 'WebSocket', 'Events'],
    },
    {
      icon: 'data',
      name: 'Data & Geo',
      description: 'Model danych, rezerwacje, lokalizacja i zapytania przestrzenne.',
      elements: ['PostgreSQL', 'PostGIS', 'GeoDjango', 'Spatial indexes'],
    },
    {
      icon: 'async',
      name: 'Async & Integrations',
      description: 'Zadania w tle, cache, AI search i integracje zewnętrzne.',
      elements: ['Redis', 'Celery', 'OpenAI', 'Google OAuth', 'Nominatim', 'Overpass'],
    },
  ],
  decisions: [
    {
      title: 'BFF proxy w Next.js',
      description:
        'Frontend nie komunikuje się bezpośrednio z backendem. Warstwa proxy ułatwia kontrolę requestów, auth i strukturę API.',
    },
    {
      title: 'ASGI dla REST + WebSocket',
      description:
        'Daphne pozwala obsłużyć standardowe requesty HTTP oraz real-time chat w jednej architekturze aplikacji.',
    },
    {
      title: 'PostGIS dla wyszukiwania po lokalizacji',
      description:
        'Lokalizacja jest głównym elementem produktu, dlatego zapytania przestrzenne są częścią modelu danych, a nie dodatkiem.',
    },
    {
      title: 'Redis w kilku rolach',
      description:
        'Redis obsługuje cache, brokera Celery i channel layer dla WebSocketów, ale logicznie rozdziela odpowiedzialności.',
    },
  ],
}

export const prokomArchitecture: ProjectArchitectureContent = {
  description:
    'Architektura została zaprojektowana wokół trzech paneli użytkownika: klienta, pracownika i administratora. Frontend Next.js komunikuje się z backendem Django/DRF, a zadania tła obsługuje Celery z Redis.',
  layers: [
    {
      icon: 'users',
      name: 'Users',
      description: 'Trzy różne typy użytkowników z osobnymi potrzebami i uprawnieniami.',
      elements: ['Client Panel', 'Staff Panel', 'Admin Panel'],
    },
    {
      icon: 'frontend',
      name: 'Frontend',
      description: 'Interfejs systemu, widoki paneli, stan aplikacji i komunikacja z API.',
      elements: ['Next.js 14', 'React Query', 'Zustand', 'TypeScript'],
    },
    {
      icon: 'backend',
      name: 'Backend',
      description: 'REST API, logika domenowa, autoryzacja i obsluga requestow.',
      elements: ['Django 5.1', 'DRF', 'Gunicorn', 'JWT'],
    },
    {
      icon: 'modules',
      name: 'Domain Modules',
      description: 'Moduły odpowiadające za główne obszary procesu serwisowego.',
      elements: ['Repairs', 'Clients', 'Inventory', 'Analytics', 'Auth'],
    },
    {
      icon: 'data',
      name: 'Data & Async',
      description: 'Baza danych, cache, kolejka zadań i operacje wykonywane w tle.',
      elements: ['PostgreSQL 16', 'Redis 7', 'Celery', 'Celery Beat'],
    },
    {
      icon: 'security',
      name: 'Security & Deploy',
      description: 'Kontrola dostępu, historia zmian, reverse proxy i bezpieczne wdrożenie.',
      elements: ['RBAC', 'Audit Log', 'Nginx', 'HTTPS', 'Certbot'],
    },
  ],
  decisions: [
    {
      title: 'Trzy osobne przepływy użytkownika',
      description:
        'Klient, pracownik i administrator widzą ten sam proces naprawy z różnych perspektyw i mają różne potrzeby.',
    },
    {
      title: 'Modułowy backend Django',
      description:
        'Naprawy, klienci, magazyn, analityka i auth są rozdzielone na osobne moduły z jasną odpowiedzialnością.',
    },
    {
      title: 'Celery dla zadań w tle',
      description:
        'Powiadomienia, przypomnienia, backupy i raporty nie blokują głównego request-response cycle.',
    },
    {
      title: 'RBAC i audit log',
      description:
        'System wymaga kontroli dostępu, historii zmian i możliwości odtworzenia przebiegu obsługi zgłoszenia.',
    },
  ],
}
