import { useEffect, useState } from 'react';
import logo from "./LOGO.png";

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    return savedTheme || 'light'
  })

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20)

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        setActiveSection('contact')
        return
      }

      const currentSection = navigation.reduce((active, item) => {
        const section = document.getElementById(item.href.slice(1))
        return section && section.offsetTop <= window.scrollY + 120 ? item.href.slice(1) : active
      }, 'home')

      setActiveSection(currentSection)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    document.body.classList.toggle('menu-is-open', isOpen)
    return () => document.body.classList.remove('menu-is-open')
  }, [isOpen])

  return (
    <header className={`site-header ${hasScrolled ? 'site-header--scrolled' : ''}`}>
      <nav className="site-nav container" aria-label="Primary navigation">
        <img src={logo} alt="" />
        <a className="brand" href="#home" onClick={() => setIsOpen(false)}>
          AJAY KUMAR
        </a>

        <div className={`nav-links ${isOpen ? 'nav-links--open' : ''}`} id="primary-menu">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={activeSection === item.href.slice(1) ? 'page' : undefined}
              onClick={() => {
                setActiveSection(item.href.slice(1))
                setIsOpen(false)
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            type="button"
            aria-pressed={theme === 'dark'}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            onClick={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <button
            className={`menu-toggle ${isOpen ? 'menu-toggle--open' : ''}`}
            type="button"
            aria-expanded={isOpen}
            aria-controls="primary-menu"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
