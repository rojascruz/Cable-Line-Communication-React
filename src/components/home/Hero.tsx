import { NavLink } from 'react-router-dom'

import { useLanguage } from '../../hooks/useLanguage'

import heroImage from '../../assets/images/hero/CLC-Main.png'

import '../../styles/home/hero.css'

function Hero() {
  const { t } = useLanguage()

  const hero = t.home.hero

  return (
    <section className="hero-section">

      {/* ===================================================
          BACKGROUND
          =================================================== */}
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

      {/* ===================================================
          MAIN CONTENT
          =================================================== */}
      <div className="hero-container">

        {/* =================================================
            CONTENT
            ================================================= */}
        <div className="hero-content">

          <div className="hero-badge">
            <span className="hero-badge-icon">
              <i
                className="bi bi-broadcast-pin"
                aria-hidden="true"
              />
            </span>

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

              <i
                className="bi bi-arrow-right"
                aria-hidden="true"
              />
            </NavLink>

            <NavLink
              to="/services"
              className="hero-button hero-button-secondary"
            >
              <i
                className="bi bi-grid"
                aria-hidden="true"
              />

              <span>
                {hero.secondaryButton}
              </span>
            </NavLink>

          </div>

          {/* =================================================
              TRUST
              ================================================= */}
          <div className="hero-trust">

            <div className="hero-trust-item">

              <div className="hero-trust-icon">
                <i
                  className="bi bi-shield-check"
                  aria-hidden="true"
                />
              </div>

              <div className="hero-trust-copy">
                <strong>
                  {hero.safeWork}
                </strong>

                <span>
                  {hero.safeWorkDescription}
                </span>
              </div>

            </div>

            <div className="hero-trust-item">

              <div className="hero-trust-icon">
                <i
                  className="bi bi-lightning-charge"
                  aria-hidden="true"
                />
              </div>

              <div className="hero-trust-copy">
                <strong>
                  {hero.modernSolutions}
                </strong>

                <span>
                  {hero.modernSolutionsDescription}
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* =================================================
            VISUAL
            ================================================= */}
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
              fetchPriority="high"
            />

            {/* ===============================================
                TOP FLOATING CARD
                =============================================== */}
            <div className="hero-floating-card hero-floating-card-top">

              <div className="hero-floating-icon">
                <i
                  className="bi bi-graph-up-arrow"
                  aria-hidden="true"
                />
              </div>

              <div className="hero-floating-copy">
                <strong>
                  {hero.professionalService}
                </strong>

                <span>
                  {hero.reliableResults}
                </span>
              </div>

            </div>

            {/* ===============================================
                BOTTOM FLOATING CARD
                =============================================== */}
            <NavLink
              to="/contact"
              className="hero-floating-card hero-floating-card-bottom"
            >
              <span
                className="hero-status-dot"
                aria-hidden="true"
              />

              <div className="hero-floating-copy">
                <strong>
                  {hero.readyToConnect}
                </strong>

                <span>
                  {hero.contactUs}
                </span>
              </div>

              <i
                className="bi bi-arrow-up-right hero-floating-arrow"
                aria-hidden="true"
              />
            </NavLink>

          </div>

        </div>

      </div>

      {/* ===================================================
          SCROLL INDICATOR
          =================================================== */}
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