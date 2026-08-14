import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LanguageSwitcher from './LanguageSwitcher'

import { useLanguage } from '../../hooks/useLanguage'

import logo from '../../assets/images/logo/CLC-Logo.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] =
    useState(false)

  const { t } = useLanguage()

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current)
  }

  const navigation = [
    {
      label: t.navigation.home,
      path: '/',
    },
    {
      label: t.navigation.about,
      path: '/about',
    },
    {
      label: t.navigation.services,
      path: '/services',
    },
    {
      label: t.navigation.contact,
      path: '/contact',
    },
  ]

  return (
    <header className="site-header">
      <div className="header-container">

        {/* ===================================================
            LOGO / BRAND
            =================================================== */}
        <NavLink
          to="/"
          className="header-brand"
          onClick={closeMenu}
          aria-label={
            t.accessibility.goHome
          }
        >
          <img
            src={logo}
            alt=""
            className="header-logo"
          />

          <div className="brand-text">
            <span className="brand-name">
              Cable Line
            </span>

            <span className="brand-subtitle">
              Communication
            </span>
          </div>
        </NavLink>

        {/* ===================================================
            NAVIGATION
            =================================================== */}
        <nav
          id="main-navigation"
          className={`main-navigation ${
            isMenuOpen ? 'is-open' : ''
          }`}
          aria-label={
            t.accessibility.mainNavigation
          }
        >
          <div className="navigation-links">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `navigation-link ${
                    isActive
                      ? 'is-active'
                      : ''
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* =================================================
              MOBILE ACTIONS
              ================================================= */}
          <div className="mobile-navigation-action">
            <div className="mobile-language-area">
              <span className="mobile-language-label">
                {t.language.label}
              </span>

              <LanguageSwitcher />
            </div>

            <NavLink
              to="/contact"
              className="header-contact-button"
              onClick={closeMenu}
            >
              <span>
                {
                  t.navigation
                    .requestService
                }
              </span>

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="button-icon"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NavLink>
          </div>
        </nav>

        {/* ===================================================
            HEADER ACTIONS
            =================================================== */}
        <div className="header-actions">

          {/* Visible language selector */}
          <div className="desktop-language-switcher">
            <LanguageSwitcher />
          </div>

          {/* Desktop CTA */}
          <NavLink
            to="/contact"
            className="header-contact-button"
          >
            <span>
              {
                t.navigation
                  .requestService
              }
            </span>

            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="button-icon"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`mobile-menu-button ${
              isMenuOpen
                ? 'is-active'
                : ''
            }`}
            onClick={toggleMenu}
            aria-label={
              isMenuOpen
                ? t.accessibility.closeMenu
                : t.accessibility.openMenu
            }
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </div>

      {/* =====================================================
          BACKDROP
          ===================================================== */}
      <button
        type="button"
        className={`navigation-backdrop ${
          isMenuOpen
            ? 'is-visible'
            : ''
        }`}
        onClick={closeMenu}
        aria-label={
          t.accessibility.closeMenu
        }
        tabIndex={
          isMenuOpen ? 0 : -1
        }
      />
    </header>
  )
}

export default Header