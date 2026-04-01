import { useMemo, useState, useCallback, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header/Header'
import { projectDetails, portfolioItems } from '../utils/portfolioData'
import { useTheme } from '../contexts/ThemeContext'
import {
  SiReact,
  SiNestjs,
  SiPostgresql,
  SiTailwindcss,
  SiHtml5,
  SiJavascript,
  SiDjango,
  SiBootstrap,
  SiNextdotjs,
  SiTypescript,
  SiVite,
  SiPrisma,
  SiPython,
  SiGit,
  SiCloudinary,
  SiNodedotjs,
  SiSocketdotio,
  SiRedux,
  SiOpenai,
  SiRedis,
} from 'react-icons/si'
import { BiCode, BiKey, BiSolidCreditCard } from 'react-icons/bi'

function ImageLightbox({ src, alt, onClose }) {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])
  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged image"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition"
        aria-label="Close"
      >
        <i className="bi bi-x-lg text-xl" />
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}

// Tech logo map: name or key -> icon component (placeholder-friendly; swap to real logos later)
const techLogoMap = {
  React: SiReact,
  NestJS: SiNestjs,
  PostgreSQL: SiPostgresql,
  'Supabase (PostgreSQL)': SiPostgresql,
  Tailwind: SiTailwindcss,
  'Tailwind CSS': SiTailwindcss,
  'Tailwind CSS / custom CSS': SiTailwindcss,
  HTML: SiHtml5,
  JavaScript: SiJavascript,
  CSS: SiHtml5,
  Django: SiDjango,
  Bootstrap: SiBootstrap,
  'Next.js': SiNextdotjs,
  TypeScript: SiTypescript,
  Vite: SiVite,
  Prisma: SiPrisma,
  'Prisma ORM': SiPrisma,
  'Node.js': SiNodedotjs,
  'Socket.IO': SiSocketdotio,
  JWT: BiKey,
  Python: SiPython,
  'Git / GitHub': SiGit,
  Git: SiGit,
  GitHub: SiGit,
  Cloudinary: SiCloudinary,
  Paystack: BiSolidCreditCard,
  Brevio: BiCode,
  Redux: SiRedux,
  OpenAI: SiOpenai,
  Redis: SiRedis,
}

function getTechIcon(techName) {
  return (
    techLogoMap[techName] ||
    techLogoMap[techName.split(' / ')[0]] ||
    techLogoMap[techName.split(' (')[0]] ||
    null
  )
}

