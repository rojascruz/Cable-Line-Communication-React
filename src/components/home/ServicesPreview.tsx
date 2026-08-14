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
      className: 'service-card-fiber',
    },
    {
      title: services.items.aerial.title,
      description: services.items.aerial.description,
      image: aerialImage,
      className: 'service-card-aerial',
    },
    {
      title: services.items.underground.title,
      description: services.items.underground.description,
      image: undergroundImage,
      className: 'service-card-underground',
    },
  ]

  return (
    <section className="services-preview-section">
      <div className="services-preview-glow" aria-hidden="true" />

      <div className="services-preview-container">

        <div className="services-preview-header">
          <div className="services-preview-copy">

            <span className="section-eyebrow">
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
              <span>{services.viewAll}</span>

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

        <div className="services-preview-grid">
          {items.map((service) => (
            <article
              key={service.title}
              className={`service-preview-card ${service.className}`}
            >
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

              
              </div>

              <div className="service-preview-content">

                <div className="service-preview-heading">
                  <h3>
                    {service.title}
                  </h3>

                  <NavLink
                    to="/services"
                    className="service-preview-arrow"
                    aria-label={service.title}
                  >
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

                <p>
                  {service.description}
                </p>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ServicesPreview