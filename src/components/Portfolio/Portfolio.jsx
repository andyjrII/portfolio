import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { portfolioItems } from '../../utils/portfolioData'

function Portfolio() {
  const isotopeRef = useRef(null)
  const isotopeInstance = useRef(null)

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
    if (isotopeRef.current) {
      import('glightbox').then((GLightbox) => {
        GLightbox.default({
          selector: '.glightbox',
        })
      })
    }
  }, [])

  return (
    <section id="portfolio" className="portfolio section light-background py-20">
      <div className="container mx-auto px-4 section-title" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-heading mb-4">Portfolio</h2>
        <p className="text-default">
          Welcome to my portfolio! Here, you'll find a collection of projects that I have worked
          on or am currently working on. These projects showcase my skills, creativity, and
          dedication to solving real-world problems through technology. Feel free to explore and
          see how I approach challenges in different domains.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay="200"
            ref={isotopeRef}
          >
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className={`isotope-item filter-${item.category} portfolio-item`}
              >
                <div className="portfolio-content h-full relative overflow-hidden rounded-lg group">
                  <img
                    src={item.image}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                    alt={item.title}
                  />
                  <div className="portfolio-info absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col p-4">
                    <h4 className="text-white text-xl font-bold mb-2">Web</h4>
                    <p className="text-white mb-4">{item.title}</p>
                    <div className="flex gap-4">
                      <a
                        href={item.image}
                        title={item.title}
                        data-gallery={`portfolio-gallery-${item.category}`}
                        className="glightbox preview-link text-white text-2xl hover:text-accent transition-colors"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <Link
                        to={item.detailPage}
                        title="More Details"
                        className="details-link text-white text-2xl hover:text-accent transition-colors"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </Link>
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

