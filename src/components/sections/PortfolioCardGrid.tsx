import {
  Award,
  BriefcaseBusiness,
  FolderKanban,
  Info,
  Layers,
} from 'lucide-react'

import { PortfolioCard } from '@/components/shared/PortfolioCard'

import './PortfolioCardGrid.css'

const techStack = [
  'SQL',
  'MySQL',
  'Power BI',
  'Python',
  'Excel',
  'Spreadsheet',
  'Figma',
  'HTML',
  'CSS',
  'JavaScript',
  'Vite',
  'React',
  'Git',
  'GitHub',
]

const projectPlaceholders = ['Project one', 'Project two']
const experienceEntries = [
  {
    id: 'enov8tive',
    role: 'HR Analytics and Data Intern',
    company: 'enov8tive',
    dates: 'August - September 2026',
  },
  {
    id: 'teleperformance',
    role: 'Operation Customer Expert I',
    company: 'Teleperformance',
    dates: 'June - September 2025',
  },

  {
    id: 'quezon city university',
    role: 'Bachelor of Science in Information Technology',
    company: 'Quezon City University',
    dates: '2021 - Present',
  }
]

export function PortfolioCardGrid() {
  return (
    <section aria-label="Portfolio overview" className="portfolio-grid">
      <PortfolioCard tone="profile" title="Profile" blank />

      <PortfolioCard tone="about" title="About" icon={Info}>
        <div className="flex flex-1 items-center">
          <p className="max-w-prose text-pretty">
            I'm a fourth-year BSIT student with a strong interest in data analytics and turning raw data into useful insights. 
            I enjoy exploring data, creating dashboards, finding patterns, and learning tools like SQL, Excel, and Power BI. 
            I also like working on projects that help me improve my technical and problem-solving skills. 
            Outside of academics, I enjoy learning new technologies, exploring data visualization, and building projects that allow me to grow as a future Data Analyst.
          </p>
        </div>
      </PortfolioCard>

      <PortfolioCard tone="projects" title="Projects" icon={FolderKanban}>
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

      <PortfolioCard tone="experience" title="Experience" icon={BriefcaseBusiness}>
        <ol className="flex flex-1 flex-col gap-4">
          {experienceEntries.map((experience, index) => (
            <li key={experience.id} className="relative pl-5">
              <span
                aria-hidden="true"
                className="absolute left-0 top-1 size-2.5 rounded-full border-2 border-slate-900/20 bg-white"
              />
              {index < experienceEntries.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-[4px] top-3.5 h-[calc(100%+0.375rem)] w-0.5 bg-slate-900/20"
                />
              )}
              <p className="text-sm font-medium text-slate-900">
                {experience.role}
              </p>
              <p className="text-xs text-slate-600">
                {experience.company} · {experience.dates}
              </p>
            </li>
          ))}
        </ol>
      </PortfolioCard>

      <PortfolioCard tone="certifications" title="Certifications" icon={Award}>
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

      <PortfolioCard tone="tech-stack" title="Tech Stack" icon={Layers}>
        <ul className="flex flex-1 flex-wrap content-center gap-2">
          {techStack.map((technology) => (
            <li
              key={technology}
              className="max-w-full break-words rounded-sm border border-slate-900/20 bg-transparent px-2.5 py-1 text-[11px] font-medium leading-4 text-slate-700"
            >
              {technology}
            </li>
          ))}
        </ul>
      </PortfolioCard>
    </section>
  )
}
