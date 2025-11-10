'use client'

import { useState, useRef, useEffect } from 'react'
import './BeforeAfterSlider.css'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  alt?: string
}

export default function BeforeAfterSlider({ beforeImage, afterImage, alt = 'Before and after' }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    handleMove(e.clientX)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX)
    }
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging])

  return (
    <div
      className="before-after-slider"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onTouchMove={handleTouchMove}
      onTouchStart={(e) => {
        if (e.touches.length > 0) {
          handleMove(e.touches[0].clientX)
        }
      }}
    >
      <div className="before-after-slider__container">
        <div className="before-after-slider__image-wrapper">
          <div
            className="before-after-slider__image before-after-slider__image--before"
            style={{ backgroundImage: `url(${beforeImage})` }}
            aria-label={`${alt} - înainte`}
          />
          <div
            className="before-after-slider__image before-after-slider__image--after"
            style={{
              backgroundImage: `url(${afterImage})`,
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            }}
            aria-label={`${alt} - după`}
          />
        </div>
        <div
          className="before-after-slider__divider"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="before-after-slider__handle">
            <div className="before-after-slider__handle-icon"></div>
          </div>
        </div>
        <div className="before-after-slider__labels">
          <span className="before-after-slider__label before-after-slider__label--before">Înainte</span>
          <span className="before-after-slider__label before-after-slider__label--after">După</span>
        </div>
      </div>
    </div>
  )
}

