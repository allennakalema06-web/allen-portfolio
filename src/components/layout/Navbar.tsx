import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { useTheme } from '../../hooks/useTheme'
import ThemeToggle from '../ui/ThemeToggle'

const navigation = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Articles', to: '/articles' },
  { label: 'Journey', to: '/journey' },
  { label: 'Contact', to: '/contact' },
]

function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="navbar">
        <NavLink className="navbar__brand" to="/" onClick={closeMenu}>
          ALLEN<span>.</span>
        </NavLink>

        <nav className="navbar__nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? 'navbar__link navbar__link--active'
                  : 'navbar__link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__actions">
          <a
            className="navbar__github"
            href="https://github.com/allennakalema06-web"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <ThemeToggle theme={theme} onToggle={toggleTheme} />

          <a
            className="navbar__cv"
            href="/documents/Allen_Nakalema_CV.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View CV ↗
          </a>

          <button
            className={`menu-toggle ${isMenuOpen ? 'menu-toggle--open' : ''}`}
            type="button"
            aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-menu ${isMenuOpen ? 'mobile-menu--open' : ''}`}
      >
        <nav aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeMenu}
              className="mobile-menu__link"
            >
              <span>0{index + 1}</span>
              {item.label}
            </NavLink>
          ))}

          <a
            className="mobile-menu__link"
            href="/documents/Allen_Nakalema_CV.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            <span>06</span>
            View CV ↗
          </a>
        </nav>

        <div className="mobile-menu__footer">
          <a
            href="https://github.com/allennakalema06-web"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/allen-nakalema-99b8373aa/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a href="mailto:allennakalema06@gmail.com">
            Email ↗
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar