'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import './StickyCTA.css'

export default function StickyCTA() {
  const [showBadge, setShowBadge] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBadge(true)
    }, 5000)

    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="sticky-cta">
      <Link
        href="/contact"
        className="sticky-cta__button"
        aria-label="Programează acum"
      >
        <svg className="sticky-cta__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        <span className="sticky-cta__text">Programează acum</span>
      </Link>
      <a
        href="tel:0765432706"
        className="sticky-cta__phone"
        aria-label="Sună la 0765432706"
      >
        <svg className="sticky-cta__phone-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </a>
      {showBadge && (
        <div className="sticky-cta__badge" role="status" aria-live="polite">
          Rezervă în 60s
        </div>
      )}
    </div>
  )
}

