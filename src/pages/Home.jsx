import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Resume from '../components/Resume/Resume'
import Portfolio from '../components/Portfolio/Portfolio'
import Services from '../components/Services/Services'
import Contact from '../components/Contact/Contact'
import ScrollTop from '../components/ScrollTop/ScrollTop'

function Home() {
  const location = useLocation()

  // When navigating from a subpage with a hash (e.g. /#portfolio), scroll to that section
  useEffect(() => {
    const hash = location.hash?.slice(1)
    if (hash) {
      const el = document.getElementById(hash)
      if (el) {
        const timeout = setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
        return () => clearTimeout(timeout)
      }
    }
  }, [location.pathname, location.hash])

  useEffect(() => {
    // Initialize AOS
    import('aos').then((AOS) => {
      AOS.default.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
      })
    })

    // Remove preloader (works for both initial load and client-side navigation to Home)
    const preloader = document.querySelector('#preloader')
    if (preloader) {
      const removePreloader = () => preloader.remove()
      // On client-side navigation, load never fires again — remove after a short delay
      const timeout = setTimeout(removePreloader, 150)
      window.addEventListener('load', () => {
        clearTimeout(timeout)
        removePreloader()
      })
      return () => clearTimeout(timeout)
    }
  }, [])

  return (
    <div className="index-page">
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <ScrollTop />
      <div id="preloader"></div>
    </div>
  )
}

export default Home

