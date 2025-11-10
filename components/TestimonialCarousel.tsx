'use client'

import { useState, useEffect, useRef } from 'react'
import './TestimonialCarousel.css'

interface Testimonial {
  name: string
  text: string
  rating: number
  service?: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Alexandru M.',
    text: 'Serviciu excepțional! Mașina mea arată ca nouă după ceramic coating. Echipa este foarte profesională și atentă la detalii.',
    rating: 5,
    service: 'Ceramic Coating'
  },
  {
    name: 'Maria P.',
    text: 'Am fost impresionată de rezultatul PPF-ului. Protecția este vizibilă și mașina mea este în siguranță. Recomand cu căldură!',
    rating: 5,
    service: 'PPF'
  },
  {
    name: 'Andrei D.',
    text: 'Detailing interior de top! Au făcut o treabă minuțioasă și au restaurat complet aspectul interiorului. Mulțumesc Yap Detailing!',
    rating: 5,
    service: 'Detailing Interior'
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (carouselRef.current) {
      observer.observe(carouselRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="testimonial-carousel" ref={carouselRef}>
      <div className="container">
        <h2 className="testimonial-carousel__title">Ce spun clienții noștri</h2>
        <div className="testimonial-carousel__wrapper">
          <button
            className="testimonial-carousel__arrow testimonial-carousel__arrow--prev"
            onClick={goToPrevious}
            aria-label="Testimonial anterior"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <div className="testimonial-carousel__container">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card ${index === currentIndex ? 'testimonial-card--active' : ''}`}
                style={{ '--index': index } as React.CSSProperties}
              >
                <div className="testimonial-card__rating">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="testimonial-card__star" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-label="Stea">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  ))}
                </div>
                <p className="testimonial-card__text">"{testimonial.text}"</p>
                <div className="testimonial-card__author">
                  <strong>{testimonial.name}</strong>
                  {testimonial.service && (
                    <span className="testimonial-card__service">{testimonial.service}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <button
            className="testimonial-carousel__arrow testimonial-carousel__arrow--next"
            onClick={goToNext}
            aria-label="Testimonial următor"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
          <div className="testimonial-carousel__dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonial-carousel__dot ${index === currentIndex ? 'testimonial-carousel__dot--active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Mergi la testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

