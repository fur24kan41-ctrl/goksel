/** Turkish strings for src/components/OsintPanel.tsx */
export const trOsintPanel: Record<string, string> = {
  /* ── Tool groups (labels rendered; hints are never shown) ── */
  'NETWORK & HOST': 'AĞ VE HOST',
  'DOMAIN & WEB': 'ALAN ADI VE WEB',
  'IDENTITY': 'KİMLİK',
  'THREAT & EXPOSURE': 'TEHDİT VE MARUZİYET',
  'BLOCKCHAIN': 'BLOKZİNCİR',

  /* ── Tool tab labels ── */
  'PORT SCAN': 'PORT TARAMASI',
  'VULN SWEEP': 'ZAFİYET TARAMASI',
  'BGP ROUTE': 'BGP ROTA',
  'MAC ADDR': 'MAC ADRES',
  'IP SWEEP': 'IP TARAMASI',
  'CERTS': 'SERTİFİKALAR',
  'SUBDOMAINS': 'ALT ALAN ADLARI',
  'HEADERS': "HEADER'LAR",
  'TECH DETECT': 'TEKNOLOJİ TESPİTİ',
  'USERNAME': 'KULLANICI ADI',
  'GITHUB RECON': 'GITHUB İSTİHBARAT',
  'PHONE INTEL': 'TELEFON İSTİHBARATI',
  'FINGERPRINT': 'PARMAK İZİ',
  'THREATS': 'TEHDİTLER',
  'DATA LEAKS': 'VERİ SIZINTILARI',
  'CHAIN INTEL': 'ZİNCİR İSTİHBARATI',
  /* DNS, WHOIS, SSL/TLS, SHODAN IOT, DONBOT are acronyms/brands — unchanged */

  /* ── Tool blurbs ── */
  'Open ports and running services': 'Açık portlar ve çalışan servisler',
  'Known CVEs affecting the host': "Hostu etkileyen bilinen CVE'ler",
  'Internet-exposed device record': 'İnternete açık cihaz kaydı',
  'Autonomous system and prefixes': 'Otonom sistem ve önekler',
  'Hardware vendor lookup': 'Donanım üreticisi sorgusu',
  'Scan an entire subnet': 'Bütün bir alt ağı tara',
  'All record types': 'Tüm kayıt türleri',
  'Registrar and ownership': 'Tescil kuruluşu ve sahiplik',
  'Certificate transparency log': 'Sertifika şeffaflık kaydı',
  'Cipher and certificate health': 'Şifreleme ve sertifika sağlığı',
  'Domain to enumerate': 'Listalanacak alan adı',
  'URL to inspect': 'İncelenecek URL',
  'Security headers audit': 'Güvenlik header denetimi',
  'URL to fingerprint': 'Parmak izi alınacak URL',
  "Frameworks and stack": "Framework'ler ve teknoloji yığını",
  'Username / handle to hunt': 'Aranacak kullanıcı adı / rumuz',
  'Hunt a handle across platforms': 'Rumuzu platformlar arasında ara',
  'GitHub username': 'GitHub kullanıcı adı',
  'Profile, repos and contacts': 'Profil, depolar ve iletişim',
  'Phone number (e.g. +1...)': 'Telefon numarası (örn. +90...)',
  'Carrier, region and line type': 'Operatör, bölge ve hat türü',
  'Username, email or phone': 'Kullanıcı adı, e-posta veya telefon',
  'Public profile search, streamed live': 'Genel profil araması, canlı akış',
  'IP, domain, or hash': 'IP, alan adı veya hash',
  'Reputation across feeds': 'Tehdit kaynaklarında itibar',
  'Breach exposure for an address': 'Bir adres için ihlal maruziyeti',
  'Wallet forensics and daily brief': 'Cüzdan adli incelemesi ve günlük özet',
  'Token signal and holder clusters': 'Token sinyali ve sahip kümeleri',

  /* ── Query-bar placeholders ── */
  'IP or hostname': 'IP veya host adı',
  'IP address': 'IP adresi',
  'IP or ASN': 'IP veya ASN',
  'MAC address': 'MAC adresi',
  'Enter IP address (e.g. 8.8.8.8)': 'IP adresi girin (örn. 8.8.8.8)',
  'Domain name': 'Alan adı',
  'Email address': 'E-posta adresi',
  'BTC, ETH or SOL wallet address': 'BTC, ETH veya SOL cüzdan adresi',
  'Ticker, name or contract address': 'Sembol, ad veya kontrat adresi',

  /* ── Lookup flow: status & errors ── */
  'Could not retrieve your IP location.': 'IP konumunuz alınamadı.',
  'Network error': 'Ağ hatası',
  'Sweep failed': 'Tarama başarısız oldu',
  'Server returned': 'Sunucu döndü',
  'No Shodan InternetDB records found': 'Shodan InternetDB kaydı bulunamadı',
  'Lookup failed': 'Sorgulama başarısız oldu',

  /* ── Shared result widgets ── */
  'SANCTIONED': 'YAPTIRIM UYGULANAN',
  'OPEN': 'AÇIK',
  'CLOSED': 'KAPALI',
  'FILTERED': 'FİLTRELENMİŞ',
  'unknown': 'bilinmiyor',
  'Source': 'Kaynak',
  'Sources': 'Kaynaklar',
  'Query': 'Sorgu',
  'Target': 'Hedef',
  'Domain': 'Alan Adı',
  'Country': 'Ülke',
  'Description': 'Açıklama',
  'Name': 'Ad',
  'Status': 'Durum',
  'Valid': 'Geçerli',
  'YES': 'EVET',
  'NO': 'HAYIR',
  'Tags': 'Etiketler',
  'more': 'daha fazla',

  /* ── PORT SCAN ── */
  'HOST INFO': 'HOST BİLGİSİ',
  'Scan Type': 'Tarama Türü',
  'Duration': 'Süre',
  'OPEN PORTS': 'AÇIK PORTLAR',

  /* ── VULN SWEEP ── */
  'VULNERABILITY ASSESSMENT': 'ZAFİYET DEĞERLENDİRMESİ',
  'Total CVEs': 'Toplam CVE',
  'Risk Level': 'Risk Seviyesi',
  "POSSIBLE EXPLOITS": "OLASI EXPLOIT'LER",
  'UNKNOWN': 'BİLİNMEYEN',

  /* ── DNS ── */
  'DNS RECORDS': 'DNS KAYITLARI',
  'A Records': 'A Kayıtları',

  /* ── WHOIS ── */
  'WHOIS INTELLIGENCE': 'WHOIS İSTİHBARATI',
  'Registrar': 'Tescil Kuruluşu',
  'Created': 'Oluşturulma',
  'Expires': 'Bitiş Tarihi',
  'Updated': 'Güncellenme',
  'Nameservers': 'Ad Sunucuları',

  /* ── SHODAN IOT ── */
  'SHODAN IOT INTELLIGENCE': 'SHODAN IOT İSTİHBARATI',
  'Target IP': 'Hedef IP',
  'Hostnames': 'Host Adları',
  'Open Ports': 'Açık Portlar',
  'VULNERABILITIES': 'ZAFİYETLER',

  /* ── BGP ROUTE ── */
  'BGP ROUTING INTELLIGENCE': 'BGP YÖNLENDİRME İSTİHBARATI',
  'Prefix': 'Önek',
  'Prefixes': 'Önekler',
  'Peers': 'Eşler',

  /* ── MAC ADDR ── */
  'MAC VENDOR LOOKUP': 'MAC ÜRETİCİ SORGUSU',
  'MAC Address': 'MAC Adresi',
  'Vendor': 'Üretici',

  /* ── PHONE INTEL ── */
  'PHONE INTELLIGENCE': 'TELEFON İSTİHBARATI',
  'E.164 Format': 'E.164 Biçimi',
  'Intl Format': 'Uluslararası Biçim',
  'Nat Format': 'Yerel Biçim',
  'Line Type': 'Hat Türü',

  /* ── GITHUB RECON ── */
  'avatar': 'profil fotoğrafı',
  'followers': 'takipçi',
  'Company': 'Şirket',
  'Location': 'Konum',
  'Email': 'E-posta',
  'Website': 'Web Sitesi',
  'Bio': 'Biyografi',
  'RECENT REPOS': 'SON DEPOLAR',
  'Unknown': 'Bilinmiyor',

  /* ── USERNAME ── */
  'USERNAME HUNT': 'KULLANICI ADI AVI',
  'FOUND': 'BULUNDU',
  'UNSURE': 'KESİN DEĞİL',
  'BLOCKED': 'ENGELLENDİ',
  'CHECKED': 'KONTROL EDİLDİ',
  'Handle': 'Rumuz',
  'Coverage': 'Kapsam',
  'of': '/',
  'sites': 'site',
  'ruled out': 'elendi',
  'Elapsed': 'Geçen Süre',
  'CONFIRMED ACCOUNTS': 'DOĞRULANMIŞ HESAPLAR',
  'UNVERIFIABLE': 'DOĞRULANAMAZ',
  'These sites answered "exists" for a random control handle too, so a hit here is not evidence of an account.':
    'Bu siteler rastgele bir kontrol rumuzuna da "var" yanıtı verdi; buradaki bir eşleşme hesap kanıtı değildir.',
  'BLOCKED — NOT CHECKED': 'ENGELLENDİ — KONTROL EDİLMEDİ',
  'These sites refused the lookup, so nothing was learned either way — an account here is neither confirmed nor ruled out.':
    'Bu siteler sorguyu reddetti; her iki yönde de bilgi edinilemedi — buradaki bir hesap ne doğrulanan ne de elenendir.',
  'check manually': 'elle kontrol edin',
  'UNREACHABLE': 'ULAŞILAMADI',
  'NOT APPLICABLE': 'UYGUN DEĞİL',
  "the handle does not meet these sites' username rules.":
    'rumuz bu sitelerin kullanıcı adı kurallarına uymuyor.',
  'Every positive re-tested against a random control handle; sites that accepted it are listed as unverifiable. Calibration catches most soft 404s but is not exhaustive — confirm before acting.':
    "Her olumlu sonuç rastgele bir kontrol rumuzuna karşı yeniden test edildi; onu kabul eden siteler doğrulanamaz olarak listelendi. Kalibrasyon çoğu soft 404'ü yakalar ama kapsamlı değildir — harekete geçmeden önce doğrulayın.",
  'Calibration disabled — positives are unfiltered and include soft 404s.':
    "Kalibrasyon kapalı — olumlu sonuçlar filtrelenmedi ve soft 404'leri içeriyor.",

  /* ── CHAIN INTEL ── */
  'CHAIN INTEL — DAILY BRIEF': 'ZİNCİR İSTİHBARATI — GÜNLÜK ÖZET',
  'OFAC SANCTIONED WALLET': 'OFAC YAPTIRIMLI CÜZDAN',
  'RISK': 'RİSK',
  'Address': 'Adres',
  'Balance': 'Bakiye',
  'Value (USD)': 'Değer (USD)',
  'price unavailable': 'fiyat yok',
  'Spot price': 'Anlık Fiyat',
  'Transactions': 'İşlemler',
  'Last active': 'Son Aktif',
  'Age': 'Yaş',
  /* "12d ago" — the value keeps the number glued to the word in English */
  'd ago': ' gün önce',
  'days': 'gün',
  'unknown — history exceeds sample': 'bilinmiyor — geçmiş örneklemi aşıyor',
  'Note': 'Not',
  'Address format is valid on both Bitcoin and Solana; assumed Bitcoin.':
    'Adres biçimi hem Bitcoin hem Solana üzerinde geçerli; Bitcoin varsayıldı.',
  'FLOW': 'AKIŞ',
  'Total in': 'Toplam Giriş',
  'Total out': 'Toplam Çıkış',
  'Net': 'Net',
  'RISK FACTORS': 'RİSK FAKTÖRLERİ',
  'TOP COUNTERPARTIES': 'ÖNE ÇIKAN KARŞI TARAFLAR',
  'OUT': 'ÇIKIŞ',
  'IN': 'GİRİŞ',
  'BOTH': 'İKİSİ',
  "TOKENS": "TOKEN'LAR",
  'RECENT TRANSACTIONS': 'SON İŞLEMLER',
  'pending': 'beklemede',
  'FAIL': 'HATA',
  'COVERAGE LIMITS': 'KAPSAM SINIRLARI',
  'sampled': 'örneklem',
  '(full history)': '(tam geçmiş)',
  'of a longer history': 'daha uzun bir geçmişten',

  /* ── DATA LEAKS ── */
  'DATA LEAK SWEEP': 'VERİ SIZINTI TARAMASI',
  'Email Target': 'Hedef E-posta',
  'COMPROMISED': 'SIZMIŞ',
  'SECURE': 'GÜVENLİ',
  'EXPOSED DATA POINTS': 'MARUZ KALAN VERİ NOKTALARI',
  'KNOWN BREACHES': 'BİLİNEN İHLALLER',

  /* ── CERTS ── */
  'CERTIFICATE TRANSPARENCY': 'SERTİFİKA ŞEFFAFLIĞI',
  'Certificates': 'Sertifikalar',
  'Issuer': 'Veren Kuruluş',
  'Common Name': 'Ortak Ad',
  'Not Before': 'Geçerlilik Başlangıcı',
  'Not After': 'Geçerlilik Sonu',

  /* ── THREATS ── */
  'THREAT INTELLIGENCE': 'TEHDİT İSTİHBARATI',
  'Risk Score': 'Risk Puanı',
  'Malicious': 'Kötü Amaçlı',
  'Category': 'Kategori',
  'Reports': 'Raporlar',
  'Last Seen': 'Son Görülme',

  /* ── SSL/TLS ── */
  'SSL/TLS ANALYSIS': 'SSL/TLS ANALİZİ',
  'Protocol': 'Protokol',
  'Cipher': 'Şifreleme',
  'Subject': 'Konu',

  /* ── Tool rail & grid ── */
  'Filter tools…': 'Araçları filtrele…',
  'No tool matches': 'Eşleşen araç yok',
  'TRACKING…': 'İZLENİYOR…',
  'SELF TRACK': 'KENDİNİ İZLE',
  'GLOBAL SWEEP': 'GLOBAL TARAMA',
  'TRACKING...': 'İZLENİYOR...',
  'DAILY BRIEF': 'GÜNLÜK ÖZET',
  'WALLET FORENSICS': 'CÜZDAN ADLİ İNCELEMESİ',
  'SCAN': 'TARA',
  'QUICK SCAN': 'HIZLI TARAMA',
  'DEEP SCAN': 'DERİN TARAMA',
  'TOP 1000 PORTS': 'İLK 1000 PORT',
  'SUBNET MASK:': 'ALT AĞ MASKESİ:',

  /* ── IP sweep results ── */
  'SWEEPING SUBNET...': 'ALT AĞ TARANIYOR...',
  'hosts': 'host',
  'DEVICES FOUND': 'BULUNAN CİHAZLAR',
  'VISUALIZE ON GLOBE': 'KÜREDE GÖRSELLEŞTİR',
  'Ports': 'Portlar',
  'Identified Vulnerabilities': 'Tespit Edilen Zafiyetler',
  'No reverse DNS': 'Ters DNS yok',
  'Vulnerabilities': 'Zafiyetler',
  'Fetching vulnerability intelligence...': 'Zafiyet istihbaratı alınıyor...',
  'Weakness': 'Zayıflık',
  'SWEPT': 'TARANAN',
  'HOSTS': 'HOST',
  'in': 'içinde',

  /* ── Results chrome & history ── */
  'RESULTS': 'SONUÇLAR',
  'RECENT SCANS': 'SON TARAMALAR',

  /* ── Panel chrome ── */
  'GÖKSEL RECON TOOLKIT': 'GÖKSEL İSTİHBARAT ARAÇ SETİ',
  'RECON TOOLKIT': 'İSTİHBARAT ARAÇ SETİ',
  'MODULES': 'MODÜL',
  'TOOLS': 'ARAÇ',
  'Exit expanded view (Esc)': 'Genişletilmiş görünümden çık (Esc)',
  'Full Screen': 'Tam Ekran',
};
