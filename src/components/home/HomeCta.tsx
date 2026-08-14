import { NavLink } from 'react-router-dom'
import { useLanguage } from '../../hooks/useLanguage'

import '../../styles/home/home-cta.css'

function HomeCta() {
  const { t } = useLanguage()

  const cta = t.home.cta

  return (
    <section className="home-cta-section">
      <div className="home-cta-container">

        <div className="home-cta-content">

          <span className="home-cta-eyebrow">
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

          <div className="home-cta-actions">
            <NavLink
              to="/contact"
              className="home-cta-primary"
            >
              <span>
                {cta.primaryButton}
              </span>

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NavLink>

            <NavLink
              to="/services"
              className="home-cta-secondary"
            >
              {cta.secondaryButton}
            </NavLink>
          </div>

        </div>

        <div
          className="home-cta-decoration"
          aria-hidden="true"
        >
          <div className="home-cta-circle home-cta-circle-one" />
          <div className="home-cta-circle home-cta-circle-two" />

          <svg
            className="home-cta-network"
            viewBox="0 0 400 300"
          >
            <path
              d="M25 205C85 140 130 225 190 160C250 95 300 165 375 75"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="6 9"
            />

            <circle cx="25" cy="205" r="6" />
            <circle cx="190" cy="160" r="6" />
            <circle cx="375" cy="75" r="6" />
          </svg>
        </div>

      </div>
    </section>
  )
}

export default HomeCta