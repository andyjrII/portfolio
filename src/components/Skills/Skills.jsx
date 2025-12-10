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

// Build a lookup for the available skills to ensure we only render what exists in data
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
      className={`skills section py-20 ${
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
            My Expertise
          </span>
          <h2
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-heading'
            }`}
          >
            Skills & Technologies
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
          With a strong foundation in web development, I bring a versatile skill set spanning both
          frontend and backend technologies. I am proficient in a variety of modern tools and
          frameworks that empower me to deliver high-quality results tailored to client and
          project needs.
        </p>
      </div>

      <div className="container mx-auto px-4 mt-16" data-aos="fade-up" data-aos-delay="100">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {groupedSkills.map((group, idx) => (
            <div
              key={group.title}
              className={`p-6 rounded-2xl backdrop-blur-md border transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-white/10 border-white/20 hover:bg-white/15'
                  : 'bg-white/80 border-gray-200/60 hover:bg-white shadow-lg'
              }`}
              data-aos="fade-up"
              data-aos-delay={100 + idx * 50}
            >
              <div className="flex items-center justify-between mb-4">
                <h3
                  className={`text-xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-heading'
                  }`}
                >
                  {group.title}
                </h3>
                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    theme === 'dark'
                      ? 'bg-accent/20 text-accent border border-accent/30'
                      : 'bg-accent/10 text-accent border border-accent/20'
                  }`}
                >
                  {group.items.length} tools
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items
                  .filter((name) => skillSet.has(name))
                  .map((name) => {
                    const Icon = getIcon(name)
                    return (
                      <span
                        key={name}
                        className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium ${
                          theme === 'dark'
                            ? 'bg-white/10 text-white border border-white/10'
                            : 'bg-gray-100 text-gray-800 border border-gray-200'
                        }`}
                      >
                        <span
                          className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-accent/10 text-accent text-sm"
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

