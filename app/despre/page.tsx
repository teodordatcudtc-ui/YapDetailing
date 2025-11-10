import type { Metadata } from 'next'
import './despre.css'

export const metadata: Metadata = {
  title: 'Despre Noi',
  description: 'Yap Detailing - Echipa noastră de profesioniști cu experiență în detailing auto premium. Procesul nostru pas cu pas pentru rezultate perfecte.',
  openGraph: {
    title: 'Despre Yap Detailing',
    description: 'Echipa noastră și procesul nostru de lucru pentru rezultate premium.',
  },
}

const teamMembers = [
  {
    name: 'Echipa Yap Detailing',
    role: 'Specialiști Detailing',
    description: 'Echipa noastră este formată din profesioniști cu experiență în detailing auto premium, dedicați să ofere cele mai bune rezultate.',
  },
]

const processSteps = [
  {
    step: 1,
    title: 'Consultație',
    description: 'Analizăm nevoile tale și propunem soluția optimă pentru mașina ta.',
  },
  {
    step: 2,
    title: 'Pregătire',
    description: 'Curățare profundă inițială și pregătirea suprafețelor pentru tratament.',
  },
  {
    step: 3,
    title: 'Aplicare',
    description: 'Aplicăm produsele premium cu tehnici profesionale și atenție la detalii.',
  },
  {
    step: 4,
    title: 'Finisare',
    description: 'Finisare perfectă și verificare finală pentru rezultate impecabile.',
  },
  {
    step: 5,
    title: 'Livrare',
    description: 'Livrăm mașina ta cu grijă și oferim instrucțiuni de întreținere.',
  },
]

const values = [
  {
    title: 'Calitate Premium',
    description: 'Folosim doar produse de cea mai înaltă calitate și tehnologii de ultimă generație.',
  },
  {
    title: 'Atenție la Detalii',
    description: 'Fiecare detaliu contează pentru noi, de la pregătire până la finisare.',
  },
  {
    title: 'Experiență',
    description: 'Ani de experiență în detailing auto premium și mii de mașini transformate.',
  },
  {
    title: 'Garantie',
    description: 'Oferim garanții clare pentru toate serviciile noastre.',
  },
]

export default function DesprePage() {
  return (
    <div className="despre-page">
      <section className="section despre-hero">
        <div className="container">
          <h1 className="despre-hero__title">Despre Yap Detailing</h1>
          <p className="despre-hero__description">
            Suntem dedicați să oferim servicii premium de detailing auto, 
            transformând fiecare mașină într-o operă de artă.
          </p>
        </div>
      </section>

      <section className="section echipa-section">
        <div className="container">
          <h2 className="section-title">Echipa Noastră</h2>
          <div className="echipa-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="echipa-card">
              <div className="echipa-card__image">
                <svg className="echipa-card__placeholder" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
                <h3 className="echipa-card__name">{member.name}</h3>
                <p className="echipa-card__role">{member.role}</p>
                <p className="echipa-card__description">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section valori-section">
        <div className="container">
          <h2 className="section-title">Valorile Noastre</h2>
          <div className="valori-grid">
            {values.map((value, index) => (
              <div key={index} className="valoare-card">
                <h3 className="valoare-card__title">{value.title}</h3>
                <p className="valoare-card__description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section proces-section">
        <div className="container">
          <h2 className="section-title">Cum Lucrăm</h2>
          <p className="section-description">
            Procesul nostru pas cu pas pentru rezultate perfecte
          </p>
          <div className="proces-steps">
            {processSteps.map((step) => (
              <div key={step.step} className="proces-step">
                <div className="proces-step__number">{step.step}</div>
                <div className="proces-step__content">
                  <h3 className="proces-step__title">{step.title}</h3>
                  <p className="proces-step__description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

