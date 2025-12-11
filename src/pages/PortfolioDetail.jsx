import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header/Header'
import { projectDetails, portfolioItems } from '../utils/portfolioData'
import { useTheme } from '../contexts/ThemeContext'

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

  const detail = projectDetails[slug]
  const fallbackItem = useMemo(
    () => portfolioItems.find((item) => item.slug === slug),
    [slug]
  )

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
                Back to portfolio
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
  const challenges = detail?.challenges || []
  const results = detail?.results || []
  const links = detail?.links || {}
  const gallery = detail?.gallery || (fallbackItem ? [fallbackItem.image] : [])
  const hasVideo = links?.video
  const headingClass = isDark ? 'text-white/90' : 'text-heading'
  const subTextClass = isDark ? 'text-white/80' : 'text-gray-700'
  const cardBg = isDark ? 'bg-white/10' : 'bg-white/80'
  const cardBorder = isDark ? 'border-white/10' : 'border-gray-100'
  const challengeBg = isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50/60 border-gray-100'
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
              <div className="flex flex-col items-start space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-black/5">
                  <img
                    src={gallery[0]}
                    alt={title}
                    className="w-full h-[200px] md:h-[240px] lg:h-[260px] object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex gap-3 flex-wrap">
                  {links?.demo && (
                    <a
                      href={links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2 rounded-lg bg-accent text-white font-semibold hover:bg-accent/90 transition"
                    >
                      View Live
                    </a>
                  )}
                  <button
                    disabled={!hasVideo}
                    onClick={() => {
                      if (hasVideo) window.open(links.video, '_blank', 'noopener,noreferrer')
                    }}
                    className={`px-5 py-2 rounded-lg font-semibold border transition ${
                      hasVideo ? codeBtnEnabled : codeBtnDisabled
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

          {/* Challenges */}
          <div className={`p-6 rounded-2xl backdrop-blur border shadow-sm space-y-4 ${cardBg} ${cardBorder}`}>
            <SectionTitle title="Challenges & Solutions" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {challenges.map((c) => (
                <div
                  key={c.title}
                  className={`p-4 rounded-xl border shadow-sm space-y-2 ${challengeBg}`}
                >
                  <h4 className={`font-semibold mb-2 ${headingClass}`}>{c.title}</h4>
                  <p className={`text-sm leading-relaxed ${subTextClass}`}>{c.detail}</p>
                </div>
              ))}
              {!challenges.length && <p className="text-gray-600">Details coming soon.</p>}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {gallery.slice(1).map((src) => (
                  <div key={src} className={`rounded-xl overflow-hidden border shadow-sm ${cardBorder}`}>
                    <img
                      src={src}
                      alt={title}
                      className="w-full h-48 md:h-56 object-cover"
                      loading="lazy"
                    />
                  </div>
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

