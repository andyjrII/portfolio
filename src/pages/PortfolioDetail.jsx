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
  const responsibilities = detail?.responsibilities || []
  const status = detail?.status
  const stack = detail?.stack || {}
  const links = detail?.links || {}
  const gallery = detail?.gallery || (fallbackItem ? [fallbackItem.image] : [])
  const features = detail?.features || []
  const challenges = detail?.challenges || []

  const headingClass = isDark ? 'text-white' : 'text-heading'
  const subTextClass = isDark ? 'text-white/85' : 'text-gray-600'
  const cardBg = isDark ? 'bg-white/5' : 'bg-white'
  const cardBorder = isDark ? 'border-white/10' : 'border-gray-200/70'

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
    // Skip gallery[0] — it's already shown as the hero shot at the top of the page.
    const rest = gallery.slice(1)
    const pages = []
    for (let i = 0; i < rest.length; i += 2) {
      pages.push(rest.slice(i, i + 2))
    }
    return pages
  }, [gallery])

  const otherProjects = useMemo(() => {
    return portfolioItems.filter((p) => p.slug !== slug).slice(0, 4)
  }, [slug])

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
        <div className="container mx-auto px-6 md:px-10 py-10 md:py-12 max-w-7xl">
          {/* 0. Back link */}
          <Link
            to="/#portfolio"
            className={`inline-flex items-center gap-1.5 text-sm font-medium mb-6 transition-colors ${
              isDark ? 'text-white/70 hover:text-accent-300' : 'text-gray-600 hover:text-accent'
            }`}
          >
            <i className="bi bi-arrow-left" aria-hidden="true" />
            All projects
          </Link>

          {/* 1. Hero row — project details on the left, image on the right */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left col: title, subtitle, summary, meta, Live button */}
            <div className="flex flex-col">
              <div className="flex flex-wrap items-start justify-between gap-3 pb-5 border-b border-gray-200 dark:border-white/10">
                <div className="space-y-1.5 min-w-0">
                  <h1 className={`text-3xl md:text-4xl font-bold tracking-tight ${headingClass}`}>{title}</h1>
                  {subtitle && (
                    <p className={`text-sm md:text-base ${subTextClass}`}>{subtitle}</p>
                  )}
                </div>
                {links?.demo && (
                  <a
                    href={links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white hover:text-white font-semibold text-sm hover:bg-accent-700 dark:bg-accent-500 dark:hover:bg-accent-400 transition-colors flex-shrink-0"
                  >
                    <i className="bi bi-box-arrow-up-right" aria-hidden="true" />
                    Live
                  </a>
                )}
              </div>

              <p className={`mt-5 text-base leading-relaxed ${subTextClass}`}>{summary}</p>

              {(role || status) && (
                <div className={`mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm ${subTextClass}`}>
                  {role && (
                    <span>
                      <span className={`font-semibold ${headingClass}`}>Role: </span>
                      {role}
                    </span>
                  )}
                  {status && (
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${
                        status === 'live'
                          ? isDark
                            ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                            : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : isDark
                          ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                          : 'bg-amber-50 text-amber-700 border-amber-200'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          status === 'live' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
                        }`}
                      />
                      {status === 'live' ? 'Live' : 'In Development'}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Right col: hero shot */}
            {gallery[0] && (
              <button
                type="button"
                onClick={openZoom(gallery[0])}
                className={`block w-full rounded-xl overflow-hidden border cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-accent/50 ${cardBorder} ${
                  isDark ? 'bg-white/5' : 'bg-gray-50'
                }`}
                aria-label={`Open ${title} screenshot`}
              >
                <img
                  src={gallery[0]}
                  alt={title}
                  className="w-full h-auto object-contain block"
                  loading="eager"
                />
              </button>
            )}
          </section>

          {/* 3. Key Features row (4 tiles, numbered badges) */}
          {featureTiles.length > 0 && (
            <section className="mt-10">
              <h2 className={`text-lg md:text-xl font-bold tracking-tight mb-4 ${headingClass}`}>Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {featureTiles.map((f, i) => (
                  <div
                    key={i}
                    className={`p-5 rounded-xl border transition-colors ${cardBg} ${cardBorder} hover:border-accent/40 dark:hover:border-accent-400/40 ${isDark ? '' : 'shadow-sm'}`}
                  >
                    <span
                      className={`inline-block text-xs font-bold tracking-wider mb-3 ${
                        isDark ? 'text-accent-400' : 'text-accent'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {f.title && <p className={`font-semibold text-sm mb-1.5 ${headingClass}`}>{f.title}</p>}
                    <p className={`text-xs leading-relaxed ${subTextClass}`}>{f.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 5. Architecture & Tech Stack band */}
          {flatTechList.length > 0 && (
            <section
              className={`mt-10 p-6 md:p-7 rounded-xl ${
                isDark
                  ? 'bg-[#0a1628] border border-white/5 text-white'
                  : 'bg-gray-50 border border-gray-200/70 text-heading'
              }`}
            >
              <h2 className={`text-lg md:text-xl font-bold tracking-tight mb-6 ${isDark ? 'text-white' : 'text-heading'}`}>
                Architecture & Tech Stack
              </h2>
              <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-8 gap-4 justify-items-center">
                {flatTechList.slice(0, 8).map((tech) => {
                  const Icon = getTechIcon(tech) || BiCode
                  const displayName = tech.split(' (')[0].split(' / ')[0]
                  return (
                    <div key={tech} className="flex flex-col items-center gap-1.5">
                      <div
                        className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          isDark ? 'bg-white/10' : 'bg-white border border-gray-200/70'
                        }`}
                      >
                        <Icon className={`w-6 h-6 ${isDark ? 'text-white' : 'text-heading'}`} />
                      </div>
                      <span
                        className={`text-xs font-medium text-center leading-tight ${
                          isDark ? 'text-white/90' : 'text-gray-700'
                        }`}
                      >
                        {displayName}
                      </span>
                    </div>
                  )
                })}
              </div>
            </section>
          )}

          {/* 6. Challenges & Solutions rows (3 columns: title | challenge | solution) */}
          {challengeRows.length > 0 && (
            <section className="mt-8">
              <h2 className={`text-lg md:text-xl font-bold tracking-tight mb-4 ${headingClass}`}>Challenges & Solutions</h2>
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
            <section className="mt-10">
              <h2 className={`text-lg md:text-xl font-bold tracking-tight mb-4 ${headingClass}`}>Project Screenshots</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentScreenshots.map((src) => (
                  <button
                    key={src}
                    type="button"
                    onClick={openZoom(src)}
                    className={`rounded-xl overflow-hidden border shadow-sm text-left cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-accent/50 ${cardBorder} ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}
                  >
                    <img
                      src={src}
                      alt={title}
                      className="w-full h-auto max-h-[360px] object-contain block"
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

          {/* 8. Other Projects */}
          {otherProjects.length > 0 && (
            <section className="mt-12">
              <div className="flex items-end justify-between gap-4 mb-5">
                <h2 className={`text-lg md:text-xl font-bold tracking-tight ${headingClass}`}>Other Projects</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {otherProjects.map((p) => (
                  <Link
                    key={p.slug}
                    to={p.detailPage}
                    className={`group rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-0.5 ${cardBorder} ${isDark ? 'bg-white/5 hover:border-accent-400/40' : 'bg-white hover:border-accent/40 shadow-sm hover:shadow-md'}`}
                  >
                    <div className="relative overflow-hidden bg-gray-200 aspect-[16/10]">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-3">
                      <p className={`font-semibold text-sm ${headingClass}`}>{p.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  )
}

export default PortfolioDetail
