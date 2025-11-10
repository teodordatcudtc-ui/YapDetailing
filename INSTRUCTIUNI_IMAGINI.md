# 📸 Instrucțiuni pentru Adăugarea Imaginilor

Acest ghid te ajută să adaugi toate imaginile necesare pentru site-ul Yap Detailing.

## 📁 Structura Directoarelor

Creează următoarele directoare în `public/`:

```
public/
├── images/
│   ├── hero.jpg (sau .webp)
│   ├── services/
│   │   ├── ceramic-coating.jpg
│   │   ├── ppf.jpg
│   │   ├── interior.jpg
│   │   ├── polish.jpg
│   │   └── complete.jpg
│   ├── gallery/
│   │   ├── exterior-1.jpg
│   │   ├── exterior-2.jpg
│   │   ├── exterior-3.jpg
│   │   ├── interior-1.jpg
│   │   ├── interior-1-before.jpg (pentru before/after)
│   │   ├── interior-2.jpg
│   │   ├── ceramic-1.jpg
│   │   ├── ceramic-2.jpg
│   │   ├── ppf-1.jpg
│   │   └── ppf-2.jpg
│   └── before-after/
│       ├── before-1.jpg
│       └── after-1.jpg
├── og-image.jpg
├── favicon.ico
├── icon-192.png
├── icon-512.png
└── apple-touch-icon.png
```

## 🖼️ Specificații Imaginilor

### Hero Image
- **Locație**: `public/images/hero.jpg`
- **Dimensiuni**: 1920x1080px (16:9)
- **Format**: JPG (calitate 85-90%) sau WebP
- **Conținut**: Automobil în atelier Yap Detailing, iluminare profesională
- **Greutate**: Max 300KB (optimizat)

### Imagini Servicii
- **Locație**: `public/images/services/`
- **Dimensiuni**: 800x600px (4:3)
- **Format**: JPG sau WebP
- **Conținut**: 
  - `ceramic-coating.jpg` - Mașină cu ceramic coating aplicat
  - `ppf.jpg` - Aplicare PPF
  - `interior.jpg` - Detailing interior
  - `polish.jpg` - Proces de polish
  - `complete.jpg` - Transformare completă
- **Greutate**: Max 200KB fiecare

### Imagini Galerie
- **Locație**: `public/images/gallery/`
- **Dimensiuni**: 1200x900px (4:3)
- **Format**: JPG (calitate 85%)
- **Conținut**: Rezultate finale ale serviciilor
- **Greutate**: Max 250KB fiecare

### Before/After Images
- **Locație**: `public/images/before-after/`
- **Dimensiuni**: 1920x1080px (16:9) - **IMPORTANT**: Ambele imagini trebuie să aibă exact aceleași dimensiuni și compoziție
- **Format**: JPG
- **Conținut**: Același unghi, aceeași poziție, doar starea diferită
- **Greutate**: Max 300KB fiecare

### Open Graph Image
- **Locație**: `public/og-image.jpg`
- **Dimensiuni**: 1200x630px (exact!)
- **Format**: JPG
- **Conținut**: Logo Yap Detailing sau imagine reprezentativă
- **Greutate**: Max 200KB

### Icons & Favicon
- **favicon.ico**: 32x32px, ICO format
- **icon-192.png**: 192x192px, PNG
- **icon-512.png**: 512x512px, PNG
- **apple-touch-icon.png**: 180x180px, PNG

## 🛠️ Optimizare Imaginilor

### Recomandări

1. **Folosește WebP** când este posibil (mai mic, calitate mai bună)
2. **Comprimă imagini** cu:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - [ImageOptim](https://imageoptim.com/)

3. **Verifică dimensiunile** - nu folosi imagini mai mari decât necesar
4. **Testează pe mobil** - asigură-te că se încarcă rapid

## ✅ Checklist Adăugare Imagini

- [ ] Hero image adăugată
- [ ] Toate imaginile servicii adăugate (5 imagini)
- [ ] Imagini galerie adăugate (minim 9 imagini)
- [ ] Before/After images adăugate (perechi)
- [ ] OG image adăugată
- [ ] Favicon și iconuri adăugate
- [ ] Toate imaginile optimizate
- [ ] Testat încărcarea pe site

## 🔄 După Adăugarea Imaginilor

1. Rulează `npm run build` pentru a verifica că toate imaginile se încarcă
2. Testează site-ul în modul development: `npm run dev`
3. Verifică în browser că toate imaginile se afișează corect
4. Testează pe mobil pentru performanță

## 📝 Note

- Dacă o imagine lipsește, site-ul va afișa un placeholder
- Placeholder-urile sunt marcate clar în cod cu comentarii
- Toate căile către imagini sunt relative la `public/`
- Next.js optimizează automat imaginile la build

---

**Important**: Asigură-te că ai permisiunile pentru toate imaginile folosite!

