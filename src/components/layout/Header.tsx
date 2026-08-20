import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LanguageSwitcher from './LanguageSwitcher'

import { useLanguage } from '../../hooks/useLanguage'
import { siteConfig } from '../../config/siteConfig'

import logo from '../../assets/images/logo/CLC-Logo.png'

import '../../styles/layout/header.css'

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
      path: siteConfig.navigation.home,
    },
    {
      label: t.navigation.about,
      path: siteConfig.navigation.about,
    },
    {
      label: t.navigation.services,
      path: siteConfig.navigation.services,
    },
    {
      label: t.navigation.contact,
      path: siteConfig.navigation.contact,
    },
  ]

  return (
    <header className="site-header">

      <div className="header-container">

        {/* =================================================
            BRAND
            ================================================= */}
        <NavLink
          to={siteConfig.navigation.home}
          className="header-brand"
          onClick={closeMenu}
          aria-label={t.accessibility.goHome}
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

        {/* =================================================
            NAVIGATION
            ================================================= */}
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
                end={
                  item.path ===
                  siteConfig.navigation.home
                }
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

          {/* ===============================================
              MOBILE CTA
              =============================================== */}
          <div className="mobile-navigation-action">

            <NavLink
              to={siteConfig.navigation.contact}
              className="header-contact-button"
              onClick={closeMenu}
            >
              <span>
                {t.navigation.requestService}
              </span>

              <i
                className="bi bi-arrow-right"
                aria-hidden="true"
              />
            </NavLink>

          </div>

        </nav>

        {/* =================================================
            ACTIONS
            ================================================= */}
        <div className="header-actions">

          <div className="desktop-language-switcher">
            <LanguageSwitcher />
          </div>

          <NavLink
            to={siteConfig.navigation.contact}
            className="header-contact-button"
          >
            <span>
              {t.navigation.requestService}
            </span>

            <i
              className="bi bi-arrow-right"
              aria-hidden="true"
            />
          </NavLink>

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

      {/* ===================================================
          BACKDROP
          =================================================== */}
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