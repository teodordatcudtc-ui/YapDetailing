# Yap Detailing - Site Web Premium

Site web complet și funcțional pentru garajul de detailing "Yap Detailing", construit cu Next.js 14, TypeScript și design premium.

## 📋 Conținut Proiect

Proiectul include:
- ✅ Pagini complete (Acasă, Servicii, Galerie, Despre, Contact)
- ✅ Design premium, mobile-first
- ✅ SEO complet (meta tags, Open Graph, JSON-LD schema)
- ✅ Sitemap.xml și robots.txt
- ✅ Formulare funcționale cu fallback mailto
- ✅ Animații și micro-interacțiuni premium
- ✅ Before/After slider interactiv
- ✅ Galerie cu filtru și lightbox
- ✅ Optimizări performanță și accesibilitate

## 🚀 Comenzi pe care trebuie să le rulezi

### Instalare dependențe

```bash
npm install
```

### Rulare în modul development

```bash
npm run dev
```

Site-ul va fi disponibil la `http://localhost:3000`

### Build pentru producție

```bash
npm run build
```

### Preview build-ului de producție

```bash
npm run start
```

### Lint (verificare cod)

```bash
npm run lint
```

## 📁 Structura Proiectului

```
yap-detailing/
├── app/                    # Pagini Next.js (App Router)
│   ├── page.tsx           # Pagina Acasă
│   ├── servicii/          # Pagina Servicii
│   ├── galerie/           # Pagina Galerie
│   ├── despre/            # Pagina Despre
│   ├── contact/           # Pagina Contact
│   ├── layout.tsx         # Layout principal
│   └── globals.css        # Stiluri globale
├── components/            # Componente reutilizabile
│   ├── Header.tsx         # Header cu navigare
│   ├── Footer.tsx         # Footer
│   ├── Hero.tsx           # Hero section
│   ├── BeforeAfterSlider.tsx  # Slider before/after
│   ├── ServiceCard.tsx    # Card servicii
│   ├── GalleryGrid.tsx    # Grilă galerie
│   ├── ContactForm.tsx    # Formular contact
│   └── ...
├── public/                # Fișiere statice
│   ├── robots.txt         # Robots.txt
│   ├── manifest.json      # PWA manifest
│   └── images/            # Imagini (de adăugat)
└── package.json           # Dependențe
```

## 🖼️ Înlocuire Imagini

### Imagini necesare

1. **Hero Image** (`/public/images/hero.jpg`)
   - Dimensiuni recomandate: 1920x1080px (16:9)
   - Format: WebP + JPG fallback
   - Conținut: Automobil în atelier Yap Detailing

2. **Imagini Servicii** (`/public/images/services/`)
   - `ceramic-coating.jpg` - 800x600px
   - `ppf.jpg` - 800x600px
   - `interior.jpg` - 800x600px
   - `polish.jpg` - 800x600px
   - `complete.jpg` - 800x600px

3. **Imagini Galerie** (`/public/images/gallery/`)
   - `exterior-1.jpg`, `exterior-2.jpg`, `exterior-3.jpg`
   - `interior-1.jpg`, `interior-2.jpg`
   - `ceramic-1.jpg`, `ceramic-2.jpg`
   - `ppf-1.jpg`, `ppf-2.jpg`
   - Dimensiuni recomandate: 1200x900px (4:3)

4. **Before/After Images** (`/public/images/before-after/`)
   - `before-1.jpg`, `after-1.jpg`
   - Dimensiuni recomandate: 1920x1080px (16:9)

5. **Open Graph Image** (`/public/og-image.jpg`)
   - Dimensiuni: 1200x630px
   - Conținut: Logo Yap Detailing sau imagine reprezentativă

6. **Favicon & Icons**
   - `favicon.ico` - 32x32px
   - `icon-192.png` - 192x192px
   - `icon-512.png` - 512x512px
   - `apple-touch-icon.png` - 180x180px

### Unde se folosesc

- **Hero**: `components/Hero.tsx` - linia cu `backgroundImage`
- **Servicii**: `components/ServiceCard.tsx` - prop `image`
- **Galerie**: `components/GalleryGrid.tsx` - array `galleryItems`
- **Before/After**: `app/page.tsx` - componenta `BeforeAfterSlider`

## 📝 Editare Conținut

### Text și informații

- **Date contact**: Deja configurate corect în:
  - `app/layout.tsx` (JSON-LD schema)
  - `components/Footer.tsx`
  - `app/contact/page.tsx`

