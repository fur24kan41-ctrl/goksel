/**
 * Turkish translations for `src/components/IntelFeed.tsx`.
 *
 * Keys are the English strings exactly as they appear in the component.
 * Anything missing here falls back to the English original.
 */
export const trIntelFeed: Record<string, string> = {
  'SIGINT FEED': 'SIGINT AKIŞI',
  'ALERTS': 'ALARMLAR',
  'AWAITING INTELLIGENCE...': 'İSTİHBARAT BEKLENİYOR...',

  /* Risk badges (module-scope `getRiskLabel`, translated at render time). */
  'CRITICAL': 'KRİTİK',
  'HIGH': 'YÜKSEK',
  'ELEVATED': 'YÜKSELEN',
  'LOW': 'DÜŞÜK',

  /* Map-pin tooltip: the English sentence splits around the anchor name. */
  'Approximate: centroid for': 'Yaklaşık:',
  ', not the event location': ' merkez noktası, olay konumu değil',
  'Approximate location': 'Yaklaşık konum',

  'OPEN SOURCE': 'AÇIK KAYNAK',

  /* Relative time units: numbers stay in the template, only the unit translates. */
  'm ago': ' dk önce',
  'h ago': ' sa önce',
  'd ago': ' gün önce',
};
