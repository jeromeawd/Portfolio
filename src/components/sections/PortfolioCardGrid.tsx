import {
  Award,
  Briefcase,
  BriefcaseBusiness,
  Check,
  Copy,
  FolderKanban,
  Info,
  Layers,
  Mail,
  Phone,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import type { SVGProps } from 'react'

import profileImage from '@/assets/images/Transparent Graduation Portrait with Cap.png'
import { PortfolioCard } from '@/components/shared/PortfolioCard'

import './PortfolioCardGrid.css'

const phoneNumber = '+63 993 876 6187'

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const techStack = [
  'SQL',
  'MySQL',
  'Power BI',
  'Python',
  'Excel',
  'Spreadsheet',
  'Figma',
  'CSS',
  'HTML',
  'JavaScript',
  'React',
  'Vite',
  'Supabase',
  'Git',
  'GitHub',
  'Google Apps Script',
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
  const [phoneCopied, setPhoneCopied] = useState(false)

  useEffect(() => {
    if (!phoneCopied) return

    const timeout = window.setTimeout(() => setPhoneCopied(false), 2000)
    return () => window.clearTimeout(timeout)
  }, [phoneCopied])

  async function copyPhoneNumber() {
    try {
      await navigator.clipboard.writeText(phoneNumber)
      setPhoneCopied(true)
    } catch {
      // Clipboard access can be unavailable or blocked by the browser.
    }
  }

  return (
    <section aria-label="Portfolio overview" className="portfolio-grid">
      <div className="profile-stack">
        <PortfolioCard
          tone="profile"
          title="Profile"
          media={
            <img
              src={profileImage}
              alt="Profile portrait"
              className="h-full w-full object-cover object-top"
            />
          }
        />
        <div className="profile-caption text-left">
          <p className="text-[30px] leading-tight font-bold tracking-[-0.01em] text-slate-900">
            Jerome Gualva
          </p>
          <p className="mt-1 text-[12px] leading-4 font-medium text-slate-600">
            Aspiring Data Analyst
          </p>
          <ul
            aria-label="Contact details"
            className="mt-3 flex max-w-60 flex-wrap items-center gap-x-2 gap-y-1.5 text-[11px] leading-4 font-medium"
          >
            <li>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jeromegualva0606@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
                title="Compose email in Gmail"
                className="group inline-flex items-center gap-1.5 rounded-sm text-slate-600 transition-colors hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
                aria-label="Compose an email to Jerome Gualva in Gmail"
              >
                <Mail
                  aria-hidden="true"
                  className="size-3.5 shrink-0 text-slate-500 transition-colors group-hover:text-slate-900"
                  strokeWidth={1.8}
                />
                Email
              </a>
            </li>
            <li>
              <span
                className="inline-flex items-center gap-1.5 text-slate-600"
                title={phoneNumber}
              >
                <Phone
                  aria-hidden="true"
                  className="size-3.5 shrink-0 text-slate-500"
                  strokeWidth={1.8}
                />
                Phone
                <span className="sr-only">: {phoneNumber}</span>
                <button
                  type="button"
                  onClick={copyPhoneNumber}
                  className="-my-1 inline-flex size-6 shrink-0 items-center justify-center rounded-sm text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
                  aria-label={
                    phoneCopied
                      ? 'Phone number copied'
                      : `Copy phone number ${phoneNumber}`
                  }
                  title={phoneCopied ? 'Copied!' : 'Copy phone number'}
                >
                  {phoneCopied ? (
                    <Check
                      aria-hidden="true"
                      className="size-4"
                      strokeWidth={2}
                    />
                  ) : (
                    <Copy
                      aria-hidden="true"
                      className="size-4"
                      strokeWidth={1.8}
                    />
                  )}
                </button>
                <span className="sr-only" role="status" aria-live="polite">
                  {phoneCopied ? 'Phone number copied to clipboard' : ''}
                </span>
              </span>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jerome-gualva-6a6062301/"
                target="_blank"
                rel="noreferrer noopener"
                title="linkedin.com/in/jerome-gualva-6a6062301"
                className="group inline-flex items-center gap-1.5 rounded-sm text-slate-600 transition-colors hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
                aria-label="LinkedIn profile, opens in a new tab"
              >
                <LinkedInIcon className="size-3.5 shrink-0 text-slate-500 transition-colors group-hover:text-slate-900" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://ph.jobstreet.com/profiles/jerome-gualva-ywqlv6q8px"
                target="_blank"
                rel="noreferrer noopener"
                title="ph.jobstreet.com/profiles/jerome-gualva-ywqlv6q8px"
                className="group inline-flex items-center gap-1.5 rounded-sm text-slate-600 transition-colors hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
                aria-label="JobStreet profile, opens in a new tab"
              >
                <Briefcase
                  aria-hidden="true"
                  className="size-3.5 shrink-0 text-slate-500 transition-colors group-hover:text-slate-900"
                  strokeWidth={1.8}
                />
                JobStreet
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jeromeawd"
                target="_blank"
                rel="noreferrer noopener"
                title="github.com/jeromeawd"
                className="group inline-flex items-center gap-1.5 rounded-sm text-slate-600 transition-colors hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
                aria-label="GitHub profile, opens in a new tab"
              >
                <GitHubIcon className="size-3.5 shrink-0 text-slate-500 transition-colors group-hover:text-slate-900" />
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <PortfolioCard tone="about" title="About" icon={Info}>
        <div className="flex flex-1 items-center">
          <p className="max-w-prose indent-6 text-left text-pretty">
            I'm a fourth-year BSIT student with a strong interest in data
            analytics and turning raw data into useful insights. I enjoy
            exploring data, creating dashboards, finding patterns, and learning
            tools like SQL, Excel, and Power BI. I also like working on projects
            that help me improve my technical and problem-solving skills.
            Outside of academics, I enjoy learning new technologies, exploring
            data visualization, and building projects that allow me to grow as a
            future Data Analyst.
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
        <ul className="flex flex-1 flex-wrap content-center gap-1">
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
