import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import { ScreenshotLightboxGrid } from '@/components/projects/ScreenshotLightboxGrid'

type GalleryGroup = {
  title: string
  desc: string
  items: {
    title: string
    desc: string
    src: string
    alt?: string
  }[]
}

const gallerySources = {
  client: [
    'main.png',
    'formularz.png',
    'panel-klienta.png',
    'mobile.png',
    'historia-klienta-w-naprawie.png',
    'komunikacja-z-klientem.png',
    'komunikacja-z-klientem2.png',
    'komunikacja-zklientem-do-naprawy.png',
  ],
  staff: [
    'panel-pracownika-main.png',
    'panel-pracownika-dalsza-czesc.png',
    'moje-naprawy.png',
    'kanban.png',
    'nieprzypisane-naprawy.png',
    'powiadomienia.png',
    'kalendarz.png',
    'wyszukiwanie-globalne.png',
  ],
  admin: [
    'panel-admina-dashbord.png',
    'panel-admina-dasbord-dalej3.png',
    'panel-admina-dashbord-dalej.png',
    'panel-admina-dashbord-dalej4.png',
    'zespol.png',
    'zespol-dzisiaj.png',
    'klioenci.png',
    'wszystkie-naprawy.png',
  ],
  service: [
    'szczegoly-naprawy.png',
    'szczegoly-naprawy2.png',
    'zmiana-statusu-naprawy.png',
    'wycena-w-naprawie.png',
    'czesci.png',
    'czesci-do-naprawy.png',
    'hurtownie.png',
    'hurtownie2.png',
    'przyjecie-stacjonarne.png',
    'przyjecie-stacjonarne-dalej.png',
    'przyjecie-stacjonarne-dalej3.png',
    'przyjecie-stacjonarne-dalej4.png',
    'przyjecie-reklamacyjne.png',
    'reklamacje.png',
    'odbiory-wydania.png',
    'kurier-w-naprawie.png',
  ],
  analytics: [
    'statystyki.png',
    'statystyki-dalej.png',
    'statystyki-dalej2.png',
    'historia-napraw.png',
    'zadania.png',
    'zadania2.png',
    'zadania-do-naprawy.png',
  ],
}

function src(fileName: string) {
  return `/projects/prokom/gallery/${fileName}`
}

