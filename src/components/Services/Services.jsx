import { useTheme } from '../../contexts/ThemeContext'
import { services } from '../../utils/portfolioData'

function Services() {
  const { theme } = useTheme()

  return (
    <section
      id="services"
      className={`services section py-20 ${
        theme === 'dark' ? 'bg-dark-bg' : 'bg-gradient-to-b from-white to-gray-50'
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
            What I Offer
          </span>
          <h2
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-heading'
            }`}
          >
            My Services
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
          I offer a range of professional services designed to meet the diverse needs of my
          clients. From technical solutions to creative consultations, I aim to provide
          value-driven results that help individuals and businesses achieve their goals.
        </p>
      </div>

      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-item group relative p-8 rounded-2xl backdrop-blur-md border transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 ${
                theme === 'dark'
                  ? 'bg-white/10 border-white/20 hover:bg-white/15 hover:border-accent/30 shadow-lg shadow-accent/10'
                  : 'bg-white/80 border-gray-200/50 hover:bg-white hover:border-accent/30 shadow-xl'
              }`}
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-accent/20 to-blue-500/10'
                    : 'bg-gradient-to-br from-accent/10 to-blue-400/5'
                }`}
              ></div>

              {/* Icon Container */}
              <div className="relative mb-6">
                <div
                  className={`absolute inset-0 rounded-xl blur-xl ${
                    theme === 'dark' ? 'bg-accent/30' : 'bg-accent/20'
                  } opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
                ></div>
                <div
                  className={`relative w-16 h-16 rounded-xl flex items-center justify-center ${
                    theme === 'dark' ? 'bg-accent/20' : 'bg-accent/10'
                  } group-hover:scale-110 transition-transform duration-300`}
                >
                  <i className={`bi ${service.icon} text-3xl text-accent`}></i>
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h4
                  className={`title text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300 ${
                    theme === 'dark' ? 'text-white' : 'text-heading'
                  }`}
                >
                  {service.title}
                </h4>
                <p
                  className={`description leading-relaxed ${
                    theme === 'dark' ? 'text-white/80' : 'text-gray-600'
                  }`}
                >
                  {service.description}
                </p>
              </div>

              {/* Decorative Element */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl ${
                  theme === 'dark' ? 'bg-accent/30' : 'bg-accent/20'
                } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

