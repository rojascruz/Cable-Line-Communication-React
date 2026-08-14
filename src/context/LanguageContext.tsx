import { createContext } from 'react'

import type {
  Language,
  TranslationDictionary,
} from '../i18n/translations'

export type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  t: TranslationDictionary
}

export const LanguageContext =
  createContext<LanguageContextValue | undefined>(
    undefined,
  )