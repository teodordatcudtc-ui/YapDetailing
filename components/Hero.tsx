'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useTopbarVisibility } from './TopBar'
import './Hero.css'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const isTopbarVisible = useTopbarVisibility()

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current && heroRef.current) {
        const scrolled = window.scrollY
        const rate = scrolled * 0.5
        imageRef.current.style.transform = `translateY(${rate}px)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className={`hero ${!isTopbarVisible ? 'hero--topbar-hidden' : ''}`} ref={heroRef}>
      <div className="hero__image-wrapper" ref={imageRef}>
        <div 
          className="hero__image" 
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=85')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          aria-hidden="true"
        />
        <div className="hero__overlay"></div>
        <div className="hero__decoration hero__decoration--1"></div>
        <div className="hero__decoration hero__decoration--2"></div>
      </div>
      
      <div className="container">
        <div className="hero__content">
          <div className="hero__badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span>Servicii Premium</span>
          </div>
          <h1 className="hero__title">
            Yap Detailing
            <span className="hero__subtitle">Redefinim strălucirea mașinii tale</span>
          </h1>
          <p className="hero__description">
            Protecție ceramică, PPF și detailing interior premium în Cățelu.
          </p>
              <div className="hero__stats">
                <div className="hero__stat">
                  <span className="hero__stat-number">500+</span>
                  <span className="hero__stat-label">Mașini transformate</span>
                </div>
                <div className="hero__stat">
                  <span className="hero__stat-number">10+</span>
                  <span className="hero__stat-label">Ani experiență</span>
                </div>
              </div>
          <div className="hero__cta-group">
            <Link href="/contact" className="hero__cta hero__cta--primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Programează acum
            </Link>
            <Link href="/galerie" className="hero__cta hero__cta--secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              Vezi portofoliu
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

