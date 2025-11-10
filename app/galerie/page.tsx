import type { Metadata } from 'next'
import GalleryGrid from '@/components/GalleryGrid'
import './galerie.css'

export const metadata: Metadata = {
  title: 'Galerie',
  description: 'Galerie foto cu transformări spectaculoase realizate de Yap Detailing. Before/After, ceramic coating, PPF, detailing interior și exterior.',
  openGraph: {
    title: 'Galerie | Yap Detailing',
    description: 'Vezi transformările spectaculoase realizate de echipa noastră.',
  },
}

export default function GaleriePage() {
  return (
    <div className="galerie-page">
      <section className="section galerie-hero">
        <div className="container">
          <h1 className="galerie-hero__title">Galerie</h1>
          <p className="galerie-hero__description">
            Explorează transformările spectaculoase realizate de echipa noastră
          </p>
        </div>
      </section>

      <section className="section galerie-content">
        <div className="container">
          <GalleryGrid />
        </div>
      </section>
    </div>
  )
}

