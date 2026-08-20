import { useLanguage } from '../../hooks/useLanguage'

import '../../styles/home/benefits.css'

function Benefits() {
  const { t } = useLanguage()

  const benefits = t.home.benefits

  const items = [
    {
      title: benefits.items.experience.title,
      description: benefits.items.experience.description,
      icon: 'bi-award',
    },
    {
      title: benefits.items.safety.title,
      description: benefits.items.safety.description,
      icon: 'bi-shield-check',
    },
    {
      title: benefits.items.quality.title,
      description: benefits.items.quality.description,
      icon: 'bi-patch-check',
    },
    {
      title: benefits.items.commitment.title,
      description: benefits.items.commitment.description,
      icon: 'bi-people',
    },
  ]

  return (
    <section className="benefits-section">

      {/* ===================================================
          BACKGROUND
          =================================================== */}
      <div
        className="benefits-background-glow benefits-background-glow-primary"
        aria-hidden="true"
      />

      <div
        className="benefits-background-glow benefits-background-glow-secondary"
        aria-hidden="true"
      />

      <div
        className="benefits-grid-pattern"
        aria-hidden="true"
      />

      {/* ===================================================
          CONTAINER
          =================================================== */}
      <div className="benefits-container">

        {/* =================================================
            HEADER
            ================================================= */}
        <div className="benefits-heading">

          <div className="benefits-heading-copy">

            <span className="section-eyebrow benefits-eyebrow">
              <i
                className="bi bi-stars"
                aria-hidden="true"
              />

              {benefits.eyebrow}
            </span>

            <h2 className="benefits-title">
              {benefits.title}

              <span>
                {' '}
                {benefits.titleHighlight}
              </span>
            </h2>

          </div>

          <p className="benefits-description">
            {benefits.description}
          </p>

        </div>

        {/* =================================================
            BENEFITS
            ================================================= */}
        <div className="benefits-grid">
          {items.map((item) => (
            <article
              key={item.title}
              className="benefit-card"
            >
              <div className="benefit-icon">
                <i
                  className={`bi ${item.icon}`}
                  aria-hidden="true"
                />
              </div>

              <div className="benefit-card-copy">
                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>
              </div>

              <div
                className="benefit-card-accent"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Benefits