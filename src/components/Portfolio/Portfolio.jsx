import { useTheme } from '../../contexts/ThemeContext'
import { portfolioItems, projectDetails } from '../../utils/portfolioData'

function Portfolio() {
  const { theme } = useTheme()

  return (
    <section
      id="portfolio"
      className={`portfolio section py-16 md:py-20 ${
        theme === 'dark' ? 'bg-dark-bg' : 'bg-gradient-to-b from-gray-50 to-white'
      }`}
    >
      <div className="container mx-auto px-4 section-title" data-aos="fade-up">
        <div className="text-center mb-8">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 tracking-wide ${
              theme === 'dark'
                ? 'bg-accent/20 text-accent-400 border border-accent-400/30'
                : 'bg-accent/10 text-accent border border-accent/20'
            }`}
          >
            My Work
          </span>
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-heading'
            }`}
          >
            Featured Projects
          </h2>
          <div className="w-16 h-0.5 mx-auto rounded-full bg-accent dark:bg-accent-400" />
        </div>
        <p
          className={`max-w-2xl mx-auto text-center text-base ${
            theme === 'dark' ? 'text-white/90' : 'text-gray-600'
          }`}
        >
          A curated set of featured work — projects I've built or am building. Each one highlights
          my skills, approach, and focus on solving real-world problems with technology.
        </p>
      </div>

      <div className="container mx-auto px-4 mt-10">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {portfolioItems.map((item, index) => {
            const demoLink = projectDetails[item.slug]?.links?.demo
            return (
              <article
                key={item.id}
                className={`portfolio-item group relative overflow-hidden rounded-xl flex flex-col transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-white/5 border border-white/10 hover:border-accent-400/40'
                    : 'bg-white border border-gray-200/70 hover:border-accent/40 shadow-sm hover:shadow-lg'
                }`}
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                {/* Image */}
                <div className="relative overflow-hidden bg-gray-200 aspect-[16/10]">
                  <span
                    className={`absolute top-2.5 left-2.5 z-10 inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide ${
                      theme === 'dark'
                        ? 'bg-white/90 text-accent'
                        : 'bg-heading text-white'
                    }`}
                  >
                    Web
                  </span>
                  <img
                    src={item.image}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={item.title}
                    loading="lazy"
                  />
                  {/* Desktop hover overlay with actions */}
                  <div
                    className={`hidden md:flex absolute inset-0 items-end justify-center pb-4 px-4 bg-gradient-to-t ${
                      theme === 'dark'
                        ? 'from-dark-bg/85 via-dark-bg/40 to-transparent'
                        : 'from-black/75 via-black/30 to-transparent'
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {demoLink && (
                        <a
                          href={demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-semibold no-underline text-white hover:text-white bg-accent hover:bg-accent-700 transition-colors shadow-md"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="bi bi-box-arrow-up-right" aria-hidden="true" />
                          Live
                        </a>
                      )}
                      <a
                        href={item.detailPage}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`View ${item.title} details`}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-semibold no-underline text-heading hover:text-heading bg-white hover:bg-gray-50 transition-colors shadow-md"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="bi bi-info-circle" aria-hidden="true" />
                        Details
                      </a>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div
                  className={`p-4 flex flex-col flex-1 ${
                    theme === 'dark' ? 'bg-transparent' : 'bg-transparent'
                  }`}
                >
                  <h5
                    className={`font-semibold text-sm md:text-base mb-1.5 ${
                      theme === 'dark' ? 'text-white' : 'text-heading'
                    }`}
                  >
                    {item.title}
                  </h5>
                  <p
                    className={`text-xs leading-relaxed flex-1 ${
                      theme === 'dark' ? 'text-white/75' : 'text-gray-600'
                    }`}
                  >
                    {item.caption || '—'}
                  </p>

                  {/* Mobile-only action row (hidden on md+, where actions appear on hover) */}
                  <div className="mt-3 flex items-center gap-2 md:hidden">
                    {demoLink && (
                      <a
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold no-underline text-white hover:text-white bg-accent hover:bg-accent-700 transition-colors"
                      >
                        <i className="bi bi-box-arrow-up-right" aria-hidden="true" />
                        Live
                      </a>
                    )}
                    <a
                      href={item.detailPage}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`View ${item.title} details`}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold no-underline transition-colors ${
                        theme === 'dark'
                          ? 'bg-white/10 text-white border border-white/20 hover:bg-white/15'
                          : 'bg-gray-100 text-heading border border-gray-200 hover:bg-gray-200'
                      }`}
                    >
                      <i className="bi bi-info-circle" aria-hidden="true" />
                      Details
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
