import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { socialLinks, navItems, personalInfo } from '../../utils/portfolioData'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    // Scrollspy functionality
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      <i
        className={`header-toggle xl:hidden bi ${isMenuOpen ? 'bi-x' : 'bi-list'} text-2xl cursor-pointer fixed top-4 right-4 z-[9999] w-10 h-10 flex items-center justify-center rounded-full bg-accent text-contrast transition-all duration-300 hover:bg-accent/90`}
        onClick={toggleMenu}
      ></i>
      <header
        id="header"
        className={`header dark-background flex flex-col fixed top-0 left-0 bottom-0 w-[300px] p-4 transition-all duration-300 ease-in-out overflow-y-auto z-[997] border-r border-default/10 ${
          isMenuOpen ? 'header-show' : ''
        }`}
      >

      <div className="profile-img">
        <img
          src={personalInfo.profileImage}
          alt={personalInfo.name}
          className="w-[120px] h-[120px] rounded-full mx-auto my-4 block border-8 border-default/85"
        />
      </div>

      <Link
        to="/"
        className="logo flex items-center justify-center mb-4"
        onClick={() => handleNavClick('#hero')}
      >
        <h1 className="sitename text-2xl font-bold m-0 text-heading">{personalInfo.name}</h1>
      </Link>

      <div className="social-links text-center mb-5">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${social.name} inline-flex items-center justify-center bg-default/10 text-default mx-0.5 rounded-full text-center w-10 h-10 transition-all duration-300 hover:text-contrast hover:bg-accent`}
          >
            <i className={`bi ${social.icon}`}></i>
          </a>
        ))}
      </div>

      <nav id="navmenu" className="navmenu">
        <ul className="list-none p-0 m-0">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1)
            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className={`flex items-center py-2 px-4 text-nav transition-all duration-300 ${
                    activeSection === sectionId ? 'active text-nav-hover' : ''
                  } hover:text-nav-hover`}
                >
                  <i className={`bi ${item.icon} navicon mr-2`}></i>
                  {item.name}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Header

