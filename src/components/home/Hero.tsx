import { NavLink } from 'react-router-dom'

import { useLanguage } from '../../hooks/useLanguage'

import heroImage from '../../assets/images/hero/CLC-Main.png'

import '../../styles/home/hero.css'

function Hero() {
  const { t } = useLanguage()

  const hero = t.home.hero

  return (
    <section className="hero-section">

      <div
        className="hero-glow hero-glow-left"
        aria-hidden="true"
      />

      <div
        className="hero-glow hero-glow-right"
        aria-hidden="true"
      />

      <div
        className="hero-grid-pattern"
        aria-hidden="true"
      />

      <div className="hero-container">

        {/* ===================================================
            CONTENT
            =================================================== */}
        <div className="hero-content">

          <div className="hero-badge">
            <span className="hero-badge-dot" />

            <span>
              {hero.badge}
            </span>
          </div>

          <h1 className="hero-title">
            {hero.title}

            <span className="hero-title-highlight">
              {' '}
              {hero.titleHighlight}
            </span>
          </h1>

          <p className="hero-description">
            {hero.description}
          </p>

          {/* =================================================
              ACTIONS
              ================================================= */}
          <div className="hero-actions">

            <NavLink
              to="/contact"
              className="hero-button hero-button-primary"
            >
              <span>
                {hero.primaryButton}
              </span>

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="hero-button-icon"
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

            <NavLink
              to="/services"
              className="hero-button hero-button-secondary"
            >
              {hero.secondaryButton}
            </NavLink>

          </div>

          {/* =================================================
              TRUST
              ================================================= */}
          <div className="hero-trust">

            <div className="hero-trust-item">

              <div className="hero-trust-icon">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="m9 12 2 2 4-4M12 3l7 3v5c0 4.6-2.9 8.1-7 10-4.1-1.9-7-5.4-7-10V6l7-3Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <strong>
                  {hero.safeWork}
                </strong>

                <span>
                  {
                    hero.safeWorkDescription
                  }
                </span>
              </div>

            </div>

            <div className="hero-trust-item">

              <div className="hero-trust-icon">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div>
                <strong>
                  {hero.modernSolutions}
                </strong>

                <span>
                  {
                    hero.modernSolutionsDescription
                  }
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* ===================================================
            IMAGE
            =================================================== */}
        <div className="hero-visual">

          <div className="hero-image-wrapper">

            <div
              className="hero-image-decoration"
              aria-hidden="true"
            />

            <img
              src={heroImage}
              alt="Cable Line Communication telecommunications infrastructure project"
              className="hero-image"
            />

            {/* Top Card */}
            <div className="hero-floating-card hero-floating-card-top">

              <div className="hero-floating-icon">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M4 17 10 11l4 4 6-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M16 8h4v4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <strong>
                  {
                    hero.professionalService
                  }
                </strong>

                <span>
                  {hero.reliableResults}
                </span>
              </div>

            </div>

            {/* Bottom Card */}
            <div className="hero-floating-card hero-floating-card-bottom">

              <span className="hero-status-dot" />

              <div>
                <strong>
                  {hero.readyToConnect}
                </strong>

                <span>
                  {hero.contactUs}
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>

      <div
        className="hero-scroll"
        aria-hidden="true"
      >
        <span />
      </div>

    </section>
  )
}

export default Hero