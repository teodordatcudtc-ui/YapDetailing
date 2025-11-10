'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import './PageTransition.css'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 450)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      {isTransitioning && (
        <div className="page-transition" aria-hidden="true">
          <svg className="page-transition__mask" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <clipPath id="pageClip" clipPathUnits="objectBoundingBox">
                <path
                  className="page-transition__path"
                  d="M0,0 L0,1 L1,1 L1,0 Z"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      )}
      <main className={isTransitioning ? 'page-transition__content' : ''}>
        {children}
      </main>
    </>
  )
}