function PortfolioDetail() {
  const { slug } = useParams()
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [zoomedImage, setZoomedImage] = useState(null)
  const [screenshotPage, setScreenshotPage] = useState(0)
  const openZoom = useCallback((src) => () => setZoomedImage(src), [])
  const closeZoom = useCallback(() => setZoomedImage(null), [])

  const detail = projectDetails[slug]
  const fallbackItem = useMemo(
    () => portfolioItems.find((item) => item.slug === slug),
    [slug]
  )

  const pageTitle = !detail && !fallbackItem
    ? 'Project not found'
    : (detail?.title || fallbackItem?.title || 'Project')
  useEffect(() => {
    const defaultTitle = 'Andy James - Portfolio'
    document.title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle
    return () => {
      document.title = defaultTitle
    }
  }, [pageTitle])

  if (!detail && !fallbackItem) {
    return (
      <div className="portfolio-details-page">
        <Header />
        <main className="main">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-2xl mx-auto text-center space-y-3">
              <h1 className="text-3xl font-bold text-heading">Project not found</h1>
              <p className="text-gray-600">This project does not exist or has been removed.</p>
              <Link
                to="/"
                className="inline-flex items-center px-5 py-2 rounded-lg bg-accent text-white font-semibold hover:bg-accent/90 transition"
              >
                Back to projects
              </Link>
            </div>
          </div>
        </main>
      </div>
    )
  }

  const title = detail?.title || fallbackItem?.title || 'Project'
  const subtitle = detail?.subtitle
  const summary = detail?.summary || 'Project overview coming soon.'
  const role = detail?.role
  const timeline = detail?.timeline
  const outcome = detail?.outcome
  const problem = detail?.problem
  const solution = detail?.solution
  const context = detail?.context || []
  const responsibilities = detail?.responsibilities || []
  const stack = detail?.stack || {}
  const links = detail?.links || {}
  const gallery = detail?.gallery || (fallbackItem ? [fallbackItem.image] : [])
  const features = detail?.features || []
  const challenges = detail?.challenges || []

  const headingClass = isDark ? 'text-white' : 'text-heading'
  const subTextClass = isDark ? 'text-white/80' : 'text-gray-600'
  const cardBg = isDark ? 'bg-white/5' : 'bg-white'
  const cardBorder = isDark ? 'border-white/10' : 'border-gray-200'

  // Flatten stack for tech band (frontend, database, backend, integrations)
  const flatTechList = useMemo(() => {
    const list = [
      ...(stack.frontend || []),
      ...(stack.database || []),
      ...(stack.backend || []),
      ...(stack.integrations || []),
    ].filter(Boolean)
    return [...new Set(list)].slice(0, 10)
  }, [stack])

  // Features for Key Features row (4 tiles: use features or derive from responsibilities)
  const featureTiles = useMemo(() => {
    if (features.length >= 4) return features.slice(0, 4)
    if (features.length > 0) {
      const pad = responsibilities.slice(0, 4 - features.length).map((text) => ({ title: '', description: text }))
      return [...features, ...pad].slice(0, 4)
    }
    return responsibilities.slice(0, 4).map((text) => ({ title: '', description: text }))
  }, [features, responsibilities])

  // Challenge rows (title left, solution right)
  const challengeRows = useMemo(() => {
    if (challenges.length > 0) return challenges
    return [
      { title: 'Challenge 1', solution: detail?.results?.[0] || 'Details coming soon.' },
      { title: 'Challenge 2', solution: detail?.results?.[1] || 'Details coming soon.' },
    ].slice(0, 2)
  }, [challenges, detail?.results])

  const screenshotPages = useMemo(() => {
    const pages = []
    for (let i = 0; i < gallery.length; i += 2) {
      pages.push(gallery.slice(i, i + 2))
    }
    return pages
  }, [gallery])

  const currentScreenshots = screenshotPages[screenshotPage] || []

  const goPrevScreens = () => {
    setScreenshotPage((prev) => (prev - 1 + screenshotPages.length) % screenshotPages.length)
  }

  const goNextScreens = () => {
    setScreenshotPage((prev) => (prev + 1) % screenshotPages.length)
  }

  return (
    <div className="portfolio-details-page">
      {zoomedImage && (
        <ImageLightbox src={zoomedImage} alt={title} onClose={closeZoom} />
      )}
      <Header />
      <main className="main">
        <div className="container mx-auto px-6 md:px-10 py-8 max-w-7xl">
          {/* 1. Top project bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-200 dark:border-white/10">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className={`text-2xl md:text-3xl font-bold ${headingClass}`}>{title}</h1>
              {subtitle && (
                <>
                  <span className="text-gray-400 dark:text-white/50">|</span>
                  <span className={`text-sm ${subTextClass}`}>{subtitle}</span>
                </>
              )}
            </div>
            {links?.demo && (
              <a
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent text-white font-semibold text-sm hover:bg-accent/90 transition"
              >
                <i className="bi bi-box-arrow-up-right" aria-hidden="true" />
                Live
              </a>
            )}
          </div>

          {/* 2. Overview band (full width) */}
          <section className={`mt-8 p-6 rounded-xl border ${cardBg} ${cardBorder}`}>
            <h2 className={`text-xl font-bold mb-3 ${headingClass}`}>Overview</h2>
            <p className={`text-base leading-relaxed ${subTextClass} mb-5`}>{summary}</p>
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-lg ${isDark ? 'bg-white/5' : 'bg-gray-50'} border ${cardBorder}`}>
              {role && (
                <div>
                  <span className={`font-semibold text-sm ${headingClass}`}>Role: </span>
                  <span className={subTextClass}>{role}</span>
                </div>
              )}
              {timeline && (
                <div>
                  <span className={`font-semibold text-sm ${headingClass}`}>Duration: </span>
                  <span className={subTextClass}>{timeline}</span>
                </div>
              )}
            </div>
          </section>

          {/* 3. The Problem / The Solution row */}
          <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-6 rounded-xl border min-h-[180px] flex flex-col ${cardBg} ${cardBorder}`}>
              <h2 className={`text-lg font-bold mb-3 ${headingClass}`}>The Problem</h2>
              <p className={`text-sm leading-relaxed flex-1 ${subTextClass}`}>
                {problem || context[0] || 'Problem statement will be added soon.'}
              </p>
            </div>
            <div className={`p-6 rounded-xl border min-h-[180px] flex flex-col ${cardBg} ${cardBorder}`}>
              <h2 className={`text-lg font-bold mb-3 ${headingClass}`}>The Solution</h2>
              <p className={`text-sm leading-relaxed flex-1 ${subTextClass}`}>
                {solution || outcome || context[1] || 'Solution details will be added soon.'}
              </p>
            </div>
          </section>

          {/* 4. Key Features row (4 tiles) */}
          {featureTiles.length > 0 && (
            <section className="mt-8">
              <h2 className={`text-xl font-bold mb-4 ${headingClass}`}>Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {featureTiles.map((f, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-xl border flex flex-col items-center text-center ${cardBg} ${cardBorder}`}
                  >
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-3 ${isDark ? 'bg-accent/20 text-accent' : 'bg-accent/10 text-accent'}`}>
                      <i className="bi bi-grid-3x3-gap-fill text-2xl" />
                    </div>
                    {f.title && <p className={`font-semibold text-sm mb-1 ${headingClass}`}>{f.title}</p>}
                    <p className={`text-xs ${subTextClass}`}>{f.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 5. Architecture & Tech Stack band (logos + names, up to 10 in one row) */}
          {flatTechList.length > 0 && (
            <section className={`mt-8 p-8 rounded-xl ${isDark ? 'bg-[#0a1628]' : 'bg-heading'} text-white`}>
              <h2 className="text-xl font-bold mb-6 text-white">Architecture & Tech Stack</h2>
              <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-10 gap-4 justify-items-center">
                {flatTechList.map((tech) => {
                  const Icon = getTechIcon(tech) || BiCode
                  const displayName = tech.split(' (')[0].split(' / ')[0]
                  return (
                    <div key={tech} className="flex flex-col items-center gap-1.5">
                      <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs font-medium text-white/90 text-center leading-tight">{displayName}</span>
                    </div>
                  )
                })}
              </div>
            </section>
          )}

          {/* 6. Challenges & Solutions rows (3 columns: title | challenge | solution) */}
          {challengeRows.length > 0 && (
            <section className="mt-8">
              <h2 className={`text-xl font-bold mb-4 ${headingClass}`}>Challenges & Solutions</h2>
              <div className="space-y-0 rounded-xl border overflow-hidden border-gray-200 dark:border-white/10">
                {challengeRows.map((row, i) => (
                  <div
                    key={row.title + i}
                    className={`grid grid-cols-1 md:grid-cols-3 gap-4 p-5 ${isDark ? 'odd:bg-white/5 even:bg-white/[0.02]' : 'odd:bg-gray-50 even:bg-white'} border-b border-gray-200 dark:border-white/10 last:border-b-0`}
                  >
                    <p className={`font-semibold text-sm ${headingClass}`}>{row.title}</p>
                    <div className="md:border-l border-gray-200 dark:border-white/10 pl-0 md:pl-4">
                      <p className={`font-semibold text-xs uppercase tracking-wide mb-1 ${isDark ? 'text-white/70' : 'text-gray-500'}`}>Challenge</p>
                      <p className={`text-sm leading-relaxed ${subTextClass}`}>{row.challenge ?? '—'}</p>
                    </div>
                    <div className="md:border-l border-gray-200 dark:border-white/10 pl-0 md:pl-4">
                      <p className={`font-semibold text-xs uppercase tracking-wide mb-1 ${isDark ? 'text-white/70' : 'text-gray-500'}`}>Solution</p>
                      <p className={`text-sm leading-relaxed ${subTextClass}`}>{row.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 7. Project Screenshots – carousel (2x2 per slide) */}
          {screenshotPages.length > 0 && (
            <section className="mt-8">
              <h2 className={`text-xl font-bold mb-4 ${headingClass}`}>Project Screenshots</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentScreenshots.map((src) => (
                  <button
                    key={src}
                    type="button"
                    onClick={openZoom(src)}
                    className={`rounded-xl overflow-hidden border shadow-sm text-left cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-accent/50 ${cardBorder}`}
                  >
                    <img
                      src={src}
                      alt={title}
                      className="w-full h-auto max-h-[260px] object-cover block"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
              {screenshotPages.length > 1 && (
                <div className="flex items-center justify-center gap-4 mt-4">
                  <button
                    type="button"
                    onClick={goPrevScreens}
                    className="w-9 h-9 rounded-full border border-gray-300 dark:border-white/30 flex items-center justify-center text-sm hover:bg-gray-100 dark:hover:bg-white/10 transition"
                    aria-label="Previous screenshots"
                  >
                    <i className="bi bi-chevron-left" />
                  </button>
                  <span className={`text-xs ${subTextClass}`}>
                    {screenshotPage + 1} / {screenshotPages.length}
                  </span>
                  <button
                    type="button"
                    onClick={goNextScreens}
                    className="w-9 h-9 rounded-full border border-gray-300 dark:border-white/30 flex items-center justify-center text-sm hover:bg-gray-100 dark:hover:bg-white/10 transition"
                    aria-label="Next screenshots"
                  >
                    <i className="bi bi-chevron-right" />
                  </button>
                </div>
              )}
            </section>
          )}

          {/* 8. Bottom CTA bar */}
          {links?.demo && (
            <div className="mt-8 flex justify-center">
              <a
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent/90 transition shadow-md"
              >
                <i className="bi bi-box-arrow-up-right" aria-hidden="true" />
                View Live
              </a>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default PortfolioDetail
