'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { translations } from './i18n-tr';

/**
 * The two languages the interface can render in.
 *
 * The project does not use an external i18n library: English is the source
 * language and every English string doubles as its own translation key, so a
 * string that has not been translated yet simply renders in English.
 */
export type Language = 'en' | 'tr';

/** localStorage key that keeps the reader's choice across reloads. */
export const LANG_STORAGE_KEY = 'app-lang';

/**
 * English source text -> Turkish text.
 *
 * Keys are the English strings exactly as they appear in the components; a
 * missing key falls back to the English original (see `translate`), which is
 * what makes it safe to translate components incrementally.
 */
const TR: Record<string, string> = { ...translations };

/** Pure translation lookup — usable outside React (closures, callbacks). */
export function translate(lang: Language, key: string): string {
  if (lang !== 'tr') return key;
  return TR[key] || key;
}

type I18nValue = {
  /** Currently rendered language. */
  lang: Language;
  /** Switch language and persist the choice to localStorage. */
  setLang: (next: Language) => void;
  /** Translate a user-visible English string. */
  t: (key: string) => string;
};

const I18nContext = createContext<I18nValue | null>(null);

/** The persisted choice, or null when storage is empty/blocked. */
function readStoredLanguage(): Language | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (stored === 'en' || stored === 'tr') return stored;
  } catch {
    /* storage blocked (private mode, policy) — fall through to the browser */
  }
  return null;
}

/** First visit, nothing stored: a Turkish browser starts in Turkish. */
function detectBrowserLanguage(): Language {
  if (typeof navigator === 'undefined') return 'en';
  const tag = typeof navigator.language === 'string' ? navigator.language : '';
  return tag.toLowerCase().startsWith('tr') ? 'tr' : 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  /* The first render is always English so the server markup and the hydrated
     markup agree; the reader's own language is applied in the first effect,
     in the same commit that attaches `lang` to <html>. */
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    setLangState(readStoredLanguage() ?? detectBrowserLanguage());
  }, []);

  /* Keep <html lang> in step with what is on screen (step 6). */
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, next);
    } catch {
      /* storage blocked — the choice still applies for this session */
    }
  }, []);

  const value = useMemo<I18nValue>(
    () => ({
      lang,
      setLang,
      t: (key: string) => translate(lang, key),
    }),
    [lang, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

/** Hook used by every component that renders a user-visible string. */
export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n() must be used inside <I18nProvider>');
  }
  return ctx;
}
