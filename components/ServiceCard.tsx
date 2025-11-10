'use client'

import Link from 'next/link'
import './ServiceCard.css'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  href: string
  features?: string[]
}

export default function ServiceCard({ title, description, image, href, features }: ServiceCardProps) {
  const hasImage = image && !image.includes('placeholder')
  
  return (
    <Link href={href} className="service-card">
      <div className="service-card__image-wrapper">
        {hasImage ? (
          <div
            className="service-card__image"
            style={{ backgroundImage: `url(${image})` }}
            aria-hidden="true"
          />
        ) : (
          <div className="service-card__image service-card__image--placeholder">
            <div className="service-card__placeholder-pattern"></div>
            <svg className="service-card__placeholder-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" strokeDasharray="2 2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
          </div>
        )}
        <div className="service-card__overlay"></div>
      </div>
      <div className="service-card__content">
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__description">{description}</p>
        {features && features.length > 0 && (
          <ul className="service-card__features">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}
        <span className="service-card__cta">
          Află mai multe
          <span className="service-card__cta-arrow" aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  )
}

