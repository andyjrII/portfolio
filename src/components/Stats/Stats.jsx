import { useEffect, useRef, useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { stats } from '../../utils/portfolioData'

const DURATION_MS = 2000
const TICK_MS = 40

function runCounter(setDisplayed) {
  const startTime = Date.now()
  const intervalId = setInterval(() => {
    const elapsed = Date.now() - startTime
    const progress = Math.min(1, elapsed / DURATION_MS)
    const easeOut = 1 - Math.pow(1 - progress, 2)

    setDisplayed(
      stats.map((stat) => Math.floor(easeOut * stat.value))
    )

    if (progress >= 1) clearInterval(intervalId)
  }, TICK_MS)
  return intervalId
}

function Stats() {
  const { theme } = useTheme()
  const sectionRef = useRef(null)
  const [displayed, setDisplayed] = useState(stats.map(() => 0))
  const startedRef = useRef(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    function startIfInView() {
      if (startedRef.current) return
      const section = sectionRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      const inView = rect.top < window.innerHeight && rect.bottom > 0
      if (!inView) return
      startedRef.current = true
      intervalRef.current = runCounter(setDisplayed)
    }

    const onAosIn = (e) => {
      const el = e.detail || e.target
      if (el && sectionRef.current?.contains(el)) startIfInView()
    }

    const onScroll = () => startIfInView()
    const afterLoad = () => {
      startIfInView()
      window.removeEventListener('load', afterLoad)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) startIfInView()
      },
      { threshold: 0.01, rootMargin: '0px' }
    )
    const t = setTimeout(() => {
      if (sectionRef.current) observer.observe(sectionRef.current)
    }, 100)

    document.addEventListener('aos:in', onAosIn)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('load', afterLoad)
    const t2 = setTimeout(startIfInView, 200)

    return () => {
      clearTimeout(t)
      clearTimeout(t2)
      observer.disconnect()
      document.removeEventListener('aos:in', onAosIn)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('load', afterLoad)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="stats"
      className={`stats section py-16 md:py-20 relative overflow-hidden ${
        theme === 'dark' ? 'bg-dark-bg' : 'bg-gradient-to-b from-white to-gray-50'
      }`}
    >
      <div className="container mx-auto px-4 relative z-10" data-aos="fade-up" data-aos-delay="100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`stats-item text-center p-6 rounded-xl border transition-colors duration-300 ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10 hover:border-accent-400/40'
                  : 'bg-white border-gray-200/70 hover:border-accent/40 shadow-sm'
              }`}
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-3 bg-accent/10 dark:bg-accent/20">
                <i className={`bi ${stat.icon} text-2xl text-accent dark:text-accent-400`}></i>
              </div>

              {/* Counter */}
              <div className="mb-2">
                <span
                  className={`text-4xl md:text-5xl font-bold tracking-tight ${
                    theme === 'dark' ? 'text-white' : 'text-heading'
                  }`}
                >
                  {displayed[index]}
                </span>
                {stat.suffix && (
                  <span
                    className={`text-4xl md:text-5xl font-bold tracking-tight ${
                      theme === 'dark' ? 'text-white' : 'text-heading'
                    }`}
                  >
                    {stat.suffix}
                  </span>
                )}
              </div>

              {/* Label */}
              <p
                className={`text-sm font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-heading'
                }`}
              >
                {stat.label}
              </p>
              <p
                className={`text-xs mt-0.5 ${
                  theme === 'dark' ? 'text-white/70' : 'text-gray-500'
                }`}
              >
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
