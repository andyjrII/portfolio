import { useEffect, useRef } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { stats } from '../../utils/portfolioData'

function Stats() {
  const statsRef = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (statsRef.current) {
      import('@srexi/purecounterjs').then((PureCounter) => {
        new PureCounter.default()
      })
    }
  }, [])

  return (
    <section
      id="stats"
      className={`stats section py-20 relative overflow-hidden ${
        theme === 'dark' ? 'bg-dark-bg' : 'bg-gradient-to-b from-white to-gray-50'
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10" data-aos="fade-up" data-aos-delay="100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`stats-item text-center p-8 rounded-2xl backdrop-blur-md border transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 ${
                theme === 'dark'
                  ? 'bg-white/10 border-white/20 hover:bg-white/15 shadow-lg shadow-accent/10'
                  : 'bg-white/80 border-gray-200/50 hover:bg-white shadow-xl'
              }`}
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              {/* Icon with Gradient Background */}
              <div className="relative inline-block mb-6">
                <div
                  className={`absolute inset-0 rounded-full blur-xl ${
                    theme === 'dark' ? 'bg-accent/30' : 'bg-accent/20'
                  }`}
                ></div>
                <div
                  className={`relative p-4 rounded-full ${
                    theme === 'dark' ? 'bg-accent/20' : 'bg-accent/10'
                  }`}
                >
                  <i className={`bi ${stat.icon} text-4xl text-accent`}></i>
                </div>
              </div>

              {/* Counter */}
              <div className="mb-4">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end={stat.value}
                  data-purecounter-duration="2"
                  className={`purecounter text-6xl font-bold block ${
                    theme === 'dark'
                      ? 'text-white bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent'
                      : 'text-heading'
                  }`}
                >
                  0
                </span>
              </div>

              {/* Label */}
              <p
                className={`text-lg font-semibold ${
                  theme === 'dark' ? 'text-white/90' : 'text-heading'
                }`}
              >
                + <strong>{stat.label}</strong>
              </p>
              <p
                className={`text-sm mt-1 ${
                  theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                }`}
              >
                {stat.sublabel}
              </p>

              {/* Decorative Line */}
              <div
                className={`w-16 h-1 mx-auto mt-4 rounded-full ${
                  theme === 'dark' ? 'bg-accent' : 'bg-accent'
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

