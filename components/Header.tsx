'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTopbarVisibility } from './TopBar'
import './Header.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const isTopbarVisible = useTopbarVisibility()
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setIsSticky(window.scrollY > 100)
      // Nu închide meniul la scroll pe mobil - meniul rămâne deschis
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Ajustează poziția meniului când header-ul se mută
    if (navRef.current && headerRef.current && isMenuOpen) {
      const headerRect = headerRef.current.getBoundingClientRect()
      const headerHeight = headerRect.height
      navRef.current.style.top = `${headerRect.bottom}px`
    }
  }, [isMenuOpen, isTopbarVisible, isSticky])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navItems = [
    { href: '/', label: 'Acasă' },
    { href: '/servicii', label: 'Servicii' },
    { href: '/galerie', label: 'Galerie' },
    { href: '/despre', label: 'Despre' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header ref={headerRef} className={`header ${isScrolled ? 'header--scrolled' : ''} ${isSticky ? 'header--sticky' : ''} ${!isTopbarVisible ? 'header--topbar-hidden' : ''}`}>
      <div className="container">
        <div className="header__content">
          <Link href="/" className="header__logo" onClick={closeMenu}>
            <span className="header__logo-text">Yap Detailing</span>
          </Link>
          
          <nav ref={navRef} className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`} aria-label="Navigare principală">
            <ul className="header__nav-list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`header__nav-link ${pathname === item.href ? 'header__nav-link--active' : ''}`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="tel:0765432706"
            className="header__cta"
            aria-label="Sună acum la 0765432706"
          >
            <span className="header__cta-text">Sună acum</span>
            <svg className="header__cta-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>

          <button
            className={`header__menu-toggle ${isMenuOpen ? 'header__menu-toggle--open' : ''}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Închide meniul' : 'Deschide meniul'}
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

