import Link from 'next/link'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" itemScope itemType="https://schema.org/LocalBusiness">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">Yap Detailing</h3>
            <p className="footer__description">
              Redefinim strălucirea mașinii tale cu servicii premium de detailing auto.
            </p>
            <div className="footer__social">
              <a
                href="https://www.facebook.com/yapdetailing"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/yapdetailing"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">Linkuri utile</h4>
            <ul className="footer__links">
              <li>
                <Link href="/">Acasă</Link>
              </li>
              <li>
                <Link href="/servicii">Servicii</Link>
              </li>
              <li>
                <Link href="/galerie">Galerie</Link>
              </li>
              <li>
                <Link href="/despre">Despre</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">Contact</h4>
            <address className="footer__address" itemScope itemType="https://schema.org/PostalAddress">
              <p>
                <span itemProp="streetAddress">Str. Libertății 62</span>
                <br />
                <span itemProp="addressLocality">Cățelu</span>,{' '}
                <span itemProp="postalCode">077105</span>
              </p>
              <p>
                <a href="tel:0765432706" itemProp="telephone">
                  0765432706
                </a>
              </p>
            </address>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">Program</h4>
            <div className="footer__hours" itemScope itemType="https://schema.org/OpeningHoursSpecification">
              <p>
                <strong>Luni - Vineri:</strong> 09:00 - 18:00
              </p>
              <p>
                <strong>Sâmbătă:</strong> 09:00 - 14:00
              </p>
              <p>
                <strong>Duminică:</strong> Închis
              </p>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Yap Detailing. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  )
}