const galleryGroupsPl: GalleryGroup[] = [
  {
    title: 'Panel klienta',
    desc: 'Widoki wejścia klienta do procesu: strona publiczna, formularz zgłoszenia, status naprawy i mobile.',
    items: [
      {
        title: 'Strona główna serwisu',
        desc: 'Publiczny landing serwisu z głównym CTA do zgłoszenia naprawy i kartami najważniejszych usług.',
        src: '/projects/prokom/gallery/main.png',
      },
      {
        title: 'Formularz zgłoszenia online',
        desc: 'Wielokrokowy formularz prowadzi klienta przez kontakt, urządzenie, dostawę, dodatki i podsumowanie.',
        src: '/projects/prokom/gallery/formularz.png',
      },
      {
        title: 'Panel statusu klienta',
        desc: 'Klient widzi status zgłoszenia, aktywność serwisu, naprawy w toku oraz szybkie akcje kontaktowe.',
        src: '/projects/prokom/gallery/panel-klienta.png',
      },
      {
        title: 'Widok mobilny zgłoszenia',
        desc: 'Responsywny wariant formularza zachowuje pełny proces zgłoszenia na telefonie.',
        src: '/projects/prokom/gallery/mobile.png',
      },
      {
        title: 'Historia klienta w naprawie',
        desc: 'Widok pokazuje urządzenia klienta, powiązane zgłoszenia i historię obsługi w kontekście naprawy.',
        src: '/projects/prokom/gallery/historia-klienta-w-naprawie.png',
      },
      {
        title: 'Komunikacja z klientem',
        desc: 'Panel wiadomości pozwala prowadzić rozmowę dotyczącą zgłoszenia bez gubienia kontekstu naprawy.',
        src: '/projects/prokom/gallery/komunikacja-z-klientem.png',
      },
      {
        title: 'Wątek komunikacji',
        desc: 'Szczegółowy widok rozmowy pokazuje historię wiadomości, odpowiedzi i status komunikacji.',
        src: '/projects/prokom/gallery/komunikacja-z-klientem2.png',
      },
      {
        title: 'Komunikacja w karcie naprawy',
        desc: 'Wiadomości są dostępne również bezpośrednio z poziomu zgłoszenia serwisowego.',
        src: '/projects/prokom/gallery/komunikacja-zklientem-do-naprawy.png',
      },
    ],
  },
  {
    title: 'Panel pracownika',
    desc: 'Codzienna praca technika: dashboard, lista napraw, Kanban, powiadomienia, kalendarz i zadania.',
    items: [
      {
        title: 'Dashboard pracownika',
        desc: 'Start pracy technika z licznikami aktywnych napraw, alertami i kartami kolejnych działań.',
        src: '/projects/prokom/gallery/panel-pracownika-main.png',
      },
      {
        title: 'Dalsza część dashboardu',
        desc: 'Uzupełnienie pulpitu o dzisiejsze zadania, szybki przegląd napraw i status części.',
        src: '/projects/prokom/gallery/panel-pracownika-dalsza-czesc.png',
      },
      {
        title: 'Moje naprawy',
        desc: 'Tabela przypisanych napraw z filtrami statusów, klientami, urządzeniami i kosztami.',
        src: '/projects/prokom/gallery/moje-naprawy.png',
      },
      {
        title: 'Kanban pracownika',
        desc: 'Naprawy ułożone w kolumnach statusów, co ułatwia szybkie przełączanie kontekstu pracy.',
        src: '/projects/prokom/gallery/kanban.png',
      },
      {
        title: 'Nieprzypisane naprawy',
        desc: 'Kolejka zgłoszeń bez technika, z akcjami przejęcia i priorytetami wymagającymi reakcji.',
        src: '/projects/prokom/gallery/nieprzypisane-naprawy.png',
      },
      {
        title: 'Powiadomienia',
        desc: 'Centrum alertów dla pracownika z podziałem na typy komunikatów i zgłoszenia wymagające działania.',
        src: '/projects/prokom/gallery/powiadomienia.png',
      },
      {
        title: 'Kalendarz',
        desc: 'Widok kalendarza pokazuje terminy, odbiory, zadania oraz plan pracy serwisu.',
        src: '/projects/prokom/gallery/kalendarz.png',
      },
      {
        title: 'Globalne wyszukiwanie',
        desc: 'Wyszukiwarka pozwala znaleźć naprawę po kliencie, numerze referencyjnym, modelu lub danych kontaktowych.',
        src: '/projects/prokom/gallery/wyszukiwanie-globalne.png',
      },
    ],
  },
  {
    title: 'Panel administratora',
    desc: 'Widoki zarządcze dla kontroli procesu, zespołu, obciążenia techników, zgłoszeń i operacji serwisowych.',
    items: [
      {
        title: 'Dashboard administratora',
        desc: 'KPI zarządcze, pipeline statusów, obciążenie techników i alerty wymagające reakcji zespołu.',
        src: '/projects/prokom/gallery/panel-admina-dashbord.png',
      },
      {
        title: 'Lista zespołu',
        desc: 'Administrator widzi pracowników, role, statusy pracy oraz podstawowe dane operacyjne zespołu.',
        src: '/projects/prokom/gallery/panel-admina-dasbord-dalej3.png',
      },
      {
        title: 'Centrum uwagi',
        desc: 'Dalszy fragment dashboardu zbiera alerty, nieprzypisane zgłoszenia i powiadomienia procesowe.',
        src: '/projects/prokom/gallery/panel-admina-dashbord-dalej.png',
      },
      {
        title: 'Dane aktywności zespołu',
        desc: 'Widok pomaga porównać aktywność techników i szybko wejść w szczegóły pracy konkretnych osób.',
        src: '/projects/prokom/gallery/panel-admina-dashbord-dalej4.png',
      },
      {
        title: 'Zespół',
        desc: 'Panel zespołu pokazuje statusy pracowników, liczbę aktywnych zadań i dostępność serwisu.',
        src: '/projects/prokom/gallery/zespol.png',
      },
      {
        title: 'Zespół dzisiaj',
        desc: 'Dzienny rozkład pracy, obecność oraz zadania przypisane do pracowników.',
        src: '/projects/prokom/gallery/zespol-dzisiaj.png',
      },
      {
        title: 'Klienci',
        desc: 'Lista klientów z filtrami, szybkim podglądem zgłoszeń i przejściem do historii napraw.',
        src: '/projects/prokom/gallery/klioenci.png',
      },
      {
        title: 'Wszystkie naprawy',
        desc: 'Globalna tabela napraw dla administratora z pełnym filtrowaniem i podglądem procesu.',
        src: '/projects/prokom/gallery/wszystkie-naprawy.png',
      },
    ],
  },
  {
    title: 'Operacje serwisowe',
    desc: 'Szczegółowa obsługa napraw: przyjęcia, części, wyceny, statusy, odbiory, reklamacje i kurier.',
    items: [
      {
        title: 'Szczegóły naprawy',
        desc: 'Pełna karta zgłoszenia z danymi urządzenia, klientem, statusem, kosztami i akcjami serwisowymi.',
        src: '/projects/prokom/gallery/szczegoly-naprawy.png',
      },
      {
        title: 'Szczegóły naprawy - dane techniczne',
        desc: 'Rozszerzony widok zgłoszenia pokazuje konfigurację, opis problemu i informacje potrzebne technikowi.',
        src: '/projects/prokom/gallery/szczegoly-naprawy2.png',
      },
      {
        title: 'Zmiana statusu naprawy',
        desc: 'Modal statusu ogranicza przejścia procesu i zapisuje zmianę jako część historii obsługi.',
        src: '/projects/prokom/gallery/zmiana-statusu-naprawy.png',
      },
      {
        title: 'Wycena w naprawie',
        desc: 'Sekcja wyceny pozwala dodać koszt robocizny, części oraz komunikat dla klienta.',
        src: '/projects/prokom/gallery/wycena-w-naprawie.png',
      },
      {
        title: 'Części',
        desc: 'Widok magazynu pokazuje części, stany, kategorie i elementy wymagające zamówienia.',
        src: '/projects/prokom/gallery/czesci.png',
      },
      {
        title: 'Części do naprawy',
        desc: 'Karta naprawy pozwala przypisać części, ilości i status rezerwacji pod konkretne zgłoszenie.',
        src: '/projects/prokom/gallery/czesci-do-naprawy.png',
      },
      {
        title: 'Hurtownie',
        desc: 'Lista dostawców części z podstawowymi danymi i szybkim wejściem w zamówienia.',
        src: '/projects/prokom/gallery/hurtownie.png',
      },
      {
        title: 'Zamówienia hurtowni',
        desc: 'Panel porządkuje zamówienia części, statusy dostaw i braki blokujące naprawy.',
        src: '/projects/prokom/gallery/hurtownie2.png',
      },
      {
        title: 'Przyjęcie stacjonarne',
        desc: 'Workflow przyjęcia sprzętu w serwisie prowadzi pracownika przez klienta, urządzenie i opis problemu.',
        src: '/projects/prokom/gallery/przyjecie-stacjonarne.png',
      },
      {
        title: 'Przyjęcie - dane urządzenia',
        desc: 'Dalszy krok formularza zbiera model, numer seryjny, stan urządzenia i akcesoria.',
        src: '/projects/prokom/gallery/przyjecie-stacjonarne-dalej.png',
      },
      {
        title: 'Przyjęcie - opis usterki',
        desc: 'Widok pomaga doprecyzować problem, objawy i informacje przekazane przez klienta.',
        src: '/projects/prokom/gallery/przyjecie-stacjonarne-dalej3.png',
      },
      {
        title: 'Przyjęcie - podsumowanie',
        desc: 'Podsumowanie zbiera dane przed utworzeniem zgłoszenia i pozwala wykryć braki w informacji.',
        src: '/projects/prokom/gallery/przyjecie-stacjonarne-dalej4.png',
      },
      {
        title: 'Przyjęcie reklamacyjne',
        desc: 'Osobny flow reklamacji rozdziela gwarancję, problem po naprawie i dalszą obsługę klienta.',
        src: '/projects/prokom/gallery/przyjecie-reklamacyjne.png',
      },
      {
        title: 'Reklamacje',
        desc: 'Lista reklamacji pokazuje statusy, powiązane naprawy i elementy wymagające decyzji serwisu.',
        src: '/projects/prokom/gallery/reklamacje.png',
      },
      {
        title: 'Odbiory i wydania',
        desc: 'Panel pilnuje urządzeń gotowych do wydania, opóźnień i komunikacji z klientem.',
        src: '/projects/prokom/gallery/odbiory-wydania.png',
      },
      {
        title: 'Kurier w naprawie',
        desc: 'Sekcja dostawy zapisuje dane wysyłki, sposób odbioru i status transportu urządzenia.',
        src: '/projects/prokom/gallery/kurier-w-naprawie.png',
      },
    ],
  },
  {
    title: 'Analityka i audyt',
    desc: 'Raportowanie, historia zmian i zadania wspierające kontrolę jakości oraz odtwarzanie przebiegu obsługi.',
    items: [
      {
        title: 'Statystyki',
        desc: 'Karty KPI pokazują przychód, zakończone naprawy, prace w toku, zaległości i średni czas realizacji.',
        src: '/projects/prokom/gallery/statystyki.png',
      },
      {
        title: 'Wykresy statystyk',
        desc: 'Dalsza część analityki pokazuje trendy napraw, przychodów i strukturę statusów.',
        src: '/projects/prokom/gallery/statystyki-dalej.png',
      },
      {
        title: 'Rozkład obciążenia',
        desc: 'Widok porównuje statusy, typy urządzeń, wyniki techników i obszary wymagające uwagi.',
        src: '/projects/prokom/gallery/statystyki-dalej2.png',
      },
      {
        title: 'Historia napraw',
        desc: 'Audit log zbiera zmianę statusów, aktywność użytkowników i przebieg obsługi zgłoszeń.',
        src: '/projects/prokom/gallery/historia-napraw.png',
      },
      {
        title: 'Zadania',
        desc: 'Lista zadań łączy akcje serwisowe z naprawami, terminami i odpowiedzialnymi osobami.',
        src: '/projects/prokom/gallery/zadania.png',
      },
      {
        title: 'Planowanie zadania',
        desc: 'Widok szczegółów zadania pokazuje kalendarz, priorytet i powiązanie z konkretną naprawą.',
        src: '/projects/prokom/gallery/zadania2.png',
      },
      {
        title: 'Zadania do naprawy',
        desc: 'Karta zgłoszenia pozwala dodać zadania techniczne, oznaczyć postęp i kontrolować wykonanie.',
        src: '/projects/prokom/gallery/zadania-do-naprawy.png',
      },
    ],
  },
]

