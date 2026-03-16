import { useMemo, useState, useCallback, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header/Header'
import { projectDetails, portfolioItems } from '../utils/portfolioData'
import { useTheme } from '../contexts/ThemeContext'

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

function Badge({ label }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20">
      {label}
    </span>
  )
}

function SectionTitle({ title, kicker }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <div className="flex items-center justify-between gap-4 mb-4">
      <div>
        {kicker && <p className="text-xs uppercase tracking-wide text-accent mb-1">{kicker}</p>}
        <h2 className={`text-2xl font-bold ${isDark ? 'text-white/90' : 'text-heading'}`}>{title}</h2>
      </div>
      <div className={`h-px flex-1 ${isDark ? 'bg-white/10' : 'bg-gray-200'}`} />
    </div>
  )
}

function TextBlockList({ items, className = '' }) {
  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item) => (
        <p key={item} className="leading-relaxed">
          {item}
        </p>
      ))}
      {!items.length && <p className="leading-relaxed">Details coming soon.</p>}
    </div>
  )
}

function PortfolioDetail() {
  const { slug } = useParams()
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [zoomedImage, setZoomedImage] = useState(null)
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
  const summary = detail?.summary || 'Project overview coming soon.'
  const role = detail?.role
  const timeline = detail?.timeline
  const outcome = detail?.outcome
  const context = detail?.context || []
  const responsibilities = detail?.responsibilities || []
  const stack = detail?.stack || {}
  const results = detail?.results || []
  const links = detail?.links || {}
  const gallery = detail?.gallery || (fallbackItem ? [fallbackItem.image] : [])
  const hasVideo = links?.video
  const headingClass = isDark ? 'text-white/90' : 'text-heading'
  const subTextClass = isDark ? 'text-white/80' : 'text-gray-700'
  const cardBg = isDark ? 'bg-white/10' : 'bg-white/80'
  const cardBorder = isDark ? 'border-white/10' : 'border-gray-100'
  const outcomeClass = isDark
    ? 'bg-accent/15 border border-accent/30 text-accent'
    : 'bg-accent/10 border border-accent/20 text-accent'
  const codeBtnEnabled = isDark
    ? 'bg-white/10 text-white border-white/20 hover:bg-white/15'
    : 'bg-white text-heading border-gray-200 hover:bg-gray-50'
  const codeBtnDisabled = isDark
    ? 'bg-white/5 text-white/40 border-white/10 cursor-not-allowed'
    : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'

  return (
    <div className="portfolio-details-page">
      {zoomedImage && (
        <ImageLightbox src={zoomedImage} alt={title} onClose={closeZoom} />
      )}
      <Header />
      <main className="main">
        <div className="container mx-auto px-4 py-12 space-y-12">
          {/* Hero / Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              <div className="flex items-center gap-3 flex-wrap">
                {role && <Badge label={role} />}
                {timeline && <Badge label={timeline} />}
              </div>
              <h1 className={`text-4xl font-bold leading-tight ${headingClass}`}>{title}</h1>
              <p className={`text-lg leading-relaxed ${subTextClass}`}>{summary}</p>
              {outcome && (
                <div className={`p-5 rounded-xl font-semibold leading-relaxed ${outcomeClass}`}>
                  {outcome}
                </div>
              )}
            </div>
            {/* Hero image */}
            {gallery?.[0] && (
              <div className="flex flex-col items-start">
                <button
                  type="button"
                  onClick={openZoom(gallery[0])}
                  className="w-full text-left cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-2xl overflow-hidden"
                >
                  <img
                    src={gallery[0]}
                    alt={title}
                    className="w-full h-auto max-h-[50vh] block"
                    loading="lazy"
                  />
                </button>
                <div className="w-full flex gap-3 flex-wrap mt-8 justify-center">
                  <button
                    disabled={!hasVideo}
                    onClick={() => {
                      if (hasVideo) window.open(links.video, '_blank', 'noopener,noreferrer')
                    }}
                    className={`px-5 py-2.5 rounded-lg font-semibold border transition-all duration-200 ${
                      hasVideo
                        ? `${codeBtnEnabled} hover:scale-[1.03] hover:shadow-md hover:border-accent/40 active:scale-[0.98]`
                        : codeBtnDisabled
                    }`}
                  >
                    Video Demo
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Context & Goals */}
          <div className={`p-6 rounded-2xl backdrop-blur border shadow-sm space-y-3 ${cardBg} ${cardBorder}`}>
            <SectionTitle title="Context & Goals" />
            <TextBlockList items={context} className={`${subTextClass} text-lg`} />
          </div>

          {/* Responsibilities */}
          <div className={`p-6 rounded-2xl backdrop-blur border shadow-sm space-y-3 ${cardBg} ${cardBorder}`}>
            <SectionTitle title="Responsibilities" />
            <TextBlockList items={responsibilities} className={`${subTextClass} text-lg`} />
          </div>

          {/* Stack */}
          <div className={`p-6 rounded-2xl backdrop-blur border shadow-sm space-y-4 ${cardBg} ${cardBorder}`}>
            <SectionTitle title="Stack & Tools" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(stack).map(([group, items]) => (
                <div key={group} className="space-y-2">
                  <p className={`text-sm font-semibold uppercase tracking-wide ${headingClass}`}>
                    {group}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <Badge key={item} label={item} />
                    ))}
                  </div>
                </div>
              ))}
              {!Object.keys(stack).length && <p className="text-gray-600">Details coming soon.</p>}
            </div>
          </div>

          {/* Results */}
          <div className={`p-6 rounded-2xl backdrop-blur border shadow-sm space-y-3 ${cardBg} ${cardBorder}`}>
            <SectionTitle title="Results / Impact" />
            <TextBlockList items={results} className={`${subTextClass} text-lg`} />
          </div>

          {/* Gallery */}
          {gallery?.length > 1 && (
            <div className={`p-6 rounded-2xl backdrop-blur border shadow-sm space-y-3 ${cardBg} ${cardBorder}`}>
              <SectionTitle title="Gallery" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {gallery.slice(1).map((src) => (
                  <button
                    key={src}
                    type="button"
                    onClick={openZoom(src)}
                    className={`rounded-xl overflow-hidden border shadow-sm text-left cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-accent/50 ${cardBorder}`}
                  >
                    <img
                      src={src}
                      alt={title}
                      className="w-full h-auto max-h-64 md:max-h-72 block"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default PortfolioDetail

