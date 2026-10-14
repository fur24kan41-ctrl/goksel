/**
 * Turkish translations for `src/components/ArcGISPanel.tsx`.
 *
 * Keys are the English strings exactly as they appear in the component — for
 * the module-scope `CATEGORIES` table the key is the raw English `label`,
 * wrapped in `t()` at the render site. Anything missing here falls back to
 * the English original.
 */
export const trArcgisPanel: Record<string, string> = {
  /* ── Stats header / status bar ──────────────────────────────────────── */
  'ArcGIS Intel': 'ArcGIS İstihbarat',
  'Layers Active': 'Aktif Katman',
  'Features': 'Özellik',
  'ArcGIS PUBLIC': 'ARCGIS KAMU',
  'Connection Health': 'Bağlantı Sağlığı',

  /* ── Map extent / active layers ─────────────────────────────────────── */
  'Map Extent:': 'Harita Kapsamı:',
  'Active Data Layers': 'Aktif Veri Katmanları',
  'Hide layer': 'Katmanı gizle',
  'Show layer': 'Katmanı göster',
  'Layer settings': 'Katman ayarları',
  'Remove Layer': 'Katmanı kaldır',
  'Color': 'Renk',
  'Opacity': 'Opaklık',

  /* ── Search bar / categories ────────────────────────────────────────── */
  'Search ArcGIS layers...': 'ArcGIS katmanları ara...',
  'SCAN': 'TARA',
  'Pipelines': 'Boru hatları',
  'Power Grid': 'Elektrik şebekesi',
  'Infrastructure': 'Altyapı',
  'Military': 'Askeri',
  'Emergency': 'Acil durum',

  /* ── Search / import errors ─────────────────────────────────────────── */
  'Search failed': 'Arama başarısız',
  'Import failed': 'İçe aktarma başarısız',

  /* ── Results list ───────────────────────────────────────────────────── */
  'layer': 'katman',
  'layers': 'katman',
  'for': 'için',
  'live': 'aktif',
  'LIVE': 'CANLI',
  'LOADING...': 'YÜKLENİYOR...',
  'IMPORT': 'İÇE AKTAR',
  'No description published for this layer.': 'Bu katman için yayınlanmış bir açıklama yok.',
  'more': 'daha fazla',

  /* ── Empty state ────────────────────────────────────────────────────── */
  'No active search': 'Aktif arama yok',
  'Try searching for Power Plants, Substations, Evacuation Routes, or Pipelines in the designated area.':
    'Belirlenen bölgede santraller, trafo merkezleri, tahliye güzergâhları veya boru hatları aramayı deneyin.',
};
