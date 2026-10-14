'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Loader2, RefreshCw, X, Activity, ArrowLeftRight, CircleDot } from 'lucide-react';
import { BLOCS, BLOC_ORDER, timeAgo, type AlertBrief, type AlertThread } from '@/lib/alert-digest';

/**
 * OSIRIS — One-Click AI Overview
 * Drop-in button that generates an intelligence read-out for whatever
 * data payload it's handed. Posts to /api/ai/overview, which works with
 * or without a Gemini key (heuristic analyst fallback), so it always
 * returns something useful. Alerts also get a structured brief whose
 * threads can filter the feed they were built from.
 */

interface AiOverviewProps {
  mode: 'alerts' | 'markets';
  payload: unknown;
  accent?: string;
  /** Changes when the underlying feed changes, so a stale read-out can say so. */
  signature?: string;
  activeThreadId?: string | null;
  onThreadSelect?: (id: string | null) => void;
  onOpenChange?: (open: boolean) => void;
}

interface OverviewResult {
  overview: string;
  highlights: string[];
  generatedBy: 'gemini' | 'analyst';
  generatedAt: string;
  brief?: AlertBrief;
}

const PERSPECTIVE: Record<AlertThread['perspective'], { label: string; color: string; title: string }> = {
  cross: { label: 'BOTH SIDES', color: '#00E676', title: 'Carried by both Western and Russian-aligned channels' },
  single: { label: 'ONE SIDE', color: '#FF9500', title: 'Every report comes from channels of a single perspective' },
  mixed: { label: 'MIXED', color: '#8A8880', title: 'Sourcing does not include both Western and Russian-aligned channels' },
};

function LeanBar({ blocs }: { blocs: AlertThread['blocs'] }) {
  const total = BLOC_ORDER.reduce((n, b) => n + (blocs[b] || 0), 0);
  if (!total) return null;
  return (
    <div className="flex h-1 w-full overflow-hidden rounded-full bg-white/5" aria-hidden="true">
      {BLOC_ORDER.map(b => blocs[b] ? (
        <div key={b} style={{ width: `${(blocs[b]! / total) * 100}%`, background: BLOCS[b].color }} />
      ) : null)}
    </div>
  );
}

function ThreadRow({ thread, active, accent, onSelect }: {
  thread: AlertThread; active: boolean; accent: string; onSelect?: (id: string | null) => void;
}) {
  const p = PERSPECTIVE[thread.perspective];
  const blocSummary = BLOC_ORDER.filter(b => thread.blocs[b]).map(b => `${BLOCS[b].label}: ${thread.blocs[b]}`).join(' · ');
  return (
    <button
      type="button"
      onClick={() => onSelect?.(active ? null : thread.id)}
      disabled={!onSelect}
      aria-pressed={active}
      className="w-full text-left rounded-md border px-2 py-1.5 transition-colors disabled:cursor-default"
      style={{
        borderColor: active ? `${accent}88` : 'rgba(255,255,255,0.06)',
        background: active ? `${accent}14` : 'rgba(255,255,255,0.02)',
      }}
      title={onSelect ? (active ? 'Show all alerts' : 'Show only this thread') : undefined}
    >
      <div className="flex items-center gap-1.5">
        <span className="flex-1 min-w-0 truncate text-[11px] font-semibold text-[var(--text-primary)]">{thread.label}</span>
        <span className="text-[8.5px] font-mono tracking-wider px-1 rounded" style={{ color: p.color, background: `${p.color}14` }} title={p.title}>
          {p.label}
        </span>
        <span className="text-[11px] font-mono font-bold tabular-nums" style={{ color: accent }}>{thread.count}</span>
      </div>
      <div className="mt-1" title={blocSummary}><LeanBar blocs={thread.blocs} /></div>
      <div className="mt-1 flex items-center gap-1.5 text-[9px] font-mono text-[var(--text-muted)]">
        <span className="truncate">{thread.sources.length} ch{thread.topics.length ? ` · ${thread.topics.join(' · ')}` : ''}</span>
        {thread.breaking > 0 && <span className="text-[#FF5A5A] flex-shrink-0">· {thread.breaking} BREAKING</span>}
        {thread.latest && <span className="ml-auto flex-shrink-0">{timeAgo(thread.latest)}</span>}
      </div>
      {thread.lead && (
        <div className="mt-1 text-[10px] leading-snug text-[var(--text-secondary)] line-clamp-2">
          {thread.lead.title} <span className="text-[var(--text-muted)]">— {thread.lead.source}</span>
        </div>
      )}
    </button>
  );
}

