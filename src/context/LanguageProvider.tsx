import {
  useEffect,
  useState,
  type ReactNode,
} from 'react'

import {
  translations,
  type Language,
} from '../i18n/translations'

import {
  LanguageContext,
  type LanguageContextValue,
} from './LanguageContext'

type LanguageProviderProps = {
  children: ReactNode
}

const STORAGE_KEY = 'clc-language'

function getInitialLanguage(): Language {
  const savedLanguage = localStorage.getItem(STORAGE_KEY)

  if (savedLanguage === 'en' || savedLanguage === 'es') {
    return savedLanguage
  }

  return 'en'
}

export function LanguageProvider({
  children,
}: LanguageProviderProps) {
  const [language, setLanguage] =
    useState<Language>(getInitialLanguage)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const toggleLanguage = () => {
    setLanguage((currentLanguage) =>
      currentLanguage === 'en' ? 'es' : 'en',
    )
  }

  const value: LanguageContextValue = {
    language,
    setLanguage,
    toggleLanguage,
    t: translations[language],
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}