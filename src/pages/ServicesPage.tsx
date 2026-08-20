import { NavLink } from 'react-router-dom'

import { useLanguage } from '../hooks/useLanguage'
import { siteConfig } from '../config/siteConfig'

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
      title: page.items.underground.title,
      description: page.items.underground.description,
      image: undergroundImage,
      icon: 'bi-signpost-split',
      tag: page.items.underground.tag,
    },
    {
      title: page.items.aerial.title,
      description: page.items.aerial.description,
      image: aerialImage,
      icon: 'bi-broadcast-pin',
      tag: page.items.aerial.tag,
    },
    {
      title: page.items.drilling.title,
      description: page.items.drilling.description,
      image: drillingImage,
      icon: 'bi-tools',
      tag: page.items.drilling.tag,
    },
    {
      title: page.items.fiber.title,
      description: page.items.fiber.description,
      image: fiberImage,
      icon: 'bi-diagram-3',
      tag: page.items.fiber.tag,
    },
    {
      title: page.items.splicing.title,
      description: page.items.splicing.description,
      image: splicingImage,
      icon: 'bi-bezier2',
      tag: page.items.splicing.tag,
    },
    {
      title: page.items.network.title,
      description: page.items.network.description,
      image: networkImage,
      icon: 'bi-router',
      tag: page.items.network.tag,
    },
  ]

  const sectors = [
    {
      title: page.sectors.items.residential,
      icon: 'bi-houses',
    },
    {
      title: page.sectors.items.commercial,
      icon: 'bi-buildings',
    },
    {
      title: page.sectors.items.industrial,
      icon: 'bi-gear-wide-connected',
    },
    {
      title: page.sectors.items.subdivisions,
      icon: 'bi-signpost',
    },
    {
      title: page.sectors.items.institutions,
      icon: 'bi-bank',
    },
    {
      title: page.sectors.items.providers,
      icon: 'bi-broadcast',
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
            fetchPriority="high"
          />

          <div className="services-page-hero-overlay" />

          <div className="services-page-hero-grid" />
        </div>

        <div className="services-page-hero-container">

          <div className="services-page-hero-content">

            <span className="services-page-eyebrow">
              <i
                className="bi bi-diagram-3"
                aria-hidden="true"
              />

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
                to={siteConfig.navigation.contact}
                className="services-page-primary-button"
              >
                <span>
                  {page.hero.primaryButton}
                </span>

                <i
                  className="bi bi-arrow-right"
                  aria-hidden="true"
                />
              </NavLink>

              <a
                href="#all-services"
                className="services-page-secondary-button"
              >
                <i
                  className="bi bi-grid"
                  aria-hidden="true"
                />

                <span>
                  {page.hero.secondaryButton}
                </span>
              </a>

            </div>

            <div className="services-page-hero-trust">

              <div>
                <i
                  className="bi bi-shield-check"
                  aria-hidden="true"
                />

                <span>
                  {page.hero.trustSafety}
                </span>
              </div>

              <div>
                <i
                  className="bi bi-tools"
                  aria-hidden="true"
                />

                <span>
                  {page.hero.trustEquipment}
                </span>
              </div>

              <div>
                <i
                  className="bi bi-person-check"
                  aria-hidden="true"
                />

                <span>
                  {page.hero.trustExecution}
                </span>
              </div>

            </div>

          </div>

          {/* =================================================
              HERO INFO CARD
              ================================================= */}
          <div className="services-hero-info-card">

            <div className="services-hero-info-icon">
              <i
                className="bi bi-gear-wide-connected"
                aria-hidden="true"
              />
            </div>

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
                <i
                  className="bi bi-grid-1x2"
                  aria-hidden="true"
                />

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
                key={service.title}
                className="full-service-card"
              >

                <div className="full-service-image-wrapper">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="full-service-image"
                    loading="lazy"
                  />

                  <div
                    className="full-service-image-overlay"
                    aria-hidden="true"
                  />

                  <div className="full-service-icon">
                    <i
                      className={`bi ${service.icon}`}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="full-service-tag">
                    <span className="full-service-tag-dot" />

                    <span>
                      {service.tag}
                    </span>
                  </div>

                </div>

                <div className="full-service-content">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                  <NavLink
                    to={siteConfig.navigation.contact}
                    className="full-service-link"
                  >
                    <span>
                      {page.services.learnMore}
                    </span>

                    <i
                      className="bi bi-arrow-right"
                      aria-hidden="true"
                    />
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

        <div
          className="service-sectors-glow"
          aria-hidden="true"
        />

        <div className="service-sectors-container">

          <div className="service-sectors-header">

            <div>

              <span className="section-eyebrow service-sectors-eyebrow">
                <i
                  className="bi bi-buildings"
                  aria-hidden="true"
                />

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
                  <i
                    className={`bi ${sector.icon}`}
                    aria-hidden="true"
                  />
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

            <span className="services-cta-eyebrow">
              <i
                className="bi bi-diagram-3"
                aria-hidden="true"
              />

              {page.cta.eyebrow}
            </span>

            <h2>
              {page.cta.title}
            </h2>

            <p>
              {page.cta.description}
            </p>

            <NavLink
              to={siteConfig.navigation.contact}
              className="services-cta-button"
            >
              <span>
                {page.cta.button}
              </span>

              <i
                className="bi bi-arrow-right"
                aria-hidden="true"
              />
            </NavLink>

          </div>

        </div>
      </section>

    </main>
  )
}

export default ServicesPage