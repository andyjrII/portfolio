import { useState, useEffect } from 'react'

function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false)

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
      className={`scroll-top flex items-center justify-center fixed bottom-8 right-8 w-12 h-12 bg-accent text-contrast rounded-full z-[999] transition-all duration-300 ${
        isVisible ? 'active opacity-100' : 'opacity-0 pointer-events-none'
      } hover:bg-accent/80`}
    >
      <i className="bi bi-arrow-up-short text-xl"></i>
    </a>
  )
}

export default ScrollTop

