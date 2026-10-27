import { ChevronDown } from 'lucide-react'

import { PortfolioCardGrid } from './components/sections/PortfolioCardGrid'

function App() {
  return (
    <div className="overflow-x-clip bg-background font-sans">
      <section
        id="home"
        className="relative flex min-h-screen items-start justify-center px-4 pt-10 pb-24 sm:px-6 sm:pt-14 sm:pb-28 lg:items-center lg:px-8 lg:pt-20 lg:pb-28"
      >
        <main className="w-full" aria-labelledby="portfolio-title">
          <h1 id="portfolio-title" className="sr-only">
            Portfolio
          </h1>
          <PortfolioCardGrid />
        </main>

        <a
          href="#projects"
          className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-[11px] font-medium tracking-[0.16em] text-slate-500 uppercase transition-colors hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-400"
        >
          Scroll to projects
          <ChevronDown
            aria-hidden="true"
            className="size-4"
            strokeWidth={1.7}
          />
        </a>
      </section>

      <section
        id="projects"
        className="flex min-h-screen px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8"
        aria-labelledby="projects-title"
      >
        <h2 id="projects-title" className="sr-only">
          Projects
        </h2>
        <div className="mx-auto w-full max-w-[76rem] flex-1 rounded-lg border border-black/[0.18] bg-white shadow-[var(--portfolio-card-shadow)]" />
      </section>
    </div>
  )
}

export default App
