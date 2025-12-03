import { useEffect, useRef } from 'react'
import { stats } from '../../utils/portfolioData'

function Stats() {
  const statsRef = useRef(null)

  useEffect(() => {
    if (statsRef.current) {
      import('@srexi/purecounterjs').then((PureCounter) => {
        new PureCounter.default()
      })
    }
  }, [])

  return (
    <section id="stats" className="stats section py-20">
      <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="stats-item text-center">
              <i className={`bi ${stat.icon} text-4xl text-accent mb-4`}></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end={stat.value}
                data-purecounter-duration="1"
                className="purecounter text-5xl font-bold text-heading block"
              >
                0
              </span>
              <p className="text-default mt-2">
                + <strong>{stat.label}</strong> <span>{stat.sublabel}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

