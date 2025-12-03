import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import { portfolioItems } from '../../utils/portfolioData'

function Portfolio() {
  const isotopeRef = useRef(null)
  const isotopeInstance = useRef(null)
  const { theme } = useTheme()
  const [activeFilter, setActiveFilter] = useState('*')

  useEffect(() => {
    if (isotopeRef.current) {
      import('isotope-layout').then((Isotope) => {
        import('imagesloaded').then((imagesLoaded) => {
          imagesLoaded.default(isotopeRef.current, () => {
            isotopeInstance.current = new Isotope.default(isotopeRef.current, {
              itemSelector: '.isotope-item',
              layoutMode: 'masonry',
              filter: '*',
              sortBy: 'original-order',
            })
          })
        })
      })
    }

    return () => {
      if (isotopeInstance.current) {
        isotopeInstance.current.destroy()
      }
    }
  }, [])

  useEffect(() => {
    if (isotopeRef.current && isotopeInstance.current) {
      import('glightbox').then((GLightbox) => {
        GLightbox.default({
          selector: '.glightbox',
        })
      })
    }
  }, [])

  const handleFilter = (filter) => {
    setActiveFilter(filter)
    if (isotopeInstance.current) {
      isotopeInstance.current.arrange({ filter })
    }
  }

  const categories = ['*', 'web', 'product', 'branding', 'books', 'app']
  const categoryLabels = {
    '*': 'All',
    web: 'Web',
    product: 'Product',
    branding: 'Branding',
    books: 'Books',
    app: 'App',
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
          Welcome to my portfolio! Here, you'll find a collection of projects that I have worked
          on or am currently working on. These projects showcase my skills, creativity, and
          dedication to solving real-world problems through technology.
        </p>
      </div>

      {/* Filter Buttons */}
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

      <div className="container mx-auto px-4">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 isotope-container"
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
                  className={`portfolio-content h-full relative overflow-hidden rounded-2xl group ${
                    theme === 'dark'
                      ? 'bg-white/10 border border-white/20'
                      : 'bg-white/80 border border-gray-200/50'
                  } backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <img
                      src={item.image}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
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
                  </div>

                  {/* Overlay Content */}
                  <div
                    className={`absolute inset-0 ${
                      theme === 'dark' ? 'bg-dark-bg/95' : 'bg-white/95'
                    } backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center flex-col p-6`}
                  >
                    <div className="text-center space-y-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          theme === 'dark'
                            ? 'bg-accent/20 text-accent'
                            : 'bg-accent/10 text-accent'
                        }`}
                      >
                        Web Project
                      </span>
                      <h4
                        className={`text-2xl font-bold ${
                          theme === 'dark' ? 'text-white' : 'text-heading'
                        }`}
                      >
                        {item.title}
                      </h4>
                      <div className="flex gap-4 justify-center pt-4">
                        <a
                          href={item.image}
                          title={item.title}
                          data-gallery={`portfolio-gallery-${item.category}`}
                          className={`glightbox preview-link w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                            theme === 'dark'
                              ? 'bg-accent text-white hover:bg-accent/90'
                              : 'bg-accent text-white hover:bg-accent/90'
                          } shadow-lg`}
                        >
                          <i className="bi bi-zoom-in text-xl"></i>
                        </a>
                        <Link
                          to={item.detailPage}
                          title="More Details"
                          className={`details-link w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                            theme === 'dark'
                              ? 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                          } backdrop-blur-sm shadow-lg`}
                        >
                          <i className="bi bi-link-45deg text-xl"></i>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Info Bar */}
                  <div
                    className={`p-4 ${
                      theme === 'dark' ? 'bg-white/5' : 'bg-white/50'
                    } backdrop-blur-sm`}
                  >
                    <h5
                      className={`font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-heading'
                      }`}
                    >
                      {item.title}
                    </h5>
                    <p
                      className={`text-sm mt-1 ${
                        theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                      }`}
                    >
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)} Project
                    </p>
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

