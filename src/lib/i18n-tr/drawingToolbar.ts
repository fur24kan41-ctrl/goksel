/**
 * Turkish translations for `src/components/DrawingToolbar.tsx`.
 *
 * Keys are the English strings exactly as they appear in the component.
 * Anything missing here falls back to the English original.
 * Mono HUD labels stay uppercase; file-format names (CSV, GEOJSON) and
 * units (km, km²) are technical and stay as-is.
 */
export const trDrawingToolbar: Record<string, string> = {
  /* ── Relative time (the leading space keeps "5 dk önce" glued to the
        number the way English glues "5m ago") ─────────────────────────── */
  'just now': 'az önce',
  'm ago': ' dk önce',
  'h ago': ' sa önce',
  'd ago': ' gün önce',

  /* ── Mode selector (module-scope MODES array; translated at the render
        site as t(m.label) / t(m.blurb)) ──────────────────────────────── */
  'AREA': 'ALAN',
  'BOX': 'KUTU',
  'RADIUS': 'YARIÇAP',
  'PATH': 'ROTA',
  'Any shape, corner by corner': 'Köşeden köşeye serbest şekil',
  'Two clicks, opposite corners': 'İki tık, karşılıklı köşeler',
  'Centre, then distance out': 'Merkez, sonra dışarı doğru mesafe',
  'Measure a route': 'Bir rota ölç',

  'Click the first corner': 'İlk köşeye tıklayın',
  'Click one corner': 'Bir köşeye tıklayın',
  'Click the centre': 'Merkeze tıklayın',
  'Click the start point': 'Başlangıç noktasına tıklayın',

  'Double-click or Enter to close · Backspace undoes · Esc cancels':
    'Kapatmak için çift tık veya Enter · Geri almak için Backspace · Vazgeçmek için Esc',
  'Second click completes the box · Esc cancels':
    'Kutuyu tamamlamak için ikinci tık · Vazgeçmek için Esc',
  'Second click sets the radius · Esc cancels':
    'Yarıçapı belirlemek için ikinci tık · Vazgeçmek için Esc',
  'Double-click or Enter to end · Backspace undoes · Esc cancels':
    'Bitirmek için çift tık veya Enter · Geri almak için Backspace · Vazgeçmek için Esc',

  /* ── Header ─────────────────────────────────────────────────────────── */
  'DRAWING TOOLS': 'ÇİZİM ARAÇLARI',
  'Tracked Area': 'İzlenen Alan',
  'AOIs / Perim': 'AOI / Çevre',

  /* ── Steps and live progress ────────────────────────────────────────── */
  'STEP 1 — CHOOSE A SHAPE': 'ADIM 1 — BİR ŞEKİL SEÇİN',
  'STEP 2 — NOW CLICK THE MAP': 'ADIM 2 — ŞİMDİ HARİTAYA TIKLAYIN',
  'point': 'nokta',
  'points': 'nokta',

  /* ── Empty state ────────────────────────────────────────────────────── */
  'Now click on the map to place your first point.':
    'Şimdi ilk noktanızı koymak için haritaya tıklayın.',
  'Choose a shape above, then click the map':
    'Yukarıdan bir şekil seçin, sonra haritaya tıklayın',
  'to measure an area and see what is inside it.':
    'alanı ölçmek ve içinde ne olduğunu görmek için.',

  /* ── Per-polygon actions ────────────────────────────────────────────── */
  'Stop watching this area': 'Bu alanı izlemeyi durdur',
  'Watch for arrivals and departures': 'Giriş ve çıkışları izle',
  'Copy GeoJSON': 'GeoJSON kopyala',
  'Delete': 'Sil',

  /* ── Contents read-out ──────────────────────────────────────────────── */
  'CONTENTS': 'İÇERİK',
  'object': 'varlık',
  'objects': 'varlık',
  'Nothing tracked inside this area.': 'Bu alanda izlenen hiçbir şey yok.',
  'more not listed': 'daha listelenmedi',

  /* ── Tripwire log ───────────────────────────────────────────────────── */
  'WATCHING': 'İZLENEN',
  'events': 'olay',
  'Baseline recorded. Movement in or out will appear here.':
    'Temel kaydı oluşturuldu. Giriş ve çıkış hareketleri burada görünecek.',

  /* ── Footer actions ─────────────────────────────────────────────────── */
  'EXPORT GEOJSON': 'GEOJSON DIŞA AKTAR',
  'CLEAR': 'TEMİZLE',
};
