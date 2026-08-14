import { NavLink } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'

import '../styles/pages/not-found.css'

function NotFoundPage() {
  const { language } = useLanguage()

  const content =
    language === 'es'
      ? {
          eyebrow: 'Página no encontrada',
          title: 'Parece que esta conexión',
          highlight: 'no está disponible.',
          description:
            'La página que estás buscando no existe o fue movida. Puedes regresar al inicio y continuar navegando.',
          button: 'Volver al Inicio',
        }
      : {
          eyebrow: 'Page Not Found',
          title: 'Looks like this connection',
          highlight: 'is unavailable.',
          description:
            'The page you are looking for does not exist or may have been moved. Return home to continue browsing.',
          button: 'Back to Home',
        }

  return (
    <main className="not-found-page">

      <div className="not-found-glow not-found-glow-one" />
      <div className="not-found-glow not-found-glow-two" />

      <div className="not-found-container">

        <div className="not-found-code">
          404
        </div>

        <span className="not-found-eyebrow">
          {content.eyebrow}
        </span>

        <h1 className="not-found-title">
          {content.title}

          <span>
            {' '}
            {content.highlight}
          </span>
        </h1>

        <p className="not-found-description">
          {content.description}
        </p>

        <NavLink
          to="/"
          className="not-found-button"
        >
          <span>
            {content.button}
          </span>

          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M19 12H5M11 18l-6-6 6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NavLink>

      </div>

    </main>
  )
}

export default NotFoundPage