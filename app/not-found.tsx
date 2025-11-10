import Link from 'next/link'
import './not-found.css'

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="container">
        <div className="not-found__content">
          <h1 className="not-found__title">404</h1>
          <h2 className="not-found__subtitle">Pagina nu a fost găsită</h2>
          <p className="not-found__description">
            Pagina pe care o cauți nu există sau a fost mutată.
          </p>
          <Link href="/" className="not-found__button">
            Înapoi la Acasă
          </Link>
        </div>
      </div>
    </div>
  )
}

