import { useState, useEffect } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <a
      href="#"
      id="scroll-top"
      onClick={scrollToTop}
      className={`scroll-top flex items-center justify-center fixed bottom-8 right-8 w-14 h-14 rounded-full z-[999] transition-all duration-300 transform hover:scale-110 backdrop-blur-md border shadow-lg ${
        isVisible ? 'active opacity-100' : 'opacity-0 pointer-events-none'
      } ${
        theme === 'dark'
          ? 'bg-accent text-white hover:bg-accent/90 border-accent/30 shadow-accent/30'
          : 'bg-accent text-white hover:bg-accent/90 border-accent/20 shadow-accent/20'
      }`}
    >
      <i className="bi bi-arrow-up-short text-2xl"></i>
    </a>
  )
}

export default ScrollTop

