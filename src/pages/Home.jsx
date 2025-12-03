import { useEffect } from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Stats from '../components/Stats/Stats'
import Skills from '../components/Skills/Skills'
import Resume from '../components/Resume/Resume'
import Portfolio from '../components/Portfolio/Portfolio'
import Services from '../components/Services/Services'
import Contact from '../components/Contact/Contact'
import ScrollTop from '../components/ScrollTop/ScrollTop'

function Home() {
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

    // Remove preloader
    const preloader = document.querySelector('#preloader')
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove()
      })
    }
  }, [])

  return (
    <div className="index-page">
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Stats />
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

