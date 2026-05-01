import { useTranslations } from 'next-intl'
import { Card, Section } from '@/components/ui'

const BOOK_KEYS = ['cleanCode', 'pragmatic', 'craftsman', 'cleanCoder', 'tdd', 'algorithms', 'cpp'] as const

export function BooksSection() {
  const t = useTranslations('books')

  return (
    <Section className="py-20">
      <div className="space-y-10">
        <div className="space-y-4">
          <p className="font-dm-mono text-xs uppercase tracking-[0.2em] text-(--accent-cyan)">
            {t('eyebrow')}
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-(--text-primary) md:text-4xl">
            {t('title')}
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-(--text-secondary) md:text-lg">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BOOK_KEYS.map((bookKey) => (
            <Card key={bookKey} padding="md" className="space-y-3">
              <h3 className="text-lg font-semibold text-(--text-primary)">{t(`items.${bookKey}.title`)}</h3>
              <p className="font-dm-mono text-xs uppercase tracking-wide text-(--accent-cyan)">
                {t(`items.${bookKey}.author`)}
              </p>
              <p className="text-sm leading-relaxed text-(--text-secondary)">
                {t(`items.${bookKey}.insight`)}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
