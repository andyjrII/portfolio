import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import { socialLinks, navItems, personalInfo } from '../../utils/portfolioData'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // When on a subpage (e.g. portfolio detail), highlight the correct nav item from the route
  useEffect(() => {
    if (!isHomePage) {
      if (location.pathname.startsWith('/portfolio')) {
        setActiveSection('portfolio')
      } else {
        setActiveSection('hero')
      }
    }
  }, [location.pathname, isHomePage])

  useEffect(() => {
    if (!isHomePage) return
    // Scrollspy: only run on home page
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
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

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
        className={`header flex flex-col fixed top-0 left-0 bottom-0 w-[260px] p-2 transition-all duration-500 ease-in-out overflow-y-auto z-[997] ${
          isMenuOpen ? 'header-show' : ''
        } ${
          theme === 'dark'
            ? 'bg-dark-bg/95 backdrop-blur-md border-r border-white/10'
            : 'bg-white/80 backdrop-blur-md border-r border-gray-200/50 shadow-lg'
        }`}
      >
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-accent/20 text-accent hover:bg-accent/30'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          } backdrop-blur-sm border ${
            theme === 'dark' ? 'border-accent/30' : 'border-gray-300'
          }`}
          aria-label="Toggle theme"
        >
          <i className={`bi ${theme === 'dark' ? 'bi-sun' : 'bi-moon'}`}></i>
        </button>

        {/* Profile Image */}
        <div className="profile-img mt-6 mb-3">
          <div
            className={`relative w-[96px] h-[96px] mx-auto rounded-full p-0.5 ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-accent-400/40 to-accent/10'
                : 'bg-gradient-to-br from-accent/30 to-gray-200/50'
            }`}
          >
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="w-full h-full rounded-full object-cover border-2 border-transparent"
              style={{ filter: 'none' }}
            />
          </div>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="logo flex items-center justify-center mb-4 group"
          onClick={() => isHomePage && handleNavClick('#hero')}
        >
          <h1
            className={`sitename text-base font-bold m-0 transition-all duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-heading'
            } group-hover:text-accent dark:group-hover:text-accent-400`}
          >
            {personalInfo.name}
          </h1>
        </Link>

        {/* Social Links */}
        <div className="social-links flex items-center justify-center gap-2 mb-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.name} inline-flex items-center justify-center rounded-full w-9 h-9 transition-colors duration-300 ${
                theme === 'dark'
                  ? 'bg-white/10 text-white/80 hover:bg-accent/30 hover:text-accent-400 border border-white/10'
                  : 'bg-gray-100 text-gray-700 hover:bg-accent hover:text-white border border-gray-200/60'
              }`}
            >
              <i className={`bi ${social.icon} text-sm leading-none flex items-center justify-center`}></i>
            </a>
          ))}
        </div>

        {/* Navigation Menu */}
        <nav id="navmenu" className="navmenu mt-1">
          <ul className="list-none p-0 m-0 space-y-0.5">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1)
              const isActive = activeSection === sectionId
              const navLinkClass = `relative flex items-center pl-4 pr-3 py-3 rounded-md text-base font-medium transition-colors duration-200 group ${
                isActive
                  ? theme === 'dark'
                    ? 'bg-accent-500/25 text-accent-300'
                    : 'bg-accent/15 text-accent'
                  : theme === 'dark'
                  ? 'text-white/65 hover:text-white hover:bg-white/[0.04]'
                  : 'text-gray-600 hover:text-accent hover:bg-gray-50'
              }`
              const indicator = isActive ? (
                <span
                  className={`absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-r-full ${
                    theme === 'dark' ? 'bg-accent-400' : 'bg-accent'
                  }`}
                  aria-hidden="true"
                />
              ) : null
              const iconClass = `bi ${item.icon} navicon mr-2.5 text-xl ${
                isActive
                  ? theme === 'dark'
                    ? 'text-accent-300'
                    : 'text-accent'
                  : ''
              }`
              return (
                <li key={item.name}>
                  {isHomePage ? (
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                      className={navLinkClass}
                    >
                      {indicator}
                      <i className={iconClass}></i>
                      <span>{item.name}</span>
                    </a>
                  ) : (
                    <Link
                      to={{ pathname: '/', hash: sectionId }}
                      onClick={() => setIsMenuOpen(false)}
                      className={navLinkClass}
                    >
                      {indicator}
                      <i className={iconClass}></i>
                      <span>{item.name}</span>
                    </Link>
                  )}
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