const galleryGroupsEn: GalleryGroup[] = [
  {
    title: 'Customer Panel',
    desc: 'Entry points for customers: public landing page, repair request form, repair status and mobile view.',
    items: [
      { title: 'Service landing page', desc: 'Public service landing page with the main repair request CTA and cards for the key services.' },
      { title: 'Online repair request form', desc: 'A multi-step form guides the customer through contact details, device information, delivery, add-ons and summary.' },
      { title: 'Customer status panel', desc: 'Customers can see the request status, service activity, active repairs and quick contact actions.' },
      { title: 'Mobile request view', desc: 'The responsive form keeps the full repair request flow usable on a phone.' },
      { title: 'Customer repair history', desc: 'This view shows the customer devices, related requests and service history in the repair context.' },
      { title: 'Customer communication', desc: 'The message panel keeps the repair conversation attached to the relevant request.' },
      { title: 'Conversation thread', desc: 'A detailed conversation view shows message history, replies and communication status.' },
      { title: 'Messages inside a repair card', desc: 'Messages are also available directly from the service request view.' },
    ].map((item, index) => ({ ...item, src: src(gallerySources.client[index]) })),
  },
  {
    title: 'Staff Panel',
    desc: 'Daily technician workflow: dashboard, repair list, Kanban board, notifications, calendar and tasks.',
    items: [
      { title: 'Staff dashboard', desc: 'The technician start view combines active repair counters, alerts and next-action cards.' },
      { title: 'Dashboard continuation', desc: 'The lower dashboard area adds today tasks, a quick repair overview and parts status.' },
      { title: 'My repairs', desc: 'A table of assigned repairs with filters for statuses, customers, devices and costs.' },
      { title: 'Staff Kanban board', desc: 'Repairs are arranged in status columns, making it easier to switch work context quickly.' },
      { title: 'Unassigned repairs', desc: 'A queue of requests without an assigned technician, with takeover actions and priorities that need attention.' },
      { title: 'Notifications', desc: 'A staff alert center grouped by message type and requests that require action.' },
      { title: 'Calendar', desc: 'The calendar view shows deadlines, pickups, tasks and the service work plan.' },
      { title: 'Global search', desc: 'Search helps find repairs by customer, reference number, model or contact details.' },
    ].map((item, index) => ({ ...item, src: src(gallerySources.staff[index]) })),
  },
  {
    title: 'Administrator Panel',
    desc: 'Management views for process control, team work, technician workload, requests and service operations.',
    items: [
      { title: 'Admin dashboard', desc: 'Management KPIs, status pipeline, technician workload and alerts that require team attention.' },
      { title: 'Team list', desc: 'The administrator sees staff members, roles, work statuses and basic operational team data.' },
      { title: 'Attention center', desc: 'A dashboard section collecting alerts, unassigned requests and process notifications.' },
      { title: 'Team activity data', desc: 'This view helps compare technician activity and quickly open the work details for specific people.' },
      { title: 'Team', desc: 'The team panel shows staff statuses, active task counts and service availability.' },
      { title: 'Team today', desc: 'Daily work schedule, attendance and tasks assigned to staff members.' },
      { title: 'Customers', desc: 'Customer list with filters, quick request previews and access to repair history.' },
      { title: 'All repairs', desc: 'A global repair table for administrators with full filtering and process preview.' },
    ].map((item, index) => ({ ...item, src: src(gallerySources.admin[index]) })),
  },
  {
    title: 'Service Operations',
    desc: 'Detailed repair handling: intake, parts, estimates, statuses, pickups, complaints and courier delivery.',
    items: [
      { title: 'Repair details', desc: 'A full service request card with device data, customer details, status, costs and service actions.' },
      { title: 'Repair details - technical data', desc: 'An expanded request view showing configuration, problem description and information needed by the technician.' },
      { title: 'Repair status change', desc: 'The status modal limits process transitions and saves each change as part of the service history.' },
      { title: 'Repair estimate', desc: 'The estimate section lets staff add labor cost, parts and a customer-facing message.' },
      { title: 'Parts inventory', desc: 'The inventory view shows parts, stock levels, categories and items that need ordering.' },
      { title: 'Parts assigned to a repair', desc: 'The repair card lets staff assign parts, quantities and reservation status to a specific request.' },
      { title: 'Suppliers', desc: 'A supplier list with basic details and quick access to orders.' },
      { title: 'Supplier orders', desc: 'This panel organizes parts orders, delivery statuses and shortages blocking repairs.' },
      { title: 'In-store intake', desc: 'The in-store intake workflow guides staff through customer details, device data and problem description.' },
      { title: 'Intake - device data', desc: 'The next form step collects model, serial number, device condition and accessories.' },
      { title: 'Intake - fault description', desc: 'This view helps clarify the problem, symptoms and information provided by the customer.' },
      { title: 'Intake - summary', desc: 'The summary gathers data before creating the request and helps catch missing information.' },
      { title: 'Complaint intake', desc: 'A separate complaint flow splits warranty context, post-repair issues and follow-up customer handling.' },
      { title: 'Complaints', desc: 'The complaint list shows statuses, related repairs and items that need a service decision.' },
      { title: 'Pickups and releases', desc: 'This panel tracks devices ready for pickup, delays and customer communication.' },
      { title: 'Courier in repair flow', desc: 'The delivery section stores shipping data, pickup method and device transport status.' },
    ].map((item, index) => ({ ...item, src: src(gallerySources.service[index]) })),
  },
  {
    title: 'Analytics and Audit',
    desc: 'Reporting, change history and tasks that support quality control and reconstructing the service process.',
    items: [
      { title: 'Statistics', desc: 'KPI cards show revenue, completed repairs, work in progress, overdue items and average completion time.' },
      { title: 'Statistics charts', desc: 'The analytics continuation shows repair trends, revenue trends and status distribution.' },
      { title: 'Workload distribution', desc: 'This view compares statuses, device types, technician results and areas that need attention.' },
      { title: 'Repair history', desc: 'The audit log records status changes, user activity and the service request history.' },
      { title: 'Tasks', desc: 'The task list connects service actions with repairs, deadlines and responsible people.' },
      { title: 'Task planning', desc: 'The task detail view shows calendar context, priority and connection to a specific repair.' },
      { title: 'Repair tasks', desc: 'The request card allows staff to add technical tasks, mark progress and control completion.' },
    ].map((item, index) => ({ ...item, src: src(gallerySources.analytics[index]) })),
  },
]

