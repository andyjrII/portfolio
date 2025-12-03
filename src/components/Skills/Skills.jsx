import { useEffect, useRef } from 'react'
import { skills } from '../../utils/portfolioData'

function Skills() {
  const skillsRef = useRef(null)

  useEffect(() => {
    if (skillsRef.current) {
      // Use Intersection Observer as a modern alternative to Waypoints
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const progressBars = entry.target.querySelectorAll('.progress-bar')
              progressBars.forEach((el) => {
                const percentage = el.getAttribute('data-percentage')
                el.style.width = percentage + '%'
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
    <section id="skills" className="skills section light-background py-20">
      <div className="container mx-auto px-4 section-title" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-heading mb-4">Skills</h2>
        <p className="text-default">
          With a strong foundation in web development, I bring a versatile skill set spanning both
          frontend and backend technologies. I am proficient in a variety of modern tools and
          frameworks that empower me to deliver high-quality results tailored to client and
          project needs.
        </p>
      </div>

      <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
        <div className="flex flex-wrap gap-8 skills-animation" ref={skillsRef}>
          <div className="w-full lg:w-1/2">
            {leftColumn.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-default font-medium">{skill.name}</span>
                  <i className="val text-accent font-semibold">{skill.percentage}%</i>
                </div>
                <div className="progress-bar-wrap bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="progress-bar bg-accent h-full transition-all duration-1000 ease-out"
                    role="progressbar"
                    aria-valuenow={skill.percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    data-percentage={skill.percentage}
                    style={{ width: '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/2">
            {rightColumn.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-default font-medium">{skill.name}</span>
                  <i className="val text-accent font-semibold">{skill.percentage}%</i>
                </div>
                <div className="progress-bar-wrap bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="progress-bar bg-accent h-full transition-all duration-1000 ease-out"
                    role="progressbar"
                    aria-valuenow={skill.percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    data-percentage={skill.percentage}
                    style={{ width: '0%' }}
                  ></div>
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

