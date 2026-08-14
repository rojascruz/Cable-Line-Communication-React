import { useEffect, useRef, useState } from 'react'

import { useLanguage } from '../../hooks/useLanguage'

function LanguageSwitcher() {
  const {
    language,
    setLanguage,
    t,
  } = useLanguage()

  const [isOpen, setIsOpen] = useState(false)

  const switcherRef =
    useRef<HTMLDivElement>(null)

  const selectLanguage = (
    selectedLanguage: 'en' | 'es',
  ) => {
    setLanguage(selectedLanguage)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleOutsideClick = (
      event: MouseEvent,
    ) => {
      if (
        switcherRef.current &&
        !switcherRef.current.contains(
          event.target as Node,
        )
      ) {
        setIsOpen(false)
      }
    }

    const handleEscape = (
      event: KeyboardEvent,
    ) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener(
      'mousedown',
      handleOutsideClick,
    )

    document.addEventListener(
      'keydown',
      handleEscape,
    )

    return () => {
      document.removeEventListener(
        'mousedown',
        handleOutsideClick,
      )

      document.removeEventListener(
        'keydown',
        handleEscape,
      )
    }
  }, [])

  return (
    <div
      className="language-switcher"
      ref={switcherRef}
    >
      <button
        type="button"
        className={`language-trigger ${
          isOpen ? 'is-open' : ''
        }`}
        onClick={() =>
          setIsOpen((current) => !current)
        }
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={`${t.language.label}: ${
          language === 'en'
            ? t.language.english
            : t.language.spanish
        }`}
      >
        <svg
          className="language-globe"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="12"
            r="9"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />

          <path
            d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>

        <span className="language-code">
          {language.toUpperCase()}
        </span>

        <svg
          className="language-chevron"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="m7 9 5 5 5-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        className={`language-dropdown ${
          isOpen ? 'is-visible' : ''
        }`}
        role="menu"
      >
        <div className="language-dropdown-header">
          {t.language.label}
        </div>

        <button
          type="button"
          role="menuitem"
          className={`language-option ${
            language === 'en'
              ? 'is-selected'
              : ''
          }`}
          onClick={() =>
            selectLanguage('en')
          }
        >
          <span className="language-option-icon">
            EN
          </span>

          <span className="language-option-content">
            <strong>English</strong>
            <small>English</small>
          </span>

          {language === 'en' && (
            <svg
              className="language-check"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="m5 12 4 4L19 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>

        <button
          type="button"
          role="menuitem"
          className={`language-option ${
            language === 'es'
              ? 'is-selected'
              : ''
          }`}
          onClick={() =>
            selectLanguage('es')
          }
        >
          <span className="language-option-icon">
            ES
          </span>

          <span className="language-option-content">
            <strong>Español</strong>
            <small>Spanish</small>
          </span>

          {language === 'es' && (
            <svg
              className="language-check"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="m5 12 4 4L19 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}

export default LanguageSwitcher