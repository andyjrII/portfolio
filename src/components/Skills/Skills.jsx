import { useEffect, useRef } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { skills } from '../../utils/portfolioData'

function Skills() {
  const skillsRef = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (skillsRef.current) {
      // Use Intersection Observer as a modern alternative to Waypoints
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const progressBars = entry.target.querySelectorAll('.progress-bar')
              progressBars.forEach((el, index) => {
                const percentage = el.getAttribute('data-percentage')
                setTimeout(() => {
                  el.style.width = percentage + '%'
                }, index * 50) // Stagger animation
              })
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.2 }
      )

      observer.observe(skillsRef.current)

      return () => {
        if (skillsRef.current) {
          observer.unobserve(skillsRef.current)
        }
      }
    }
  }, [])

  const leftColumn = skills.slice(0, Math.ceil(skills.length / 2))
  const rightColumn = skills.slice(Math.ceil(skills.length / 2))

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 skills-animation" ref={skillsRef}>
          {/* Left Column */}
          <div className="space-y-6">
            {leftColumn.map((skill, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl backdrop-blur-md border transition-all duration-300 transform hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-white/10 border-white/20 hover:bg-white/15'
                    : 'bg-white/80 border-gray-200/50 hover:bg-white shadow-lg'
                }`}
                data-aos="fade-right"
                data-aos-delay={100 + index * 50}
              >
                <div className="flex justify-between items-center mb-3">
                  <span
                    className={`text-lg font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-heading'
                    }`}
                  >
                    {skill.name}
                  </span>
                  <span
                    className={`text-xl font-bold ${
                      theme === 'dark'
                        ? 'text-accent bg-accent/20 px-3 py-1 rounded-lg'
                        : 'text-accent'
                    }`}
                  >
                    {skill.percentage}%
                  </span>
                </div>
                <div
                  className={`progress-bar-wrap rounded-full h-3 overflow-hidden ${
                    theme === 'dark' ? 'bg-white/10' : 'bg-gray-200'
                  }`}
                >
                  <div
                    className="progress-bar h-full transition-all duration-1000 ease-out rounded-full relative overflow-hidden"
                    role="progressbar"
                    aria-valuenow={skill.percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    data-percentage={skill.percentage}
                    style={{ width: '0%' }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${
                        theme === 'dark'
                          ? 'from-accent to-blue-400'
                          : 'from-accent to-blue-500'
                      }`}
                    ></div>
                    <div
                      className={`absolute inset-0 ${
                        theme === 'dark' ? 'bg-accent/20' : 'bg-accent/10'
                      } animate-pulse`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {rightColumn.map((skill, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl backdrop-blur-md border transition-all duration-300 transform hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-white/10 border-white/20 hover:bg-white/15'
                    : 'bg-white/80 border-gray-200/50 hover:bg-white shadow-lg'
                }`}
                data-aos="fade-left"
                data-aos-delay={100 + index * 50}
              >
                <div className="flex justify-between items-center mb-3">
                  <span
                    className={`text-lg font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-heading'
                    }`}
                  >
                    {skill.name}
                  </span>
                  <span
                    className={`text-xl font-bold ${
                      theme === 'dark'
                        ? 'text-accent bg-accent/20 px-3 py-1 rounded-lg'
                        : 'text-accent'
                    }`}
                  >
                    {skill.percentage}%
                  </span>
                </div>
                <div
                  className={`progress-bar-wrap rounded-full h-3 overflow-hidden ${
                    theme === 'dark' ? 'bg-white/10' : 'bg-gray-200'
                  }`}
                >
                  <div
                    className="progress-bar h-full transition-all duration-1000 ease-out rounded-full relative overflow-hidden"
                    role="progressbar"
                    aria-valuenow={skill.percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    data-percentage={skill.percentage}
                    style={{ width: '0%' }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${
                        theme === 'dark'
                          ? 'from-accent to-blue-400'
                          : 'from-accent to-blue-500'
                      }`}
                    ></div>
                    <div
                      className={`absolute inset-0 ${
                        theme === 'dark' ? 'bg-accent/20' : 'bg-accent/10'
                      } animate-pulse`}
                    ></div>
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

export default Skills

