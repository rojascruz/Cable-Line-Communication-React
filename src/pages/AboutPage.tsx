import { NavLink } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'

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
    },
    {
      title: page.values.items.quality.title,
      description: page.values.items.quality.description,
    },
    {
      title: page.values.items.commitment.title,
      description: page.values.items.commitment.description,
    },
    {
      title: page.values.items.reliability.title,
      description: page.values.items.reliability.description,
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
          />

          <div className="about-hero-overlay" />
        </div>

        <div className="about-hero-container">

          <div className="about-hero-content">

            <span className="about-hero-eyebrow">
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

            <NavLink
              to="/contact"
              className="about-hero-button"
            >
              {page.hero.button}

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

          </div>

        </div>

      </section>

      {/* =====================================================
          WHO WE ARE
          ===================================================== */}
      <section className="about-story-section">

        <div className="about-story-container">

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
                alt="Cable Line Communication fiber optic work"
                loading="lazy"
              />
            </div>

          </div>

          <div className="about-story-content">

            <span className="section-eyebrow">
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

              <span className="about-story-highlight-line" />

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

          <div className="about-purpose-card">

            <span className="about-purpose-number">
              
            </span>

            <h2>
              {page.purpose.mission.title}
            </h2>

            <p>
              {page.purpose.mission.description}
            </p>

          </div>

          <div className="about-purpose-card">

            <span className="about-purpose-number">
              
            </span>

            <h2>
              {page.purpose.vision.title}
            </h2>

            <p>
              {page.purpose.vision.description}
            </p>

          </div>

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

          <div>

            <span className="about-cta-eyebrow">
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
            to="/contact"
            className="about-cta-button"
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
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </NavLink>

        </div>

      </section>

    </main>
  )
}

export default AboutPage