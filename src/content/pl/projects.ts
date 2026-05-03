export const projects = {
  eyebrow: 'Wyróżnione projekty',
  title: 'Case studies, nie tylko zrzuty ekranu',
  subtitle:
    'Dwa główne projekty rozwiązujące realne problemy biznesowe oraz ta strona jako osobny projekt inżynierski.',
  actions: {
    liveDemo: 'Live demo',
    github: 'GitHub',
    caseStudy: 'Case study',
  },
  staymap: {
    badge: 'Flagship Project',
    title: 'StayMap Polska',
    description:
      'Produkcyjna platforma marketplace noclegów w Polsce. Map-first UX, wyszukiwanie AI po polsku, dynamiczne cenniki, czat w czasie rzeczywistym, pełny panel gospodarza i moderacja.',
    stats: '12 modułów · 44 widoki · 25 plików testowych · 9 trybów podróży',
    hero: {
      badge: 'Flagship Project',
      title: 'StayMap Polska',
      subtitle:
        'Map-first marketplace noclegów w Polsce. Dynamiczne cenniki, wyszukiwanie AI, czat realtime.',
      cta: {
        live: 'Live demo',
        github: 'GitHub',
      },
      links: {
        live: 'https://staymap-polska.vercel.app/',
        github: 'https://github.com/krystian2077/staymap-polska',
      },
    },
    problem: {
      title: 'Problem',
      body: 'Brak silnej lokalnej platformy z mapą jako głównym interfejsem odkrywania ofert oraz słabe uwzględnienie polskiej sezonowości i świąt w cenach.',
    },
    role: {
      title: 'Moja rola',
      body: 'Backend w centrum uwagi: API, geosearch, silnik cen, czat WebSocket, zadania Celery i integracje.',
    },
    myRole: {
      title: 'Moja rola',
      items: [
        'Projekt i implementacja backendu Django + DRF (moduły domenowe, kontrakty API, walidacje).',
        'Wdrożenie geosearch opartego o PostGIS i logiki rankingowej dla wyników na mapie.',
        'Budowa silnika dynamicznego pricingu (sezonowość, święta, dopłaty, zniżki za dłuższy pobyt).',
        'Implementacja czatu realtime na Django Channels (zdarzenia: wiadomość, typing, przeczytane).',
        'Integracje: API kompatybilne z OpenAI, Nominatim, Overpass, SMTP, OAuth.',
      ],
    },
    architecture: {
      title: 'Architektura',
      body: 'Next.js (BFF) → Daphne ASGI → Django REST + Channels → PostgreSQL + PostGIS + Redis + Celery',
    },
    metrics: {
      title: 'Skala projektu',
      items: [
        '12 modułów backendu (aplikacje Django)',
        '44 widoki frontendu (Next.js)',
        '25 plików testowych',
        '9 trybów podróży',
      ],
    },
    features: {
      title: 'Kluczowe funkcje',
      items: [
        'Odkrywanie ofert przez mapę',
        'Silnik dynamicznego pricingu',
        'Wyszukiwanie AI po polsku',
        'Czat realtime (WebSocket)',
        'Recenzje bez ujawniania ocen przed publikacją',
        'Panel gospodarza i moderacja',
      ],
    },
    challenges: {
      title: 'Największe wyzwania',
      problemLabel: 'Problem',
      solutionLabel: 'Rozwiązanie',
      items: [
        {
          problem: 'Integracja PostGIS i rankingu ofert w map-first UX.',
          solution:
            'Wprowadziłem warstwę zapytań geograficznych i dostrajanie rankingu pod przepływ odkrywania, z naciskiem na trafność i czytelność wyników.',
        },
        {
          problem: 'Redis jednocześnie jako cache, broker Celery i warstwa kanałów.',
          solution:
            'Oddzieliłem odpowiedzialności konfiguracyjne i limity, żeby uniknąć konfliktów wydajnościowych między kolejkami, cache a WebSocketami.',
        },
        {
          problem: 'Obsługa REST i WebSocket w jednej architekturze ASGI.',
          solution:
            'Ustawiłem spójną architekturę Daphne + Channels z wyraźnym podziałem warstw i sensownym przepływem zdarzeń realtime.',
        },
      ],
    },
    stackRationale: {
      title: 'Stack z uzasadnieniem',
      items: [
        {
          tech: 'Django + DRF',
          why: 'Szybkie budowanie modularnego backendu i czytelnego API pod złożone flow domenowe.',
        },
        {
          tech: 'PostgreSQL + PostGIS',
          why: 'Niezbędne do geosearch, filtrów mapowych i rankingów lokalizacyjnych.',
        },
        {
          tech: 'Redis + Celery + Channels',
          why: 'Zadania asynchroniczne i czat realtime w jednej spójnej architekturze backendu.',
        },
        {
          tech: 'Next.js App Router',
          why: 'Wydajny frontend z możliwością proxy BFF i skalowalnym podziałem widoków.',
        },
      ],
    },
    screens: {
      title: 'Screeny / makiety',
      placeholder: 'Wkrótce — finalne zrzuty z produkcji.',
      items: ['Mapa ofert + filtry', 'Panel gospodarza', 'Czat realtime', 'Flow rezerwacji'],
    },
    whatILearned: {
      title: 'Czego się nauczyłem',
      body: 'Zapytania geoprzestrzenne, architektura ASGI, złożone reguły cenowe i integracje klasy „production-ready”.',
    },
    next: {
      title: 'Roadmap',
      body: 'Dalsze testy E2E, monitoring oraz optymalizacja zapytań geograficznych.',
    },
  },
  prokom: {
    badge: 'Business Solution',
    title: 'PRO-KOM Serwis System',
    description:
      'System do zarządzania procesem napraw sprzętu elektronicznego: panele klienta, pracownika i administratora, Kanban, zadania asynchroniczne Celery i automatyzacja workflow.',
    stats: '3 panele użytkownika · RBAC · Dziennik audytu · HTTPS/TLS',
    hero: {
      badge: 'Business Solution',
      title: 'PRO-KOM Serwis System',
      subtitle:
        'System do zarządzania procesem napraw sprzętu elektronicznego — od przyjęcia zgłoszenia, przez diagnozę i statusy, aż po odbiór przez klienta.',
      cta: {
        live: 'Live demo',
        github: 'GitHub',
      },
      links: {
        live: 'https://prokomserwis.pl/',
        github: 'https://github.com/krystian2077/prokom-system',
      },
    },
    problem: {
      title: 'Problem',
      body: 'Małe i średnie serwisy potrzebują automatyzacji procesu napraw i śledzenia statusu w czasie rzeczywistym.',
    },
    role: {
      title: 'Moja rola',
      body: 'Projekt architektury, backend, zadania asynchroniczne Celery, raportowanie i integracje.',
    },
    myRole: {
      title: 'Moja rola',
      items: [
        'Modelowanie procesu napraw od przyjęcia urządzenia do odbioru i rozliczenia.',
        'Implementacja API Django REST dla panelu klienta, pracownika i administratora.',
        'Automatyzacja workflow przez Celery (powiadomienia, raporty, zadania okresowe).',
        'Projekt uprawnień RBAC i audytowalności operacji (ścieżka zmian w historii).',
        'Współpraca frontend–backend pod czytelne flow operacyjne dla serwisu.',
      ],
    },
    architecture: {
      title: 'Architektura',
      body: 'Django REST → PostgreSQL → Redis → Celery → frontend Next.js, Docker, Nginx',
    },
    metrics: {
      title: 'Skala projektu',
      items: [
        '3 panele użytkownika (klient, staff, admin)',
        'RBAC + dziennik audytu',
        'Automatyzacja procesów serwisowych',
        'Infrastruktura Docker + Nginx + TLS',
      ],
    },
    features: {
      title: 'Kluczowe funkcje',
      items: [
        'Zgłaszanie napraw online',
        'Tablica Kanban dla pracowników',
        'Automatyzacja powiadomień',
        'RBAC i dziennik audytu',
        'Eksport raportów',
        'Kalendarz harmonogramów',
      ],
    },
    challenges: {
      title: 'Największe wyzwania',
      problemLabel: 'Problem',
      solutionLabel: 'Rozwiązanie',
      items: [
        {
          problem: 'Odwzorowanie realnego procesu serwisowego w modelu danych.',
          solution:
            'Wydzieliłem etapy cyklu życia naprawy i relacje encji tak, aby odzwierciedlały rzeczywisty proces pracy serwisu.',
        },
        {
          problem: 'Kolejki Celery dla różnych typów zadań operacyjnych.',
          solution:
            'Podzieliłem zadania asynchroniczne według priorytetu i charakteru, żeby utrzymać przewidywalny czas realizacji.',
        },
        {
          problem: 'Bezpieczeństwo i granularne uprawnienia dostępu.',
          solution:
            'Wdrożyłem RBAC i walidacje dostępu per endpoint lub akcję z pełnym audytem zmian.',
        },
      ],
    },
    stackRationale: {
      title: 'Stack z uzasadnieniem',
      items: [
        {
          tech: 'Django + DRF',
          why: 'Szybki rozwój modularnego backendu i silna warstwa administracyjna.',
        },
        {
          tech: 'PostgreSQL + Redis',
          why: 'Stabilne dane transakcyjne oraz szybkie kolejkowanie i cache.',
        },
        {
          tech: 'Celery',
          why: 'Niezbędne do automatyzacji zadań poza cyklem żądanie–odpowiedź.',
        },
        {
          tech: 'Next.js + TypeScript',
          why: 'Czytelny frontend dla wielu paneli z naciskiem na UX i utrzymywalność kodu.',
        },
      ],
    },
    screens: {
      title: 'System w praktyce',
      placeholder: 'Zanonimizowane widoki panelu klienta, pracownika i administratora.',
      galleryPath: '/projects/prokom-system/gallery',
      items: [
        {
          title: 'Strona wejściowa serwisu',
          desc: 'Publiczny widok startowy pokazuje ofertę serwisu, główne CTA zgłoszenia naprawy i spójny branding PRO-KOM.',
          src: '/projects/prokom/prokom-public-home.png',
          alt: 'PRO-KOM Serwis System - publiczna strona główna serwisu z przyciskiem zgłoszenia naprawy',
        },
        {
          title: 'Formularz zgłoszenia naprawy',
          desc: 'Pięcioetapowy formularz zbiera dane kontaktowe, informacje o urządzeniu, dostawie i podsumowaniu zgłoszenia.',
          src: '/projects/prokom/prokom-repair-form.png',
          alt: 'PRO-KOM Serwis System - formularz zgłoszenia naprawy online z podglądem zgłoszenia',
        },
        {
          title: 'Analityka pracownika',
          desc: 'Widok KPI prezentuje przychód, liczbę zakończonych napraw, prace w toku, zaległości i rozkład statusów.',
          src: '/projects/prokom/prokom-employee-analytics.png',
          alt: 'PRO-KOM Serwis System - panel pracownika ze statystykami i analityką napraw',
        },
        {
          title: 'Moje naprawy',
          desc: 'Tabela napraw pozwala szybko filtrować przypisane zgłoszenia, statusy, klientów, urządzenia i akcje wymagające reakcji.',
          src: '/projects/prokom/prokom-employee-repairs.png',
          alt: 'PRO-KOM Serwis System - lista napraw przypisanych do pracownika z filtrami statusów',
        },
        {
          title: 'Dashboard pracownika',
          desc: 'Panel operacyjny łączy licznik aktywnych napraw, najbliższe działania, czas pracy i szybkie wejście w obsługę zgłoszeń.',
          src: '/projects/prokom/prokom-employee-dashboard.png',
          alt: 'PRO-KOM Serwis System - dashboard pracownika z licznikami napraw i kartami kolejnych działań',
        },
        {
          title: 'Dashboard administratora',
          desc: 'Widok zarządczy pokazuje pipeline statusów, obciążenie techników, przychód miesięczny i alerty procesowe.',
          src: '/projects/prokom/prokom-admin-dashboard.png',
          alt: 'PRO-KOM Serwis System - dashboard administratora z KPI, pipeline statusów i obciążeniem techników',
        },
      ],
    },
    whatILearned: {
      title: 'Czego się nauczyłem',
      body: 'Przenoszenie procesów biznesowych na model danych, modularne aplikacje Django oraz skalowanie z Redis i Celery.',
    },
    next: {
      title: 'Roadmap',
      body: 'Usprawnienia UX, integracje z systemami księgowymi i automatyczne kopie zapasowe.',
    },
  },
  portfolio: {
    title: 'Strona portfolio',
    description:
      'Ta strona — osobisty brand „premium” zbudowany w Next.js 15 z naciskiem na wydajność, i18n i UX.',
    cta: 'Repozytorium na GitHubie',
  },
}
