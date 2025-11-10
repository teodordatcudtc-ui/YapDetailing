import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import './servicii.css'

export const metadata: Metadata = {
  title: 'Servicii',
  description: 'Servicii complete de detailing auto: Ceramic Coating, PPF, detailing interior, polish, protecție vopsea. Tehnologie premium și rezultate garantate.',
  openGraph: {
    title: 'Servicii Detailing Premium | Yap Detailing',
    description: 'Ceramic Coating, PPF, detailing interior și multe altele. Servicii profesionale de detailing auto în Cățelu.',
  },
}

const services = [
  {
    id: 'ceramic-coating',
    title: 'Ceramic Coating',
    description: 'Protecție durabilă de 9H pentru vopsea, cu efect hidrofob și ușor de întreținut.',
    fullDescription: 'Ceramic Coating este cea mai avansată tehnologie de protecție pentru vopsea. Oferă protecție de 9H (mai dură decât vopseaua originală), efect hidrofob puternic și ușurință de întreținere. Acoperirea ceramică creează un strat transparent care protejează împotriva UV, contaminanților, apă și zgârieturilor minore.',
    image: 'placeholder',
    features: [
      'Protecție 9H durabilă',
      'Efect hidrofob puternic',
      'Protecție UV',
      'Ușor de întreținut',
      'Garantie 2-5 ani',
      'Strălucire profundă'
    ],
    price: 'de la 1500 RON',
    duration: '2-3 zile'
  },
  {
    id: 'ppf',
    title: 'PPF (Paint Protection Film)',
    description: 'Film transparent de protecție care previn zgârieturile și impacturile minore.',
    fullDescription: 'Paint Protection Film (PPF) este un film transparent de înaltă calitate aplicat pe zonele vulnerabile ale mașinii. Filmul oferă protecție maximă împotriva zgârieturilor, ciobiturilor de pietriș, impacturilor minore și are proprietăți auto-healing pentru zgârieturile de suprafață.',
    image: 'placeholder',
    features: [
      'Protecție maximă împotriva zgârieturilor',
      'Invisible - păstrează aspectul original',
      'Auto-healing pentru zgârieturile de suprafață',
      'Protecție UV',
      'Garantie 10 ani',
      'Aplicare precisă pe zone vulnerabile'
    ],
    price: 'de la 2000 RON',
    duration: '3-5 zile'
  },
  {
    id: 'detailing-interior',
    title: 'Detailing Interior',
    description: 'Curățare profundă și restaurare completă a interiorului mașinii tale.',
    fullDescription: 'Serviciul nostru de detailing interior include curățare profundă a tuturor suprafețelor, tratament pentru scaune de piele, curățare covorașe, dezinfecție UV, protecție pentru scaune și restaurare completă a aspectului interiorului.',
    image: 'placeholder',
    features: [
      'Curățare profundă completă',
      'Tratament și protecție scaune piele',
      'Curățare și protecție covorașe',
      'Dezinfecție UV',
      'Restaurare aspect original',
      'Protecție durabilă'
    ],
    price: 'de la 400 RON',
    duration: '1 zi'
  },
  {
    id: 'polish',
    title: 'Polish & Corecție Vopsea',
    description: 'Eliminarea zgârieturilor și restaurarea strălucirii vopselei originale.',
    fullDescription: 'Serviciul de polish și corecție vopsea elimină zgârieturile fine, swirl marks, holograme și restabilește strălucirea și adâncimea vopselei originale. Folosim produse premium și tehnici profesionale pentru rezultate perfecte.',
    image: 'placeholder',
    features: [
      'Eliminare zgârieturile fine',
      'Corecție swirl marks',
      'Restaurare strălucire',
      'Protecție finală',
      'Rezultate garantate',
      'Tehnologie premium'
    ],
    price: 'de la 600 RON',
    duration: '1-2 zile'
  },
  {
    id: 'detailing-complet',
    title: 'Detailing Complet',
    description: 'Pachet complet care include toate serviciile pentru o transformare totală.',
    fullDescription: 'Pachetul complet de detailing include toate serviciile: curățare exterior și interior, polish, corecție vopsea, protecție ceramică sau PPF, și multe altele. Ideal pentru o transformare completă a mașinii tale.',
    image: 'placeholder',
    features: [
      'Toate serviciile incluse',
      'Curățare completă exterior',
      'Curățare completă interior',
      'Polish și corecție',
      'Protecție ceramică sau PPF',
      'Rezultate spectaculoase'
    ],
    price: 'de la 3000 RON',
    duration: '5-7 zile'
  },
]

export default function ServiciiPage() {
  return (
    <div className="servicii-page">
      <section className="section servicii-hero">
        <div className="container">
          <h1 className="servicii-hero__title">Servicii Premium</h1>
          <p className="servicii-hero__description">
            Oferim soluții complete de protecție și întreținere pentru mașina ta, 
            folosind tehnologie de ultimă generație și produse premium.
          </p>
        </div>
      </section>

      <section className="section servicii-list">
        <div className="container">
          <div className="servicii-grid">
            {services.map((service, index) => (
            <div key={service.id} className={`serviciu-card ${index % 2 === 0 ? 'serviciu-card--image-left' : 'serviciu-card--image-right'}`}>
              <div className="serviciu-card__image-wrapper">
                {service.image && service.image !== 'placeholder' && !service.image.includes('placeholder') ? (
                  <div
                    className="serviciu-card__image"
                    style={{ backgroundImage: `url(${service.image})` }}
                    aria-hidden="true"
                  />
                ) : (
                  <div className="serviciu-card__image serviciu-card__image--placeholder">
                    <div className="serviciu-card__placeholder-pattern"></div>
                    <svg className="serviciu-card__placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" strokeDasharray="2 2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  </div>
                )}
              </div>
                <div className="serviciu-card__content">
                  <h2 className="serviciu-card__title">{service.title}</h2>
                  
                  <div className="serviciu-card__details">
                    <div className="serviciu-card__detail">
                      <strong>Preț:</strong> {service.price}
                    </div>
                    <div className="serviciu-card__detail">
                      <strong>Durată:</strong> {service.duration}
                    </div>
                  </div>

                  <div className="serviciu-card__features">
                    <h3 className="serviciu-card__features-title">Beneficii:</h3>
                    <ul className="serviciu-card__features-list">
                      {service.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact" className="serviciu-card__cta">
                    Programează acum
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section servicii-cta">
        <div className="container">
          <div className="servicii-cta__content">
            <h2 className="servicii-cta__title">Ai întrebări despre servicii?</h2>
            <p className="servicii-cta__description">
              Contactează-ne pentru o consultație gratuită și un plan personalizat.
            </p>
            <div className="servicii-cta__buttons">
              <Link href="/contact" className="serviciu-cta-button serviciu-cta-button--primary">
                Contactează-ne
              </Link>
              <a href="tel:0765432706" className="serviciu-cta-button serviciu-cta-button--secondary">
                Sună: 0765432706
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

