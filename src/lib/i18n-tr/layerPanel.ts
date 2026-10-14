/**
 * Turkish translations for the left sidebar: `src/components/LayerPanel.tsx`
 * (layer groups and layer rows, terrain status, Style Studio / Ghost Protocol
 * toggles).
 *
 * Keys are the English strings exactly as they appear in the component — for
 * values read from the module-scope `LAYER_GROUPS` table the key is the raw
 * English `label` / `fullLabel` / `description`, wrapped in `t()` at the render
 * site. Anything missing here falls back to English automatically.
 */
export const trLayerPanel: Record<string, string> = {
  /* ── Group headings ─────────────────────────────────────────────────── */
  'GÖKSEL SDK': 'GÖKSEL SDK',
  'AVIATION': 'HAVACILIK',
  'MARITIME': 'DENİZCİLİK',
  'SPACE TRACKING': 'UZAY TAKİBİ',
  'SURVEILLANCE': 'GÖZETLEME',
  'NATURAL HAZARDS': 'DOĞAL FELAKETLER',
  'THREATS & INTEL': 'TEHDİTLER & İSTİHBARAT',
  'NETWORK INTEL': 'AĞ İSTİHBARATI',
  'NET & EVENT INTEL': 'AĞ & OLAY İSTİHBARATI',
  'DISPLAY': 'GÖRÜNÜM',

  /* ── SDK ────────────────────────────────────────────────────────────── */
  'Maritime Lines': 'Deniz Hatları',
  'Live Clouds': 'Canlı Bulutlar',
  'NOAA satellites · lit in 3D · hourly': 'NOAA uyduları · 3B aydınlatmalı · saatlik',

  /* ── Aviation ───────────────────────────────────────────────────────── */
  'Commercial': 'Ticari',
  'Private': 'Özel',
  'Private Jets': 'Özel Jetler',
  'Military': 'Askeri',

  /* ── Maritime ───────────────────────────────────────────────────────── */
  'Maritime / Naval': 'Denizcilik / Donanma',

  /* ── Space tracking ─────────────────────────────────────────────────── */
  'All Satellites': 'Tüm Uydular',
  'Starlink / Comms': 'Starlink / İletişim',
  'Military / Intel': 'Askeri / İstihbarat',
  'GPS / Navigation': 'GPS / Navigasyon',
  'Earth Observation': 'Yer Gözlemi',
  'Stations / Telescopes': 'İstasyonlar / Teleskoplar',

  /* ── Surveillance ───────────────────────────────────────────────────── */
  'CCTV Cameras': 'CCTV Kameraları',
  'Live Previews': 'Canlı Ön İzlemeler',
  'Live News Feeds': 'Canlı Haber Akışları',

  /* ── Natural hazards ────────────────────────────────────────────────── */
  'Earthquakes': 'Depremler',
  'Active Fires': 'Aktif Yangınlar',
  'Severe Weather': 'Şiddetli Hava Olayları',

  /* ── Threats & intel ────────────────────────────────────────────────── */
  'Nuclear Facilities': 'Nükleer Tesisler',
  'Global Incidents': 'Küresel Olaylar',
  'Live Alert Pins': 'Canlı Uyarı İşaretleri',
  'GDELT Events': 'GDELT Olayları',

  /* ── Network intel ──────────────────────────────────────────────────── */
  'Live Malware': 'Canlı Zararlı Yazılım',
  'Botnet C2 Servers': 'Botnet C2 Sunucuları',

  /* ── Net & event intel ──────────────────────────────────────────────── */
  'Internet Outages': 'İnternet Kesintileri',
  'Attack Origins': 'Saldırı Kaynakları',

  /* ── Display ────────────────────────────────────────────────────────── */
  'Day / Night Cycle': 'Gündüz / Gece Döngüsü',
  '3D Buildings': '3B Binalar',
  'City detail · zoom 14.5+': 'Şehir detayı · yakınlaştırma 14.5+',
  '3D Terrain': '3B Arazi',
  'Mountains · zoom 10+': 'Dağlar · yakınlaştırma 10+',

  /* ── Terrain status panel ───────────────────────────────────────────── */
  'Terrain at zoom 10+ · zoom in': 'Arazi için yakınlaştırma 10+ · yakınlaştırın',
  'Terrain starts when you stop moving': 'Arazi, hareketiniz durduğunda başlar',
  'Loading nearby terrain…': 'Yakındaki arazi yükleniyor…',
  'Terrain unavailable; the map is still usable.':
    'Arazi kullanılamıyor; harita yine de kullanılabilir.',
  'Terrain on': 'Arazi açık',
  'Zoom to terrain': 'Araziye yakınlaştır',
  'Retry terrain': 'Araziyi yeniden dene',
  'Nearby detail only · cached tiles': 'Yalnızca yakındaki detay · önbellekli karolar',
  'Terrain credits': 'Arazi atıfları',

  /* ── Flyout controls ────────────────────────────────────────────────── */
  'active': 'etkin',
  'NONE': 'HİÇBİRİ',
  'ALL': 'TÜMÜ',
  'Close': 'Kapat',
  'Turn the layer above on to use this': 'Bunu kullanmak için yukarıdaki katmanı açın',

  /* ── Footer toggles ─────────────────────────────────────────────────── */
  'Style Studio': 'Stil Stüdyosu',
  'Ghost Protocol': 'Hayalet Protokolü',
};
