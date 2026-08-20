import { NavLink } from 'react-router-dom'

import { useLanguage } from '../../hooks/useLanguage'

import '../../styles/home/home-cta.css'

function HomeCta() {
  const { t } = useLanguage()

  const cta = t.home.cta

  return (
    <section className="home-cta-section">

      {/* ===================================================
          BACKGROUND
          =================================================== */}
      <div
        className="home-cta-background-glow home-cta-background-glow-one"
        aria-hidden="true"
      />

      <div
        className="home-cta-background-glow home-cta-background-glow-two"
        aria-hidden="true"
      />

      <div className="home-cta-container">

        {/* =================================================
            CONTENT
            ================================================= */}
        <div className="home-cta-content">

          <span className="home-cta-eyebrow">
            <i
              className="bi bi-diagram-3"
              aria-hidden="true"
            />

            {cta.eyebrow}
          </span>

          <h2 className="home-cta-title">
            {cta.title}

            <span>
              {' '}
              {cta.titleHighlight}
            </span>
          </h2>

          <p className="home-cta-description">
            {cta.description}
          </p>

          {/* =================================================
              ACTIONS
              ================================================= */}
          <div className="home-cta-actions">

            <NavLink
              to="/contact"
              className="home-cta-primary"
            >
              <span>
                {cta.primaryButton}
              </span>

              <i
                className="bi bi-arrow-right"
                aria-hidden="true"
              />
            </NavLink>

            <NavLink
              to="/services"
              className="home-cta-secondary"
            >
              <i
                className="bi bi-grid"
                aria-hidden="true"
              />

              <span>
                {cta.secondaryButton}
              </span>
            </NavLink>

          </div>

          {/* =================================================
              TRUST
              ================================================= */}
          <div className="home-cta-trust">

            <div className="home-cta-trust-item">
              <i
                className="bi bi-shield-check"
                aria-hidden="true"
              />

              <span>
                {cta.trustSafety}
              </span>
            </div>

            <div className="home-cta-trust-item">
              <i
                className="bi bi-tools"
                aria-hidden="true"
              />

              <span>
                {cta.trustEquipment}
              </span>
            </div>

            <div className="home-cta-trust-item">
              <i
                className="bi bi-person-check"
                aria-hidden="true"
              />

              <span>
                {cta.trustProfessional}
              </span>
            </div>

          </div>

        </div>

        {/* =================================================
            DECORATION
            ================================================= */}
        <div
          className="home-cta-decoration"
          aria-hidden="true"
        >
          <div className="home-cta-decoration-ring home-cta-decoration-ring-one" />

          <div className="home-cta-decoration-ring home-cta-decoration-ring-two" />

          <div className="home-cta-network">

            <div className="home-cta-network-line home-cta-network-line-one" />

            <div className="home-cta-network-line home-cta-network-line-two" />

            <span className="home-cta-network-node home-cta-network-node-one">
              <i className="bi bi-router" />
            </span>

            <span className="home-cta-network-node home-cta-network-node-two">
              <i className="bi bi-broadcast" />
            </span>

            <span className="home-cta-network-node home-cta-network-node-three">
              <i className="bi bi-diagram-3" />
            </span>

          </div>
        </div>

      </div>

    </section>
  )
}

export default HomeCta