'use client';

import { useI18n } from '@/lib/i18n';

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n();

  return (
    <div className="flex items-center gap-1 ml-3 pointer-events-auto">
      <button
        onClick={() => setLang('en')}
        className={`px-2 py-1 text-[9px] font-mono tracking-wider rounded transition-all ${
          lang === 'en'
            ? 'bg-[var(--cyan-primary)]/20 text-[var(--cyan-primary)] border border-[var(--cyan-primary)]/40'
            : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)] border border-transparent'
        }`}
      >
        EN
      </button>
      <span className="text-[var(--text-muted)]/40 text-[8px]">/</span>
      <button
        onClick={() => setLang('tr')}
        className={`px-2 py-1 text-[9px] font-mono tracking-wider rounded transition-all ${
          lang === 'tr'
            ? 'bg-[var(--gold-primary)]/20 text-[var(--gold-primary)] border border-[var(--gold-primary)]/40'
            : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)] border border-transparent'
        }`}
      >
        TR
      </button>
    </div>
  );
}
