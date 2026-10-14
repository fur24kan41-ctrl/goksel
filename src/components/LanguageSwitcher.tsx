'use client';

import { useI18n, type Language } from '@/lib/i18n';

/**
 * EN / TR toggle. The active language is highlighted, and the choice is
 * persisted by `I18nProvider` (localStorage key `app-lang`).
 */
const OPTIONS: Array<{ code: Language; label: string }> = [
  { code: 'en', label: 'EN' },
  { code: 'tr', label: 'TR' },
];

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t('Language')}
      className={`pointer-events-auto inline-flex items-center rounded border border-[var(--border-primary)] bg-black/40 backdrop-blur-sm p-[2px] shadow-[0_0_10px_rgba(0,0,0,0.4)] ${
        compact ? '' : 'ml-3'
      }`}
    >
      {OPTIONS.map(({ code, label }) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            aria-label={t(code === 'en' ? 'Switch to English' : 'Switch to Turkish')}
            title={t(code === 'en' ? 'Switch to English' : 'Switch to Turkish')}
            className={`px-2 py-1 text-[9px] font-mono font-bold tracking-[0.18em] rounded-sm transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--gold-primary)] ${
              active
                ? 'bg-[var(--gold-primary)] text-black shadow-[0_0_10px_rgba(255,215,0,0.35)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/10'
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
