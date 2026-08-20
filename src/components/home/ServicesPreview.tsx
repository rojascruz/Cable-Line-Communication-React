import { NavLink } from 'react-router-dom'

import { useLanguage } from '../../hooks/useLanguage'

import fiberImage from '../../assets/images/services/CLC-FibraOptica.png'
import aerialImage from '../../assets/images/services/CLC-Aerial.png'
import undergroundImage from '../../assets/images/services/CLC-Drilling.png'

import '../../styles/home/services-preview.css'

function ServicesPreview() {
  const { t } = useLanguage()

  const services = t.home.services

  const items = [
    {
      title: services.items.fiber.title,
      description: services.items.fiber.description,
      image: fiberImage,
      icon: 'bi-diagram-3',
      tag: services.items.fiber.tag,
    },
    {
      title: services.items.aerial.title,
      description: services.items.aerial.description,
      image: aerialImage,
      icon: 'bi-broadcast-pin',
      tag: services.items.aerial.tag,
    },
    {
      title: services.items.underground.title,
      description: services.items.underground.description,
      image: undergroundImage,
      icon: 'bi-signpost-split',
      tag: services.items.underground.tag,
    },
  ]

  return (
    <section className="services-preview-section">

      {/* ===================================================
          BACKGROUND
          =================================================== */}
      <div
        className="services-preview-glow services-preview-glow-one"
        aria-hidden="true"
      />

      <div
        className="services-preview-glow services-preview-glow-two"
        aria-hidden="true"
      />

      <div className="services-preview-container">

        {/* =================================================
            HEADER
            ================================================= */}
        <div className="services-preview-header">

          <div className="services-preview-copy">

            <span className="section-eyebrow services-preview-eyebrow">
              <i
                className="bi bi-grid-1x2"
                aria-hidden="true"
              />

              {services.eyebrow}
            </span>

            <h2 className="services-preview-title">
              {services.title}

              <span className="services-preview-title-highlight">
                {' '}
                {services.titleHighlight}
              </span>
            </h2>

          </div>

          <div className="services-preview-intro">

            <p>
              {services.description}
            </p>

            <NavLink
              to="/services"
              className="services-view-all"
            >
              <span>
                {services.viewAll}
              </span>

              <i
                className="bi bi-arrow-right"
                aria-hidden="true"
              />
            </NavLink>

          </div>

        </div>

        {/* =================================================
            SERVICES
            ================================================= */}
        <div className="services-preview-grid">

          {items.map((service) => (
            <NavLink
              key={service.title}
              to="/services"
              className="service-preview-card"
            >

              {/* =============================================
                  IMAGE
                  ============================================= */}
              <div className="service-preview-image-wrapper">

                <img
                  src={service.image}
                  alt={service.title}
                  className="service-preview-image"
                  loading="lazy"
                />

                <div
                  className="service-preview-overlay"
                  aria-hidden="true"
                />

                <div className="service-preview-icon">
                  <i
                    className={`bi ${service.icon}`}
                    aria-hidden="true"
                  />
                </div>

                <div className="service-preview-tag">
                  <span className="service-preview-tag-dot" />

                  <span>
                    {service.tag}
                  </span>
                </div>

              </div>

              {/* =============================================
                  CONTENT
                  ============================================= */}
              <div className="service-preview-content">

                <div className="service-preview-heading">

                  <h3>
                    {service.title}
                  </h3>

                  <span className="service-preview-arrow">
                    <i
                      className="bi bi-arrow-up-right"
                      aria-hidden="true"
                    />
                  </span>

                </div>

                <p>
                  {service.description}
                </p>

                <span className="service-preview-link">
                  {services.learnMore}

                  <i
                    className="bi bi-arrow-right"
                    aria-hidden="true"
                  />
                </span>

              </div>

            </NavLink>
          ))}

        </div>

      </div>

    </section>
  )
}

export default ServicesPreview