const galleryLabelsEn = {
  enlargeAria: 'Enlarge screenshot',
  enlarge: 'Enlarge',
  closeAria: 'Close preview',
  previewHeading: 'View preview',
  note: 'This view contains test or anonymized data. Public login to staff and administrator panels is not available for security reasons.',
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'

  return {
    title: isEn
      ? 'PRO-KOM Serwis System - View Gallery'
      : 'PRO-KOM Serwis System - Galeria widoków',
    description: isEn
      ? 'Full gallery of anonymized PRO-KOM system views: customer panel, staff panel, administrator panel, service operations, analytics and audit.'
      : 'Pełna galeria zanonimizowanych widoków systemu PRO-KOM: panel klienta, pracownika, administratora, operacje serwisowe, analityka i audyt.',
  }
}

export default async function ProkomGalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const isEn = locale === 'en'
  const galleryGroups = isEn ? galleryGroupsEn : galleryGroupsPl

  return (
    <main className="min-h-screen bg-[#050D12] text-[#F0F9FF]">
      <section className="border-b border-[rgba(34,211,238,0.1)] py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects/prokom-system"
            className="mb-8 inline-flex items-center gap-2 text-xs text-[#3A5F73] transition-colors hover:text-[#22D3EE]"
            style={{ fontFamily: 'var(--font-dm-mono)' }}
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {isEn ? 'Back to case study' : 'Powrót do case study'}
          </Link>
          <p
            className="mb-3 text-xs tracking-widest text-[#22D3EE] uppercase"
            style={{ fontFamily: 'var(--font-dm-mono)' }}
          >
            {isEn ? 'PRO-KOM / GALLERY' : 'PRO-KOM / GALERIA'}
          </p>
          <h1
            className="max-w-3xl text-4xl font-bold sm:text-5xl"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            {isEn ? 'Full system view gallery' : 'Pełna galeria widoków systemu'}
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[#7EA8BD] sm:text-base">
            {isEn
              ? 'Anonymized screenshots show the most important parts of the workflow: repair request, customer panel, technician work, process management, inventory, communication, analytics and change history. Public login to staff and administrator panels is not available for security and confidentiality reasons.'
              : 'Zanonimizowane screenshoty pokazują najważniejsze części workflow: zgłoszenie naprawy, panel klienta, pracę technika, zarządzanie procesem, magazyn, komunikację, analitykę i historię zmian. Publiczne logowanie do panelu pracownika i administratora nie jest udostępniane ze względów bezpieczeństwa oraz poufności danych.'}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
        {galleryGroups.map((group) => (
          <section key={group.title}>
            <div className="mb-6">
              <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-sora)' }}>
                {group.title}
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#7EA8BD]">{group.desc}</p>
            </div>
            <ScreenshotLightboxGrid
              items={group.items}
              labels={isEn ? galleryLabelsEn : undefined}
              imageSizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
            />
          </section>
        ))}
      </div>
    </main>
  )
}


