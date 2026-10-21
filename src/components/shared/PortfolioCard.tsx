import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

export type PortfolioCardTone =
  | 'profile'
  | 'about'
  | 'socials'
  | 'experience'
  | 'certifications'
  | 'projects'
  | 'education'

type PortfolioCardProps = {
  tone: PortfolioCardTone
  title: string
  children: ReactNode
  className?: string
}

export function PortfolioCard({
  tone,
  title,
  children,
  className,
}: PortfolioCardProps) {
  return (
    <article
      data-card={tone}
      className={cn(
        'flex min-h-0 min-w-0 flex-col overflow-hidden rounded-2xl border border-black/5 p-4 text-slate-900 sm:p-5 xl:p-6',
        className,
      )}
    >
      <h2 className="text-base font-semibold tracking-tight text-balance sm:text-lg">
        {title}
      </h2>
      <div className="mt-3 flex min-h-0 flex-1 flex-col gap-3 text-sm leading-6 text-slate-700">
        {children}
      </div>
    </article>
  )
}
