import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import './contact.css'

export const metadata: Metadata = {
  title: 'Contact & Programări',
  description: 'Contactează Yap Detailing pentru programări și consultații. Telefon: 0765432706. Adresă: Str. Libertății 62, Cățelu 077105.',
  openGraph: {
    title: 'Contact | Yap Detailing',
    description: 'Programează o consultație gratuită sau contactează-ne pentru întrebări.',
  },
}

export default function ContactPage() {
  return (
    <div className="contact-page">
      <section className="section contact-hero">
        <div className="container">
          <h1 className="contact-hero__title">Contact & Programări</h1>
          <p className="contact-hero__description">
            Suntem aici să te ajutăm să transformi mașina ta
          </p>
        </div>
      </section>

      <section className="section contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="contact-info__title">Date de Contact</h2>
              
              <div className="contact-info__item">
                <h3 className="contact-info__label">Telefon</h3>
                <a href="tel:0765432706" className="contact-info__value">
                  0765432706
                </a>
              </div>

              <div className="contact-info__item">
                <h3 className="contact-info__label">Adresă</h3>
                <address className="contact-info__value">
                  Str. Libertății 62<br />
                  Cățelu 077105
                </address>
              </div>

              <div className="contact-info__item">
                <h3 className="contact-info__label">Program</h3>
                <div className="contact-info__value">
                  <p><strong>Luni - Vineri:</strong> 09:00 - 18:00</p>
                  <p><strong>Sâmbătă:</strong> 09:00 - 14:00</p>
                  <p><strong>Duminică:</strong> Închis</p>
                </div>
              </div>

              <div className="contact-info__item">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=44.404866203491906,26.207526176561863"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info__button"
                >
                  Deschide în Google Maps
                </a>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2 className="contact-form-wrapper__title">Trimite un Mesaj</h2>
              <ContactForm />
            </div>
          </div>

          <div className="contact-map">
            <h2 className="contact-map__title">Locația Noastră</h2>
            <div className="contact-map__embed">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.379088138946!2d26.207526176561863!3d44.404866203491906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1fd761284ae69%3A0x382e5df810318f37!2sYap%20Detailing!5e0!3m2!1sen!2sro!4v1762780493374!5m2!1sen!2sro"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locația Yap Detailing"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

