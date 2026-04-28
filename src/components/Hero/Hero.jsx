import { useEffect, useRef, useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { personalInfo } from '../../utils/portfolioData'

function Hero() {
  const typedRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    if (typedRef.current) {
      import('typed.js').then((Typed) => {
        new Typed.default(typedRef.current, {
          strings: personalInfo.typedItems,
          loop: true,
          typeSpeed: 80,
          backSpeed: 40,
          backDelay: 3000,
          startDelay: 500,
          showCursor: true,
          cursorChar: '|',
        })
      })
    }
    setIsLoaded(true)
  }, [])

  return (
    <section
      id="hero"
      className={`hero section py-0 relative min-h-screen flex items-center overflow-hidden -mx-5 lg:-mx-8 xl:-mx-10 ${
        theme === 'dark' ? 'bg-dark-bg' : 'bg-gradient-to-br from-gray-50 to-gray-100'
      }`}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/assets/img/hero-bg.jpg"
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            theme === 'dark' ? 'opacity-15' : 'opacity-20'
          }`}
        />
        <div
          className={`absolute inset-0 ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-dark-bg/85 via-dark-bg/70 to-dark-bg/85'
              : 'bg-gradient-to-br from-white/40 via-white/30 to-white/40'
          }`}
        ></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div
            className={`space-y-5 animate-slide-left ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000`}
            data-aos="fade-right"
            data-aos-delay="100"
          >
            {/* Greeting Badge */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md border ${
                theme === 'dark'
                  ? 'bg-white/10 border-white/20 text-white/90'
                  : 'bg-white/80 border-gray-200/60 text-gray-700'
              } animate-fade-in`}
            >
              <span className="text-xs font-medium tracking-wide">👋 Welcome</span>
            </div>

            {/* Main Heading */}
            <h1
              className={`text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight tracking-tight ${
                theme === 'dark' ? 'text-white' : 'text-heading'
              } animate-slide-up`}
            >
              <span className="block">{personalInfo.name.split(' ')[0]}</span>
              <span
                className={`block gradient-text bg-gradient-to-r ${
                  theme === 'dark'
                    ? 'from-accent-400 to-accent-200'
                    : 'from-accent to-accent-600'
                }`}
              >
                {personalInfo.name.split(' ')[1]}
              </span>
            </h1>

            {/* Typed Text */}
            <div className="flex items-center gap-2 text-lg md:text-xl">
              <span className={theme === 'dark' ? 'text-white/90' : 'text-gray-700'}>
                I'm a
              </span>
              <span
                ref={typedRef}
                className="typed font-semibold text-accent dark:text-accent-400"
                data-typed-items={personalInfo.typedItems.join(',')}
              >
                {personalInfo.typedItems[0]}
              </span>
              <span
                className="typed-cursor typed-cursor--blink text-xl text-accent dark:text-accent-400"
                aria-hidden="true"
              >
                |
              </span>
            </div>

            {/* Description */}
            <p
              className={`text-base md:text-body-lg leading-relaxed ${
                theme === 'dark' ? 'text-white/90' : 'text-gray-600'
              } max-w-md`}
            >
              I build full-stack web apps for clients and ship my own products on the side.
              React, NestJS, PostgreSQL — whatever the problem needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#portfolio"
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-accent-500 text-white hover:bg-accent-400 shadow-lg shadow-accent/30'
                    : 'bg-accent text-white hover:bg-accent-700 shadow-lg shadow-accent/20'
                }`}
              >
                View My Work
              </a>
              <a
                href="/assets/files/Andy.pdf"
                download
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-md border ${
                  theme === 'dark'
                    ? 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                    : 'bg-white/80 border-gray-200/60 text-gray-700 hover:bg-white'
                }`}
              >
                <i className="bi bi-download text-base leading-none" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div
            className={`relative animate-slide-right ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000 max-w-sm mx-auto lg:max-w-md`}
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div
              className={`relative rounded-2xl p-2 backdrop-blur-md border ${
                theme === 'dark'
                  ? 'bg-white/10 border-white/20 shadow-2xl'
                  : 'bg-white/60 border-gray-200/60 shadow-xl'
              }`}
            >
              <div
                className={`absolute -inset-1 rounded-2xl ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-accent/30 to-accent-500/20'
                    : 'bg-gradient-to-br from-accent/20 to-accent-400/10'
                } blur opacity-60`}
              ></div>
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="relative w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className={`flex flex-col items-center gap-1 ${
            theme === 'dark' ? 'text-white/60' : 'text-gray-600'
          } hover:text-accent transition-colors`}
        >
          <span className="text-xs font-medium">Scroll</span>
          <i className="bi bi-chevron-down text-lg"></i>
        </a>
      </div>
    </section>
  )
}

export default Hero
