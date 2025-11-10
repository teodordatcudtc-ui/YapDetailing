import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import FeaturesSection from '@/components/FeaturesSection'
import Link from 'next/link'
import './page.css'

export const metadata: Metadata = {
  title: 'Acasă',
  description: 'Yap Detailing — Redefinim strălucirea mașinii tale. Protecție ceramică, PPF și detailing interior premium în Cățelu. Servicii profesionale de detailing auto.',
  openGraph: {
    title: 'Yap Detailing — Redefinim strălucirea mașinii tale',
    description: 'Protecție ceramică, PPF și detailing interior premium în Cățelu.',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      
      <section className="section services-preview">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Servicii Premium</h2>
            <p className="section-description">
              Oferim soluții complete de protecție și întreținere pentru mașina ta
            </p>
            <Link href="/servicii" className="services-preview__cta">
              <span>Vezi toate serviciile</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </Link>
          </div>
          
          <div className="services-grid">
            <ServiceCard
              title="Ceramic Coating"
              description="Protecție durabilă de 9H pentru vopsea, cu efect hidrofob și ușor de întreținut."
              image="/images/services/ceramic-coating.jpg"
              href="/servicii/ceramic-coating"
              features={[
                'Protecție 9H durabilă',
                'Efect hidrofob',
                'Ușor de întreținut',
                'Garantie 2-5 ani'
              ]}
            />
            <ServiceCard
              title="PPF (Paint Protection Film)"
              description="Film transparent de protecție care previn zgârieturile și impacturile minore."
              image="/images/services/ppf.jpg"
              href="/servicii/ppf"
              features={[
                'Protecție maximă',
                'Invisible',
                'Auto-healing',
                'Garantie 10 ani'
              ]}
            />
            <ServiceCard
              title="Detailing Interior"
              description="Curățare profundă și restaurare completă a interiorului mașinii tale."
              image="/images/services/interior.jpg"
              href="/servicii/detailing-interior"
              features={[
                'Curățare profundă',
                'Protecție scaune',
                'Dezinfecție UV',
                'Restaurare completă'
              ]}
            />
          </div>
        </div>
      </section>

      <FeaturesSection />

      <TestimonialCarousel />

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Gata să îți transformi mașina?</h2>
            <p className="cta-description">
              Programează o consultație gratuită și descoperă ce servicii sunt perfecte pentru tine.
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="cta-button cta-button--primary">
                Programează acum
              </Link>
              <a href="tel:0765432706" className="cta-button cta-button--secondary">
                Sună: 0765432706
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

