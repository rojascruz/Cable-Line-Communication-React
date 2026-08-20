import { NavLink } from 'react-router-dom'

import { useLanguage } from '../hooks/useLanguage'
import { siteConfig } from '../config/siteConfig'

import heroImage from '../assets/images/about/CLC-Main.png'
import aerialImage from '../assets/images/about/CLC-Aerial.png'
import fiberImage from '../assets/images/about/CLC-FibraOptica.png'

import '../styles/pages/about.css'

function AboutPage() {
  const { t } = useLanguage()

  const page = t.aboutPage

  const values = [
    {
      title: page.values.items.safety.title,
      description: page.values.items.safety.description,
      icon: 'bi-shield-check',
    },
    {
      title: page.values.items.quality.title,
      description: page.values.items.quality.description,
      icon: 'bi-patch-check',
    },
    {
      title: page.values.items.commitment.title,
      description: page.values.items.commitment.description,
      icon: 'bi-people',
    },
    {
      title: page.values.items.reliability.title,
      description: page.values.items.reliability.description,
      icon: 'bi-award',
    },
  ]

  return (
    <main className="about-page">

      {/* =====================================================
          HERO
          ===================================================== */}
      <section className="about-hero">

        <div className="about-hero-background">
          <img
            src={heroImage}
            alt="Cable Line Communication field operations"
            fetchPriority="high"
          />

          <div
            className="about-hero-overlay"
            aria-hidden="true"
          />

          <div
            className="about-hero-grid-pattern"
            aria-hidden="true"
          />
        </div>

        <div className="about-hero-container">

          <div className="about-hero-content">

            <span className="about-hero-eyebrow">
              <i
                className="bi bi-buildings"
                aria-hidden="true"
              />

              {page.hero.eyebrow}
            </span>

            <h1 className="about-hero-title">
              {page.hero.title}

              <span>
                {' '}
                {page.hero.titleHighlight}
              </span>
            </h1>

            <p className="about-hero-description">
              {page.hero.description}
            </p>

            <div className="about-hero-actions">

              <NavLink
                to={siteConfig.navigation.contact}
                className="about-hero-button"
              >
                <span>
                  {page.hero.button}
                </span>

                <i
                  className="bi bi-arrow-right"
                  aria-hidden="true"
                />
              </NavLink>

              <NavLink
                to={siteConfig.navigation.services}
                className="about-hero-services-link"
              >
                <i
                  className="bi bi-grid"
                  aria-hidden="true"
                />

                <span>
                  {page.hero.servicesButton}
                </span>
              </NavLink>

            </div>

            <div className="about-hero-trust">

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
                  className="bi bi-diagram-3"
                  aria-hidden="true"
                />

                <span>
                  {page.hero.trustInfrastructure}
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          WHO WE ARE
          ===================================================== */}
      <section className="about-story-section">

        <div className="about-story-container">

          {/* =================================================
              IMAGES
              ================================================= */}
          <div className="about-story-images">

            <div className="about-story-image about-story-image-main">
              <img
                src={aerialImage}
                alt="Cable Line Communication aerial construction"
                loading="lazy"
              />
            </div>

            <div className="about-story-image about-story-image-secondary">
              <img
                src={fiberImage}
                alt="Cable Line Communication fiber optic operations"
                loading="lazy"
              />
            </div>

            <div className="about-story-badge">
              <span className="about-story-badge-icon">
                <i
                  className="bi bi-gear-wide-connected"
                  aria-hidden="true"
                />
              </span>

              <div>
                <strong>
                  {page.story.badgeTitle}
                </strong>

                <span>
                  {page.story.badgeDescription}
                </span>
              </div>
            </div>

          </div>

          {/* =================================================
              CONTENT
              ================================================= */}
          <div className="about-story-content">

            <span className="section-eyebrow">
              <i
                className="bi bi-building"
                aria-hidden="true"
              />

              {page.story.eyebrow}
            </span>

            <h2 className="about-section-title">
              {page.story.title}

              <span>
                {' '}
                {page.story.titleHighlight}
              </span>
            </h2>

            <p>
              {page.story.paragraphOne}
            </p>

            <p>
              {page.story.paragraphTwo}
            </p>

            <div className="about-story-highlight">

              <span className="about-story-highlight-icon">
                <i
                  className="bi bi-quote"
                  aria-hidden="true"
                />
              </span>

              <p>
                {page.story.highlight}
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          MISSION / VISION
          ===================================================== */}
      <section className="about-purpose-section">

        <div className="about-purpose-container">

          <article className="about-purpose-card">

            <div className="about-purpose-icon">
              <i
                className="bi bi-compass"
                aria-hidden="true"
              />
            </div>

            <span className="about-purpose-label">
              {page.purpose.mission.label}
            </span>

            <h2>
              {page.purpose.mission.title}
            </h2>

            <p>
              {page.purpose.mission.description}
            </p>

          </article>

          <article className="about-purpose-card about-purpose-card-accent">

            <div className="about-purpose-icon">
              <i
                className="bi bi-eye"
                aria-hidden="true"
              />
            </div>

            <span className="about-purpose-label">
              {page.purpose.vision.label}
            </span>

            <h2>
              {page.purpose.vision.title}
            </h2>

            <p>
              {page.purpose.vision.description}
            </p>

          </article>

        </div>

      </section>

      {/* =====================================================
          VALUES
          ===================================================== */}
      <section className="about-values-section">

        <div className="about-values-container">

          <div className="about-values-header">

            <div>

              <span className="section-eyebrow">
                <i
                  className="bi bi-stars"
                  aria-hidden="true"
                />

                {page.values.eyebrow}
              </span>

              <h2 className="about-section-title">
                {page.values.title}

                <span>
                  {' '}
                  {page.values.titleHighlight}
                </span>
              </h2>

            </div>

            <p>
              {page.values.description}
            </p>

          </div>

          <div className="about-values-grid">

            {values.map((value) => (
              <article
                key={value.title}
                className="about-value-card"
              >

                <div className="about-value-icon">
                  <i
                    className={`bi ${value.icon}`}
                    aria-hidden="true"
                  />
                </div>

                <h3>
                  {value.title}
                </h3>

                <p>
                  {value.description}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
          ===================================================== */}
      <section className="about-cta-section">

        <div className="about-cta-container">

          <div
            className="about-cta-glow"
            aria-hidden="true"
          />

          <div className="about-cta-content">

            <span className="about-cta-eyebrow">
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

          </div>

          <NavLink
            to={siteConfig.navigation.contact}
            className="about-cta-button"
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

      </section>

    </main>
  )
}

export default AboutPage