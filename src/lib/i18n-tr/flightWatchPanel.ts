/**
 * Turkish translations for `src/components/FlightWatchPanel.tsx`.
 *
 * Keys are the English strings exactly as they appear in the component.
 * Anything missing here falls back to the English original.
 */
export const trFlightWatchPanel: Record<string, string> = {
  /* ── Row header ─────────────────────────────────────────────────────── */
  'Centre on this aircraft': 'Uçak üzerinde ortala',
  'Stop watching': 'İzlemeyi durdur',

  /* ── Identity / airframe ────────────────────────────────────────────── */
  'Identifying airframe…': 'Hava aracı belirleniyor…',
  'Unidentified type': 'Bilinmeyen tip',

  /* ── Altitude, route endpoints, status ──────────────────────────────── */
  /* formatAlt() returns 'Ground' untranslated so its unit test keeps
     passing; the panel translates it at the render site. */
  'Ground': 'Yer',
  'landed': 'indi',
  'scheduled': 'planlı',
  'destination unknown': 'hedef bilinmiyor',
  /* Rendered after the point count: "5 iz noktası (bu rota)". */
  'points this leg': 'iz noktası (bu rota)',
  'No longer in the live feed': 'Canlı akışta artık yok',
};