- **Servicii**: Editează în `app/servicii/page.tsx` - array `services`

- **Testimoniale**: Editează în `components/TestimonialCarousel.tsx` - array `testimonials`

- **Proces**: Editează în `app/despre/page.tsx` - array `processSteps`

### Meta tags și SEO

- **Homepage**: `app/page.tsx` - export `metadata`
- **Alte pagini**: Fiecare pagină are propriul export `metadata`
- **Schema JSON-LD**: `app/layout.tsx` - script în `<head>`
- **Sitemap**: `app/sitemap.ts` - actualizează `baseUrl` dacă e necesar

## 🔗 Configurare Formular Contact

### Opțiunea 1: Netlify Forms

1. Adaugă atributul `data-netlify="true"` în formular (deja adăugat)
2. Adaugă câmp ascuns `form-name` (deja adăugat)
3. Deploy pe Netlify - formularul va funcționa automat

### Opțiunea 2: Formspree

1. Creează cont pe [Formspree.io](https://formspree.io)
2. Obține endpoint-ul tău
3. Editează `components/ContactForm.tsx`:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_ENDPOINT', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData),
   })
   ```

### Opțiunea 3: Tally

1. Creează formular pe [Tally.so](https://tally.so)
2. Obține link-ul de embed
3. Înlocuiește componenta `ContactForm` cu iframe Tally

### Opțiunea 4: Mailto (Fallback)

Formularul folosește deja mailto ca fallback. Asigură-te că adresa `contact@yap-detailing.ro` este configurată.

## 📊 Adăugare Analytics & Tracking

### Google Analytics 4

1. Obține Measurement ID (G-XXXXXXXXXX)
2. Creează `app/analytics.tsx`:
   ```typescript
   'use client'
   import Script from 'next/script'
   
   export default function Analytics() {
     return (
       <>
         <Script
           src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
           strategy="afterInteractive"
         />
         <Script id="google-analytics" strategy="afterInteractive">
           {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', 'G-XXXXXXXXXX');
           `}
         </Script>
       </>
     )
   }
   ```
3. Importă în `app/layout.tsx`: `<Analytics />`

### Google Tag Manager

1. Obține Container ID (GTM-XXXXXXX)
2. Adaugă în `app/layout.tsx` în `<head>`:
   ```tsx
   <Script id="google-tag-manager" strategy="afterInteractive">
     {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
     })(window,document,'script','dataLayer','GTM-XXXXXXX');`}
   </Script>
   ```

### Facebook Pixel

1. Obține Pixel ID
2. Adaugă în `app/layout.tsx`:
   ```tsx
   <Script id="facebook-pixel" strategy="afterInteractive">
     {`!function(f,b,e,v,n,t,s)
     {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
     n.callMethod.apply(n,arguments):n.queue.push(arguments)};
     if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
     n.queue=[];t=b.createElement(e);t.async=!0;
     t.src=v;s=b.getElementsByTagName(e)[0];
     s.parentNode.insertBefore(t,s)}(window, document,'script',
     'https://connect.facebook.net/en_US/fbevents.js');
     fbq('init', 'YOUR_PIXEL_ID');
     fbq('track', 'PageView');`}
   </Script>
   ```

## 🚀 Deploy

### Netlify

1. Conectează repository-ul GitHub
2. Setări build:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Variabile de mediu (dacă e nevoie)
4. Deploy!

### Vercel

1. Conectează repository-ul GitHub
2. Vercel detectează automat Next.js
3. Deploy automat la fiecare push

### Optimizări SEO Finale

1. **Verifică URL-ul în sitemap**: Actualizează `baseUrl` în `app/sitemap.ts` cu URL-ul real
2. **Google Search Console**: 
   - Adaugă proprietatea
   - Trimite sitemap-ul: `https://yap-detailing.ro/sitemap.xml`
3. **Testare Lighthouse**: Rulează test Lighthouse în Chrome DevTools și optimizează punctele slabe

## ✅ Checklist Finalizare

Toate elementele din `CHECKLIST.md` au fost finalizate și marcate ca complete.

## 📞 Suport

Pentru întrebări sau probleme, contactează echipa de dezvoltare.

---

**Proiect finalizat** ✅

Site-ul este gata pentru deploy și utilizare. Toate funcționalitățile au fost implementate conform specificațiilor.

