import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

export type PortfolioCardTone =
  | 'profile'
  | 'about'
  | 'tech-stack'
  | 'experience'
  | 'certifications'
  | 'projects'

type PortfolioCardProps = {
  tone: PortfolioCardTone
  title: string
  icon?: LucideIcon
  media?: ReactNode
  children?: ReactNode
  className?: string
  blank?: boolean
}

export function PortfolioCard({
  tone,
  title,
  icon: Icon,
  media,
  children,
  className,
  blank = false,
}: PortfolioCardProps) {
  const isMediaCard = Boolean(media) || blank

  return (
    <article
      data-card={tone}
      className={cn(
        'relative flex min-h-0 min-w-0 flex-col overflow-hidden rounded-lg border border-black/[0.12] text-slate-900',
        isMediaCard ? 'p-0' : 'p-4 sm:p-5 xl:p-6',
        className,
      )}
    >
      {blank ? (
        <h2 className="sr-only">{title}</h2>
      ) : media ? (
        <>
          <div className="absolute inset-0">{media}</div>
          <h2 className="sr-only">{title}</h2>
        </>
      ) : (
        <>
          <header className="flex items-center gap-2.5">
            {Icon ? (
              <Icon
                aria-hidden="true"
                className="size-4 shrink-0 text-slate-500 sm:size-[1.125rem]"
                strokeWidth={1.7}
              />
            ) : null}
            <h2 className="text-base font-semibold tracking-[-0.015em] text-balance sm:text-[17px]">
              {title}
            </h2>
          </header>
          <div className="mt-3.5 flex min-h-0 flex-1 flex-col gap-3 text-sm leading-6 text-slate-600">
            {children}
          </div>
        </>
      )}
    </article>
  )
}
