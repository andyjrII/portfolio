import { useTheme } from '../../contexts/ThemeContext'
import { personalInfo } from '../../utils/portfolioData'

function About() {
  const { theme } = useTheme()

  const infoItems = [
    { icon: 'bi-telephone', label: 'Phone', value: personalInfo.phone },
    { icon: 'bi-geo-alt', label: 'City', value: personalInfo.city },
    { icon: 'bi-envelope', label: 'Email', value: personalInfo.email },
    { icon: 'bi-briefcase', label: 'Freelance', value: personalInfo.freelance },
  ]

  return (
    <section
      id="about"
      className={`about section py-20 ${
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
            About Me
          </span>
          <h2
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-heading'
            }`}
          >
            Get to Know Me
          </h2>
          <div
            className={`w-24 h-1 mx-auto rounded-full ${
              theme === 'dark' ? 'bg-accent' : 'bg-accent'
            }`}
          ></div>
        </div>
        <div
          className={`max-w-3xl mx-auto text-center space-y-4 ${
            theme === 'dark' ? 'text-white/80' : 'text-gray-600'
          } text-lg leading-relaxed`}
        >
          <p>
            I'm a passionate and detail-oriented full-stack web developer with over 5 years of
            experience building responsive, user-friendly, and scalable web applications. I enjoy
            crafting seamless user experiences on the frontend while developing robust and efficient
            backends that power high-performance solutions.
          </p>
          <p>
            I also bring extensive experience with WordPress, creating websites that are not only
            functional but also easy to manage and maintain. I thrive in fast-paced, collaborative
            environments, where I work closely with teams to meet deadlines and deliver innovative
            web experiences.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16" data-aos="fade-up" data-aos-delay="100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image with Glassmorphism */}
          <div className="relative group" data-aos="fade-right" data-aos-delay="200">
            <div
              className={`absolute -inset-4 rounded-2xl ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-accent/30 to-blue-500/20'
                  : 'bg-gradient-to-br from-accent/20 to-blue-400/10'
              } blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
            ></div>
            <div
              className={`relative rounded-2xl overflow-hidden backdrop-blur-md border ${
                theme === 'dark'
                  ? 'bg-white/10 border-white/20'
                  : 'bg-white/60 border-gray-200/50'
              } p-2 shadow-2xl transform group-hover:scale-105 transition-transform duration-300`}
            >
              <img
                src={personalInfo.profileImage}
                className="w-full h-auto rounded-xl object-cover"
                alt={personalInfo.name}
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6" data-aos="fade-left" data-aos-delay="300">
            <div>
              <h3
                className={`text-3xl lg:text-4xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-heading'
                }`}
              >
                {personalInfo.title}
              </h3>
              <p
                className={`text-lg italic leading-relaxed ${
                  theme === 'dark' ? 'text-white/80' : 'text-gray-600'
                }`}
              >
                As a Full-Stack Developer and Website Manager, I specialize in ensuring that every
                web project is a success—from initial concept to deployment and beyond. Whether
                it's maintaining site performance, managing content, or enhancing SEO, my goal is to
                deliver seamless experiences for users and stakeholders alike.
              </p>
            </div>

            {/* Info Cards with Glassmorphism */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoItems.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl backdrop-blur-md border transition-all duration-300 transform hover:scale-105 ${
                    theme === 'dark'
                      ? 'bg-white/10 border-white/20 hover:bg-white/15'
                      : 'bg-white/80 border-gray-200/50 hover:bg-white shadow-lg'
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={400 + index * 100}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        theme === 'dark' ? 'bg-accent/20' : 'bg-accent/10'
                      }`}
                    >
                      <i className={`bi ${item.icon} text-accent text-xl`}></i>
                    </div>
                    <div>
                      <p
                        className={`text-sm font-semibold mb-1 ${
                          theme === 'dark' ? 'text-white/60' : 'text-gray-500'
                        }`}
                      >
                        {item.label}
                      </p>
                      <p
                        className={`font-medium ${
                          theme === 'dark' ? 'text-white' : 'text-heading'
                        }`}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p
              className={`text-lg leading-relaxed pt-4 ${
                theme === 'dark' ? 'text-white/80' : 'text-gray-600'
              }`}
            >
              I'm passionate about bringing ideas to life through code, solving problems
              creatively, and helping businesses make the most of their online presence. Let's
              collaborate to create something extraordinary.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#contact"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/30'
                    : 'bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20'
                }`}
              >
                <span>Let's Work Together</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

