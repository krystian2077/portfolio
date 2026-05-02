'use client'

import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'
import { useLocale } from 'next-intl'

const BOOKS_EN = [
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    lesson:
      'Code is written for people, not only for machines. Readability, naming and simplicity are part of professionalism.',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt, David Thomas',
    lesson:
      'Take responsibility, automate, look for better solutions and keep improving your craft.',
  },
  {
    title: 'Software Craftsman',
    author: 'Sandro Mancuso',
    lesson:
      'Programming is a craft - quality, responsibility and long-term value matter.',
  },
  {
    title: 'The Clean Coder',
    author: 'Robert C. Martin',
    lesson:
      'Professionalism is not only about code. It is also about communication, responsibility and an honest approach to work.',
  },
  {
    title: 'Test-Driven Development: By Example',
    author: 'Kent Beck',
    lesson:
      'Tests help clarify requirements and design system behavior before implementation.',
  },
  {
    title: 'Grokking Algorithms',
    author: 'Aditya Bhargava',
    lesson:
      'Algorithms teach problem solving - how to choose an approach that is simpler, faster and more scalable.',
  },
  {
    title: 'C++ Opus Magnum',
    author: 'Jerzy Grębosz',
    lesson:
      'C++ fundamentals help me better understand memory, program structure and what happens under the hood.',
  },
] as const

const BOOKS_PL = [
  {
    title: 'Czysty Kod',
    author: 'Robert C. Martin',
    lesson:
      'Kod piszemy dla ludzi, nie tylko dla maszyn. Czytelność, nazewnictwo i prostota to część profesjonalizmu.',
  },
  {
    title: 'Pragmatyczny Programista',
    author: 'Andrew Hunt, David Thomas',
    lesson:
      'Bierz odpowiedzialność, automatyzuj, szukaj lepszych rozwiązań i stale rozwijaj swój warsztat.',
  },
  {
    title: 'Software Craftsman',
    author: 'Sandro Mancuso',
    lesson:
      'Programowanie to rzemiosło - liczy się jakość, odpowiedzialność i długoterminowa wartość kodu.',
  },
  {
    title: 'Mistrz Czystego Kodu',
    author: 'Robert C. Martin',
    lesson:
      'Profesjonalizm to nie tylko kod, ale też komunikacja, odpowiedzialność i uczciwe podejście do pracy.',
  },
  {
    title: 'TDD: Sztuka tworzenia dobrego kodu',
    author: 'Kent Beck',
    lesson:
      'Testy pomagają lepiej rozumieć wymagania i projektować zachowanie systemu przed implementacją.',
  },
  {
    title: 'Algorytmy. Ilustrowany przewodnik',
    author: 'Aditya Bhargava',
    lesson:
      'Algorytmy uczą myślenia o problemach - jak wybrać rozwiązanie prostsze, szybsze i bardziej skalowalne.',
  },
  {
    title: 'C++ Opus Magnum',
    author: 'Jerzy Grębosz',
    lesson:
      'Fundamenty C++ pomagają lepiej rozumieć pamięć, strukturę programu i to, co dzieje się pod spodem.',
  },
] as const

export function BooksSection() {
  const locale = useLocale()
  const isEn = locale === 'en'
  const books = isEn ? BOOKS_EN : BOOKS_PL

  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 space-y-3"
        >
          <p className="font-dm-mono text-xs uppercase tracking-widest text-[#22D3EE]">
            {isEn ? 'LIBRARY' : 'BIBLIOTEKA'}
          </p>
          <h2 className="text-3xl font-semibold text-[#F0F9FF]">
            {isEn
              ? 'Books that shaped my approach to programming'
              : 'Książki, które ukształtowały moje podejście do programowania'}
          </h2>
          <p className="max-w-xl text-[#7EA8BD]">
            {isEn
              ? 'I do not read technical books just to add them to a CV. I read them because I genuinely want to understand code, quality and responsibility in software development.'
              : 'Czytam je nie dla CV, tylko dlatego, że naprawdę chcę lepiej rozumieć kod, jakość i odpowiedzialność w pracy developera.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {books.map((book, i) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex h-full flex-col rounded-xl border border-[rgba(34,211,238,0.1)] bg-[#081420] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(34,211,238,0.25)]"
            >
              <BookOpen className="mb-3 h-8 w-8 shrink-0 text-[#22D3EE]" />
              <h3 className="mb-1 text-sm font-semibold text-[#F0F9FF]">{book.title}</h3>
              <p className="mb-3 font-dm-mono text-xs text-[#3A5F73]">{book.author}</p>
              <p className="text-xs italic leading-relaxed text-[#7EA8BD]">{book.lesson}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
