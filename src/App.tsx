import { PortfolioCardGrid } from './components/sections/PortfolioCardGrid'

function App() {
  return (
    <div className="flex min-h-svh items-start justify-center bg-background px-4 py-8 font-sans sm:px-6 sm:py-12 lg:items-center lg:px-8 lg:py-16">
      <main className="w-full" aria-labelledby="portfolio-title">
        <h1 id="portfolio-title" className="sr-only">
          Portfolio
        </h1>
        <PortfolioCardGrid />
      </main>
    </div>
  )
}

export default App
