import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'

const galleryGroups = [
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

export const metadata: Metadata = {
  title: 'PRO-KOM Serwis System - Galeria widoków',
  description:
    'Pełna galeria zanonimizowanych widoków systemu PRO-KOM: panel klienta, pracownika, administratora, operacje serwisowe, analityka i audyt.',
}

export default function ProkomGalleryPage() {
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
            Powrót do case study
          </Link>
          <p
            className="mb-3 text-xs tracking-widest text-[#22D3EE] uppercase"
            style={{ fontFamily: 'var(--font-dm-mono)' }}
          >
            PRO-KOM / GALERIA
          </p>
          <h1
            className="max-w-3xl text-4xl font-bold sm:text-5xl"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Pełna galeria widoków systemu
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[#7EA8BD] sm:text-base">
            Zanonimizowane screenshoty pokazują najważniejsze części workflow: zgłoszenie naprawy,
            panel klienta, pracę technika, zarządzanie procesem, magazyn, komunikację, analitykę i
            historię zmian. Publiczne logowanie do panelu pracownika i administratora nie jest
            udostępniane ze względów bezpieczeństwa oraz poufności danych.
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
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => (
                <article
                  key={item.src}
                  className="overflow-hidden rounded-2xl border border-[rgba(34,211,238,0.1)] bg-[#081420] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(34,211,238,0.28)] hover:shadow-[0_18px_50px_rgba(34,211,238,0.08)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-[rgba(34,211,238,0.08)] bg-[#050D12]">
                    <Image
                      src={item.src}
                      alt={`PRO-KOM Serwis System - ${item.title}`}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 font-semibold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-[#7EA8BD]">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
