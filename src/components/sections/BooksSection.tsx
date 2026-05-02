'use client'

import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'

const BOOKS = [
  {
    title: 'Czysty Kod',
    author: 'Robert C. Martin',
    lesson: 'Kod piszemy dla ludzi, nie dla maszyn. Czytelność to profesjonalizm.',
  },
  {
    title: 'Pragmatyczny Programista',
    author: 'Hunt & Thomas',
    lesson: 'Weź odpowiedzialność za swój craft. Nie narzekaj — napraw.',
  },
  {
    title: 'Software Craftsman',
    author: 'Sandro Mancuso',
    lesson: 'Profesjonalizm to coś więcej niż tylko działający kod.',
  },
  {
    title: 'Mistrz Czystego Kodu',
    author: 'Robert C. Martin',
    lesson: 'Architektura to decyzje których koszt zmian rośnie z czasem.',
  },
  {
    title: 'TDD: Sztuka Dobrego Kodu',
    author: 'Robert C. Martin',
    lesson: 'Testy to dokumentacja żywego kodu. Piszą się przed, nie po.',
  },
  {
    title: 'Algorytmy',
    author: 'Sedgewick & Wayne',
    lesson: 'Fundamenty pod każdy framework. Bez nich budujesz na piasku.',
  },
  {
    title: 'C++ Opus Magnum',
    author: 'Jerzy Grębosz',
    lesson: 'Tu zaczyna się rozumienie jak działa komputer od środka.',
  },
] as const

export function BooksSection() {
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
            BIBLIOTEKA
          </p>
          <h2 className="text-3xl font-semibold text-[#F0F9FF]">
            Czytam bo chcę, nie bo muszę
          </h2>
          <p className="max-w-xl text-[#7EA8BD]">
            7 książek technicznych które ukształtowały moje podejście do programowania.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {BOOKS.map((book, i) => (
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