function AlertsBrief({ result, accent, activeThreadId, onThreadSelect }: {
  result: OverviewResult & { brief: AlertBrief }; accent: string;
  activeThreadId?: string | null; onThreadSelect?: (id: string | null) => void;
}) {
  const { brief } = result;
  const prose = result.generatedBy === 'gemini' ? result.overview : brief.bottomLine;
  const quake = brief.seismic?.strongest;
  return (
    <>
      <p className="font-sans text-[12px] leading-relaxed text-[var(--text-primary)] whitespace-pre-line">{prose}</p>

      {brief.threads.length > 0 && (
        <div className="mt-2.5">
          <div className="mb-1 flex items-center gap-1 text-[8.5px] font-mono tracking-widest text-[var(--text-muted)]">
            <Activity className="w-2.5 h-2.5" /> THREADS{onThreadSelect ? ' · TAP TO FILTER' : ''}
          </div>
          <div className="space-y-1">
            {brief.threads.map(t => (
              <ThreadRow key={t.id} thread={t} accent={accent} active={activeThreadId === t.id} onSelect={onThreadSelect} />
            ))}
          </div>
        </div>
      )}

      {quake && (
        <div className="mt-2 flex items-center gap-2 rounded-md border border-white/5 bg-white/[0.02] px-2 py-1.5 text-[10px]">
          <CircleDot className="w-3 h-3 flex-shrink-0" style={{ color: quake.magnitude >= 6 ? '#FF3D3D' : quake.magnitude >= 5 ? '#FF9500' : '#FFD700' }} />
          <span className="flex-1 min-w-0 truncate text-[var(--text-secondary)]">
            Strongest quake <b className="text-[var(--text-primary)]">M{quake.magnitude.toFixed(1)}</b> {quake.place}
          </span>
          {quake.tsunami && <span className="text-[8.5px] font-mono text-[#448AFF]">TSUNAMI FLAG</span>}
          <span className="font-mono text-[9px] text-[var(--text-muted)] flex-shrink-0">{brief.seismic!.count} total</span>
        </div>
      )}

      <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[8.5px] font-mono text-[var(--text-muted)]">
        <span>{brief.coverage.reports} REPORTS</span>
        <span>· {brief.coverage.channels} CHANNELS</span>
        {brief.coverage.corroborated > 0 && (
          <span className="inline-flex items-center gap-0.5"><ArrowLeftRight className="w-2 h-2" /> {brief.coverage.corroborated} CROSS-POSTED</span>
        )}
        {brief.coverage.newest && <span>· NEWEST {timeAgo(brief.coverage.newest).toUpperCase()}</span>}
      </div>
      <div className="mt-1 text-[8.5px] leading-snug text-[var(--text-muted)]">
        {result.generatedBy === 'gemini'
          ? 'Read-out by Gemini 2.0 Flash from the attributed headlines. Threads: '
          : 'Heuristic analyst, no model. '}
        {brief.method}
      </div>
    </>
  );
}

