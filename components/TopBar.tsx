'use client'

import { useState, useEffect } from 'react'
import './TopBar.css'

// Export pentru a putea fi folosit în Header
export const useTopbarVisibility = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      // Topbar-ul este vizibil doar când ești sus de tot pe pagină (scrollY < 100)
      setIsVisible(currentScrollY < 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return isVisible
}

const topBarItems = [
  {
    type: 'address',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
    text: 'Str. Libertății 62, Cățelu 077105',
  },
  {
    type: 'hours',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
    text: 'Luni - Vineri: 09:00 - 18:00 | Sâmbătă: 09:00 - 14:00',
  },
  {
    type: 'phone',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
    text: '0765432706',
    link: 'tel:0765432706',
  },
]

export default function TopBar() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const isVisible = useTopbarVisibility()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % topBarItems.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`topbar ${!isVisible ? 'topbar--hidden' : ''}`}>
      <div className="container">
        <div className="topbar__content">
          {topBarItems.map((item, index) => (
            <div
              key={item.type}
              className={`topbar__item ${index === currentIndex ? 'topbar__item--active' : ''}`}
            >
              <span className="topbar__icon" aria-hidden="true">
                {item.icon}
              </span>
              {item.link ? (
                <a href={item.link} className="topbar__text">
                  {item.text}
                </a>
              ) : (
                <span className="topbar__text">{item.text}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

