import { useEffect, useRef, useState } from 'react'

import { useLanguage } from '../../hooks/useLanguage'

import '../../styles/layout/language-switcher.css'

function LanguageSwitcher() {
  const {
    language,
    setLanguage,
    t,
  } = useLanguage()

  const [isOpen, setIsOpen] =
    useState(false)

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
        <i
          className="bi bi-globe2 language-globe"
          aria-hidden="true"
        />

        <span className="language-code">
          {language.toUpperCase()}
        </span>

        <i
          className="bi bi-chevron-down language-chevron"
          aria-hidden="true"
        />
      </button>

      <div
        className={`language-dropdown ${
          isOpen
            ? 'is-visible'
            : ''
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
            <strong>
              English
            </strong>

            <small>
              English
            </small>
          </span>

          {language === 'en' && (
            <i
              className="bi bi-check-lg language-check"
              aria-hidden="true"
            />
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
            <strong>
              Español
            </strong>

            <small>
              Spanish
            </small>
          </span>

          {language === 'es' && (
            <i
              className="bi bi-check-lg language-check"
              aria-hidden="true"
            />
          )}
        </button>

      </div>

    </div>
  )
}

export default LanguageSwitcher