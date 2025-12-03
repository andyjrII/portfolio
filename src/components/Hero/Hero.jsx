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
      className={`hero section relative min-h-screen flex items-center overflow-hidden ${
        theme === 'dark' ? 'bg-dark-bg' : 'bg-gradient-to-br from-gray-50 to-gray-100'
      }`}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/assets/img/hero-bg.jpg"
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            theme === 'dark' ? 'opacity-20' : 'opacity-30'
          }`}
        />
        <div
          className={`absolute inset-0 ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-dark-bg/80 via-dark-bg/60 to-dark-bg/80'
              : 'bg-gradient-to-br from-white/30 via-white/20 to-white/30'
          }`}
        ></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl opacity-20 animate-pulse-slow ${
            theme === 'dark' ? 'bg-accent' : 'bg-accent/30'
          }`}
        ></div>
        <div
          className={`absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse-slow ${
            theme === 'dark' ? 'bg-accent' : 'bg-accent/30'
          }`}
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            className={`space-y-6 animate-slide-left ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000`}
            data-aos="fade-right"
            data-aos-delay="100"
          >
            {/* Greeting Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border ${
                theme === 'dark'
                  ? 'bg-white/10 border-white/20 text-white/90'
                  : 'bg-white/80 border-gray-200/50 text-gray-700'
              } animate-fade-in`}
            >
              <span className="text-sm font-medium">👋 Welcome</span>
            </div>

            {/* Main Heading */}
            <h1
              className={`text-6xl lg:text-7xl font-bold leading-tight ${
                theme === 'dark' ? 'text-white' : 'text-heading'
              } animate-slide-up`}
            >
              <span className="block">{personalInfo.name.split(' ')[0]}</span>
              <span
                className={`block bg-gradient-to-r ${
                  theme === 'dark'
                    ? 'from-accent to-blue-400'
                    : 'from-accent to-blue-600'
                } bg-clip-text text-transparent`}
              >
                {personalInfo.name.split(' ')[1]}
              </span>
            </h1>

            {/* Typed Text */}
            <div className="flex items-center gap-2 text-2xl lg:text-3xl">
              <span className={theme === 'dark' ? 'text-white/90' : 'text-gray-700'}>
                I'm a
              </span>
              <span
                ref={typedRef}
                className={`typed font-bold ${
                  theme === 'dark' ? 'text-accent' : 'text-accent'
                }`}
                data-typed-items={personalInfo.typedItems.join(',')}
              >
                {personalInfo.typedItems[0]}
              </span>
              <span
                className={`typed-cursor typed-cursor--blink text-3xl ${
                  theme === 'dark' ? 'text-accent' : 'text-accent'
                }`}
                aria-hidden="true"
              >
                |
              </span>
            </div>

            {/* Description */}
            <p
              className={`text-lg lg:text-xl leading-relaxed ${
                theme === 'dark' ? 'text-white/80' : 'text-gray-600'
              } max-w-lg`}
            >
              Passionate full-stack developer crafting exceptional digital experiences
              with modern technologies and creative solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#portfolio"
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/30'
                    : 'bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20'
                }`}
              >
                View My Work
              </a>
              <a
                href="#contact"
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-md border ${
                  theme === 'dark'
                    ? 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                    : 'bg-white/80 border-gray-200/50 text-gray-700 hover:bg-white'
                }`}
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div
            className={`relative animate-slide-right ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000`}
            data-aos="fade-left"
            data-aos-delay="200"
          >
            {/* Glassmorphism Frame */}
            <div
              className={`relative rounded-2xl p-2 backdrop-blur-md border ${
                theme === 'dark'
                  ? 'bg-white/10 border-white/20 shadow-2xl'
                  : 'bg-white/60 border-gray-200/50 shadow-2xl'
              }`}
            >
              <div
                className={`absolute -inset-1 rounded-2xl ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-accent/30 to-blue-500/20'
                    : 'bg-gradient-to-br from-accent/20 to-blue-400/10'
                } blur opacity-75`}
              ></div>
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="relative w-full h-auto rounded-xl object-cover"
              />
            </div>

            {/* Floating Elements */}
            <div
              className={`absolute -top-4 -right-4 w-20 h-20 rounded-full backdrop-blur-md border flex items-center justify-center ${
                theme === 'dark'
                  ? 'bg-accent/20 border-accent/30'
                  : 'bg-accent/10 border-accent/20'
              } animate-bounce-slow`}
            >
              <i className="bi bi-code-slash text-3xl text-accent"></i>
            </div>
            <div
              className={`absolute -bottom-4 -left-4 w-16 h-16 rounded-full backdrop-blur-md border flex items-center justify-center ${
                theme === 'dark'
                  ? 'bg-accent/20 border-accent/30'
                  : 'bg-accent/10 border-accent/20'
              } animate-bounce-slow`}
              style={{ animationDelay: '0.5s' }}
            >
              <i className="bi bi-lightning-charge text-2xl text-accent"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className={`flex flex-col items-center gap-2 ${
            theme === 'dark' ? 'text-white/60' : 'text-gray-600'
          } hover:text-accent transition-colors`}
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <i className="bi bi-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  )
}

export default Hero

