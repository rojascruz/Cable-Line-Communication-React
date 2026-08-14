import { useLanguage } from '../../hooks/useLanguage'

import aerialImage from '../../assets/images/vehicle/Foto1.png'
import drillingImage from '../../assets/images/vehicle/Foto2.png'
import fiberImage from '../../assets/images/vehicle/Foto3.png'

import '../../styles/home/fleet.css'

function Fleet() {
  const { t } = useLanguage()

  const fleet = t.home.fleet

  const items = [
    {
      title: fleet.items.aerial.title,
      description: fleet.items.aerial.description,
      image: aerialImage,
    },
    {
      title: fleet.items.drilling.title,
      description: fleet.items.drilling.description,
      image: drillingImage,
    },
    {
      title: fleet.items.fiber.title,
      description: fleet.items.fiber.description,
      image: fiberImage,
    },
  ]

  return (
    <section className="fleet-section">
      <div className="fleet-container">

        <div className="fleet-header">
          <div>
            <span className="section-eyebrow">
              {fleet.eyebrow}
            </span>

            <h2 className="fleet-title">
              {fleet.title}

              <span>
                {' '}
                {fleet.titleHighlight}
              </span>
            </h2>
          </div>

          <p className="fleet-description">
            {fleet.description}
          </p>
        </div>

        <div className="fleet-grid">
          {items.map((item) => (
            <article
              key={item.title}
              className="fleet-card"
            >
              <div className="fleet-image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="fleet-image"
                  loading="lazy"
                />

                <div
                  className="fleet-image-overlay"
                  aria-hidden="true"
                />

            
              </div>

              <div className="fleet-content">
                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Fleet