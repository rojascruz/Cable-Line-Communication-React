import { NavLink } from 'react-router-dom'

import { useLanguage } from '../hooks/useLanguage'
import { siteConfig } from '../config/siteConfig'

import '../styles/pages/not-found.css'

function NotFoundPage() {
  const { t } = useLanguage()

  const page = t.notFoundPage

  return (
    <main className="not-found-page">

      {/* =====================================================
          BACKGROUND
          ===================================================== */}
      <div
        className="not-found-glow not-found-glow-one"
        aria-hidden="true"
      />

      <div
        className="not-found-glow not-found-glow-two"
        aria-hidden="true"
      />

      <div
        className="not-found-grid"
        aria-hidden="true"
      />

      {/* =====================================================
          CONTENT
          ===================================================== */}
      <div className="not-found-container">

        <div
          className="not-found-code"
          aria-hidden="true"
        >
          404
        </div>

        <div className="not-found-icon">
          <i
            className="bi bi-router"
            aria-hidden="true"
          />
        </div>

        <span className="not-found-eyebrow">
          <i
            className="bi bi-exclamation-circle"
            aria-hidden="true"
          />

          {page.eyebrow}
        </span>

        <h1 className="not-found-title">
          {page.title}

          <span>
            {' '}
            {page.titleHighlight}
          </span>
        </h1>

        <p className="not-found-description">
          {page.description}
        </p>

        {/* ===================================================
            ACTIONS
            =================================================== */}
        <div className="not-found-actions">

          <NavLink
            to={siteConfig.navigation.home}
            className="not-found-primary-button"
          >
            <i
              className="bi bi-arrow-left"
              aria-hidden="true"
            />

            <span>
              {page.primaryButton}
            </span>
          </NavLink>

          <NavLink
            to={siteConfig.navigation.services}
            className="not-found-secondary-button"
          >
            <i
              className="bi bi-grid"
              aria-hidden="true"
            />

            <span>
              {page.secondaryButton}
            </span>
          </NavLink>

        </div>

        {/* ===================================================
            SUPPORT
            =================================================== */}
        <div className="not-found-help">

          <i
            className="bi bi-headset"
            aria-hidden="true"
          />

          <span>
            {page.helpText}
          </span>

          <NavLink
            to={siteConfig.navigation.contact}
          >
            {page.contactLink}
          </NavLink>

        </div>

      </div>

    </main>
  )
}

export default NotFoundPage