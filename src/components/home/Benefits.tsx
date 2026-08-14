import { useLanguage } from '../../hooks/useLanguage'

import '../../styles/home/benefits.css'

function Benefits() {
  const { t } = useLanguage()

  const benefits = t.home.benefits

  const items = [
    {
      title: benefits.items.experience.title,
      description: benefits.items.experience.description,
      icon: (
        <path
          d="M12 3l2.3 4.7 5.2.8-3.8 3.7.9 5.2-4.6-2.4-4.6 2.4.9-5.2L4.5 8.5l5.2-.8L12 3Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    {
      title: benefits.items.safety.title,
      description: benefits.items.safety.description,
      icon: (
        <path
          d="M12 3l7 3v5c0 4.6-2.9 8.1-7 10-4.1-1.9-7-5.4-7-10V6l7-3Zm-3 9 2 2 4-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    {
      title: benefits.items.quality.title,
      description: benefits.items.quality.description,
      icon: (
        <>
          <circle
            cx="12"
            cy="12"
            r="8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path
            d="m8.5 12 2.2 2.2 4.8-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ),
    },
    {
      title: benefits.items.commitment.title,
      description: benefits.items.commitment.description,
      icon: (
        <path
          d="M7 11V7a5 5 0 0 1 10 0v4M5 11h14v9H5v-9Zm7 3v3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
  ]

  return (
    <section className="benefits-section">
      <div
        className="benefits-background-glow"
        aria-hidden="true"
      />

      <div className="benefits-container">

        <div className="benefits-heading">

          <div className="benefits-heading-copy">

            <span className="section-eyebrow">
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

        <div className="benefits-grid">
          {items.map((item) => (
            <article
              key={item.title}
              className="benefit-card"
            >
              <div className="benefit-card-top">

                <div className="benefit-icon">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </svg>
                </div>

               

              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Benefits