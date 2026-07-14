'use client';

import React from 'react';
import { useI18n } from '@/lib/i18n';

interface Props {
  children: React.ReactNode;
  name?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundaryClass extends React.Component<Props & { t: (key: string) => string }, State> {
  constructor(props: Props & { t: (key: string) => string }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(`[OSIRIS] ${this.props.name || 'Component'} Error:`, error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const { t } = this.props;
      return (
        <div className="flex items-center justify-center w-full h-full bg-[var(--bg-secondary)] rounded-lg border border-red-900/30 p-4">
          <div className="text-center">
            <div className="text-xs font-mono text-red-400 tracking-widest mb-2">
              ⚠ {t('Something went wrong')}
            </div>
            <div className="text-[10px] font-mono text-[var(--text-muted)] max-w-[300px] truncate">
              {this.state.error?.message}
            </div>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="mt-3 px-3 py-1 text-[9px] font-mono tracking-widest text-[var(--gold-primary)] border border-[var(--border-primary)] rounded hover:bg-[var(--hover-accent)] transition-colors"
            >
              {t('Try again')}
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function ErrorBoundary(props: Props) {
  const { t } = useI18n();
  return <ErrorBoundaryClass {...props} t={t} />;
}
