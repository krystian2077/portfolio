import { cn } from '@/lib/utils'

type SectionProps<T extends React.ElementType = 'section'> = {
  as?: T
  className?: string
  children: React.ReactNode
  id?: string
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children' | 'id'>

export function Section<T extends React.ElementType = 'section'>({
  as,
  className,
  children,
  id,
  ...props
}: SectionProps<T>) {
  const Tag = (as ?? 'section') as React.ElementType
  return (
    <Tag
      id={id}
      className={cn('mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {children}
    </Tag>
  )
}
