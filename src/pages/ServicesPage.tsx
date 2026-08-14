import { NavLink } from 'react-router-dom'

import { useLanguage } from '../hooks/useLanguage'

import heroImage from '../assets/images/services/CLC-Main.png'

import undergroundImage from '../assets/images/services/CLC-Fibra.png'
import aerialImage from '../assets/images/services/CLC-Aerial.png'
import drillingImage from '../assets/images/services/CLC-Drilling.png'
import fiberImage from '../assets/images/services/CLC-FibraOptica.png'
import splicingImage from '../assets/images/services/CLC-Empalme.png'
import networkImage from '../assets/images/services/CLC-RED.png'

import '../styles/pages/services.css'


function ServicesPage() {
  const { t } = useLanguage()

  const page = t.servicesPage

  const services = [
    {
      number: '01',
      title: page.items.underground.title,
      description: page.items.underground.description,
      image: undergroundImage,
    },
    {
      number: '02',
      title: page.items.aerial.title,
      description: page.items.aerial.description,
      image: aerialImage,
    },
    {
      number: '03',
      title: page.items.drilling.title,
      description: page.items.drilling.description,
      image: drillingImage,
    },
    {
      number: '04',
      title: page.items.fiber.title,
      description: page.items.fiber.description,
      image: fiberImage,
    },
    {
      number: '05',
      title: page.items.splicing.title,
      description: page.items.splicing.description,
      image: splicingImage,
    },
    {
      number: '06',
      title: page.items.network.title,
      description: page.items.network.description,
      image: networkImage,
    },
  ]

  const sectors = [
    {
      title: page.sectors.items.residential,
      icon: (
        <path
          d="M3 11.5 12 4l9 7.5M5.5 10v9h13v-9M9 19v-5h6v5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    {
      title: page.sectors.items.commercial,
      icon: (
        <>
          <path
            d="M4 8h16v11H4zM8 8V5h8v3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />

          <path
            d="M4 12h16M10 12v2h4v-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </>
      ),
    },
    {
      title: page.sectors.items.industrial,
      icon: (
        <path
          d="M4 20V9l5 3V8l5 4V6l6 4v10H4ZM8 16h2M14 16h2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    {
      title: page.sectors.items.subdivisions,
      icon: (
        <>
          <path
            d="m3 12 5-4 5 4M5 11v7h6v-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="m12 9 4-3 5 4M15 9v9h5v-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ),
    },
    {
      title: page.sectors.items.institutions,
      icon: (
        <path
          d="M3 9h18L12 4 3 9ZM5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    {
      title: page.sectors.items.providers,
      icon: (
        <>
          <path
            d="M5 12a10 10 0 0 1 14 0M8 15a6 6 0 0 1 8 0M11 18a2 2 0 0 1 2 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          <circle
            cx="12"
            cy="20"
            r="1"
            fill="currentColor"
          />
        </>
      ),
    },
  ]

  return (
    <main className="services-page">

      {/* =====================================================
          HERO
          ===================================================== */}
      <section className="services-page-hero">

        <div
          className="services-page-hero-background"
          aria-hidden="true"
        >
          <img
            src={heroImage}
            alt=""
          />

          <div className="services-page-hero-overlay" />
        </div>

        <div className="services-page-hero-container">

          <div className="services-page-hero-content">

            <span className="services-page-eyebrow">
              {page.hero.eyebrow}
            </span>

            <h1>
              {page.hero.title}

              <span>
                {' '}
                {page.hero.titleHighlight}
              </span>
            </h1>

            <p>
              {page.hero.description}
            </p>

            <div className="services-page-hero-actions">

              <NavLink
                to="/contact"
                className="services-page-primary-button"
              >
                {page.hero.primaryButton}

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
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

              <a
                href="#all-services"
                className="services-page-secondary-button"
              >
                {page.hero.secondaryButton}
              </a>

            </div>
          </div>

          <div className="services-hero-info-card">

            <span className="services-hero-info-label">
              {page.hero.cardLabel}
            </span>

            <strong>
              {page.hero.cardTitle}
            </strong>

            <p>
              {page.hero.cardDescription}
            </p>

            <div className="services-hero-info-status">
              <span />

              {page.hero.cardStatus}
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          ALL SERVICES
          ===================================================== */}
      <section
        id="all-services"
        className="all-services-section"
      >
        <div className="all-services-container">

          <div className="all-services-header">

            <div>

              <span className="section-eyebrow">
                {page.services.eyebrow}
              </span>

              <h2>
                {page.services.title}

                <span>
                  {' '}
                  {page.services.titleHighlight}
                </span>
              </h2>

            </div>

            <p>
              {page.services.description}
            </p>

          </div>

          <div className="all-services-grid">

            {services.map((service) => (
              <article
                key={service.number}
                className="full-service-card"
              >
                <div className="full-service-image-wrapper">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="full-service-image"
                    loading="lazy"
                  />

                  <span className="full-service-number">
                    {service.number}
                  </span>

                </div>

                <div className="full-service-content">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                  <NavLink
                    to="/contact"
                    className="full-service-link"
                  >
                    {page.services.learnMore}

                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
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
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          SECTORS
          ===================================================== */}
      <section className="service-sectors-section">

        <div className="service-sectors-container">

          <div className="service-sectors-header">

            <div>

              <span className="section-eyebrow">
                {page.sectors.eyebrow}
              </span>

              <h2>
                {page.sectors.title}

                <span>
                  {' '}
                  {page.sectors.titleHighlight}
                </span>
              </h2>

            </div>

            <p>
              {page.sectors.description}
            </p>

          </div>

          <div className="service-sectors-grid">

            {sectors.map((sector) => (
              <article
                key={sector.title}
                className="service-sector-card"
              >
                <div className="service-sector-icon">

                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {sector.icon}
                  </svg>

                </div>

                <strong>
                  {sector.title}
                </strong>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
          ===================================================== */}
      <section className="services-cta-section">

        <div className="services-cta-container">

          <div className="services-cta-background">

            <img
              src={aerialImage}
              alt=""
              loading="lazy"
            />

            <div className="services-cta-overlay" />

          </div>

          <div className="services-cta-content">

            <span>
              {page.cta.eyebrow}
            </span>

            <h2>
              {page.cta.title}
            </h2>

            <p>
              {page.cta.description}
            </p>

            <NavLink
              to="/contact"
              className="services-cta-button"
            >
              {page.cta.button}

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
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

        </div>
      </section>

    </main>
  )
}

export default ServicesPage