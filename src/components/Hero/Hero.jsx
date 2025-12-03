import { useEffect, useRef } from 'react'
import { personalInfo } from '../../utils/portfolioData'

function Hero() {
  const typedRef = useRef(null)

  useEffect(() => {
    if (typedRef.current) {
      import('typed.js').then((Typed) => {
        new Typed.default(typedRef.current, {
          strings: personalInfo.typedItems,
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
        })
      })
    }
  }, [])

  return (
    <section id="hero" className="hero section dark-background relative min-h-screen flex items-center">
      <img
        src="/assets/img/hero-bg.jpg"
        alt=""
        data-aos="fade-in"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="container mx-auto px-4 relative z-10" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-5xl font-bold text-heading mb-4">{personalInfo.name}</h2>
        <p className="text-xl text-default">
          I'm a{' '}
          <span
            ref={typedRef}
            className="typed text-accent font-semibold"
            data-typed-items={personalInfo.typedItems.join(',')}
          >
            {personalInfo.typedItems[0]}
          </span>
          <span className="typed-cursor typed-cursor--blink" aria-hidden="true">
            |
          </span>
        </p>
      </div>
    </section>
  )
}

export default Hero