export default function AiOverview({
  mode, payload, accent = '#7C4DFF', signature, activeThreadId, onThreadSelect, onOpenChange,
}: AiOverviewProps) {
  const [open, setOpenState] = useState(false);
  const setOpen = useCallback((next: boolean) => {
    setOpenState(next);
    onOpenChange?.(next);
  }, [onOpenChange]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<OverviewResult | null>(null);
  const [resultSignature, setResultSignature] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  const generate = useCallback(async () => {
    setLoading(true);
    setError(null);
    const sig = signature;
    try {
      const res = await fetch('/api/ai/overview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode, payload }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setResult(await res.json());
      setResultSignature(sig);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to generate overview');
    } finally {
      setLoading(false);
    }
  }, [mode, payload, signature]);

  const handleClick = useCallback(() => {
    const next = !open;
    setOpen(next);
    if (next && !result && !loading) generate();
  }, [open, result, loading, generate, setOpen]);

  const stale = Boolean(result && signature && resultSignature && signature !== resultSignature);
  const brief = result?.brief;

  return (
    <div className="w-full">
      <button
        onClick={handleClick}
        aria-expanded={open}
        className="w-full flex items-center justify-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-mono tracking-wider transition-all border hover:brightness-125"
        style={{
          color: accent,
          borderColor: `${accent}55`,
          background: `${accent}12`,
        }}
      >
        {loading ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
        {loading ? 'ANALYZING…' : open ? 'HIDE AI OVERVIEW' : 'AI OVERVIEW'}
        {stale && !loading && <span className="ml-1 w-1.5 h-1.5 rounded-full animate-osiris-pulse" style={{ background: accent }} title="The feed has changed since this read-out" />}
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div
              className="mt-2 p-2.5 rounded-lg border text-[11px] leading-relaxed"
              style={{ borderColor: `${accent}33`, background: `${accent}08` }}
            >
              {/* Header row */}
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono tracking-widest text-[9px]" style={{ color: accent }}>
                  {result ? `GÖKSEL ${result.generatedBy === 'gemini' ? 'AI' : 'ANALYST'}` : 'GÖKSEL ANALYST'}
                  {result && <span className="text-[var(--text-muted)]"> · {timeAgo(result.generatedAt).toUpperCase()}</span>}
                </span>
                <div className="flex items-center gap-2">
                  <button onClick={generate} disabled={loading} className="hover:opacity-70 transition-opacity" title="Regenerate" aria-label="Regenerate overview">
                    <RefreshCw className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} style={{ color: accent }} />
                  </button>
                  <button onClick={() => setOpen(false)} className="hover:opacity-70 transition-opacity" title="Close" aria-label="Close overview">
                    <X className="w-3 h-3 text-[var(--text-muted)]" />
                  </button>
                </div>
              </div>

              {stale && !loading && (
                <button
                  onClick={generate}
                  className="mb-2 w-full rounded border px-2 py-1 text-left text-[9.5px] font-mono tracking-wide transition-colors hover:bg-white/5"
                  style={{ borderColor: `${accent}44`, color: accent }}
                >
                  FEED UPDATED SINCE THIS READ-OUT — REGENERATE
                </button>
              )}

              {loading && !result && (
                <div className="flex items-center gap-2 py-2 text-[var(--text-muted)]">
                  <Loader2 className="w-3 h-3 animate-spin" /> Reading the feed…
                </div>
              )}

              {error && <div className="text-[var(--alert-red)] py-1">⚠ {error}</div>}

              {result && brief && (
                <AlertsBrief
                  result={{ ...result, brief }}
                  accent={accent}
                  activeThreadId={activeThreadId}
                  onThreadSelect={onThreadSelect}
                />
              )}

              {result && !brief && (
                <>
                  <div className="text-[var(--text-primary)] whitespace-pre-line">{result.overview}</div>

                  {result.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {result.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="px-1.5 py-0.5 rounded text-[9px] font-mono"
                          style={{ background: `${accent}18`, color: accent, border: `1px solid ${accent}33` }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-2 text-[9px] font-mono text-[var(--text-muted)] tracking-wide">
                    {result.generatedBy === 'gemini' ? 'GEMINI 2.0 FLASH' : 'HEURISTIC ANALYST'} ·{' '}
                    {new Date(result.generatedAt).toLocaleTimeString()}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
