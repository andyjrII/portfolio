import { useEffect, useRef, useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { portfolioItems, projectDetails } from '../../utils/portfolioData'
import {
  SiReact,
  SiNestjs,
  SiPostgresql,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiDjango,
  SiBootstrap,
  SiNextdotjs,
  SiTypescript,
  SiVite,
  SiPrisma,
  SiRedis,
  SiSocketdotio,
  SiRender,
  SiCloudinary,
  SiGit,
  SiPython,
  SiPaypal,
  SiMaildotru,
} from 'react-icons/si'

function Portfolio() {
  const isotopeRef = useRef(null)
  const { theme } = useTheme()
  const [activeFilter, setActiveFilter] = useState('*')

  useEffect(() => {
    if (isotopeRef.current) {
      const items = isotopeRef.current.querySelectorAll('.isotope-item')
      items.forEach((item) => {
        item.style.position = 'relative'
        item.style.left = 'auto'
        item.style.top = 'auto'
        item.style.transform = 'none'
        item.style.display = ''
      })
    }
  }, [])


  const handleFilter = () => {
    // Filters are disabled for now (all projects are web)
  }

  // Future platform filters (uncomment when mobile/desktop projects are added):
  // const categories = ['*', 'web', 'mobile', 'desktop']
  // const categoryLabels = {
  //   '*': 'All',
  //   web: 'Web',
  //   mobile: 'Mobile',
  //   desktop: 'Desktop',
  // }
  // Current filters (all projects are web):

  const categories = ['*', 'web']
  const categoryLabels = {
    '*': 'All',
    web: 'Web',
  }

  const techIconMap = {
    React: SiReact,
    NestJS: SiNestjs,
    PostgreSQL: SiPostgresql,
    'Supabase (PostgreSQL)': SiPostgresql,
    Tailwind: SiTailwindcss,
    'Tailwind CSS': SiTailwindcss,
    'Tailwind CSS / custom CSS': SiTailwindcss,
    HTML: SiHtml5,
    JavaScript: SiJavascript,
    CSS: SiCss3,
    Django: SiDjango,
    Bootstrap: SiBootstrap,
    'Next.js': SiNextdotjs,
    TypeScript: SiTypescript,
    Vite: SiVite,
    Prisma: SiPrisma,
    'Prisma ORM': SiPrisma,
    Redis: SiRedis,
    'Socket.IO': SiSocketdotio,
    Socket: SiSocketdotio,
    Render: SiRender,
    Cloudinary: SiCloudinary,
    Paystack: SiPaypal,
    Brevio: SiMaildotru,
    'Git / GitHub': SiGit,
    Git: SiGit,
    GitHub: SiGit,
    Python: SiPython,
  }

  const getTechList = (slug) => {
    const detail = projectDetails[slug]
    if (!detail?.stack) return []
    const all = Object.values(detail.stack).flat()
    return [...new Set(all)]
  }

  const getIconForTech = (techName) => {
    return (
      techIconMap[techName] ||
      techIconMap[techName.split(' / ')[0]] ||
      techIconMap[techName.split(' (')[0]] ||
      null
    )
  }

  return (
    <section
      id="portfolio"
      className={`portfolio section py-20 ${
        theme === 'dark' ? 'bg-dark-bg' : 'bg-gradient-to-b from-gray-50 to-white'
      }`}
    >
      <div className="container mx-auto px-4 section-title" data-aos="fade-up">
        <div className="text-center mb-12">
          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
              theme === 'dark'
                ? 'bg-accent/20 text-accent border border-accent/30'
                : 'bg-accent/10 text-accent border border-accent/20'
            }`}
          >
            My Work
          </span>
          <h2
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-heading'
            }`}
          >
            Featured Projects
          </h2>
          <div
            className={`w-24 h-1 mx-auto rounded-full ${
              theme === 'dark' ? 'bg-accent' : 'bg-accent'
            }`}
          ></div>
        </div>
        <p
          className={`max-w-3xl mx-auto text-center text-lg ${
            theme === 'dark' ? 'text-white/80' : 'text-gray-600'
          }`}
        >
          A curated set of featured work—projects I've built or am building. Each one highlights my skills, approach, and focus on solving real-world problems with technology.
        </p>
      </div>

      {/*
        Filter Buttons (commented out because all projects are web for now).
        Uncomment and adjust when adding other platforms.
        <div className="container mx-auto px-4 mb-8" data-aos="fade-up" data-aos-delay="100">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilter(category === '*' ? '*' : `.filter-${category}`)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === (category === '*' ? '*' : `.filter-${category}`)
                    ? theme === 'dark'
                      ? 'bg-accent text-white shadow-lg shadow-accent/30'
                      : 'bg-accent text-white shadow-lg shadow-accent/20'
                    : theme === 'dark'
                    ? 'bg-white/10 text-white/70 hover:bg-white/15 border border-white/20'
                    : 'bg-white/80 text-gray-700 hover:bg-white border border-gray-200/50'
                } backdrop-blur-md`}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>
        </div>
      */}

      <div className="container mx-auto px-4">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 isotope-container"
            style={{ display: 'grid' }}
            data-aos="fade-up"
            data-aos-delay="200"
            ref={isotopeRef}
          >
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className={`isotope-item filter-${item.category} portfolio-item`}
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                <div
                  className={`portfolio-content h-full relative overflow-hidden rounded-2xl group flex flex-col cursor-pointer ${
                    theme === 'dark'
                      ? 'bg-white/10 border border-white/20'
                      : 'bg-white/80 border border-gray-200/50'
                  } backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-t-2xl bg-gray-200">
                    <span
                      className={`absolute top-3 left-3 z-10 inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        theme === 'dark'
                          ? 'bg-white text-accent'
                          : 'bg-heading text-accent'
                      }`}
                    >
                      Web
                    </span>
                    <img
                      src={item.image}
                      className="w-full h-auto max-h-[320px] block transition-transform duration-500 group-hover:scale-105"
                      alt={item.title}
                      loading="lazy"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${
                        theme === 'dark'
                          ? 'from-dark-bg/80 via-dark-bg/40 to-transparent'
                          : 'from-white/80 via-white/40 to-transparent'
                      } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>
                    {/* Hover overlay: Details & Live Demo centered */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 ${
                        theme === 'dark' ? 'bg-black/50' : 'bg-black/40'
                      }`}
                    >
                      {projectDetails[item.slug]?.links?.demo && (
                        <a
                          href={projectDetails[item.slug].links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold no-underline text-white bg-gray-900 hover:bg-gray-800 transition-colors shadow-lg"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="bi bi-box-arrow-up-right" aria-hidden="true" />
                          Live Demo
                        </a>
                      )}
                      <a
                        href={item.detailPage}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`View ${item.title} details`}
                        className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium no-underline transition-colors ${
                          theme === 'dark'
                            ? 'bg-white/20 text-white hover:bg-white/30 border border-white/40'
                            : 'bg-white/90 text-heading hover:bg-white border border-white'
                        }`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="bi bi-info-circle" aria-hidden="true" />
                        Details
                      </a>
                    </div>
                    {item.caption && (
                      <div
                        className={`absolute bottom-0 left-0 right-0 px-4 py-3 text-sm font-medium z-10 ${
                          theme === 'dark'
                            ? 'bg-dark-bg/90 text-white/95'
                            : 'bg-black/70 text-white'
                        }`}
                      >
                        {item.caption}
                      </div>
                    )}
                  </div>

                  {/* Bottom Info Bar */}
                  <div
                    className={`p-4 flex flex-col justify-center ${
                      theme === 'dark' ? 'bg-white/5' : 'bg-white/50'
                    } backdrop-blur-sm`}
                  >
                    <h5
                      className={`font-semibold text-lg ${
                        theme === 'dark' ? 'text-white' : 'text-heading'
                      }`}
                    >
                      {item.title}
                    </h5>
                    <div
                      className={`flex flex-nowrap gap-1.5 mt-1.5 items-center overflow-x-auto ${
                        theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                      }`}
                      style={{ scrollbarWidth: 'thin' }}
                    >
                      {getTechList(item.slug)
                        .filter((tech) => getIconForTech(tech))
                        .map((tech) => {
                          const Icon = getIconForTech(tech)
                          return (
                            <span
                              key={tech}
                              className="inline-flex flex-shrink-0 items-center justify-center w-6 h-6 cursor-pointer"
                              title={tech}
                              aria-label={tech}
                            >
                              <Icon className="w-5 h-5" />
                            </span>
                          )
                        })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio

