import { UserRound } from 'lucide-react'

import { PortfolioCard } from '@/components/shared/PortfolioCard'

import './PortfolioCardGrid.css'

const socialNetworks = ['GitHub', 'LinkedIn', 'Email']
const projectPlaceholders = ['Project one', 'Project two']

export function PortfolioCardGrid() {
  return (
    <section aria-label="Portfolio overview" className="portfolio-grid">
      <PortfolioCard tone="profile" title="Profile">
        <div className="flex flex-1 flex-col justify-between gap-8">
          <div className="flex flex-col gap-4">
            <div className="grid size-20 place-items-center rounded-full border border-black/5 bg-white/50 text-slate-500 sm:size-24">
              <UserRound
                aria-hidden="true"
                className="size-8"
                strokeWidth={1.5}
              />
            </div>
            <div>
              <p className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                Your name
              </p>
              <p className="mt-1 text-sm text-slate-600">Your role or title</p>
            </div>
          </div>
          <p className="text-sm leading-6 text-slate-600">
            Add a profile photo and a short introduction here.
          </p>
        </div>
      </PortfolioCard>

      <PortfolioCard tone="about" title="About">
        <div className="flex flex-1 items-center">
          <p className="max-w-prose text-pretty">
            Use this space for a short introduction about who you are, what you
            do, and what you are currently focused on.
          </p>
        </div>
      </PortfolioCard>

      <PortfolioCard tone="projects" title="Projects">
        <div className="grid flex-1 gap-3 lg:grid-cols-2">
          {projectPlaceholders.map((project) => (
            <div
              key={project}
              className="min-w-0 rounded-xl border border-black/5 bg-white/40 p-4"
            >
              <p className="text-sm font-semibold text-slate-900">{project}</p>
              <p className="mt-1 text-xs leading-5 text-slate-600">
                Add a short summary, your role, and the tools you used.
              </p>
            </div>
          ))}
        </div>
      </PortfolioCard>

      <PortfolioCard tone="experience" title="Experience">
        <div className="flex flex-1 flex-col">
          <div className="border-l-2 border-slate-900/10 pl-3">
            <p className="text-sm font-medium text-slate-900">Role title</p>
            <p className="text-xs text-slate-600">Company · Year range</p>
          </div>
          <p className="mt-auto pt-3 text-xs leading-5 text-slate-600">
            Add your roles, companies, and dates here.
          </p>
        </div>
      </PortfolioCard>

      <PortfolioCard tone="socials" title="Socials">
        <div className="flex flex-1 flex-col">
          <ul className="flex flex-col gap-2">
            {socialNetworks.map((network) => (
              <li
                key={network}
                className="flex items-center gap-2 text-sm font-medium text-slate-800"
              >
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-slate-900/30"
                />
                {network}
              </li>
            ))}
          </ul>
          <p className="mt-auto pt-3 text-xs leading-5 text-slate-600">
            Add your profile links.
          </p>
        </div>
      </PortfolioCard>

      <PortfolioCard tone="certifications" title="Certifications">
        <div className="flex flex-1 flex-col">
          <div>
            <p className="text-sm font-medium text-slate-900">
              Certification name
            </p>
            <p className="text-xs text-slate-600">Issuer · Year</p>
          </div>
          <p className="mt-auto pt-3 text-xs leading-5 text-slate-600">
            Add your certifications here.
          </p>
        </div>
      </PortfolioCard>

      <PortfolioCard tone="education" title="Education">
        <div className="flex flex-1 flex-col">
          <div>
            <p className="text-sm font-medium text-slate-900">
              Degree or program
            </p>
            <p className="text-xs text-slate-600">School · Year</p>
          </div>
          <p className="mt-auto pt-3 text-xs leading-5 text-slate-600">
            Add your education here.
          </p>
        </div>
      </PortfolioCard>
    </section>
  )
}
