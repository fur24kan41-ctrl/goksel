/**
 * Turkish translations for the application shell: `src/app/page.tsx`
 * (splash, header, status bar, tool rail, mobile nav, overlays) plus the two
 * small header widgets, SupportMenu and TokenPanel.
 *
 * Keys are the English strings exactly as they appear in the JSX. Anything
 * missing here falls back to English automatically.
 */
export const trShell: Record<string, string> = {
  /* ── Splash ─────────────────────────────────────────────────────────── */
  'ESTABLISHING SECURE CONNECTION...': 'GÜVENLİ BAĞLANTI KURULUYOR...',
  'INITIALIZING FEEDS...': 'VERİ AKIŞLARI BAŞLATILIYOR...',
  'CALIBRATING SENSORS...': 'SENSÖRLER KALİBRE EDİLİYOR...',
  'SYSTEM READY': 'SİSTEM HAZIR',
  'GLOBAL INTELLIGENCE PLATFORM': 'KÜRESEL İSTİHBARAT PLATFORMU',

  /* ── Header / brand strapline ───────────────────────────────────────── */
  'OPEN SOURCE INTELLIGENCE': 'AÇIK KAYNAK İSTİHBARAT',
  'REAL-TIME GLOBAL MONITORING': 'GERÇEK ZAMANLI KÜRESEL İZLEME',
  '· FLIGHTS · MARITIME · SATELLITES · CCTV · WEATHER · CYBER THREATS':
    '· UÇUŞLAR · DENİZCİLİK · UYDULAR · KAMERALAR · HAVA DURUMU · SİBER TEHDİTLER',

  /* ── Header clocks / counters ───────────────────────────────────────── */
  'UPTIME': 'ÇALIŞMA SÜRESİ',
  'Backend connection status': 'Sunucu bağlantı durumu',
  'STATUS': 'DURUM',
  'LIVE': 'CANLI',
  'CONNECTING': 'BAĞLANIYOR',
  'ERROR': 'HATA',
  'Number of active data layers': 'Etkin veri katmanı sayısı',
  'LAYERS': 'KATMANLAR',
  'Tracked entities on map': 'Haritada izlenen varlıklar',
  'ENTITIES': 'VARLIKLAR',
  'Geomagnetic Storm Index': 'Jeomanyetik Fırtına İndeksi',
  'Geomagnetic Storm Index — no reading from NOAA':
    'Jeomanyetik Fırtına İndeksi — NOAA verisi yok',
  'SOLAR': 'GÜNEŞ',
  'N/A': 'YOK',

  /* ── Desktop tool rail ──────────────────────────────────────────────── */
  'OSINT Recon — IP lookup, network sweep, geolocation':
    'OSINT Keşif — IP sorgulama, ağ taraması, coğrafi konum',
  'OSINT Recon': 'OSINT Keşif',
  'RECON': 'KEŞİF',
  'Live from Space — 24/7 video downlink from the ISS':
    'Uzaydan Canlı — ISS’ten 7/24 video aktarımı',
  'Live from Space': 'Uzaydan Canlı',
  'SPACE': 'UZAY',
  'Markets — crypto prices, space weather, global indices':
    'Piyasalar — kripto fiyatları, uzay hava durumu, küresel endeksler',
  'Markets': 'Piyasalar',
  'MARKETS': 'PİYASALAR',
  'Live Alerts — earthquakes, conflicts, breaking news':
    'Canlı Alarmlar — depremler, çatışmalar, son dakika haberleri',
  'Live Alerts': 'Canlı Alarmlar',
  'ALERTS': 'ALARMLAR',
  'Draw — measure areas of interest on the map':
    'Çiz — haritada ilgi alanlarını ölç',
  'Draw': 'Çiz',
  'DRAW': 'ÇİZ',
  'OI — talk to it and it works the map for you, or run a forecast, on your own AI key (O)':
    'OI — onunla konuş, haritayı senin için kullansın; ya da kendi AI anahtarınla (O) bir tahmin çalıştır',
  'OI · ASSIST & FORECAST': 'OI · ASİSTAN & TAHMİN',
  'Directions — turn-by-turn routing': 'Yönlendirme — adım adım rota',
  'Directions': 'Yönlendirme',
  'ROUTE': 'ROTA',
  'Search — find locations, cities, coordinates':
    'Ara — konum, şehir ve koordinat bul',
  'Search': 'Ara',
  'SEARCH': 'ARA',
  'ArcGIS — search & import geospatial intel layers':
    'ArcGIS — coğrafi istihbarat katmanlarını ara ve içe aktar',
  'ArcGIS': 'ArcGIS',
  'ARCGIS': 'ARCGIS',
  'World Remote — control nearby Bluetooth devices (TVs, speakers, AC)':
    'Dünya Kumandası — yakındaki Bluetooth cihazlarını kontrol et (TV, hoparlör, klima)',
  'World Remote': 'Dünya Kumandası',
  'REMOTE': 'KUMANDA',

  /* ── Map view controls ──────────────────────────────────────────────── */
  '3D Globe': '3B Küre',
  '2D Map': '2B Harita',
  'Night Mode': 'Gece Modu',
  'Satellite View': 'Uydu Görünümü',
  'MAP': 'HARİTA',
  'SAT': 'UYDU',

  /* ── OI pointer card ────────────────────────────────────────────────── */
  'CLICK TO OPEN': 'AÇMAK İÇİN TIKLAYIN',

  /* ── Live feed overlay ──────────────────────────────────────────────── */
  'LIVE STREAM': 'CANLI YAYIN',
  'EXTERNAL ONLY': 'SADECE DIŞ BAĞLANTI',
  'Open in YouTube': 'YouTube’da Aç',
  'EMBED RESTRICTED': 'GÖMME KISITLI',
  'does not allow third-party embedding. Click below to open the live stream directly.':
    'üçüncü taraf gömmeye izin vermiyor. Canlı yayını doğrudan açmak için aşağıya tıklayın.',
  'OPEN LIVE STREAM': 'CANLI YAYINI AÇ',
  /* The two halves sit either side of the styled "Open in YouTube" link. */
  'If you see “Video unavailable”, use':
    '“Video kullanılamıyor” görüyorsanız yukarıdaki',
  'above.': 'düğmesini kullanın.',

  /* ── Mobile drawer ──────────────────────────────────────────────────── */
  'INTEL': 'İSTİHBARAT',
  'LAYERS & STATS': 'KATMANLAR & İSTATİSTİKLER',
  'MARKETS & INTEL': 'PİYASALAR & İSTİHBARAT',
  'INTEL FEED': 'İSTİHBARAT AKIŞI',
  'GÖKSEL RECON': 'GÖKSEL KEŞİF',
  'WORLD REMOTE': 'DÜNYA KUMANDASI',
  'GÖKSEL OI': 'GÖKSEL OI',

  /* ── Bottom cursor read-out ─────────────────────────────────────────── */
  'CURSOR': 'İMLEÇ',
  'LOCATION': 'KONUM',
  'HOVER MAP': 'HARİTEYE GELİN',
  'ZOOM': 'YAKINLAŞTIRMA',
  'Cursor coordinates (hover over map)': 'İmleç koordinatları (haritenin üzerine gelin)',
  'Reverse-geocoded location name': 'Ters coğrafi kodlanmış konum adı',
  'Current zoom level': 'Geçerli yakınlaştırma düzeyi',

  /* ── Region dossier ─────────────────────────────────────────────────── */
  'REGION DOSSIER': 'BÖLGE DOSYASI',
  'COMPILING INTEL...': 'İSTİHBARAT DERLENİYOR...',
  'COUNTRY': 'ÜLKE',
  'CAPITAL': 'BAŞKENT',
  'POPULATION': 'NÜFUS',
  'REGION': 'BÖLGE',
  'LANGUAGES': 'DİLLER',
  'AREA': 'ALAN',
  'HEAD OF STATE': 'DEVLET BAŞKANI',
  'INTELLIGENCE BRIEF': 'İSTİHBARAT ÖZETİ',

  /* ── Keyboard shortcut hint ─────────────────────────────────────────── */
  'Press ? to see all keyboard shortcuts': 'Tüm klavye kısayollarını görmek için ? tuşuna basın',
  /* "Press ? for shortcuts" is one sentence split around the styled "?":
     in Turkish the two halves swap place. */
  'Press': 'Kısayollar için',
  'for shortcuts': 'tuşuna basın',
  'fullscreen': 'tam ekran',
  'reset view': 'görünümü sıfırla',

  /* ── SupportMenu ────────────────────────────────────────────────────── */
  'SUPPORT': 'DESTEK',
  'SUPPORT ON KO-FI': 'KO-FI ÜZERİNDEN DESTEKLE',
  'Tip once or monthly': 'Bir seferlik ya da aylık destek ol',
  'BUY MERCH': 'MAĞAZADAN AL',

  /* ── TokenPanel ─────────────────────────────────────────────────────── */
  '$OSIRIS LIVE CHART': '$OSIRIS CANLI GRAFİK',

  /* ── LanguageSwitcher ───────────────────────────────────────────────── */
  'Language': 'Dil',
  'Switch to English': 'İngilizceye geç',
  'Switch to Turkish': 'Türkçeye geç',
};
