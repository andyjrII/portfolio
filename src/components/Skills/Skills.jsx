import { useTheme } from '../../contexts/ThemeContext'
import { skills } from '../../utils/portfolioData'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPython,
  SiDjango,
  SiHtml5,
  SiCss3,
  SiSass,
  SiBootstrap,
  SiTailwindcss,
  SiWordpress,
  SiDocker,
  SiGit,
  SiGithub,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGoogleanalytics,
} from 'react-icons/si'
import { FaNetworkWired, FaMicrosoft } from 'react-icons/fa'

const groupedSkills = [
  {
    title: 'Frontend',
    items: [
      'HTML',
      'CSS',
      'Bootstrap',
      'Tailwind CSS',
      'React.js',
      'Next.js',
      'JavaScript',
      'TypeScript',
    ],
  },
  {
    title: 'Backend & APIs',
    items: ['Node.js/Express.js', 'Nest.js', 'Microservices', 'Python', 'Django'],
  },
  {
    title: 'Data & Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'DevOps & Tooling',
    items: ['Docker', 'Git/Github'],
  },
  {
    title: 'Content & SEO',
    items: ['WordPress', 'SEO'],
  },
  {
    title: 'Other',
    items: ['Microsoft Office Suite'],
  },
]

const skillSet = new Set(skills.map((s) => s.name))

const iconMap = {
  HTML: SiHtml5,
  CSS: SiCss3,
  Sass: SiSass,
  Bootstrap: SiBootstrap,
  'Tailwind CSS': SiTailwindcss,
  'React.js': SiReact,
  'Next.js': SiNextdotjs,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  'Node.js/Express.js': SiNodedotjs,
  'Express.js': SiExpress,
  'Nest.js': SiNestjs,
  Microservices: FaNetworkWired,
  Python: SiPython,
  Django: SiDjango,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Docker: SiDocker,
  'Git/Github': SiGit,
  Git: SiGit,
  Github: SiGithub,
  WordPress: SiWordpress,
  SEO: SiGoogleanalytics,
  'Microsoft Office Suite': FaMicrosoft,
}

const getIcon = (name) => iconMap[name] || null

function Skills() {
  const { theme } = useTheme()

  return (
    <section
      id="skills"
      className={`skills section py-16 md:py-20 ${
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
            My Expertise
          </span>
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-heading'
            }`}
          >
            Skills & Technologies
          </h2>
          <div className="w-16 h-0.5 mx-auto rounded-full bg-accent dark:bg-accent-400" />
        </div>
        <p
          className={`max-w-2xl mx-auto text-center text-base ${
            theme === 'dark' ? 'text-white/90' : 'text-gray-600'
          }`}
        >
          The stack I use day to day. I pick tools to fit the problem, not the other way around.
        </p>
      </div>

      <div className="container mx-auto px-4 mt-10" data-aos="fade-up" data-aos-delay="100">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {groupedSkills.map((group, idx) => (
            <div
              key={group.title}
              className={`p-5 rounded-xl backdrop-blur-md border transition-colors duration-300 ${
                theme === 'dark'
                  ? 'bg-white/10 border-white/20 hover:bg-white/15'
                  : 'bg-white/80 border-gray-200/60 hover:bg-white shadow-sm'
              }`}
              data-aos="fade-up"
              data-aos-delay={100 + idx * 50}
            >
              <div className="flex items-center justify-between mb-3">
                <h3
                  className={`text-base font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-heading'
                  }`}
                >
                  {group.title}
                </h3>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full ${
                    theme === 'dark'
                      ? 'bg-accent/20 text-accent-400 border border-accent-400/30'
                      : 'bg-accent/10 text-accent border border-accent/20'
                  }`}
                >
                  {group.items.length} tools
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items
                  .filter((name) => skillSet.has(name))
                  .map((name) => {
                    const Icon = getIcon(name)
                    return (
                      <span
                        key={name}
                        className={`inline-flex items-center gap-1.5 px-2 py-1.5 rounded-md text-xs font-medium ${
                          theme === 'dark'
                            ? 'bg-white/10 text-white border border-white/10'
                            : 'bg-gray-100 text-gray-800 border border-gray-200'
                        }`}
                      >
                        <span
                          className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-accent/10 text-accent dark:text-accent-400 text-xs"
                          aria-hidden="true"
                        >
                          {Icon ? <Icon /> : name.slice(0, 2).toUpperCase()}
                        </span>
                        {name}
                      </span>
                    )
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
