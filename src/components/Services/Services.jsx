import { useTheme } from '../../contexts/ThemeContext'
import { services } from '../../utils/portfolioData'

function Services() {
  const { theme } = useTheme()

  return (
    <section
      id="services"
      className={`services section py-16 md:py-20 ${
        theme === 'dark' ? 'bg-dark-bg' : 'bg-gradient-to-b from-white to-gray-50'
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
            What I Offer
          </span>
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-heading'
            }`}
          >
            My Services
          </h2>
          <div className="w-16 h-0.5 mx-auto rounded-full bg-accent dark:bg-accent-400" />
        </div>
        <p
          className={`max-w-2xl mx-auto text-center text-base ${
            theme === 'dark' ? 'text-white/90' : 'text-gray-600'
          }`}
        >
          A range of professional services designed to meet diverse client needs — from technical
          solutions to creative consultations, focused on value-driven results.
        </p>
      </div>

      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-item group relative p-5 rounded-xl border transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10 hover:border-accent-400/40'
                  : 'bg-white border-gray-200/70 hover:border-accent/40 shadow-sm hover:shadow-md'
              }`}
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              {/* Icon */}
              <div className="mb-4">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                    theme === 'dark'
                      ? 'bg-accent/20 group-hover:bg-accent/30'
                      : 'bg-accent/10 group-hover:bg-accent/15'
                  }`}
                >
                  <i className={`bi ${service.icon} text-2xl text-accent dark:text-accent-400`}></i>
                </div>
              </div>

              {/* Content */}
              <div>
                <h4
                  className={`text-base md:text-lg font-bold mb-2 group-hover:text-accent dark:group-hover:text-accent-400 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-white' : 'text-heading'
                  }`}
                >
                  {service.title}
                </h4>
                <p
                  className={`text-sm leading-relaxed ${
                    theme === 'dark' ? 'text-white/80' : 'text-gray-600'
                  }`}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
