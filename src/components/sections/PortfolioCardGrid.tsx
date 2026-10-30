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
  'Google Apps Script',
  'Vite',
  'React',
  'Git',
  'GitHub',
]

const projectPlaceholders = ['Project one', 'Project two']
const experienceEntries = [
  {
    id: 'tambay',
    role: 'LF Internship Program',
    company: 'Tambay',
    dates: 'please na oh',
  },
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
        <div className="grid flex-1 gap-2 lg:grid-cols-2">
          {projectPlaceholders.map((project) => (
            <a
              key={project}
              href="#projects"
              className="block min-w-0 rounded-md border border-black/5 bg-white/40 p-3 transition-colors hover:border-slate-900/15 hover:bg-white/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
            >
              <p className="text-[13px] leading-5 font-semibold text-slate-900">
                {project}
              </p>
              <p className="mt-0.5 text-xs leading-4 text-slate-600">
                Add a short summary, your role, and the tools you used.
              </p>
            </a>
          ))}
        </div>
      </PortfolioCard>

      <PortfolioCard tone="experience" title="Experience" icon={BriefcaseBusiness}>
        <ol className="flex flex-1 flex-col gap-3">
          {experienceEntries.map((experience, index) => (
            <li key={experience.id} className="relative pl-4">
              <span
                aria-hidden="true"
                className="absolute top-1 left-0 size-2 rounded-full border-2 border-slate-900/20 bg-white"
              />
              {index < experienceEntries.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-3 left-[3.5px] h-[calc(100%+0.25rem)] w-px bg-slate-900/20"
                />
              )}
              <p className="text-[13px] leading-[1.15rem] font-medium text-slate-900">
                {experience.role}
              </p>
              <p className="text-xs leading-4 text-slate-600">
                {experience.company} · {experience.dates}
              </p>
            </li>
          ))}
        </ol>
      </PortfolioCard>

      <PortfolioCard tone="certifications" title="Certifications" icon={Award}>
        <div className="flex flex-1 flex-col">
          <div>
            <p className="text-[13px] leading-5 font-medium text-slate-900">
              Certification name
            </p>
            <p className="text-xs leading-4 text-slate-600">Issuer · Year</p>
          </div>
        </div>
      </PortfolioCard>

      <PortfolioCard tone="tech-stack" title="Tech Stack" icon={Layers}>
        <ul className="flex flex-1 flex-wrap content-center gap-1.5">
          {techStack.map((technology) => (
            <li
              key={technology}
              className="max-w-full rounded-sm border border-slate-900/20 bg-transparent px-2 py-0.5 text-[11px] leading-4 font-medium break-words text-slate-700"
            >
              {technology}
            </li>
          ))}
        </ul>
      </PortfolioCard>
    </section>
  )
}
