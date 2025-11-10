'use client'

import { useState } from 'react'
import './GalleryGrid.css'

type FilterType = 'all' | 'exterior' | 'interior' | 'ceramic' | 'ppf'

interface GalleryItem {
  id: string
  image: string
  category: FilterType
  title: string
  beforeImage?: string
}

const galleryItems: GalleryItem[] = [
  { id: '1', image: '/images/gallery/exterior-1.jpg', category: 'exterior', title: 'Detailing Exterior' },
  { id: '2', image: '/images/gallery/interior-1.jpg', category: 'interior', title: 'Detailing Interior', beforeImage: '/images/gallery/interior-1-before.jpg' },
  { id: '3', image: '/images/gallery/ceramic-1.jpg', category: 'ceramic', title: 'Ceramic Coating' },
  { id: '4', image: '/images/gallery/ppf-1.jpg', category: 'ppf', title: 'PPF Application' },
  { id: '5', image: '/images/gallery/exterior-2.jpg', category: 'exterior', title: 'Polish & Correction' },
  { id: '6', image: '/images/gallery/interior-2.jpg', category: 'interior', title: 'Interior Restoration' },
  { id: '7', image: '/images/gallery/ceramic-2.jpg', category: 'ceramic', title: 'Ceramic Coating Premium' },
  { id: '8', image: '/images/gallery/ppf-2.jpg', category: 'ppf', title: 'Full PPF Protection' },
  { id: '9', image: '/images/gallery/exterior-3.jpg', category: 'exterior', title: 'Complete Detailing' },
]

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  const hasImage = (imagePath: string) => {
    return imagePath && !imagePath.includes('placeholder')
  }

  const filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'Toate' },
    { value: 'exterior', label: 'Exterior' },
    { value: 'interior', label: 'Interior' },
    { value: 'ceramic', label: 'Ceramic' },
    { value: 'ppf', label: 'PPF' },
  ]

  return (
    <>
      <div className="gallery-filters">
        {filters.map((filter) => (
          <button
            key={filter.value}
            className={`gallery-filter ${activeFilter === filter.value ? 'gallery-filter--active' : ''}`}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="gallery-item"
            onClick={() => setLightboxImage(item.image)}
          >
            <div className="gallery-item__image-wrapper">
              {hasImage(item.image) ? (
                <div
                  className="gallery-item__image"
                  style={{ backgroundImage: `url(${item.image})` }}
                  aria-label={item.title}
                />
              ) : (
                <div className="gallery-item__image gallery-item__image--placeholder">
                  <div className="gallery-item__placeholder-pattern"></div>
                  <svg className="gallery-item__placeholder-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" strokeDasharray="2 2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
              )}
              <div className="gallery-item__overlay">
                <svg className="gallery-item__icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="M21 21l-4.35-4.35"></path>
                </svg>
                {item.beforeImage && <span className="gallery-item__badge">Before/After</span>}
              </div>
            </div>
            <h3 className="gallery-item__title">{item.title}</h3>
          </div>
        ))}
      </div>

      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <button className="lightbox__close" aria-label="Închide">×</button>
          <div className="lightbox__image-wrapper">
            <div
              className="lightbox__image"
              style={{ backgroundImage: `url(${lightboxImage})` }}
            />
          </div>
        </div>
      )}
    </>
  )
}

