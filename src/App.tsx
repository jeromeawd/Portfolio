import { ChevronDown } from 'lucide-react'

import { PortfolioCardGrid } from './components/sections/PortfolioCardGrid'

function App() {
  return (
    <div className="overflow-x-clip bg-background font-sans">
      <section
        id="home"
        className="relative flex min-h-svh items-start justify-center px-4 pt-8 pb-20 sm:items-center sm:px-5 sm:pt-10 sm:pb-24 lg:px-6 lg:pt-12 lg:pb-24"
      >
        <main className="w-full" aria-labelledby="portfolio-title">
          <h1 id="portfolio-title" className="sr-only">
            Portfolio
          </h1>
          <PortfolioCardGrid />
        </main>

        <a
          href="#projects"
          className="absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-col items-center gap-0.5 py-1.5 text-[11px] font-medium tracking-[0.14em] text-slate-500 uppercase transition-colors hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-400 sm:bottom-5"
        >
          Scroll to projects
          <ChevronDown
            aria-hidden="true"
            className="size-3.5"
            strokeWidth={1.7}
          />
        </a>
      </section>

      <section
        id="projects"
        className="flex min-h-svh px-4 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-5"
        aria-labelledby="projects-title"
      >
        <h2 id="projects-title" className="sr-only">
          Projects
        </h2>
        <div className="mx-auto w-full max-w-[70rem] flex-1 rounded-md border border-black/[0.18] bg-white shadow-[var(--portfolio-card-shadow)]" />
      </section>
    </div>
  )
}

export default App
