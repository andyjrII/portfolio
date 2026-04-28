import { useTheme } from '../../contexts/ThemeContext'
import { personalInfo, socialLinks } from '../../utils/portfolioData'

const HANDLE_BY_NAME = {
  github: '@andyjrII',
  linkedin: 'in/andyjr002',
  twitter: '@andyjrii',
  facebook: '@asjames3',
  instagram: '@andyjr_ii',
}

const PLATFORM_LABEL = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  twitter: 'X (Twitter)',
  facebook: 'Facebook',
  instagram: 'Instagram',
}

function About() {
  const { theme } = useTheme()

  // Show the four most relevant socials in About; the sidebar already lists all five.
  const aboutSocials = ['github', 'linkedin', 'twitter', 'instagram']
    .map((name) => socialLinks.find((s) => s.name === name))
    .filter(Boolean)

  return (
    <section
      id="about"
      className={`about section py-16 md:py-20 ${
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
            About Me
          </span>
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-heading'
            }`}
          >
            What I do
          </h2>
          <div className="w-16 h-0.5 mx-auto rounded-full bg-accent dark:bg-accent-400" />
        </div>
        <div
          className={`max-w-2xl mx-auto text-center space-y-3 ${
            theme === 'dark' ? 'text-white/90' : 'text-gray-600'
          } text-base leading-relaxed`}
        >
          <p>
            I'm a full-stack developer with 5+ years of experience shipping web apps end-to-end —
            real products people use, not just demos. My daily stack leans on React, Next.js,
            NestJS, and PostgreSQL, but I pick the tools that fit the problem.
          </p>
          <p>
            Outside of client work, I build my own products as an indie hacker: errand
            marketplaces, gifting platforms, AI tools. I gravitate toward the messy parts everyone
            else avoids — auth, payments, real-time, deployment — the work that decides whether a
            product actually ships.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-10" data-aos="fade-up" data-aos-delay="100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* Image */}
          <div className="relative group max-w-sm mx-auto lg:max-w-md" data-aos="fade-right" data-aos-delay="200">
            <div
              className={`absolute -inset-2 rounded-2xl ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-accent/25 to-accent-500/15'
                  : 'bg-gradient-to-br from-accent/15 to-accent-400/10'
              } blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300`}
            ></div>
            <div
              className={`relative rounded-2xl overflow-hidden backdrop-blur-md border ${
                theme === 'dark'
                  ? 'bg-white/10 border-white/20'
                  : 'bg-white/60 border-gray-200/60'
              } p-1.5 shadow-xl`}
            >
              <img
                src={personalInfo.profileImage}
                className="w-full h-auto rounded-xl object-cover"
                alt={personalInfo.name}
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4" data-aos="fade-left" data-aos-delay="300">
            <div>
              <h3
                className={`text-xl md:text-2xl font-bold mb-3 tracking-tight ${
                  theme === 'dark' ? 'text-white' : 'text-heading'
                }`}
              >
                {personalInfo.title}
              </h3>
              <p
                className={`text-sm md:text-base italic leading-relaxed ${
                  theme === 'dark' ? 'text-white/90' : 'text-gray-600'
                }`}
              >
                I build full-stack web apps for clients and ship my own products as an indie hacker
                — owning the work end-to-end, from idea and architecture to deployment and the
                day-to-day grind of keeping things running.
              </p>
            </div>

            {/* Social Cards — find me online */}
            <div>
              <p
                className={`text-xs font-semibold uppercase tracking-wide mb-2 ${
                  theme === 'dark' ? 'text-white/60' : 'text-gray-500'
                }`}
              >
                Find me online
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {aboutSocials.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-3 rounded-lg border transition-colors duration-300 ${
                      theme === 'dark'
                        ? 'bg-white/5 border-white/10 hover:border-accent-400/40 hover:bg-white/10'
                        : 'bg-white border-gray-200/70 hover:border-accent/40 hover:bg-gray-50 shadow-sm'
                    }`}
                    data-aos="fade-up"
                    data-aos-delay={400 + index * 100}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-md flex-shrink-0 ${
                          theme === 'dark' ? 'bg-accent/20' : 'bg-accent/10'
                        }`}
                      >
                        <i className={`bi ${social.icon} text-accent dark:text-accent-400 text-base leading-none flex items-center justify-center`}></i>
                      </div>
                      <div className="min-w-0">
                        <p
                          className={`text-xs font-semibold ${
                            theme === 'dark' ? 'text-white/70' : 'text-gray-500'
                          }`}
                        >
                          {PLATFORM_LABEL[social.name]}
                        </p>
                        <p
                          className={`text-sm font-medium truncate ${
                            theme === 'dark'
                              ? 'text-white group-hover:text-accent-300'
                              : 'text-heading group-hover:text-accent'
                          } transition-colors`}
                        >
                          {HANDLE_BY_NAME[social.name] || social.name}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <p
              className={`text-sm md:text-base leading-relaxed ${
                theme === 'dark' ? 'text-white/90' : 'text-gray-600'
              }`}
            >
              Currently freelancing and building products in public. If you've got an idea worth
              shipping or need a builder who'll own the whole stack, I'd love to hear about it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
